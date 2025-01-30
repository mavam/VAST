"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69224],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>c});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(t),m=n,c=g["".concat(p,".").concat(m)]||g[m]||y[m]||i;return t?r.createElement(c,l(l({ref:a},u),{},{components:t})):r.createElement(c,l({ref:a},u))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98822:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>h,default:()=>w,frontMatter:()=>c,metadata:()=>f,toc:()=>v});var r=t(15680),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))p.call(a,t)&&u(e,t,a[t]);if(o)for(var t of o(a))s.call(a,t)&&u(e,t,a[t]);return e},y=(e,a)=>i(e,l(a)),m=(e,a)=>{var t={};for(var r in e)p.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))a.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const c={},h="Glossary",f={unversionedId:"glossary",id:"version-v4.26/glossary",title:"Glossary",description:"\x3c!--",source:"@site/versioned_docs/version-v4.26/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/v4.26/glossary",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/glossary.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Platform CLI",permalink:"/v4.26/platform-cli"},next:{title:"How Tenzir Works",permalink:"/v4.26/how-tenzir-works/"}},d={},v=[{value:"App",id:"app",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Connector",id:"connector",level:2},{value:"Context",id:"context",level:2},{value:"Destination",id:"destination",level:2},{value:"Format",id:"format",level:2},{value:"Index",id:"index",level:2},{value:"Input",id:"input",level:2},{value:"Integration",id:"integration",level:2},{value:"Library",id:"library",level:2},{value:"Loader",id:"loader",level:2},{value:"Node",id:"node",level:2},{value:"Metrics",id:"metrics",level:2},{value:"OCSF",id:"ocsf",level:2},{value:"Operator",id:"operator",level:2},{value:"Output",id:"output",level:2},{value:"PaC",id:"pac",level:2},{value:"Package",id:"package",level:2},{value:"Parser",id:"parser",level:2},{value:"Partition",id:"partition",level:2},{value:"Pipeline",id:"pipeline",level:2},{value:"Platform",id:"platform",level:2},{value:"Printer",id:"printer",level:2},{value:"Saver",id:"saver",level:2},{value:"Schema",id:"schema",level:2},{value:"Source",id:"source",level:2},{value:"TQL",id:"tql",level:2},{value:"Transformation",id:"transformation",level:2}],N={toc:v},b="wrapper";function w(e){var a=e,{components:t}=a,n=m(a,["components"]);return(0,r.yg)(b,y(g(g({},N),n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",g({},{id:"glossary"}),"Glossary"),(0,r.yg)("p",null,"This page defines central terms in the Tenzir ecosystem."),(0,r.yg)("admonition",g({},{title:"missing term?",type:"note"}),(0,r.yg)("p",{parentName:"admonition"},"If you are missing a term, please open a ",(0,r.yg)("a",g({parentName:"p"},{href:"https://github.com/orgs/tenzir/discussions/new?category=questions-answers"}),"GitHub Discussion")," or\nping us in our ",(0,r.yg)("a",g({parentName:"p"},{href:"/discord"}),"Discord chat"),".")),(0,r.yg)("h2",g({},{id:"app"}),"App"),(0,r.yg)("p",null,"Web user interface to access ",(0,r.yg)("a",g({parentName:"p"},{href:"#platform"}),"platform")," at\n",(0,r.yg)("a",g({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),"."),(0,r.yg)("p",null,"The app is a web application that partially runs in the user's browser. It is\nwritten in ",(0,r.yg)("a",g({parentName:"p"},{href:"https://svelte.dev/"}),"Svelte"),"."),(0,r.yg)("h2",g({},{id:"catalog"}),"Catalog"),(0,r.yg)("p",null,"Maintains ",(0,r.yg)("a",g({parentName:"p"},{href:"#partition"}),"partition")," ownership and metadata."),(0,r.yg)("p",null,"The catalog is a component in the ",(0,r.yg)("a",g({parentName:"p"},{href:"#node"}),"node")," that owns the\n",(0,r.yg)("a",g({parentName:"p"},{href:"#partition"}),"partitions"),", keeps metadata about them, and maintains a set of\nsparse secondary indexes to identify relevant partitions for a given query. It\noffers a transactional interface for adding and removing partitions."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#tune-catalog-fragmentation"}),"Tune catalog\nfragmentation")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#configure-the-catalog"}),"Configure the catalog"))),(0,r.yg)("h2",g({},{id:"connector"}),"Connector"),(0,r.yg)("p",null,"Manages chunks of raw bytes by interacting with a resource."),(0,r.yg)("p",null,"A connector is either a ",(0,r.yg)("em",{parentName:"p"},"loader")," that acquires bytes from a resource, or a\n",(0,r.yg)("em",{parentName:"p"},"saver")," that sends bytes to a resource. Loaders are implemented as ordinary\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators"}),"operators")," prefixed with ",(0,r.yg)("inlineCode",{parentName:"p"},"load_*")," while savers are prefixed with\n",(0,r.yg)("inlineCode",{parentName:"p"},"save_*"),"."),(0,r.yg)("h2",g({},{id:"context"}),"Context"),(0,r.yg)("p",null,"A stateful object used for in-band enrichment."),(0,r.yg)("p",null,"Contexts come in various types, such as a lookup table, Bloom filter, and GeoIP\ndatabase. They live inside a node and you can enrich with them in other\npipelines."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Read more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/enrichment/"}),"enrichment"))),(0,r.yg)("h2",g({},{id:"destination"}),"Destination"),(0,r.yg)("p",null,"An pipeline ending with an ",(0,r.yg)("a",g({parentName:"p"},{href:"#output"}),"output")," operator preceded by a\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators/subscribe"}),(0,r.yg)("inlineCode",{parentName:"a"},"subscribe"))," input operator."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))),(0,r.yg)("h2",g({},{id:"format"}),"Format"),(0,r.yg)("p",null,"Translates between bytes and events."),(0,r.yg)("p",null,"A format is either a ",(0,r.yg)("em",{parentName:"p"},"parser")," that converts bytes to events, or a ",(0,r.yg)("em",{parentName:"p"},"printer"),"\nthat converts events to bytes. Example formats are ",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/formats/json"}),(0,r.yg)("inlineCode",{parentName:"a"},"json")),",\n",(0,r.yg)("a",g({parentName:"p"},{href:"./formats/cef"}),(0,r.yg)("inlineCode",{parentName:"a"},"cef")),", and ",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/formats/pcap"}),(0,r.yg)("inlineCode",{parentName:"a"},"pcap")),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"See all available ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/formats"}),"formats"))),(0,r.yg)("h2",g({},{id:"index"}),"Index"),(0,r.yg)("p",null,"Optional data structures for accelerating historical queries."),(0,r.yg)("p",null,"Tenzir has ",(0,r.yg)("em",{parentName:"p"},"sparse")," indexes. Sparse indexes live in memory and point to\n",(0,r.yg)("a",g({parentName:"p"},{href:"#partition"}),"partitions"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#configure-the-catalog"}),"Configure the catalog"))),(0,r.yg)("h2",g({},{id:"input"}),"Input"),(0,r.yg)("p",null,"An ",(0,r.yg)("a",g({parentName:"p"},{href:"#operator"}),"operator")," that only producing data, without consuming anything."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))),(0,r.yg)("h2",g({},{id:"integration"}),"Integration"),(0,r.yg)("p",null,"A set of pipelines to integrate with a third-party product."),(0,r.yg)("p",null,"An integration describes use cases in combination with a specific product or\ntool. Based on the depth of the configuration, this may require configuration on\neither end."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/integrations"}),"List of all integrations"))),(0,r.yg)("h2",g({},{id:"library"}),"Library"),(0,r.yg)("p",null,"A collection of ",(0,r.yg)("a",g({parentName:"p"},{href:"#package"}),"packages"),"."),(0,r.yg)("p",null,"Our community library is ",(0,r.yg)("a",g({parentName:"p"},{href:"https://github.com/tenzir/library"}),"freely available at\nGitHub"),"."),(0,r.yg)("h2",g({},{id:"loader"}),"Loader"),(0,r.yg)("p",null,"A connector that acquires bytes."),(0,r.yg)("p",null,"A loader is the dual to a ",(0,r.yg)("a",g({parentName:"p"},{href:"#saver"}),"saver"),". It has a no input and only performs a\nside effect that acquires bytes. Use a loader implicitly with the\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators/from"}),(0,r.yg)("inlineCode",{parentName:"a"},"from"))," operator or explicitly with the ",(0,r.yg)("inlineCode",{parentName:"p"},"load_*"),"\noperators."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))),(0,r.yg)("h2",g({},{id:"node"}),"Node"),(0,r.yg)("p",null,"A host for ",(0,r.yg)("a",g({parentName:"p"},{href:"#pipeline"}),"pipelines")," and storage reachable over the network."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir-node")," binary starts a node in a dedicated server process that\nlistens on TCP port 5158."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/deploy-a-node/"}),"Deploy a node")),(0,r.yg)("li",{parentName:"ul"},"Use the ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/rest-api"}),"REST API")," to manage a node"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/usage/import-into-a-node/"}),"Import into a node")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/usage/export-from-a-node/"}),"Export from a node"))),(0,r.yg)("h2",g({},{id:"metrics"}),"Metrics"),(0,r.yg)("p",null,"Runtime statistics about pipeline execution."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/usage/collect-metrics"}),"Collect metrics"))),(0,r.yg)("h2",g({},{id:"ocsf"}),"OCSF"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",g({parentName:"p"},{href:"https://schema.ocsf.io"}),"Open Cybersecurity Schema Framework (OCSF)")," is a\ncross-vendor schema for security event data. Our ",(0,r.yg)("a",g({parentName:"p"},{href:"#library"}),"community library"),"\ncontains packages that map data sources to OCSF."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/tutorials/map-data-to-ocsf/"}),"Map data to COSF"))),(0,r.yg)("h2",g({},{id:"operator"}),"Operator"),(0,r.yg)("p",null,"The building block of a ",(0,r.yg)("a",g({parentName:"p"},{href:"#pipeline"}),"pipeline"),"."),(0,r.yg)("p",null,"An operator is a ",(0,r.yg)("a",g({parentName:"p"},{href:"#input"}),"input"),", ",(0,r.yg)("a",g({parentName:"p"},{href:"#transformation"}),"transformation"),", or\n",(0,r.yg)("a",g({parentName:"p"},{href:"#output"}),"output"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"See all available ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/tql2/operators"}),"operators"))),(0,r.yg)("h2",g({},{id:"output"}),"Output"),(0,r.yg)("p",null,"An ",(0,r.yg)("a",g({parentName:"p"},{href:"#operator"}),"operator")," consuming data, without producing anything."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))),(0,r.yg)("h2",g({},{id:"pac"}),"PaC"),(0,r.yg)("p",null,"The acronym PaC stands for ",(0,r.yg)("em",{parentName:"p"},"Pipelines as Code"),". It is meant as an adaptation of\n",(0,r.yg)("a",g({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Infrastructure_as_code"}),"Infrastructure as Code\n(IaC)")," with pipelines\nrepresent the (data) infrastructure that is provisioning as code."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn how to provision ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/usage/run-pipelines/#as-code"}),"piplines as\ncode"),".")),(0,r.yg)("h2",g({},{id:"package"}),"Package"),(0,r.yg)("p",null,"A collection of ",(0,r.yg)("a",g({parentName:"p"},{href:"#pipeline"}),"pipelines")," and ",(0,r.yg)("a",g({parentName:"p"},{href:"#context"}),"contexts"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Read more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/packages"}),"packages")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/tutorials/write-a-package"}),"Write a package"))),(0,r.yg)("h2",g({},{id:"parser"}),"Parser"),(0,r.yg)("p",null,"A bytes-to-events operator."),(0,r.yg)("p",null,"A parser is the dual to a ",(0,r.yg)("a",g({parentName:"p"},{href:"#printer"}),"printer"),". Use a parser implicitly in the\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators/from"}),(0,r.yg)("inlineCode",{parentName:"a"},"from"))," operator."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines")),(0,r.yg)("li",{parentName:"ul"},"See ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/formats"}),"all formats"))),(0,r.yg)("h2",g({},{id:"partition"}),"Partition"),(0,r.yg)("p",null,"The horizontal scaling unit of the storage attached to a ",(0,r.yg)("a",g({parentName:"p"},{href:"#node"}),"node"),"."),(0,r.yg)("p",null,"A partition contains the raw data and optionally a set of indexes. Supported\nformats are ",(0,r.yg)("a",g({parentName:"p"},{href:"https://parquet.apache.org"}),"Parquet")," or\n",(0,r.yg)("a",g({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#control-the-partition-size"}),"Control the partition size")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#configure-catalog-and-partition-indexes"}),"Configure catalog and partition indexes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#select-the-store-format"}),"Select the store format")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#adjust-the-store-compression"}),"Adjust the store\ncompression")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/installation/tune-performance/#rebuild-partitions"}),"Rebuild partitions"))),(0,r.yg)("h2",g({},{id:"pipeline"}),"Pipeline"),(0,r.yg)("p",null,"Combines a set of ",(0,r.yg)("a",g({parentName:"p"},{href:"#operator"}),"operators")," into a dataflow graph."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Understand ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"how pipelines work")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/usage/run-pipelines/"}),"Run a pipeline"))),(0,r.yg)("h2",g({},{id:"platform"}),"Platform"),(0,r.yg)("p",null,"Control plane for nodes and pipelines, accessible through ",(0,r.yg)("a",g({parentName:"p"},{href:"#app"}),"app")," at\n",(0,r.yg)("a",g({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),"."),(0,r.yg)("h2",g({},{id:"printer"}),"Printer"),(0,r.yg)("p",null,"An events-to-bytes operator."),(0,r.yg)("p",null,"A ",(0,r.yg)("a",g({parentName:"p"},{href:"#format"}),"format")," that translates events into bytes."),(0,r.yg)("p",null,"A printer is the dual to a ",(0,r.yg)("a",g({parentName:"p"},{href:"#parser"}),"parser"),". Use a parser implicitly in the\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators/to"}),(0,r.yg)("inlineCode",{parentName:"a"},"to"))," operator."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines")),(0,r.yg)("li",{parentName:"ul"},"See ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/formats"}),"all formats"))),(0,r.yg)("h2",g({},{id:"saver"}),"Saver"),(0,r.yg)("p",null,"A ",(0,r.yg)("a",g({parentName:"p"},{href:"#connector"}),"connector")," that emits bytes."),(0,r.yg)("p",null,"A saver is the dual to a ",(0,r.yg)("a",g({parentName:"p"},{href:"#loader"}),"loader"),". It has a no output and only performs\na side effect that emits bytes. Use a saver implicitly with the\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators/to"}),(0,r.yg)("inlineCode",{parentName:"a"},"to"))," operator or explicitly with the ",(0,r.yg)("inlineCode",{parentName:"p"},"save_*"),"\noperators."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))),(0,r.yg)("h2",g({},{id:"schema"}),"Schema"),(0,r.yg)("p",null,"A top-level record type of an event."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/usage/show-available-schemas"}),"Show available schemas"))),(0,r.yg)("h2",g({},{id:"source"}),"Source"),(0,r.yg)("p",null,"An pipeline starting with an ",(0,r.yg)("a",g({parentName:"p"},{href:"#input"}),"input")," operator followed by a\n",(0,r.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/operators/publish"}),(0,r.yg)("inlineCode",{parentName:"a"},"publish"))," output operator."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))),(0,r.yg)("h2",g({},{id:"tql"}),"TQL"),(0,r.yg)("p",null,"An acronym for ",(0,r.yg)("em",{parentName:"p"},"Tenzir Query Language"),"."),(0,r.yg)("p",null,"TQL is the language in which users write ",(0,r.yg)("a",g({parentName:"p"},{href:"#pipeline"}),"pipelines"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about the ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/tql2/language/statements"}),"language"))),(0,r.yg)("h2",g({},{id:"transformation"}),"Transformation"),(0,r.yg)("p",null,"An ",(0,r.yg)("a",g({parentName:"p"},{href:"#operator"}),"operator")," consuming both input and producing output."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn more about ",(0,r.yg)("a",g({parentName:"li"},{href:"/v4.26/pipelines/"}),"pipelines"))))}w.isMDXComponent=!0}}]);