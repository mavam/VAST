"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63180],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>g});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||y[u]||o;return n?t.createElement(g,i(i({ref:r},c),{},{components:n})):t.createElement(g,i({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67105:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var t=n(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&c(e,n,r[n]);if(p)for(var n of p(r))l.call(r,n)&&c(e,n,r[n]);return e},y=(e,r)=>o(e,i(r)),u=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const g={sidebar_custom_props:{operator:{transformation:!0}}},m="where",f={unversionedId:"operators/where",id:"operators/where",title:"where",description:"Filters events according to an expression.",source:"@site/docs/operators/where.md",sourceDirName:"operators",slug:"/operators/where",permalink:"/next/operators/where",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/where.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"version",permalink:"/next/operators/version"},next:{title:"write",permalink:"/next/operators/write"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;expression&gt;</code>",id:"expression",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},w="wrapper";function x(e){var r=e,{components:n}=r,a=u(r,["components"]);return(0,t.yg)(w,y(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"where"}),"where"),(0,t.yg)("p",null,"Filters events according to an ",(0,t.yg)("a",d({parentName:"p"},{href:"/next/language/expressions"}),"expression"),"."),(0,t.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"where <expression>\n")),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"where")," operator only keeps events that match the provided\n",(0,t.yg)("a",d({parentName:"p"},{href:"/next/language/expressions"}),"expression")," and discards all other events."),(0,t.yg)("p",null,"Use ",(0,t.yg)("inlineCode",{parentName:"p"},"where")," to extract the subset of interest of the data. Tenzir's expression\nlanguage offers various ways to describe the desired data. In particular,\nexpressions work ",(0,t.yg)("em",{parentName:"p"},"across schemas")," and thus make it easy to concisely articulate\nconstraints."),(0,t.yg)("h3",d({},{id:"expression"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<expression>")),(0,t.yg)("p",null,"The ",(0,t.yg)("a",d({parentName:"p"},{href:"/next/language/expressions"}),"expression")," to evaluate for each event."),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Select all events that contain a field with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"1.2.3.4"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"where 1.2.3.4\n")),(0,t.yg)("p",null,"This expression internally completes to ",(0,t.yg)("inlineCode",{parentName:"p"},":ip == 1.2.3.4"),". The type extractor\n",(0,t.yg)("inlineCode",{parentName:"p"},":ip")," describes all fields of type ",(0,t.yg)("inlineCode",{parentName:"p"},"ip"),". Use field extractors to only consider a\nsingle field:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"where src_ip == 1.2.3.4\n")),(0,t.yg)("p",null,"As a slight variation of the above: use a nested field name and a temporal\nconstraint of the field with name ",(0,t.yg)("inlineCode",{parentName:"p"},"ts"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"where id.orig_h == 1.2.3.4 and ts > 1 hour ago\n")),(0,t.yg)("p",null,"Subnets are first-class values:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"where 10.10.5.0/25\n")),(0,t.yg)("p",null,"This expression unfolds to ",(0,t.yg)("inlineCode",{parentName:"p"},":ip in 10.10.5.0/25 or :subnet == 10.10.5.0/25"),'. It\nmeans "select all events that contain a field of type ',(0,t.yg)("inlineCode",{parentName:"p"},"ip")," in the subnet\n",(0,t.yg)("inlineCode",{parentName:"p"},"10.10.5.0/25"),", or a field of type ",(0,t.yg)("inlineCode",{parentName:"p"},"subnet")," the exactly matches ",(0,t.yg)("inlineCode",{parentName:"p"},"10.10.5.0/25"),'".'),(0,t.yg)("p",null,"Expressions consist of predicates that can be connected with ",(0,t.yg)("inlineCode",{parentName:"p"},"and"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"or"),", and\n",(0,t.yg)("inlineCode",{parentName:"p"},"not"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"where 10.10.5.0/25 and (orig_bytes > 1 Mi or duration > 30 min)\n")))}x.isMDXComponent=!0}}]);