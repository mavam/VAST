"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82981],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77534:(e,n,t)=>{t.d(n,{A:()=>E});var o=t(96540),r=t(20053),i=t(36764),a=t(27449),l=t(75068),c=t(72183);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:n}){return o.createElement(a.A,{href:e,className:(0,r.A)("card padding--lg",s.cardContainer)},n)}function d({href:e,icon:n,title:t,description:i}){return o.createElement(p,{href:e},o.createElement("h2",{className:(0,r.A)("text--truncate",s.cardTitle),title:t},n," ",t),i&&o.createElement("p",{className:(0,r.A)("text--truncate",s.cardDescription),title:i},i))}function u({item:e}){var n;const t=(0,i._o)(e);return t?o.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(n=e.description)?n:(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var n,t;const r=(0,l.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(null!=(n=e.docId)?n:void 0);return o.createElement(d,{href:e.href,icon:r,title:e.label,description:null!=(t=e.description)?t:null==a?void 0:a.description})}function f({item:e}){switch(e.type){case"link":return o.createElement(m,{item:e});case"category":return o.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n)=>{for(var t in n||(n={}))v.call(n,t)&&b(e,t,n[t]);if(g)for(var t of g(n))h.call(n,t)&&b(e,t,n[t]);return e};function w({className:e}){const n=(0,i.$S)();return o.createElement(E,{items:n.items,className:e})}function E(e){const{items:n,className:t}=e;if(!n)return o.createElement(w,O({},e));const a=(0,i.d1)(n);return o.createElement("section",{className:(0,r.A)("row",t)},a.map(((e,n)=>o.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},70146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>g,default:()=>E,frontMatter:()=>y,metadata:()=>v,toc:()=>b});var o=t(15680),r=t(77534),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&d(e,t,n[t]);return e},m=(e,n)=>a(e,l(n)),f=(e,n)=>{var t={};for(var o in e)s.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))n.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t};const y={sidebar_position:2},g="Deploy a node",v={unversionedId:"installation/deploy-a-node/README",id:"version-v4.26/installation/deploy-a-node/README",title:"Deploy a node",description:"Deploying a node entails provisioning a node via the platform and then",source:"@site/versioned_docs/version-v4.26/installation/deploy-a-node/README.md",sourceDirName:"installation/deploy-a-node",slug:"/installation/deploy-a-node/",permalink:"/v4.26/installation/deploy-a-node/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/installation/deploy-a-node/README.md",tags:[],version:"v4.26",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Size a node",permalink:"/v4.26/installation/size-a-node"},next:{title:"Ansible",permalink:"/v4.26/installation/deploy-a-node/ansible"}},h={},b=[{value:"Provision a node",id:"provision-a-node",level:2},{value:"Install a node",id:"install-a-node",level:2},{value:"Configure a node",id:"configure-a-node",level:2}],O={toc:b},w="wrapper";function E(e){var n=e,{components:t}=n,i=f(n,["components"]);return(0,o.yg)(w,m(u(u({},O),i),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",u({},{id:"deploy-a-node"}),"Deploy a node"),(0,o.yg)("p",null,"Deploying a node entails provisioning a node via the platform and then\ninstalling it in your environment of choice."),(0,o.yg)("h2",u({},{id:"provision-a-node"}),"Provision a node"),(0,o.yg)("p",null,"To deploy a self-hosted node, begin with provisioning one in the platform:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Visit ",(0,o.yg)("a",u({parentName:"li"},{href:"https://app.tenzir.com/pipelines"}),"https://app.tenzir.com/pipelines"),"."),(0,o.yg)("li",{parentName:"ol"},"Click the ",(0,o.yg)("em",{parentName:"li"},"Add node")," button in the left pane and select ",(0,o.yg)("em",{parentName:"li"},"self-hosted node"),"."),(0,o.yg)("li",{parentName:"ol"},"Enter a name for your node and click ",(0,o.yg)("em",{parentName:"li"},"Add node"),".")),(0,o.yg)("h2",u({},{id:"install-a-node"}),"Install a node"),(0,o.yg)("p",null,"Next, choose how you would like to deploy your node from the available options\nbelow."),(0,o.yg)(r.A,{mdxType:"DocCardList"}),(0,o.yg)("h2",u({},{id:"configure-a-node"}),"Configure a node"),(0,o.yg)("p",null,"See the documentation on ",(0,o.yg)("a",u({parentName:"p"},{href:"/v4.26/configuration#configuration-files"}),"configuration\nfiles")," along with the example\nconfiguration to understand how you can configure yoru node."),(0,o.yg)("admonition",u({},{title:"Accepting incoming connections",type:"note"}),(0,o.yg)("p",{parentName:"admonition"},"When your node starts it will listen for node-to-node connections on the TCP\nendpoint ",(0,o.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5158"),". Select a different endpoint via the ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint"),"\noption. For example, to bind to an IPv6 address use ",(0,o.yg)("inlineCode",{parentName:"p"},"[::1]:42000"),"."),(0,o.yg)("p",{parentName:"admonition"},"Set ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," to disable the endpoint, making the node\nexclusively accessible through the Tenzir Platform. This effectively prevents\nconnections from other ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir-node")," processes.")))}E.isMDXComponent=!0}}]);