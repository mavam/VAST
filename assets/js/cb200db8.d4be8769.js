"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7828],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),s=d(n),y=a,c=s["".concat(l,".").concat(y)]||s[y]||m[y]||i;return n?r.createElement(c,o(o({ref:t},g),{},{components:n})):r.createElement(c,o({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>C,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&g(e,n,t[n]);return e},m=(e,t)=>i(e,o(t)),y=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const c={sidebar_custom_props:{operator:{source:!0}}},f="partitions",u={unversionedId:"operators/partitions",id:"version-v4.19/operators/partitions",title:"partitions",description:"Retrieves metadata about events stored at a node.",source:"@site/versioned_docs/version-v4.19/operators/partitions.md",sourceDirName:"operators",slug:"/operators/partitions",permalink:"/operators/partitions",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/partitions.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"parse",permalink:"/operators/parse"},next:{title:"pass",permalink:"/operators/pass"}},N={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;expr&gt;</code>",id:"expr",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.partition</code>",id:"tenzirpartition",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},v="wrapper";function C(e){var t=e,{components:n}=t,a=y(t,["components"]);return(0,r.yg)(v,m(s(s({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",s({},{id:"partitions"}),"partitions"),(0,r.yg)("p",null,"Retrieves metadata about events stored at a node."),(0,r.yg)("h2",s({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",s({parentName:"pre"},{}),"partitions [<expr>]\n")),(0,r.yg)("h2",s({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"partitions")," operator shows a summary of candidate partitions at a node."),(0,r.yg)("h3",s({},{id:"expr"}),(0,r.yg)("inlineCode",{parentName:"h3"},"<expr>")),(0,r.yg)("p",null,"Show only partitions which would be considered for pipelines of the form\n",(0,r.yg)("inlineCode",{parentName:"p"},"export | where <expr>")," instead of returning all data."),(0,r.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,r.yg)("p",null,"Tenzir emits partition information with the following schema:"),(0,r.yg)("h3",s({},{id:"tenzirpartition"}),(0,r.yg)("inlineCode",{parentName:"h3"},"tenzir.partition")),(0,r.yg)("p",null,"Contains detailed information about a partition."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uuid")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The unique ID of the partition in the UUIDv4 format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"memusage")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The memory usage of the partition in bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"diskusage")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The disk usage of the partition in bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"events")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The number of events contained in the partition.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"min_import_time")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"time")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The time at which the first event of the partition arrived at the ",(0,r.yg)("inlineCode",{parentName:"td"},"import")," operator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"max_import_time")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"time")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The time at which the last event of the partition arrived at the ",(0,r.yg)("inlineCode",{parentName:"td"},"import")," operator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"version")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The version number of the internal partition storage format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"schema")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The schema name of the events contained in the partition.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"schema_id")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"A unique identifier for the physical layout of the partition.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"store")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"record")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"Resource information about the partition's store.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"indexes")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"record")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"Resource information about the partition's indexes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"sketches")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"record")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"Resource information about the partition's sketches.")))),(0,r.yg)("p",null,"The records ",(0,r.yg)("inlineCode",{parentName:"p"},"store"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"indexes"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"sketches")," have the following schema:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"url")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The URL of the resource.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"size")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",s({parentName:"tr"},{align:"left"}),"The size of the resource.")))),(0,r.yg)("h2",s({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Get an overview of the memory and disk requirements for all stored data sorted\nby schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",s({parentName:"pre"},{}),"partitions\n| summarize events=sum(events),\n            diskusage=sum(diskusage),\n            memusage=sum(memusage)\n  by schema\n| sort schema\n")),(0,r.yg)("p",null,"Get an upper bound for the number of events that could contain the IP address\n127.0.0.1:"),(0,r.yg)("pre",null,(0,r.yg)("code",s({parentName:"pre"},{}),"partitions :ip == 127.0.0.1\n| summarize candidates=sum(events)\n")),(0,r.yg)("p",null,"See how many partitions contain a non-null value for the field ",(0,r.yg)("inlineCode",{parentName:"p"},"hostname"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",s({parentName:"pre"},{}),"partitions hostname != null\n")))}C.isMDXComponent=!0}}]);