"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48427],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>y});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),g=i,y=m["".concat(p,".").concat(g)]||m[g]||c[g]||r;return a?t.createElement(y,o(o({ref:n},d),{},{components:a})):t.createElement(y,o({ref:n},d))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},67120:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>u,default:()=>C,frontMatter:()=>y,metadata:()=>h,toc:()=>w});var t=a(15680),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,a)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,m=(e,n)=>{for(var a in n||(n={}))p.call(n,a)&&d(e,a,n[a]);if(l)for(var a of l(n))s.call(n,a)&&d(e,a,n[a]);return e},c=(e,n)=>r(e,o(n)),g=(e,n)=>{var a={};for(var t in e)p.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&s.call(e,t)&&(a[t]=e[t]);return a};const y={},u="Platform CLI",h={unversionedId:"platform-cli",id:"version-v4.20/platform-cli",title:"Platform CLI",description:"The Tenzir Platform CLI allows users to interact with the Tenzir Platform from the command-line",source:"@site/versioned_docs/version-v4.20/platform-cli.md",sourceDirName:".",slug:"/platform-cli",permalink:"/v4.20/platform-cli",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/platform-cli.md",tags:[],version:"v4.20",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python Library",permalink:"/v4.20/python-library"},next:{title:"Glossary",permalink:"/v4.20/glossary"}},f={},w=[{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"<code>&lt;workspace_id&gt;</code>",id:"workspace_id",level:4},{value:"Manage Nodes",id:"manage-nodes",level:2},{value:"Synopsis",id:"synopsis-1",level:3},{value:"Description",id:"description-1",level:3},{value:"<code>&lt;node_id&gt;</code>",id:"node_id",level:4},{value:"<code>&lt;node_name&gt;</code>",id:"node_name",level:4},{value:"<code>&lt;container_image&gt;</code>",id:"container_image",level:4},{value:"Manage Workspaces",id:"manage-workspaces",level:2},{value:"Synopsis",id:"synopsis-2",level:3},{value:"Description",id:"description-2",level:3},{value:"<code>&lt;owner_namespace&gt;</code>",id:"owner_namespace",level:4},{value:"<code>&lt;owner_id&gt;</code>",id:"owner_id",level:4},{value:"<code>--name &lt;workspace_name&gt;</code>",id:"--name-workspace_name",level:4},{value:"<code>&lt;workspace_id&gt;</code>",id:"workspace_id-1",level:4},{value:"Configure Access Rules",id:"configure-access-rules",level:2},{value:"Synopsis",id:"synopsis-3",level:3},{value:"Description",id:"description-3",level:3}],N={toc:w},v="wrapper";function C(e){var n=e,{components:a}=n,i=g(n,["components"]);return(0,t.yg)(v,c(m(m({},N),i),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",m({},{id:"platform-cli"}),"Platform CLI"),(0,t.yg)("p",null,"The ",(0,t.yg)("em",{parentName:"p"},"Tenzir Platform CLI")," allows users to interact with the ",(0,t.yg)("em",{parentName:"p"},"Tenzir Platform")," from the command-line\nto manage their workspaces and nodes."),(0,t.yg)("h2",m({},{id:"installation"}),"Installation"),(0,t.yg)("p",null,"Install the ",(0,t.yg)("a",m({parentName:"p"},{href:"https://pypi.org/project/tenzir-platform/"}),(0,t.yg)("inlineCode",{parentName:"a"},"tenzir-platform")),"\npackage from PyPI."),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#FFA657"}}),"pip"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}})," install"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-platform"))))),(0,t.yg)("h2",m({},{id:"authentication"}),"Authentication"),(0,t.yg)("h3",m({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"tenzir-platform auth login\ntenzir-platform workspace list\ntenzir-platform workspace select <workspace_id>\n")),(0,t.yg)("h3",m({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform auth login")," command authenticates the current user."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform workspace list")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform workspace select"),"\ncommands show workspaces available to the authenticated user and select one,\nrespectively."),(0,t.yg)("h4",m({},{id:"workspace_id"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<workspace_id>")),(0,t.yg)("p",null,"The unique ID of the workspace, as shown in ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform workspace list"),"."),(0,t.yg)("h2",m({},{id:"manage-nodes"}),"Manage Nodes"),(0,t.yg)("h3",m({},{id:"synopsis-1"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"tenzir-platform node list\ntenzir-platform node ping <node_id>\ntenzir-platform node create [--name <node_name>]\ntenzir-platform node delete <node_id>\ntenzir-platform node run [--name <node_name>] [--image <container_image>]\n")),(0,t.yg)("h3",m({},{id:"description-1"}),"Description"),(0,t.yg)("p",null,"The following commands interact with the selected workspace. See ",(0,t.yg)("a",m({parentName:"p"},{href:"#authentication"}),"Authentication"),"\nabove for how to select a workspace:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir-platform node list")," lists all nodes in the selected workspace,\nincluding their ID, name, and connection status."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir-platform node ping")," pings the specified node."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir-platform node create")," registers a new node at the platform so that it\ncan be connected to the platform. Note that this neither starts a new node nor\nconfigures one, it just creates a new API key that a node can use to connect\nto the platform with."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir-platform node delete")," removes a node from the platform. Note that this\ndoes not stop the node, it just removes it from the platform."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir-platform node run")," creates and registers an ad-hoc node, and starts it\non the local host. Requires Docker Compose to be available.\nThe node is temporary and will be deleted when the ",(0,t.yg)("inlineCode",{parentName:"li"},"run")," command is stopped.")),(0,t.yg)("h4",m({},{id:"node_id"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<node_id>")),(0,t.yg)("p",null,"The unique ID of the node, as shown in ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform node list"),"."),(0,t.yg)("h4",m({},{id:"node_name"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<node_name>")),(0,t.yg)("p",null,"The name of the node as shown in the app."),(0,t.yg)("h4",m({},{id:"container_image"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<container_image>")),(0,t.yg)("p",null,"The Docker image to use for ad-hoc created node. We recommend using one of the\nfollowing images:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir/tenzir:v4.11.2")," to use the specified release."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir/tenzir:latest")," to use the last release."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"tenzir/tenzir:main")," to use the currnet development version.")),(0,t.yg)("h2",m({},{id:"manage-workspaces"}),"Manage Workspaces"),(0,t.yg)("admonition",m({},{title:"On-Premise Setup Required",type:"warning"}),(0,t.yg)("p",{parentName:"admonition"},"This functionality of the CLI can only be used in combination\nwith an on-premise platform deployment, which is available to users\nof the ",(0,t.yg)("a",m({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Sovereign Edition"),".")),(0,t.yg)("p",null,"These CLI commands are only available to local platform administrators.\nThe ",(0,t.yg)("inlineCode",{parentName:"p"},"TENZIR_PLATFORM_OIDC_ADMIN_RULES")," variable described\n",(0,t.yg)("a",m({parentName:"p"},{href:"installation/deploy-the-platform#identity-provider-idp"}),"here")," is used\nto define who is an administrator in your platform deployment."),(0,t.yg)("h3",m({},{id:"synopsis-2"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"tenzir-platform admin list-global-workspaces\ntenzir-platform admin create-workspace <owner_namespace> <owner_id> [--name <workspace_name>]\ntenzir-platform admin delete-workspace <workspace_id>\n")),(0,t.yg)("h3",m({},{id:"description-2"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform workspace admin list-global-workspaces"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform\nadmin create-workspace"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin delete-workspace")," commands\nlist, create, or delete workspaces, respectively."),(0,t.yg)("h4",m({},{id:"owner_namespace"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<owner_namespace>")),(0,t.yg)("p",null,"Either ",(0,t.yg)("inlineCode",{parentName:"p"},"user")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"organization"),", depending on whether the workspace is\nassociated with a user or an organization."),(0,t.yg)("p",null,"The selected namespace will determine the ",(0,t.yg)("em",{parentName:"p"},"default")," access rules for the\nworkspace:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"For a user workspace, a single access rule will be created that allows\naccess to the user whose user id matches the given ",(0,t.yg)("inlineCode",{parentName:"li"},"owner_id")),(0,t.yg)("li",{parentName:"ul"},"For an organization workspace, no rules will be created by default and\nthey have to be manually added using the ",(0,t.yg)("inlineCode",{parentName:"li"},"add-auth-rule")," subcommand\ndescribed below.")),(0,t.yg)("h4",m({},{id:"owner_id"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<owner_id>")),(0,t.yg)("p",null,"The unique ID of the workspace owner:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"If ",(0,t.yg)("inlineCode",{parentName:"li"},"<owner_namespace>")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"user"),", then this matches the user's ",(0,t.yg)("inlineCode",{parentName:"li"},"sub")," claim in\nthe OIDC token."),(0,t.yg)("li",{parentName:"ul"},"If ",(0,t.yg)("inlineCode",{parentName:"li"},"<owner_namespace>")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"organization"),", then this is an arbitrary string\nuniquely identifiying the organization the workspace belongs to.")),(0,t.yg)("h4",m({},{id:"--name-workspace_name"}),(0,t.yg)("inlineCode",{parentName:"h4"},"--name <workspace_name>")),(0,t.yg)("p",null,"The name of the workspace as shown in the app."),(0,t.yg)("h4",m({},{id:"workspace_id-1"}),(0,t.yg)("inlineCode",{parentName:"h4"},"<workspace_id>")),(0,t.yg)("p",null,"The unique ID of the workspace, as shown in ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform workspace list")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin list-global-workspaces"),"."),(0,t.yg)("h2",m({},{id:"configure-access-rules"}),"Configure Access Rules"),(0,t.yg)("admonition",m({},{title:"On-Premise Setup Required",type:"warning"}),(0,t.yg)("p",{parentName:"admonition"},"This functionality of the CLI can only be used in combination\nwith an on-premise platform deployment, which is available to users\nof the ",(0,t.yg)("a",m({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Sovereign Edition"),".")),(0,t.yg)("p",null,"These CLI commands are only available to local platform administrators.\nThe ",(0,t.yg)("inlineCode",{parentName:"p"},"TENZIR_PLATFORM_OIDC_ADMIN_RULES")," variable described\n",(0,t.yg)("a",m({parentName:"p"},{href:"installation/deploy-the-platform#identity-provider-idp"}),"here")," is used\nto define who is an administrator in your platform deployment."),(0,t.yg)("h3",m({},{id:"synopsis-3"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"tenzir-platform admin list-auth-rules <workspace_id>\ntenzir-platform admin add-auth-rule [--dry-run]\n    email-domain <workspace_id> <connection> <domain>\ntenzir-platform admin add-auth-rule [--dry-run]\n    organization-membership <workspace_id> <connection> <organization_claim> <organization>\ntenzir-platform admin add-auth-rule [--dry-run]\n    organization-role <workspace_id> <connection> <roles_claim> <role> <organization_claim> <organization>\ntenzir-platform admin add-auth-rule [--dry-run]\n    user <workspace_id> <user_id>\ntenzir-platform admin delete-auth-rule <workspace_id> <auth_rule_index>\n")),(0,t.yg)("h3",m({},{id:"description-3"}),"Description"),(0,t.yg)("p",null,"Users with admin permissions can additionally use the ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin\nlist-auth-rules"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform\nadmin delete-auth-rule")," commands to list, create, or delete authentication rules\nfor all users, respectively."),(0,t.yg)("p",null,"Authentication rules allow users to access the workspace with the provided\n",(0,t.yg)("inlineCode",{parentName:"p"},"<workspace_id>")," if the user's ",(0,t.yg)("inlineCode",{parentName:"p"},"id_token")," matches the configured rule. Users\nhave access to a workspace if any configured rule allows access. The following\nrules exist:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Email Suffix Rule"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule email-domain"),"\nallows access if the ",(0,t.yg)("inlineCode",{parentName:"p"},"id_token")," contains a field ",(0,t.yg)("inlineCode",{parentName:"p"},"connection")," that exactly\nmatches the provided ",(0,t.yg)("inlineCode",{parentName:"p"},"<connection>")," and a field ",(0,t.yg)("inlineCode",{parentName:"p"},"email")," that ends with the\nconfigured ",(0,t.yg)("inlineCode",{parentName:"p"},"<domain>"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Organization Membership"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule\norganization-membership")," allows\naccess if the ",(0,t.yg)("inlineCode",{parentName:"p"},"id_token")," contains a field ",(0,t.yg)("inlineCode",{parentName:"p"},"connection")," that exactly matches the\nprovided ",(0,t.yg)("inlineCode",{parentName:"p"},"<connection>")," and a field ",(0,t.yg)("inlineCode",{parentName:"p"},"<organization_claim>")," that exactly matches\nthe provided ",(0,t.yg)("inlineCode",{parentName:"p"},"<organization>"),"."),(0,t.yg)("p",{parentName:"li"},"Note that the ",(0,t.yg)("inlineCode",{parentName:"p"},"<organization_claim>")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"<organization>")," can be freely\nchosen, so this rule can also be repurposed for generic claims that are not\nnecessarily related to organizations.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Organization Role Rule"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule\norganization-role")," allows access if the ",(0,t.yg)("inlineCode",{parentName:"p"},"id_token")," contains a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"connection")," that exactly matches the provided ",(0,t.yg)("inlineCode",{parentName:"p"},"<connection>"),", a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"<organization_claim>")," that exactly matches the provided ",(0,t.yg)("inlineCode",{parentName:"p"},"<organization>"),", and\na field ",(0,t.yg)("inlineCode",{parentName:"p"},"<roles_claim>")," that must be a list containing a value exactly\nmatching ",(0,t.yg)("inlineCode",{parentName:"p"},"<role>"),"."),(0,t.yg)("p",{parentName:"li"},"We recommend using organization role rules to check if a user has a specific\nrole with an organization.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"User Rule"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule user")," allows access if the\n",(0,t.yg)("inlineCode",{parentName:"p"},"id_token")," contains a field ",(0,t.yg)("inlineCode",{parentName:"p"},"sub")," that exactly matches the provided\n",(0,t.yg)("inlineCode",{parentName:"p"},"<user_id>"),"."))))}C.isMDXComponent=!0}}]);