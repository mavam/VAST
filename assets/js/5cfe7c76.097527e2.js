"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18889],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=c,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77534:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),c=r(20053),a=r(36764),o=r(27449),i=r(75068),l=r(72183);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(o.A,{href:e,className:(0,c.A)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:r,description:a}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,c.A)("text--truncate",s.cardTitle),title:r},t," ",r),a&&n.createElement("p",{className:(0,c.A)("text--truncate",s.cardDescription),title:a},a))}function m({item:e}){var t;const r=(0,a._o)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const c=(0,i.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:c,title:e.label,description:null!=(r=e.description)?r:null==o?void 0:o.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&g(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&g(e,r,t[r]);return e};function w({className:e}){const t=(0,a.$S)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,O({},e));const o=(0,a.d1)(t);return n.createElement("section",{className:(0,c.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},64832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>j,frontMatter:()=>y,metadata:()=>h,toc:()=>g});var n=r(15680),c=r(77534),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={},b="Architecture",h={unversionedId:"architecture",id:"version-v4.27/architecture",title:"Architecture",description:"The system architecture documents comprise the following parts.",source:"@site/versioned_docs/version-v4.27/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/v4.27/architecture",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/architecture.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Create a Security Data Fabric",permalink:"/v4.27/use-cases/create-a-security-data-fabric"},next:{title:"Design Goals",permalink:"/v4.27/architecture/design-goals"}},v={},g=[],O={toc:g},w="wrapper";function j(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.yg)(w,f(m(m({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",m({},{id:"architecture"}),"Architecture"),(0,n.yg)("p",null,"The system architecture documents comprise the following parts."),(0,n.yg)(c.A,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);