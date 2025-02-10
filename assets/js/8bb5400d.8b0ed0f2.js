"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75474],{15680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||y[u]||i;return t?n.createElement(g,p(p({ref:a},l),{},{components:t})):n.createElement(g,p({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82501:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>M,frontMatter:()=>g,metadata:()=>I,toc:()=>D});var n=t(15680),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&l(e,t,a[t]);if(o)for(var t of o(a))s.call(a,t)&&l(e,t,a[t]);return e},y=(e,a)=>i(e,p(a)),u=(e,a)=>{var t={};for(var n in e)c.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const g={},m="capitalize",I={unversionedId:"tql2/functions/capitalize",id:"version-v4.27/tql2/functions/capitalize",title:"capitalize",description:"Capitalizes the first character of a string.",source:"@site/versioned_docs/version-v4.27/tql2/functions/capitalize.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/capitalize",permalink:"/v4.27/tql2/functions/capitalize",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/functions/capitalize.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"as_secs",permalink:"/v4.27/tql2/functions/as_secs"},next:{title:"ceil",permalink:"/v4.27/tql2/functions/ceil"}},b={},D=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Capitalize a lowercase string",id:"capitalize-a-lowercase-string",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:D},h="wrapper";function M(e){var a=e,{components:t}=a,r=u(a,["components"]);return(0,n.yg)(h,y(d(d({},N),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"capitalize"}),"capitalize"),(0,n.yg)("p",null,"Capitalizes the first character of a string."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"capitalize"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:"capitalize(x:string) -> string",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"capitalize")," function returns the input string with the first character\nconverted to uppercase and the rest to lowercase."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"capitalize-a-lowercase-string"}),"Capitalize a lowercase string"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello world"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"capitalize"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:'from {x: "hello world".capitalize()}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Hello world"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:'{x: "Hello world"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",d({parentName:"p"},{href:"/v4.27/tql2/functions/to_upper"}),(0,n.yg)("inlineCode",{parentName:"a"},"to_upper")),", ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.27/tql2/functions/to_lower"}),(0,n.yg)("inlineCode",{parentName:"a"},"to_lower")),", ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.27/tql2/functions/to_title"}),(0,n.yg)("inlineCode",{parentName:"a"},"to_title"))))}M.isMDXComponent=!0}}]);