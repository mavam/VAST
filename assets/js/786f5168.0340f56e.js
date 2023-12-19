"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10714],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?n.createElement(f,p(p({ref:r},c),{},{components:t})):n.createElement(f,p({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49689:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>k,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},m=(e,r)=>a(e,p(r)),u=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const f={sidebar_custom_props:{operator:{transformation:!0}}},y="decompress",v={unversionedId:"operators/decompress",id:"version-Tenzir v4.7/operators/decompress",title:"decompress",description:"Decompresses a stream of bytes.",source:"@site/versioned_docs/version-Tenzir v4.7/operators/decompress.md",sourceDirName:"operators",slug:"/operators/decompress",permalink:"/operators/decompress",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/operators/decompress.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"decapsulate",permalink:"/operators/decapsulate"},next:{title:"discard",permalink:"/operators/discard"}},k={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;codec&gt;</code>",id:"codec",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function g(e){var r=e,{components:t}=r,o=u(r,["components"]);return(0,n.kt)(O,m(d(d({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"decompress"}),"decompress"),(0,n.kt)("p",null,"Decompresses a stream of bytes."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"decompress <codec>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"decompress")," operator decompresses bytes in a pipeline incrementally with a\nknown codec. The operator supports decompressing multiple concatenated streams\nof the same codec transparently."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"decompress")," operator is invoked automatically as a part of ",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from")),"\nif the source file has a file extension indicating compression.\nThis behavior can be circumvented by using ",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load"))," directly."),(0,n.kt)("admonition",d({},{title:"Streaming Decompression",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The operator uses ",(0,n.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/cpp/api/utilities.html#compression"}),"Apache Arrow's compression\nutilities")," under the hood, and transparently supports\nall options that Apache Arrow supports for streaming decompression."),(0,n.kt)("p",{parentName:"admonition"},"Besides the supported ",(0,n.kt)("inlineCode",{parentName:"p"},"brotli"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bz2"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"zstd"),", Apache Arrow\nalso ships with codecs for ",(0,n.kt)("inlineCode",{parentName:"p"},"lzo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4_raw"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4_hadoop")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"snappy"),", which\nonly support oneshot decompression. Support for them is not currently implemented.")),(0,n.kt)("h3",d({},{id:"codec"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<codec>")),(0,n.kt)("p",null,"An identifier of the codec to use. Currently supported are ",(0,n.kt)("inlineCode",{parentName:"p"},"brotli"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bz2"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"zstd"),"."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Import Suricata events from a Zstd-compressed file:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from eve.json.zst\n| import\n\nload file eve.json.zst\n| decompress zstd\n| read suricata\n| import\n")),(0,n.kt)("p",null,"Convert a Zstd-compressed file into an LZ4-compressed file:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from in.zst\n| to out.lz4\n\nload file in.zst\n| decompress zstd\n| compress lz4\n| save file out.lz4\n")))}g.isMDXComponent=!0}}]);