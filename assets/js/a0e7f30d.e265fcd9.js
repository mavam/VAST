"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46227],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,u=f["".concat(p,".").concat(d)]||f[d]||m[d]||a;return t?n.createElement(u,i(i({ref:r},c),{},{components:t})):n.createElement(u,i({ref:r},c))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82462:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>k});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&c(e,t,r[t]);return e},m=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const u={},v="from",h={unversionedId:"operators/sources/from",id:"version-Tenzir v4.1/operators/sources/from",title:"from",description:"Produces events by combining a connector and a format.",source:"@site/versioned_docs/version-Tenzir v4.1/operators/sources/from.md",sourceDirName:"operators/sources",slug:"/operators/sources/from",permalink:"/Tenzir v4.1/operators/sources/from",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.1/operators/sources/from.md",tags:[],version:"Tenzir v4.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"export",permalink:"/Tenzir v4.1/operators/sources/export"},next:{title:"load",permalink:"/Tenzir v4.1/operators/sources/load"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},O="wrapper";function g(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(O,m(f(f({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"from"}),"from"),(0,n.kt)("p",null,"Produces events by combining a ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/connectors"}),"connector")," and a ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/formats"}),"format"),"."),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from <connector> [read <format>]\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator produces events at the beginning of a pipeline by bringing\ntogether a ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/connectors"}),"connector")," and a ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/formats"}),"format"),"."),(0,n.kt)("p",null,"All connectors have a default format. This enables a shorter syntax, e.g.,\n",(0,n.kt)("inlineCode",{parentName:"p"},"from stdin")," uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," format, while ",(0,n.kt)("inlineCode",{parentName:"p"},"from file foo.csv")," uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"csv"),"\nformat."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,n.kt)("inlineCode",{parentName:"p"},"load <connector> | read <format>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a lot more complex. We\nrecommend always using ",(0,n.kt)("inlineCode",{parentName:"p"},"from ... read ...")," over the ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/operators/sources/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load"))," and\n",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/operators/transformations/read"}),(0,n.kt)("inlineCode",{parentName:"a"},"read"))," operators."),(0,n.kt)("h3",f({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/connectors"}),"connector")," used to load bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h3",f({},{id:"format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.1/formats"}),"format")," used to parse events from the loaded bytes."),(0,n.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,n.kt)("h2",f({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read bytes from stdin and parse them as JSON."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from stdin read json\nfrom file stdin read json\nfrom file - read json\nfrom - read json\n")),(0,n.kt)("p",null,"Read bytes from the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json")," and parse them as Suricata.\nNote that the ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," connector automatically assigns the Suricata parser for\n",(0,n.kt)("inlineCode",{parentName:"p"},"eve.json")," files when no other parser is specified."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from file path/to/eve.json\nfrom file path/to/eve.json read suricata\n")))}g.isMDXComponent=!0}}]);