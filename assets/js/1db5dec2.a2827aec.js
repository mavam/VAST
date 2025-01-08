"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99021],{15680:(e,r,t)=>{t.d(r,{xA:()=>f,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},f=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,g=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return t?n.createElement(g,l(l({ref:r},f),{},{components:t})):n.createElement(g,l({ref:r},f))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59833:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>P,frontMatter:()=>g,metadata:()=>b,toc:()=>d});var n=t(15680),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&f(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&f(e,t,r[t]);return e},m=(e,r)=>o(e,l(r)),u=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const g={title:"Tenzir Platform v1.7: Explorer Drag'n'Drop",slug:"tenzir-platform-v1.7",authors:["lava"],date:new Date("2025-01-08T00:00:00.000Z"),tags:["release","platform"],comments:!0},y=void 0,b={permalink:"/blog/tenzir-platform-v1.7",source:"@site/blog/tenzir-platform-v1.7/index.md",title:"Tenzir Platform v1.7: Explorer Drag'n'Drop",description:"To kick off the new year, we're releasing [Tenzir Platform",date:"2025-01-08T00:00:00.000Z",formattedDate:"January 8, 2025",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"platform",permalink:"/blog/tags/platform"}],readingTime:1.78,hasTruncateMarker:!0,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"}],frontMatter:{title:"Tenzir Platform v1.7: Explorer Drag'n'Drop",slug:"tenzir-platform-v1.7",authors:["lava"],date:"2025-01-08T00:00:00.000Z",tags:["release","platform"],comments:!0},nextItem:{title:"Tenzir Platform v1.6: Example Pipelines",permalink:"/blog/tenzir-platform-v1.6"}},v={authorsImageUrls:[void 0]},d=[],O={toc:d},h="wrapper";function P(e){var r=e,{components:a}=r,o=u(r,["components"]);return(0,n.yg)(h,m(s(s({},O),o),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"To kick off the new year, we're releasing ",(0,n.yg)("a",s({parentName:"p"},{href:"https://github.com/tenzir/platform/releases/tag/v1.7.0"}),"Tenzir Platform\nv1.7"),", featuring support for file drag and drop and a lot of\nstability improvements."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Tenzir Platform v1.7",src:t(89619).A,width:"2942",height:"1880"})))}P.isMDXComponent=!0},89619:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/tenzir-platform-v1.7-9d8d33a914788e50c2626f6d093ffb72.png"}}]);