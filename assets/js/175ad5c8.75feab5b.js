"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92811],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,v=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>v,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const v={sidebar_custom_props:{format:{parser:!0,printer:!0}}},d="tsv",b={unversionedId:"formats/tsv",id:"version-v4.18/formats/tsv",title:"tsv",description:"The tsv format is a configuration of the xsv format:",source:"@site/versioned_docs/version-v4.18/formats/tsv.md",sourceDirName:"formats",slug:"/formats/tsv",permalink:"/v4.18/formats/tsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/formats/tsv.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"time",permalink:"/v4.18/formats/time"},next:{title:"xsv",permalink:"/v4.18/formats/xsv"}},y={},O=[],g={toc:O},k="wrapper";function h(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(k,u(f(f({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"tsv"}),"tsv"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"tsv")," format is a configuration of the ",(0,n.kt)("a",f({parentName:"p"},{href:"/v4.18/formats/xsv"}),(0,n.kt)("inlineCode",{parentName:"a"},"xsv"))," format:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Field separator: ",(0,n.kt)("inlineCode",{parentName:"li"},"\\t")),(0,n.kt)("li",{parentName:"ul"},"List separator: ",(0,n.kt)("inlineCode",{parentName:"li"},",")),(0,n.kt)("li",{parentName:"ul"},"Null value: ",(0,n.kt)("inlineCode",{parentName:"li"},"-"))))}h.isMDXComponent=!0}}]);