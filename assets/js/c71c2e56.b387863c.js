"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},b="deduplicate",v={unversionedId:"operators/deduplicate",id:"operators/deduplicate",title:"deduplicate",description:"Removes duplicate events based on the values of one or more fields.",source:"@site/docs/operators/deduplicate.md",sourceDirName:"operators",slug:"/operators/deduplicate",permalink:"/next/operators/deduplicate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/deduplicate.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"decompress",permalink:"/next/operators/decompress"},next:{title:"delay",permalink:"/next/operators/delay"}},y={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor&gt;...</code>",id:"extractor",level:3},{value:"<code>--limit &lt;count&gt;</code>",id:"--limit-count",level:3},{value:"<code>--distance &lt;count&gt;</code>",id:"--distance-count",level:3},{value:"<code>--timeout &lt;duration&gt;</code>",id:"--timeout-duration",level:3},{value:"Examples",id:"examples",level:2}],k={toc:h},O="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,u(s(s({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"deduplicate"}),"deduplicate"),(0,r.kt)("p",null,"Removes duplicate events based on the values of one or more fields."),(0,r.kt)("h2",s({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"deduplicate [<extractor>...]\n            [--limit <count>] [--distance <count>] [--timeout <duration>]\n")),(0,r.kt)("h2",s({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deduplicate")," operator deduplicates values over a stream of events, based\non the value of one or more fields."),(0,r.kt)("h3",s({},{id:"extractor"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<extractor>...")),(0,r.kt)("p",null,"A comma-separated list of extractors\nthat identify the fields used for deduplicating.\nDefaults to the entire event."),(0,r.kt)("h3",s({},{id:"--limit-count"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--limit <count>")),(0,r.kt)("p",null,"The number of duplicates allowed before they're removed.\nDefaults to 1."),(0,r.kt)("h3",s({},{id:"--distance-count"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--distance <count>")),(0,r.kt)("p",null,"Distance between two events that can be considered duplicates.\nValue of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," means only adjacent events can be considered duplicates.\n",(0,r.kt)("inlineCode",{parentName:"p"},"0")," means infinity. Defaults to infinity."),(0,r.kt)("h3",s({},{id:"--timeout-duration"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--timeout <duration>")),(0,r.kt)("p",null,"The amount of time a specific value is remembered for deduplication.\nFor each value, the timer is reset every time a match for that value is found.\nDefaults to infinity."),(0,r.kt)("h2",s({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"For the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n{"foo": null, "bar": "b"}\n{"bar": "b"}\n{"foo": null, "bar": "b"}\n{"foo": null, "bar": "b"}\n')),(0,r.kt)("p",null,"if ",(0,r.kt)("inlineCode",{parentName:"p"},"deduplicate --limit 1")," is used, all duplicate events are removed:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n{"foo": null, "bar": "b"}\n{"bar": "b"}\n')),(0,r.kt)("p",null,"On the other hand, if ",(0,r.kt)("inlineCode",{parentName:"p"},"deduplicate bar --limit 1")," is used,\nonly the ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," field is considered\nwhen determining whether an event is a duplicate:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n')))}g.isMDXComponent=!0}}]);