"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94314],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>c});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,c=d["".concat(l,".").concat(m)]||d[m]||g[m]||p;return n?t.createElement(c,o(o({ref:a},y),{},{components:n})):t.createElement(c,o({ref:a},y))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28003:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>N,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>E});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&y(e,n,a[n]);if(s)for(var n of s(a))i.call(a,n)&&y(e,n,a[n]);return e},g=(e,a)=>p(e,o(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const c={},N="read_ndjson",u={unversionedId:"tql2/operators/read_ndjson",id:"tql2/operators/read_ndjson",title:"read_ndjson",description:"Parses an incoming NDJSON (newline-delimited JSON) stream into events.",source:"@site/docs/tql2/operators/read_ndjson.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_ndjson",permalink:"/next/tql2/operators/read_ndjson",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/read_ndjson.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_lines",permalink:"/next/tql2/operators/read_lines"},next:{title:"read_ssv",permalink:"/next/tql2/operators/read_ssv"}},h={},E=[{value:"Description",id:"description",level:2},{value:"<code>merge = bool (optional)</code>",id:"merge--bool-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = str (optional)</code>",id:"schema--str-optional",level:3},{value:"<code>selector = str (optional)</code>",id:"selector--str-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = str (optional)</code>",id:"unflatten--str-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Read a newline-delimited JSON file",id:"read-a-newline-delimited-json-file",level:3}],f={toc:E},F="wrapper";function b(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(F,g(d(d({},f),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"read_ndjson"}),"read_ndjson"),(0,t.yg)("p",null,"Parses an incoming NDJSON (newline-delimited JSON) stream into events."),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_ndjson"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [schema"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, selector"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, schema_only"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"            merge"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"Parses an incoming NDJSON byte stream into events."),(0,t.yg)("h3",d({},{id:"merge--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"merge = bool (optional)")),(0,t.yg)("p",null,"Merges all incoming events into a single schema","*"," that converges over time. This\noption is usually the fastest ",(0,t.yg)("em",{parentName:"p"},"for reading")," highly heterogeneous data, but can\nlead to huge schemas filled with nulls and imprecise results. Use with caution."),(0,t.yg)("p",null,"*",": In selector mode, only events with the same selector are merged."),(0,t.yg)("h3",d({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw JSON types. This means that JSON numbers will be\nparsed as numbers, but every string will remain a string, even if\nthey would be valid ",(0,t.yg)("inlineCode",{parentName:"p"},"ip"),"s or ",(0,t.yg)("inlineCode",{parentName:"p"},"duration"),"s."),(0,t.yg)("p",null,"If a known ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," is given, fields will still be parsed according to the schema."),(0,t.yg)("p",null,"Use with caution."),(0,t.yg)("h3",d({},{id:"schema--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema = str (optional)")),(0,t.yg)("p",null,"Provide the name of a schema to be used by the parser."),(0,t.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,t.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,t.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,t.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,t.yg)("h3",d({},{id:"selector--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"selector = str (optional)")),(0,t.yg)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,t.yg)("p",null,"The string is parsed as ",(0,t.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,t.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,t.yg)("h3",d({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h3",d({},{id:"unflatten--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"unflatten = str (optional)")),(0,t.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,t.yg)("p",null,"A popular example of this is the ",(0,t.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,t.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,t.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Without unflattening"),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With the unflatten separator set to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("h3",d({},{id:"read-a-newline-delimited-json-file"}),"Read a newline-delimited JSON file"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"versions.json"),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'"product"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Tenzir"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'"version.major"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'"version.minor"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"22"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'"product"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Tenzir"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'"version.major"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'"version.minor"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"21"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "versions.json"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_ndjson"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," unflatten"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"."'))))),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  product"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Tenzir"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  version"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    major"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 4"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    minor"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 22"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  product"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Tenzir"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  version"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    major"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 4"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    minor"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 21"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);