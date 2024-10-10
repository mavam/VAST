"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48169],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,u=d["".concat(s,".").concat(g)]||d[g]||y[g]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>C,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var a=t(15680),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>r(e,i(n)),g=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const u={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},m="tcp",f={unversionedId:"connectors/tcp",id:"version-v4.19/connectors/tcp",title:"tcp",description:"Loads bytes from a TCP or TLS connection.",source:"@site/versioned_docs/version-v4.19/connectors/tcp.md",sourceDirName:"connectors",slug:"/connectors/tcp",permalink:"/v4.19/connectors/tcp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/connectors/tcp.md",tags:[],version:"v4.19",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"stdout",permalink:"/v4.19/connectors/stdout"},next:{title:"udp",permalink:"/v4.19/connectors/udp"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-l,--listen</code> (Saver)",id:"-l--listen-saver",level:3},{value:"<code>-o,--listen-once</code>",id:"-o--listen-once",level:3},{value:"<code>--tls</code>",id:"--tls",level:3},{value:"<code>--certfile</code>",id:"--certfile",level:3},{value:"<code>--keyfile</code>",id:"--keyfile",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function C(e){var n=e,{components:t}=n,o=g(n,["components"]);return(0,a.yg)(N,y(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"tcp"}),"tcp"),(0,a.yg)("p",null,"Loads bytes from a TCP or TLS connection."),(0,a.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("p",null,"Loader:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"tcp [-c|--connect] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,a.yg)("p",null,"Saver:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"tcp [-l|--listen] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"tcp")," connector supports TCP or TLS connections. The loader reads blocks of\nbytes from the socket, and the saver writes them to the socket."),(0,a.yg)("p",null,"The loader defaults to creating a socket in listening mode. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"--connect")," if\nthe loader should initiate the connection instead. The saver defaults to\ncreating a socket in connect mode. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen")," if the saver should instead\nlisten on a socket."),(0,a.yg)("p",null,"When you have a socket in listening mode, use ",(0,a.yg)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections on\nall interfaces. Both saver and loader also have a ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen-once")," option that\nwill stop the pipeline after the first connection terminated. The\n",(0,a.yg)("a",d({parentName:"p"},{href:"/v4.19/operators/nics"}),(0,a.yg)("inlineCode",{parentName:"a"},"nics"))," operator lists all all available interfaces."),(0,a.yg)("admonition",d({},{title:"One connection at at time",type:"caution"}),(0,a.yg)("p",{parentName:"admonition"},"A single pipeline can accept at most ",(0,a.yg)("em",{parentName:"p"},"one")," TCP connection at a time. If another\nclient attempts to connect to the same listening socket, it will time out. The\nreason for this behavior is that the downstream operator (typically a parser)\nmay exhibit undefined behavior if it receives data from multiple sockets.")),(0,a.yg)("h3",d({},{id:"endpoint"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,a.yg)("p",null,"The address of the remote endpoint to connect to when using ",(0,a.yg)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen"),"."),(0,a.yg)("h3",d({},{id:"-c--connect-loader"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,a.yg)("p",null,"Connect to ",(0,a.yg)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,a.yg)("h3",d({},{id:"-l--listen-saver"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-l,--listen")," (Saver)"),(0,a.yg)("p",null,"Listen at ",(0,a.yg)("inlineCode",{parentName:"p"},"<endpoint>")," instead of connecting to it."),(0,a.yg)("h3",d({},{id:"-o--listen-once"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-o,--listen-once")),(0,a.yg)("p",null,"When listening to a socket, only process a single connection instead of looping\nover all connecting clients forever."),(0,a.yg)("p",null,"Requires a loader or saver with ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen"),"."),(0,a.yg)("h3",d({},{id:"--tls"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--tls")),(0,a.yg)("p",null,"Wrap the connection into a TLS secured stream."),(0,a.yg)("h3",d({},{id:"--certfile"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--certfile")),(0,a.yg)("p",null,"Path to a ",(0,a.yg)("inlineCode",{parentName:"p"},".pem")," file containing the TLS certificate for the server."),(0,a.yg)("p",null,"Ignored unless ",(0,a.yg)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,a.yg)("h3",d({},{id:"--keyfile"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--keyfile")),(0,a.yg)("p",null,"Path to a ",(0,a.yg)("inlineCode",{parentName:"p"},".pem")," file containing the private key for the certificate."),(0,a.yg)("p",null,"Ignored unless ",(0,a.yg)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Read raw bytes by connecting to a TCP endpoint:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:8000\n")),(0,a.yg)("p",null,"Test this locally by spinning up a local server with ",(0,a.yg)("inlineCode",{parentName:"p"},"socat"),":"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"echo"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," foo"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}})," socat"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," TCP-LISTEN:8000"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," stdout"))))),(0,a.yg)("p",null,"Listen on localhost and wait for incoming TLS connections:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:4000 --tls --certfile key_and_cert.pem --keyfile key_and_cert.pem -k\n")),(0,a.yg)("p",null,"The above example uses a self-signed certificate that can be generated like this:"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"openssl"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," req"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -x509"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -newkey"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," rsa:2048"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -keyout"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," key_and_cert.pem"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -out"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," key_and_cert.pem"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -days"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 365"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -nodes"))))),(0,a.yg)("p",null,"Test the endpoint locally by issuing a TLS connection:"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"openssl"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," s_client"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," 127.0.0.1:4000"))))))}C.isMDXComponent=!0}}]);