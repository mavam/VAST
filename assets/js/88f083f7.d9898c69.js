"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11519],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||y[g]||o;return a?n.createElement(m,p(p({ref:t},l),{},{components:a})):n.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},84428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>b,toc:()=>x});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&l(e,a,t[a]);return e},y=(e,t)=>o(e,p(t)),g=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const m={},u="save",b={unversionedId:"tql2/operators/context/save",id:"version-v4.25/tql2/operators/context/save",title:"save",description:"Saves context state.",source:"@site/versioned_docs/version-v4.25/tql2/operators/context/save.md",sourceDirName:"tql2/operators/context",slug:"/tql2/operators/context/save",permalink:"/tql2/operators/context/save",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.25/tql2/operators/context/save.md",tags:[],version:"v4.25",frontMatter:{},sidebar:"docsSidebar",previous:{title:"reset",permalink:"/tql2/operators/context/reset"},next:{title:"update",permalink:"/tql2/operators/context/update"}},I={},x=[{value:"Description",id:"description",level:2},{value:"<code>name: string</code>",id:"name-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Store the database of a GeoIP context",id:"store-the-database-of-a-geoip-context",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:x},h="wrapper";function v(e){var t=e,{components:a}=t,r=g(t,["components"]);return(0,n.yg)(h,y(d(d({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"save"}),"save"),(0,n.yg)("p",null,"Saves context state."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," name"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string"))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:"context::save name:string",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"context::save")," operator dumps the state of the specified context into its\n(binary) output."),(0,n.yg)("h3",d({},{id:"name-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"name: string")),(0,n.yg)("p",null,"The name of the context whose state to save."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"store-the-database-of-a-geoip-context"}),"Store the database of a GeoIP context"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "snapshot.mmdb"'))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:'context::save "ctx"\nsave_file "snapshot.mmdb"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/create_bloom_filter"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_bloom_filter")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/create_geoip"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_geoip")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/create_lookup_table"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_lookup_table")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/enrich"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::enrich")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/erase"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::erase")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/inspect"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::inspect")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/list"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::list")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/load"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::load")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/remove"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::remove")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/reset"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::reset")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/context/update"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::update"))))}v.isMDXComponent=!0}}]);