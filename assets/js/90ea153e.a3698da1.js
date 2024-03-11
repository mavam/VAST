"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>l(e,s(t)),f=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="sort",b={unversionedId:"operators/sort",id:"version-Tenzir v4.10/operators/sort",title:"sort",description:"Sorts events.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/sort.md",sourceDirName:"operators",slug:"/operators/sort",permalink:"/operators/sort",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/sort.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"sockets",permalink:"/operators/sockets"},next:{title:"summarize",permalink:"/operators/summarize"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--stable</code>",id:"--stable",level:3},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"<code>&lt;asc&gt;|&lt;desc&gt;</code>",id:"ascdesc",level:3},{value:"<code>&lt;nulls-first&gt;|&lt;nulls-last&gt;</code>",id:"nulls-firstnulls-last",level:3},{value:"Examples",id:"examples",level:2}],h={toc:k},O="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,u(d(d({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"sort"}),"sort"),(0,n.kt)("p",null,"Sorts events."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sort [--stable] <field> [<asc>|<desc>] [<nulls-first>|<nulls-last>]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Sorts events by a provided field."),(0,n.kt)("h3",d({},{id:"--stable"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--stable")),(0,n.kt)("p",null,"Preserve the relative order of events that cannot be sorted because the provided\nfields resolve to the same value."),(0,n.kt)("h3",d({},{id:"field"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<field>")),(0,n.kt)("p",null,"The name of the field to sort by."),(0,n.kt)("h3",d({},{id:"ascdesc"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<asc>|<desc>")),(0,n.kt)("p",null,"Specifies the sort order."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"asc"),"."),(0,n.kt)("h3",d({},{id:"nulls-firstnulls-last"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<nulls-first>|<nulls-last>")),(0,n.kt)("p",null,"Specifies how to order null values."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"nulls-last"),"."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Sort by the ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," field in ascending order."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sort timestamp\n")),(0,n.kt)("p",null,"Sort by the ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," field in descending order."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sort timestamp desc\n")),(0,n.kt)("p",null,"Arrange by field ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," and put null values first:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sort foo nulls-first\n")),(0,n.kt)("p",null,"Arrange by field ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," in descending order and put null values first:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sort foo desc nulls-first\n")))}g.isMDXComponent=!0}}]);