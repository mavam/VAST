"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7130],{15680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,m=d["".concat(c,".").concat(g)]||d[g]||y[g]||o;return t?n.createElement(m,p(p({ref:a},l),{},{components:t})):n.createElement(m,p({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=g;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68559:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>D,frontMatter:()=>m,metadata:()=>I,toc:()=>N});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&l(e,t,a[t]);if(i)for(var t of i(a))s.call(a,t)&&l(e,t,a[t]);return e},y=(e,a)=>o(e,p(a)),g=(e,a)=>{var t={};for(var n in e)c.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={},u="create_geoip",I={unversionedId:"tql2/operators/context/create_geoip",id:"version-v4.26/tql2/operators/context/create_geoip",title:"create_geoip",description:"Creates a GeoIP context.",source:"@site/versioned_docs/version-v4.26/tql2/operators/context/create_geoip.md",sourceDirName:"tql2/operators/context",slug:"/tql2/operators/context/create_geoip",permalink:"/v4.26/tql2/operators/context/create_geoip",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/tql2/operators/context/create_geoip.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"create_bloom_filter",permalink:"/v4.26/tql2/operators/context/create_bloom_filter"},next:{title:"create_lookup_table",permalink:"/v4.26/tql2/operators/context/create_lookup_table"}},b={},N=[{value:"Description",id:"description",level:2},{value:"<code>name: string</code>",id:"name-string",level:3},{value:"<code>db_path = string (optional)</code>",id:"db_path--string-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Create a new GeoIP context",id:"create-a-new-geoip-context",level:3},{value:"Populate a GeoIP context from a remote location",id:"populate-a-geoip-context-from-a-remote-location",level:3},{value:"See Also",id:"see-also",level:2}],x={toc:N},h="wrapper";function D(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(h,y(d(d({},x),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"create_geoip"}),"create_geoip"),(0,n.yg)("p",null,"Creates a GeoIP context."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"create_geoip"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," name"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [db_path"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:"context::create_geoip name:string, [db_path=string]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"context::create_geoip")," operator constructs a new context of type\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/enrichment/#geoip"}),"GeoIP"),"."),(0,n.yg)("p",null,"You must either provide a database with the ",(0,n.yg)("inlineCode",{parentName:"p"},"db_path")," argument or use\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/load"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::load"))," to populate the context after creation."),(0,n.yg)("p",null,"You can also create a GeoIP context as code by adding it to ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.contexts")," in\nyour ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.yaml"),":"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"yaml","data-theme":"github-dark-default"}),"<prefix>/etc/tenzir/tenzir.yaml"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),"  contexts"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),"    my-geoips"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),"      type"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"geoip")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),"      arguments"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),"        db-path"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"/usr/local/share/stuff/high-res-geoips.mmdb"))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:"tenzir:\n  contexts:\n    my-geoips:\n      type: geoip\n      arguments:\n        db-path: /usr/local/share/stuff/high-res-geoips.mmdb",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"Making changes to ",(0,n.yg)("inlineCode",{parentName:"p"},"arguments")," of an already created context has no effect."),(0,n.yg)("h3",d({},{id:"name-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"name: string")),(0,n.yg)("p",null,"The name of the new GeoIP context."),(0,n.yg)("h3",d({},{id:"db_path--string-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"db_path = string (optional)")),(0,n.yg)("p",null,"The path to the ",(0,n.yg)("a",d({parentName:"p"},{href:"https://maxmind.github.io/MaxMind-DB/"}),"MMDB")," database, relative\nto the node's working directory."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"create-a-new-geoip-context"}),"Create a new GeoIP context"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"create_geoip"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", db_path"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"GeoLite2-City.mmdb"'))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:'context::create_geoip "ctx", db_path="GeoLite2-City.mmdb"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h3",d({},{id:"populate-a-geoip-context-from-a-remote-location"}),"Populate a GeoIP context from a remote location"),(0,n.yg)("p",null,"Load ",(0,n.yg)("a",d({parentName:"p"},{href:"https://data.public.lu/en/datasets/geo-open-ip-address-geolocation-per-country-in-mmdb-format/"}),"CIRCL's Geo\nOpen"),"\ndataset from November 12, 2024:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "https://data.public.lu/fr/datasets/r/69064b5d-bf46-4244-b752-2096b16917a4"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'))),(0,n.yg)("button",d({parentName:"pre"},{type:"button",data:'load_http "https://data.public.lu/fr/datasets/r/69064b5d-bf46-4244-b752-2096b16917a4"\ncontext::load "ctx"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",d({parentName:"button"},{className:"ready"})),(0,n.yg)("span",d({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/create_lookup_table"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_lookup_table")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/create_bloom_filter"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_bloom_filter")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/enrich"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::enrich")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/erase"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::erase")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/inspect"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::inspect")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/list"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::list")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/load"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::load")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/remove"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::remove")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/update"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::reset")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/save"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::save")),",\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.26/tql2/operators/context/update"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::update")),","))}D.isMDXComponent=!0}}]);