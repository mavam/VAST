"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47428],{78052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>T});var i=t(3905),o=t(14637),a=t(79505),s=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&f(e,t,n[t]);if(d)for(var t of d(n))u.call(n,t)&&f(e,t,n[t]);return e},p=(e,n)=>r(e,l(n)),g=(e,n)=>{var t={};for(var i in e)c.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&d)for(var i of d(e))n.indexOf(i)<0&&u.call(e,i)&&(t[i]=e[i]);return t};const m={},b="Configuration",v={unversionedId:"configuration",id:"version-Tenzir v4.5/configuration",title:"Configuration",description:"Tenzir reads a configuration file at startup. Here is an",source:"@site/versioned_docs/version-Tenzir v4.5/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/Tenzir v4.5/configuration",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/configuration.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python Library",permalink:"/Tenzir v4.5/python"},next:{title:"Glossary",permalink:"/Tenzir v4.5/glossary"}},y={},T=[],w={toc:T},z="wrapper";function k(e){var n=e,{components:t}=n,s=g(n,["components"]);return(0,i.kt)(z,p(h(h({},w),s),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",h({},{id:"configuration"}),"Configuration"),(0,i.kt)("p",null,"Tenzir ",(0,i.kt)("a",h({parentName:"p"},{href:"/Tenzir%20v4.5/command-line"}),"reads a configuration file at startup"),". Here is an\nexample configuration that you can adapt to your needs."),(0,i.kt)(o.Z,{language:"yaml",mdxType:"CodeBlock"},a.Z))}k.isMDXComponent=!0},79505:(e,n,t)=>{t.d(n,{Z:()=>i});const i='# This is an example configuration file for Tenzir that shows all available\n# options. Options in angle brackets have their default value determined at\n# runtime.\n\n# Options that concern Tenzir.\ntenzir:\n  # The host and port to listen at and connect to.\n  endpoint: "localhost:5158"\n\n  # The timeout for connecting to a Tenzir server. Set to 0 seconds to wait\n  # indefinitely.\n  connection-timeout: 5m\n\n  # The delay between two connection attempts. Set to 0s to try connecting\n  # without retries.\n  connection-retry-delay: 3s\n\n  # The file system path used for persistent state.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $STATE_DIRECTORY\n  #   - $PWD/tenzir.db\n  #state-directory:\n\n  # The file system path used for persistent state.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $CACHE_DIRECTORY\n  #   - $XDG_CACHE_HOME/tenzir\n  #   - $HOME/.cache/tenzir (Linux)\n  #   - $HOME/Library/Caches/tenzir (macOS)\n  #cache-directory:\n\n  # The file system path used for persistent state.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $CACHE_DIRECTORY\n  #   - $XDG_CACHE_HOME\n  #   - $XDG_HOME_DIR/.cache/tenzir (linux) or $XDG_HOME_DIR/Libraries/caches/tenzir (mac)\n  #   - $HOME/.cache/tenzir (linux) or $HOME/Libraries/caches/tenzir (mac)\n  #   - $TEMPORARY_DIRECTORY/tenzir/cache\n  # To determine $TEMPORARY_DIRECTORY, the values of TMPDIR, TMP, TEMP, TEMPDIR are\n  # checked in that order, and as a last resort "/tmp" is used.\n  #cache-directory:\n\n  # The file system path used for log files.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $LOGS_DIRECTORY/server.log\n  #   - <state-directory>/server.log\n  #log-file:\n\n  # The file system path used for client log files relative to the current\n  # working directory of the client. Note that this is disabled by default.\n  # If not specified no log files are written for clients at all.\n  client-log-file: "client.log"\n\n  # Format for printing individual log entries to the log-file.\n  # For a list of valid format specifiers, see spdlog format specification\n  # at https://github.com/gabime/spdlog/wiki/3.-Custom-formatting.\n  file-format: "[%Y-%m-%dT%T.%e%z] [%n] [%l] [%s:%#] %v"\n\n  # Configures the minimum severity of messages written to the log file.\n  # Possible values: quiet, error, warning, info, verbose, debug, trace.\n  # File logging is only available for commands that start a node (e.g.,\n  # tenzir-node). The levels above \'verbose\' are usually not available in\n  # release builds.\n  file-verbosity: debug\n\n  # Whether to enable automatic log rotation. If set to false, a new log file\n  # will be created when the size of the current log file exceeds 10 MiB.\n  disable-log-rotation: false\n\n  # The size limit when a log file should be rotated.\n  log-rotation-threshold: 10MiB\n\n  # Maximum number of log messages in the logger queue.\n  log-queue-size: 1000000\n\n  # The sink type to use for console logging. Possible values: stderr,\n  # syslog, journald. Note that \'journald\' can only be selected on linux\n  # systems, and only if Tenzir was built with journald support.\n  # The journald sink is used as default if Tenzir is started as a systemd\n  # service and the service is configured to use the journal for stderr,\n  # otherwise the default is the unstructured stderr sink.\n  #console-sink: stderr/journald\n\n  # Mode for console log output generation. Automatic renders color only when\n  # writing to a tty.\n  # Possible values: always, automatic, never. (default automatic)\n  console: automatic\n\n  # Format for printing individual log entries to the console. For a list\n  # of valid format specifiers, see spdlog format specification at\n  # https://github.com/gabime/spdlog/wiki/3.-Custom-formatting.\n  console-format: "%^[%T.%e] %v%$"\n\n  # Configures the minimum severity of messages written to the console.\n  # For a list of valid log levels, see file-verbosity.\n  console-verbosity: info\n\n  # List of directories to look for schema files in ascending order of\n  # priority.\n  schema-dirs: []\n\n  # Additional directories to load plugins specified using `tenzir.plugins`\n  # from.\n  plugin-dirs: []\n\n  # The plugins to load at startup. For relative paths, Tenzir tries to find\n  # the files in the specified `tenzir.plugin-dirs`. The special values\n  # \'bundled\' and \'all\' enable autoloading of bundled and all plugins\n  # respectively. Note: Add `example` or `/path/to/libtenzir-plugin-example.so`\n  # to load the example plugin.\n  plugins: []\n\n  # Names of plugins and builtins to explicitly forbid from being used in\n  # Tenzir. For example, adding `shell` will prohibit use of the `shell`\n  # operator builtin, and adding `kafka` will prohibit use of the `kafka`\n  # connector plugin.\n  disable-plugins: []\n\n  # The unique ID of this node.\n  node-id: "node"\n\n  # Spawn a node instead of connecting to one.\n  node: false\n\n  # Forbid unsafe location overrides for pipelines with the \'local\' and \'remote\'\n  # keywords, e.g., remotely reading from a file.\n  no-location-overrides: false\n\n  # The size of an index shard, expressed in number of events. This should\n  # be a power of 2.\n  max-partition-size: 4194304\n\n  # Timeout after which an active partition is forcibly flushed, regardless of\n  # its size.\n  active-partition-timeout: 30 seconds\n\n  # Automatically rebuild undersized and outdated partitions in the background.\n  # The given number controls how much resources to spend on it. Set to 0 to\n  # disable.\n  automatic-rebuild: 1\n\n  # Timeout after which an automatic rebuild is triggered.\n  rebuild-interval: 2 hours\n\n  # The number of index shards that can be cached in memory.\n  max-resident-partitions: 1\n\n  # The number of index shards that are considered for the first evaluation\n  # round of a query.\n  max-taste-partitions: 5\n\n  # The amount of queries that can be executed in parallel.\n  max-queries: 10\n\n  # The store backend to use. Can be \'feather\', or the name of a user-provided\n  # store plugin.\n  store-backend: feather\n\n  # Zstd compression level applied to both Feather and Parquet store backends.\n  # zstd-compression-level: <default>\n\n  # Interval between two aging cycles.\n  aging-frequency: 24h\n\n  # Query for aging out obsolete data.\n  aging-query:\n\n  # The `index` key is used to adjust the false-positive rate of\n  # the first-level lookup data structures (called synopses) in the\n  # catalog. The lower the false-positive rate the more space will be\n  # required, so this setting can be used to manually tune the trade-off\n  # of performance vs. space.\n  index:\n    # The default false-positive rate for type synopses.\n    default-fp-rate: 0.01\n    # rules:\n    #   Every rule adjusts the behaviour of Tenzir for a set of targets.\n    #   Tenzir creates one synopsis per target. Targets can be either types\n    #   or field names.\n    #\n    #   fp-rate - false positive rate. Has effect on string and address type\n    #             targets\n    #\n    #   partition-index - Tenzir will not create dense index when set to false\n    #   - targets: [:ip]\n    #     fp-rate: 0.01\n\n  # The `tenzir-ctl start` command starts a new Tenzir server process.\n  start:\n\n    # Prints the endpoint for clients when the server is ready to accept\n    # connections. This comes in handy when letting the OS choose an\n    # available random port, i.e., when specifying 0 as port value.\n    print-endpoint: false\n\n    # An ordered list of commands to run inside the node after starting.\n    # As an example, to configure an auto-starting PCAP source that listens\n    # on the interface \'en0\' and lives inside the Tenzir node, add `spawn\n    # source pcap -i en0`.\n    # Note that commands are not executed sequentially but in parallel.\n    commands: []\n\n    # Triggers removal of old data when the disk budget is exceeded.\n    disk-budget-high: 0GiB\n\n    # When the budget was exceeded, data is erased until the disk space is\n    # below this value.\n    disk-budget-low: 0GiB\n\n    # Seconds between successive disk space checks.\n    disk-budget-check-interval: 90\n\n    # When erasing, how many partitions to erase in one go before rechecking\n    # the size of the database directory.\n    disk-budget-step-size: 1\n\n    # Binary to use for checking the size of the database directory. If left\n    # unset, Tenzir will recursively add up the size of all files in the\n    # database directory to compute the size. Mainly useful for e.g.\n    # compressed filesystem where raw file size is not the correct metric.\n    # Must be the absolute path to an executable file, which will get passed\n    # the database directory as its first and only argument.\n    #disk-budget-check-binary: /opt/tenzir/libexec/tenzir-df-percent.sh\n\n  # User-defined operators.\n  operators:\n    # The Zeek operator is an example that takes raw bytes in the form of a\n    # PCAP and then parses Zeek\'s output via the `zeek-json` format to generate\n    # a stream of events.\n    zeek:\n      shell "zeek -r - LogAscii::output_to_stdout=T\n             JSONStreaming::disable_default_logs=T\n             JSONStreaming::enable_log_rotation=F\n             json-streaming-logs"\n      | read zeek-json\n    # The Suricata operator is analogous to the above Zeek example, with the\n    # difference that we are using Suricata. The commmand line configures\n    # Suricata such that it reads PCAP on stdin and produces EVE JSON logs on\n    # stdout, which we then parse with the `suricata` format.\n    suricata:\n     shell "suricata -r /dev/stdin\n            --set outputs.1.eve-log.filename=/dev/stdout\n            --set logging.outputs.0.console.enabled=no"\n     | read suricata\n\n# The below settings are internal to CAF, and aren\'t checked by Tenzir directly.\n# Please be careful when changing these options. Note that some CAF options may\n# be in conflict with Tenzir options, and are only listed here for completeness.\ncaf:\n\n  # Options affecting the internal scheduler.\n  scheduler:\n\n    # Accepted alternative: "sharing".\n    policy: stealing\n\n    # Configures whether the scheduler generates profiling output.\n    enable-profiling: false\n\n    # Output file for profiler data (only if profiling is enabled).\n    #profiling-output-file: </dev/null>\n\n    # Measurement resolution in milliseconds (only if profiling is enabled).\n    profiling-resolution: 100ms\n\n    # Forces a fixed number of threads if set. Defaults to the number of\n    # available CPU cores if starting a Tenzir node, or *2* for client commands.\n    #max-threads: <number of cores>\n\n    # Maximum number of messages actors can consume in one run.\n    max-throughput: 500\n\n  # When using "stealing" as scheduler policy.\n  work-stealing:\n\n    # Number of zero-sleep-interval polling attempts.\n    aggressive-poll-attempts: 100\n\n    # Frequency of steal attempts during aggressive polling.\n    aggressive-steal-interval: 10\n\n    # Number of moderately aggressive polling attempts.\n    moderate-poll-attempts: 500\n\n    # Frequency of steal attempts during moderate polling.\n    moderate-steal-interval: 5\n\n    # Sleep interval between poll attempts.\n    moderate-sleep-duration: 50us\n\n    # Frequency of steal attempts during relaxed polling.\n    relaxed-steal-interval: 1\n\n    # Sleep interval between poll attempts.\n    relaxed-sleep-duration: 10ms\n\n  stream:\n\n    # Maximum delay for partial batches.\n    max-batch-delay: 15ms\n\n    # Selects an implementation for credit computation.\n    # Accepted alternative: "token-based".\n    credit-policy: token-based\n\n    # When using "size-based" as credit-policy.\n    size-based-policy:\n\n      # Desired batch size in bytes.\n      bytes-per-batch: 32\n\n      # Maximum input buffer size in bytes.\n      buffer-capacity: 256\n\n      # Frequency of collecting batch sizes.\n      sampling-rate: 100\n\n      # Frequency of re-calibrations.\n      calibration-interval: 1\n\n      # Factor for discounting older samples.\n      smoothing-factor: 2.5\n\n    # When using "token-based" as credit-policy.\n    token-based-policy:\n\n      # Number of elements per batch.\n      batch-size: 1\n\n      # Max. number of elements in the input buffer.\n      buffer-size: 64\n\n  # Collecting metrics can be resource consuming. This section is used for\n  # filtering what should and what should not be collected\n  metrics-filters:\n\n    # Rules for actor based metrics filtering.\n    actors:\n\n      # List of selected actors for run-time metrics.\n      includes: []\n\n      # List of excluded actors from run-time metrics.\n      excludes: []\n'}}]);