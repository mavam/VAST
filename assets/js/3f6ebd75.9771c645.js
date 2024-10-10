"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25517],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const f={sidebar_custom_props:{format:{parser:!0,printer:!0}}},y="bitz",g={unversionedId:"formats/bitz",id:"version-v4.21/formats/bitz",title:"bitz",description:"Reads and writes BITZ, Tenzir's internal wire format.",source:"@site/versioned_docs/version-v4.21/formats/bitz.md",sourceDirName:"formats",slug:"/formats/bitz",permalink:"/formats/bitz",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/formats/bitz.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"Formats",permalink:"/formats"},next:{title:"cef",permalink:"/formats/cef"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],v={toc:h},w="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.yg)(w,u(c(c({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"bitz"}),"bitz"),(0,a.yg)("p",null,"Reads and writes BITZ, Tenzir's internal wire format."),(0,a.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",c({parentName:"pre"},{}),"bitz\n")),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"bitz")," format provides a parser and printer for Tenzir's internal wire\nformat. It enables lossless transfer of events between Tenzir nodes through any\nconnector."),(0,a.yg)("p",null,"Use BITZ when you need high-throughput structured data exchange with minimal\noverhead. BITZ is a thin wrapper around Arrow's record batches. That is, BITZ\nlays out data in a (compressed) columnar fashion that makes it conducive for\nanalytical workloads. Since it's padded and byte-aligned, it is portable and\ndoesn't induce any deserialization cost, making it suitable for\nwrite-once-read-many use cases."),(0,a.yg)("p",null,"Internally, BITZ uses Arrow's IPC format for serialization and deserialization,\nbut prefixes each message with a 64 bit size prefix to support changing schemas\nbetween batches\u2014something that Arrow's IPC format does not support on its own."),(0,a.yg)("admonition",c({},{title:"Did you know?",type:"info"}),(0,a.yg)("p",{parentName:"admonition"},"BITZ is short for ",(0,a.yg)("strong",{parentName:"p"},"bi"),"nary ",(0,a.yg)("strong",{parentName:"p"},"T"),"en",(0,a.yg)("strong",{parentName:"p"},"z"),"ir, and a play on the word bits.")),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Transfer events between two pipelines using ",(0,a.yg)("inlineCode",{parentName:"p"},"zmq"),"."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"Send BITZ over ZeroMQ"),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"export")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"| to zmq://localhost:5670 write bitz"))))),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"Receive BITZ from ZeroMQ"),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"from zmq://localhost:5670 read bitz")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"| import"))))))}O.isMDXComponent=!0}}]);