"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3846],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>b,frontMatter:()=>f,metadata:()=>g,toc:()=>M});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={sidebar_custom_props:{operator:{transformation:!0}}},y="unroll",g={unversionedId:"operators/unroll",id:"version-v4.19/operators/unroll",title:"unroll",description:"Unrolls a list by producing multiple events, one for each item.",source:"@site/versioned_docs/version-v4.19/operators/unroll.md",sourceDirName:"operators",slug:"/operators/unroll",permalink:"/v4.19/operators/unroll",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/unroll.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"unique",permalink:"/v4.19/operators/unique"},next:{title:"velociraptor",permalink:"/v4.19/operators/velociraptor"}},w={},M=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],x={toc:M},v="wrapper";function b(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.yg)(v,d(m(m({},x),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",m({},{id:"unroll"}),"unroll"),(0,a.yg)("p",null,"Unrolls a list by producing multiple events, one for each item."),(0,a.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"unroll <field>\n")),(0,a.yg)("h2",m({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"unroll")," operator transforms each input event into a multiple output events.\nFor each item in the input list, one output event is created, where the list is\nreplaced with its item. The surrounding data is kept as-is."),(0,a.yg)("p",null,(0,a.yg)("figure",m({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,a.yg)("svg",m({parentName:"figure"},{viewBox:"0 0 975.625 212",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1XbU/bMFx1MDAxMP7eX1x1MDAxMWVfUbDz4qR8K4XxomlcdTAwMWFiXHUwMDFi2ihCJnFTr66dxS4toP732SnEaVx1MDAxYTb2aUyilarcPXfn6/nuufah5ziuuiuIu+e4ZJliRrNcdTAwMTIv3Fx1MDAxZKO/JaWkgmvIr2Qp5mVaWU6UKuTe7i4uXG7PenmpmK09XHQjM8KV1LaXWnach+pTIzQz/seDo+ucgW83p9+/zI75XHUwMDA1+jmIv1auldFTQoosldUutSpcdTAwMDCglu9MYlxyeUEzNTG6XHUwMDEweaBcdTAwMWbEUY1MXGLNJ0pDsO/XSsxzZk6xXHUwMDAxpCrFlFxmXHUwMDA1XHUwMDEzpTn9XHUwMDFkJOZtXHUwMDEzuMHpNC/FnGfWJkFcdOkjazOmjJ2rO7YuXHUwMDEzTifzslx1MDAxMWF9wsVjorClr/2k0Fx1MDAwNbVe+sh8womUXHUwMDFiPqLAKVWmXGKwUVx1MDAwNJNfcZJVlb+yWZV4Rk5M6fmcsWZgnj1cdTAwMDbeXHUwMDAwJCHGOEBhXHUwMDA0XHUwMDAxgqhcdTAwMDZsS4SgrfwoeNVcdTAwMWTQXHUwMDA3IVxu/Fx1MDAwNCS1XHUwMDA1lVx1MDAwN7olVFx1MDAxNXSMmSS2piaFQ9suXHUwMDFiacyLXGavnWBcZoMk0bfahyCocUb5tO3DRDrtOKdqJV3ah1x1MDAxMXeckSvLdKTFkas7wlx1MDAwM57vwZG7s4YyqVxmdGkkI/sg0Fx1MDAxNlx1MDAxMFx1MDAwNp7/aGO0MNY+yIuRXHUwMDA3I9DUP8VcdTAwMGKDkWuUVyO+arSH4Oqc3pOqdTe07/GMMnObwUbOXHUwMDAzRnNTbpeRcWNcdTAwMTZ0yVx1MDAxNdVzV8NKXHUwMDE0XHUwMDE2TXU8TDkpt69cXJQ0p1x1MDAxY7PPr6NcdTAwMWX6XHUwMDA2yXE9nZ5f6Vc7XZyxP/+ApFx1MDAxY15cdTAwMWPBXHUwMDFm8nTRP1x1MDAxY2eKlducgctSLDZJI0o2SSPoIFxy2LiOmi6s6o0s/khcdTAwMTahXHUwMDFl+DhcdTAwMDaB3+ZcdTAwMDWNoS1lTVx1MDAxNiGMoiBcdTAwMDGxtfj3ZFFcYtpcXF7mZZ9cdTAwMWPbXHUwMDA0lVA/X+10Wjc6q2Xfa/m5XGZLNVx1MDAxNLNcdTAwMTlV+ot8Mkls1VrhUu1TnlGetzHCs2eQymtgXHUwMDA2Y0Lw1sVqvybmqpKu2/03w0iHanmAXHUwMDAwuL+eXHUwMDFm5cOzZJCdXHUwMDFkJy9Z4HHYWuBoe1x1MDAxNiNcdTAwMTh5yO9Y3/Hb9v6LgexD2EcoibtcdTAwMDbSXHUwMDBmn1x1MDAxYshcdTAwMDRcdTAwMDRcdTAwMTGCYfg6l3f3orJbqrWeViP+XHUwMDEyn9byeqlXc7W97lx1MDAxZP8/lK37p0DvkVx1MDAxZl39V+NcXOmG0uCai9xbSlx1MDAxNvtcdTAwMWRDPa5ehr0q7jJDTUx3Pqx6q1+kMz1cdTAwMTkifQ==",(0,a.yg)("defs",{parentName:"svg"},(0,a.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,a.yg)("text",m({parentName:"svg"},{y:"19.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"{"),(0,a.yg)("text",m({parentName:"svg"},{y:"43.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'  "src": "192.0.2.1",'),(0,a.yg)("text",m({parentName:"svg"},{y:"67.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'  "dst": ['),(0,a.yg)("text",m({parentName:"svg"},{y:"91.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "203.0.113.2",'),(0,a.yg)("text",m({parentName:"svg"},{y:"115.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "172.16.76.150",'),(0,a.yg)("text",m({parentName:"svg"},{y:"139.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "192.0.2.143"'),(0,a.yg)("text",m({parentName:"svg"},{y:"163.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"  ]"),(0,a.yg)("text",m({parentName:"svg"},{y:"187.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"}"),(0,a.yg)("g",m({parentName:"svg"},{strokeLineCap:"round"}),(0,a.yg)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M290 110c27.34-2.1 54.15.39 120 0m-120 0c43.77 1.42 85.72-.2 120 0"})),(0,a.yg)("path",m({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m409.86 111.63-12.65 5.67-.26-11.84 11.87 5.84"})),(0,a.yg)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M410 110c-2.76.45-5.91 3.76-13.56 6.41M410 110c-4.13 2.82-9.6 3.89-13.56 6.41m0 0c-.29-2.92-.31-7.3-.07-12.68m.07 12.68c.41-2.96-.51-7.36-.07-12.68m0 0c2.38 2.12 7.3 1.45 13.63 6.27m-13.63-6.27c5.19 2.8 9.95 5.06 13.63 6.27m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,a.yg)("text",m({parentName:"svg"},{y:"19.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "203.0.113.2"}'),(0,a.yg)("text",m({parentName:"svg"},{y:"43.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "172.16.76.150"}'),(0,a.yg)("text",m({parentName:"svg"},{y:"67.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "192.0.2.143"}')))),(0,a.yg)("p",null,"No output events are produced if the list is empty or if the field is ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,a.yg)("h2",m({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Consider the following events:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{"a": 1, "b": [1, 2, 3]}\n{"a": 2, "b": [1]}\n{"a": 3, "b": []}\n{"a": 4, "b": null}\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"unroll b")," would produce the following output:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{"a": 1, "b": 1}\n{"a": 1, "b": 2}\n{"a": 1, "b": 3}\n{"a": 2, "b": 1}\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"unroll")," operator can also be used with records."),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "src": "192.168.0.5",\n  "conn": [\n    {\n      "dest": "192.168.0.34",\n      "active": "381ms"\n    },\n    {\n      "dest": "192.168.0.120",\n      "active": "42ms"\n    },\n    {\n      "dest": "1.2.3.4",\n      "active": "67ms"\n    }\n  ]\n}\n')),(0,a.yg)("p",null,"We can use ",(0,a.yg)("inlineCode",{parentName:"p"},"unroll conn")," to bring this into a form more suited for analysis.\nFor example, we would then be able to use\n",(0,a.yg)("inlineCode",{parentName:"p"},"where active > 100ms || conn.dest !in 192.168.0.0/16")," to filter for relevant\nconnections."),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "src": "192.168.0.5",\n  "conn": {\n    "dest": "192.168.0.34",\n    "active": "381.0ms"\n  }\n}\n{\n  "src": "192.168.0.5",\n  "conn": {\n    "dest": "1.2.3.4",\n    "active": "67.0ms"\n  }\n}\n')))}b.isMDXComponent=!0}}]);