"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61008],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,g=s["".concat(l,".").concat(u)]||s[u]||y[u]||o;return a?n.createElement(g,p(p({ref:t},d),{},{components:a})):n.createElement(g,p({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>m,default:()=>v,frontMatter:()=>g,metadata:()=>b,toc:()=>f});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&d(e,a,t[a]);return e},y=(e,t)=>o(e,p(t)),u=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const g={},m="load_ftp",b={unversionedId:"tql2/operators/load_ftp",id:"version-v4.24/tql2/operators/load_ftp",title:"load_ftp",description:"Loads a byte stream via FTP.",source:"@site/versioned_docs/version-v4.24/tql2/operators/load_ftp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_ftp",permalink:"/v4.24/tql2/operators/load_ftp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/load_ftp.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_file",permalink:"/v4.24/tql2/operators/load_file"},next:{title:"load_google_cloud_pubsub",permalink:"/v4.24/tql2/operators/load_google_cloud_pubsub"}},I={},f=[{value:"Description",id:"description",level:2},{value:"<code>url: str</code>",id:"url-str",level:3},{value:"Examples",id:"examples",level:2}],j={toc:f},D="wrapper";function v(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.yg)(D,y(s(s({},j),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"load_ftp"}),"load_ftp"),(0,n.yg)("p",null,"Loads a byte stream via FTP."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_ftp"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," url"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"str"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:"load_ftp url:str",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",s({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Loads a byte stream via FTP."),(0,n.yg)("h3",s({},{id:"url-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"url: str")),(0,n.yg)("p",null,"The URL to request from. The ",(0,n.yg)("inlineCode",{parentName:"p"},"ftp://")," scheme can be omitted."),(0,n.yg)("h2",s({},{id:"examples"}),"Examples"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_ftp"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ftp.example.org"'))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:'load_ftp "ftp.example.org"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}v.isMDXComponent=!0}}]);