"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67412],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||y[u]||i;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var o=t(15680),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&p(e,t,n[t]);return e},y=(e,n)=>i(e,a(n)),u=(e,n)=>{var t={};for(var o in e)c.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&s.call(e,o)&&(t[o]=e[o]);return t};const g={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},m="tcp",f={unversionedId:"connectors/tcp",id:"connectors/tcp",title:"tcp",description:"Loads bytes from a TCP or TLS connection.",source:"@site/docs/connectors/tcp.md",sourceDirName:"connectors",slug:"/connectors/tcp",permalink:"/next/connectors/tcp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/connectors/tcp.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"stdout",permalink:"/next/connectors/stdout"},next:{title:"udp",permalink:"/next/connectors/udp"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-l,--listen</code> (Saver)",id:"-l--listen-saver",level:3},{value:"<code>-o,--listen-once</code>",id:"-o--listen-once",level:3},{value:"<code>--tls</code>",id:"--tls",level:3},{value:"<code>--certfile</code>",id:"--certfile",level:3},{value:"<code>--keyfile</code>",id:"--keyfile",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function O(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,o.yg)(N,y(d(d({},b),r),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",d({},{id:"tcp"}),"tcp"),(0,o.yg)("p",null,"Loads bytes from a TCP or TLS connection."),(0,o.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,o.yg)("p",null,"Loader:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"tcp [-c|--connect] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,o.yg)("p",null,"Saver:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"tcp [-l|--listen] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,o.yg)("h2",d({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"tcp")," connector supports TCP or TLS connections. The loader reads blocks of\nbytes from the socket, and the saver writes them to the socket."),(0,o.yg)("p",null,"The loader defaults to creating a socket in listening mode. Use ",(0,o.yg)("inlineCode",{parentName:"p"},"--connect")," if\nthe loader should initiate the connection instead. The saver defaults to\ncreating a socket in connect mode. Use ",(0,o.yg)("inlineCode",{parentName:"p"},"--listen")," if the saver should instead\nlisten on a socket."),(0,o.yg)("p",null,"When you have a socket in listening mode, use ",(0,o.yg)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections on\nall interfaces. Both saver and loader also have a ",(0,o.yg)("inlineCode",{parentName:"p"},"--listen-once")," option that\nwill stop the pipeline after the first connection terminated. The\n",(0,o.yg)("a",d({parentName:"p"},{href:"/next/operators/nics"}),(0,o.yg)("inlineCode",{parentName:"a"},"nics"))," operator lists all all available interfaces."),(0,o.yg)("admonition",d({},{title:"One connection at at time",type:"caution"}),(0,o.yg)("p",{parentName:"admonition"},"A single pipeline can accept at most ",(0,o.yg)("em",{parentName:"p"},"one")," TCP connection at a time. If another\nclient attempts to connect to the same listening socket, it will time out. The\nreason for this behavior is that the downstream operator (typically a parser)\nmay exhibit undefined behavior if it receives data from multiple sockets.")),(0,o.yg)("h3",d({},{id:"endpoint"}),(0,o.yg)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,o.yg)("p",null,"The address of the remote endpoint to connect to when using ",(0,o.yg)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,o.yg)("inlineCode",{parentName:"p"},"--listen"),"."),(0,o.yg)("h3",d({},{id:"-c--connect-loader"}),(0,o.yg)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,o.yg)("p",null,"Connect to ",(0,o.yg)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,o.yg)("h3",d({},{id:"-l--listen-saver"}),(0,o.yg)("inlineCode",{parentName:"h3"},"-l,--listen")," (Saver)"),(0,o.yg)("p",null,"Listen at ",(0,o.yg)("inlineCode",{parentName:"p"},"<endpoint>")," instead of connecting to it."),(0,o.yg)("h3",d({},{id:"-o--listen-once"}),(0,o.yg)("inlineCode",{parentName:"h3"},"-o,--listen-once")),(0,o.yg)("p",null,"When listening to a socket, only process a single connection instead of looping\nover all connecting clients forever."),(0,o.yg)("p",null,"Requires a loader or saver with ",(0,o.yg)("inlineCode",{parentName:"p"},"--listen"),"."),(0,o.yg)("h3",d({},{id:"--tls"}),(0,o.yg)("inlineCode",{parentName:"h3"},"--tls")),(0,o.yg)("p",null,"Wrap the connection into a TLS secured stream."),(0,o.yg)("h3",d({},{id:"--certfile"}),(0,o.yg)("inlineCode",{parentName:"h3"},"--certfile")),(0,o.yg)("p",null,"Path to a ",(0,o.yg)("inlineCode",{parentName:"p"},".pem")," file containing the TLS certificate for the server."),(0,o.yg)("p",null,"Ignored unless ",(0,o.yg)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,o.yg)("h3",d({},{id:"--keyfile"}),(0,o.yg)("inlineCode",{parentName:"h3"},"--keyfile")),(0,o.yg)("p",null,"Path to a ",(0,o.yg)("inlineCode",{parentName:"p"},".pem")," file containing the private key for the certificate."),(0,o.yg)("p",null,"Ignored unless ",(0,o.yg)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,o.yg)("h2",d({},{id:"examples"}),"Examples"),(0,o.yg)("p",null,"Read raw bytes by connecting to a TCP endpoint:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:8000\n")),(0,o.yg)("p",null,"Test this locally by spinning up a local server with ",(0,o.yg)("inlineCode",{parentName:"p"},"socat"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"echo foo | socat TCP-LISTEN:8000 stdout\n")),(0,o.yg)("p",null,"Listen on localhost and wait for incoming TLS connections:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:4000 --tls --certfile key_and_cert.pem --keyfile key_and_cert.pem -k\n")),(0,o.yg)("p",null,"The above example uses a self-signed certificate that can be generated like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"openssl req -x509 -newkey rsa:2048 -keyout key_and_cert.pem -out key_and_cert.pem -days 365 -nodes\n")),(0,o.yg)("p",null,"Test the endpoint locally by issuing a TLS connection:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"openssl s_client 127.0.0.1:4000\n")))}O.isMDXComponent=!0}}]);