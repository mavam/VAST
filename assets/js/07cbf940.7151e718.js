"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15944],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?t.createElement(g,p(p({ref:a},y),{},{components:n})):t.createElement(g,p({ref:a},y))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50449:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>j,frontMatter:()=>g,metadata:()=>N,toc:()=>h});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&y(e,n,a[n]);if(s)for(var n of s(a))i.call(a,n)&&y(e,n,a[n]);return e},c=(e,a)=>o(e,p(a)),d=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const g={sidebar_custom_props:{format:{parser:!0,printer:!0}}},u="json",N={unversionedId:"formats/json",id:"formats/json",title:"json",description:"Reads and writes JSON.",source:"@site/docs/formats/json.md",sourceDirName:"formats",slug:"/formats/json",permalink:"/next/formats/json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/json.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"grok",permalink:"/next/formats/grok"},next:{title:"kv",permalink:"/next/formats/kv"}},f={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"<code>--ndjson</code> (Parser)",id:"--ndjson-parser",level:3},{value:"<code>--precise</code> (Parser)",id:"--precise-parser",level:3},{value:"<code>--no-infer</code> (Parser)",id:"--no-infer-parser",level:3},{value:"<code>--arrays-of-objects</code> (Parser)",id:"--arrays-of-objects-parser",level:3},{value:"<code>--c|--compact-output</code> (Printer)",id:"--c--compact-output-printer",level:3},{value:"<code>--C|--color-output</code> (Printer)",id:"--c--color-output-printer",level:3},{value:"<code>--M|--monochrome-output</code> (Printer)",id:"--m--monochrome-output-printer",level:3},{value:"<code>--omit-nulls</code> (Printer)",id:"--omit-nulls-printer",level:3},{value:"<code>--omit-empty-objects</code> (Printer)",id:"--omit-empty-objects-printer",level:3},{value:"<code>--omit-empty-lists</code> (Printer)",id:"--omit-empty-lists-printer",level:3},{value:"<code>--omit-empty</code> (Printer)",id:"--omit-empty-printer",level:3},{value:"<code>--arrays-of-objects</code> (Printer)",id:"--arrays-of-objects-printer",level:3},{value:"Examples",id:"examples",level:2}],E={toc:h},b="wrapper";function j(e){var a=e,{components:n}=a,r=d(a,["components"]);return(0,t.yg)(b,c(m(m({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",m({},{id:"json"}),"json"),(0,t.yg)("p",null,"Reads and writes JSON."),(0,t.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("p",null,"Parser:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"json [--merge] [--schema <schema>] [--selector <fieldname[:prefix]>]\n     [--schema-only] [--raw] [--unnest-separator <separator>]\n     [--ndjson] [--arrays-of-objects] [--precise] [--no-infer]\n")),(0,t.yg)("p",null,"Printer:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"json [-c|--compact-output] [-C|--color-output] [-M|--monochrome-output]\n     [--omit-nulls] [--omit-empty-objects] [--omit-empty-lists] [--omit-empty]\n     [--arrays-of-objects]\n")),(0,t.yg)("h2",m({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"json")," format provides a parser and printer for JSON and ",(0,t.yg)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"}),"line-delimited\nJSON")," objects."),(0,t.yg)("h3",m({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,t.yg)("p",null,"The JSON parser supports the common ",(0,t.yg)("a",m({parentName:"p"},{href:"/next/formats#parser-schema-inference"}),"schema inference options"),"."),(0,t.yg)("h3",m({},{id:"--ndjson-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--ndjson")," (Parser)"),(0,t.yg)("p",null,"Treat the input as newline-delimited JSON (NDJSON)."),(0,t.yg)("p",null,"NDJSON requires that exactly one event exists per line. This allows for better\nerror recovery in cases of malformed input, as unlike for the regular JSON\nparser malformed lines can be skipped."),(0,t.yg)("p",null,"Popular examples of NDJSON include the Suricata Eve JSON and the Zeek Streaming\nJSON formats. Tenzir supports ",(0,t.yg)("a",m({parentName:"p"},{href:"/next/formats/suricata"}),(0,t.yg)("inlineCode",{parentName:"a"},"suricata"))," and\n",(0,t.yg)("a",m({parentName:"p"},{href:"/next/formats/zeek-json"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-json"))," parsers out of the box that utilize this mechanism."),(0,t.yg)("h3",m({},{id:"--precise-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--precise")," (Parser)"),(0,t.yg)("p",null,"Legacy flag. Has the same effect as ",(0,t.yg)("em",{parentName:"p"},"not")," providing ",(0,t.yg)("inlineCode",{parentName:"p"},"--merge"),". This option is incompatible with  ",(0,t.yg)("inlineCode",{parentName:"p"},"--merge"),"."),(0,t.yg)("h3",m({},{id:"--no-infer-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--no-infer")," (Parser)"),(0,t.yg)("p",null,"Legacy flag. It is equivalent to the new flag ",(0,t.yg)("inlineCode",{parentName:"p"},"--schema-only"),"."),(0,t.yg)("h3",m({},{id:"--arrays-of-objects-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--arrays-of-objects")," (Parser)"),(0,t.yg)("p",null,"Parse arrays of objects, with every object in the outermost arrays resulting in\none event each. This is particularly useful when interfacing with REST APIs,\nwhich often yield large arrays of objects instead of newline-delimited JSON\nobjects."),(0,t.yg)("h3",m({},{id:"--c--compact-output-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--c|--compact-output")," (Printer)"),(0,t.yg)("p",null,"Switch to line-delimited JSON output (JSONL/NDJSON)."),(0,t.yg)("h3",m({},{id:"--c--color-output-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--C|--color-output")," (Printer)"),(0,t.yg)("p",null,"Colorize the output."),(0,t.yg)("p",null,"The option enables colorizing the output similar to ",(0,t.yg)("inlineCode",{parentName:"p"},"jq")," by emitting terminal\nescape sequences that represent colors."),(0,t.yg)("p",null,"Unlike ",(0,t.yg)("inlineCode",{parentName:"p"},"jq"),", coloring is currently opt-in. In the future, we will perform TTY\ndetection and colorize the output when write to stdout."),(0,t.yg)("p",null,"Tenzir honors the ",(0,t.yg)("a",m({parentName:"p"},{href:"https://no-color.org/"}),(0,t.yg)("inlineCode",{parentName:"a"},"NO_COLOR"))," environment variable and\nwon't colorize the output when the variable is present."),(0,t.yg)("h3",m({},{id:"--m--monochrome-output-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--M|--monochrome-output")," (Printer)"),(0,t.yg)("p",null,"Disables colored output."),(0,t.yg)("p",null,"This is currently the default. In the future, we will perform TTY detection and\ncolorize the output when write to stdout. Use this option today if you want to\navoid an implicit upgrade to colors in the future."),(0,t.yg)("h3",m({},{id:"--omit-nulls-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--omit-nulls")," (Printer)"),(0,t.yg)("p",null,"Strips ",(0,t.yg)("inlineCode",{parentName:"p"},"null")," fields from the output."),(0,t.yg)("p",null,"Example:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "a"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "b"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"42"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"43"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"],")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "c"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "d"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "e"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"42")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"--omit-nulls"),", this example becomes:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "b"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"42"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"43"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"],")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "c"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "e"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"42")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",m({},{id:"--omit-empty-objects-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--omit-empty-objects")," (Printer)"),(0,t.yg)("p",null,"Strips empty objects from the output."),(0,t.yg)("p",null,"Example:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "w"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "x"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {},")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "y"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "z"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"--omit-empty-objects"),", this example becomes:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "w"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"42"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",m({},{id:"--omit-empty-lists-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--omit-empty-lists")," (Printer)"),(0,t.yg)("p",null,"Strips empty lists from the output."),(0,t.yg)("p",null,"Example:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "m"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": [],")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "n"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {},")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "o"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "p"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": []")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", this example becomes:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "m"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {},")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "o"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",m({},{id:"--omit-empty-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--omit-empty")," (Printer)"),(0,t.yg)("p",null,"This options combines all other ",(0,t.yg)("inlineCode",{parentName:"p"},"--omit-*")," options."),(0,t.yg)("h3",m({},{id:"--arrays-of-objects-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--arrays-of-objects")," (Printer)"),(0,t.yg)("p",null,"Prints one array of objects per batch of events arriving at the printer as\nopposed to printing one object per event."),(0,t.yg)("p",null,"This is particularly useful when interfacing with REST APIs, which often require\nsets of events grouped into one JSON object."),(0,t.yg)("p",null,"Use the ",(0,t.yg)("a",m({parentName:"p"},{href:"/next/operators/batch"}),(0,t.yg)("inlineCode",{parentName:"a"},"batch"))," operator to explicitly control how many\nevents get grouped together in the same array."),(0,t.yg)("p",null,"Example:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),'{\n  "foo": 1\n}\n{\n  "foo": 2\n}\n')),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"--arrays-of-objects"),", this example becomes:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),'[{\n  "foo": 1\n},\n{\n  "foo": 2\n}]\n')),(0,t.yg)("h2",m({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read JSON from stdin, either NDJSON or tree-structured:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"read json\n")),(0,t.yg)("p",null,"Write JSON without empty fields to a file:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"to file /tmp/result.json write json --omit-empty\n")),(0,t.yg)("p",null,"Print NDJSON to stdout:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"write json -c\n")))}j.isMDXComponent=!0}}]);