"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66692],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=p(a),d=r,u=y["".concat(s,".").concat(d)]||y[d]||c[d]||o;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>w,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&g(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&g(e,a,t[a]);return e},c=(e,t)=>o(e,i(t)),d=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const u={},m="Graylog",f={unversionedId:"integrations/graylog",id:"integrations/graylog",title:"Graylog",description:"Graylog is a log management solution based on top of",source:"@site/docs/integrations/graylog.md",sourceDirName:"integrations",slug:"/integrations/graylog",permalink:"/next/integrations/graylog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/integrations/graylog.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Azure Log Analytics",permalink:"/next/integrations/azure-log-analytics/"},next:{title:"Splunk",permalink:"/next/integrations/splunk"}},h={},b=[{value:"Receive data from Graylog",id:"receive-data-from-graylog",level:2},{value:"Configure a GELF TCP output",id:"configure-a-gelf-tcp-output",level:3},{value:"Create a Graylog stream",id:"create-a-graylog-stream",level:3},{value:"Test the connection with a Tenzir pipeline",id:"test-the-connection-with-a-tenzir-pipeline",level:3}],N={toc:b},v="wrapper";function w(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.yg)(v,c(y(y({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"graylog"}),"Graylog"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"https://graylog.org/"}),"Graylog")," is a log management solution based on top of\nElasticsearch."),(0,n.yg)("p",null,"Use Tenzir to process data from Graylog."),(0,n.yg)("p",null,"In Graylog, data goes through three key stages:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Inputs"),": This stage involves data ingestion, where Graylog receives data\nfrom various sources. Inputs support multiple protocols like TCP, UDP, and\nHTTP. They normalize incoming data into the unified ",(0,n.yg)("a",y({parentName:"li"},{href:"/next/formats/gelf"}),"Graylog Extended Log\nFormat (GELF)"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Streams"),": Once onboarded, streams route the data internally. Here,\nit can be filtered, parsed, and enriched. The stream processing stage\nleverages extractors and pipeline rules for data manipulation, before\nindexing the data in Elasticsearch for storage."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Outputs"),": For exporting data, Graylog utilizes alerts, dashboards, and its\nREST API. Additionally, Graylog can forward data to external systems or tools\nvia streams.")),(0,n.yg)("h2",y({},{id:"receive-data-from-graylog"}),"Receive data from Graylog"),(0,n.yg)("p",null,"To receive data from Graylog with a Tenzir pipeline, you need to configure a new\noutput and setup a stream that sends data to that output. The example below\nassumes that Graylog sends data in GELF to a TCP endpoint that listens on\n1.2.3.4 at port 5678."),(0,n.yg)("h3",y({},{id:"configure-a-gelf-tcp-output"}),"Configure a GELF TCP output"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Navigate to ",(0,n.yg)("em",{parentName:"li"},"System/Outputs")," in Graylog's web interface."),(0,n.yg)("li",{parentName:"ol"},"Click ",(0,n.yg)("em",{parentName:"li"},"Manage Outputs"),"."),(0,n.yg)("li",{parentName:"ol"},"Select ",(0,n.yg)("inlineCode",{parentName:"li"},"GELF TCP")," as the output type."),(0,n.yg)("li",{parentName:"ol"},"Configure the output settings:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Specify the target server's address in the ",(0,n.yg)("inlineCode",{parentName:"li"},"host")," field (e.g., 1.2.3.4)."),(0,n.yg)("li",{parentName:"ul"},"Enter the port number for the TCP connection (e.g., 5678)."),(0,n.yg)("li",{parentName:"ul"},"Optionally adjust other settings like reconnect delay, queue size, and send\nbuffer size."))),(0,n.yg)("li",{parentName:"ol"},"Save the configuration.")),(0,n.yg)("p",null,"Now Graylog will forward messages in GELF format to the specified TCP endpoint."),(0,n.yg)("h3",y({},{id:"create-a-graylog-stream"}),"Create a Graylog stream"),(0,n.yg)("p",null,"The newly created output still needs to be connected to a stream to produce\ndata. For example, to route all incoming traffic in Graylog to an output:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Go to ",(0,n.yg)("em",{parentName:"li"},"Streams")," in the Graylog web interface."),(0,n.yg)("li",{parentName:"ol"},"Create a new stream or edit an existing one."),(0,n.yg)("li",{parentName:"ol"},"In the stream's settings, configure it to match all incoming messages. You\ncan do this by setting up a rule that matches all messages or by leaving the\nrules empty."),(0,n.yg)("li",{parentName:"ol"},"Once the stream is configured, go to the ",(0,n.yg)("em",{parentName:"li"},"Outputs")," tab in the stream's\nsettings."),(0,n.yg)("li",{parentName:"ol"},"Add the previously configured GELF TCP output to this stream.")),(0,n.yg)("p",null,"This setup will direct all messages that arrive in Graylog to the specified\noutput. Adapt your filters for more fine-grained forwarding."),(0,n.yg)("h3",y({},{id:"test-the-connection-with-a-tenzir-pipeline"}),"Test the connection with a Tenzir pipeline"),(0,n.yg)("p",null,"Now that Graylog is configured, you can test that data is flowing using the\nfollowing Tenzir pipeline:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1.2.3.4:5678"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"  read_gelf")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"This pipelines opens a listening socket at IP address 1.2.3.4 at port 5678 via\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/load_tcp"}),(0,n.yg)("inlineCode",{parentName:"a"},"load_tcp")),", and then spawns a nested pipeline\nper accepted connection, each of which reads a stream of GELF messages using\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/read_gelf"}),(0,n.yg)("inlineCode",{parentName:"a"},"read_gelf")),". Graylog will connect to this\nsocket, based on the reconnect interval that you configured in the output (by\ndefault 500ms)."),(0,n.yg)("p",null,"Now that data is flowing, you can decide what to do with the Graylog data, e.g.,\ningest data into a running Tenzir node by appending\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/import"}),(0,n.yg)("inlineCode",{parentName:"a"},"import")),":"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1.2.3.4:5678"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"  read_gelf")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"import"))))))}w.isMDXComponent=!0}}]);