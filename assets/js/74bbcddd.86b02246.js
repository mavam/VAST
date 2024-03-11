"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,h=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>d,default:()=>b,frontMatter:()=>h,metadata:()=>f,toc:()=>g});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>i(e,o(t)),k=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const h={},d="Glossary",f={unversionedId:"glossary",id:"version-Tenzir v4.10/glossary",title:"Glossary",description:"\x3c!--",source:"@site/versioned_docs/version-Tenzir v4.10/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/glossary",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/glossary.md",tags:[],version:"Tenzir v4.10",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python Library",permalink:"/python"},next:{title:"Contribute",permalink:"/contribute"}},N={},g=[{value:"App",id:"app",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Connector",id:"connector",level:2},{value:"Context",id:"context",level:2},{value:"Format",id:"format",level:2},{value:"Index",id:"index",level:2},{value:"Integration",id:"integration",level:2},{value:"Loader",id:"loader",level:2},{value:"Node",id:"node",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Operator",id:"operator",level:2},{value:"PaC",id:"pac",level:2},{value:"Parser",id:"parser",level:2},{value:"Partition",id:"partition",level:2},{value:"Pipeline",id:"pipeline",level:2},{value:"Platform",id:"platform",level:2},{value:"Printer",id:"printer",level:2},{value:"Saver",id:"saver",level:2},{value:"Schema",id:"schema",level:2},{value:"Sink",id:"sink",level:2},{value:"Source",id:"source",level:2},{value:"TQL",id:"tql",level:2},{value:"Transformation",id:"transformation",level:2}],v={toc:g},y="wrapper";function b(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,r.kt)(y,c(m(m({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"glossary"}),"Glossary"),(0,r.kt)("p",null,"This page defines central terms in the Tenzir ecosystem."),(0,r.kt)("admonition",m({},{title:"missing term?",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"If you are missing a term, please open a ",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/orgs/tenzir/discussions/new?category=questions-answers"}),"GitHub Discussion")," or\nping us in our ",(0,r.kt)("a",m({parentName:"p"},{href:"/discord"}),"Discord chat"),".")),(0,r.kt)("h2",m({},{id:"app"}),"App"),(0,r.kt)("p",null,"Web user interface to access ",(0,r.kt)("a",m({parentName:"p"},{href:"#platform"}),"platform")," at\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),"."),(0,r.kt)("p",null,"The app is a web application that partially runs in the user's browser. It is\nwritten in ",(0,r.kt)("a",m({parentName:"p"},{href:"https://svelte.dev/"}),"Svelte"),"."),(0,r.kt)("h2",m({},{id:"catalog"}),"Catalog"),(0,r.kt)("p",null,"Maintains ",(0,r.kt)("a",m({parentName:"p"},{href:"#partition"}),"partition")," ownership and metadata."),(0,r.kt)("p",null,"The catalog is a component in the ",(0,r.kt)("a",m({parentName:"p"},{href:"#node"}),"node")," that owns the\n",(0,r.kt)("a",m({parentName:"p"},{href:"#partition"}),"partitions"),", keeps metadata about them, and maintains a set of\nsparse secondary indexes to identify relevant partitions for a given query. It\noffers a transactional interface for adding and removing partitions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#tune-catalog-fragmentation"}),"Tune catalog\nfragmentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#configure-the-catalog"}),"Configure the catalog"))),(0,r.kt)("h2",m({},{id:"connector"}),"Connector"),(0,r.kt)("p",null,"Manages chunks of raw bytes by interacting with a resource."),(0,r.kt)("p",null,"A connector is either a ",(0,r.kt)("em",{parentName:"p"},"loader")," that acquires bytes from a resource, or a\n",(0,r.kt)("em",{parentName:"p"},"saver")," that sends bytes to a resource. Example connectors are\n",(0,r.kt)("a",m({parentName:"p"},{href:"/connectors/file"}),(0,r.kt)("inlineCode",{parentName:"a"},"file")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/connectors/kafka"}),(0,r.kt)("inlineCode",{parentName:"a"},"kafka")),", and\n",(0,r.kt)("a",m({parentName:"p"},{href:"/connectors/nic"}),(0,r.kt)("inlineCode",{parentName:"a"},"nic")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See all available ",(0,r.kt)("a",m({parentName:"li"},{href:"/connectors"}),"connectors"))),(0,r.kt)("h2",m({},{id:"context"}),"Context"),(0,r.kt)("p",null,"A stateful object used for in-band enrichment."),(0,r.kt)("p",null,"Contexts live inside a node and you can manage them with the\n",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/context"}),(0,r.kt)("inlineCode",{parentName:"a"},"context"))," operator. A context has pluggable type, such\nas a lookup table, GeoIP database, or a custom plugin. The\n",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/enrich"}),(0,r.kt)("inlineCode",{parentName:"a"},"enrich"))," places a context into a pipeline for\nenrichment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/contexts"}),"contexts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/operators/context"}),"Manage")," a context"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/operators/enrich"}),"Enrich")," with a context")),(0,r.kt)("h2",m({},{id:"format"}),"Format"),(0,r.kt)("p",null,"Translates between bytes and events."),(0,r.kt)("p",null,"A format is either a ",(0,r.kt)("em",{parentName:"p"},"parser")," that converts bytes to events, or a ",(0,r.kt)("em",{parentName:"p"},"printer"),"\nthat converts events to bytes. Example formats are ",(0,r.kt)("a",m({parentName:"p"},{href:"/formats/json"}),(0,r.kt)("inlineCode",{parentName:"a"},"json")),",\n",(0,r.kt)("a",m({parentName:"p"},{href:"./formats/cef"}),(0,r.kt)("inlineCode",{parentName:"a"},"cef")),", and ",(0,r.kt)("a",m({parentName:"p"},{href:"/formats/pcap"}),(0,r.kt)("inlineCode",{parentName:"a"},"pcap")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See all available ",(0,r.kt)("a",m({parentName:"li"},{href:"/formats"}),"formats"))),(0,r.kt)("h2",m({},{id:"index"}),"Index"),(0,r.kt)("p",null,"Optional data structures for accelerating historical queries."),(0,r.kt)("p",null,"Tenzir has ",(0,r.kt)("em",{parentName:"p"},"sparse")," indexes. Sparse indexes live in memory and point to\n",(0,r.kt)("a",m({parentName:"p"},{href:"#partition"}),"partitions"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#configure-the-catalog"}),"Configure the catalog"))),(0,r.kt)("h2",m({},{id:"integration"}),"Integration"),(0,r.kt)("p",null,"A set of pipelines to integrate with a third-party product."),(0,r.kt)("p",null,"An integration describes use cases in combination with a specific product or\ntool. Based on the depth of the configuration, this may require configuration on\neither end."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/integrations"}),"List of all integrations"))),(0,r.kt)("h2",m({},{id:"loader"}),"Loader"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",m({parentName:"p"},{href:"#connector"}),"connector")," that acquires bytes."),(0,r.kt)("p",null,"A loader is the dual to a ",(0,r.kt)("a",m({parentName:"p"},{href:"#saver"}),"saver"),". It has a no input and only performs a\nside effect that acquires bytes. Use a loader in the\n",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/from"}),(0,r.kt)("inlineCode",{parentName:"a"},"from"))," or ",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/load"}),(0,r.kt)("inlineCode",{parentName:"a"},"load"))," operators."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",m({parentName:"li"},{href:"/connectors"}),"all connectors"))),(0,r.kt)("h2",m({},{id:"node"}),"Node"),(0,r.kt)("p",null,"A host for ",(0,r.kt)("a",m({parentName:"p"},{href:"#pipeline"}),"pipelines")," and storage reachable over the network."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir-node")," binary starts a node in a dedicated server process that\nlistens on TCP port 5158."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/deploy-a-node"}),"Deploy a node")),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",m({parentName:"li"},{href:"/rest-api"}),"REST API")," to manage a node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/user-guides/import-into-a-node/"}),"Import into a node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/user-guides/export-from-a-node/"}),"Export from a node"))),(0,r.kt)("h2",m({},{id:"metrics"}),"Metrics"),(0,r.kt)("p",null,"Runtime statistics about pipeline execution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/collect-metrics"}),"Collect metrics"))),(0,r.kt)("h2",m({},{id:"operator"}),"Operator"),(0,r.kt)("p",null,"The building block of a ",(0,r.kt)("a",m({parentName:"p"},{href:"#pipeline"}),"pipeline"),"."),(0,r.kt)("p",null,"An operator is a ",(0,r.kt)("a",m({parentName:"p"},{href:"#source"}),"source"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"#transformation"}),"transformation"),", or\n",(0,r.kt)("a",m({parentName:"p"},{href:"#sink"}),"sink"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See all available ",(0,r.kt)("a",m({parentName:"li"},{href:"/operators"}),"operators"))),(0,r.kt)("h2",m({},{id:"pac"}),"PaC"),(0,r.kt)("p",null,"The acronym PaC stands for ",(0,r.kt)("em",{parentName:"p"},"Pipelines as Code"),". It is meant as an adaptation of\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Infrastructure_as_code"}),"Infrastructure as Code\n(IaC)")," with pipelines\nrepresent the (data) infrastructure that is provisioning as code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to provision ",(0,r.kt)("a",m({parentName:"li"},{href:"/user-guides/run-pipelines/#as-code"}),"piplines as\ncode"),".")),(0,r.kt)("h2",m({},{id:"parser"}),"Parser"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",m({parentName:"p"},{href:"#format"}),"format")," that translates bytes into events."),(0,r.kt)("p",null,"A parser is the dual to a ",(0,r.kt)("a",m({parentName:"p"},{href:"#printer"}),"printer"),". Use a parser in the\n",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/from"}),(0,r.kt)("inlineCode",{parentName:"a"},"from"))," or ",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/read"}),(0,r.kt)("inlineCode",{parentName:"a"},"read"))," operators. You\ncan use the ",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/parse"}),(0,r.kt)("inlineCode",{parentName:"a"},"parse"))," operator to parse a single field\nwith a parser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",m({parentName:"li"},{href:"/formats"}),"all formats"))),(0,r.kt)("h2",m({},{id:"partition"}),"Partition"),(0,r.kt)("p",null,"The horizontal scaling unit of the storage attached to a ",(0,r.kt)("a",m({parentName:"p"},{href:"#node"}),"node"),"."),(0,r.kt)("p",null,"A partition contains the raw data and optionally a set of indexes. Supported\nformats are ",(0,r.kt)("a",m({parentName:"p"},{href:"https://parquet.apache.org"}),"Parquet")," or\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#control-the-partition-size"}),"Control the partition size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#configure-catalog-and-partition-indexes"}),"Configure catalog and partition indexes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#select-the-store-format"}),"Select the store format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#adjust-the-store-compression"}),"Adjust the store\ncompression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/setup-guides/tune-performance/#rebuild-partitions"}),"Rebuild partitions"))),(0,r.kt)("h2",m({},{id:"pipeline"}),"Pipeline"),(0,r.kt)("p",null,"Combines a set of ",(0,r.kt)("a",m({parentName:"p"},{href:"#operator"}),"operators")," into a dataflow graph."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"how pipelines work")),(0,r.kt)("li",{parentName:"ul"},"Understand the ",(0,r.kt)("a",m({parentName:"li"},{href:"/language"}),"pipeline language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/user-guides/run-pipelines/"}),"Run a pipeline"))),(0,r.kt)("h2",m({},{id:"platform"}),"Platform"),(0,r.kt)("p",null,"Control plane for nodes and pipelines, accessible through ",(0,r.kt)("a",m({parentName:"p"},{href:"#app"}),"app")," at\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),"."),(0,r.kt)("h2",m({},{id:"printer"}),"Printer"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",m({parentName:"p"},{href:"#format"}),"format")," that translates events into bytes."),(0,r.kt)("p",null,"A printer is the dual to a ",(0,r.kt)("a",m({parentName:"p"},{href:"#parser"}),"parser"),". Use a parser in the\n",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/to"}),(0,r.kt)("inlineCode",{parentName:"a"},"to"))," or ",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/write"}),(0,r.kt)("inlineCode",{parentName:"a"},"write"))," operators."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",m({parentName:"li"},{href:"/formats"}),"all formats"))),(0,r.kt)("h2",m({},{id:"saver"}),"Saver"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",m({parentName:"p"},{href:"#connector"}),"connector")," that emits bytes."),(0,r.kt)("p",null,"A saver is the dual to a ",(0,r.kt)("a",m({parentName:"p"},{href:"#loader"}),"loader"),". It has a no output and only performs\na side effect that emits bytes. Use a saver in the ",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/to"}),(0,r.kt)("inlineCode",{parentName:"a"},"to"))," or\n",(0,r.kt)("a",m({parentName:"p"},{href:"/operators/save"}),(0,r.kt)("inlineCode",{parentName:"a"},"save"))," operators."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",m({parentName:"li"},{href:"/connectors"}),"all connectors"))),(0,r.kt)("h2",m({},{id:"schema"}),"Schema"),(0,r.kt)("p",null,"A named record type describing the top-level structure of a data frame."),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"/data-model/schemas"}),"Schemas")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/user-guides/show-available-schemas"}),"Show available schemas"))),(0,r.kt)("h2",m({},{id:"sink"}),"Sink"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",m({parentName:"p"},{href:"#operator"}),"operator")," consuming input, without producing any output."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines"))),(0,r.kt)("h2",m({},{id:"source"}),"Source"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",m({parentName:"p"},{href:"#operator"}),"operator")," producing output, without consuming any input."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines"))),(0,r.kt)("h2",m({},{id:"tql"}),"TQL"),(0,r.kt)("p",null,"An acronym for ",(0,r.kt)("em",{parentName:"p"},"Tenzir Query Language"),"."),(0,r.kt)("p",null,"TQL is the language in which users write ",(0,r.kt)("a",m({parentName:"p"},{href:"#pipeline"}),"pipelines"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about the ",(0,r.kt)("a",m({parentName:"li"},{href:"/language"}),"language")),(0,r.kt)("li",{parentName:"ul"},"Understand the ",(0,r.kt)("a",m({parentName:"li"},{href:"/language/syntax"}),"syntax"))),(0,r.kt)("h2",m({},{id:"transformation"}),"Transformation"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",m({parentName:"p"},{href:"#operator"}),"operator")," consuming both input and producing output."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",m({parentName:"li"},{href:"/pipelines"}),"pipelines"))))}b.isMDXComponent=!0}}]);