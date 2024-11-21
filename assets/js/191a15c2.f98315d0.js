"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33462],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=i(a),g=r,u=c["".concat(s,".").concat(g)]||c[g]||d[g]||p;return a?n.createElement(u,o(o({ref:t},y),{},{components:a})):n.createElement(u,o({ref:t},y))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},86406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>m,default:()=>E,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var n=a(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&y(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&y(e,a,t[a]);return e},d=(e,t)=>p(e,o(t)),g=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const u={},m="prepend",f={unversionedId:"tql2/functions/prepend",id:"tql2/functions/prepend",title:"prepend",description:"Inserts an element at the start of a list.",source:"@site/docs/tql2/functions/prepend.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/prepend",permalink:"/next/tql2/functions/prepend",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/prepend.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"parse_time",permalink:"/next/tql2/functions/parse_time"},next:{title:"quantile",permalink:"/next/tql2/functions/quantile"}},N={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Prepend a number to a list",id:"prepend-a-number-to-a-list",level:3},{value:"See Also",id:"see-also",level:2}],F={toc:b},h="wrapper";function E(e){var t=e,{components:a}=t,r=g(t,["components"]);return(0,n.yg)(h,d(c(c({},F),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"prepend"}),"prepend"),(0,n.yg)("p",null,"Inserts an element at the start of a list."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"prepend"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"list, x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any) "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," list"))))),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"prepend")," function returns the list ",(0,n.yg)("inlineCode",{parentName:"p"},"xs")," with ",(0,n.yg)("inlineCode",{parentName:"p"},"x")," inserted at the front.\nThe expression ",(0,n.yg)("inlineCode",{parentName:"p"},"xs.prepend(y)")," is equivalent to ",(0,n.yg)("inlineCode",{parentName:"p"},"[x, ...xs]"),"."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("h3",c({},{id:"prepend-a-number-to-a-list"}),"Prepend a number to a list"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {xs"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"xs "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," xs"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"prepend"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{xs"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}"))))),(0,n.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/append"}),(0,n.yg)("inlineCode",{parentName:"a"},"append")),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/concatenate"}),(0,n.yg)("inlineCode",{parentName:"a"},"concatenate"))))}E.isMDXComponent=!0}}]);