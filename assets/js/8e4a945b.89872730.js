"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78421],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>u});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=c(a),g=r,u=y["".concat(i,".").concat(g)]||y[g]||d[g]||p;return a?t.createElement(u,o(o({ref:n},l),{},{components:a})):t.createElement(u,o({ref:n},l))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<p;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},86972:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>N,contentTitle:()=>m,default:()=>j,frontMatter:()=>u,metadata:()=>I,toc:()=>b});var t=a(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,n,a)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,y=(e,n)=>{for(var a in n||(n={}))i.call(n,a)&&l(e,a,n[a]);if(s)for(var a of s(n))c.call(n,a)&&l(e,a,n[a]);return e},d=(e,n)=>p(e,o(n)),g=(e,n)=>{var a={};for(var t in e)i.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&c.call(e,t)&&(a[t]=e[t]);return a};const u={},m="parse_grok",I={unversionedId:"tql2/functions/parse_grok",id:"version-v4.26/tql2/functions/parse_grok",title:"parse_grok",description:"Parses a string according to a grok pattern.",source:"@site/versioned_docs/version-v4.26/tql2/functions/parse_grok.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/parse_grok",permalink:"/v4.26/tql2/functions/parse_grok",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/tql2/functions/parse_grok.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"parse_cef",permalink:"/v4.26/tql2/functions/parse_cef"},next:{title:"parse_json",permalink:"/v4.26/tql2/functions/parse_json"}},N={},b=[{value:"Description",id:"description",level:2},{value:"<code>input: string</code>",id:"input-string",level:3},{value:"<code>pattern: string</code>",id:"pattern-string",level:3},{value:"Examples",id:"examples",level:2}],D={toc:b},M="wrapper";function j(e){var n=e,{components:a}=n,r=g(n,["components"]);return(0,t.yg)(M,d(y(y({},D),r),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"parse_grok"}),"parse_grok"),(0,t.yg)("p",null,"Parses a string according to a grok pattern."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"parse_grok"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(input"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, pattern"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," record"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"parse_grok(input:string, pattern:string) -> record",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"parse_grok")," function parses a string according to a grok pattern."),(0,t.yg)("h3",y({},{id:"input-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"input: string")),(0,t.yg)("p",null,"The string to parse."),(0,t.yg)("h3",y({},{id:"pattern-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"pattern: string")),(0,t.yg)("p",null,"The pattern to use for parsing."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," $pattern"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "%{IP:client} %{WORD} %{URIPATHPARAM:req} %{NUMBER:bytes} %{NUMBER:dur}"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," { input "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Input: 55.3.244.1 GET /index.html 15824 0.043"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," }")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"output "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," output"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"parse_grok"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(pattern)"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'let $pattern = "%{IP:client} %{WORD} %{URIPATHPARAM:req} %{NUMBER:bytes} %{NUMBER:dur}"\nfrom { input = "Input: 55.3.244.1 GET /index.html 15824 0.043" }\noutput = output.parse_grok(pattern)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Input: 55.3.244.1 GET /index.html 15824 0.043"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  y"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    client"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 55.3"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"244.1"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    req"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/index.html"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    bytes"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 15824"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    dur"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 0.043")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'{\n  x: "Input: 55.3.244.1 GET /index.html 15824 0.043",\n  y: {\n    client: 55.3.244.1,\n    req: "/index.html",\n    bytes: 15824,\n    dur: 0.043\n  }\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}j.isMDXComponent=!0}}]);