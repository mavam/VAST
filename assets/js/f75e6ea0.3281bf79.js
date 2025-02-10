"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43540],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=s(n),m=r,g=y["".concat(l,".").concat(m)]||y[m]||c[m]||p;return n?t.createElement(g,o(o({ref:a},d),{},{components:n})):t.createElement(g,o({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21560:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>D,frontMatter:()=>g,metadata:()=>I,toc:()=>h});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&d(e,n,a[n]);if(i)for(var n of i(a))s.call(a,n)&&d(e,n,a[n]);return e},c=(e,a)=>p(e,o(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const g={},u="sample",I={unversionedId:"tql2/operators/sample",id:"version-v4.28/tql2/operators/sample",title:"sample",description:"Dynamically samples events from a event stream.",source:"@site/versioned_docs/version-v4.28/tql2/operators/sample.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/sample",permalink:"/tql2/operators/sample",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/tql2/operators/sample.md",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"reverse",permalink:"/tql2/operators/reverse"},next:{title:"save_amqp",permalink:"/tql2/operators/save_amqp"}},b={},h=[{value:"Description",id:"description",level:2},{value:"<code>period: duration (optional)</code>",id:"period-duration-optional",level:3},{value:"<code>mode = string (optional)</code>",id:"mode--string-optional",level:3},{value:"<code>min_events = int (optional)</code>",id:"min_events--int-optional",level:3},{value:"<code>max_rate = int (optional)</code>",id:"max_rate--int-optional",level:3},{value:"<code>max_samples = int (optional)</code>",id:"max_samples--int-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Sample the input every 30s dynamically",id:"sample-the-input-every-30s-dynamically",level:3},{value:"Sample metrics every hour",id:"sample-metrics-every-hour",level:3}],N={toc:h},v="wrapper";function D(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(v,c(y(y({},N),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"sample"}),"sample"),(0,t.yg)("p",null,"Dynamically samples events from a event stream."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sample"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," [period"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, mode"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, min_events"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, max_rate"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, max_samples"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"sample [period:duration, mode=string, min_events=int, max_rate=int, max_samples=int]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"Dynamically samples input data from a stream based on the frequency of\nreceiving events for streams with varying load."),(0,t.yg)("p",null,"The operator counts the number of events received in the ",(0,t.yg)("inlineCode",{parentName:"p"},"period")," and applies\nthe specified function on the count to calculate the sampling rate for the next\nperiod."),(0,t.yg)("h3",y({},{id:"period-duration-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"period: duration (optional)")),(0,t.yg)("p",null,"The duration to count events in, i.e., how often the sample rate is computed."),(0,t.yg)("p",null,"The sampling rate for the first window is ",(0,t.yg)("inlineCode",{parentName:"p"},"1:1"),"."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"30s"),"."),(0,t.yg)("h3",y({},{id:"mode--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"mode = string (optional)")),(0,t.yg)("p",null,"The function used to compute the sampling rate:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"ln"')," (default)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"log2"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"log10"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"sqrt"'))),(0,t.yg)("h3",y({},{id:"min_events--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"min_events = int (optional)")),(0,t.yg)("p",null,"The minimum number of events that must be received during the previous sampling\nperiod for the sampling mode to be applied in the current period. If the number\nof events in a sample group falls below this threshold, a ",(0,t.yg)("inlineCode",{parentName:"p"},"1:1")," sample rate is\nused instead."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"30"),"."),(0,t.yg)("h3",y({},{id:"max_rate--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"max_rate = int (optional)")),(0,t.yg)("p",null,"The sampling rate is capped to this value if the computed rate is higher than this."),(0,t.yg)("h3",y({},{id:"max_samples--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"max_samples = int (optional)")),(0,t.yg)("p",null,"The maximum number of events to emit per ",(0,t.yg)("inlineCode",{parentName:"p"},"period"),"."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("h3",y({},{id:"sample-the-input-every-30s-dynamically"}),"Sample the input every 30s dynamically"),(0,t.yg)("p",null,"Sample a feed ",(0,t.yg)("inlineCode",{parentName:"p"},"log-stream")," every 30s dynamically, only changing rate when more\nthan 50 events (",(0,t.yg)("inlineCode",{parentName:"p"},"min_events"),") are received. Additionally, cap the max sampling\nrate to ",(0,t.yg)("inlineCode",{parentName:"p"},"1:500"),", i.e., 1 sample for every 500 events or more (",(0,t.yg)("inlineCode",{parentName:"p"},"max_rate"),")."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "log-stream"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sample"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 30s"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", min_events"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"50"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", max_rate"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"500"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'subscribe "log-stream"\nsample 30s, min_events=50, max_rate=500',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",y({},{id:"sample-metrics-every-hour"}),"Sample metrics every hour"),(0,t.yg)("p",null,"Sample some ",(0,t.yg)("inlineCode",{parentName:"p"},"metrics")," every hour, limiting the max samples per period to 5,000\nsamples (",(0,t.yg)("inlineCode",{parentName:"p"},"max_samples"),") and limiting the overall sample count to 100,000 samples\n(",(0,t.yg)("a",y({parentName:"p"},{href:"/tql2/operators/head"}),(0,t.yg)("inlineCode",{parentName:"a"},"head")),")."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "metrics"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sample"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", max_samples"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"5k")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"head"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 100k"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'subscribe "metrics"\nsample 1h, max_samples=5k\nhead 100k',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}D.isMDXComponent=!0}}]);