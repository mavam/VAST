"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8084],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>d});var t=a(96540);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,p=function(e,n){if(null==e)return{};var a,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=t.createContext({}),i=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},y=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=i(a),m=p,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||r;return a?t.createElement(d,o(o({ref:n},y),{},{components:a})):t.createElement(d,o({ref:n},y))}));function d(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:p,o[1]=l;for(var i=2;i<r;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80149:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>E,contentTitle:()=>u,default:()=>D,frontMatter:()=>d,metadata:()=>N,toc:()=>f});var t=a(15680),p=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,n,a)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,c=(e,n)=>{for(var a in n||(n={}))s.call(n,a)&&y(e,a,n[a]);if(l)for(var a of l(n))i.call(n,a)&&y(e,a,n[a]);return e},g=(e,n)=>r(e,o(n)),m=(e,n)=>{var a={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&i.call(e,t)&&(a[t]=e[t]);return a};const d={},u="Splunk",N={unversionedId:"integrations/splunk",id:"version-v4.20/integrations/splunk",title:"Splunk",description:"Splunk is a log management and SIEM solution for storing",source:"@site/versioned_docs/version-v4.20/integrations/splunk.md",sourceDirName:"integrations",slug:"/integrations/splunk",permalink:"/v4.20/integrations/splunk",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/integrations/splunk.md",tags:[],version:"v4.20",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Graylog",permalink:"/v4.20/integrations/graylog"},next:{title:"Suricata",permalink:"/v4.20/integrations/suricata"}},E={},f=[{value:"Send data to an existing HEC endpoint",id:"send-data-to-an-existing-hec-endpoint",level:2},{value:"Spawn a HEC endpoint as pipeline source",id:"spawn-a-hec-endpoint-as-pipeline-source",level:2},{value:"Test Splunk and Tenzir together",id:"test-splunk-and-tenzir-together",level:2},{value:"Setup the containers",id:"setup-the-containers",level:3},{value:"Configure Splunk",id:"configure-splunk",level:3}],F={toc:f},h="wrapper";function D(e){var n=e,{components:a}=n,p=m(n,["components"]);return(0,t.yg)(h,g(c(c({},F),p),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"splunk"}),"Splunk"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"https://splunk.com"}),"Splunk")," is a log management and SIEM solution for storing\nand processing logs."),(0,t.yg)("p",null,"Deploy Tenzir between your data sources and existing Splunk for controlling\ncosts and gaining additional flexibility of data processing and routing."),(0,t.yg)("h2",c({},{id:"send-data-to-an-existing-hec-endpoint"}),"Send data to an existing HEC endpoint"),(0,t.yg)("p",null,"To send data from a pipeline to a Splunk ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector"}),"HTTP Event Collector (HEC)"),"\nendpoint, use the ",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.20/operators/fluent-bit"}),(0,t.yg)("inlineCode",{parentName:"a"},"fluent-bit"))," sink operator."),(0,t.yg)("p",null,"For example, deploy the following pipeline to forward all\n",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.20/integrations/suricata"}),"Suricata")," alerts arriving at a node to Splunk:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),'export --live\n| where #schema == "suricata.alert"\n| fluent-bit\n    splunk\n    host=1.2.3.4\n    port=8088\n    tls=on\n    tls.verify=off\n    splunk_token=TOKEN\n')),(0,t.yg)("p",null,"Replace ",(0,t.yg)("inlineCode",{parentName:"p"},"1.2.3.4")," with the IP address of your splunk host and ",(0,t.yg)("inlineCode",{parentName:"p"},"TOKEN")," with your\nHEC token."),(0,t.yg)("p",null,"For more details, read the official ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/splunk"}),"Fluent Bit documentation of the Splunk\noutput"),"."),(0,t.yg)("h2",c({},{id:"spawn-a-hec-endpoint-as-pipeline-source"}),"Spawn a HEC endpoint as pipeline source"),(0,t.yg)("p",null,"To send data to a Tenzir pipeline instead of Splunk, you can open a Splunk ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector"}),"HTTP\nEvent Collector (HEC)")," endpoint using the\n",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.20/operators/fluent-bit"}),(0,t.yg)("inlineCode",{parentName:"a"},"fluent-bit"))," source operator."),(0,t.yg)("p",null,"For example, to ingest all data into a Tenzir node instead of Splunk, point your\ndata source to the IP address of the Tenzir node at port 9880 by deploying this\npipeline:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"fluent-bit splunk splunk_token=TOKEN\n| import\n")),(0,t.yg)("p",null,"Replace ",(0,t.yg)("inlineCode",{parentName:"p"},"TOKEN")," with the Splunk token configured at your data source."),(0,t.yg)("p",null,"To listen on a different IP address, e.g., 1.2.3.4 add ",(0,t.yg)("inlineCode",{parentName:"p"},"listen=1.2.3.4")," to the\n",(0,t.yg)("inlineCode",{parentName:"p"},"fluent-bit")," operator."),(0,t.yg)("p",null,"For more details, read the official ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/splunk"}),"Fluent Bit documentation of the Splunk\ninput"),"."),(0,t.yg)("h2",c({},{id:"test-splunk-and-tenzir-together"}),"Test Splunk and Tenzir together"),(0,t.yg)("p",null,"To test Splunk and Tenzir together, use the following ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker\nCompose")," setup."),(0,t.yg)("h3",c({},{id:"setup-the-containers"}),"Setup the containers"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"version"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"3.9"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"services"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  splunk"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    image"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"${SPLUNK_IMAGE:-splunk/splunk:latest}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    platform"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"linux/amd64")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    container_name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"splunk")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    environment"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"SPLUNK_START_ARGS=--accept-license")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"SPLUNK_HEC_TOKEN=abcd1234")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"SPLUNK_PASSWORD=tenzir123")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    ports"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"8000:8000")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"8088:8088")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  tenzir-node"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    container_name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Demo"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    image"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir/tenzir:latest")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    pull_policy"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"always")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    environment"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_PLUGINS__PLATFORM__CONTROL_ENDPOINT=wss://ws.tenzir.app/production")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_PLUGINS__PLATFORM__API_KEY=<PLATFORM_API_KEY>")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_PLUGINS__PLATFORM__TENANT_ID=<PLATFORM_TENANT_ID>")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_ENDPOINT=tenzir-node:5158")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    entrypoint"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    volumes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node:/var/lib/tenzir/")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node:/var/log/tenzir/")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  tenzir"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    image"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir/tenzir:latest")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    pull_policy"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"never")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    profiles"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"donotstart")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    depends_on"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    environment"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_ENDPOINT=tenzir-node:5158")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"volumes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  tenzir-node"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    driver"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"local"))))),(0,t.yg)("h3",c({},{id:"configure-splunk"}),"Configure Splunk"),(0,t.yg)("p",null,"After you spun up the containers, configure Splunk as follows:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Go to ",(0,t.yg)("a",c({parentName:"li"},{href:"http://localhost:8000"}),"http://localhost:8000")," and login with ",(0,t.yg)("inlineCode",{parentName:"li"},"admin"),":",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir123")),(0,t.yg)("li",{parentName:"ol"},"Navigate to ",(0,t.yg)("em",{parentName:"li"},"Add data")," \u2192 ",(0,t.yg)("em",{parentName:"li"},"Monitor")," \u2192 ",(0,t.yg)("em",{parentName:"li"},"HTTP Event Collector")),(0,t.yg)("li",{parentName:"ol"},"Configure the event collector:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Name: Tenzir"),(0,t.yg)("li",{parentName:"ul"},"Click ",(0,t.yg)("em",{parentName:"li"},"Next")),(0,t.yg)("li",{parentName:"ul"},"Copy the token"),(0,t.yg)("li",{parentName:"ul"},"Keep ",(0,t.yg)("em",{parentName:"li"},"Start searching"))))))}D.isMDXComponent=!0}}]);