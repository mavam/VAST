"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97656],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>g,toc:()=>h});var a=r(15680),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const y={sidebar_custom_props:{format:{parser:!0,printer:!0}}},f="bitz",g={unversionedId:"formats/bitz",id:"version-v4.20/formats/bitz",title:"bitz",description:"Reads and writes BITZ, Tenzir's internal wire format.",source:"@site/versioned_docs/version-v4.20/formats/bitz.md",sourceDirName:"formats",slug:"/formats/bitz",permalink:"/v4.20/formats/bitz",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/formats/bitz.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"Formats",permalink:"/v4.20/formats"},next:{title:"cef",permalink:"/v4.20/formats/cef"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],v={toc:h},w="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.yg)(w,u(c(c({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"bitz"}),"bitz"),(0,a.yg)("p",null,"Reads and writes BITZ, Tenzir's internal wire format."),(0,a.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",c({parentName:"pre"},{}),"bitz\n")),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"bitz")," format provides a parser and printer for Tenzir's internal wire\nformat. It enables lossless transfer of events between Tenzir nodes through any\nconnector."),(0,a.yg)("p",null,"BITZ is an unstable format, i.e., it cannot safely be written to disk and be\nread again later with another Tenzir version."),(0,a.yg)("p",null,"Use BITZ when you need high-throughput structured data exchange with minimal\noverhead. BITZ is a thin wrapper around Arrow's record batches. That is, BITZ\nlays out data in a (compressed) columnar fashion that makes it conducive for\nanalytical workloads. Since it's padded and byte-aligned, it is portable and\ndoesn't induce any deserialization cost, making it suitable for\nwrite-once-read-many use cases."),(0,a.yg)("admonition",c({},{title:"Did you know?",type:"info"}),(0,a.yg)("p",{parentName:"admonition"},"BITZ is short for ",(0,a.yg)("strong",{parentName:"p"},"bi"),"nary ",(0,a.yg)("strong",{parentName:"p"},"T"),"en",(0,a.yg)("strong",{parentName:"p"},"z"),"ir, and a play on the word bits.")),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Transfer events between two pipelines using ",(0,a.yg)("inlineCode",{parentName:"p"},"zmq"),"."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"Send BITZ over ZeroMQ"),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"export")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"| to zmq://localhost:5670 write bitz"))))),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"Receive BITZ from ZeroMQ"),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"from zmq://localhost:5670 read bitz")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",{parentName:"span"},"| import"))))))}O.isMDXComponent=!0}}]);