"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69642],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>b});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>w,frontMatter:()=>b,metadata:()=>y,toc:()=>d});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"VAST v2.3.1",authors:"lava",date:new Date("2022-10-17T00:00:00.000Z"),tags:["release","rebuild","performance"]},g=void 0,y={permalink:"/blog/vast-v2.3.1",source:"@site/blog/vast-v2.3.1/index.md",title:"VAST v2.3.1",description:"VAST v2.3.1 is now available. This small bugfix release",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"rebuild",permalink:"/blog/tags/rebuild"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:.215,hasTruncateMarker:!1,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"}],frontMatter:{title:"VAST v2.3.1",authors:"lava",date:"2022-10-17T00:00:00.000Z",tags:["release","rebuild","performance"]},prevItem:{title:"Parquet & Feather: Writing Security Telemetry",permalink:"/blog/parquet-and-feather-writing-security-telemetry"},nextItem:{title:"Parquet & Feather: Enabling Open Investigations",permalink:"/blog/parquet-and-feather-enabling-open-investigations"}},v={authorsImageUrls:[void 0]},d=[],O={toc:d},h="wrapper";function w(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.yg)(h,f(u(u({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v2.3.1"}),"VAST v2.3.1")," is now available. This small bugfix release\naddresses an issue where compaction would hang if encountering\ninvalid partitions that were produced by older versions of VAST when a large\n",(0,n.yg)("inlineCode",{parentName:"p"},"max-partition-size")," was set in combination with badly compressible input data."))}w.isMDXComponent=!0}}]);