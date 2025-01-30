"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38566],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>O,frontMatter:()=>y,metadata:()=>f,toc:()=>b});var r=t(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),g=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const y={},m="Azure",f={unversionedId:"installation/deploy-a-node/azure/README",id:"version-v4.26/installation/deploy-a-node/azure/README",title:"Azure",description:"To run a node in Azure, we recommend using [Azure Container Instances",source:"@site/versioned_docs/version-v4.26/installation/deploy-a-node/azure/README.md",sourceDirName:"installation/deploy-a-node/azure",slug:"/installation/deploy-a-node/azure/",permalink:"/v4.26/installation/deploy-a-node/azure/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/installation/deploy-a-node/azure/README.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Ansible",permalink:"/v4.26/installation/deploy-a-node/ansible"},next:{title:"Docker",permalink:"/v4.26/installation/deploy-a-node/docker"}},v={},b=[{value:"Azure Container Instances (ACI)",id:"azure-container-instances-aci",level:2},{value:"Create a new container instance",id:"create-a-new-container-instance",level:3},{value:"Basics",id:"basics",level:3},{value:"Networking",id:"networking",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Create",id:"create",level:3}],h={toc:b},w="wrapper";function O(e){var n=e,{components:a}=n,o=g(n,["components"]);return(0,r.yg)(w,d(u(u({},h),o),{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"azure"}),"Azure"),(0,r.yg)("p",null,"To run a node in Azure, we recommend using ",(0,r.yg)("a",u({parentName:"p"},{href:"https://azure.microsoft.com/en-us/products/container-instances"}),"Azure Container Instances\n(ACI)"),", which\nallows you to run Docker containers without having to setup VMs."),(0,r.yg)("h2",u({},{id:"azure-container-instances-aci"}),"Azure Container Instances (ACI)"),(0,r.yg)("p",null,"Prior to getting started, you need a valid ",(0,r.yg)("inlineCode",{parentName:"p"},"TENZIR_TOKEN")," that you can obtain\nafter ",(0,r.yg)("a",u({parentName:"p"},{href:"/v4.26/installation/deploy-a-node/"}),"provisioning a node")," and downloading the Docker Compose\nconfiguraiton file."),(0,r.yg)("h3",u({},{id:"create-a-new-container-instance"}),"Create a new container instance"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Open ",(0,r.yg)("a",u({parentName:"li"},{href:"https://portal.azure.com/"}),"https://portal.azure.com/"),"."),(0,r.yg)("li",{parentName:"ol"},"Navigate to the ",(0,r.yg)("em",{parentName:"li"},"Container instances"),"."),(0,r.yg)("li",{parentName:"ol"},"Click the ",(0,r.yg)("em",{parentName:"li"},"Create")," button.")),(0,r.yg)("h3",u({},{id:"basics"}),"Basics"),(0,r.yg)("p",null,"In the ",(0,r.yg)("em",{parentName:"p"},"Basics")," tab, perform the following action:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Choose a container name."),(0,r.yg)("li",{parentName:"ol"},"For ",(0,r.yg)("em",{parentName:"li"},"Image source"),", select ",(0,r.yg)("em",{parentName:"li"},"Other registry"),"."),(0,r.yg)("li",{parentName:"ol"},"For ",(0,r.yg)("em",{parentName:"li"},"Image"),", enter ",(0,r.yg)("inlineCode",{parentName:"li"},"tenzir/tenzir-node"),".")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Basics",src:t(18358).A,width:"2038",height:"2878"})),(0,r.yg)("h3",u({},{id:"networking"}),"Networking"),(0,r.yg)("p",null,"In the ",(0,r.yg)("em",{parentName:"p"},"Networking")," tab, configure the ports you plan to use for pipeliens that\nreceive incoming connections."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Networking",src:t(89133).A,width:"2038",height:"1676"})),(0,r.yg)("h3",u({},{id:"advanced"}),"Advanced"),(0,r.yg)("p",null,"In the ",(0,r.yg)("em",{parentName:"p"},"Advanced")," tab, enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"TENZIR_TOKEN")," environment variable from your\nDocker Compose file."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Advanced",src:t(97029).A,width:"2038",height:"1676"})),(0,r.yg)("h3",u({},{id:"create"}),"Create"),(0,r.yg)("p",null,"Once you've completed the configuration, click the ",(0,r.yg)("em",{parentName:"p"},"Create")," button. Your node is\nnow up and running."))}O.isMDXComponent=!0},97029:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/advanced-2113bb4bcc7c940955b5b4508b5e9993.png"},18358:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/basics-d8d1ec749399c1e73e8f0b6058b9fc6e.png"},89133:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/networking-d36c10ed8ffdfcfd5f4be4bca904c664.png"}}]);