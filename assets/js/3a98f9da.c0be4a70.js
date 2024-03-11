"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>N,frontMatter:()=>m,metadata:()=>h,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{source:!0,sink:!0}}},k="fluent-bit",h={unversionedId:"operators/fluent-bit",id:"version-Tenzir v4.10/operators/fluent-bit",title:"fluent-bit",description:"Sends and receives events via Fluent Bit.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/fluent-bit.md",sourceDirName:"operators",slug:"/operators/fluent-bit",permalink:"/operators/fluent-bit",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/fluent-bit.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{source:!0,sink:!0}}},sidebar:"docsSidebar",previous:{title:"flatten",permalink:"/operators/flatten"},next:{title:"from",permalink:"/operators/from"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-X|--set &lt;key=value&gt;</code>",id:"-x--set-keyvalue",level:3},{value:"<code>&lt;plugin&gt;</code>",id:"plugin",level:3},{value:"<code>&lt;key=value&gt;</code>",id:"keyvalue",level:3},{value:"Examples",id:"examples",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3}],y={toc:v},g="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(g,d(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"fluent-bit"}),"fluent-bit"),(0,r.kt)("p",null,"Sends and receives events via ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/"}),"Fluent Bit"),"."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit [-X|--set <key=value>,...] <plugin> [<key=value>...]\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," operator acts as a bridge into the Fluent Bit ecosystem,\nmaking it possible to acquire events from a Fluent Bit ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs"}),"input plugin"),"\nand process events with a Fluent Bit ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs"}),"output plugin"),"."),(0,r.kt)("p",null,"Syntactically, the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," operator behaves similar to an invocation of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," command line utility. For example, the invocation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"fluent-bit -o plugin -p key1=value1 -p key2=value2 -p ...\n")),(0,r.kt)("p",null,"translates to our ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," operator as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"fluent-bit plugin key1=value1 key2=value2 ...\n")),(0,r.kt)("h3",c({},{id:"-x--set-keyvalue"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-X|--set <key=value>")),(0,r.kt)("p",null,"A comma-separated list of key-value pairs that represent the global properties\nof the Fluent Bit service., e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"-X flush=1,grace=3"),"."),(0,r.kt)("p",null,"Consult the list of available ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/classic-mode/configuration-file#config_section"}),"key-value pairs")," to configure\nFluent Bit according to your needs."),(0,r.kt)("p",null,"We recommend factoring these options into the plugin-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit.yaml"),"\nso that they are independent of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," operator arguments."),(0,r.kt)("h3",c({},{id:"plugin"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<plugin>")),(0,r.kt)("p",null,"The name of the Fluent Bit plugin."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit -h")," and look under the ",(0,r.kt)("strong",{parentName:"p"},"Inputs")," and ",(0,r.kt)("strong",{parentName:"p"},"Outputs")," section of the\nhelp text for available plugin names. The web documentation often comes with an\nexample invocation near the bottom of the page, which also provides a good idea\nhow you could use the operator."),(0,r.kt)("h3",c({},{id:"keyvalue"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<key=value>")),(0,r.kt)("p",null,"Sets a plugin configuration property."),(0,r.kt)("p",null,"The positional arguments of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"key=value")," are equivalent to the\nmulti-option ",(0,r.kt)("inlineCode",{parentName:"p"},"-p key=value")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," executable."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("h3",c({},{id:"source"}),"Source"),(0,r.kt)("p",null,"Ingest ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/slack"}),"OpenTelemetry"),"\nlogs, metrics, and traces:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit opentelemetry\n")),(0,r.kt)("p",null,"You can then send JSON-encoded log data to a freshly created API endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'curl \\\n  --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"resourceLogs":[{"resource":{},"scopeLogs":[{"scope":{},"logRecords":[{"timeUnixNano":"1660296023390371588","body":{"stringValue":"{\\"message\\":\\"dummy\\"}"},"traceId":"","spanId":""}]}]}]}\' \\\n  http://0.0.0.0:4318/v1/logs\n')),(0,r.kt)("p",null,"Handle ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/splunk"}),"Splunk")," HTTP\nHEC requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit splunk port=8088\n")),(0,r.kt)("p",null,"Handle ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/elasticsearch"}),"ElasticSearch &\nOpenSearch"),"\nBulk API requests or ingest from beats (e.g., Filebeat, Metricbeat, Winlogbeat):"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit elasticsearch port=9200\n")),(0,r.kt)("h3",c({},{id:"sink"}),"Sink"),(0,r.kt)("p",null,"Send events to ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/slack"}),"Slack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit slack webhook=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,r.kt)("p",null,"Send events to\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/splunk"}),"Splunk"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit splunk host=127.0.0.1 port=8088 tls=on tls.verify=off splunk_token=11111111-2222-3333-4444-555555555555\n")),(0,r.kt)("p",null,"Send events to\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/elasticsearch"}),"ElasticSearch"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit es host=192.168.2.3 port=9200 index=my_index type=my_type\n")))}N.isMDXComponent=!0}}]);