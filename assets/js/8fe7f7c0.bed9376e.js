"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,k=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const k={sidebar_custom_props:{operator:{source:!0}}},u="nics",N={unversionedId:"operators/nics",id:"version-v4.18/operators/nics",title:"nics",description:"Shows a snapshot of available network interfaces.",source:"@site/versioned_docs/version-v4.18/operators/nics.md",sourceDirName:"operators",slug:"/operators/nics",permalink:"/v4.18/operators/nics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/operators/nics.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"metrics",permalink:"/v4.18/operators/metrics"},next:{title:"openapi",permalink:"/v4.18/operators/openapi"}},b={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.nic</code>",id:"tenzirnic",level:3},{value:"Examples",id:"examples",level:2}],h={toc:g},y="wrapper";function v(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(y,m(c(c({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"nics"}),"nics"),(0,r.kt)("p",null,"Shows a snapshot of available network interfaces."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"nics\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nics")," operator shows a snapshot of all available network interfaces."),(0,r.kt)("h2",c({},{id:"schemas"}),"Schemas"),(0,r.kt)("p",null,"Tenzir emits network interface card information with the following schema."),(0,r.kt)("h3",c({},{id:"tenzirnic"}),(0,r.kt)("inlineCode",{parentName:"h3"},"tenzir.nic")),(0,r.kt)("p",null,"Contains detailed information about the network interface."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The name of the network interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"A brief note or explanation about the network interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"addresses")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"A list of IP addresses assigned to the network interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"loopback")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is a loopback interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"up")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is up and can transmit data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"running")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is running and operational.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"wireless")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is a wireless interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"record")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"A record containing detailed status information about the network interface.")))),(0,r.kt)("p",null,"The record ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," has the following schema:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface status is unknown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"connected")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is connected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"disconnected")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is disconnected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"not_applicable")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Indicates if the network interface is not applicable.")))),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"List all connected network interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"nics\n| where status.connected == true\n")))}v.isMDXComponent=!0}}]);