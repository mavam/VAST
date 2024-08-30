"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36712],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,m=d["".concat(p,".").concat(u)]||d[u]||y[u]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var n=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&s(e,t,r[t]);return e},y=(e,r)=>i(e,a(r)),u=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{connector:{saver:!0}}},f="directory",v={unversionedId:"connectors/directory",id:"version-v4.19/connectors/directory",title:"directory",description:"Saves bytes to one file per schema into a directory.",source:"@site/versioned_docs/version-v4.19/connectors/directory.md",sourceDirName:"connectors",slug:"/connectors/directory",permalink:"/v4.19/connectors/directory",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/connectors/directory.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{connector:{saver:!0}}},sidebar:"docsSidebar",previous:{title:"-",permalink:"/v4.19/connectors/dash"},next:{title:"email",permalink:"/v4.19/connectors/email"}},g={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-a|--append</code>",id:"-a--append",level:3},{value:"<code>-r|--real-time</code>",id:"-r--real-time",level:3},{value:"<code>&lt;path&gt;</code>",id:"path",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},O="wrapper";function w(e){var r=e,{components:t}=r,o=u(r,["components"]);return(0,n.yg)(O,y(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"directory"}),"directory"),(0,n.yg)("p",null,"Saves bytes to one file per schema into a directory."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"directory [-a|--append] [-r|--real-time] <path>\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"directory")," saver writes one file per schema into the provided directory."),(0,n.yg)("p",null,"The default printer for the ",(0,n.yg)("inlineCode",{parentName:"p"},"directory")," saver is ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.19/formats/json"}),(0,n.yg)("inlineCode",{parentName:"a"},"json")),"."),(0,n.yg)("h3",d({},{id:"-a--append"}),(0,n.yg)("inlineCode",{parentName:"h3"},"-a|--append")),(0,n.yg)("p",null,"Append to files in ",(0,n.yg)("inlineCode",{parentName:"p"},"path")," instead of overwriting them with a new file."),(0,n.yg)("h3",d({},{id:"-r--real-time"}),(0,n.yg)("inlineCode",{parentName:"h3"},"-r|--real-time")),(0,n.yg)("p",null,"Immediately synchronize files in ",(0,n.yg)("inlineCode",{parentName:"p"},"path")," with every chunk of bytes instead of\nbuffering bytes to batch filesystem write operations."),(0,n.yg)("h3",d({},{id:"path"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<path>")),(0,n.yg)("p",null,"The path to the directory. If ",(0,n.yg)("inlineCode",{parentName:"p"},"<path>")," does not point to an existing directory,\nthe saver creates a new directory, including potential intermediate directories."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Write one JSON file per unique schema to ",(0,n.yg)("inlineCode",{parentName:"p"},"/tmp/dir"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"to directory /tmp/dir write json\n")))}w.isMDXComponent=!0}}]);