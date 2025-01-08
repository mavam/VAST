"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26230],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),y=l(a),u=r,m=y["".concat(s,".").concat(u)]||y[u]||c[u]||o;return a?t.createElement(m,i(i({ref:n},d),{},{components:a})):t.createElement(m,i({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95060:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>g,default:()=>C,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var t=a(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,a)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,y=(e,n)=>{for(var a in n||(n={}))s.call(n,a)&&d(e,a,n[a]);if(p)for(var a of p(n))l.call(n,a)&&d(e,a,n[a]);return e},c=(e,n)=>o(e,i(n)),u=(e,n)=>{var a={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&l.call(e,t)&&(a[t]=e[t]);return a};const m={sidebar_custom_props:{format:{parser:!0}}},g="kv",h={unversionedId:"formats/kv",id:"version-v4.24/formats/kv",title:"kv",description:"Reads key-value pairs by splitting strings based on regular expressions.",source:"@site/versioned_docs/version-v4.24/formats/kv.md",sourceDirName:"formats",slug:"/formats/kv",permalink:"/v4.24/formats/kv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/formats/kv.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"json",permalink:"/v4.24/formats/json"},next:{title:"leef",permalink:"/v4.24/formats/leef"}},f={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Quoted Values",id:"quoted-values",level:3},{value:"<code>&lt;field_split&gt;</code>",id:"field_split",level:3},{value:"<code>&lt;value_split&gt;</code>",id:"value_split",level:3},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"Examples",id:"examples",level:2}],v={toc:b},N="wrapper";function C(e){var n=e,{components:a}=n,r=u(n,["components"]);return(0,t.yg)(N,c(y(y({},v),r),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"kv"}),"kv"),(0,t.yg)("p",null,"Reads key-value pairs by splitting strings based on regular expressions."),(0,t.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"kv [<field_split>] [<value_split>]\n   [--schema <schema>] [--selector <selector>] [--schema-only]\n   [--merge] [--raw] [--unnest-separator <nested-key-separator>]\n")),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"kv")," parser is usually used with the ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.24/operators/parse"}),(0,t.yg)("inlineCode",{parentName:"a"},"parse")),"\noperator to extract key-value pairs from a given string, in particular if the\nkeys are not known before."),(0,t.yg)("p",null,"Incoming strings are first split into fields according to ",(0,t.yg)("inlineCode",{parentName:"p"},"<field_split>"),". This\ncan be a regular expression. For example, the input ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar, baz: 42")," can be\nsplit into ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"baz: 42")," with the ",(0,t.yg)("inlineCode",{parentName:"p"},'",\\s*"')," (a comma, followed by any\namount of whitespace) as the field splitter. Note that the matched separators\nare removed when splitting a string."),(0,t.yg)("p",null,"Afterwards, the extracted fields are split into their key and value by\n",(0,t.yg)("inlineCode",{parentName:"p"},"<value_split>"),", which can again be a regular expression. In our example,\n",(0,t.yg)("inlineCode",{parentName:"p"},'":\\s*"')," could be used to split ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar")," into the key ",(0,t.yg)("inlineCode",{parentName:"p"},"foo")," and its value\n",(0,t.yg)("inlineCode",{parentName:"p"},"bar"),", and similarly ",(0,t.yg)("inlineCode",{parentName:"p"},"baz: 42")," into ",(0,t.yg)("inlineCode",{parentName:"p"},"baz")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"42"),". The result would thus be\n",(0,t.yg)("inlineCode",{parentName:"p"},'{"foo": "bar", "baz": 42}'),". If the regex matches multiple substrings, only the\nfirst match is used."),(0,t.yg)("p",null,"The supported regular expression syntax is\n",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/google/re2/wiki/Syntax"}),"RE2"),". In particular, this means that\nlookahead ",(0,t.yg)("inlineCode",{parentName:"p"},"(?=...)")," and lookbehind ",(0,t.yg)("inlineCode",{parentName:"p"},"(?<=...)")," are not supported by ",(0,t.yg)("inlineCode",{parentName:"p"},"kv")," at\nthe moment. However, if the regular expression has a capture group, it is assumed\nthat only the content of the capture group shall be used as the separator. This\nmeans that unsupported regular expressions such as ",(0,t.yg)("inlineCode",{parentName:"p"},"(?=foo)bar(?<=baz)")," can be\neffectively expressed as ",(0,t.yg)("inlineCode",{parentName:"p"},"foo(bar)baz")," instead."),(0,t.yg)("h3",y({},{id:"quoted-values"}),"Quoted Values"),(0,t.yg)("p",null,"The parser is aware of double-quotes (",(0,t.yg)("inlineCode",{parentName:"p"},'"'),"). If the ",(0,t.yg)("inlineCode",{parentName:"p"},"<field_split>")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"<value_split>")," are found within enclosing quotes, they are not considered matches."),(0,t.yg)("p",null,"This means that both the key and the value may be enclosed in double-quotes."),(0,t.yg)("p",null,"For example, given ",(0,t.yg)("inlineCode",{parentName:"p"},"\\s*,\\s*")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"="),", the input"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),'"key"="nested = value",key2="value, and more"\n')),(0,t.yg)("p",null,"will parse as"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),'  "key"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," : "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"nested = value"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),'  "key2"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," : "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"value, and more"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'{\n  "key" : "nested = value"\n}\n{\n  "key2" : "value, and more"\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",y({},{id:"field_split"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<field_split>")),(0,t.yg)("p",null,"The regular expression used to separate individual fields. The default is ",(0,t.yg)("inlineCode",{parentName:"p"},"\\s"),"."),(0,t.yg)("h3",y({},{id:"value_split"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<value_split>")),(0,t.yg)("p",null,"The regular expression used to separate a key from its value. The default is ",(0,t.yg)("inlineCode",{parentName:"p"},"="),"."),(0,t.yg)("h3",y({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,t.yg)("p",null,"The XSV parser supports the common ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.24/formats#parser-schema-inference"}),"schema inference options"),"."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Extract comma-separated key-value pairs from ",(0,t.yg)("inlineCode",{parentName:"p"},"foo:1, bar:2,baz:3 , qux:4"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),'kv "\\s*,\\s*" ":"\n')),(0,t.yg)("p",null,"Extract key-value pairs from strings such as ",(0,t.yg)("inlineCode",{parentName:"p"},"FOO: C:\\foo BAR_BAZ: hello world"),".\nThis requires lookahead because the fields are separated by whitespace, but not\nevery whitespace acts as a field separator. Instead, we only want to split if\nthe whitespace is followed by ",(0,t.yg)("inlineCode",{parentName:"p"},"[A-Z][A-Z_]+:"),", i.e., at least two uppercase\ncharacters followed by a colon. We can express this as ",(0,t.yg)("inlineCode",{parentName:"p"},'"(\\s+)[A-Z][A-Z_]+:"'),",\nwhich yields ",(0,t.yg)("inlineCode",{parentName:"p"},"FOO: C:\\foo")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"BAR_BAZ: hello world"),". We then split the key\nfrom its value with ",(0,t.yg)("inlineCode",{parentName:"p"},'":\\s*"')," (only the first match is used to split them). The\nfinal result is thus ",(0,t.yg)("inlineCode",{parentName:"p"},'{"FOO": "C:\\foo", "BAR_BAZ": "hello world"}'),"."),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),'kv "(\\s+)[A-Z][A-Z_]+:" ":\\s*"\n')))}C.isMDXComponent=!0}}]);