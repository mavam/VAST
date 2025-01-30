"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5518],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>u});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),y=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(i.Provider,{value:a},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=y(n),g=r,u=l["".concat(i,".").concat(g)]||l[g]||d[g]||p;return n?t.createElement(u,o(o({ref:a},c),{},{components:n})):t.createElement(u,o({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var y=2;y<p;y++)o[y]=n[y];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77508:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>x,frontMatter:()=>u,metadata:()=>I,toc:()=>N});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,l=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&c(e,n,a[n]);if(s)for(var n of s(a))y.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>p(e,o(a)),g=(e,a)=>{var n={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const u={},m="sort",I={unversionedId:"tql2/functions/sort",id:"version-v4.26/tql2/functions/sort",title:"sort",description:"Sorts lists and record fields.",source:"@site/versioned_docs/version-v4.26/tql2/functions/sort.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/sort",permalink:"/v4.26/tql2/functions/sort",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/tql2/functions/sort.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"since_epoch",permalink:"/v4.26/tql2/functions/since_epoch"},next:{title:"split",permalink:"/v4.26/tql2/functions/split"}},b={},N=[{value:"Description",id:"description",level:2},{value:"<code>xs: list|record</code>",id:"xs-listrecord",level:3},{value:"Examples",id:"examples",level:2},{value:"Sort values in a list",id:"sort-values-in-a-list",level:3},{value:"Sort a record by its field names",id:"sort-a-record-by-its-field-names",level:3}],D={toc:N},M="wrapper";function x(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(M,d(l(l({},D),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",l({},{id:"sort"}),"sort"),(0,t.yg)("p",null,"Sorts lists and record fields."),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"list"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"|"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"record) "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," list"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"|"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"record"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"sort(xs:list|record) -> list|record",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",l({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"sort")," function takes either a list or record as input, ordering lists by\nvalue and records by their field name."),(0,t.yg)("h3",l({},{id:"xs-listrecord"}),(0,t.yg)("inlineCode",{parentName:"h3"},"xs: list|record")),(0,t.yg)("p",null,"The list or record to sort."),(0,t.yg)("h2",l({},{id:"examples"}),"Examples"),(0,t.yg)("h3",l({},{id:"sort-values-in-a-list"}),"Sort values in a list"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," {xs"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"xs "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," xs"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"from {xs: [1, 3, 2]}\nxs = xs.sort()",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{xs"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"{xs: [1, 2, 3]}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",l({},{id:"sort-a-record-by-its-field-names"}),"Sort a record by its field names"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," {a"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", c"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," {y"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", x"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," false"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"this"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}})," this."),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"from {a: 1, c: 3, b: {y: true, x: false}}\nthis = this.sort()",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{a"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," {y"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", x"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," false"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, c"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"{a: 1, b: {y: true, x: false}, c: 3}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Observe that the nested record is ",(0,t.yg)("em",{parentName:"p"},"not")," sorted. Use ",(0,t.yg)("inlineCode",{parentName:"p"},"b = b.sort()")," to sort it\nmanually."))}x.isMDXComponent=!0}}]);