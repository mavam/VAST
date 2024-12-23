"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22136],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=o,u=d["".concat(l,".").concat(g)]||d[g]||y[g]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>m,default:()=>I,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var a=t(15680),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(p)for(var t of p(n))s.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>r(e,i(n)),g=(e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const u={},m="to_opensearch",h={unversionedId:"tql2/operators/to_opensearch",id:"tql2/operators/to_opensearch",title:"to_opensearch",description:"Sends events to an OpenSearch-compatible Bulk API.",source:"@site/docs/tql2/operators/to_opensearch.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/to_opensearch",permalink:"/next/tql2/operators/to_opensearch",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/to_opensearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"to_hive",permalink:"/next/tql2/operators/to_hive"},next:{title:"to_snowflake",permalink:"/next/tql2/operators/to_snowflake"}},N={},b=[{value:"Description",id:"description",level:2},{value:"<code>url: string</code>",id:"url-string",level:3},{value:"<code>action = string</code>",id:"action--string",level:3},{value:"<code>index = string (optional)</code>",id:"index--string-optional",level:3},{value:"<code>id = string (optional)</code>",id:"id--string-optional",level:3},{value:"<code>doc = record (optional)</code>",id:"doc--record-optional",level:3},{value:"<code>user = string (optional)</code>",id:"user--string-optional",level:3},{value:"<code>passwd = string (optional)</code>",id:"passwd--string-optional",level:3},{value:"<code>skip_peer_verification = bool (optional)</code>",id:"skip_peer_verification--bool-optional",level:3},{value:"<code>cacert = string (optional)</code>",id:"cacert--string-optional",level:3},{value:"<code>certfile = string (optional)</code>",id:"certfile--string-optional",level:3},{value:"<code>keyfile = string (optional)</code>",id:"keyfile--string-optional",level:3},{value:"<code>include_nulls = bool (optional)</code>",id:"include_nulls--bool-optional",level:3},{value:"<code>max_content_length = int (optional)</code>",id:"max_content_length--int-optional",level:3},{value:"<code>buffer_timeout = duration (optional)</code>",id:"buffer_timeout--duration-optional",level:3},{value:"<code>compress = bool (optional)</code>",id:"compress--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Send events from a JSON file",id:"send-events-from-a-json-file",level:3}],f={toc:b},v="wrapper";function I(e){var n=e,{components:t}=n,o=g(n,["components"]);return(0,a.yg)(v,y(d(d({},f),o),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"to_opensearch"}),"to_opensearch"),(0,a.yg)("p",null,"Sends events to an OpenSearch-compatible Bulk API."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_opensearch"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," url"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, action"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [index"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, id"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, doc"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"record,")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    user"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, passwd"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, skip_peer_verification"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, cacert"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string,")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    certfile"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, keyfile"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, include_nulls"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, max_content_length"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int,")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    buffer_timeout"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, compress"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:"to_opensearch url:string, action=string, [index=string, id=string, doc=record,\n    user=string, passwd=string, skip_peer_verification=bool, cacert=string,\n    certfile=string, keyfile=string, include_nulls=bool, max_content_length=int,\n    buffer_timeout=duration, compress=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"to_opensearch")," operator sends events to a ",(0,a.yg)("a",d({parentName:"p"},{href:"https://opensearch.org/docs/latest/api-reference/document-apis/bulk/"}),"OpenSearch-compatible Bulk\nAPI")," such as ",(0,a.yg)("a",d({parentName:"p"},{href:"https://www.elastic.co/elasticsearch"}),"ElasticSearch"),"."),(0,a.yg)("p",null,"The operator accumulates multiple events before sending them as a single\nrequest. You can control the maximum request size via the\n",(0,a.yg)("inlineCode",{parentName:"p"},"max_content_length")," and the timeout before sending all accumulated events via\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"send_timeout")," option."),(0,a.yg)("h3",d({},{id:"url-string"}),(0,a.yg)("inlineCode",{parentName:"h3"},"url: string")),(0,a.yg)("p",null,"The URL of the API endpoint."),(0,a.yg)("h3",d({},{id:"action--string"}),(0,a.yg)("inlineCode",{parentName:"h3"},"action = string")),(0,a.yg)("p",null,"An expression for the action that evaluates to a ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"."),(0,a.yg)("p",null,"Supported actions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"create"),": Creates a document if it doesn\u2019t already exist and returns an error otherwise."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"delete"),": Deletes a document if it exists."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"index"),": Creates a document if it doesn\u2019t yet exist and replace the document if it already exists."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"update"),": Updates existing documents and returns an error if the document doesn\u2019t exist."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"upsert"),": If a document exists, it is updated; if it does not exist, a new document is indexed.")),(0,a.yg)("h3",d({},{id:"index--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"index = string (optional)")),(0,a.yg)("p",null,"An optional expression for the index that evaluates to a ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"."),(0,a.yg)("p",null,"Must be provided if the ",(0,a.yg)("inlineCode",{parentName:"p"},"url")," does not have an index."),(0,a.yg)("h3",d({},{id:"id--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"id = string (optional)")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," of the document to act on."),(0,a.yg)("p",null,"Must be provided when using the ",(0,a.yg)("inlineCode",{parentName:"p"},"delete")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," actions."),(0,a.yg)("h3",d({},{id:"doc--record-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"doc = record (optional)")),(0,a.yg)("p",null,"The document to serialize."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"this"),"."),(0,a.yg)("h3",d({},{id:"user--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"user = string (optional)")),(0,a.yg)("p",null,"Optional user for HTTP Basic Authentication."),(0,a.yg)("h3",d({},{id:"passwd--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"passwd = string (optional)")),(0,a.yg)("p",null,"Optional password for HTTP Basic Authentication."),(0,a.yg)("h3",d({},{id:"skip_peer_verification--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"skip_peer_verification = bool (optional)")),(0,a.yg)("p",null,"Toggles TLS certificate verification."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h3",d({},{id:"cacert--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"cacert = string (optional)")),(0,a.yg)("p",null,"Path to the CA certificate used to verify the server's certificate."),(0,a.yg)("h3",d({},{id:"certfile--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"certfile = string (optional)")),(0,a.yg)("p",null,"Path to the client certificate."),(0,a.yg)("h3",d({},{id:"keyfile--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"keyfile = string (optional)")),(0,a.yg)("p",null,"Path to the key for the client certificate."),(0,a.yg)("h3",d({},{id:"include_nulls--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"include_nulls = bool (optional)")),(0,a.yg)("p",null,"Include fields with null values in the transmitted event data. By default, the\noperator drops all null values to save space."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h3",d({},{id:"max_content_length--int-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"max_content_length = int (optional)")),(0,a.yg)("p",null,"The maximum size of the message uncompressed body in bytes. A message may consist of multiple events.\nIf a single event is larger than this limit, it is dropped and a warning is emitted."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"5Mi"),"."),(0,a.yg)("h3",d({},{id:"buffer_timeout--duration-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"buffer_timeout = duration (optional)")),(0,a.yg)("p",null,"The maximum amount of time for which the operator accumulates messages before\nsending them out to the HEC endpoint as a single message."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"5s"),"."),(0,a.yg)("h3",d({},{id:"compress--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"compress = bool (optional)")),(0,a.yg)("p",null,"Whether to compress the message body using standard gzip."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("h3",d({},{id:"send-events-from-a-json-file"}),"Send events from a JSON file"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example.json"')),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_opensearch"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "localhost:9200"'),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", action"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"create"'),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", index"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"main"'))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:'from "example.json"\nto_opensearch "localhost:9200", action="create", index="main"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}I.isMDXComponent=!0}}]);