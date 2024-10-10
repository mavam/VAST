"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21537],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=s(n),g=r,d=y["".concat(i,".").concat(g)]||y[g]||c[g]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[y]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>F,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var a=n(15680),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),g=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const d={sidebar_custom_props:{operator:{source:!0,sink:!0}}},m="fluent-bit",f={unversionedId:"operators/fluent-bit",id:"version-v4.21/operators/fluent-bit",title:"fluent-bit",description:"Sends and receives events via Fluent Bit.",source:"@site/versioned_docs/version-v4.21/operators/fluent-bit.md",sourceDirName:"operators",slug:"/operators/fluent-bit",permalink:"/operators/fluent-bit",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/fluent-bit.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{source:!0,sink:!0}}},sidebar:"docsSidebar",previous:{title:"flatten",permalink:"/operators/flatten"},next:{title:"from",permalink:"/operators/from"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-X|--set &lt;key=value&gt;</code>",id:"-x--set-keyvalue",level:3},{value:"<code>&lt;plugin&gt;</code>",id:"plugin",level:3},{value:"<code>&lt;key=value&gt;</code>",id:"keyvalue",level:3},{value:"Examples",id:"examples",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3}],v={toc:b},N="wrapper";function F(e){var t=e,{components:n}=t,r=g(t,["components"]);return(0,a.yg)(N,c(y(y({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",y({},{id:"fluent-bit"}),"fluent-bit"),(0,a.yg)("p",null,"Sends and receives events via ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/"}),"Fluent Bit"),"."),(0,a.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit [-X|--set <key=value>,...] <plugin> [<key=value>...]\n")),(0,a.yg)("h2",y({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit")," operator acts as a bridge into the Fluent Bit ecosystem,\nmaking it possible to acquire events from a Fluent Bit ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs"}),"input plugin"),"\nand process events with a Fluent Bit ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs"}),"output plugin"),"."),(0,a.yg)("p",null,"Syntactically, the ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit")," operator behaves similar to an invocation of the\n",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit")," command line utility. For example, the invocation"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"fluent-bit"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -o"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," plugin"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -p"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," key1=value1"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -p"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," key2=value2"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -p"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," ..."))))),(0,a.yg)("p",null,"translates to our ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit")," operator as follows:"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"fluent-bit"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," plugin"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," key1=value1"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," key2=value2"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," ..."))))),(0,a.yg)("h3",y({},{id:"-x--set-keyvalue"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-X|--set <key=value>")),(0,a.yg)("p",null,"A comma-separated list of key-value pairs that represent the global properties\nof the Fluent Bit service., e.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"-X flush=1,grace=3"),"."),(0,a.yg)("p",null,"Consult the list of available ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/classic-mode/configuration-file#config_section"}),"key-value pairs")," to configure\nFluent Bit according to your needs."),(0,a.yg)("p",null,"We recommend factoring these options into the plugin-specific ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit.yaml"),"\nso that they are independent of the ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit")," operator arguments."),(0,a.yg)("h3",y({},{id:"plugin"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<plugin>")),(0,a.yg)("p",null,"The name of the Fluent Bit plugin."),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit -h")," and look under the ",(0,a.yg)("strong",{parentName:"p"},"Inputs")," and ",(0,a.yg)("strong",{parentName:"p"},"Outputs")," section of the\nhelp text for available plugin names. The web documentation often comes with an\nexample invocation near the bottom of the page, which also provides a good idea\nhow you could use the operator."),(0,a.yg)("h3",y({},{id:"keyvalue"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<key=value>")),(0,a.yg)("p",null,"Sets a plugin configuration property."),(0,a.yg)("p",null,"The positional arguments of the form ",(0,a.yg)("inlineCode",{parentName:"p"},"key=value")," are equivalent to the\nmulti-option ",(0,a.yg)("inlineCode",{parentName:"p"},"-p key=value")," of the ",(0,a.yg)("inlineCode",{parentName:"p"},"fluent-bit")," executable."),(0,a.yg)("h2",y({},{id:"examples"}),"Examples"),(0,a.yg)("h3",y({},{id:"source"}),"Source"),(0,a.yg)("p",null,"Ingest ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/slack"}),"OpenTelemetry"),"\nlogs, metrics, and traces:"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit opentelemetry\n")),(0,a.yg)("p",null,"You can then send JSON-encoded log data to a freshly created API endpoint:"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"curl"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," \\")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"  --header"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Content-Type: application/json"'),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," \\")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"  --request"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," POST"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," \\")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"  --data"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' \'{"resourceLogs":[{"resource":{},"scopeLogs":[{"scope":{},"logRecords":[{"timeUnixNano":"1660296023390371588","body":{"stringValue":"{\\"message\\":\\"dummy\\"}"},"traceId":"","spanId":""}]}]}]}\''),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," \\")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"  http://0.0.0.0:4318/v1/logs"))))),(0,a.yg)("p",null,"Handle ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/splunk"}),"Splunk")," HTTP\nHEC requests:"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit splunk port=8088\n")),(0,a.yg)("p",null,"Handle ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/elasticsearch"}),"ElasticSearch &\nOpenSearch"),"\nBulk API requests or ingest from beats (e.g., Filebeat, Metricbeat, Winlogbeat):"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit elasticsearch port=9200\n")),(0,a.yg)("h3",y({},{id:"sink"}),"Sink"),(0,a.yg)("p",null,"Send events to ",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/slack"}),"Slack"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit slack webhook=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,a.yg)("p",null,"Send events to\n",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/splunk"}),"Splunk"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit splunk host=127.0.0.1 port=8088 tls=on tls.verify=off splunk_token=11111111-2222-3333-4444-555555555555\n")),(0,a.yg)("p",null,"Send events to\n",(0,a.yg)("a",y({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/elasticsearch"}),"ElasticSearch"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",y({parentName:"pre"},{}),"fluent-bit es host=192.168.2.3 port=9200 index=my_index type=my_type\n")))}F.isMDXComponent=!0}}]);