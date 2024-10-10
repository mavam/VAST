"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25614],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,g=d["".concat(l,".").concat(u)]||d[u]||y[u]||o;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var a=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>o(e,p(n)),u=(e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const g={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},m="udp",f={unversionedId:"connectors/udp",id:"connectors/udp",title:"udp",description:"Loads bytes from and saves bytes to a UDP socket.",source:"@site/docs/connectors/udp.md",sourceDirName:"connectors",slug:"/connectors/udp",permalink:"/next/connectors/udp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/connectors/udp.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"tcp",permalink:"/next/connectors/tcp"},next:{title:"zmq",permalink:"/next/connectors/zmq"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-n,--insert-newlines</code> (Saver, Loader)",id:"-n--insert-newlines-saver-loader",level:3},{value:"Examples",id:"examples",level:2}],v={toc:b},N="wrapper";function O(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,a.yg)(N,y(d(d({},v),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"udp"}),"udp"),(0,a.yg)("p",null,"Loads bytes from and saves bytes to a UDP socket."),(0,a.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("p",null,"Loader:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"udp [-c|--connect] [-n|--insert-newlines] <endpoint>\n")),(0,a.yg)("p",null,"Saver:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"udp <endpoint>\n")),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"udp")," connector supports UDP sockets. The loader reads blocks of\nbytes from the socket, and the saver writes them to the socket."),(0,a.yg)("p",null,"The loader defaults to creating a socket in listening mode. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"--connect")," if\nthe loader should initiate the connection instead."),(0,a.yg)("p",null,"When you have a socket in listening mode, use ",(0,a.yg)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections on\nall interfaces. The ",(0,a.yg)("a",d({parentName:"p"},{href:"/next/operators/nics"}),(0,a.yg)("inlineCode",{parentName:"a"},"nics"))," operator lists all all\navailable interfaces."),(0,a.yg)("h3",d({},{id:"endpoint"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,a.yg)("p",null,"The address of the remote endpoint to connect to when using ",(0,a.yg)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen"),"."),(0,a.yg)("h3",d({},{id:"-c--connect-loader"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,a.yg)("p",null,"Connect to ",(0,a.yg)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,a.yg)("h3",d({},{id:"-n--insert-newlines-saver-loader"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-n,--insert-newlines")," (Saver, Loader)"),(0,a.yg)("p",null,"Append a newline character (",(0,a.yg)("inlineCode",{parentName:"p"},"\\n"),") at the end of every datagram."),(0,a.yg)("p",null,"This option comes in handy in combination with line-based parsers downstream,\nsuch as NDJSON."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Import JSON via UDP by listenting on IP address ",(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," at port ",(0,a.yg)("inlineCode",{parentName:"p"},"56789"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"from udp://127.0.0.1:56789\n| import\n")),(0,a.yg)("p",null,"Use a shell to test the UDP loader with netcat:"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"bash","data-theme":"github-dark-default"}),"Shell 1"),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," 'from udp://127.0.0.1:56789'"))))),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"bash","data-theme":"github-dark-default"}),"Shell 2"),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"jq"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -n"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," '{foo: 42}'"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}})," nc"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -u"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 127.0.0.1"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 56789"))))),(0,a.yg)("p",null,"Send the Tenzir version as CSV file to a remote endpoint via UDP:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"version\n| write csv\n| save udp 127.0.0.1:56789\n")),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"nc -ul 127.0.0.1 56789")," to spin up a UDP server to test the above pipeline."))}O.isMDXComponent=!0}}]);