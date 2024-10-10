"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76924],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var r=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),y=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},c=function(e){var a=y(e.components);return r.createElement(l.Provider,{value:a},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=y(n),g=t,d=m["".concat(l,".").concat(g)]||m[g]||i[g]||s;return n?r.createElement(d,p(p({ref:a},c),{},{components:n})):r.createElement(d,p({ref:a},c))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,p=new Array(s);p[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:t,p[1]=o;for(var y=2;y<s;y++)p[y]=n[y];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97924:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>E,default:()=>h,frontMatter:()=>d,metadata:()=>N,toc:()=>u});var r=n(15680),t=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},i=(e,a)=>s(e,p(a)),g=(e,a)=>{var n={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))a.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r]);return n};const d={sidebar_custom_props:{format:{parser:!0}}},E="leef",N={unversionedId:"formats/leef",id:"version-v4.21/formats/leef",title:"leef",description:"Parses events in the Log Event Extended Format (LEEF).",source:"@site/versioned_docs/version-v4.21/formats/leef.md",sourceDirName:"formats",slug:"/formats/leef",permalink:"/formats/leef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/formats/leef.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"kv",permalink:"/formats/kv"},next:{title:"lines",permalink:"/formats/lines"}},f={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"Examples",id:"examples",level:2}],F={toc:u},v="wrapper";function h(e){var a=e,{components:n}=a,t=g(a,["components"]);return(0,r.yg)(v,i(m(m({},F),t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",m({},{id:"leef"}),"leef"),(0,r.yg)("p",null,"Parses events in the Log Event Extended Format (LEEF)."),(0,r.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("p",null,"Parser:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"leef [--merge] [--schema <schema>] [--selector <fieldname[:prefix]>]\n     [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,r.yg)("h2",m({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",m({parentName:"p"},{href:"https://www.ibm.com/docs/en/dsm?topic=overview-leef-event-components"}),"Log Event Extended Format (LEEF)")," is an event representation\npopularized by IBM QRadar. Many tools send LEEF over ",(0,r.yg)("a",m({parentName:"p"},{href:"/formats/syslog"}),"Syslog"),"."),(0,r.yg)("p",null,"LEEF is a line-based format and every line begins with a ",(0,r.yg)("em",{parentName:"p"},"header")," that is\nfollowed by ",(0,r.yg)("em",{parentName:"p"},"attributes")," in the form of key-value pairs."),(0,r.yg)("p",null,"LEEF v1.0 defines 5 header fields and LEEF v2.0 has an additional field to\ncustomize the key-value pair separator, which can be a single character or the\nhex value prefixed by ",(0,r.yg)("inlineCode",{parentName:"p"},"0x")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"x"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"LEEF:1.0|Vendor|Product|Version|EventID|\nLEEF:2.0|Vendor|Product|Version|EventID|DelimiterCharacter|\n")),(0,r.yg)("p",null,"For LEEF v1.0, the tab (",(0,r.yg)("inlineCode",{parentName:"p"},"\\t"),") character is hard-coded as attribute separator."),(0,r.yg)("p",null,"Here are some real-world LEEF events:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"LEEF:1.0|Microsoft|MSExchange|2016|15345|src=10.50.1.1  dst=2.10.20.20  spt=1200\nLEEF:2.0|Lancope|StealthWatch|1.0|41|^|src=10.0.1.8^dst=10.0.0.5^sev=5^srcPort=81^dstPort=21\n")),(0,r.yg)("p",null,"Tenzir translates the event attributes into a nested record, where the key-value\npairs map to record fields. Here is an example of the parsed events from above:"),(0,r.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,r.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "leef_version"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.0"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "vendor"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Microsoft"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_name"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"MSExchange"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_version"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2016"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "attributes"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "src"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10.50.1.1"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "dst"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2.10.20.20"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "spt"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1200"),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "leef_version"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2.0"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "vendor"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Lancope"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_name"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"StealthWatch"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "product_version"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.0"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "attributes"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "src"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10.0.1.8"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "dst"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10.0.0.5"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "sev"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"5"),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "srcPort"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"81"),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "dstPort"'),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"21")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,r.yg)("span",m({parentName:"code"},{"data-line":""}),(0,r.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,r.yg)("h3",m({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,r.yg)("p",null,"The LEEF parser supports the common ",(0,r.yg)("a",m({parentName:"p"},{href:"/formats#parser-schema-inference"}),"schema inference options"),"."),(0,r.yg)("h2",m({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Read LEEF over a Syslog via UDP:"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"from udp://0.0.0.0:514 read syslog\n| parse content leef\n| import\n")))}h.isMDXComponent=!0}}]);