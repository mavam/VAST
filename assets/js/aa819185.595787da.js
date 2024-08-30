"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27555],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4730:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>x,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,l(r)),y=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={sidebar_custom_props:{operator:{transformation:!0}}},m="select",g={unversionedId:"operators/select",id:"version-v4.20/operators/select",title:"select",description:"Selects fields from the input.",source:"@site/versioned_docs/version-v4.20/operators/select.md",sourceDirName:"operators",slug:"/operators/select",permalink:"/operators/select",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/select.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"schemas",permalink:"/operators/schemas"},next:{title:"serve",permalink:"/operators/serve"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor&gt;...</code>",id:"extractor",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function x(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.yg)(h,u(d(d({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"select"}),"select"),(0,n.yg)("p",null,"Selects fields from the input."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"select <extractor>...\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"select")," operator keeps only the fields matching the provided extractors and\nremoves all other fields. It is the dual to ",(0,n.yg)("a",d({parentName:"p"},{href:"/operators/drop"}),(0,n.yg)("inlineCode",{parentName:"a"},"drop")),"."),(0,n.yg)("p",null,"In relational algebra, ",(0,n.yg)("inlineCode",{parentName:"p"},"select")," performs a ",(0,n.yg)("em",{parentName:"p"},"projection")," of the provided\narguments."),(0,n.yg)("h3",d({},{id:"extractor"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<extractor>...")),(0,n.yg)("p",null,"A comma-separated list of extractors that identify the fields to keep."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Only keep fields ",(0,n.yg)("inlineCode",{parentName:"p"},"foo")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"bar"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"select foo, bar\n")),(0,n.yg)("p",null,"Select all fields of type ",(0,n.yg)("inlineCode",{parentName:"p"},"ip"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"select :ip\n")))}x.isMDXComponent=!0}}]);