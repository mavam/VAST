"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={},v="parquet",y={unversionedId:"formats/parquet",id:"version-Tenzir v4.1/formats/parquet",title:"parquet",description:"Reads events from a Parquet file. Writes events to a Parquet file.",source:"@site/versioned_docs/version-Tenzir v4.1/formats/parquet.md",sourceDirName:"formats",slug:"/formats/parquet",permalink:"/Tenzir v4.1/formats/parquet",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.1/formats/parquet.md",tags:[],version:"Tenzir v4.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"netflow",permalink:"/Tenzir v4.1/formats/netflow"},next:{title:"pcap",permalink:"/Tenzir v4.1/formats/pcap"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],k={toc:b},O="wrapper";function g(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,f(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"parquet"}),"parquet"),(0,n.kt)("p",null,"Reads events from a Parquet file. Writes events to a ",(0,n.kt)("a",u({parentName:"p"},{href:"https://parquet.apache.org/"}),"Parquet")," file."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"parquet\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parquet")," format provides both a parser and a printer for Parquet files."),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://parquet.apache.org/"}),"Apache Parquet")," is a columnar storage format that a variety of data\ntools support."),(0,n.kt)("admonition",u({},{title:"MMAP Parsing",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"When using the parser with the ",(0,n.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.1/connectors/file"}),(0,n.kt)("inlineCode",{parentName:"a"},"file"))," connector, we\nrecommend passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"--mmap")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," to give the parser full control\nover the reads, which leads to better performance and memory usage.")),(0,n.kt)("p",null,"Tenzir writes Parquet files with Zstd compression enables. Our blog has a ",(0,n.kt)("a",u({parentName:"p"},{href:"../../../../blog/parquet-and-feather-writing-security-telemetry/"}),"post\nwith an in-depth analysis")," about the effect of Zstd\ncompression."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a Parquet file via the ",(0,n.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.1/operators/sources/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file --mmap /tmp/data.prq read parquet\n")),(0,n.kt)("admonition",u({},{title:"Limitation",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parquet")," parser currently supports only Parquet files written with Tenzir.\nWe will remove this limitation in the future.")))}g.isMDXComponent=!0}}]);