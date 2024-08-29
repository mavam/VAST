"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7678],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>f});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),y=o,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},79710:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>m,default:()=>w,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))c.call(r,t)&&l(e,t,r[t]);return e},u=(e,r)=>i(e,a(r)),y=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const f={sidebar_custom_props:{operator:{sink:!0}}},m="discard",v={unversionedId:"operators/discard",id:"version-v4.19/operators/discard",title:"discard",description:"Discards all incoming events.",source:"@site/versioned_docs/version-v4.19/operators/discard.md",sourceDirName:"operators",slug:"/operators/discard",permalink:"/operators/discard",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/discard.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"diagnostics",permalink:"/operators/diagnostics"},next:{title:"drop",permalink:"/operators/drop"}},g={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function w(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.yg)(h,u(d(d({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"discard"}),"discard"),(0,n.yg)("p",null,"Discards all incoming events."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"discard\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"discard")," operator has a similar effect as ",(0,n.yg)("inlineCode",{parentName:"p"},"to file /dev/null write json"),",\nbut it immediately discards all events without first rendering them with a\nprinter."),(0,n.yg)("p",null,"This operator is mainly used to test or benchmark pipelines."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Benchmark to see how long it takes to export everything:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"export | discard\n")))}w.isMDXComponent=!0}}]);