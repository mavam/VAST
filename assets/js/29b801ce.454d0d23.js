"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67851],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),u=a,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>i(e,o(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={},y="Quickstart",h={unversionedId:"quickstart",id:"version-v4.20/quickstart",title:"Quickstart",description:"Get up and running quickly with this tutorial. It just takes a few steps to run",source:"@site/versioned_docs/version-v4.20/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/quickstart.md",tags:[],version:"v4.20",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FAQs",permalink:"/faqs"},next:{title:"Map Data to OCSF",permalink:"/map-data-to-ocsf/"}},f={},b=[{value:"Explore the demo node",id:"explore-the-demo-node",level:2},{value:"Up next",id:"up-next",level:2}],v={toc:b},w="wrapper";function O(e){var t=e,{components:a}=t,i=u(t,["components"]);return(0,n.yg)(w,d(g(g({},v),i),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"quickstart"}),"Quickstart"),(0,n.yg)("p",null,"Get up and running quickly with this tutorial. It just takes a few steps to run\npipelines."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Tenzir Platform in action",src:r(27492).A,width:"3648",height:"2350"})),(0,n.yg)("h2",g({},{id:"explore-the-demo-node"}),"Explore the demo node"),(0,n.yg)("p",null,"The easiest way to get started with Tenzir is using our cloud demo setup:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",g({parentName:"li"},{href:"/installation/create-an-account"}),"Create a free account")," by signing in:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Sign in",src:r(47480).A,width:"3648",height:"2350"})),(0,n.yg)("ol",g({},{start:2}),(0,n.yg)("li",{parentName:"ol"},"You will be redirected to the ",(0,n.yg)("a",g({parentName:"li"},{href:"https://app.tenzir.com/pipelines"}),"Pipelines"),"\npage:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Pipelines",src:r(71677).A,width:"3648",height:"2350"})),(0,n.yg)("ol",g({},{start:3}),(0,n.yg)("li",{parentName:"ol"},"Create a demo node by clicking the ",(0,n.yg)("em",{parentName:"li"},"Add node")," button in the left pane and\nselect ",(0,n.yg)("em",{parentName:"li"},"Cloud-hosted demo node"),". The demo node takes 1-2 minutes to boot up:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Demo node",src:r(87734).A,width:"3648",height:"2350"})),(0,n.yg)("ol",g({},{start:4}),(0,n.yg)("li",{parentName:"ol"},"The demo node comes with the ",(0,n.yg)("em",{parentName:"li"},"Demo Node Pipelines")," package from the library\npre-installed. Head over to the ",(0,n.yg)("em",{parentName:"li"},"Library")," page to view the installed package:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Library",src:r(72433).A,width:"3648",height:"2350"})),(0,n.yg)("ol",g({},{start:5}),(0,n.yg)("li",{parentName:"ol"},"Let's run one of the snippets included with the demo package. This brings you\nright into the ",(0,n.yg)("em",{parentName:"li"},"Explorer"),", where you can interactively run pipelines:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Explorer",src:r(77687).A,width:"3648",height:"2350"})),(0,n.yg)("ol",g({},{start:6}),(0,n.yg)("li",{parentName:"ol"},"Start ",(0,n.yg)("a",g({parentName:"li"},{href:"/language"}),"learning TQL")," and explore the data set visually, e.g.,\nby running aggregations and ",(0,n.yg)("a",g({parentName:"li"},{href:"/operators/chart"}),"plotting data"),":")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Bar chart",src:r(26446).A,width:"3648",height:"2350"})),(0,n.yg)("h2",g({},{id:"up-next"}),"Up next"),(0,n.yg)("p",null,"Now that you got a first impression of Tenzir, ",(0,n.yg)("a",g({parentName:"p"},{href:"/installation/deploy-a-node"}),"onboard your own\nnode")," and dive deeper by"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"following the ",(0,n.yg)("a",g({parentName:"li"},{href:"/installation"}),"user guides")," with step-by-step tutorials of\ncommon use cases,"),(0,n.yg)("li",{parentName:"ul"},"learning more about the ",(0,n.yg)("a",g({parentName:"li"},{href:"/language"}),"language"),", ",(0,n.yg)("a",g({parentName:"li"},{href:"/operators"}),"operators"),",\n",(0,n.yg)("a",g({parentName:"li"},{href:"/connectors"}),"connectors"),", ",(0,n.yg)("a",g({parentName:"li"},{href:"/formats"}),"formats"),", the ",(0,n.yg)("a",g({parentName:"li"},{href:"/data-model"}),"data\nmodel"),", and"),(0,n.yg)("li",{parentName:"ul"},"understanding ",(0,n.yg)("a",g({parentName:"li"},{href:"/why-tenzir"}),"why")," we built Tenzir and how it compares to\nother systems.")),(0,n.yg)("p",null,"Don't forget that we're here to help! If you have any questions, swing by our\nfriendly ",(0,n.yg)("a",g({parentName:"p"},{href:"/discord"}),"community Discord")," or open a ",(0,n.yg)("a",g({parentName:"p"},{href:"https://github.com/tenzir/tenzir/discussions"}),"GitHub\ndiscussion"),"."))}O.isMDXComponent=!0},26446:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-area-chart-35c7779e044cc13bce1cfaf298716c72.png"},87734:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-demo-node-66a51dfeb65bcdd1bd8ba7121a1d1827.png"},77687:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-explorer-5b3bcb9196414e962171c92ae8a49553.png"},72433:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-library-b7a5899a3d63ceecc96938d03ae41afb.png"},71677:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-pipelines-39fb309d45de5314e949083957b80272.png"},27492:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-platform-in-action-abecc1fad21a01d3323612aa266d4dc6.png"},47480:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/example-signin-55602f32db013ddca21d7e1135651eed.png"}}]);