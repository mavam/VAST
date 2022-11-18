"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:5},r="Tune",s={unversionedId:"setup/tune",id:"setup/tune",title:"Tune",description:"This section describes tuning knobs that have a notable effect on system",source:"@site/docs/setup/tune.md",sourceDirName:"setup",slug:"/setup/tune",permalink:"/docs/setup/tune",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/tune.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"AWS with Pro version",permalink:"/docs/setup/deploy/aws-pro"},next:{title:"Monitor",permalink:"/docs/setup/monitor"}},l={},p=[{value:"Batching: Table Slices",id:"batching-table-slices",level:2},{value:"Size",id:"size",level:3},{value:"Import Timeout",id:"import-timeout",level:3},{value:"Persistent Storage",id:"persistent-storage",level:2},{value:"Compression",id:"compression",level:3},{value:"Memory usage and caching",id:"memory-usage-and-caching",level:2},{value:"Caching",id:"caching",level:3},{value:"Catalog",id:"catalog",level:3},{value:"Tune sketch parameters",id:"tune-sketch-parameters",level:3},{value:"Example",id:"example",level:4},{value:"Skip partition index creation",id:"skip-partition-index-creation",level:3},{value:"Example",id:"example-1",level:4},{value:"Shutdown",id:"shutdown",level:2},{value:"Logging",id:"logging",level:2},{value:"Rebuild Partitions",id:"rebuild-partitions",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tune"},"Tune"),(0,i.kt)("p",null,"This section describes tuning knobs that have a notable effect on system\nperformance."),(0,i.kt)("h2",{id:"batching-table-slices"},"Batching: Table Slices"),(0,i.kt)("p",null,"VAST processes events in batches. Because the structured data has the shape of a\ntable, we call these batches ",(0,i.kt)("em",{parentName:"p"},"table slices"),". The following options control their\nshape and behavior."),(0,i.kt)("admonition",{title:"Implementation Note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Table slices are implemented as ",(0,i.kt)("em",{parentName:"p"},"Record Batches")," in Apache Arrow.")),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("p",null,"Most components in VAST operate on table slices, which makes the table slice\nsize a fundamental tuning knob on the spectrum of throughput and latency. Small\ntable slices allow for shorter processing times, resulting in more scheduler\ncontext switches and a more balanced workload. But the increased pressure on the\nscheduler comes at the cost of throughput. Conversely, a large table slice size\ncreates more work for each actor invocation and makes them yield less frequently\nto the scheduler. As a result, other actors scheduled on the same thread may\nhave to wait a little longer."),(0,i.kt)("p",null,"The option ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size")," sets an upper bound for the number of events\nper table slice. It defaults to 65,536."),(0,i.kt)("p",null,"The option controls the maximum number of events per table slice, but\nnot necessarily the number of events until a component forwards a batch to the\nnext stage in a stream. The CAF streaming framework uses a credit-based\nflow-control mechanism to determine buffering of tables slices."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," causes the table slice size to be\nunbounded and leaves it to ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.import.batch-timeout")," to produce table slices.\nThis can lead to very large table slices for sources with high data rates, and\nis not recommended.")),(0,i.kt)("h3",{id:"import-timeout"},"Import Timeout"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.import.batch-timeout")," option sets a timeout for forwarding buffered\ntable slices to the remote VAST node. If the timeout fires before a table slice\nreaches ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size"),", then the table slice will contain fewer events\nand ship immediately."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.import.read-timeout")," option determines how long a call to read data\nfrom the input will block. After the read timeout elapses, VAST tries again at a\nlater. The default value is 10 seconds."),(0,i.kt)("h2",{id:"persistent-storage"},"Persistent Storage"),(0,i.kt)("p",null,"VAST arranges data in horizontal ",(0,i.kt)("em",{parentName:"p"},"partitions")," for sharding. The persistent\nrepresentation of partition is a single file consists containing a set table\nslices all having the same schema. The ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," plugin defines the on-disk\nformat. VAST currently ships with three implementations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Feather"),": writes Apache Feather V2 files"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Parquet"),": writes ",(0,i.kt)("a",{parentName:"li",href:"https://parquet.apache.org/"},"Apache Parquet")," files"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Segment"),": writes Apache Arrow IPC with a thin wrapper (deprecated,\nread-only)")),(0,i.kt)("p",null,"VAST defaults to the ",(0,i.kt)("inlineCode",{parentName:"p"},"feather")," store. Enable the Parquet store by loading the\nplugin and adjusting ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.store-backend"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  plugins:\n    - parquet\n  store-backend: parquet\n")),(0,i.kt)("p",null,"There's an inherent space-time tradeoff between the stores that affects CPU,\nmemory, and storage characteristics. Compared to the Feather and Segment stores,\nParquet differs as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Parquet files occupy ~40% less space, which also reduces I/O pressure during\nquerying."),(0,i.kt)("li",{parentName:"ol"},"Parquet utilizes more CPU cycles during ingest (~10%) and querying.")),(0,i.kt)("p",null,"Parquet has the major advantage that it's the de-facto standard for encoding\ncolumnar data in modern data architectures. This allows other applications that\nsupport reading from Parquet ",(0,i.kt)("em",{parentName:"p"},"native")," access to the data."),(0,i.kt)("admonition",{title:"Recommendation",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use Parquet when:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Storage is scarce, and you want to increase data retention"),(0,i.kt)("li",{parentName:"ol"},"Workloads are I/O-bound and you have available CPU"),(0,i.kt)("li",{parentName:"ol"},"Reading data with with off-the-shelf data science tools is a use case"))),(0,i.kt)("p",null,"VAST supports ",(0,i.kt)("a",{parentName:"p",href:"#rebuild-partitions"},"rebuilding the entire database")," in case you\nwant to switch to a different store format. However, VAST works perfectly fine\nwith a mixed-storage configuration, so a full rebuild is not required."),(0,i.kt)("h3",{id:"compression"},"Compression"),(0,i.kt)("p",null,"VAST compresses partitions using Zstd for partitions at rest. To fine-tune\nthe space-time trade-off, VAST offers a setting, ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.zstd-compression-level"),"\nto allow fine-tuning the compression level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  zstd-compression-level: 1\n")),(0,i.kt)("p",null,"Currently, the default value is taken from Apache Arrow itself, using\n",(0,i.kt)("inlineCode",{parentName:"p"},"arrow::util::Codec::DefaultCompressionLevel(arrow::Compression::ZSTD)")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We have a ",(0,i.kt)("a",{parentName:"p",href:"/blog/parquet-and-feather-writing-security-telemetry/"},"blog post")," that does an in-depth\ncomparison of various compression levels and storage formats.")),(0,i.kt)("h2",{id:"memory-usage-and-caching"},"Memory usage and caching"),(0,i.kt)("p",null,"The amount of memory that a VAST server process is allowed to use can currently\nnot be configured directly as a configuration file option. Instead of such a\ndirect tuning knob, the memory usage can be influenced through the configuration\nof the caching, catalog and disk monitor features."),(0,i.kt)("h3",{id:"caching"},"Caching"),(0,i.kt)("p",null,"VAST groups table slices with the same schema in a ",(0,i.kt)("em",{parentName:"p"},"partition"),". When building a\npartition, the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.max-partition-size")," sets an upper bound on the\nnumber of records in a partition, across all table slices. The parameter\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.active-partition-timeout")," provides a time-based upper bound: once reached,\nVAST considers the partition as complete, regardless of the number of records."),(0,i.kt)("p",null,"A LRU cache of partitions accelerates queries to recently used partitions. The\nparameter ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.max-resident-partitions")," controls the number of partitions in\nthe LRU cache."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"vast flush")," to force VAST to write all active partitions to disk\nimmediately. The command returns only after all active partitions were flushed\nto disk.")),(0,i.kt)("h3",{id:"catalog"},"Catalog"),(0,i.kt)("p",null,"The catalog manages partition meta data and is responsible for deciding whether\na partition qualifies for a certain query. It does so by maintaining ",(0,i.kt)("em",{parentName:"p"},"sketch"),"\ndata structures (e.g., Bloom filters, summary statistics) for each partition.\nSketches are highly space-efficient at the cost of being probabilistic and\nyielding false positives."),(0,i.kt)("p",null,"Due to this characteristic sketches can grow sub-linear, doubling the number of\nevents in a sketch does not lead to a doubling of the memory requirement.\nBecause the catalog must be traversed in full for a given query it needs to be\nmaintained in active memory to provide high responsiveness."),(0,i.kt)("p",null,"As a consequence, the overall amount of data in a VAST instance and the\n",(0,i.kt)("inlineCode",{parentName:"p"},"max-partition-size")," determine the memory requirements of the catalog. The\noption ",(0,i.kt)("inlineCode",{parentName:"p"},"max-partition-size")," is inversely linked to the number of sketches in the\ncatalog. That means increasing the ",(0,i.kt)("inlineCode",{parentName:"p"},"max-partition-size")," is an effective method\nto reduce the memory requirements for the catalog."),(0,i.kt)("h3",{id:"tune-sketch-parameters"},"Tune sketch parameters"),(0,i.kt)("p",null,"A false positive can have substantial impact on the query latency by\nmaterializing irrelevant partitions, which involves unnecessary I/O. Based on\nthe cost of I/O, this penalty may be substantial. Conversely, reducing the false\npositive rate increases the memory consumption, leading to a higher resident set\nsize and larger RAM requirements."),(0,i.kt)("p",null,"You can control this space-time trade-off in the configuration section\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.index")," by specifying index ",(0,i.kt)("em",{parentName:"p"},"rules"),". Each rule corresponds to one sketch\nand consists of the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targets"),": a list of extractors to describe the set of fields whose values to\nadd to the sketch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fp-rate"),": an optional value to control the false-positive rate of the sketch.")),(0,i.kt)("p",null,"VAST does not create field-level sketches unless a dedicated rule with a\nmatching target configuration exists."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  index:\n    # Set the default false-positive rate for type-level synopses\n    default-fp-rate: 0.001\n    rules:\n      - targets:\n          # field synopses: need to specify fully qualified field name\n          - suricata.http.http.url\n        fp-rate: 0.005\n      - targets:\n          - :addr\n        fp-rate: 0.1\n")),(0,i.kt)("p",null,"This configuration includes two rules (= two sketches), where the first rule\nincludes a field extractor and the second a type extractor. The first rule\napplies to a single field, ",(0,i.kt)("inlineCode",{parentName:"p"},"suricata.http.http.url"),", and has false-positive rate\nof 0.5%. The second rule creates one sketch for all fields of type ",(0,i.kt)("inlineCode",{parentName:"p"},"addr")," that\nhas a false-positive rate of 10%."),(0,i.kt)("h3",{id:"skip-partition-index-creation"},"Skip partition index creation"),(0,i.kt)("p",null,"Partition indexes improve query performance at the cost of database size. Operators can\ndisable the creation of partition indexes for specific fields or types in the\nconfiguration section ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.index"),". By default, VAST creates partition indexes for all fields."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  index:\n    rules:\n        # Don't create partition indexes the suricata.http.http.url field.\n      - targets:\n          - suricata.http.http.url\n        partition-index: false\n        # Don't create partition indexes for fields of type addr.\n      - targets:\n          - :addr\n        partition-index: false\n")),(0,i.kt)("h2",{id:"shutdown"},"Shutdown"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," command gracefully brings down a VAST server that has been started\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," command."),(0,i.kt)("p",null,"It is also possible to send a signal ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGINT(2)")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast")," process instead\nof using ",(0,i.kt)("inlineCode",{parentName:"p"},"vast stop"),", but in only works on the same machine that runs the\nserver process. We recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"vast stop"),", as it also works over the wire."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," command blocks until the server process has terminated, and returns\na zero exit code upon success, making it suitable for use in launch system\nscripts."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The server waits for ongoing import processes to terminate before shutting down\nitself. In case an import process is hanging, you can always terminate the\nhanging process manually to shutdown the server.")),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"The VAST server writes log files into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"server.log")," in the database\ndirectory by default. Set the option ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.log-file")," to change the location of\nthe log file."),(0,i.kt)("p",null,"VAST client processes do not write logs by default. Set the option\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.client-log-file")," to enable logging. Note that relative paths are\ninterpreted relative to the current working directory of the client process."),(0,i.kt)("p",null,"Server log files rotate automatically after 10 MiB. The option\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.disable-log-rotation")," allows for disabling log rotation entirely, and the\noption ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.log-rotation-threshold")," sets the size limit when a log file should\nbe rotated."),(0,i.kt)("p",null,"VAST processes log messages in a dedicated thread, which by default buffers up\nto 1M messages for servers, and 100 for clients. The option\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.log-queue-size")," controls this setting."),(0,i.kt)("h2",{id:"rebuild-partitions"},"Rebuild Partitions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rebuild"),' command re-ingests events from existing partitions and replaces\nthem with new partitions. This makes it possible to upgrade persistent state to\na newer version, or recreate persistent state after changing configuration\nparameters, e.g., switching from the Feather to the Parquet store backend. The\nfollowing diagram illustrates this "defragmentation" process:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rebuild",src:n(34591).Z+"#gh-light-mode-only",width:"1840",height:"846"}),"\n",(0,i.kt)("img",{alt:"Rebuild",src:n(25024).Z+"#gh-dark-mode-only",width:"1840",height:"846"})),(0,i.kt)("p",null,"Rebuilding partitions also recreates their sketches. The process takes place\nasynchronously in the background. Control this behavior in your ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.yaml"),"\nconfiguration file, to disable or adjust the resources to spend on automatic\nrebuilding:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  # Automatically rebuild undersized and outdated partitions in the background.\n  # The given number controls how much resources to spend on it. Set to 0 to\n  # disable. Defaults to 1.\n  automatic-rebuild: 1\n")),(0,i.kt)("admonition",{title:"Upgrade from VAST v1.x partitions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"rebuild")," command to upgrade your VAST v1.x partitions to v2.x,\nwhich yield better compression and have a streamlined representation. We\nrecommend this to be able to use newer features that do not work with v1.x\npartitions.")),(0,i.kt)("p",null,"This is how you run it manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vast rebuild start [--all] [--undersized] [--parallel=<number>] [--max-partitions=<number>] [--detached] [<expression>]\n")),(0,i.kt)("p",null,"A rebuild is not only useful when upgrading outdated partitions, but also when\nchanging parameters of up-to-date partitions. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--all")," flag to extend a\nrebuild operation to ",(0,i.kt)("em",{parentName:"p"},"all")," partitions. (Internally, VAST versions the partition\nstate via FlatBuffers. An outdated partition is one whose version number is not\nthe newest.)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--undersized")," flag (implies ",(0,i.kt)("inlineCode",{parentName:"p"},"--all"),") causes VAST to only rebuild partitions\nthat are under the configured partition size limit ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.max-partition-size"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--parallel")," options is a performance tuning knob. The parallelism level\ncontrols how many sets of partitions to rebuild in parallel. This value defaults\nto 1 to limit the CPU and memory requirements of the rebuilding process, which\ngrow linearly with the selected parallelism level."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--max-partitions")," option allows for setting an upper bound to the number of\npartitions to rebuild."),(0,i.kt)("p",null,"An optional expression allows for restricting the set of partitions to rebuild.\nVAST performs a catalog lookup with the expression to identify the set of\ncandidate partitions. This process may yield false positives, as with regular\nqueries, which may cause unaffected partitions to undergo a rebuild. For\nexample, to rebuild outdated partitions containing ",(0,i.kt)("inlineCode",{parentName:"p"},"suricata.flow")," events\nolder than 2 weeks, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vast rebuild start '#type == \"suricata.flow\" && #import_time < 2 weeks ago'\n")),(0,i.kt)("p",null,"To stop an ongoing rebuild, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast rebuild stop")," command."))}c.isMDXComponent=!0},25024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rebuild-dark-4efcc9a924014c95fdfe8568ee53aacc.png"},34591:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rebuild-light-949cb7d0044aa66bc94342608227cbb7.png"}}]);