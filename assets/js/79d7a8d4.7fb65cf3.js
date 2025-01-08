"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43919],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},77534:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(20053),i=t(36764),o=t(27449),s=t(75068),c=t(72183);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:n}){return r.createElement(o.A,{href:e,className:(0,a.A)("card padding--lg",l.cardContainer)},n)}function d({href:e,icon:n,title:t,description:i}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,a.A)("text--truncate",l.cardTitle),title:t},n," ",t),i&&r.createElement("p",{className:(0,a.A)("text--truncate",l.cardDescription),title:i},i))}function u({item:e}){var n;const t=(0,i._o)(e);return t?r.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(n=e.description)?n:(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function y({item:e}){var n,t;const a=(0,s.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(null!=(n=e.docId)?n:void 0);return r.createElement(d,{href:e.href,icon:a,title:e.label,description:null!=(t=e.description)?t:null==o?void 0:o.description})}function m({item:e}){switch(e.type){case"link":return r.createElement(y,{item:e});case"category":return r.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,N=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&v(e,t,n[t]);if(f)for(var t of f(n))h.call(n,t)&&v(e,t,n[t]);return e};function I({className:e}){const n=(0,i.$S)();return r.createElement(w,{items:n.items,className:e})}function w(e){const{items:n,className:t}=e;if(!n)return r.createElement(I,N({},e));const o=(0,i.d1)(n);return r.createElement("section",{className:(0,a.A)("row",t)},o.map(((e,n)=>r.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e})))))}},48874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var r=t(15680),a=t(77534),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&d(e,t,n[t]);return e},y=(e,n)=>o(e,s(n)),m=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const g={sidebar_position:1,sidebar_label:"Amazon Web Services"},f="Amazon Web Services",b={unversionedId:"integrations/amazon/README",id:"version-v4.25/integrations/amazon/README",title:"Amazon Web Services",description:"Tenzir integrates with the services from [Amazon Web",source:"@site/versioned_docs/version-v4.25/integrations/amazon/README.md",sourceDirName:"integrations/amazon",slug:"/integrations/amazon/",permalink:"/integrations/amazon/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.25/integrations/amazon/README.md",tags:[],version:"v4.25",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Amazon Web Services"},sidebar:"docsSidebar",previous:{title:"Integrations",permalink:"/integrations"},next:{title:"S3",permalink:"/integrations/amazon/s3/"}},h={},v=[{value:"Configuration",id:"configuration",level:2}],N={toc:v},I="wrapper";function w(e){var n=e,{components:t}=n,i=m(n,["components"]);return(0,r.yg)(I,y(u(u({},N),i),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"amazon-web-services"}),"Amazon Web Services"),(0,r.yg)("p",null,"Tenzir integrates with the services from ",(0,r.yg)("a",u({parentName:"p"},{href:"https://aws.amazon.com"}),"Amazon Web\nServices")," listed below."),(0,r.yg)("h2",u({},{id:"configuration"}),"Configuration"),(0,r.yg)("p",null,"To interact with AWS services, you need to provide appropriate credentials. This\ndefaults to using AWS's ",(0,r.yg)("a",u({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"default credentials provider\nchain"),"."),(0,r.yg)("p",null,"Make sure to configure AWS credentials for the same user account that runs\n",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir-node"),". The AWS CLI creates configuration files for the\ncurrent user under ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.aws"),", which can only be read by the same user account."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir-node")," systemd unit by default creates a ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir")," user and runs as\nthat user, meaning that the AWS credentials must also be configured for that\nuser. The directory ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.aws")," must be readable for the ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir")," user."),(0,r.yg)("p",null,"If a config file ",(0,r.yg)("inlineCode",{parentName:"p"},"<prefix>/etc/tenzir/plugin/$PLUGIN.yaml")," or\n",(0,r.yg)("inlineCode",{parentName:"p"},"~/.config/tenzir/plugin/$PLUGIN.yaml")," exists, it is always preferred over the\ndefault AWS credentials. Here, ",(0,r.yg)("inlineCode",{parentName:"p"},"$PLUGIN")," is the Tenzir plugin name, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"s3"),"\nor ",(0,r.yg)("inlineCode",{parentName:"p"},"sqs"),". The configuration file must have the following format:"),(0,r.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,r.yg)("code",u({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"access-key"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-access-key")),"\n",(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"secret-key"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-secret-key")),"\n",(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"session-token"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-session-token (optional)"))),(0,r.yg)("button",u({parentName:"pre"},{type:"button",data:"access-key: your-access-key\nsecret-key: your-secret-key\nsession-token: your-session-token (optional)",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,r.yg)("span",u({parentName:"button"},{className:"ready"})),(0,r.yg)("span",u({parentName:"button"},{className:"success"}))),(0,r.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,r.yg)(a.A,{mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);