"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97437],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>I,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var r=n(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),y=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_position:9},g="Request for Comments (RFC)",b={unversionedId:"contribution/rfc",id:"version-v4.25/contribution/rfc",title:"Request for Comments (RFC)",description:"We cultivate an open RFC process around evolutionary topics relating to Tenzir.",source:"@site/versioned_docs/version-v4.25/contribution/rfc.md",sourceDirName:"contribution",slug:"/contribution/rfc",permalink:"/contribution/rfc",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.25/contribution/rfc.md",tags:[],version:"v4.25",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Documentation",permalink:"/contribution/documentation"},next:{title:"Security Policy",permalink:"/contribution/security"}},h={},f=[{value:"Provide comments to an open RFC",id:"provide-comments-to-an-open-rfc",level:2},{value:"Add a new RFC",id:"add-a-new-rfc",level:2}],v={toc:f},N="wrapper";function I(e){var t=e,{components:n}=t,a=y(t,["components"]);return(0,r.yg)(N,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"request-for-comments-rfc"}),"Request for Comments (RFC)"),(0,r.yg)("p",null,"We cultivate an open RFC process around evolutionary topics relating to Tenzir.\nThe objective is to encourage participation of the community in the process."),(0,r.yg)("p",null,"For this reason, we include RFCs in the Tenzir repository in the top-level\n",(0,r.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/rfc"}),"rfc")," directory. Engaging with an open RFC centers around the\ndiscussion in pull requests, which we describe below."),(0,r.yg)("p",null,"For all RFCs, we aim for an acceptance period of ",(0,r.yg)("strong",{parentName:"p"},"30 days"),"."),(0,r.yg)("h2",u({},{id:"provide-comments-to-an-open-rfc"}),"Provide comments to an open RFC"),(0,r.yg)("p",null,"Every RFC has a corresponding pull request with an ",(0,r.yg)("inlineCode",{parentName:"p"},"rfp")," label."),(0,r.yg)("p",null,"Here are the direct links to open, closed, or all RFC pull requests:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/pulls?q=is%3Apr+is%3Aopen+label%3Arfc"}),"Open RFCs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/pulls?q=is%3Apr+label%3Arfc+is%3Aclosed"}),"Closed RFCs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/pulls?q=is%3Apr+label%3Arfc"}),"All RFCs"))),(0,r.yg)("h2",u({},{id:"add-a-new-rfc"}),"Add a new RFC"),(0,r.yg)("p",null,"The workflow to add a new RFC works as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new RFC directory (increase the counter) and copy the template:"),(0,r.yg)("figure",u({parentName:"li"},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,r.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#8B949E"}}),"# Assumption: the last proposal is 041-proposal")),"\n",(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"mkdir"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," 042-proposal-name")),"\n",(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"cp"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -r"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," 000-template"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," 042-proposal-name"))),(0,r.yg)("button",u({parentName:"pre"},{type:"button",data:"# Assumption: the last proposal is 041-proposal\nmkdir 042-proposal-name\ncp -r 000-template 042-proposal-name",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,r.yg)("span",u({parentName:"button"},{className:"ready"})),(0,r.yg)("span",u({parentName:"button"},{className:"success"}))),(0,r.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    ')))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Write the proposal in ",(0,r.yg)("a",u({parentName:"p"},{href:"https://github.github.com/gfm/"}),"GitHub Flavored Markdown"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/pulls"}),"Open a pull request")," and add the ",(0,r.yg)("inlineCode",{parentName:"p"},"rfc")," label.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Share the pull request in the ",(0,r.yg)("a",u({parentName:"p"},{href:"https://docs.tenzir.com/discord"}),"Community\nDiscord")," and other stake holders that may\nprovide valuable feedback.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Actively drive the discussion forward and point out the expected date of\nclosure to keep a healthy engagement. Aim for resolving all outstanding\ndiscussion threads close to the targeted acceptance date.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Merge the pull request once the discussion plateaus and all comments have\nbeen resolved."))),(0,r.yg)("p",null,"In you need to re-open the discussion after a pull request has been merged,\ncreate a follow-up pull request with the proposed changes."))}I.isMDXComponent=!0}}]);