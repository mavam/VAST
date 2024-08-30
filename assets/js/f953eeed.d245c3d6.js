"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6313],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66517:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&c(e,t,r[t]);return e},f=(e,r)=>a(e,s(r)),u=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{format:{parser:!0}}},y="leef",v={unversionedId:"formats/leef",id:"version-v4.20/formats/leef",title:"leef",description:"Parses events in the Log Event Extended Format (LEEF).",source:"@site/versioned_docs/version-v4.20/formats/leef.md",sourceDirName:"formats",slug:"/formats/leef",permalink:"/formats/leef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/formats/leef.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"kv",permalink:"/formats/kv"},next:{title:"lines",permalink:"/formats/lines"}},g={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],h={toc:b},E="wrapper";function O(e){var r=e,{components:t}=r,o=u(r,["components"]);return(0,n.yg)(E,f(d(d({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"leef"}),"leef"),(0,n.yg)("p",null,"Parses events in the Log Event Extended Format (LEEF)."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"leef\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",d({parentName:"p"},{href:"https://www.ibm.com/docs/en/dsm?topic=overview-leef-event-components"}),"Log Event Extended Format (LEEF)")," is an event representation\npopularized by IBM QRadar. Many tools send LEEF over ",(0,n.yg)("a",d({parentName:"p"},{href:"/formats/syslog"}),"Syslog"),"."),(0,n.yg)("p",null,"LEEF is a line-based format and every line begins with a ",(0,n.yg)("em",{parentName:"p"},"header")," that is\nfollowed by ",(0,n.yg)("em",{parentName:"p"},"attributes")," in the form of key-value pairs."),(0,n.yg)("p",null,"LEEF v1.0 defines 5 header fields and LEEF v2.0 has an additional field to\ncustomize the key-value pair separator, which can be a single character or the\nhex value prefixed by ",(0,n.yg)("inlineCode",{parentName:"p"},"0x")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"x"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"LEEF:1.0|Vendor|Product|Version|EventID|\nLEEF:2.0|Vendor|Product|Version|EventID|DelimiterCharacter|\n")),(0,n.yg)("p",null,"For LEEF v1.0, the tab (",(0,n.yg)("inlineCode",{parentName:"p"},"\\t"),") character is hard-coded as attribute separator."),(0,n.yg)("p",null,"Here are some real-world LEEF events:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"LEEF:1.0|Microsoft|MSExchange|2016|15345|src=10.50.1.1  dst=2.10.20.20  spt=1200\nLEEF:2.0|Lancope|StealthWatch|1.0|41|^|src=10.0.1.8^dst=10.0.0.5^sev=5^srcPort=81^dstPort=21\n")),(0,n.yg)("p",null,"Tenzir translates the event attributes into a nested record, where the key-value\npairs map to record fields. Here is an example of the parsed events from above:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "leef_version": "1.0",\n  "vendor": "Microsoft",\n  "product_name": "MSExchange",\n  "product_version": "2016",\n  "attributes": {\n    "src": "10.50.1.1",\n    "dst": "2.10.20.20",\n    "spt": 1200,\n  }\n}\n{\n  "leef_version": "2.0",\n  "vendor": "Lancope",\n  "product_name": "StealthWatch",\n  "product_version": "1.0",\n  "attributes": {\n    "src": "10.0.1.8",\n    "dst": "10.0.0.5",\n    "sev": 5,\n    "srcPort": 81,\n    "dstPort": 21\n  }\n}\n')),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Read LEEF over a Syslog via UDP:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"from udp://0.0.0.0:514 read syslog\n| parse content leef\n| import\n")))}O.isMDXComponent=!0}}]);