"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96289],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||y[g]||i;return n?t.createElement(m,r(r({ref:a},c),{},{components:n})):t.createElement(m,r({ref:a},c))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[d]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1906:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>I,toc:()=>b});var t=n(15680),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(p)for(var n of p(a))s.call(a,n)&&c(e,n,a[n]);return e},y=(e,a)=>i(e,r(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const m={},u="save_kafka",I={unversionedId:"tql2/operators/save_kafka",id:"version-v4.28/tql2/operators/save_kafka",title:"save_kafka",description:"Saves a byte stream to a Apache Kafka topic.",source:"@site/versioned_docs/version-v4.28/tql2/operators/save_kafka.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_kafka",permalink:"/tql2/operators/save_kafka",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/tql2/operators/save_kafka.md",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_http",permalink:"/tql2/operators/save_http"},next:{title:"save_s3",permalink:"/tql2/operators/save_s3"}},N={},b=[{value:"Description",id:"description",level:2},{value:"<code>topic: string</code>",id:"topic-string",level:3},{value:"<code>key = string (optional)</code>",id:"key--string-optional",level:3},{value:"<code>timestamp = time (optional)</code>",id:"timestamp--time-optional",level:3},{value:"<code>options = record (optional)</code>",id:"options--record-optional",level:3},{value:"<code>aws_iam = record (optional)</code>",id:"aws_iam--record-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Write the Tenzir version to topic <code>tenzir</code> with timestamp from the past",id:"write-the-tenzir-version-to-topic-tenzir-with-timestamp-from-the-past",level:3},{value:"Follow a CSV file and publish it to topic <code>data</code>",id:"follow-a-csv-file-and-publish-it-to-topic-data",level:3}],h={toc:b},f="wrapper";function v(e){var a=e,{components:n}=a,o=g(a,["components"]);return(0,t.yg)(f,y(d(d({},h),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"save_kafka"}),"save_kafka"),(0,t.yg)("p",null,"Saves a byte stream to a Apache Kafka topic."),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_kafka"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," topic"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [key"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, timestamp"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"time, options"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"record,")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"          aws_iam"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"record]"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:"save_kafka topic:string, [key=string, timestamp=time, options=record,\n          aws_iam=record]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"save_kafka")," operator saves bytes to a Kafka topic."),(0,t.yg)("p",null,"The implementation uses the official ",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka")," from Confluent and\nsupports all ",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md"}),"configuration options"),". You can specify them\nvia ",(0,t.yg)("inlineCode",{parentName:"p"},"options")," parameter as ",(0,t.yg)("inlineCode",{parentName:"p"},"{key: value, ...}"),"."),(0,t.yg)("p",null,"We recommend putting your Kafka options into the dedicated ",(0,t.yg)("inlineCode",{parentName:"p"},"kafka.yaml")," ",(0,t.yg)("a",d({parentName:"p"},{href:"/configuration#load-plugins"}),"plugin\nconfig file"),". This way you can configure\nyour all your environment-specific options once, independent of the\nper-connector invocations."),(0,t.yg)("p",null,"The operator injects the following default librdkafka configuration values in\ncase no configuration file is present, or when the configuration does not\ninclude them:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bootstrap.servers"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"localhost")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"client.id"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"group.id"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir"))),(0,t.yg)("h3",d({},{id:"topic-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"topic: string")),(0,t.yg)("p",null,"The Kafka topic to use."),(0,t.yg)("h3",d({},{id:"key--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"key = string (optional)")),(0,t.yg)("p",null,"Sets a fixed key for all messages."),(0,t.yg)("h3",d({},{id:"timestamp--time-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"timestamp = time (optional)")),(0,t.yg)("p",null,"Sets a fixed timestamp for all messages."),(0,t.yg)("h3",d({},{id:"options--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"options = record (optional)")),(0,t.yg)("p",null,"A record of key-value configuration options for\n",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka"),", e.g., ",(0,t.yg)("inlineCode",{parentName:"p"},'{"auto.offset.reset" : "earliest",\n"enable.partition.eof": true}'),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"save_kafka")," operator passes the key-value pairs directly to\n",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka"),". Consult the list of available ",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md"}),"configuration\noptions")," to configure Kafka according to your needs."),(0,t.yg)("p",null,"We recommand factoring these options into the plugin-specific ",(0,t.yg)("inlineCode",{parentName:"p"},"kafka.yaml")," so\nthat they are indpendent of the ",(0,t.yg)("inlineCode",{parentName:"p"},"save_kafka")," arguments."),(0,t.yg)("h3",d({},{id:"aws_iam--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"aws_iam = record (optional)")),(0,t.yg)("p",null,"If specified, enables using AWS IAM Authentication for MSK. The keys must be\nnon-empty when specified."),(0,t.yg)("p",null,"Available keys:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"region"),": Region of the MSK Clusters. Must be specified when using IAM."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"assume_role"),": Optional Role ARN to assume."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"session_name"),": Optional session name to use when assuming a role."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"external_id"),": Optional external id to use when assuming a role.")),(0,t.yg)("p",null,"The operator will try to get credentials in the following order:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Checks your environment variables for AWS Credentials."),(0,t.yg)("li",{parentName:"ol"},"Checks your ",(0,t.yg)("inlineCode",{parentName:"li"},"$HOME/.aws/credentials")," file for a profile and credentials"),(0,t.yg)("li",{parentName:"ol"},"Contacts and logs in to a trusted identity provider. The login information to\nthese providers can either be on the environment variables: ",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_ROLE_ARN"),",\n",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_WEB_IDENTITY_TOKEN_FILE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_ROLE_SESSION_NAME")," or on a profile in your\n",(0,t.yg)("inlineCode",{parentName:"li"},"$HOME/.aws/credentials"),"."),(0,t.yg)("li",{parentName:"ol"},"Checks for an external method set as part of a profile on ",(0,t.yg)("inlineCode",{parentName:"li"},"$HOME/.aws/config"),"\nto generate or look up credentials that are not directly supported by AWS."),(0,t.yg)("li",{parentName:"ol"},"Contacts the ECS Task Role to request credentials if Environment variable\n",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_CONTAINER_CREDENTIALS_RELATIVE_URI")," has been set."),(0,t.yg)("li",{parentName:"ol"},"Contacts the EC2 Instance Metadata service to request credentials if\n",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_EC2_METADATA_DISABLED")," is NOT set to ON.")),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("h3",d({},{id:"write-the-tenzir-version-to-topic-tenzir-with-timestamp-from-the-past"}),"Write the Tenzir version to topic ",(0,t.yg)("inlineCode",{parentName:"h3"},"tenzir")," with timestamp from the past"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"version")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_kafka"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tenzir"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", timestamp"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1984-01-01"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'version\nwrite_json\nsave_kafka "tenzir", timestamp=1984-01-01',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",d({},{id:"follow-a-csv-file-and-publish-it-to-topic-data"}),"Follow a CSV file and publish it to topic ",(0,t.yg)("inlineCode",{parentName:"h3"},"data")),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/data.csv"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_csv")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_kafka"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "data"'))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'load_file "/tmp/data.csv"\nread_csv\nwrite_json\nsave_kafka "data"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}v.isMDXComponent=!0}}]);