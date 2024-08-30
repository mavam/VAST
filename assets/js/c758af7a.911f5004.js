"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96423],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=s(r),d=i,m=y["".concat(p,".").concat(d)]||y[d]||u[d]||a;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51530:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var t=r(15680),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,y=(e,n)=>{for(var r in n||(n={}))p.call(n,r)&&c(e,r,n[r]);if(o)for(var r of o(n))s.call(n,r)&&c(e,r,n[r]);return e},u=(e,n)=>a(e,l(n)),d=(e,n)=>{var r={};for(var t in e)p.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&o)for(var t of o(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const m={sidebar_custom_props:{format:{parser:!0,printer:!0}}},f="lines",g={unversionedId:"formats/lines",id:"version-v4.20/formats/lines",title:"lines",description:"Parses and prints events as lines.",source:"@site/versioned_docs/version-v4.20/formats/lines.md",sourceDirName:"formats",slug:"/formats/lines",permalink:"/formats/lines",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/formats/lines.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"leef",permalink:"/formats/leef"},next:{title:"parquet",permalink:"/formats/parquet"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--skip-empty</code> (Parser)",id:"-s--skip-empty-parser",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function w(e){var n=e,{components:r}=n,i=d(n,["components"]);return(0,t.yg)(h,u(y(y({},O),i),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"lines"}),"lines"),(0,t.yg)("p",null,"Parses and prints events as lines."),(0,t.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("p",null,"Parser:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"lines [-s|--skip-empty]\n")),(0,t.yg)("p",null,"Printer:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"lines\n")),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"lines")," parser takes its input bytes and splits it at a newline character."),(0,t.yg)("p",null,"Newline characters include:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"\\n")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"\\r\\n"))),(0,t.yg)("p",null,"The resulting events have a single field called ",(0,t.yg)("inlineCode",{parentName:"p"},"line"),"."),(0,t.yg)("p",null,"Each event is printed on a new line, with fields separated by spaces,\nand nulls skipped.\nUse the ",(0,t.yg)("inlineCode",{parentName:"p"},"put"),"-operator before the ",(0,t.yg)("inlineCode",{parentName:"p"},"lines")," printer to only print a single field."),(0,t.yg)("admonition",y({},{type:"info"}),(0,t.yg)("p",{parentName:"admonition"},"The lines printer does not perform any escaping. Characters like ",(0,t.yg)("inlineCode",{parentName:"p"},"\\n")," and ",(0,t.yg)("inlineCode",{parentName:"p"},'"')," are printed\nas-is.")),(0,t.yg)("h3",y({},{id:"-s--skip-empty-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"-s|--skip-empty")," (Parser)"),(0,t.yg)("p",null,"Ignores empty lines in the input."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read a text file line-by-line:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"from file /tmp/file.txt read lines\n")),(0,t.yg)("p",null,"Write the version number to stdout:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"version | put version | to - write lines\n")))}w.isMDXComponent=!0}}]);