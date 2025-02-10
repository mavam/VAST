"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11134],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>u});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,u=c["".concat(l,".").concat(g)]||c[g]||y[g]||i;return n?t.createElement(u,r(r({ref:a},d),{},{components:n})):t.createElement(u,r({ref:a},d))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78754:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>m,default:()=>C,frontMatter:()=>u,metadata:()=>N,toc:()=>b});var t=n(15680),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&d(e,n,a[n]);if(p)for(var n of p(a))s.call(a,n)&&d(e,n,a[n]);return e},y=(e,a)=>i(e,r(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const u={},m="load_kafka",N={unversionedId:"tql2/operators/load_kafka",id:"version-v4.27/tql2/operators/load_kafka",title:"load_kafka",description:"Loads a byte stream from a Apache Kafka topic.",source:"@site/versioned_docs/version-v4.27/tql2/operators/load_kafka.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_kafka",permalink:"/v4.27/tql2/operators/load_kafka",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/load_kafka.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_http",permalink:"/v4.27/tql2/operators/load_http"},next:{title:"load_nic",permalink:"/v4.27/tql2/operators/load_nic"}},f={},b=[{value:"Description",id:"description",level:2},{value:"<code>topic: string</code>",id:"topic-string",level:3},{value:"<code>count = int (optional)</code>",id:"count--int-optional",level:3},{value:"<code>exit = bool (optional)</code>",id:"exit--bool-optional",level:3},{value:"<code>offset = int|string (optional)</code>",id:"offset--intstring-optional",level:3},{value:"<code>options = record (optional)</code>",id:"options--record-optional",level:3},{value:"<code>aws_iam = record (optional)</code>",id:"aws_iam--record-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Read 100 JSON messages from the topic <code>tenzir</code>",id:"read-100-json-messages-from-the-topic-tenzir",level:3},{value:"Read Zeek Streaming JSON logs starting at the beginning",id:"read-zeek-streaming-json-logs-starting-at-the-beginning",level:3}],I={toc:b},h="wrapper";function C(e){var a=e,{components:n}=a,o=g(a,["components"]);return(0,t.yg)(h,y(c(c({},I),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"load_kafka"}),"load_kafka"),(0,t.yg)("p",null,"Loads a byte stream from a Apache Kafka topic."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_kafka"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," topic"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [count"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, exit"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, offset"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"|"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"          options"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, aws_iam"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record]"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"load_kafka topic:string, [count=int, exit=bool, offset=int|string,\n          options=record, aws_iam=record]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"load_kafka")," operator reads bytes from a Kafka topic."),(0,t.yg)("p",null,"The implementation uses the official ",(0,t.yg)("a",c({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka")," from Confluent and\nsupports all ",(0,t.yg)("a",c({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md"}),"configuration options"),". You can specify them\nvia ",(0,t.yg)("inlineCode",{parentName:"p"},"options")," parameter as ",(0,t.yg)("inlineCode",{parentName:"p"},"{key: value, ...}"),"."),(0,t.yg)("p",null,"We recommend putting your Kafka options into the dedicated ",(0,t.yg)("inlineCode",{parentName:"p"},"kafka.yaml")," ",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.27/configuration#load-plugins"}),"plugin\nconfig file"),". This way you can configure\nyour all your environment-specific options once, independent of the\nper-connector invocations."),(0,t.yg)("p",null,"The operator injects the following default librdkafka configuration values in\ncase no configuration file is present, or when the configuration does not\ninclude them:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bootstrap.servers"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"localhost")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"client.id"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"group.id"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir"))),(0,t.yg)("h3",c({},{id:"topic-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"topic: string")),(0,t.yg)("p",null,"The Kafka topic to use."),(0,t.yg)("h3",c({},{id:"count--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"count = int (optional)")),(0,t.yg)("p",null,"Exit successfully after having consumed ",(0,t.yg)("inlineCode",{parentName:"p"},"count")," messages."),(0,t.yg)("h3",c({},{id:"exit--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"exit = bool (optional)")),(0,t.yg)("p",null,"Exit successfully after having received the last message."),(0,t.yg)("p",null,"Without this option, the operator waits for new messages after having consumed the\nlast one."),(0,t.yg)("h3",c({},{id:"offset--intstring-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"offset = int|string (optional)")),(0,t.yg)("p",null,"The offset to start consuming from. Possible values are:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"beginning"'),": first offset"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"end"'),": last offset"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"stored"'),": stored offset"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"<value>"),": absolute offset"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"-<value>"),": relative offset from end")),(0,t.yg)("h3",c({},{id:"options--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"options = record (optional)")),(0,t.yg)("p",null,"A record of key-value configuration options for\n",(0,t.yg)("a",c({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka"),", e.g., ",(0,t.yg)("inlineCode",{parentName:"p"},'{"auto.offset.reset" : "earliest",\n"enable.partition.eof": true}'),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"load_kafka")," operator passes the key-value pairs directly to\n",(0,t.yg)("a",c({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka"),". Consult the list of available ",(0,t.yg)("a",c({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md"}),"configuration\noptions")," to configure Kafka according to your needs."),(0,t.yg)("p",null,"We recommand factoring these options into the plugin-specific ",(0,t.yg)("inlineCode",{parentName:"p"},"kafka.yaml")," so\nthat they are indpendent of the ",(0,t.yg)("inlineCode",{parentName:"p"},"load_kafka")," arguments."),(0,t.yg)("h3",c({},{id:"aws_iam--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"aws_iam = record (optional)")),(0,t.yg)("p",null,"If specified, enables using AWS IAM Authentication for MSK. The keys must be\nnon-empty when specified."),(0,t.yg)("p",null,"Available keys:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"region"),": Region of the MSK Clusters. Must be specified when using IAM."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"assume_role"),": Optional role ARN to assume."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"session_name"),": Optional session name to use when assume a role."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"external_id"),": Optional external id to use when assuming a role.")),(0,t.yg)("p",null,"The operator will try to get credentials in the following order:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Checks your environment variables for AWS Credentials."),(0,t.yg)("li",{parentName:"ol"},"Checks your ",(0,t.yg)("inlineCode",{parentName:"li"},"$HOME/.aws/credentials")," file for a profile and credentials"),(0,t.yg)("li",{parentName:"ol"},"Contacts and logs in to a trusted identity provider. The login information to\nthese providers can either be on the environment variables: ",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_ROLE_ARN"),",\n",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_WEB_IDENTITY_TOKEN_FILE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_ROLE_SESSION_NAME")," or on a profile in your\n",(0,t.yg)("inlineCode",{parentName:"li"},"$HOME/.aws/credentials"),"."),(0,t.yg)("li",{parentName:"ol"},"Checks for an external method set as part of a profile on ",(0,t.yg)("inlineCode",{parentName:"li"},"$HOME/.aws/config"),"\nto generate or look up credentials that isn't directly supported by AWS."),(0,t.yg)("li",{parentName:"ol"},"Contacts the ECS Task Role to request credentials if Environment variable\n",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_CONTAINER_CREDENTIALS_RELATIVE_URI")," has been set."),(0,t.yg)("li",{parentName:"ol"},"Contacts the EC2 Instance Metadata service to request credentials if\n",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_EC2_METADATA_DISABLED")," is NOT set to ON.")),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"read-100-json-messages-from-the-topic-tenzir"}),"Read 100 JSON messages from the topic ",(0,t.yg)("inlineCode",{parentName:"h3"},"tenzir")),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_kafka"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tenzir"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"100")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'load_kafka "tenzir", count=100\nread_json',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",c({},{id:"read-zeek-streaming-json-logs-starting-at-the-beginning"}),"Read Zeek Streaming JSON logs starting at the beginning"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_kafka"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zeek"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", offset"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"beginning"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_zeek_json"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'load_kafka "zeek", offset="beginning"\nread_zeek_json',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}C.isMDXComponent=!0}}]);