"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12755],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>m});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},y=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=s(a),g=o,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return a?t.createElement(m,p(p({ref:n},y),{},{components:a})):t.createElement(m,p({ref:n},y))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8921:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>N,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var t=a(15680),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,y=(e,n,a)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,c=(e,n)=>{for(var a in n||(n={}))l.call(n,a)&&y(e,a,n[a]);if(i)for(var a of i(n))s.call(n,a)&&y(e,a,n[a]);return e},d=(e,n)=>r(e,p(n)),g=(e,n)=>{var a={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&s.call(e,t)&&(a[t]=e[t]);return a};const m={},u="chart_line",h={unversionedId:"tql2/operators/chart_line",id:"version-v4.28/tql2/operators/chart_line",title:"chart_line",description:"Visualizes events on an line chart.",source:"@site/versioned_docs/version-v4.28/tql2/operators/chart_line.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/chart_line",permalink:"/tql2/operators/chart_line",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/tql2/operators/chart_line.md",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"chart_bar",permalink:"/tql2/operators/chart_bar"},next:{title:"chart_pie",permalink:"/tql2/operators/chart_pie"}},N={},b=[{value:"Description",id:"description",level:2},{value:"<code>x = field</code>",id:"x--field",level:3},{value:"<code>y = any</code>",id:"y--any",level:3},{value:"<code>x_min = any (optional)</code>",id:"x_min--any-optional",level:3},{value:"<code>x_max = any (optional)</code>",id:"x_max--any-optional",level:3},{value:"<code>y_min = any (optional)</code>",id:"y_min--any-optional",level:3},{value:"<code>y_max = any (optional)</code>",id:"y_max--any-optional",level:3},{value:"<code>resolution = duration (optional)</code>",id:"resolution--duration-optional",level:3},{value:"<code>x_log = bool (optional)</code>",id:"x_log--bool-optional",level:3},{value:"<code>y_log = bool (optional)</code>",id:"y_log--bool-optional",level:3},{value:"<code>group = any (optional)</code>",id:"group--any-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Chart published events",id:"chart-published-events",level:3}],x={toc:b},I="wrapper";function f(e){var n=e,{components:a}=n,o=g(n,["components"]);return(0,t.yg)(I,d(c(c({},x),o),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"chart_line"}),"chart_line"),(0,t.yg)("p",null,"Visualizes events on an line chart."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"chart_line"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"field, y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, [x_min"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, x_max"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, y_min"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, y_max"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"                            resolution"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, x_log"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, y_log"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"                            group"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any]"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"chart_line x=field, y=any, [x_min=any, x_max=any, y_min=any, y_max=any,\n                            resolution=duration, x_log=bool, y_log=bool,\n                            group=any]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"Visualizes events with an line chart on the ",(0,t.yg)("a",c({parentName:"p"},{href:"https://app.tenzir.com"}),"Tenzir\nPlatform"),"."),(0,t.yg)("h3",c({},{id:"x--field"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x = field")),(0,t.yg)("p",null,"Positions on the x-axis for each data point."),(0,t.yg)("h3",c({},{id:"y--any"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y = any")),(0,t.yg)("p",null,"Positions on the y-axis for each data point.\nMultiple data points for the same group can be be aggregated using an\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/functions#aggregations"}),"aggregation function"),"."),(0,t.yg)("p",null,"Multiple ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values and their labels can be specified by using the record\nsyntax: ",(0,t.yg)("inlineCode",{parentName:"p"},"{name: value, ...}"),"."),(0,t.yg)("p",null,"For example, ",(0,t.yg)("inlineCode",{parentName:"p"},'y = {"Avg. Load": mean(load)}')," calculates the\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/functions/mean"}),"mean")," of the ",(0,t.yg)("inlineCode",{parentName:"p"},"load")," field and labels it as ",(0,t.yg)("inlineCode",{parentName:"p"},"Avg. Load"),"."),(0,t.yg)("h3",c({},{id:"x_min--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x_min = any (optional)")),(0,t.yg)("p",null,"If specified, only charts events where ",(0,t.yg)("inlineCode",{parentName:"p"},"x >= x_min"),".\nIf ",(0,t.yg)("inlineCode",{parentName:"p"},"resolution")," is specified, ",(0,t.yg)("inlineCode",{parentName:"p"},"x_min")," is ",(0,t.yg)("em",{parentName:"p"},"floored")," to create a full bucket."),(0,t.yg)("h3",c({},{id:"x_max--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x_max = any (optional)")),(0,t.yg)("p",null,"If specified, only charts events where ",(0,t.yg)("inlineCode",{parentName:"p"},"x <= x_max"),".\nIf ",(0,t.yg)("inlineCode",{parentName:"p"},"resolution")," is specified, ",(0,t.yg)("inlineCode",{parentName:"p"},"x_max")," is ",(0,t.yg)("em",{parentName:"p"},"ceiled")," to create a full bucket."),(0,t.yg)("h3",c({},{id:"y_min--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y_min = any (optional)")),(0,t.yg)("p",null,"If specified, any ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values less than ",(0,t.yg)("inlineCode",{parentName:"p"},"y_min")," will appear clipped out of the\nchart."),(0,t.yg)("h3",c({},{id:"y_max--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y_max = any (optional)")),(0,t.yg)("p",null,"If specified, any ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values greater than ",(0,t.yg)("inlineCode",{parentName:"p"},"y_max")," will appear clipped out of the\nchart."),(0,t.yg)("h3",c({},{id:"resolution--duration-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"resolution = duration (optional)")),(0,t.yg)("p",null,"This option can be specified to create buckets of the given resolution on the\nx-axis. An aggregation function must be specified to combine values in the same\nbucket when ",(0,t.yg)("inlineCode",{parentName:"p"},"resolution")," is specified."),(0,t.yg)("p",null,"For example, if the resolution is set to ",(0,t.yg)("inlineCode",{parentName:"p"},"15min"),", the ",(0,t.yg)("inlineCode",{parentName:"p"},"x")," values are ",(0,t.yg)("em",{parentName:"p"},"floored"),"\nto create buckets of 15 minutes. Any aggregations specified act on that bucket."),(0,t.yg)("h3",c({},{id:"x_log--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x_log = bool (optional)")),(0,t.yg)("p",null,"If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", use a logarithmic scale for the x-axis."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"y_log--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y_log = bool (optional)")),(0,t.yg)("p",null,"If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", use a logarithmic scale for the y-axis."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"group--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"group = any (optional)")),(0,t.yg)("p",null,"Optional expression to group the aggregations with."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"chart-published-events"}),"Chart published events"),(0,t.yg)("p",null,"This pipeline charts number of events published by each pipeline over 30 minute\nintervals for the past 24 hours."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"metrics"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "publish"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"chart_line"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"timestamp,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(events),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    x_min"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"now"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1d"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    group"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"pipeline_id,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resolution"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"30min"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'metrics "publish"\nchart_line x=timestamp,\n    y=sum(events),\n    x_min=now()-1d,\n    group=pipeline_id,\n    resolution=30min',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}f.isMDXComponent=!0}}]);