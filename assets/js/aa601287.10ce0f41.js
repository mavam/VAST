"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5629],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||y[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=n(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&p(e,n,t[n]);return e},y=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_position:0},d="Create an account",g={unversionedId:"installation/create-an-account",id:"version-v4.27/installation/create-an-account",title:"Create an account",description:"If you want to manage your nodes via the platform through our app, you must",source:"@site/versioned_docs/version-v4.27/installation/create-an-account.md",sourceDirName:"installation",slug:"/installation/create-an-account",permalink:"/v4.27/installation/create-an-account",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/installation/create-an-account.md",tags:[],version:"v4.27",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/v4.27/installation"},next:{title:"Size a node",permalink:"/v4.27/installation/size-a-node"}},v={},b=[{value:"Delete an Account",id:"delete-an-account",level:2}],O={toc:b},h="wrapper";function w(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.yg)(h,y(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",s({},{id:"create-an-account"}),"Create an account"),(0,r.yg)("p",null,"If you want to manage your nodes via the platform through our app, you must\ncreate an account."),(0,r.yg)("p",null,"Creating an account is free and takes just two steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Go to ",(0,r.yg)("a",s({parentName:"li"},{href:"https://app.tenzir.com"}),"app.tenzir.com")),(0,r.yg)("li",{parentName:"ol"},"Sign in with your identity provider")),(0,r.yg)("p",null,"Congratulations, you now have an account and can can freely use the\n",(0,r.yg)("a",s({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Community Edition"),"."),(0,r.yg)("h2",s({},{id:"delete-an-account"}),"Delete an Account"),(0,r.yg)("p",null,"Delete your account as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Go to the ",(0,r.yg)("a",s({parentName:"li"},{href:"https://app.tenzir.com/account"}),"Account")," page."),(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("em",{parentName:"li"},"Delete Account"),"."),(0,r.yg)("li",{parentName:"ol"},"(Optionally) Leave a note explaining why you delete your account.")),(0,r.yg)("admonition",s({},{type:"warning"}),(0,r.yg)("p",{parentName:"admonition"},"Deleting your account will remove all data about you from our cloud platform.\nYou will also lose the ability to manage pipelines on your node.")),(0,r.yg)("p",null,"If you decide to come back, just re-create an account as described\nabove."))}w.isMDXComponent=!0}}]);