"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29608],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var o=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),l=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=t,y=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return n?o.createElement(y,i(i({ref:r},c),{},{components:n})):o.createElement(y,i({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[m]="string"==typeof e?e:t,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54794:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>j,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var o=n(15680),t=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&c(e,n,r[n]);if(p)for(var n of p(r))l.call(r,n)&&c(e,n,r[n]);return e},d=(e,r)=>a(e,i(r)),f=(e,r)=>{var n={};for(var o in e)s.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&p)for(var o of p(e))r.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n};const y={sidebar_custom_props:{operator:{source:!0}}},u="from",g={unversionedId:"operators/from",id:"version-v4.24/operators/from",title:"from",description:"Produces events by combining a connector and a format.",source:"@site/versioned_docs/version-v4.24/operators/from.md",sourceDirName:"operators",slug:"/operators/from",permalink:"/v4.24/operators/from",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/from.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"fluent-bit",permalink:"/v4.24/operators/fluent-bit"},next:{title:"hash",permalink:"/v4.24/operators/hash"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function j(e){var r=e,{components:n}=r,t=f(r,["components"]);return(0,o.yg)(N,d(m(m({},b),t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",m({},{id:"from"}),"from"),(0,o.yg)("p",null,"Produces events by combining a ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/connectors"}),"connector")," and a ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/formats"}),"format"),"."),(0,o.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,o.yg)("pre",null,(0,o.yg)("code",m({parentName:"pre"},{}),"from <url> [read <format>]\nfrom <path> [read <format>]\nfrom <connector> [read <format>]\n")),(0,o.yg)("h2",m({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"from")," operator produces events at the beginning of a pipeline by bringing\ntogether a ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/connectors"}),"connector")," and a ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/formats"}),"format"),"."),(0,o.yg)("p",null,"If given something that looks like a path to a file, the connector can pick\nout a format automatically based on the file extension or the file name.\nThis enables a shorter syntax, e.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"from https://example.com/file.yml"),"\nuses the ",(0,o.yg)("inlineCode",{parentName:"p"},"yaml")," format. All connectors also have a default format,\nwhich will be used if the format can't be determined by the path.\nFor most connectors, this default format is ",(0,o.yg)("inlineCode",{parentName:"p"},"json"),". So, for example,\n",(0,o.yg)("inlineCode",{parentName:"p"},"from stdin")," uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"json")," format."),(0,o.yg)("p",null,"Additionally, if a file extension indicating compression can be found,\n",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/operators/decompress"}),(0,o.yg)("inlineCode",{parentName:"a"},"decompress"))," is automatically used.\nFor example, ",(0,o.yg)("inlineCode",{parentName:"p"},"from myfile.json.gz")," is automatically gzip-decompressed\nand parsed as json, i.e., ",(0,o.yg)("inlineCode",{parentName:"p"},"load myfile.json.gz | decompress gzip | read json"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"from")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,o.yg)("inlineCode",{parentName:"p"},"load <connector> | read <format>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a lot more complex. We\nrecommend always using ",(0,o.yg)("inlineCode",{parentName:"p"},"from ... read ...")," over the ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/operators/load"}),(0,o.yg)("inlineCode",{parentName:"a"},"load"))," and\n",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/operators/read"}),(0,o.yg)("inlineCode",{parentName:"a"},"read"))," operators."),(0,o.yg)("h3",m({},{id:"connector"}),(0,o.yg)("inlineCode",{parentName:"h3"},"<connector>")),(0,o.yg)("p",null,"The ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/connectors"}),"connector")," used to load bytes."),(0,o.yg)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,o.yg)("h3",m({},{id:"format"}),(0,o.yg)("inlineCode",{parentName:"h3"},"<format>")),(0,o.yg)("p",null,"The ",(0,o.yg)("a",m({parentName:"p"},{href:"/v4.24/formats"}),"format")," used to parse events from the loaded bytes."),(0,o.yg)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,o.yg)("h2",m({},{id:"examples"}),"Examples"),(0,o.yg)("p",null,"Read bytes from stdin and parse them as JSON."),(0,o.yg)("pre",null,(0,o.yg)("code",m({parentName:"pre"},{}),"from stdin read json\nfrom file stdin read json\nfrom file - read json\nfrom - read json\n")),(0,o.yg)("p",null,"Read bytes from the file ",(0,o.yg)("inlineCode",{parentName:"p"},"path/to/eve.json")," and parse them as Suricata.\nNote that the ",(0,o.yg)("inlineCode",{parentName:"p"},"file")," connector automatically assigns the Suricata parser for\n",(0,o.yg)("inlineCode",{parentName:"p"},"eve.json")," files when no other parser is specified.\nAlso, when directly passed a filesystem path, the ",(0,o.yg)("inlineCode",{parentName:"p"},"file")," connector is automatically used."),(0,o.yg)("pre",null,(0,o.yg)("code",m({parentName:"pre"},{}),"from path/to/eve.json\nfrom file path/to/eve.json\nfrom file path/to/eve.json read suricata\n")),(0,o.yg)("p",null,"Read bytes from the URL ",(0,o.yg)("inlineCode",{parentName:"p"},"https://example.com/data.json")," over HTTPS and parse them as JSON.\nNote that when ",(0,o.yg)("inlineCode",{parentName:"p"},"from")," is passed a URL directly, the ",(0,o.yg)("inlineCode",{parentName:"p"},"https")," connector is automatically used."),(0,o.yg)("pre",null,(0,o.yg)("code",m({parentName:"pre"},{}),"from https://example.com/data.json read json\nfrom https example.com/data.json read json\n")))}j.isMDXComponent=!0}}]);