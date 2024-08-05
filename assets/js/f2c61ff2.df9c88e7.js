"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},h="throttle",b={unversionedId:"operators/throttle",id:"operators/throttle",title:"throttle",description:"Limits the bandwidth of a pipeline.",source:"@site/docs/operators/throttle.md",sourceDirName:"operators",slug:"/operators/throttle",permalink:"/next/operators/throttle",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/throttle.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"taste",permalink:"/next/operators/taste"},next:{title:"timeshift",permalink:"/next/operators/timeshift"}},y={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;bandwidth&gt;</code>",id:"bandwidth",level:3},{value:"Examples",id:"examples",level:2}],O={toc:v},g="wrapper";function k(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(g,u(d(d({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"throttle"}),"throttle"),(0,n.kt)("p",null,"Limits the bandwidth of a pipeline."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"throttle <bandwidth>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"throttle")," operator limits the amount of data flowing through it to a\nmaximum bandwidth."),(0,n.kt)("h3",d({},{id:"bandwidth"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<bandwidth>")),(0,n.kt)("p",null,"An unsigned integer giving the maximum bandwidth that is enforced for\nthis pipeline, in bytes per second."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a TCP stream and print the data to stdout at a rate of 1 character per\nsecond:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"load tcp://0.0.0.0:4000 | throttle 1\n")),(0,n.kt)("p",null,"Load a sample input data file at a speed of at most 1MiB/s and import\nit into the node:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"load https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst\n| throttle 1Mi\n| decompress zstd\n| read zeek-tsv\n| import\n")))}k.isMDXComponent=!0}}]);