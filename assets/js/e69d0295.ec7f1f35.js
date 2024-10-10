"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76145],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=y(n),g=r,d=i["".concat(l,".").concat(g)]||i[g]||m[g]||p;return n?t.createElement(d,s(s({ref:a},c),{},{components:n})):t.createElement(d,s({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38965:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>E,default:()=>D,frontMatter:()=>d,metadata:()=>N,toc:()=>u});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},m=(e,a)=>p(e,s(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={sidebar_custom_props:{format:{parser:!0}}},E="leef",N={unversionedId:"formats/leef",id:"version-v4.19/formats/leef",title:"leef",description:"Parses events in the Log Event Extended Format (LEEF).",source:"@site/versioned_docs/version-v4.19/formats/leef.md",sourceDirName:"formats",slug:"/formats/leef",permalink:"/v4.19/formats/leef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/formats/leef.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"kv",permalink:"/v4.19/formats/kv"},next:{title:"lines",permalink:"/v4.19/formats/lines"}},f={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],F={toc:u},v="wrapper";function D(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(v,m(i(i({},F),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"leef"}),"leef"),(0,t.yg)("p",null,"Parses events in the Log Event Extended Format (LEEF)."),(0,t.yg)("h2",i({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"leef\n")),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",i({parentName:"p"},{href:"https://www.ibm.com/docs/en/dsm?topic=overview-leef-event-components"}),"Log Event Extended Format (LEEF)")," is an event representation\npopularized by IBM QRadar. Many tools send LEEF over ",(0,t.yg)("a",i({parentName:"p"},{href:"/v4.19/formats/syslog"}),"Syslog"),"."),(0,t.yg)("p",null,"LEEF is a line-based format and every line begins with a ",(0,t.yg)("em",{parentName:"p"},"header")," that is\nfollowed by ",(0,t.yg)("em",{parentName:"p"},"attributes")," in the form of key-value pairs."),(0,t.yg)("p",null,"LEEF v1.0 defines 5 header fields and LEEF v2.0 has an additional field to\ncustomize the key-value pair separator, which can be a single character or the\nhex value prefixed by ",(0,t.yg)("inlineCode",{parentName:"p"},"0x")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"x"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"LEEF:1.0|Vendor|Product|Version|EventID|\nLEEF:2.0|Vendor|Product|Version|EventID|DelimiterCharacter|\n")),(0,t.yg)("p",null,"For LEEF v1.0, the tab (",(0,t.yg)("inlineCode",{parentName:"p"},"\\t"),") character is hard-coded as attribute separator."),(0,t.yg)("p",null,"Here are some real-world LEEF events:"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"LEEF:1.0|Microsoft|MSExchange|2016|15345|src=10.50.1.1  dst=2.10.20.20  spt=1200\nLEEF:2.0|Lancope|StealthWatch|1.0|41|^|src=10.0.1.8^dst=10.0.0.5^sev=5^srcPort=81^dstPort=21\n")),(0,t.yg)("p",null,"Tenzir translates the event attributes into a nested record, where the key-value\npairs map to record fields. Here is an example of the parsed events from above:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "leef_version"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.0"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "vendor"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Microsoft"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_name"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"MSExchange"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_version"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2016"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "attributes"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "src"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10.50.1.1"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "dst"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2.10.20.20"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "spt"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1200"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "leef_version"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2.0"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "vendor"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Lancope"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_name"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"StealthWatch"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_version"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.0"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "attributes"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "src"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10.0.1.8"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "dst"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10.0.0.5"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "sev"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"5"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "srcPort"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"81"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "dstPort"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"21")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read LEEF over a Syslog via UDP:"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"from udp://0.0.0.0:514 read syslog\n| parse content leef\n| import\n")))}D.isMDXComponent=!0}}]);