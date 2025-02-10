"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35673],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=o,u=d["".concat(l,".").concat(g)]||d[g]||y[g]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},29744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>b,toc:()=>h});var a=t(15680),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(p)for(var t of p(n))s.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>r(e,i(n)),g=(e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const u={},m="load_zmq",b={unversionedId:"tql2/operators/load_zmq",id:"version-v4.27/tql2/operators/load_zmq",title:"load_zmq",description:"Receives ZeroMQ messages.",source:"@site/versioned_docs/version-v4.27/tql2/operators/load_zmq.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_zmq",permalink:"/v4.27/tql2/operators/load_zmq",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/load_zmq.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_udp",permalink:"/v4.27/tql2/operators/load_udp"},next:{title:"local",permalink:"/v4.27/tql2/operators/local"}},I={},h=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: str (optional)</code>",id:"endpoint-str-optional",level:3},{value:"<code>filter = str (optional)</code>",id:"filter--str-optional",level:3},{value:"<code>listen = bool (optional)</code>",id:"listen--bool-optional",level:3},{value:"<code>connect = bool (optional)</code>",id:"connect--bool-optional",level:3},{value:"<code>monitor = bool (optional)</code>",id:"monitor--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Interpret ZeroMQ messages as JSON",id:"interpret-zeromq-messages-as-json",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:h},v="wrapper";function f(e){var n=e,{components:t}=n,o=g(n,["components"]);return(0,a.yg)(v,y(d(d({},N),o),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"load_zmq"}),"load_zmq"),(0,a.yg)("p",null,"Receives ZeroMQ messages."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_zmq"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [endpoint"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, filter"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, listen"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, connect"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, monitor"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:"load_zmq [endpoint:str, filter=str, listen=bool, connect=bool, monitor=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"load_zmq")," operator processes the bytes in a ZeroMQ message received by a\n",(0,a.yg)("inlineCode",{parentName:"p"},"SUB")," socket."),(0,a.yg)("p",null,"Indpendent of the socket type, the ",(0,a.yg)("inlineCode",{parentName:"p"},"load_zmq")," operator supports specfiying the\ndirection of connection establishment with ",(0,a.yg)("inlineCode",{parentName:"p"},"listen")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"connect"),". This can be\nhelpful to work around firewall restrictions and fit into broader set of\nexisting ZeroMQ applications."),(0,a.yg)("p",null,"With the ",(0,a.yg)("inlineCode",{parentName:"p"},"monitor")," option, you can activate message buffering for TCP\nsockets that hold off sending messages until ",(0,a.yg)("em",{parentName:"p"},"at least one")," remote peer has\nconnected. This can be helpful when you want to delay publishing until you have\none connected subscriber, e.g., when the publisher spawns before any subscriber\nexists."),(0,a.yg)("h3",d({},{id:"endpoint-str-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"endpoint: str (optional)")),(0,a.yg)("p",null,"The endpoint for connecting to or listening on a ZeroMQ socket."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:5555"),"."),(0,a.yg)("h3",d({},{id:"filter--str-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"filter = str (optional)")),(0,a.yg)("p",null,"Installs a filter for the ZeroMQ ",(0,a.yg)("inlineCode",{parentName:"p"},"SUB")," socket at the source. Filting in ZeroMQ\nmeans performing a prefix-match on the raw bytes of the entire message."),(0,a.yg)("p",null,"Defaults to the empty string, which is equivalent to no filtering."),(0,a.yg)("h3",d({},{id:"listen--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"listen = bool (optional)")),(0,a.yg)("p",null,"Bind to the ZeroMQ socket."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h3",d({},{id:"connect--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"connect = bool (optional)")),(0,a.yg)("p",null,"Connect to the ZeroMQ socket."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("h3",d({},{id:"monitor--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"monitor = bool (optional)")),(0,a.yg)("p",null,"Monitors a 0mq socket over TCP until the remote side establishes a connection."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("h3",d({},{id:"interpret-zeromq-messages-as-json"}),"Interpret ZeroMQ messages as JSON"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_zmq"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1.2.3.4:56789"')),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:'load_zmq "1.2.3.4:56789"\nread_json',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",d({parentName:"p"},{href:"/v4.27/tql2/operators/save_zmq"}),(0,a.yg)("inlineCode",{parentName:"a"},"save_zmq"))))}f.isMDXComponent=!0}}]);