"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14562],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51906:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&s(e,t,r[t]);return e},d=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},y="rare",g={unversionedId:"operators/rare",id:"version-v4.19/operators/rare",title:"rare",description:"Shows the least common values. The dual to top.",source:"@site/versioned_docs/version-v4.19/operators/rare.md",sourceDirName:"operators",slug:"/operators/rare",permalink:"/operators/rare",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/rare.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"python",permalink:"/operators/python"},next:{title:"read",permalink:"/operators/read"}},v={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"<code>--count-field=&lt;count-field&gt;|-c &lt;count-field&gt;</code>",id:"--count-fieldcount-field-c-count-field",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},O="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.yg)(O,d(u(u({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"rare"}),"rare"),(0,n.yg)("p",null,"Shows the least common values. The dual to ",(0,n.yg)("a",u({parentName:"p"},{href:"/operators/top"}),(0,n.yg)("inlineCode",{parentName:"a"},"top")),"."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"rare <field> [--count-field=<count-field>|-c <count-field>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Shows the least common values for a given field. For each unique value, a new event containing its count will be produced."),(0,n.yg)("h3",u({},{id:"field"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<field>")),(0,n.yg)("p",null,"The name of the field to find the least common values for."),(0,n.yg)("h3",u({},{id:"--count-fieldcount-field-c-count-field"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--count-field=<count-field>|-c <count-field>")),(0,n.yg)("p",null,"An optional argument specifying the field name of the count field. Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"count"),"."),(0,n.yg)("p",null,"The count field and the value field must have different names."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Find the least common values for field ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_h"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"rare id.orig_h\n")),(0,n.yg)("p",null,"Find the least common values for field ",(0,n.yg)("inlineCode",{parentName:"p"},"count")," and present the value amount in a field ",(0,n.yg)("inlineCode",{parentName:"p"},"amount"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"rare count --count-field=amount\n")))}w.isMDXComponent=!0}}]);