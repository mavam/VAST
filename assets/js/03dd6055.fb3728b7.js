"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4008],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>g,metadata:()=>v,toc:()=>d});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={title:"Tenzir Platform v1.8: Charting the Unknown",slug:"tenzir-platform-v1.8",authors:["lava","raxyte"],date:new Date("2025-01-30T00:00:00.000Z"),tags:["release","platform"],comments:!0},y=void 0,v={permalink:"/blog/tenzir-platform-v1.8",source:"@site/blog/tenzir-platform-v1.8/index.md",title:"Tenzir Platform v1.8: Charting the Unknown",description:"We're happy to announce Tenzir Platform v1.8, with",date:"2025-01-30T00:00:00.000Z",formattedDate:"January 30, 2025",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"platform",permalink:"/blog/tags/platform"}],readingTime:2.045,hasTruncateMarker:!0,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"},{name:"Raghav Narang",title:"Software Engineer",url:"https://github.com/raxyte",email:"raghav@tenzir.com",imageURL:"https://github.com/raxyte.png",key:"raxyte"}],frontMatter:{title:"Tenzir Platform v1.8: Charting the Unknown",slug:"tenzir-platform-v1.8",authors:["lava","raxyte"],date:"2025-01-30T00:00:00.000Z",tags:["release","platform"],comments:!0},prevItem:{title:"Tenzir Node v4.27: Amazon MSK IAM Integration",permalink:"/blog/tenzir-node-v4.27"},nextItem:{title:"Tenzir Node v4.26: Amazon Security Lake Integration",permalink:"/blog/tenzir-node-v4.26"}},b={authorsImageUrls:[void 0,void 0]},d=[],h={toc:d},O="wrapper";function w(e){var t=e,{components:a}=t,o=u(t,["components"]);return(0,n.yg)(O,f(m(m({},h),o),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"We're happy to announce ",(0,n.yg)("a",m({parentName:"p"},{href:"https://github.com/tenzir/platform/releases/tag/v1.8.0"}),"Tenzir Platform v1.8"),", with\nnew and improved charting as well as a new single-user mode for\nSovereign Edition users."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Tenzir Platform v1.8",src:r(48029).A,width:"3093",height:"1406"})))}w.isMDXComponent=!0},48029:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/tenzir-platform-1.8-763b9f19f5e5a18bc8d27e430017bd79.png"}}]);