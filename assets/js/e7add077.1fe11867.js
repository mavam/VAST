"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>g,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const h={sidebar_custom_props:{format:{parser:!0,printer:!0}}},k="json",f={unversionedId:"formats/json",id:"version-Tenzir v4.9/formats/json",title:"json",description:"Reads and writes JSON.",source:"@site/versioned_docs/version-Tenzir v4.9/formats/json.md",sourceDirName:"formats",slug:"/formats/json",permalink:"/Tenzir v4.9/formats/json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/formats/json.md",tags:[],version:"Tenzir v4.9",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"grok",permalink:"/Tenzir v4.9/formats/grok"},next:{title:"kv",permalink:"/Tenzir v4.9/formats/kv"}},N={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--schema=&lt;schema&gt;</code> (Parser)",id:"--schemaschema-parser",level:3},{value:"<code>--selector=&lt;field[:prefix]&gt;</code> (Parser)",id:"--selectorfieldprefix-parser",level:3},{value:"<code>--no-infer</code> (Parser)",id:"--no-infer-parser",level:3},{value:"<code>--unnest-separator=&lt;string&gt;</code> (Parser)",id:"--unnest-separatorstring-parser",level:3},{value:"<code>--ndjson</code> (Parser)",id:"--ndjson-parser",level:3},{value:"<code>--raw</code> (Parser)",id:"--raw-parser",level:3},{value:"<code>--arrays-of-objects</code> (Parser)",id:"--arrays-of-objects-parser",level:3},{value:"<code>--c|--compact-output</code> (Printer)",id:"--c--compact-output-printer",level:3},{value:"<code>--C|--color-output</code> (Printer)",id:"--c--color-output-printer",level:3},{value:"<code>--M|--monochrome-output</code> (Printer)",id:"--m--monochrome-output-printer",level:3},{value:"<code>--omit-nulls</code> (Printer)",id:"--omit-nulls-printer",level:3},{value:"<code>--omit-empty-objects</code> (Printer)",id:"--omit-empty-objects-printer",level:3},{value:"<code>--omit-empty-lists</code> (Printer)",id:"--omit-empty-lists-printer",level:3},{value:"<code>--omit-empty</code> (Printer)",id:"--omit-empty-printer",level:3},{value:"Examples",id:"examples",level:2}],y={toc:v},b="wrapper";function g(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(b,d(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"json"}),"json"),(0,r.kt)("p",null,"Reads and writes JSON."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Parser:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"json [--schema=<schema>] [--selector=<field[:prefix]>] [--unnest-separator=<string>]\n     [--no-infer] [--ndjson] [--raw]\n")),(0,r.kt)("p",null,"Printer:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"json [-c|--compact-output] [-C|--color-output] [-M|--monochrome-output]\n     [--omit-nulls] [--omit-empty-objects] [--omit-empty-lists] [--omit-empty]\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," format provides a parser and printer for JSON and ",(0,r.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"}),"line-delimited\nJSON")," objects."),(0,r.kt)("h3",c({},{id:"--schemaschema-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--schema=<schema>")," (Parser)"),(0,r.kt)("p",null,"Provide the name of a ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.9/data-model/schemas"}),"schema")," to be used by the\nparser. If the schema uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"blob")," type, then the JSON parser expects\nbase64-encoded strings."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--schema")," option is incompatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--selector")," option."),(0,r.kt)("h3",c({},{id:"--selectorfieldprefix-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--selector=<field[:prefix]>")," (Parser)"),(0,r.kt)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.9/formats/suricata"}),"Suricata EVE JSON")," format includes a field\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--selector")," option is incompatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--schema")," option."),(0,r.kt)("h3",c({},{id:"--no-infer-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--no-infer")," (Parser)"),(0,r.kt)("p",null,"The JSON parser automatically infers types in the input JSON."),(0,r.kt)("p",null,"The flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-infer")," toggles this behavior, and requires the user to provide an\ninput schema for the JSON to explicitly parse into, e.g., using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--selector"),"\noption."),(0,r.kt)("p",null,"Schema inference happens on a best-effort basis, and is constantly being\nimproved to match Tenzir's type system."),(0,r.kt)("h3",c({},{id:"--unnest-separatorstring-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--unnest-separator=<string>")," (Parser)"),(0,r.kt)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,r.kt)("p",null,"A popular example of this is the ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.9/formats/zeek-json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,r.kt)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,r.kt)("p",null,"Without an unnest separator, the data looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "id.orig_h" : "1.1.1.1",\n  "id.orig_p" : 10,\n  "id.resp_h" : "1.1.1.2",\n  "id.resp_p" : 5\n}\n')),(0,r.kt)("p",null,"With the unnest separator set to ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "id" : {\n    "orig_h" : "1.1.1.1",\n    "orig_p" : 10,\n    "resp_h" : "1.1.1.2",\n    "resp_p" : 5\n  }\n}\n')),(0,r.kt)("h3",c({},{id:"--ndjson-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--ndjson")," (Parser)"),(0,r.kt)("p",null,"Treat the input as newline-delimited JSON (NDJSON)."),(0,r.kt)("p",null,"NDJSON requires that exactly one event exists per line. This allows for better\nerror recovery in cases of malformed input, as unlike for the regular JSON\nparser malformed lines can be skipped."),(0,r.kt)("p",null,"Popular examples of NDJSON include the Suricata Eve JSON and the Zeek Streaming\nJSON formats. Tenzir supports ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.9/formats/suricata"}),(0,r.kt)("inlineCode",{parentName:"a"},"suricata"))," and\n",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.9/formats/zeek-json"}),(0,r.kt)("inlineCode",{parentName:"a"},"zeek-json"))," parsers out of the box that utilize this mechanism."),(0,r.kt)("h3",c({},{id:"--raw-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--raw")," (Parser)"),(0,r.kt)("p",null,"Use only the raw JSON types. This means that all strings are parsed as ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),",\nirrespective of whether they are a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duration"),", etc. Also, since JSON\nonly has one generic number type, all numbers are parsed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," type."),(0,r.kt)("h3",c({},{id:"--arrays-of-objects-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--arrays-of-objects")," (Parser)"),(0,r.kt)("p",null,"Parse arrays of objects, with every object in the outermost arrays resulting in\none event each. This is particularly useful when interfacing with REST APIs,\nwhich often yield large arrays of objects instead of newline-delimited JSON\nobjects."),(0,r.kt)("h3",c({},{id:"--c--compact-output-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--c|--compact-output")," (Printer)"),(0,r.kt)("p",null,"Switch to line-delimited JSON output (JSONL/NDJSON)."),(0,r.kt)("h3",c({},{id:"--c--color-output-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--C|--color-output")," (Printer)"),(0,r.kt)("p",null,"Colorize the output."),(0,r.kt)("p",null,"The option enables colorizing the output similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," by emitting terminal\nescape sequences that represent colors."),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"jq"),", coloring is currently opt-in. In the future, we will perform TTY\ndetection and colorize the output when write to stdout."),(0,r.kt)("p",null,"Tenzir honors the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://no-color.org/"}),(0,r.kt)("inlineCode",{parentName:"a"},"NO_COLOR"))," environment variable and\nwon't colorize the output when the variable is present."),(0,r.kt)("h3",c({},{id:"--m--monochrome-output-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--M|--monochrome-output")," (Printer)"),(0,r.kt)("p",null,"Disables colored output."),(0,r.kt)("p",null,"This is currently the default. In the future, we will perform TTY detection and\ncolorize the output when write to stdout. Use this option today if you want to\navoid an implicit upgrade to colors in the future."),(0,r.kt)("h3",c({},{id:"--omit-nulls-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-nulls")," (Printer)"),(0,r.kt)("p",null,"Strips ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," fields from the output."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "a": null,\n  "b": [42, null, 43],\n  "c": {\n    "d": null,\n    "e": 42\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-nulls"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "b": [42, 43],\n  "c": {\n    "e": 42\n  }\n}\n')),(0,r.kt)("h3",c({},{id:"--omit-empty-objects-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty-objects")," (Printer)"),(0,r.kt)("p",null,"Strips empty objects from the output."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "w": null,\n  "x": {},\n  "y": {\n    "z": {}\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-empty-objects"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "w": 42,\n}\n')),(0,r.kt)("h3",c({},{id:"--omit-empty-lists-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty-lists")," (Printer)"),(0,r.kt)("p",null,"Strips empty lists from the output."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "m": [],\n  "n": {},\n  "o": {\n    "p": []\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "m": {},\n  "o": {}\n}\n')),(0,r.kt)("h3",c({},{id:"--omit-empty-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty")," (Printer)"),(0,r.kt)("p",null,"This options combines all other ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-*")," options."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read JSON from stdin, either NDJSON or tree-structured:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"read json\n")),(0,r.kt)("p",null,"Write JSON without empty fields to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"to file /tmp/result.json write json --omit-empty\n")),(0,r.kt)("p",null,"Print NDJSON to stdout:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"write json -c\n")))}g.isMDXComponent=!0}}]);