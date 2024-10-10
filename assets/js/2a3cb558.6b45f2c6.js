"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74670],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>u});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(t),d=a,u=y["".concat(i,".").concat(d)]||y[d]||m[d]||o;return t?n.createElement(u,p(p({ref:r},c),{},{components:t})):n.createElement(u,p({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[y]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66502:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var n=t(15680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&c(e,t,r[t]);return e},m=(e,r)=>o(e,p(r)),d=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const u={sidebar_custom_props:{format:{parser:!0,printer:!0}}},f="yaml",g={unversionedId:"formats/yaml",id:"version-v4.19/formats/yaml",title:"yaml",description:"Reads and writes YAML.",source:"@site/versioned_docs/version-v4.19/formats/yaml.md",sourceDirName:"formats",slug:"/formats/yaml",permalink:"/v4.19/formats/yaml",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/formats/yaml.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"xsv",permalink:"/v4.19/formats/xsv"},next:{title:"zeek-json",permalink:"/v4.19/formats/zeek-json"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function N(e){var r=e,{components:t}=r,a=d(r,["components"]);return(0,n.yg)(h,m(y(y({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"yaml"}),"yaml"),(0,n.yg)("p",null,"Reads and writes YAML."),(0,n.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"yaml\n")),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"yaml")," format provides a parser and printer for YAML documents and streams."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Print Tenzir's configuration as YAML:"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"show config | write yaml\n")),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"---")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  no-location-overrides"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  endpoint"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"my-custom-endpoint:42")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"..."))))),(0,n.yg)("p",null,"Convert the Tenzir configuration file to CSV:"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"from file ~/.config/tenzir/tenzir.yml | flatten | write csv\n")),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tsv","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tsv","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"tenzir.no-location-overrides,tenzir.endpoint")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"true,my-custom-endpoint:42"))))))}N.isMDXComponent=!0}}]);