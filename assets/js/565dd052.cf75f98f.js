"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92444],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=i(n),c=r,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||p;return n?t.createElement(m,o(o({ref:a},y),{},{components:n})):t.createElement(m,o({ref:a},y))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55888:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&y(e,n,a[n]);if(l)for(var n of l(a))i.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>p(e,o(a)),c=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const m={},u="read_ssv",h={unversionedId:"tql2/operators/read_ssv",id:"tql2/operators/read_ssv",title:"read_ssv",description:"Read SSV (Space-Separated Values) from a byte stream.",source:"@site/docs/tql2/operators/read_ssv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_ssv",permalink:"/next/tql2/operators/read_ssv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/read_ssv.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_pcap",permalink:"/next/tql2/operators/read_pcap"},next:{title:"read_suricata",permalink:"/next/tql2/operators/read_suricata"}},N={},f=[{value:"Description",id:"description",level:2},{value:"<code>auto_expand = bool (optional)</code>",id:"auto_expand--bool-optional",level:3},{value:"<code>comments = bool (optional)</code>",id:"comments--bool-optional",level:3},{value:"<code>header = string (optional)</code>",id:"header--string-optional",level:3},{value:"<code>list_sep = string (optional)</code>",id:"list_sep--string-optional",level:3},{value:"<code>null_value = string (optional)</code>",id:"null_value--string-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = string (optional)</code>",id:"schema--string-optional",level:3},{value:"<code>selector = string (optional)</code>",id:"selector--string-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = string (optional)</code>",id:"unflatten--string-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Parse an SSV file",id:"parse-an-ssv-file",level:3}],F={toc:f},E="wrapper";function b(e){var a=e,{components:n}=a,r=c(a,["components"]);return(0,t.yg)(E,d(g(g({},F),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"read_ssv"}),"read_ssv"),(0,t.yg)("p",null,"Read SSV (Space-Separated Values) from a byte stream."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_ssv"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [list_sep"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, null_value"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, comments"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, header"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, auto_expand"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"          schema"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, selector"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, schema_only"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))))),(0,t.yg)("h2",g({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"read_ssv")," operator transforms a byte stream into a event stream by parsing\nthe bytes as SSV."),(0,t.yg)("h3",g({},{id:"auto_expand--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"auto_expand = bool (optional)")),(0,t.yg)("p",null,"Automatically add fields to the schema when encountering events with too many\nvalues instead of dropping the excess values."),(0,t.yg)("h3",g({},{id:"comments--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"comments = bool (optional)")),(0,t.yg)("p",null,'Treat lines beginning with "#" as comments.'),(0,t.yg)("h3",g({},{id:"header--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"header = string (optional)")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"string")," to be used as a ",(0,t.yg)("inlineCode",{parentName:"p"},"header")," for the parsed values.\nIf unspecified, the first line of the input is used as the header."),(0,t.yg)("h3",g({},{id:"list_sep--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"list_sep = string (optional)")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"string")," separating the elements ",(0,t.yg)("em",{parentName:"p"},"inside")," a list."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},","),"."),(0,t.yg)("h3",g({},{id:"null_value--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"null_value = string (optional)")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"string")," denoting an absent value."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"-"),"."),(0,t.yg)("h3",g({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,t.yg)("p",null,"In the case of SSV this means that no parsing of data takes place at all\nand every value remains a string."),(0,t.yg)("h3",g({},{id:"schema--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema = string (optional)")),(0,t.yg)("p",null,"Provide the name of a schema to be used by the\nparser."),(0,t.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,t.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,t.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,t.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,t.yg)("h3",g({},{id:"selector--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"selector = string (optional)")),(0,t.yg)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,t.yg)("p",null,"The string is parsed as ",(0,t.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,t.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,t.yg)("h3",g({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h3",g({},{id:"unflatten--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"unflatten = string (optional)")),(0,t.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,t.yg)("p",null,"A popular example of this is the ",(0,t.yg)("a",g({parentName:"p"},{href:"/next/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,t.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,t.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Without unflattening"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With the unflatten separator set to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",g({},{id:"examples"}),"Examples"),(0,t.yg)("h3",g({},{id:"parse-an-ssv-file"}),"Parse an SSV file"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"txt","data-theme":"github-dark-default"}),"input.ssv"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"txt","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"txt","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"message count ip")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},'text 42 "1.1.1.1"')),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},'"longer string" 100 1.1.1.2'))))),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"load"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "input.ssv"')),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_ssv"))))),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{message"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "text"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 42"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", ip"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{message"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "longer string"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 100"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", ip"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);