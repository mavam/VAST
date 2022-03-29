from invoke import task, Context, Exit, Program, Collection
import boto3
import botocore.client
import dynaconf
import time
import base64
import json
import sys
import io

conf = dynaconf.Dynaconf(
    load_dotenv=True,
    envvar_prefix=False,
    validators=[
        dynaconf.Validator("VAST_AWS_REGION", must_exist=True),
        dynaconf.Validator("VAST_CIDR", must_exist=True),
        dynaconf.Validator("VAST_PEERED_VPC_ID", must_exist=True),
        dynaconf.Validator("VAST_LAMBDA_IMAGE"),  # usually resolved lazily
        dynaconf.Validator("VAST_VERSION"),  # usually resolved lazily
        dynaconf.Validator("VAST_SERVER_STORAGE_TYPE", default="EFS"),
    ],
)

##  Aliases

AWS_REGION = conf.VAST_AWS_REGION
EXIT_CODE_VAST_SERVER_NOT_RUNNING = 8


## Helper functions


def aws(service):
    # timeout set to 1000 to be larger than lambda max duration
    config = botocore.client.Config(retries={"max_attempts": 0}, read_timeout=1000)
    return boto3.client(service, region_name=AWS_REGION, config=config)


def terraform_output(c: Context, step, key) -> str:
    return c.run(f"terraform -chdir={step} output --raw {key}", hide="out").stdout


def VAST_LAMBDA_IMAGE(c: Context) -> str:
    """If VAST_LAMBDA_IMAGE not defined, use the one tagged as "current" """
    if "VAST_LAMBDA_IMAGE" in conf:
        return conf.VAST_LAMBDA_IMAGE
    repo_arn = terraform_output(c, "step-1", "vast_lambda_repository_arn")
    tags = aws("ecr").list_tags_for_resource(resourceArn=repo_arn)["tags"]
    current = next((tag["Value"] for tag in tags if tag["Key"] == "current"))
    return current


def VAST_VERSION(c: Context):
    """If VAST_VERSION not defined, use latest release"""
    if "VAST_VERSION" in conf:
        return conf.VAST_VERSION
    version = c.run(
        "git describe --abbrev=0 --match='v[0-9]*' --exclude='*-rc*'", hide="out"
    ).stdout.strip()
    return version


def step_1_variables() -> dict:
    return {
        "TF_VAR_region_name": AWS_REGION,
    }


def step_2_variables(c: Context) -> dict:
    return {
        "TF_VAR_vast_version": VAST_VERSION(c),
        "TF_VAR_vast_server_storage_type": conf.VAST_SERVER_STORAGE_TYPE,
        "TF_VAR_peered_vpc_id": conf.VAST_PEERED_VPC_ID,
        "TF_VAR_vast_cidr": conf.VAST_CIDR,
        "TF_VAR_region_name": AWS_REGION,
        "TF_VAR_vast_lambda_image": VAST_LAMBDA_IMAGE(c),
    }


def auto_app_fmt(val: bool) -> str:
    if val:
        return "-auto-approve"
    else:
        return ""


## Tasks


@task
def docker_login(c):
    """Login the Docker client to ECR"""
    token = aws("ecr").get_authorization_token()
    user_pass = (
        base64.b64decode(token["authorizationData"][0]["authorizationToken"])
        .decode()
        .split(":")
    )
    registry = token["authorizationData"][0]["proxyEndpoint"]
    c.run(
        f"docker login --username {user_pass[0]} --password-stdin {registry}",
        in_stream=io.StringIO(user_pass[1]),
    )


@task
def deploy_step_1(c, auto_approve=False):
    """Deploy only step 1 of the stack"""
    env = step_1_variables()
    c.run('terraform -chdir="step-1" init', env=env)
    c.run(
        f'terraform -chdir="step-1" apply  {auto_app_fmt(auto_approve)}',
        env=env,
        pty=True,
    )


