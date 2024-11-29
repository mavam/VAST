"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29600],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=i(a),g=r,u=y["".concat(s,".").concat(g)]||y[g]||d[g]||o;return a?n.createElement(u,p(p({ref:t},c),{},{components:a})):n.createElement(u,p({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},86097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>F,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&c(e,a,t[a]);return e},d=(e,t)=>o(e,p(t)),g=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const u={},m="save_tcp",f={unversionedId:"tql2/operators/save_tcp",id:"tql2/operators/save_tcp",title:"save_tcp",description:"Saves bytes to a TCP or TLS connection.",source:"@site/docs/tql2/operators/save_tcp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_tcp",permalink:"/next/tql2/operators/save_tcp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/save_tcp.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_sqs",permalink:"/next/tql2/operators/save_sqs"},next:{title:"save_udp",permalink:"/next/tql2/operators/save_udp"}},v={},b=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: string</code>",id:"endpoint-string",level:3},{value:"<code>tls = bool (optional)</code>",id:"tls--bool-optional",level:3},{value:"<code>skip_peer_verification = bool (optional)</code>",id:"skip_peer_verification--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Transform incoming Syslog to BITZ and save over TCP",id:"transform-incoming-syslog-to-bitz-and-save-over-tcp",level:3},{value:"Save to localhost with TLS",id:"save-to-localhost-with-tls",level:3}],h={toc:b},N="wrapper";function F(e){var t=e,{components:a}=t,r=g(t,["components"]);return(0,n.yg)(N,d(y(y({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"save_tcp"}),"save_tcp"),(0,n.yg)("p",null,"Saves bytes to a TCP or TLS connection."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," endpoint"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [tls"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, skip_peer_verification"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Saves bytes to the given endpoint via TCP or TLS."),(0,n.yg)("h3",y({},{id:"endpoint-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"endpoint: string")),(0,n.yg)("p",null,"The endpoint to which the server will connect. Must be of the form\n",(0,n.yg)("inlineCode",{parentName:"p"},"[tcp://]<hostname>:<port>"),"."),(0,n.yg)("h3",y({},{id:"tls--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tls = bool (optional)")),(0,n.yg)("p",null,"Whether to use TLS."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,n.yg)("h3",y({},{id:"skip_peer_verification--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"skip_peer_verification = bool (optional)")),(0,n.yg)("p",null,"Whether to verify the TLS Certificate when connecting."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," if TLS is being used."),(0,n.yg)("admonition",y({},{title:"Self-Signed Certificates",type:"tip"}),(0,n.yg)("p",{parentName:"admonition"},"If you experience failures when using TLS with a Self-Signed Certificate,\ntry setting ",(0,n.yg)("inlineCode",{parentName:"p"},"skip_peer_verification=true"),".")),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"transform-incoming-syslog-to-bitz-and-save-over-tcp"}),"Transform incoming Syslog to BITZ and save over TCP"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "0.0.0.0:8090"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," { "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_syslog"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," }")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_bitz")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "127.0.0.1:4000"'))))),(0,n.yg)("h3",y({},{id:"save-to-localhost-with-tls"}),"Save to localhost with TLS"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "feed"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_tcp"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "127.0.0.1:4000"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", tls"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", skip_peer_verification"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true"))))))}F.isMDXComponent=!0}}]);