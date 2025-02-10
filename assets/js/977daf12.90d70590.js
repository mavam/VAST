"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55166],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=s(n),u=r,g=y["".concat(l,".").concat(u)]||y[u]||d[u]||o;return n?t.createElement(g,p(p({ref:a},c),{},{components:n})):t.createElement(g,p({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[y]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52694:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>g,metadata:()=>b,toc:()=>I});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(i)for(var n of i(a))s.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>o(e,p(a)),u=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const g={},m="chart_pie",b={unversionedId:"tql2/operators/chart_pie",id:"version-v4.27/tql2/operators/chart_pie",title:"chart_pie",description:"Visualizes events on an pie chart.",source:"@site/versioned_docs/version-v4.27/tql2/operators/chart_pie.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/chart_pie",permalink:"/v4.27/tql2/operators/chart_pie",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/chart_pie.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"chart_line",permalink:"/v4.27/tql2/operators/chart_line"},next:{title:"compress",permalink:"/v4.27/tql2/operators/compress"}},h={},I=[{value:"Description",id:"description",level:2},{value:"<code>label = field</code>",id:"label--field",level:3},{value:"<code>value = any</code>",id:"value--any",level:3},{value:"<code>group = any (optional)</code>",id:"group--any-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Chart count of events imported for every unique schema",id:"chart-count-of-events-imported-for-every-unique-schema",level:3}],v={toc:I},N="wrapper";function f(e){var a=e,{components:n}=a,r=u(a,["components"]);return(0,t.yg)(N,d(y(y({},v),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"chart_pie"}),"chart_pie"),(0,t.yg)("p",null,"Visualizes events on an pie chart."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"chart_pie"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," label"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"field, value"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, [group"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"any]"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"chart_pie label=field, value=any, [group=any]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"Visualizes events with an pie chart on the ",(0,t.yg)("a",y({parentName:"p"},{href:"https://app.tenzir.com"}),"Tenzir\nPlatform"),"."),(0,t.yg)("h3",y({},{id:"label--field"}),(0,t.yg)("inlineCode",{parentName:"h3"},"label = field")),(0,t.yg)("p",null,"Name of each slice on the chart."),(0,t.yg)("h3",y({},{id:"value--any"}),(0,t.yg)("inlineCode",{parentName:"h3"},"value = any")),(0,t.yg)("p",null,"Value of each slice on the chart.\nMultiple data points for the same group can be be aggregated using an\n",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.27/tql2/functions#aggregations"}),"aggregation function"),"."),(0,t.yg)("p",null,"Multiple ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values and their labels can be specified by using the record\nsyntax: ",(0,t.yg)("inlineCode",{parentName:"p"},"{name: value, ...}"),"."),(0,t.yg)("p",null,"For example, ",(0,t.yg)("inlineCode",{parentName:"p"},'y = {"Avg. Load": mean(load)}')," calculates the\n",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.27/tql2/functions/mean"}),"mean")," of the ",(0,t.yg)("inlineCode",{parentName:"p"},"load")," field and labels it as ",(0,t.yg)("inlineCode",{parentName:"p"},"Avg. Load"),"."),(0,t.yg)("h3",y({},{id:"group--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"group = any (optional)")),(0,t.yg)("p",null,"Optional expression to group the aggregations with."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("h3",y({},{id:"chart-count-of-events-imported-for-every-unique-schema"}),"Chart count of events imported for every unique schema"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"metrics"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "import"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," timestamp "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," now"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1d")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"chart_pie"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," label"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"schema, value"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(events)"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'metrics "import"\nwhere timestamp > now() - 1d\nchart_pie label=schema, value=sum(events)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}f.isMDXComponent=!0}}]);