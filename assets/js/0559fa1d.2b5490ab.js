"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},b="gcs",v={unversionedId:"connectors/gcs",id:"version-Tenzir v4.9/connectors/gcs",title:"gcs",description:"Loads bytes from a Google Cloud Service object. Saves bytes to a Google Cloud",source:"@site/versioned_docs/version-Tenzir v4.9/connectors/gcs.md",sourceDirName:"connectors",slug:"/connectors/gcs",permalink:"/Tenzir v4.9/connectors/gcs",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/connectors/gcs.md",tags:[],version:"Tenzir v4.9",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"ftps",permalink:"/Tenzir v4.9/connectors/ftps"},next:{title:"http",permalink:"/Tenzir v4.9/connectors/http"}},y={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;object&gt;</code> (Loader, Saver)",id:"object-loader-saver",level:3},{value:"<code>--anonymous</code> (Loader, Saver)",id:"--anonymous-loader-saver",level:3},{value:"Examples",id:"examples",level:2}],k={toc:g},h="wrapper";function j(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(h,u(d(d({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"gcs"}),"gcs"),(0,r.kt)("p",null,"Loads bytes from a Google Cloud Service object. Saves bytes to a Google Cloud\nService object."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Loader:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"gcs [--anonymous] <object>\n")),(0,r.kt)("p",null,"Saver:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"gcs [--anonymous] <object>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gcs")," loader connects to a GCS bucket to acquire raw bytes from a GCS\nobject. The ",(0,r.kt)("inlineCode",{parentName:"p"},"gcs")," saver writes bytes to a GCS object in a GCS bucket."),(0,r.kt)("p",null,"The connector tries to retrieve the appropriate credentials using Google's\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://google.aip.dev/auth/4110"}),"Application Default Credentials"),"."),(0,r.kt)("h3",d({},{id:"object-loader-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<object>")," (Loader, Saver)"),(0,r.kt)("p",null,"The path to the GCS object."),(0,r.kt)("p",null,"The syntax is ",(0,r.kt)("inlineCode",{parentName:"p"},"gs://<bucket-name>/<full-path-to-object>(?<options>)"),". The\n",(0,r.kt)("inlineCode",{parentName:"p"},"<options>")," are query parameters. Per the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/r/articles/fs.html#connecting-directly-with-a-uri"}),"Arrow\ndocumentation"),", the following options exist:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For GCS, the supported parameters are ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint_override"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"retry_limit_seconds"),".")),(0,r.kt)("h3",d({},{id:"--anonymous-loader-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--anonymous")," (Loader, Saver)"),(0,r.kt)("p",null,"Ignore any predefined credentials and try to load/save with anonymous\ncredentials."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read JSON from an object ",(0,r.kt)("inlineCode",{parentName:"p"},"log.json")," in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket"),".\nNote how the ",(0,r.kt)("inlineCode",{parentName:"p"},"gcs")," loader is used automatically, when the URL scheme is ",(0,r.kt)("inlineCode",{parentName:"p"},"gs://"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from gcs gs://bucket/logs/log.json\nfrom gs://bucket/logs/log.json\n")),(0,r.kt)("p",null,"Read JSON from an object ",(0,r.kt)("inlineCode",{parentName:"p"},"test.json")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket"),", but using a different\nGCS-compatible endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from gcs gs://bucket/test.json?endpoint_override=gcs.mycloudservice.com\n")))}j.isMDXComponent=!0}}]);