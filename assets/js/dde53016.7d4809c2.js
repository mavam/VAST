"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24057],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||y[u]||o;return a?n.createElement(g,s(s({ref:t},l),{},{components:a})):n.createElement(g,s({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77534:(e,t,a)=>{a.d(t,{A:()=>M});var n=a(96540),r=a(20053),o=a(36764),s=a(27449),i=a(75068),p=a(72183);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l({href:e,children:t}){return n.createElement(s.A,{href:e,className:(0,r.A)("card padding--lg",c.cardContainer)},t)}function d({href:e,icon:t,title:a,description:o}){return n.createElement(l,{href:e},n.createElement("h2",{className:(0,r.A)("text--truncate",c.cardTitle),title:a},t," ",a),o&&n.createElement("p",{className:(0,r.A)("text--truncate",c.cardDescription),title:o},o))}function y({item:e}){var t;const a=(0,o._o)(e);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,p.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function u({item:e}){var t,a;const r=(0,i.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null!=(a=e.description)?a:null==s?void 0:s.description})}function g({item:e}){switch(e.type){case"link":return n.createElement(u,{item:e});case"category":return n.createElement(y,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var m=Object.defineProperty,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,N=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&f(e,a,t[a]);if(h)for(var a of h(t))I.call(t,a)&&f(e,a,t[a]);return e};function D({className:e}){const t=(0,o.$S)();return n.createElement(M,{items:t.items,className:e})}function M(e){const{items:t,className:a}=e;if(!t)return n.createElement(D,N({},e));const s=(0,o.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},78615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>h,default:()=>M,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var n=a(15680),r=a(77534),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))l.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>s(e,i(t)),g=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a};const m={},h="User Guides",b={unversionedId:"usage",id:"version-v4.26/usage",title:"User Guides",description:"These usage guides walk you through typical Tenzir use cases.",source:"@site/versioned_docs/version-v4.26/usage.md",sourceDirName:".",slug:"/usage",permalink:"/v4.26/usage",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/usage.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install a Package",permalink:"/v4.26/installation/install-a-package"},next:{title:"Run pipelines",permalink:"/v4.26/usage/run-pipelines/"}},I={},f=[{value:"Datasets",id:"datasets",level:2},{value:"M57",id:"m57",level:3}],N={toc:f},D="wrapper";function M(e){var t=e,{components:a}=t,o=g(t,["components"]);return(0,n.yg)(D,u(y(y({},N),o),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"user-guides"}),"User Guides"),(0,n.yg)("p",null,"These usage guides walk you through typical Tenzir use cases."),(0,n.yg)("h2",y({},{id:"datasets"}),"Datasets"),(0,n.yg)("p",null,"Throughout the guides, we use publicly available datasets so that you can follow\nalong."),(0,n.yg)("h3",y({},{id:"m57"}),"M57"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",y({parentName:"p"},{href:"https://digitalcorpora.org/corpora/scenarios/m57-patents-scenario/"}),"M57 Patents\nScenario"),"\ncontains large amounts of diverse network traffic. We enriched the PCAP from Nov\n18, 2009, by adding malicious traffic from\n",(0,n.yg)("a",y({parentName:"p"},{href:"https://malware-traffic-analysis.net"}),"malware-traffic-analysis.net"),". We\nadjusted all packet timestamp to 2021. Thereafter, we ran\n",(0,n.yg)("a",y({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," v5.2.0 and ",(0,n.yg)("a",y({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," 6.0.10 to\nobtain structured logs."),(0,n.yg)("p",null,"The dataset includes the following files:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",y({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/README.md"}),"README.md")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",y({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst"}),"zeek-all.log.zst")," (41 MB)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",y({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/suricata.json.zst"}),"suricata.json.zst")," (57 MB)")),(0,n.yg)("p",null,"For the following examples we assume that you have imported the demo data in your\nnode using the following two pipelines. First the Suricata logs:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "https://storage.googleapis.com/tenzir-datasets/M57/suricata.json.zst"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"decompress"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zstd"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"!="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.stats"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"import"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'load_http "https://storage.googleapis.com/tenzir-datasets/M57/suricata.json.zst"\ndecompress "zstd"\nread_suricata\nwhere @name != "suricata.stats"\nimport',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"Then the Zeek logs:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"decompress"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zstd"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_zeek_tsv")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"import"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'load_http "https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst"\ndecompress "zstd"\nread_zeek_tsv\nimport',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"Note that the demo node already comes with an ",(0,n.yg)("a",y({parentName:"p"},{href:"https://github.com/tenzir/library/blob/main/demo-node/package.yaml"}),"installed package that ingests\nthis data"),"\nfor you."),(0,n.yg)(r.A,{mdxType:"DocCardList"}))}M.isMDXComponent=!0}}]);