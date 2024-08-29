"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5875],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,y=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46413:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(s)for(var t of s(r))c.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),u=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{operator:{source:!0}}},m="fields",b={unversionedId:"operators/fields",id:"operators/fields",title:"fields",description:"Retrieves all fields stored at a node.",source:"@site/docs/operators/fields.md",sourceDirName:"operators",slug:"/operators/fields",permalink:"/next/operators/fields",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/fields.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"extend",permalink:"/next/operators/extend"},next:{title:"files",permalink:"/next/operators/files"}},v={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:g},h="wrapper";function w(e){var r=e,{components:t}=r,o=u(r,["components"]);return(0,n.yg)(h,f(d(d({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"fields"}),"fields"),(0,n.yg)("p",null,"Retrieves all fields stored at a node."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"fields\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"fields")," operator shows a list of all fields stored at a node across all\navailable schemas."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"See the top five fields counted by how many schemas they occur in:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"fields\n| summarize count=count_distinct(schema), schemas=distinct(schema) by field\n| sort count desc\n| head 5\n")))}w.isMDXComponent=!0}}]);