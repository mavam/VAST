"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={},y="enumerate",v={unversionedId:"understand/operators/transformations/enumerate",id:"understand/operators/transformations/enumerate",title:"enumerate",description:"Prepend a column with row numbers.",source:"@site/docs/understand/operators/transformations/enumerate.md",sourceDirName:"understand/operators/transformations",slug:"/understand/operators/transformations/enumerate",permalink:"/docs/next/understand/operators/transformations/enumerate",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/operators/transformations/enumerate.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"drop",permalink:"/docs/next/understand/operators/transformations/drop"},next:{title:"extend",permalink:"/docs/next/understand/operators/transformations/extend"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"Examples",id:"examples",level:2}],w={toc:h},O="wrapper";function g(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(O,d(c(c({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"enumerate"}),"enumerate"),(0,r.kt)("p",null,"Prepend a column with row numbers."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"enumerate [<field>]\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enumerate")," operator prepends a new column with row numbers to the beginning\nof the input record."),(0,r.kt)("admonition",c({},{title:"Per-schema Counting",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},'The operator counts row numbers per schema. We plan to change this behavior with\na in the future once we have a modifer that toggles "per-schema-ness"\nexplicitly.')),(0,r.kt)("h3",c({},{id:"field"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field>")),(0,r.kt)("p",null,"Sets the name of the output field."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," to avoid conflicts with existing field names."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Enumerate the input by prepending row numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from file eve.json read suricata | select event_type | enumerate | write json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{"#": 0, "event_type": "alert"}\n{"#": 0, "event_type": "flow"}\n{"#": 1, "event_type": "flow"}\n{"#": 0, "event_type": "http"}\n{"#": 1, "event_type": "alert"}\n{"#": 1, "event_type": "http"}\n{"#": 2, "event_type": "flow"}\n{"#": 0, "event_type": "fileinfo"}\n{"#": 3, "event_type": "flow"}\n{"#": 4, "event_type": "flow"}\n')),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," as field name instead of the default:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"enumerate index\n")))}g.isMDXComponent=!0}}]);