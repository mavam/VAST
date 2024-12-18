"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84684],{71704:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>I,contentTitle:()=>b,default:()=>f,frontMatter:()=>h,metadata:()=>N,toc:()=>v});var o=n(15680),t=n(91461),l=n(64909),p=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))d.call(a,n)&&y(e,n,a[n]);if(s)for(var n of s(a))c.call(a,n)&&y(e,n,a[n]);return e},u=(e,a)=>i(e,r(a)),m=(e,a)=>{var n={};for(var o in e)d.call(e,o)&&a.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))a.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};const h={},b="load_amqp",N={unversionedId:"tql2/operators/load_amqp",id:"tql2/operators/load_amqp",title:"load_amqp",description:"Loads a byte stream via AMQP messages.",source:"@site/docs/tql2/operators/load_amqp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_amqp",permalink:"/next/tql2/operators/load_amqp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/load_amqp.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"legacy",permalink:"/next/tql2/operators/legacy"},next:{title:"load_azure_blob_storage",permalink:"/next/tql2/operators/load_azure_blob_storage"}},I={},v=[{value:"Description",id:"description",level:2},{value:"<code>url: str (optional)</code>",id:"url-str-optional",level:3},{value:"<code>channel = int (optional)</code>",id:"channel--int-optional",level:3},{value:"<code>exchange = str (optional)</code>",id:"exchange--str-optional",level:3},{value:"<code>routing_key = str (optional)</code>",id:"routing_key--str-optional",level:3},{value:"<code>options = record (optional)</code>",id:"options--record-optional",level:3},{value:"<code>queue = str (optional)</code>",id:"queue--str-optional",level:3},{value:"<code>passive = bool (optional)</code>",id:"passive--bool-optional",level:3},{value:"<code>durable = bool (optional)</code>",id:"durable--bool-optional",level:3},{value:"<code>exclusive = bool (optional)</code>",id:"exclusive--bool-optional",level:3},{value:"<code>no_auto_delete = bool (optional)</code>",id:"no_auto_delete--bool-optional",level:3},{value:"<code>no_local = bool (optional)</code>",id:"no_local--bool-optional",level:3},{value:"<code>ack = bool (optional)</code>",id:"ack--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Consume a message from a specified AMQP queue",id:"consume-a-message-from-a-specified-amqp-queue",level:3}],D={toc:v},x="wrapper";function f(e){var a=e,{components:n}=a,p=m(a,["components"]);return(0,o.yg)(x,u(g(g({},D),p),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",g({},{id:"load_amqp"}),"load_amqp"),(0,o.yg)("p",null,"Loads a byte stream via AMQP messages."),(0,o.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,o.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",g({parentName:"code"},{"data-line":""}),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_amqp"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [url"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, channel"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, exchange"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, routing_key"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, queue"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,o.yg)("span",g({parentName:"code"},{"data-line":""}),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"          options"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, passive"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, durable"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, exclusive"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,o.yg)("span",g({parentName:"code"},{"data-line":""}),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"          no_auto_delete"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, no_local"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, ack"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,o.yg)("button",g({parentName:"pre"},{type:"button",data:"load_amqp [url:str, channel=int, exchange=str, routing_key=str, queue=str,\n          options=record, passive=bool, durable=bool, exclusive=bool,\n          no_auto_delete=bool, no_local=bool, ack=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,o.yg)("span",g({parentName:"button"},{className:"ready"})),(0,o.yg)("span",g({parentName:"button"},{className:"success"}))),(0,o.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,o.yg)("h2",g({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"load_amqp")," operator is an ",(0,o.yg)("a",g({parentName:"p"},{href:"https://www.amqp.org/"}),"AMQP")," 0-9-1 client to\nreceive messages from a queue."),(0,o.yg)("h3",g({},{id:"url-str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"url: str (optional)")),(0,o.yg)("p",null,"A URL that specifies the AMQP server. The URL must have the following format:"),(0,o.yg)("pre",null,(0,o.yg)("code",g({parentName:"pre"},{}),"amqp://[USERNAME[:PASSWORD]@]HOSTNAME[:PORT]/[VHOST]\n")),(0,o.yg)("p",null,"When the URL is present, it will overwrite the corresponding values of the\nconfiguration options."),(0,o.yg)("h3",g({},{id:"channel--int-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"channel = int (optional)")),(0,o.yg)("p",null,"The channel number to use."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"1"),"."),(0,o.yg)("h3",g({},{id:"exchange--str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"exchange = str (optional)")),(0,o.yg)("p",null,"The exchange to interact with."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},'"amq.direct"'),"."),(0,o.yg)("h3",g({},{id:"routing_key--str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"routing_key = str (optional)")),(0,o.yg)("p",null,"For the loader, the name of the routing key to bind a queue to an exchange. For the saver, the routing key to publish messages with."),(0,o.yg)("p",null,"Defaults to the empty string."),(0,o.yg)("h3",g({},{id:"options--record-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"options = record (optional)")),(0,o.yg)("p",null,"A comma-separated list of key-value configuration options for RabbitMQ, e.g.,\n",(0,o.yg)("inlineCode",{parentName:"p"},'{ max_channels: 42, frame_size: 1024, sasl_method: "external" }'),". The example\n",(0,o.yg)("inlineCode",{parentName:"p"},"amqp.yaml")," file below shows the available options:"),(0,o.yg)(t.A,{language:"yaml",mdxType:"CodeBlock"},l.A),(0,o.yg)("p",null,"We recommend factoring the environment-specific options into the configuration\nfile so that they are not cluttering the pipeline definition."),(0,o.yg)("h3",g({},{id:"queue--str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"queue = str (optional)")),(0,o.yg)("p",null,"The name of the queue to declare and then bind to."),(0,o.yg)("p",null,"Defaults to the empty string, resulting in auto-generated queue names, such as\n",(0,o.yg)("inlineCode",{parentName:"p"},'"amq.gen-XNTLF0FwabIn9FFKKtQHzg"'),"."),(0,o.yg)("h3",g({},{id:"passive--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"passive = bool (optional)")),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", the server will reply with OK if an exchange already exists with the\nsame name, and raise an error otherwise."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",g({},{id:"durable--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"durable = bool (optional)")),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," when creating a new exchange, the exchange will be marked as durable.\nDurable exchanges remain active when a server restarts. Non-durable exchanges\n(transient exchanges) are purged if/when a server restarts."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",g({},{id:"exclusive--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"exclusive = bool (optional)")),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", marks the queue as exclusive. Exclusive queues may only be accessed by\nthe current connection, and are deleted when that connection closes. Passive\ndeclaration of an exclusive queue by other connections are not allowed."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",g({},{id:"no_auto_delete--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"no_auto_delete = bool (optional)")),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", the exchange will ",(0,o.yg)("em",{parentName:"p"},"not")," be deleted when all queues have finished using\nit."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",g({},{id:"no_local--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"no_local = bool (optional)")),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", the server will not send messages to the connection that published them."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",g({},{id:"ack--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"ack = bool (optional)")),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", the server expects acknowledgements for messages. Otherwise, when a\nmessage is delivered to the client the server assumes the delivery will succeed\nand immediately dequeues it. This functionality may decrease performance at\nand improve reliability. Without this flag, messages can get lost if a client\ndies before they are delivered to the application."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h2",g({},{id:"examples"}),"Examples"),(0,o.yg)("h3",g({},{id:"consume-a-message-from-a-specified-amqp-queue"}),"Consume a message from a specified AMQP queue"),(0,o.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,o.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",g({parentName:"code"},{"data-line":""}),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_amqp"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "amqp://admin:pass@0.0.0.1:5672/vhost"'),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", queue"),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"foo"')),"\n",(0,o.yg)("span",g({parentName:"code"},{"data-line":""}),(0,o.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))),(0,o.yg)("button",g({parentName:"pre"},{type:"button",data:'load_amqp "amqp://admin:pass@0.0.0.1:5672/vhost", queue="foo"\nread_json',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,o.yg)("span",g({parentName:"button"},{className:"ready"})),(0,o.yg)("span",g({parentName:"button"},{className:"success"}))),(0,o.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}f.isMDXComponent=!0},64909:(e,a,n)=>{n.d(a,{A:()=>o});const o="hostname: 127.0.0.1\nport: 5672\nssl: false\nvhost: /\nmax_channels: 2047\nframe_size: 131072\nheartbeat: 0\nsasl_method: plain\nusername: guest\npassword: guest\n"}}]);