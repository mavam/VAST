"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47602],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>d});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=c(t),v=o,d=y["".concat(p,".").concat(v)]||y[v]||u[v]||a;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=v;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[y]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},51563:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>j,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&l(e,t,r[t]);return e},u=(e,r)=>a(e,s(r)),v=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const d={sidebar_custom_props:{operator:{sink:!0}}},f="save",m={unversionedId:"operators/save",id:"version-v4.19/operators/save",title:"save",description:"The save operator saves bytes to a connector.",source:"@site/versioned_docs/version-v4.19/operators/save.md",sourceDirName:"operators",slug:"/operators/save",permalink:"/operators/save",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/save.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"reverse",permalink:"/operators/reverse"},next:{title:"select",permalink:"/operators/select"}},g={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function j(e){var r=e,{components:t}=r,o=v(r,["components"]);return(0,n.yg)(O,u(y(y({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"save"}),"save"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"save")," operator saves bytes to a ",(0,n.yg)("a",y({parentName:"p"},{href:"/connectors"}),"connector"),"."),(0,n.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"save <uri>\nsave <path>\nsave <connector>\n")),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"save")," operator operates on raw bytes."),(0,n.yg)("p",null,"Notably, it cannot be used after an operator that emits events, but rather only\nwith operators that emit bytes, e.g., ",(0,n.yg)("a",y({parentName:"p"},{href:"/operators/write"}),(0,n.yg)("inlineCode",{parentName:"a"},"write"))," or ",(0,n.yg)("a",y({parentName:"p"},{href:"/operators/load"}),(0,n.yg)("inlineCode",{parentName:"a"},"load")),"."),(0,n.yg)("h3",y({},{id:"connector"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.yg)("p",null,"The ",(0,n.yg)("a",y({parentName:"p"},{href:"/connectors"}),"connector")," used to save bytes."),(0,n.yg)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Write bytes to stdout:"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"save stdin\n")),(0,n.yg)("p",null,"Write bytes to the file ",(0,n.yg)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"save path/to/eve.json\nsave file path/to/eve.json\n")))}j.isMDXComponent=!0}}]);