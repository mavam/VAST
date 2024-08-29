"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15944],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>g,default:()=>j,frontMatter:()=>y,metadata:()=>h,toc:()=>N});var r=t(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(p)for(var t of p(n))s.call(n,t)&&c(e,t,n[t]);return e},u=(e,n)=>o(e,i(n)),d=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const y={sidebar_custom_props:{format:{parser:!0,printer:!0}}},g="json",h={unversionedId:"formats/json",id:"formats/json",title:"json",description:"Reads and writes JSON.",source:"@site/docs/formats/json.md",sourceDirName:"formats",slug:"/formats/json",permalink:"/next/formats/json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/json.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"grok",permalink:"/next/formats/grok"},next:{title:"kv",permalink:"/next/formats/kv"}},f={},N=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--schema=&lt;schema&gt;</code> (Parser)",id:"--schemaschema-parser",level:3},{value:"<code>--selector=&lt;field[:prefix]&gt;</code> (Parser)",id:"--selectorfieldprefix-parser",level:3},{value:"<code>--no-infer</code> (Parser)",id:"--no-infer-parser",level:3},{value:"<code>--unnest-separator=&lt;string&gt;</code> (Parser)",id:"--unnest-separatorstring-parser",level:3},{value:"<code>--ndjson</code> (Parser)",id:"--ndjson-parser",level:3},{value:"<code>--precise</code> (Parser)",id:"--precise-parser",level:3},{value:"<code>--raw</code> (Parser)",id:"--raw-parser",level:3},{value:"<code>--arrays-of-objects</code> (Parser)",id:"--arrays-of-objects-parser",level:3},{value:"<code>--c|--compact-output</code> (Printer)",id:"--c--compact-output-printer",level:3},{value:"<code>--C|--color-output</code> (Printer)",id:"--c--color-output-printer",level:3},{value:"<code>--M|--monochrome-output</code> (Printer)",id:"--m--monochrome-output-printer",level:3},{value:"<code>--omit-nulls</code> (Printer)",id:"--omit-nulls-printer",level:3},{value:"<code>--omit-empty-objects</code> (Printer)",id:"--omit-empty-objects-printer",level:3},{value:"<code>--omit-empty-lists</code> (Printer)",id:"--omit-empty-lists-printer",level:3},{value:"<code>--omit-empty</code> (Printer)",id:"--omit-empty-printer",level:3},{value:"<code>--arrays-of-objects</code> (Printer)",id:"--arrays-of-objects-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:N},v="wrapper";function j(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.yg)(v,u(m(m({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",m({},{id:"json"}),"json"),(0,r.yg)("p",null,"Reads and writes JSON."),(0,r.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("p",null,"Parser:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"json [--schema <schema>] [--selector <field[:prefix]>] [--unnest-separator <string>]\n     [--no-infer] [--ndjson] [--precise] [--raw]\n     [--arrays-of-objects]\n")),(0,r.yg)("p",null,"Printer:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"json [-c|--compact-output] [-C|--color-output] [-M|--monochrome-output]\n     [--omit-nulls] [--omit-empty-objects] [--omit-empty-lists] [--omit-empty]\n     [--arrays-of-objects]\n")),(0,r.yg)("h2",m({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," format provides a parser and printer for JSON and ",(0,r.yg)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"}),"line-delimited\nJSON")," objects."),(0,r.yg)("h3",m({},{id:"--schemaschema-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--schema=<schema>")," (Parser)"),(0,r.yg)("p",null,"Provide the name of a ",(0,r.yg)("a",m({parentName:"p"},{href:"/next/data-model/schemas"}),"schema")," to be used by the\nparser. If the schema uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"blob")," type, then the JSON parser expects\nbase64-encoded strings."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--schema")," option is incompatible with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--selector")," option."),(0,r.yg)("h3",m({},{id:"--selectorfieldprefix-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--selector=<field[:prefix]>")," (Parser)"),(0,r.yg)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,r.yg)("p",null,"For example, the ",(0,r.yg)("a",m({parentName:"p"},{href:"/next/formats/suricata"}),"Suricata EVE JSON")," format includes a field\n",(0,r.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,r.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,r.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,r.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,r.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--selector")," option is incompatible with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--schema")," option."),(0,r.yg)("h3",m({},{id:"--no-infer-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--no-infer")," (Parser)"),(0,r.yg)("p",null,"The JSON parser automatically infers types in the input JSON."),(0,r.yg)("p",null,"The flag ",(0,r.yg)("inlineCode",{parentName:"p"},"--no-infer")," toggles this behavior, and requires the user to provide an\ninput schema for the JSON to explicitly parse into, e.g., using the ",(0,r.yg)("inlineCode",{parentName:"p"},"--selector"),"\noption."),(0,r.yg)("p",null,"Schema inference happens on a best-effort basis, and is constantly being\nimproved to match Tenzir's type system."),(0,r.yg)("h3",m({},{id:"--unnest-separatorstring-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--unnest-separator=<string>")," (Parser)"),(0,r.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,r.yg)("p",null,"A popular example of this is the ",(0,r.yg)("a",m({parentName:"p"},{href:"/next/formats/zeek-json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,r.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,r.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,r.yg)("p",null,"Without an unnest separator, the data looks like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "id.orig_h" : "1.1.1.1",\n  "id.orig_p" : 10,\n  "id.resp_h" : "1.1.1.2",\n  "id.resp_p" : 5\n}\n')),(0,r.yg)("p",null,"With the unnest separator set to ",(0,r.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "id" : {\n    "orig_h" : "1.1.1.1",\n    "orig_p" : 10,\n    "resp_h" : "1.1.1.2",\n    "resp_p" : 5\n  }\n}\n')),(0,r.yg)("h3",m({},{id:"--ndjson-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--ndjson")," (Parser)"),(0,r.yg)("p",null,"Treat the input as newline-delimited JSON (NDJSON)."),(0,r.yg)("p",null,"NDJSON requires that exactly one event exists per line. This allows for better\nerror recovery in cases of malformed input, as unlike for the regular JSON\nparser malformed lines can be skipped."),(0,r.yg)("p",null,"Popular examples of NDJSON include the Suricata Eve JSON and the Zeek Streaming\nJSON formats. Tenzir supports ",(0,r.yg)("a",m({parentName:"p"},{href:"/next/formats/suricata"}),(0,r.yg)("inlineCode",{parentName:"a"},"suricata"))," and\n",(0,r.yg)("a",m({parentName:"p"},{href:"/next/formats/zeek-json"}),(0,r.yg)("inlineCode",{parentName:"a"},"zeek-json"))," parsers out of the box that utilize this mechanism."),(0,r.yg)("h3",m({},{id:"--precise-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--precise")," (Parser)"),(0,r.yg)("p",null,"Ensure that only fields that are actually present in the input are contained in\nthe returned events. Without this option, the input consisting of ",(0,r.yg)("inlineCode",{parentName:"p"},'{"a": 1}')," and\n",(0,r.yg)("inlineCode",{parentName:"p"},'{"b": 2}')," can be result in the events ",(0,r.yg)("inlineCode",{parentName:"p"},'{"a": 1, "b": null}')," and\n",(0,r.yg)("inlineCode",{parentName:"p"},'{"a": null, "b": 2}'),". With it, the output is ",(0,r.yg)("inlineCode",{parentName:"p"},'{"a": 1}')," and ",(0,r.yg)("inlineCode",{parentName:"p"},'{"b": 2}'),". For\nsome inputs and queries, this can be significantly more expensive."),(0,r.yg)("h3",m({},{id:"--raw-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--raw")," (Parser)"),(0,r.yg)("p",null,"Use only the raw JSON types. This means that all strings are parsed as ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),",\nirrespective of whether they are a valid ",(0,r.yg)("inlineCode",{parentName:"p"},"ip"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"duration"),", etc. Also, since JSON\nonly has one generic number type, all numbers are parsed with the ",(0,r.yg)("inlineCode",{parentName:"p"},"double")," type."),(0,r.yg)("h3",m({},{id:"--arrays-of-objects-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--arrays-of-objects")," (Parser)"),(0,r.yg)("p",null,"Parse arrays of objects, with every object in the outermost arrays resulting in\none event each. This is particularly useful when interfacing with REST APIs,\nwhich often yield large arrays of objects instead of newline-delimited JSON\nobjects."),(0,r.yg)("h3",m({},{id:"--c--compact-output-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--c|--compact-output")," (Printer)"),(0,r.yg)("p",null,"Switch to line-delimited JSON output (JSONL/NDJSON)."),(0,r.yg)("h3",m({},{id:"--c--color-output-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--C|--color-output")," (Printer)"),(0,r.yg)("p",null,"Colorize the output."),(0,r.yg)("p",null,"The option enables colorizing the output similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"jq")," by emitting terminal\nescape sequences that represent colors."),(0,r.yg)("p",null,"Unlike ",(0,r.yg)("inlineCode",{parentName:"p"},"jq"),", coloring is currently opt-in. In the future, we will perform TTY\ndetection and colorize the output when write to stdout."),(0,r.yg)("p",null,"Tenzir honors the ",(0,r.yg)("a",m({parentName:"p"},{href:"https://no-color.org/"}),(0,r.yg)("inlineCode",{parentName:"a"},"NO_COLOR"))," environment variable and\nwon't colorize the output when the variable is present."),(0,r.yg)("h3",m({},{id:"--m--monochrome-output-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--M|--monochrome-output")," (Printer)"),(0,r.yg)("p",null,"Disables colored output."),(0,r.yg)("p",null,"This is currently the default. In the future, we will perform TTY detection and\ncolorize the output when write to stdout. Use this option today if you want to\navoid an implicit upgrade to colors in the future."),(0,r.yg)("h3",m({},{id:"--omit-nulls-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--omit-nulls")," (Printer)"),(0,r.yg)("p",null,"Strips ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," fields from the output."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "a": null,\n  "b": [42, null, 43],\n  "c": {\n    "d": null,\n    "e": 42\n  }\n}\n')),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"--omit-nulls"),", this example becomes:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "b": [42, 43],\n  "c": {\n    "e": 42\n  }\n}\n')),(0,r.yg)("h3",m({},{id:"--omit-empty-objects-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--omit-empty-objects")," (Printer)"),(0,r.yg)("p",null,"Strips empty objects from the output."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "w": null,\n  "x": {},\n  "y": {\n    "z": {}\n  }\n}\n')),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"--omit-empty-objects"),", this example becomes:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "w": 42,\n}\n')),(0,r.yg)("h3",m({},{id:"--omit-empty-lists-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--omit-empty-lists")," (Printer)"),(0,r.yg)("p",null,"Strips empty lists from the output."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "m": [],\n  "n": {},\n  "o": {\n    "p": []\n  }\n}\n')),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", this example becomes:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "m": {},\n  "o": {}\n}\n')),(0,r.yg)("h3",m({},{id:"--omit-empty-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--omit-empty")," (Printer)"),(0,r.yg)("p",null,"This options combines all other ",(0,r.yg)("inlineCode",{parentName:"p"},"--omit-*")," options."),(0,r.yg)("h3",m({},{id:"--arrays-of-objects-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--arrays-of-objects")," (Printer)"),(0,r.yg)("p",null,"Prints one array of objects per batch of events arriving at the printer as\nopposed to printing one object per event."),(0,r.yg)("p",null,"This is particularly useful when interfacing with REST APIs, which often require\nsets of events grouped into one JSON object."),(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",m({parentName:"p"},{href:"/next/operators/batch"}),(0,r.yg)("inlineCode",{parentName:"a"},"batch"))," operator to explicitly control how many\nevents get grouped together in the same array."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),'{\n  "foo": 1\n}\n{\n  "foo": 2\n}\n')),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"--arrays-of-objects"),", this example becomes:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),'[{\n  "foo": 1\n},\n{\n  "foo": 2\n}]\n')),(0,r.yg)("h2",m({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Read JSON from stdin, either NDJSON or tree-structured:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"read json\n")),(0,r.yg)("p",null,"Write JSON without empty fields to a file:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"to file /tmp/result.json write json --omit-empty\n")),(0,r.yg)("p",null,"Print NDJSON to stdout:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"write json -c\n")))}j.isMDXComponent=!0}}]);