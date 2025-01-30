"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34257],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,y=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59220:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{format:{parser:!0,printer:!0}}},u="feather",g={unversionedId:"formats/feather",id:"version-v4.26/formats/feather",title:"feather",description:"Reads and writes the Feather file format, a thin wrapper around",source:"@site/versioned_docs/version-v4.26/formats/feather.md",sourceDirName:"formats",slug:"/formats/feather",permalink:"/v4.26/formats/feather",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/formats/feather.md",tags:[],version:"v4.26",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"csv",permalink:"/v4.26/formats/csv"},next:{title:"gelf",permalink:"/v4.26/formats/gelf"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--compression-type</code> (Printer)",id:"--compression-type-printer",level:3},{value:"<code>--compression-level</code> (Printer)",id:"--compression-level-printer",level:3},{value:"<code>--min-space-savings</code> (Printer)",id:"--min-space-savings-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.yg)(O,d(m(m({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",m({},{id:"feather"}),"feather"),(0,n.yg)("p",null,"Reads and writes the ",(0,n.yg)("a",m({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather")," file format, a thin wrapper around\n",(0,n.yg)("a",m({parentName:"p"},{href:"https://arrow.apache.org/docs/python/ipc.html"}),"Apache Arrow's IPC")," wire format."),(0,n.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("p",null,"Parser:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"feather\n")),(0,n.yg)("p",null,"Printer:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"feather [\u2014compression-type=<type>] [\u2014compression-level=<level] [\u2014min\u2014space-savings=<rate>]\n")),(0,n.yg)("h2",m({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"feather")," format provides both a parser and a printer for Feather files and\nApache Arrow IPC streams.  "),(0,n.yg)("admonition",m({},{title:"Limitation",type:"warning"}),(0,n.yg)("p",{parentName:"admonition"},"Tenzir currently assumes that all Feather files and Arrow IPC streams use\nmetadata recognized by Tenzir. We plan to lift this restriction in the future.")),(0,n.yg)("h3",m({},{id:"--compression-type-printer"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--compression-type")," (Printer)"),(0,n.yg)("p",null,"Specifies an optional compression type. Supported options are ",(0,n.yg)("inlineCode",{parentName:"p"},"zstd")," for\n",(0,n.yg)("a",m({parentName:"p"},{href:"http://facebook.github.io/zstd/"}),"Zstandard")," compression and ",(0,n.yg)("inlineCode",{parentName:"p"},"lz4")," for ",(0,n.yg)("a",m({parentName:"p"},{href:"https://android.googlesource.com/platform/external/lz4/+/HEAD/doc/lz4_Frame_format.md"}),"LZ4 Frame"),"\ncompression."),(0,n.yg)("admonition",m({},{type:"info"}),(0,n.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"Why would I use this over the ",(0,n.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"compress")," operator?"),(0,n.yg)("p",{parentName:"admonition"},"The Feather format offers more efficient compression compared to the\n",(0,n.yg)("inlineCode",{parentName:"p"},"compress")," operator. This is because it compresses\nthe data column-by-column, leaving metadata that needs to be accessed frequently\nuncompressed.")),(0,n.yg)("h3",m({},{id:"--compression-level-printer"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--compression-level")," (Printer)"),(0,n.yg)("p",null,"An optional compression level for the corresponding compression type. This\noption is ignored if no compression type is specified."),(0,n.yg)("p",null,"Defaults to the compression type's default compression level."),(0,n.yg)("h3",m({},{id:"--min-space-savings-printer"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--min-space-savings")," (Printer)"),(0,n.yg)("p",null,"An optional minimum space savings percentage required for compression to be\napplied. This option is ignored if no compression is specified. The provided\nvalue must be between 0 and 1 inclusive."),(0,n.yg)("p",null,"Defaults to 0, i.e., always applying compression."),(0,n.yg)("p",null,"Space savings are calculated as ",(0,n.yg)("inlineCode",{parentName:"p"},"1.0 - compressed_size / uncompressed_size"),".\nE.g., for a minimum space savings rate of 0.1 a 100-byte body buffer will not\nbe compressed if its expected compressed size exceeds 90 bytes."),(0,n.yg)("h2",m({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Read a Feather file via the ",(0,n.yg)("inlineCode",{parentName:"p"},"from")," operator:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"from /tmp/data.feather --mmap read feather\n")),(0,n.yg)("p",null,"Write a Zstd-compressed Feather file via ",(0,n.yg)("inlineCode",{parentName:"p"},"to")," operator:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"to /tmp/suricata.feather write feather --compression-type zstd\n")))}w.isMDXComponent=!0}}]);