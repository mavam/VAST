"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58441],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>u});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),l=c(n),g=p,u=l["".concat(s,".").concat(g)]||l[g]||d[g]||r;return n?t.createElement(u,o(o({ref:a},y),{},{components:n})):t.createElement(u,o({ref:a},y))}));function u(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[l]="string"==typeof e?e:p,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31268:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>I,toc:()=>N});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,l=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&y(e,n,a[n]);if(i)for(var n of i(a))c.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>r(e,o(a)),g=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const u={},m="now",I={unversionedId:"tql2/functions/now",id:"version-v4.24/tql2/functions/now",title:"now",description:"Gets the current wallclock time.",source:"@site/versioned_docs/version-v4.24/tql2/functions/now.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/now",permalink:"/v4.24/tql2/functions/now",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/functions/now.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"network",permalink:"/v4.24/tql2/functions/network"},next:{title:"otherwise",permalink:"/v4.24/tql2/functions/otherwise"}},b={},N=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Get the time in UTC",id:"get-the-time-in-utc",level:3},{value:"Compute a field with the current time",id:"compute-a-field-with-the-current-time",level:3},{value:"See Also",id:"see-also",level:2}],D={toc:N},M="wrapper";function h(e){var a=e,{components:n}=a,p=g(a,["components"]);return(0,t.yg)(M,d(l(l({},D),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",l({},{id:"now"}),"now"),(0,t.yg)("p",null,"Gets the current wallclock time."),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"now"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}})," time"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"now() -> time",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",l({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"now")," function returns the current wallclock time."),(0,t.yg)("h2",l({},{id:"examples"}),"Examples"),(0,t.yg)("h3",l({},{id:"get-the-time-in-utc"}),"Get the time in UTC"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," $now"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}})," now"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"()")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," { x"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," $now"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," }"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"let $now = now()\nfrom { x: $now }",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T13"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),":27:33.957987"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"{x: 2024-10-28T13:27:33.957987}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",l({},{id:"compute-a-field-with-the-current-time"}),"Compute a field with the current time"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),' "my-topic"')),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"select"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," ts"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"now"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:'subscribe "my-topic"\nselect ts=now()',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{ts"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"30T15"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),":03:04.85298"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{ts"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"30T15"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),":03:06.31878"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{ts"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"30T15"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),":03:07.59813"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"{ts: 2024-10-30T15:03:04.85298}\n{ts: 2024-10-30T15:03:06.31878}\n{ts: 2024-10-30T15:03:07.59813}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",l({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",l({parentName:"p"},{href:"/v4.24/tql2/functions/as_secs"}),(0,t.yg)("inlineCode",{parentName:"a"},"as_secs")),", ",(0,t.yg)("a",l({parentName:"p"},{href:"/v4.24/tql2/functions/from_epoch_ms"}),(0,t.yg)("inlineCode",{parentName:"a"},"from_epoch_ms")),",\n",(0,t.yg)("a",l({parentName:"p"},{href:"/v4.24/tql2/functions/since_epoch"}),(0,t.yg)("inlineCode",{parentName:"a"},"since_epoch"))))}h.isMDXComponent=!0}}]);