"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36013],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(y,p(p({ref:r},c),{},{components:t})):n.createElement(y,p({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83301:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>g,default:()=>j,frontMatter:()=>y,metadata:()=>m,toc:()=>b});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>a(e,p(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{operator:{transformation:!0}}},g="parse",m={unversionedId:"operators/parse",id:"version-v4.26/operators/parse",title:"parse",description:"Applies a parser to the string stored in a given field.",source:"@site/versioned_docs/version-v4.26/operators/parse.md",sourceDirName:"operators",slug:"/operators/parse",permalink:"/v4.26/operators/parse",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/operators/parse.md",tags:[],version:"v4.26",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"lookup",permalink:"/v4.26/operators/lookup"},next:{title:"print",permalink:"/v4.26/operators/print"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;input&gt;</code>",id:"input",level:3},{value:"<code>&lt;parser&gt; [&lt;args...&gt;]</code>",id:"parser-args",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function j(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.yg)(O,d(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"parse"}),"parse"),(0,n.yg)("p",null,"Applies a parser to the string stored in a given field."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"parse <input> <parser> [<args...>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"parse")," operator parses a given ",(0,n.yg)("inlineCode",{parentName:"p"},"<input>")," field using ",(0,n.yg)("inlineCode",{parentName:"p"},"<parser>")," and\nreplaces this field with the result."),(0,n.yg)("h3",u({},{id:"input"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<input>")),(0,n.yg)("p",null,"Specifies the field of interest. The field must be of type ",(0,n.yg)("inlineCode",{parentName:"p"},"string"),"."),(0,n.yg)("h3",u({},{id:"parser-args"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<parser> [<args...>]")),(0,n.yg)("p",null,"Specifies the parser format and the corresponding arguments specific to each\nparser. ",(0,n.yg)("inlineCode",{parentName:"p"},"<parser>")," can be one of the parsers in ",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.26/formats"}),"formats"),"."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Parse ",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.26/formats/cef"}),"CEF")," from the Syslog messages stored in ",(0,n.yg)("inlineCode",{parentName:"p"},"test.log"),",\nreturning only the result from CEF parser."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"from test.log read syslog | parse content cef | yield content\n")))}j.isMDXComponent=!0}}]);