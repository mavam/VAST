"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72474],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?o.createElement(m,i(i({ref:r},c),{},{components:t})):o.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14267:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>k});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var o in e)s.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&p)for(var o of p(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t};const m={},y="load",v={unversionedId:"operators/sources/load",id:"version-Tenzir v4.0-rc8/operators/sources/load",title:"load",description:"The load operator acquires raw bytes from a connector.",source:"@site/versioned_docs/version-Tenzir v4.0-rc8/operators/sources/load.md",sourceDirName:"operators/sources",slug:"/operators/sources/load",permalink:"/operators/sources/load",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc8/operators/sources/load.md",tags:[],version:"Tenzir v4.0-rc8",frontMatter:{},sidebar:"docsSidebar",previous:{title:"from",permalink:"/operators/sources/from"},next:{title:"read",permalink:"/operators/sources/read"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],h={toc:k},O="wrapper";function g(e){var r=e,{components:t}=r,n=f(r,["components"]);return(0,o.kt)(O,u(d(d({},h),n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",d({},{id:"load"}),"load"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," operator acquires raw bytes from a ",(0,o.kt)("a",d({parentName:"p"},{href:"/connectors"}),"connector"),"."),(0,o.kt)("admonition",d({},{title:"Expert Operator",type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," operator is a lower-level building block of the ",(0,o.kt)("a",d({parentName:"p"},{href:"/operators/sources/from"}),(0,o.kt)("inlineCode",{parentName:"a"},"from"))," and\n",(0,o.kt)("a",d({parentName:"p"},{href:"/operators/sources/read"}),(0,o.kt)("inlineCode",{parentName:"a"},"read"))," operators. Only use this if you need to operate on raw bytes.")),(0,o.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load <connector>\n")),(0,o.kt)("h2",d({},{id:"description"}),"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," operator emits raw bytes."),(0,o.kt)("p",null,"Notably, it cannot be used together with operators that expect events as input,\nbut rather only with operators that expect bytes, e.g.,\n",(0,o.kt)("a",d({parentName:"p"},{href:"/operators/transformations/parse"}),(0,o.kt)("inlineCode",{parentName:"a"},"parse"))," or ",(0,o.kt)("a",d({parentName:"p"},{href:"/operators/sinks/save"}),(0,o.kt)("inlineCode",{parentName:"a"},"save")),"."),(0,o.kt)("h3",d({},{id:"connector"}),(0,o.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",d({parentName:"p"},{href:"/connectors"}),"connector")," used to load bytes."),(0,o.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,o.kt)("h2",d({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,"Read bytes from stdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load stdin\n")),(0,o.kt)("p",null,"Read bytes from the file ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"from file path/to/eve.json\n")))}g.isMDXComponent=!0}}]);