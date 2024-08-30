"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40704],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7412:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var n=t(15680),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))s.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>o(e,a(r)),y=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{source:!0}}},f="api",g={unversionedId:"operators/api",id:"version-v4.20/operators/api",title:"api",description:"Use Tenzir's REST API directly from a pipeline.",source:"@site/versioned_docs/version-v4.20/operators/api.md",sourceDirName:"operators",slug:"/operators/api",permalink:"/operators/api",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/api.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"Operators",permalink:"/operators"},next:{title:"apply",permalink:"/operators/apply"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>[&lt;request-body&gt;]</code>",id:"request-body",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function w(e){var r=e,{components:t}=r,i=y(r,["components"]);return(0,n.yg)(h,d(u(u({},O),i),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"api"}),"api"),(0,n.yg)("p",null,"Use Tenzir's REST API directly from a pipeline."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"api <endpoint> [<request-body>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"api")," operator interacts with Tenzir's REST API without needing to spin up a\nweb server, making all APIs accessible from within pipelines."),(0,n.yg)("admonition",u({},{title:"OpenAPI",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"Visit ",(0,n.yg)("a",u({parentName:"p"},{href:"/api"}),"Tenzir's REST API specification")," to see a list of all available\nendpoints.")),(0,n.yg)("h3",u({},{id:"endpoint"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,n.yg)("p",null,"The endpoint to request, e.g., ",(0,n.yg)("inlineCode",{parentName:"p"},"/pipeline/list")," to list all pipelines created\nthrough the ",(0,n.yg)("inlineCode",{parentName:"p"},"/pipeline/create")," endpoint."),(0,n.yg)("h3",u({},{id:"request-body"}),(0,n.yg)("inlineCode",{parentName:"h3"},"[<request-body>]")),(0,n.yg)("p",null,"A single string containing the JSON request body to send with the request."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"List all running pipelines:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"api /pipeline/list\n")),(0,n.yg)("p",null,"Create a new pipeline and start it immediately."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),'api /pipeline/create \'{"name": "Suricata Import", "definition": "from file /tmp/eve.sock read suricata", "autostart": {"created": true}}\'\n')))}w.isMDXComponent=!0}}]);