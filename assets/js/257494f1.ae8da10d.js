"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61553],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},d=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=l(n),c=r,m=y["".concat(s,".").concat(c)]||y[c]||g[c]||o;return n?t.createElement(m,p(p({ref:a},d),{},{components:n})):t.createElement(m,p({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[y]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17799:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>D,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&d(e,n,a[n]);if(i)for(var n of i(a))l.call(a,n)&&d(e,n,a[n]);return e},g=(e,a)=>o(e,p(a)),c=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m={},u="read_xsv",h={unversionedId:"tql2/operators/read_xsv",id:"version-v4.25/tql2/operators/read_xsv",title:"read_xsv",description:"Read XSV from a byte stream.",source:"@site/versioned_docs/version-v4.25/tql2/operators/read_xsv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_xsv",permalink:"/v4.25/tql2/operators/read_xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.25/tql2/operators/read_xsv.md",tags:[],version:"v4.25",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_tsv",permalink:"/v4.25/tql2/operators/read_tsv"},next:{title:"read_yaml",permalink:"/v4.25/tql2/operators/read_yaml"}},N={},b=[{value:"Description",id:"description",level:2},{value:"<code>field_sep: string</code>",id:"field_sep-string",level:3},{value:"<code>list_sep: string</code>",id:"list_sep-string",level:3},{value:"<code>null_value: string</code>",id:"null_value-string",level:3},{value:"<code>auto_expand = bool (optional)</code>",id:"auto_expand--bool-optional",level:3},{value:"<code>comments = bool (optional)</code>",id:"comments--bool-optional",level:3},{value:"<code>header = string (optional)</code>",id:"header--string-optional",level:3},{value:"<code>quotes = string (optional)</code>",id:"quotes--string-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = string (optional)</code>",id:"schema--string-optional",level:3},{value:"<code>selector = string (optional)</code>",id:"selector--string-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = string (optional)</code>",id:"unflatten--string-optional",level:3}],I={toc:b},v="wrapper";function D(e){var a=e,{components:n}=a,r=c(a,["components"]);return(0,t.yg)(v,g(y(y({},I),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"read_xsv"}),"read_xsv"),(0,t.yg)("p",null,"Read XSV from a byte stream."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_xsv"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," field_sep"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, list_sep"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, null_value"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string,")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"        [comments"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, header"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, auto_expand"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, quotes"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string,")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"         auto_expand"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, schema"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string,")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"         selector"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, schema_only"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"read_xsv field_sep:string, list_sep:string, null_value:string,\n        [comments=bool, header=string, auto_expand=bool, quotes=string,\n         auto_expand=bool, schema=string,\n         selector=string, schema_only=bool, raw=bool, unflatten=string]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"read_xsv")," operator transforms a byte stream into a event stream by parsing\nthe bytes as ",(0,t.yg)("a",y({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values"}),"XSV"),", a\ngeneralization of CSV with a more flexible separator specification."),(0,t.yg)("p",null,"The following table lists existing XSV configurations:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",y({parentName:"tr"},{align:null}),"Format"),(0,t.yg)("th",y({parentName:"tr"},{align:"center"}),"Field Separator"),(0,t.yg)("th",y({parentName:"tr"},{align:"center"}),"List Separator"),(0,t.yg)("th",y({parentName:"tr"},{align:"center"}),"Null Value"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",y({parentName:"tr"},{align:null}),(0,t.yg)("a",y({parentName:"td"},{href:"/v4.25/tql2/operators/read_csv"}),(0,t.yg)("inlineCode",{parentName:"a"},"csv"))),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},",")),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},";")),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),"empty")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",y({parentName:"tr"},{align:null}),(0,t.yg)("a",y({parentName:"td"},{href:"/v4.25/tql2/operators/read_ssv"}),(0,t.yg)("inlineCode",{parentName:"a"},"ssv"))),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"<space>")),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},",")),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"-"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",y({parentName:"tr"},{align:null}),(0,t.yg)("a",y({parentName:"td"},{href:"/v4.25/tql2/operators/read_tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"tsv"))),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"\\t")),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},",")),(0,t.yg)("td",y({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"-"))))),(0,t.yg)("h3",y({},{id:"field_sep-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"field_sep: string")),(0,t.yg)("p",null,"The string separating different fields."),(0,t.yg)("h3",y({},{id:"list_sep-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"list_sep: string")),(0,t.yg)("p",null,"The string separating different elements in a list within a single field."),(0,t.yg)("h3",y({},{id:"null_value-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"null_value: string")),(0,t.yg)("p",null,"The string denoting an absent value."),(0,t.yg)("h3",y({},{id:"auto_expand--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"auto_expand = bool (optional)")),(0,t.yg)("p",null,"Automatically add fields to the schema when encountering events with too many\nvalues instead of dropping the excess values."),(0,t.yg)("h3",y({},{id:"comments--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"comments = bool (optional)")),(0,t.yg)("p",null,"Treat lines beginning with ",(0,t.yg)("inlineCode",{parentName:"p"},"#")," as comments."),(0,t.yg)("h3",y({},{id:"header--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"header = string (optional)")),(0,t.yg)("p",null,"The string to be used as the header for the parsed values. If unspecified, the\nfirst line of the input is used as the header."),(0,t.yg)("h3",y({},{id:"quotes--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"quotes = string (optional)")),(0,t.yg)("p",null,"A string of not escaped characters that are supposed to be considered as quotes."),(0,t.yg)("p",null,"Defaults to the characters ",(0,t.yg)("inlineCode",{parentName:"p"},"\"'"),"."),(0,t.yg)("h3",y({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,t.yg)("p",null,"In the case of XSV this means that no parsing of data takes place at all\nand every value remains a string."),(0,t.yg)("h3",y({},{id:"schema--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema = string (optional)")),(0,t.yg)("p",null,"Provide the name of a schema to be used by the parser."),(0,t.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,t.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,t.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,t.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,t.yg)("h3",y({},{id:"selector--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"selector = string (optional)")),(0,t.yg)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,t.yg)("p",null,"The string is parsed as ",(0,t.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,t.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,t.yg)("h3",y({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h3",y({},{id:"unflatten--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"unflatten = string (optional)")),(0,t.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,t.yg)("p",null,"A popular example of this is the ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.25/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It\nincludes the fields ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at\nthe top-level. The data is best modeled as an ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," record with four nested\nfields ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,t.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",y({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"Without unflattening"),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1.1.1"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_p"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1.1.2"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_p"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 5")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"{\n  id.orig_h: 1.1.1.1,\n  id.orig_p: 10,\n  id.resp_h: 1.1.1.2,\n  id.resp_p: 5\n}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"With the unflatten separator set to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",y({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1.1.1"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_p"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1.1.2"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_p"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 5")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"{\n  id: {\n    orig_h: 1.1.1.1,\n    orig_p: 10,\n    resp_h: 1.1.1.2,\n    resp_p: 5\n  }\n}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}D.isMDXComponent=!0}}]);