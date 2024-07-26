"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,l(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},h="show",k={unversionedId:"operators/show",id:"version-v4.18/operators/show",title:"show",description:"Returns information about a Tenzir node.",source:"@site/versioned_docs/version-v4.18/operators/show.md",sourceDirName:"operators",slug:"/operators/show",permalink:"/v4.18/operators/show",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/operators/show.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"shell",permalink:"/v4.18/operators/shell"},next:{title:"sigma",permalink:"/v4.18/operators/sigma"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;aspect&gt;</code>",id:"aspect",level:3},{value:"Examples",id:"examples",level:2}],w={toc:b},y="wrapper";function N(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(y,m(u(u({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"show"}),"show"),(0,n.kt)("p",null,"Returns information about a Tenzir node."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"show [<aspect>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"show")," operator offers introspection capabilities to look at various\n",(0,n.kt)("em",{parentName:"p"},"aspects")," of a Tenzir node."),(0,n.kt)("h3",u({},{id:"aspect"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<aspect>")),(0,n.kt)("p",null,"Describes the part of Tenzir to look at."),(0,n.kt)("p",null,"Available aspects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"config"),": shows all current configuration options."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connectors"),": shows all available ",(0,n.kt)("a",u({parentName:"li"},{href:"/v4.18/connectors"}),"connectors"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"contexts"),": shows all available contexts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"formats"),": shows all available ",(0,n.kt)("a",u({parentName:"li"},{href:"/v4.18/formats"}),"formats"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"operators"),": shows all available ",(0,n.kt)("a",u({parentName:"li"},{href:"/v4.18/operators"}),"operators"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pipelines"),": shows all managed pipelines of a remote node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"plugins"),": shows all loaded plugins.")),(0,n.kt)("p",null,"We also offer some additional aspects for experts that want to take a deeper\nlook at what's going on:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"build"),": shows compile-time build information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dependencies"),": shows information about build-time dependencies."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fields"),": shows all fields of existing tables at a remote node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"schemas")," shows all schema definitions for which data is stored at the node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"serves")," shows all pipelines with the ",(0,n.kt)("inlineCode",{parentName:"li"},"serve")," sink operator currently\navailable from the ",(0,n.kt)("inlineCode",{parentName:"li"},"/serve")," API endpoint.")),(0,n.kt)("p",null,"When no aspect is specified, all are shown."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Show all available connectors and formats:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"show connectors\nshow formats\n")),(0,n.kt)("p",null,"Show all transformations:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"show operators | where transformation == true\n")),(0,n.kt)("p",null,"Show all fields at a node:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"show fields\n")),(0,n.kt)("p",null,"Show all aspects of a node:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"show\n")))}N.isMDXComponent=!0}}]);