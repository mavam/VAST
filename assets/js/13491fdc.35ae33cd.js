"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73780],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=i(t),g=r,m=y["".concat(s,".").concat(g)]||y[g]||d[g]||o;return t?n.createElement(m,l(l({ref:a},c),{},{components:t})):n.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[y]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1652:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>F});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(p)for(var t of p(a))i.call(a,t)&&c(e,t,a[t]);return e},d=(e,a)=>o(e,l(a)),g=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={},u="load_tcp",f={unversionedId:"tql2/operators/load_tcp",id:"tql2/operators/load_tcp",title:"load_tcp",description:"Loads bytes from a TCP or TLS connection.",source:"@site/docs/tql2/operators/load_tcp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_tcp",permalink:"/next/tql2/operators/load_tcp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/load_tcp.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_sqs",permalink:"/next/tql2/operators/load_sqs"},next:{title:"load_udp",permalink:"/next/tql2/operators/load_udp"}},h={},F=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: string</code>",id:"endpoint-string",level:3},{value:"<code>parallel = int (optional)</code>",id:"parallel--int-optional",level:3},{value:"<code>tls = bool (optional)</code>",id:"tls--bool-optional",level:3},{value:"<code>certfile = string (optional)</code>",id:"certfile--string-optional",level:3},{value:"<code>keyfile = string (optional)</code>",id:"keyfile--string-optional",level:3},{value:"<code>{ \u2026 } (optional)</code>",id:"---optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Listen for incoming Syslog over TCP",id:"listen-for-incoming-syslog-over-tcp",level:3},{value:"Connect to a remote endpoint and read JSON",id:"connect-to-a-remote-endpoint-and-read-json",level:3},{value:"Listen on localhost with TLS enabled",id:"listen-on-localhost-with-tls-enabled",level:3}],N={toc:F},b="wrapper";function v(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(b,d(y(y({},N),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"load_tcp"}),"load_tcp"),(0,n.yg)("p",null,"Loads bytes from a TCP or TLS connection."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," endpoint"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [parallel"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, tls"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, certfile"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, keyfile"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string { \u2026 }]"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Reads bytes from the given endpoint via TCP or TLS."),(0,n.yg)("h3",y({},{id:"endpoint-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"endpoint: string")),(0,n.yg)("p",null,"The endpoint at which the server will listen. Must be of the form\n",(0,n.yg)("inlineCode",{parentName:"p"},"[tcp://]<hostname>:<port>"),". Use the hostname ",(0,n.yg)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections on\nall interfaces."),(0,n.yg)("h3",y({},{id:"parallel--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"parallel = int (optional)")),(0,n.yg)("p",null,"Maximum number of parallel connections at once."),(0,n.yg)("h3",y({},{id:"tls--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tls = bool (optional)")),(0,n.yg)("p",null,"Whether to use TLS."),(0,n.yg)("h3",y({},{id:"certfile--string-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"certfile = string (optional)")),(0,n.yg)("p",null,"Path to a ",(0,n.yg)("inlineCode",{parentName:"p"},".pem")," file containing the TLS certificate."),(0,n.yg)("h3",y({},{id:"keyfile--string-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"keyfile = string (optional)")),(0,n.yg)("p",null,"Path to a ",(0,n.yg)("inlineCode",{parentName:"p"},".pem")," file containing the private key for the certificate."),(0,n.yg)("h3",y({},{id:"---optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"{ \u2026 } (optional)")),(0,n.yg)("p",null,"The pipeline to run for each individual TCP connection. If none is specified, no\ntransformations are applied to the output streams. Unless you are sure that\nthere is at most one active connection at a time, it is recommended to specify a\npipeline that parses the individual connection streams into events, for instance\n",(0,n.yg)("inlineCode",{parentName:"p"},"{ read_json }"),". Otherwise, the output can be interleaved."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"listen-for-incoming-syslog-over-tcp"}),"Listen for incoming Syslog over TCP"),(0,n.yg)("p",null,"Listen on all network interfaces, parsing each individual connection as syslog:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "0.0.0.0:8090"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," { "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_syslog"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," }"))))),(0,n.yg)("h3",y({},{id:"connect-to-a-remote-endpoint-and-read-json"}),"Connect to a remote endpoint and read JSON"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#8B949E"}}),"// We know that there is only one connection, so we do not specify a pipeline.")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example.org:8090"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", connect"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))))),(0,n.yg)("h3",y({},{id:"listen-on-localhost-with-tls-enabled"}),"Listen on localhost with TLS enabled"),(0,n.yg)("p",null,"Wait for connections on localhost with TLS enabled, parsing incoming JSON\nstreams according to the schema ",(0,n.yg)("inlineCode",{parentName:"p"},'"my_schema"'),", forwarding no more than 20 events\nper individual connection:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "127.0.0.1:4000"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", tls"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", certfile"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"key_and_cert.pem"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", keyfile"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"key_and_cert.pem"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"  read_json"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," schema"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"my_schema"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"  head"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 20")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"This example may use a self-signed certificate that can be generated like this:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"openssl"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," req"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -x509"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -newkey"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," rsa:2048"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -keyout"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," key_and_cert.pem"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -out"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," key_and_cert.pem"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -days"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 365"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -nodes"))))),(0,n.yg)("p",null,"You can test the endpoint locally by issuing a TLS connection:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"openssl"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," s_client"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 127.0.0.1:4000"))))))}v.isMDXComponent=!0}}]);