@task
def lambda_image(c):
    """Build and push the lambda image, fails if step 1 is not deployed"""
    image_url = terraform_output(c, "step-1", "vast_lambda_repository_url")
    image_tag = int(time.time())
    c.run(
        f"docker build --no-cache --build-arg VAST_VERSION={VAST_VERSION(c)} -f docker/lambda.Dockerfile -t {image_url}:{image_tag} ./docker"
    )
    c.run(f"docker push {image_url}:{image_tag}")
    image_arn = terraform_output(c, "step-1", "vast_lambda_repository_arn")
    aws("ecr").tag_resource(
        resourceArn=image_arn,
        tags=[{"Key": "current", "Value": f"{image_url}:{image_tag}"}],
    )


@task
def deploy_step_2(c, auto_approve=False):
    """Deploy only step 2 of the stack. Step 1 should be deployed first"""
    env = step_2_variables(c)
    c.run('terraform -chdir="step-2" init', env=env)
    c.run(
        f'terraform -chdir="step-2" apply {auto_app_fmt(auto_approve)}',
        env=env,
        pty=True,
    )


@task
def deploy(c, auto_approve=False):
    """One liner build and deploy of the stack to AWS"""
    deploy_step_1(c, auto_approve)
    docker_login(c)
    lambda_image(c)
    deploy_step_2(c, auto_approve)


@task
def destroy_step_1(c, auto_approve=False):
    """Destroy resources of the step 1 only. Step 2 should be destroyed first"""
    env = step_1_variables()
    c.run(
        f'terraform -chdir="step-1" destroy {auto_app_fmt(auto_approve)}',
        env=env,
        pty=True,
    )


@task
def destroy_step_2(c, auto_approve=False):
    """Destroy resources of the step 2 only"""
    env = step_2_variables(c)
    c.run(
        f'terraform -chdir="step-2" destroy {auto_app_fmt(auto_approve)}',
        env=env,
        pty=True,
    )


@task
def run_vast_task(c):
    """Start a new VAST server task on Fargate. DANGER: might lead to inconsistant state"""
    cluster = terraform_output(c, "step-2", "fargate_cluster_name")
    subnet = terraform_output(c, "step-2", "ids_appliances_subnet_id")
    sg = terraform_output(c, "step-2", "vast_security_group")
    task_def = terraform_output(c, "step-2", "vast_task_definition")
    task_res = aws("ecs").run_task(
        cluster=cluster,
        count=1,
        enableECSManagedTags=True,
        enableExecuteCommand=True,
        propagateTags="TASK_DEFINITION",
        launchType="FARGATE",
        networkConfiguration={
            "awsvpcConfiguration": {
                "subnets": [subnet],
                "securityGroups": [sg],
                "assignPublicIp": "DISABLED",
            }
        },
        taskDefinition=task_def,
    )
    task_arn = task_res["tasks"][0]["taskArn"].split("/")[-1]
    print(f"Started task {task_arn}")


@task(autoprint=True)
def get_vast_server(c):
    """Get the task id of the VAST server"""
    cluster = terraform_output(c, "step-2", "fargate_cluster_name")
    family = terraform_output(c, "step-2", "vast_task_family")
    task_res = aws("ecs").list_tasks(family=family, cluster=cluster)
    nb_vast_tasks = len(task_res["taskArns"])
    if nb_vast_tasks == 0:
        raise Exit("No VAST server running", EXIT_CODE_VAST_SERVER_NOT_RUNNING)
    if nb_vast_tasks > 1:
        raise Exit(f"{nb_vast_tasks} VAST server running", 1)

    task_id = task_res["taskArns"][0].split("/")[-1]
    return task_id


@task(autoprint=True)
def describe_vast_server(c):
    """Get a complete description of the VAST server"""
    task_id = get_vast_server(c)
    cluster = terraform_output(c, "step-2", "fargate_cluster_name")
    task_res = aws("ecs").describe_tasks(cluster=cluster, tasks=[task_id])
    meta = {
        "task_id": task_id,
        "ip": task_res["tasks"][0]["containers"][0]["networkInterfaces"][0][
            "privateIpv4Address"
        ],
        "runtime_id": task_res["tasks"][0]["containers"][0]["runtimeId"],
    }
    return meta


