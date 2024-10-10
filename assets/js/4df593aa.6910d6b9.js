"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3846],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=y(n),g=r,d=i["".concat(l,".").concat(g)]||i[g]||m[g]||p;return n?t.createElement(d,s(s({ref:a},c),{},{components:n})):t.createElement(d,s({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60614:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>E,default:()=>w,frontMatter:()=>d,metadata:()=>N,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},m=(e,a)=>p(e,s(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={sidebar_custom_props:{operator:{transformation:!0}}},E="unroll",N={unversionedId:"operators/unroll",id:"version-v4.19/operators/unroll",title:"unroll",description:"Unrolls a list by producing multiple events, one for each item.",source:"@site/versioned_docs/version-v4.19/operators/unroll.md",sourceDirName:"operators",slug:"/operators/unroll",permalink:"/v4.19/operators/unroll",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/operators/unroll.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"unique",permalink:"/v4.19/operators/unique"},next:{title:"velociraptor",permalink:"/v4.19/operators/velociraptor"}},u={},F=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],D={toc:F},f="wrapper";function w(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(f,m(i(i({},D),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"unroll"}),"unroll"),(0,t.yg)("p",null,"Unrolls a list by producing multiple events, one for each item."),(0,t.yg)("h2",i({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"unroll <field>\n")),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unroll")," operator transforms each input event into a multiple output events.\nFor each item in the input list, one output event is created, where the list is\nreplaced with its item. The surrounding data is kept as-is."),(0,t.yg)("p",null,(0,t.yg)("figure",i({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,t.yg)("svg",i({parentName:"figure"},{viewBox:"0 0 975.625 212",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1XbU/bMFx1MDAxMP7eX1x1MDAxMWVfUbDz4qR8K4XxomlcdTAwMWFiXHUwMDFi2ihCJnFTr66dxS4toP732SnEaVx1MDAxYTb2aUyilarcPXfn6/nuufah5ziuuiuIu+e4ZJliRrNcdTAwMTIv3Fx1MDAxZKO/JaWkgmvIr2Qp5mVaWU6UKuTe7i4uXG7PenmpmK09XHQjM8KV1LaXWnach+pTIzQz/seDo+ucgW83p9+/zI75XHUwMDA1+jmIv1auldFTQoosldUutSpcdTAwMDCglu9MYlxyeUEzNTG6XHUwMDEweaBcdTAwMWbEUY1MXGLNJ0pDsO/XSsxzZk6xXHUwMDAxpCrFlFxmXHUwMDA1XHUwMDEzpTn9XHUwMDFkJOZtXHUwMDEzuMHpNC/FnGfWJkFcdOkjazOmjJ2rO7YuXHUwMDEzTifzslx1MDAxMWF9wsVjorClr/2k0Fx1MDAwNbVe+sh8womUXHUwMDFiPqLAKVWmXGKwUVx1MDAwNJNfcZJVlb+yWZV4Rk5M6fmcsWZgnj1cdTAwMDbeXHUwMDAwJCHGOEBhXHUwMDA0XHUwMDAxgqhcdTAwMDZsS4SgrfwoeNVcdTAwMWTQXHUwMDA3IVxu/Fx1MDAwNCS1XHUwMDA1lVx1MDAwN7olVFx1MDAxNXSMmSS2piaFQ9suXHUwMDFiacyLXGavnWBcZoMk0bfahyCocUb5tO3DRDrtOKdqJV3ah1x1MDAxMXeckSvLdKTFkas7wlx1MDAwM57vwZG7s4YyqVxmdGkkI/sg0Fx1MDAxNlx1MDAxMFx1MDAwNp7/aGO0MNY+yIuRXHUwMDA3I9DUP8VcdTAwMGKDkWuUVyO+arSH4Oqc3pOqdTe07/GMMnObwUbOXHUwMDAzRnNTbpeRcWNcdTAwMTZ0yVx1MDAxNdVzV8NKXHUwMDE0XHUwMDE2TXU8TDkpt69cXJQ0p1x1MDAxY7PPr6NcdTAwMWX6XHUwMDA2yXE9nZ5f6Vc7XZyxP/+ApFx1MDAxY15cdTAwMWPBXHUwMDFm8nTRP1x1MDAxY2eKlducgctSLDZJI0o2SSPoIFxy2LiOmi6s6o0s/khcdTAwMTahXHUwMDFl+DhcdTAwMDaB3+ZcdTAwMDWNoS1lTVx1MDAxNiGMoiBcdTAwMDGxtfj3ZFFcYtpcXF7mZZ9cdTAwMWPbXHUwMDA0lVA/X+10Wjc6q2Xfa/m5XGZLNVx1MDAxNLNcdTAwMTlV+ot8Mkls1VrhUu1TnlGetzHCs2eQymtgXHUwMDA2Y0Lw1sVqvybmqpKu2/03w0iHanmAXHUwMDAwuL+eXHUwMDFm5cOzZJCdXHUwMDFkJy9Z4HHYWuBoe1x1MDAxNiNcdTAwMTh5yO9Y3/Hb9v6LgexD2EcoibtcdTAwMDbSXHUwMDBmn1x1MDAxYshcdTAwMDRcdTAwMDRcdTAwMTGCYfg6l3f3orJbqrWeViP+XHUwMDEyn9byeqlXc7W97lx1MDAxZP8/lK37p0DvkVx1MDAxZl39V+NcXOmG0uCai9xbSlx1MDAxNvtcdTAwMWRDPa5ehr0q7jJDTUx3Pqx6q1+kMz1cdTAwMTkifQ==",(0,t.yg)("defs",{parentName:"svg"},(0,t.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,t.yg)("text",i({parentName:"svg"},{y:"19.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"{"),(0,t.yg)("text",i({parentName:"svg"},{y:"43.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'  "src": "192.0.2.1",'),(0,t.yg)("text",i({parentName:"svg"},{y:"67.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'  "dst": ['),(0,t.yg)("text",i({parentName:"svg"},{y:"91.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "203.0.113.2",'),(0,t.yg)("text",i({parentName:"svg"},{y:"115.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "172.16.76.150",'),(0,t.yg)("text",i({parentName:"svg"},{y:"139.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "192.0.2.143"'),(0,t.yg)("text",i({parentName:"svg"},{y:"163.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"  ]"),(0,t.yg)("text",i({parentName:"svg"},{y:"187.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"}"),(0,t.yg)("g",i({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",i({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M290 110c27.34-2.1 54.15.39 120 0m-120 0c43.77 1.42 85.72-.2 120 0"})),(0,t.yg)("path",i({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m409.86 111.63-12.65 5.67-.26-11.84 11.87 5.84"})),(0,t.yg)("path",i({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M410 110c-2.76.45-5.91 3.76-13.56 6.41M410 110c-4.13 2.82-9.6 3.89-13.56 6.41m0 0c-.29-2.92-.31-7.3-.07-12.68m.07 12.68c.41-2.96-.51-7.36-.07-12.68m0 0c2.38 2.12 7.3 1.45 13.63 6.27m-13.63-6.27c5.19 2.8 9.95 5.06 13.63 6.27m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("text",i({parentName:"svg"},{y:"19.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "203.0.113.2"}'),(0,t.yg)("text",i({parentName:"svg"},{y:"43.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "172.16.76.150"}'),(0,t.yg)("text",i({parentName:"svg"},{y:"67.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "192.0.2.143"}')))),(0,t.yg)("p",null,"No output events are produced if the list is empty or if the field is ",(0,t.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Consider the following events:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": []}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"unroll b")," would produce the following output:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unroll")," operator can also be used with records."),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.5"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "conn"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "dest"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.34"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "active"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"381ms"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "dest"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.120"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "active"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"42ms"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "dest"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.2.3.4"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "active"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"67ms"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ]")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"We can use ",(0,t.yg)("inlineCode",{parentName:"p"},"unroll conn")," to bring this into a form more suited for analysis.\nFor example, we would then be able to use\n",(0,t.yg)("inlineCode",{parentName:"p"},"where active > 100ms || conn.dest !in 192.168.0.0/16")," to filter for relevant\nconnections."),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.5"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "conn"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "dest"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.34"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "active"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"381.0ms"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.5"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "conn"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "dest"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.2.3.4"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "active"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"67.0ms"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}w.isMDXComponent=!0}}]);