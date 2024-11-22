"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15318],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=i(t),d=r,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||o;return t?n.createElement(m,p(p({ref:a},y),{},{components:t})):n.createElement(m,p({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67798:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>E,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&y(e,t,a[t]);if(l)for(var t of l(a))i.call(a,t)&&y(e,t,a[t]);return e},c=(e,a)=>o(e,p(a)),d=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={},u="to_hive",f={unversionedId:"tql2/operators/to_hive",id:"tql2/operators/to_hive",title:"to_hive",description:"Writes events to a URI using hive partitioning.",source:"@site/docs/tql2/operators/to_hive.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/to_hive",permalink:"/next/tql2/operators/to_hive",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/to_hive.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"to_azure_log_analytics",permalink:"/next/tql2/operators/to_azure_log_analytics"},next:{title:"to_splunk",permalink:"/next/tql2/operators/to_splunk"}},N={},h=[{value:"Description",id:"description",level:2},{value:"<code>uri: string</code>",id:"uri-string",level:3},{value:"<code>partition_by = list&lt;field&gt;</code>",id:"partition_by--listfield",level:3},{value:"<code>format = string</code>",id:"format--string",level:3},{value:"<code>timeout = duration (optional)</code>",id:"timeout--duration-optional",level:3},{value:"<code>max_size = int (optional)</code>",id:"max_size--int-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Partition by a single field into local JSON files",id:"partition-by-a-single-field-into-local-json-files",level:3},{value:"Write a Parquet file into Azure Blob Store",id:"write-a-parquet-file-into-azure-blob-store",level:3},{value:"Write partitioned JSON into an S3 bucket",id:"write-partitioned-json-into-an-s3-bucket",level:3}],F={toc:h},b="wrapper";function E(e){var a=e,{components:t}=a,r=d(a,["components"]);return(0,n.yg)(b,c(g(g({},F),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"to_hive"}),"to_hive"),(0,n.yg)("p",null,"Writes events to a URI using hive partitioning."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," uri"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, partition_by"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"list"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"<"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"field"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", format"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [timeout"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, max_size"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))))),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Hive partitioning is a partitioning scheme where a set of fields is used to\npartition events. For each combination of these fields, a directory is derived\nunder which all events with the same field values will be stored. For example,\nif the events are partitioned by the fields ",(0,n.yg)("inlineCode",{parentName:"p"},"year")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"month"),", then the files\nin the directory ",(0,n.yg)("inlineCode",{parentName:"p"},"/year=2024/month=10")," will contain all events where\n",(0,n.yg)("inlineCode",{parentName:"p"},"year == 2024")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"month == 10"),"."),(0,n.yg)("h3",g({},{id:"uri-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"uri: string")),(0,n.yg)("p",null,"The base URI for all partitions."),(0,n.yg)("h3",g({},{id:"partition_by--listfield"}),(0,n.yg)("inlineCode",{parentName:"h3"},"partition_by = list<field>")),(0,n.yg)("p",null,"A list of fields that will be used for partitioning. Note that these fields will\nbe elided from the output, as their value is already specified by the path."),(0,n.yg)("h3",g({},{id:"format--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"format = string")),(0,n.yg)("p",null,"The name of the format that will be used for writing, for example ",(0,n.yg)("inlineCode",{parentName:"p"},"json")," or\n",(0,n.yg)("inlineCode",{parentName:"p"},"parquet"),". This will also be used for the file extension."),(0,n.yg)("h3",g({},{id:"timeout--duration-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"timeout = duration (optional)")),(0,n.yg)("p",null,"The time after which a new file will be opened for the same partition group.\nDefaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"5min"),"."),(0,n.yg)("h3",g({},{id:"max_size--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"max_size = int (optional)")),(0,n.yg)("p",null,"The total file size after which a new file will be opened for the same partition\ngroup. Note that files will typically be slightly larger than this limit,\nbecause it opens a new file when only after it is exceeded. Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"100M"),"."),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("h3",g({},{id:"partition-by-a-single-field-into-local-json-files"}),"Partition by a single field into local JSON files"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [{a"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {a"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {a"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}]")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/out/"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", partition_by"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"[a], format"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"json"')),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"// This pipeline produces two files:")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"// -> /tmp/out/a=0/1.json:")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),'//    {"b": 0}')),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),'//    {"b": 1}')),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"// -> /tmp/out/a=1/2.json:")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),'//    {"b": 2}'))))),(0,n.yg)("h3",g({},{id:"write-a-parquet-file-into-azure-blob-store"}),"Write a Parquet file into Azure Blob Store"),(0,n.yg)("p",null,"Write as Parquet into the Azure Blob Filesystem, partitioned by year, month and\nday."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "abfs://domain/bucket"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", partition_by"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"[year, month, day], format"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"parquet"')),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"// -> abfs://domain/bucket/year=<year>/month=<month>/day=<day>/<num>.parquet"))))),(0,n.yg)("h3",g({},{id:"write-partitioned-json-into-an-s3-bucket"}),"Write partitioned JSON into an S3 bucket"),(0,n.yg)("p",null,"Write JSON into S3, partitioned by year and month, opening a new file after\n1\u2009GB."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"year "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," ts"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"year"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"()")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"month "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," ts"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"month"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"()")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "s3://my-bucket/some/subdirectory"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  partition_by"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"[year, month],")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  format"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"json"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  max_size"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1G")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"// -> s3://my-bucket/some/subdirectory/year=<year>/month=<month>/<num>.json"))))))}E.isMDXComponent=!0}}]);