@task
def start_vast_server(c):
    """Start a VAST server instance as an AWS Fargate task. Noop if a VAST server is already running"""
    try:
        get_vast_server(c)
    except Exit as e:
        if e.code == EXIT_CODE_VAST_SERVER_NOT_RUNNING:
            run_vast_task(c)


@task
def restart_vast_server(c):
    """Stops the running VAST server Fargate task and start a new one"""
    try:
        task_id = get_vast_server(c)
        cluster = terraform_output(c, "step-2", "fargate_cluster_name")
        aws("ecs").stop_task(task=task_id, cluster=cluster)
        print(f"Stopped task {task_id}")
    except Exit as e:
        if e.code != EXIT_CODE_VAST_SERVER_NOT_RUNNING:
            raise e
    start_vast_server(c)


@task(autoprint=True)
def list_all_tasks(c):
    """List the ids of all tasks running on the ECS cluster"""
    cluster = terraform_output(c, "step-2", "fargate_cluster_name")
    task_res = aws("ecs").list_tasks(cluster=cluster)
    task_ids = [task.split("/")[-1] for task in task_res["taskArns"]]
    return task_ids


@task
def stop_all_tasks(c):
    """Stop all running tasks on the ECS cluster created by Terraform"""
    task_ids = list_all_tasks(c)
    cluster = terraform_output(c, "step-2", "fargate_cluster_name")
    for task_id in task_ids:
        aws("ecs").stop_task(task=task_id, cluster=cluster)
        print(f"Stopped task {task_id}")


@task(autoprint=True)
def run_lambda(c, cmd):
    """Run ad-hoc VAST client commands from AWS Lambda"""
    lambda_name = terraform_output(c, "step-2", "vast_lambda_name")
    task_ip = describe_vast_server(c)["ip"]
    cmd_b64 = base64.b64encode(cmd.encode()).decode()
    lambda_res = aws("lambda").invoke(
        FunctionName=lambda_name,
        Payload=json.dumps({"cmd": cmd_b64, "host": f"{task_ip}:42000"}).encode(),
        InvocationType="RequestResponse",
    )
    if "FunctionError" in lambda_res:
        mess = f'{lambda_res["FunctionError"]}: {lambda_res["Payload"].read()}'
        raise Exit(message=mess, code=1)
    res = json.loads(lambda_res["Payload"].read())["result"]
    return res


@task
def execute_command(c, cmd="/bin/bash"):
    """Run ad-hoc or interactive commands from the VAST server Fargate task"""
    task_id = get_vast_server(c)
    cluster = terraform_output(c, "step-2", "fargate_cluster_name")
    # if we are not running the default interactive shell, encode the command to avoid escaping issues
    if cmd != "/bin/bash":
        cmd = f"/bin/bash -c 'echo {base64.b64encode(cmd.encode()).decode()} | base64 -d | /bin/bash'"
    # we use the CLI here because boto does not know how to use the session-manager-plugin
    c.run(
        f"""aws ecs execute-command \
		--cluster {cluster} \
		--task {task_id} \
		--interactive \
		--command "{cmd}" \
        --region {AWS_REGION} """,
        pty=True,
    )


@task
def destroy(c, auto_approve=False):
    """Tear down the entire terraform stack"""
    try:
        stop_all_tasks(c)
    except Exception as e:
        print(str(e))
        print("Failed to stop tasks. Continuing destruction...")
    try:
        destroy_step_2(c, auto_approve)
    except Exception as e:
        print(str(e))
        print("Failed to destroy step 2. Continuing destruction...")
    destroy_step_1(c, auto_approve)


## Bootstrap

if __name__ == "__main__":
    collection = Collection.from_module(sys.modules[__name__])
    program = Program(
        binary="./vast-cloud",
        namespace=collection,
        version="0.1.0",
    )
    program.run()
