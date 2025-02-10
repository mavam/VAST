"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17432],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),g=o,m=d["".concat(s,".").concat(g)]||d[g]||y[g]||i;return a?t.createElement(m,r(r({ref:n},c),{},{components:a})):t.createElement(m,r({ref:n},c))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=a[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8001:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>b,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>I});var t=a(15680),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,n,a)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,d=(e,n)=>{for(var a in n||(n={}))s.call(n,a)&&c(e,a,n[a]);if(p)for(var a of p(n))l.call(n,a)&&c(e,a,n[a]);return e},y=(e,n)=>i(e,r(n)),g=(e,n)=>{var a={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&l.call(e,t)&&(a[t]=e[t]);return a};const m={},u="save_email",h={unversionedId:"tql2/operators/save_email",id:"version-v4.27/tql2/operators/save_email",title:"save_email",description:"Saves bytes through an SMTP server.",source:"@site/versioned_docs/version-v4.27/tql2/operators/save_email.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_email",permalink:"/v4.27/tql2/operators/save_email",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/save_email.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_azure_blob_storage",permalink:"/v4.27/tql2/operators/save_azure_blob_storage"},next:{title:"save_file",permalink:"/v4.27/tql2/operators/save_file"}},b={},I=[{value:"Description",id:"description",level:2},{value:"<code>recipient: str</code>",id:"recipient-str",level:3},{value:"<code>endpoint = str (optional)</code>",id:"endpoint--str-optional",level:3},{value:"<code>from = str (optional)</code>",id:"from--str-optional",level:3},{value:"<code>subject = str (optional)</code>",id:"subject--str-optional",level:3},{value:"<code>username = str (optional)</code>",id:"username--str-optional",level:3},{value:"<code>password = str (optional)</code>",id:"password--str-optional",level:3},{value:"<code>authzid = str (optional)</code>",id:"authzid--str-optional",level:3},{value:"<code>authorization = str (optional)</code>",id:"authorization--str-optional",level:3},{value:"<code>tls = bool (optional)</code>",id:"tls--bool-optional",level:3},{value:"<code>skip_peer_verification = bool (optional)</code>",id:"skip_peer_verification--bool-optional",level:3},{value:"<code>skip_hostname_verification = bool (optional)</code>",id:"skip_hostname_verification--bool-optional",level:3},{value:"<code>mime = bool (optional)</code>",id:"mime--bool-optional",level:3},{value:"<code>verbose = bool (optional)</code>",id:"verbose--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],v={toc:I},N="wrapper";function f(e){var n=e,{components:a}=n,o=g(n,["components"]);return(0,t.yg)(N,y(d(d({},v),o),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"save_email"}),"save_email"),(0,t.yg)("p",null,"Saves bytes through an SMTP server."),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_email"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," recipient"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [endpoint"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, from"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, subject"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, username"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"      password"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, authzid"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, authorization"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, tls"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"      skip_peer_verification"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, skip_hostname_verification"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"      mime"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, verbose"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:"save_email recipient:str, [endpoint=str, from=str, subject=str, username=str,\n      password=str, authzid=str, authorization=str, tls=bool,\n      skip_peer_verification=bool, skip_hostname_verification=bool,\n      mime=bool, verbose=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"save_email")," operator establishes a SMTP(S) connection to a mail server and sends\nbytes as email body."),(0,t.yg)("h3",d({},{id:"recipient-str"}),(0,t.yg)("inlineCode",{parentName:"h3"},"recipient: str")),(0,t.yg)("p",null,"The recipient of the mail."),(0,t.yg)("p",null,"The expected format is either ",(0,t.yg)("inlineCode",{parentName:"p"},"Name <user@example.org>")," with the email in angle\nbrackets, or a plain email adress, such as ",(0,t.yg)("inlineCode",{parentName:"p"},"user@example.org"),"."),(0,t.yg)("h3",d({},{id:"endpoint--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"endpoint = str (optional)")),(0,t.yg)("p",null,"The endpoint of the mail server."),(0,t.yg)("p",null,"To choose between SMTP and SMTPS, provide a URL with with the corresponding\nscheme. For example, ",(0,t.yg)("inlineCode",{parentName:"p"},"smtp://127.0.0.1:25")," will establish an unencrypted\nconnection, whereas ",(0,t.yg)("inlineCode",{parentName:"p"},"smtps://127.0.0.1:25")," an encrypted one. If you specify a\nserver without a schema, the protocol defaults to SMTPS."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"smtp://localhost:25"),"."),(0,t.yg)("h3",d({},{id:"from--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"from = str (optional)")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"From")," header."),(0,t.yg)("p",null,"If you do not specify this parameter, an empty address is sent to the SMTP\nserver which might cause the email to be rejected."),(0,t.yg)("h3",d({},{id:"subject--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"subject = str (optional)")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"Subject")," header."),(0,t.yg)("h3",d({},{id:"username--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"username = str (optional)")),(0,t.yg)("p",null,"The username in an authenticated SMTP connection."),(0,t.yg)("h3",d({},{id:"password--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"password = str (optional)")),(0,t.yg)("p",null,"The password in an authenticated SMTP connection."),(0,t.yg)("h3",d({},{id:"authzid--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"authzid = str (optional)")),(0,t.yg)("p",null,"The authorization identity in an authenticated SMTP connection."),(0,t.yg)("p",null,"This option is only applicable to the PLAIN SASL authentication mechanism where\nit is optional. When not specified only the authentication identity (",(0,t.yg)("inlineCode",{parentName:"p"},"authcid"),")\nas specified by the username is sent to the server, along with the password. The\nserver derives an ",(0,t.yg)("inlineCode",{parentName:"p"},"authzid")," from the ",(0,t.yg)("inlineCode",{parentName:"p"},"authcid")," when not provided, which it then\nuses internally. When the ",(0,t.yg)("inlineCode",{parentName:"p"},"authzid")," is specified it can be used to access\nanother user's inbox, that the user has been granted access to, or a shared\nmailbox."),(0,t.yg)("h3",d({},{id:"authorization--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"authorization = str (optional)")),(0,t.yg)("p",null,"The authorization options for an authenticated SMTP connection."),(0,t.yg)("p",null,"This login option defines the preferred authentication mechanism, e.g.,\n",(0,t.yg)("inlineCode",{parentName:"p"},"AUTH=PLAIN"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"AUTH=LOGIN"),", or ",(0,t.yg)("inlineCode",{parentName:"p"},"AUTH=*"),"."),(0,t.yg)("h3",d({},{id:"tls--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"tls = bool (optional)")),(0,t.yg)("p",null,"If to use TLS. If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", tries to use TLS and fails if a TLS connection\ncannot be establised."),(0,t.yg)("p",null,"Defaults to trying TLS but falling back to unsecure version."),(0,t.yg)("h3",d({},{id:"skip_peer_verification--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"skip_peer_verification = bool (optional)")),(0,t.yg)("p",null,"If to skip certificate verification."),(0,t.yg)("p",null,"By default, an SMTPS connection verifies the authenticity of the peer's\ncertificate. During connection negotiation, the server sends a certificate\nindicating its identity. We verify whether the certificate is authentic,\ni.e., that you can trust that the server is who the certificate says it is."),(0,t.yg)("p",null,"If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", disables loading of the CA certificates and verification of\nthe peer certificate."),(0,t.yg)("h3",d({},{id:"skip_hostname_verification--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"skip_hostname_verification = bool (optional)")),(0,t.yg)("p",null,"If to ignore verification of the server name in the certificate."),(0,t.yg)("p",null,"When negotiating TLS and SSL connections, the server sends a certificate\nindicating its identity. By default, that certificate must indicate that the\nserver is the server to which you meant to connect, or the connection fails.\nThat is, the server has to have the same name in the certificate as is in the\nURL you operate against. We consider the server the intended one when the\n",(0,t.yg)("em",{parentName:"p"},"Common Name")," field or a ",(0,t.yg)("em",{parentName:"p"},"Subject Alternate Name")," field in the certificate\nmatches the hostname in the URL."),(0,t.yg)("p",null,"Setting this to ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," skips this check, but it makes the connection insecure."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",d({},{id:"mime--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"mime = bool (optional)")),(0,t.yg)("p",null,"If to wrap the chunk into a MIME part."),(0,t.yg)("p",null,"The operator uses the metadata of the byte chunk for the\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type")," MIME header."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",d({},{id:"verbose--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"verbose = bool (optional)")),(0,t.yg)("p",null,"Enables verbose output on stderr."),(0,t.yg)("p",null,"This option is helpful for debugging on the command line."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Send the Tenzir version string as CSV to ",(0,t.yg)("inlineCode",{parentName:"p"},"user@example.org"),":"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"version")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_csv")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_email"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "user@example.org"'))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'version\nwrite_csv\nsave_email "user@example.org"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Send the email body as MIME part:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"version")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_email"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "user@example.org"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", mime"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"true"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'version\nwrite_json\nsave_email "user@example.org", mime=true',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"This may result in the following email body:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),'--------------------------s89ecto6c12ILX7893YOEf\nContent-Type: application/json\nContent-Transfer-Encoding: quoted-printable\n\n{\n  "version": "4.10.4+ge0a060567b-dirty",\n  "build": "ge0a060567b-dirty",\n  "major": 4,\n  "minor": 10,\n  "patch": 4\n}\n\n--------------------------s89ecto6c12ILX7893YOEf--\n')))}f.isMDXComponent=!0}}]);