"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13017],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),s=i,g=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},50183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>y,toc:()=>v});var n=r(15680),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,a(t)),s=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const g={},f="Build the Docker image",y={unversionedId:"development/build-the-docker-image",id:"version-v4.20/development/build-the-docker-image",title:"Build the Docker image",description:"Our Dockerfile has two",source:"@site/versioned_docs/version-v4.20/development/build-the-docker-image.md",sourceDirName:"development",slug:"/development/build-the-docker-image",permalink:"/development/build-the-docker-image",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/development/build-the-docker-image.md",tags:[],version:"v4.20",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Build from source",permalink:"/development/build-from-source"},next:{title:"Write a Plugin",permalink:"/development/write-a-plugin"}},b={},v=[{value:"Build the production image",id:"build-the-production-image",level:2},{value:"Build the development image",id:"build-the-development-image",level:2}],h={toc:v},O="wrapper";function w(e){var t=e,{components:r}=t,i=s(t,["components"]);return(0,n.yg)(O,m(d(d({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"build-the-docker-image"}),"Build the Docker image"),(0,n.yg)("p",null,"Our ",(0,n.yg)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/Dockerfile"}),"Dockerfile")," has two\nstarting points: a ",(0,n.yg)("em",{parentName:"p"},"development")," and ",(0,n.yg)("em",{parentName:"p"},"production")," layer."),(0,n.yg)("p",null,"Before building the image, make sure to fetch all submodules:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"git clone --recursive https://github.com/tenzir/tenzir\ncd tenzir\ngit submodule update --init --recursive -- libtenzir plugins tenzir\n")),(0,n.yg)("h2",d({},{id:"build-the-production-image"}),"Build the production image"),(0,n.yg)("p",null,"The production image is optimized for size and security. This is the official\n",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir/tenzir")," image. From the repository root, build it as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"docker build -t tenzir/tenzir .\n")),(0,n.yg)("h2",d({},{id:"build-the-development-image"}),"Build the development image"),(0,n.yg)("p",null,"The development image ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir/tenzir-dev")," contains all build-time dependencies\nof Tenzir. It runs with a ",(0,n.yg)("inlineCode",{parentName:"p"},"root")," user to allow for building custom images that\nbuild additional Tenzir plugins. By default, Tenzir loads all installed plugins\nin our images."),(0,n.yg)("p",null,"Build the development image by specifying it as ",(0,n.yg)("inlineCode",{parentName:"p"},"--target"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"docker build -t tenzir/tenzir-dev --target development .\n")))}w.isMDXComponent=!0}}]);