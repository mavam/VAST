"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29114],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>b});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,b=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return t?n.createElement(b,a(a({ref:r},c),{},{components:t})):n.createElement(b,a({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59287:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>b,metadata:()=>m,toc:()=>h});var n=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},y=(e,r)=>i(e,a(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const b={sidebar_custom_props:{operator:{sink:!0}}},f="publish",m={unversionedId:"operators/publish",id:"version-v4.19/operators/publish",title:"publish",description:"Publishes events to a channel with a topic. The dual to",source:"@site/versioned_docs/version-v4.19/operators/publish.md",sourceDirName:"operators",slug:"/operators/publish",permalink:"/v4.19/operators/publish",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/publish.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"pseudonymize",permalink:"/v4.19/operators/pseudonymize"},next:{title:"put",permalink:"/v4.19/operators/put"}},v={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;topic&gt;</code>",id:"topic",level:3},{value:"Examples",id:"examples",level:2}],g={toc:h},O="wrapper";function w(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.yg)(O,y(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"publish"}),"publish"),(0,n.yg)("p",null,"Publishes events to a channel with a topic. The dual to\n",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.19/operators/subscribe"}),(0,n.yg)("inlineCode",{parentName:"a"},"subscribe")),"."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"publish [<topic>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"publish")," operator publishes events at a node in a channel with the\nspecified topic. Any number of subscribers using the ",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.19/operators/subscribe"}),(0,n.yg)("inlineCode",{parentName:"a"},"subscribe")),"\noperator receive the events immediately."),(0,n.yg)("p",null,"Note that the ",(0,n.yg)("inlineCode",{parentName:"p"},"publish")," operator does not guarantee that events stay in their\noriginal order."),(0,n.yg)("h3",u({},{id:"topic"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<topic>")),(0,n.yg)("p",null,"An optional topic for publishing events under."),(0,n.yg)("p",null,"Defaults to the empty string."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Publish Zeek conn logs under the topic ",(0,n.yg)("inlineCode",{parentName:"p"},"zeek-conn"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"from file conn.log read zeek-tsv | publish zeek-conn\n")))}w.isMDXComponent=!0}}]);