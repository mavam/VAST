"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70036],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,u=d["".concat(s,".").concat(g)]||d[g]||y[g]||r;return t?a.createElement(u,p(p({ref:n},c),{},{components:t})):a.createElement(u,p({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<r;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>m,default:()=>D,frontMatter:()=>u,metadata:()=>b,toc:()=>v});var a=t(15680),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>r(e,p(n)),g=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t};const u={},m="save_zmq",b={unversionedId:"tql2/operators/save_zmq",id:"version-v4.27/tql2/operators/save_zmq",title:"save_zmq",description:"Sends bytes as ZeroMQ messages.",source:"@site/versioned_docs/version-v4.27/tql2/operators/save_zmq.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_zmq",permalink:"/v4.27/tql2/operators/save_zmq",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/save_zmq.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_udp",permalink:"/v4.27/tql2/operators/save_udp"},next:{title:"schemas",permalink:"/v4.27/tql2/operators/schemas"}},I={},v=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: str (optional)</code>",id:"endpoint-str-optional",level:3},{value:"<code>listen = bool (optional)</code>",id:"listen--bool-optional",level:3},{value:"<code>connect = bool (optional)</code>",id:"connect--bool-optional",level:3},{value:"<code>monitor = bool (optional)</code>",id:"monitor--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Publish events by connecting to a PUB socket",id:"publish-events-by-connecting-to-a-pub-socket",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:v},N="wrapper";function D(e){var n=e,{components:t}=n,o=g(n,["components"]);return(0,a.yg)(N,y(d(d({},h),o),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"save_zmq"}),"save_zmq"),(0,a.yg)("p",null,"Sends bytes as ZeroMQ messages."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_zmq"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [endpoint"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, listen"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, connect"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, monitor"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:"save_zmq [endpoint:str, listen=bool, connect=bool, monitor=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"save_zmq")," operator sends bytes as a ZeroMQ message via a ",(0,a.yg)("inlineCode",{parentName:"p"},"PUB")," socket."),(0,a.yg)("p",null,"Indpendent of the socket type, the ",(0,a.yg)("inlineCode",{parentName:"p"},"save_zmq")," operator supports specfiying the\ndirection of connection establishment with ",(0,a.yg)("inlineCode",{parentName:"p"},"listen")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"connect"),". This can be\nhelpful to work around firewall restrictions and fit into broader set of\nexisting ZeroMQ applications."),(0,a.yg)("p",null,"With the ",(0,a.yg)("inlineCode",{parentName:"p"},"monitor")," option, you can activate message buffering for TCP\nsockets that hold off sending messages until ",(0,a.yg)("em",{parentName:"p"},"at least one")," remote peer has\nconnected. This can be helpful when you want to delay publishing until you have\none connected subscriber, e.g., when the publisher spawns before any subscriber\nexists."),(0,a.yg)("h3",d({},{id:"endpoint-str-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"endpoint: str (optional)")),(0,a.yg)("p",null,"The endpoint for connecting to or listening on a ZeroMQ socket."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:5555"),"."),(0,a.yg)("h3",d({},{id:"listen--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"listen = bool (optional)")),(0,a.yg)("p",null,"Bind to the ZeroMQ socket."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("h3",d({},{id:"connect--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"connect = bool (optional)")),(0,a.yg)("p",null,"Connect to the ZeroMQ socket."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h3",d({},{id:"monitor--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"monitor = bool (optional)")),(0,a.yg)("p",null,"Monitors a 0mq socket over TCP until the remote side establishes a connection."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("h3",d({},{id:"publish-events-by-connecting-to-a-pub-socket"}),"Publish events by connecting to a PUB socket"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 42"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_csv")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_zmq"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," connect"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"true"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:"from {x: 42}\nwrite_csv\nsave_zmq connect=true",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",d({parentName:"p"},{href:"/v4.27/tql2/operators/load_zmq"}),(0,a.yg)("inlineCode",{parentName:"a"},"load_zmq"))))}D.isMDXComponent=!0}}]);