"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45092],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>b});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,b=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>k,frontMatter:()=>b,metadata:()=>d,toc:()=>y});var n=r(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),g=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"A Git Retrospective",authors:"mavam",date:new Date("2022-09-15T00:00:00.000Z"),tags:["git","r","quarto","notebooks","engineering","open-source"]},f=void 0,d={permalink:"/blog/a-git-retrospective",source:"@site/blog/a-git-retrospective/index.md",title:"A Git Retrospective",description:"The VAST project is roughly a decade old. But what happened over the last 10",date:"2022-09-15T00:00:00.000Z",formattedDate:"September 15, 2022",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"r",permalink:"/blog/tags/r"},{label:"quarto",permalink:"/blog/tags/quarto"},{label:"notebooks",permalink:"/blog/tags/notebooks"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"open-source",permalink:"/blog/tags/open-source"}],readingTime:4.54,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"A Git Retrospective",authors:"mavam",date:"2022-09-15T00:00:00.000Z",tags:["git","r","quarto","notebooks","engineering","open-source"]},prevItem:{title:"Parquet & Feather: Enabling Open Investigations",permalink:"/blog/parquet-and-feather-enabling-open-investigations"},nextItem:{title:"Public Roadmap and Open RFCs",permalink:"/blog/public-roadmap-and-open-rfcs"}},h={authorsImageUrls:[void 0]},y=[],v={toc:y},O="wrapper";function k(e){var t=e,{components:r}=t,o=g(t,["components"]);return(0,n.yg)(O,u(m(m({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The VAST project is roughly a decade old. But what happened over the last 10\nyears? This blog post looks back over time through the lens of the git ",(0,n.yg)("em",{parentName:"p"},"merge"),"\ncommits."),(0,n.yg)("p",null,"Why merge commits? Because they represent a unit of completed contribution.\nFeature work takes place in dedicated branches, with the merge to the main\nbranch sealing the deal. Some feature branches have just one commit, whereas\nothers dozens. The distribution is not uniform. As of ",(0,n.yg)("inlineCode",{parentName:"p"},"6f9c84198")," on Sep 2,\n2022, there are a total of 13,066 commits, with 2,334 being merges (17.9%).\nWe\u2019ll take a deeper look at the merge commits."))}k.isMDXComponent=!0}}]);