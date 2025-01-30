"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53250],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},y=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=d(a),c=r,s=g["".concat(l,".").concat(c)]||g[c]||m[c]||i;return a?n.createElement(s,p(p({ref:t},y),{},{components:a})):n.createElement(s,p({ref:t},y))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var d=2;d<i;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>C,frontMatter:()=>s,metadata:()=>N,toc:()=>I});var n=a(15680),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&y(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&y(e,a,t[a]);return e},m=(e,t)=>i(e,p(t)),c=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const s={},u="format_time",N={unversionedId:"tql2/functions/format_time",id:"version-v4.26/tql2/functions/format_time",title:"format_time",description:"Formats a time into a string that follows a specific format.",source:"@site/versioned_docs/version-v4.26/tql2/functions/format_time.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/format_time",permalink:"/v4.26/tql2/functions/format_time",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/tql2/functions/format_time.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"floor",permalink:"/v4.26/tql2/functions/floor"},next:{title:"from_epoch",permalink:"/v4.26/tql2/functions/from_epoch"}},b={},I=[{value:"Description",id:"description",level:2},{value:"<code>input: time</code>",id:"input-time",level:3},{value:"<code>format: string</code>",id:"format-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Format a timestamp",id:"format-a-timestamp",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:I},f="wrapper";function C(e){var t=e,{components:a}=t,r=c(t,["components"]);return(0,n.yg)(f,m(g(g({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"format_time"}),"format_time"),(0,n.yg)("p",null,"Formats a time into a string that follows a specific format."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"format_time"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(input"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," time, format"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," string) "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:"format_time(input: time, format: string) -> string",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"format_time")," function formats the given ",(0,n.yg)("inlineCode",{parentName:"p"},"input")," time into a string by using the given ",(0,n.yg)("inlineCode",{parentName:"p"},"format"),"."),(0,n.yg)("h3",g({},{id:"input-time"}),(0,n.yg)("inlineCode",{parentName:"h3"},"input: time")),(0,n.yg)("p",null,"The input time for which a string should be constructed."),(0,n.yg)("h3",g({},{id:"format-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"format: string")),(0,n.yg)("p",null,"The string that specifies the desired output format, for example ",(0,n.yg)("inlineCode",{parentName:"p"},'"%m-%d-%Y"'),". The\nallowed format specifiers are the same as for ",(0,n.yg)("inlineCode",{parentName:"p"},"strftime(3)"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",g({parentName:"tr"},{align:"center"}),"Specifier"),(0,n.yg)("th",g({parentName:"tr"},{align:null}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%a")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Abbreviated name of the day of the week (locale-specific).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%A")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Full name of the day of the week (locale-specific).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%b")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Abbreviated month name (locale-specific).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%B")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Full month name (locale-specific).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%c")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Preferred date and time representation for the current locale.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%C")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Century number (year/100) as a 2-digit integer.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%d")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Day of the month as a decimal number (01\u201331).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%D")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Equivalent to ",(0,n.yg)("inlineCode",{parentName:"td"},"%m/%d/%y"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%e")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Day of the month as a decimal number with a leading space instead of zero.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%E")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),'Modifier for alternative ("era-based") format.')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%F")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"ISO 8601 date format (",(0,n.yg)("inlineCode",{parentName:"td"},"%Y-%m-%d"),").")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%G")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"ISO week-based year with century.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%g")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"ISO week-based year without century (2 digits).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%h")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Equivalent to ",(0,n.yg)("inlineCode",{parentName:"td"},"%b"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%H")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Hour (24-hour clock) as a decimal number (00\u201323).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%I")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Hour (12-hour clock) as a decimal number (01\u201312).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%j")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Day of the year as a decimal number (001\u2013366).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%k")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Hour (24-hour clock) as a decimal number with leading space (0\u201323).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%l")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Hour (12-hour clock) as a decimal number with leading space (1\u201312).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%m")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Month as a decimal number (01\u201312).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%M")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Minute as a decimal number (00\u201359).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%n")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Newline character.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%O")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Modifier for alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%p")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"AM/PM or corresponding strings for the current locale.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%P")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Like ",(0,n.yg)("inlineCode",{parentName:"td"},"%p"),', but lowercase (e.g., "am", "pm").')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%r")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Time in a.m./p.m. notation (locale-specific).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%R")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Time in 24-hour notation (",(0,n.yg)("inlineCode",{parentName:"td"},"%H:%M"),").")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%s")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Seconds since the Unix Epoch (1970-01-01 00:00:00 UTC).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%S")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Second as a decimal number (00\u201360, allowing leap seconds).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%t")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Tab character.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%T")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Time in 24-hour notation (",(0,n.yg)("inlineCode",{parentName:"td"},"%H:%M:%S"),").")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%u")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Day of the week as a decimal number (1=Monday, 7=Sunday).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%U")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Week number of the year (starting Sunday, range 00\u201353).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%V")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"ISO 8601 week number (range 01\u201353).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%w")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Day of the week as a decimal number (0=Sunday, 6=Saturday).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%W")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Week number of the year (starting Monday, range 00\u201353).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%x")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Preferred date representation for the current locale.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%X")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Preferred time representation for the current locale.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%y")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Year without century as a decimal number (00\u201399).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Y")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Year with century as a decimal number.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%z")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Numeric timezone offset from UTC (",(0,n.yg)("inlineCode",{parentName:"td"},"+hhmm")," or ",(0,n.yg)("inlineCode",{parentName:"td"},"-hhmm"),").")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Z")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Timezone name or abbreviation.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%+")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Date and time in ",(0,n.yg)("inlineCode",{parentName:"td"},"date(1)")," format.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%%")),(0,n.yg)("td",g({parentName:"tr"},{align:null}),"Literal ",(0,n.yg)("inlineCode",{parentName:"td"},"%")," character.")))),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("h3",g({},{id:"format-a-timestamp"}),"Format a timestamp"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"12"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"31T12"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),":59:42"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"x "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"format_time"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"%d.%m.%Y"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:'from {\n  x: 2024-12-31T12:59:42,\n}\nx = x.format_time("%d.%m.%Y")',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "31.12.2024"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:'{x: "31.12.2024"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",g({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",g({parentName:"p"},{href:"/v4.26/tql2/functions/parse_time"}),(0,n.yg)("inlineCode",{parentName:"a"},"parse_time"))))}C.isMDXComponent=!0}}]);