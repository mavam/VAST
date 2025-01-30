"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13640],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},y=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return n?t.createElement(m,p(p({ref:a},y),{},{components:n})):t.createElement(m,p({ref:a},y))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=g;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82819:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>N,toc:()=>b});var t=n(15680),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&y(e,n,a[n]);if(i)for(var n of i(a))s.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>r(e,p(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const m={},u="chart_area",N={unversionedId:"tql2/operators/chart_area",id:"version-v4.27/tql2/operators/chart_area",title:"chart_area",description:"Visualizes events on an area chart.",source:"@site/versioned_docs/version-v4.27/tql2/operators/chart_area.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/chart_area",permalink:"/tql2/operators/chart_area",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/chart_area.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"cache",permalink:"/tql2/operators/cache"},next:{title:"chart_bar",permalink:"/tql2/operators/chart_bar"}},h={},b=[{value:"Description",id:"description",level:2},{value:"<code>x = field</code>",id:"x--field",level:3},{value:"<code>y = any</code>",id:"y--any",level:3},{value:"<code>x_min = any (optional)</code>",id:"x_min--any-optional",level:3},{value:"<code>x_max = any (optional)</code>",id:"x_max--any-optional",level:3},{value:"<code>y_min = any (optional)</code>",id:"y_min--any-optional",level:3},{value:"<code>y_max = any (optional)</code>",id:"y_max--any-optional",level:3},{value:"<code>resolution = duration (optional)</code>",id:"resolution--duration-optional",level:3},{value:"<code>x_log = bool (optional)</code>",id:"x_log--bool-optional",level:3},{value:"<code>y_log = bool (optional)</code>",id:"y_log--bool-optional",level:3},{value:"<code>group = any (optional)</code>",id:"group--any-optional",level:3},{value:"<code>position = string (optional)</code>",id:"position--string-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Chart TCP metrics",id:"chart-tcp-metrics",level:3}],x={toc:b},I="wrapper";function f(e){var a=e,{components:n}=a,o=g(a,["components"]);return(0,t.yg)(I,d(c(c({},x),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"chart_area"}),"chart_area"),(0,t.yg)("p",null,"Visualizes events on an area chart."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"chart_area"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"field, y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, [x_min"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, x_max"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, y_min"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, y_max"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"                            resolution"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, x_log"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, y_log"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"                            group"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, position"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"chart_area x=field, y=any, [x_min=any, x_max=any, y_min=any, y_max=any,\n                            resolution=duration, x_log=bool, y_log=bool,\n                            group=any, position=string]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"Visualizes events with an area chart on the ",(0,t.yg)("a",c({parentName:"p"},{href:"https://app.tenzir.com"}),"Tenzir\nPlatform"),"."),(0,t.yg)("h3",c({},{id:"x--field"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x = field")),(0,t.yg)("p",null,"Positions on the x-axis for each data point."),(0,t.yg)("h3",c({},{id:"y--any"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y = any")),(0,t.yg)("p",null,"Positions on the y-axis for each data point.\nMultiple data points for the same group can be be aggregated using an\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/functions#aggregations"}),"aggregation function"),"."),(0,t.yg)("p",null,"Multiple ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values and their labels can be specified by using the record\nsyntax: ",(0,t.yg)("inlineCode",{parentName:"p"},"{name: value, ...}"),"."),(0,t.yg)("p",null,"For example, ",(0,t.yg)("inlineCode",{parentName:"p"},'y = {"Avg. Load": mean(load)}')," calculates the\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/functions/mean"}),"mean")," of the ",(0,t.yg)("inlineCode",{parentName:"p"},"load")," field and labels it as ",(0,t.yg)("inlineCode",{parentName:"p"},"Avg. Load"),"."),(0,t.yg)("h3",c({},{id:"x_min--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x_min = any (optional)")),(0,t.yg)("p",null,"If specified, only charts events where ",(0,t.yg)("inlineCode",{parentName:"p"},"x >= x_min"),".\nIf ",(0,t.yg)("inlineCode",{parentName:"p"},"resolution")," is specified, ",(0,t.yg)("inlineCode",{parentName:"p"},"x_min")," is ",(0,t.yg)("em",{parentName:"p"},"floored")," to create a full bucket."),(0,t.yg)("h3",c({},{id:"x_max--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x_max = any (optional)")),(0,t.yg)("p",null,"If specified, only charts events where ",(0,t.yg)("inlineCode",{parentName:"p"},"x <= x_max"),".\nIf ",(0,t.yg)("inlineCode",{parentName:"p"},"resolution")," is specified, ",(0,t.yg)("inlineCode",{parentName:"p"},"x_max")," is ",(0,t.yg)("em",{parentName:"p"},"ceiled")," to create a full bucket."),(0,t.yg)("h3",c({},{id:"y_min--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y_min = any (optional)")),(0,t.yg)("p",null,"If specified, any ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values less than ",(0,t.yg)("inlineCode",{parentName:"p"},"y_min")," will appear clipped out of the\nchart."),(0,t.yg)("h3",c({},{id:"y_max--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y_max = any (optional)")),(0,t.yg)("p",null,"If specified, any ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values greater than ",(0,t.yg)("inlineCode",{parentName:"p"},"y_max")," will appear clipped out of the\nchart."),(0,t.yg)("h3",c({},{id:"resolution--duration-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"resolution = duration (optional)")),(0,t.yg)("p",null,"This option can be specified to create buckets of the given resolution on the\nx-axis. An aggregation function must be specified to combine values in the same\nbucket when ",(0,t.yg)("inlineCode",{parentName:"p"},"resolution")," is specified."),(0,t.yg)("p",null,"For example, if the resolution is set to ",(0,t.yg)("inlineCode",{parentName:"p"},"15min"),", the ",(0,t.yg)("inlineCode",{parentName:"p"},"x")," values are ",(0,t.yg)("em",{parentName:"p"},"floored"),"\nto create buckets of 15 minutes. Any aggregations specified act on that bucket."),(0,t.yg)("h3",c({},{id:"x_log--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"x_log = bool (optional)")),(0,t.yg)("p",null,"If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", use a logarithmic scale for the x-axis."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"y_log--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"y_log = bool (optional)")),(0,t.yg)("p",null,"If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", use a logarithmic scale for the y-axis."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"group--any-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"group = any (optional)")),(0,t.yg)("p",null,"Optional expression to group the aggregations with."),(0,t.yg)("h3",c({},{id:"position--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"position = string (optional)")),(0,t.yg)("p",null,"Determines how the ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," values are displayed. Possible values:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"grouped")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"stacked"))),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"grouped"),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"chart-tcp-metrics"}),"Chart TCP metrics"),(0,t.yg)("p",null,"This pipeline charts MBs read and written by different pipelines over TCP in\nhourly intervals for the past 24 hours."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"metrics"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tcp"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"chart_area"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"timestamp,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{tx"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," sum"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_written"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"/"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1M"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"), rx"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," sum"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_read"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"/"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1M"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")},")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    x_min"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"now"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1d"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resolution"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1h"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    group"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"pipeline_id"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'metrics "tcp"\nchart_area x=timestamp,\n    y={tx: sum(bytes_written/1M), rx: sum(bytes_read/1M)},\n    x_min=now()-1d,\n    resolution=1h,\n    group=pipeline_id',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}f.isMDXComponent=!0}}]);