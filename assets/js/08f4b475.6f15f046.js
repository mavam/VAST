"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81551],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),y=c(a),m=r,u=y["".concat(s,".").concat(m)]||y[m]||d[m]||o;return a?n.createElement(u,i(i({ref:t},l),{},{components:a})):n.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>g,default:()=>v,frontMatter:()=>u,metadata:()=>b,toc:()=>N});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&l(e,a,t[a]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const u={sidebar_position:6},g="Collect metrics",b={unversionedId:"usage/collect-metrics",id:"version-v4.24/usage/collect-metrics",title:"Collect metrics",description:"Tenzir keeps track of metrics about node resource usage, pipeline state, and",source:"@site/versioned_docs/version-v4.24/usage/collect-metrics.md",sourceDirName:"usage",slug:"/usage/collect-metrics",permalink:"/v4.24/usage/collect-metrics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/usage/collect-metrics.md",tags:[],version:"v4.24",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Show available schemas",permalink:"/v4.24/usage/show-available-schemas"},next:{title:"Transform data at rest",permalink:"/v4.24/usage/transform-data-at-rest"}},I={},N=[{value:"Write metrics to a file",id:"write-metrics-to-a-file",level:2},{value:"Summarize metrics",id:"summarize-metrics",level:2}],h={toc:N},D="wrapper";function v(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.yg)(D,d(y(y({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"collect-metrics"}),"Collect metrics"),(0,n.yg)("p",null,"Tenzir keeps track of metrics about node resource usage, pipeline state, and\nruntime performance."),(0,n.yg)("p",null,"Metrics are stored as internal events in the node's storage engine, allowing you\nto work with metrics just like regular data. Use the\n",(0,n.yg)("a",y({parentName:"p"},{href:"/v4.24/tql2/operators/metrics"}),(0,n.yg)("inlineCode",{parentName:"a"},"metrics"))," source operator to access the metrics.\nThe operator documentation lists ",(0,n.yg)("a",y({parentName:"p"},{href:"../tql2/operators/metrics#schemas"}),"all available\nmetrics")," in detail."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"metrics")," operator provides a ",(0,n.yg)("em",{parentName:"p"},"copy")," of existing metrics. You can use it\nmultiple time to reference the same metrics feed."),(0,n.yg)("h2",y({},{id:"write-metrics-to-a-file"}),"Write metrics to a file"),(0,n.yg)("p",null,"Export metrics continuously to a file via ",(0,n.yg)("inlineCode",{parentName:"p"},"metrics --live"),":"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"metrics"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," live"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_ndjson")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "metrics.json"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", append"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'metrics live=true\nwrite_ndjson\nsave_file "metrics.json", append=true',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"This attaches to incoming metrics feed, renders them as NDJSON, and then writes\nthe output to a file. Without the ",(0,n.yg)("inlineCode",{parentName:"p"},"live")," option, the ",(0,n.yg)("inlineCode",{parentName:"p"},"metrics")," operator returns\nthe snapshot of all historical metrics."),(0,n.yg)("h2",y({},{id:"summarize-metrics"}),"Summarize metrics"),(0,n.yg)("p",null,"You can ",(0,n.yg)("a",y({parentName:"p"},{href:"/v4.24/usage/shape-data/"}),"shape")," metrics like ordinary data,\ne.g., write aggregations over metrics to compute runtime statistics suitable for\nreporting or dashboarding:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"metrics")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tenzir.metrics.operator"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," and"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," sink "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," true")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," runtime"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(duration), pipeline_id")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," -"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"runtime"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'metrics\nwhere @name == "tenzir.metrics.operator" and sink == true\nsummarize runtime=sum(duration), pipeline_id\nsort -runtime',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"The above example computes the total runtime over all pipelines grouped by their\nunique ID."))}v.isMDXComponent=!0}}]);