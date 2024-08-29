"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54114],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92634:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var n=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))c.call(r,t)&&l(e,t,r[t]);return e},b=(e,r)=>i(e,a(r)),d=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{source:!0}}},y="subscribe",f={unversionedId:"operators/subscribe",id:"operators/subscribe",title:"subscribe",description:"Subscribes to events from a channel with a topic. The dual to",source:"@site/docs/operators/subscribe.md",sourceDirName:"operators",slug:"/operators/subscribe",permalink:"/next/operators/subscribe",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/subscribe.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"sort",permalink:"/next/operators/sort"},next:{title:"summarize",permalink:"/next/operators/summarize"}},h={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;topic&gt;</code>",id:"topic",level:3},{value:"Examples",id:"examples",level:2}],v={toc:g},O="wrapper";function w(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.yg)(O,b(u(u({},v),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"subscribe"}),"subscribe"),(0,n.yg)("p",null,"Subscribes to events from a channel with a topic. The dual to\n",(0,n.yg)("a",u({parentName:"p"},{href:"/next/operators/publish"}),(0,n.yg)("inlineCode",{parentName:"a"},"publish")),"."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"subscribe [<topic>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"subscribe")," operator subscribes to events from a channel with the specified\ntopic. Multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"subscribe")," operators with the same topic receive the same\nevents."),(0,n.yg)("p",null,"Subscribers propagate back pressure to publishers. If a subscribing pipeline\nfails to keep up, all publishers will slow down as well to a matching speed to\navoid data loss. This mechanism is disabled for pipelines that are not visible\non the overview page on ",(0,n.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),", which drop\ndata rather than slow down their publishers."),(0,n.yg)("h3",u({},{id:"topic"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<topic>")),(0,n.yg)("p",null,"An optional topic identifying the channel events are published under."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Subscribe to the events under the topic ",(0,n.yg)("inlineCode",{parentName:"p"},"zeek-conn"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"subscribe zeek-conn\n")))}w.isMDXComponent=!0}}]);