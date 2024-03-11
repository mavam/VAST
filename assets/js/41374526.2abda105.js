"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},h="where",v={unversionedId:"operators/where",id:"version-Tenzir v4.10/operators/where",title:"where",description:"Filters events according to an expression.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/where.md",sourceDirName:"operators",slug:"/operators/where",permalink:"/operators/where",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/where.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"version",permalink:"/operators/version"},next:{title:"write",permalink:"/operators/write"}},k={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;expression&gt;</code>",id:"expression",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},w="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,u(d(d({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"where"}),"where"),(0,n.kt)("p",null,"Filters events according to an ",(0,n.kt)("a",d({parentName:"p"},{href:"/language/expressions"}),"expression"),"."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"where <expression>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"where")," operator only keeps events that match the provided\n",(0,n.kt)("a",d({parentName:"p"},{href:"/language/expressions"}),"expression")," and discards all other events."),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"where")," to extract the subset of interest of the data. Tenzir's expression\nlanguage offers various ways to describe the desired data. In particular,\nexpressions work ",(0,n.kt)("em",{parentName:"p"},"across schemas")," and thus make it easy to concisely articulate\nconstraints."),(0,n.kt)("h3",d({},{id:"expression"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<expression>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"/language/expressions"}),"expression")," to evaluate for each event."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Select all events that contain a field with the value ",(0,n.kt)("inlineCode",{parentName:"p"},"1.2.3.4"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"where 1.2.3.4\n")),(0,n.kt)("p",null,"This expression internally completes to ",(0,n.kt)("inlineCode",{parentName:"p"},":ip == 1.2.3.4"),". The type extractor\n",(0,n.kt)("inlineCode",{parentName:"p"},":ip")," describes all fields of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ip"),". Use field extractors to only consider a\nsingle field:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"where src_ip == 1.2.3.4\n")),(0,n.kt)("p",null,"As a slight variation of the above: use a nested field name and a temporal\nconstraint of the field with name ",(0,n.kt)("inlineCode",{parentName:"p"},"ts"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"where id.orig_h == 1.2.3.4 and ts > 1 hour ago\n")),(0,n.kt)("p",null,"Subnets are first-class values:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"where 10.10.5.0/25\n")),(0,n.kt)("p",null,"This expression unfolds to ",(0,n.kt)("inlineCode",{parentName:"p"},":ip in 10.10.5.0/25 or :subnet == 10.10.5.0/25"),'. It\nmeans "select all events that contain a field of type ',(0,n.kt)("inlineCode",{parentName:"p"},"ip")," in the subnet\n",(0,n.kt)("inlineCode",{parentName:"p"},"10.10.5.0/25"),", or a field of type ",(0,n.kt)("inlineCode",{parentName:"p"},"subnet")," the exactly matches ",(0,n.kt)("inlineCode",{parentName:"p"},"10.10.5.0/25"),'".'),(0,n.kt)("p",null,"Expressions consist of predicates that can be connected with ",(0,n.kt)("inlineCode",{parentName:"p"},"and"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"or"),", and\n",(0,n.kt)("inlineCode",{parentName:"p"},"not"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"where 10.10.5.0/25 and (orig_bytes > 1 Mi or duration > 30 min)\n")))}g.isMDXComponent=!0}}]);