"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64114],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>u});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(s,".").concat(m)]||d[m]||y[m]||p;return a?t.createElement(u,o(o({ref:n},l),{},{components:a})):t.createElement(u,o({ref:n},l))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78121:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>I,contentTitle:()=>g,default:()=>j,frontMatter:()=>u,metadata:()=>b,toc:()=>D});var t=a(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,n,a)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,d=(e,n)=>{for(var a in n||(n={}))s.call(n,a)&&l(e,a,n[a]);if(i)for(var a of i(n))c.call(n,a)&&l(e,a,n[a]);return e},y=(e,n)=>p(e,o(n)),m=(e,n)=>{var a={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&c.call(e,t)&&(a[t]=e[t]);return a};const u={},g="compress_bz2",b={unversionedId:"tql2/operators/compress_bz2",id:"version-v4.26/tql2/operators/compress_bz2",title:"compress_bz2",description:"Compresses a stream of bytes using bz2 compression.",source:"@site/versioned_docs/version-v4.26/tql2/operators/compress_bz2.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/compress_bz2",permalink:"/v4.26/tql2/operators/compress_bz2",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/tql2/operators/compress_bz2.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"compress_brotli",permalink:"/v4.26/tql2/operators/compress_brotli"},next:{title:"compress_gzip",permalink:"/v4.26/tql2/operators/compress_gzip"}},I={},D=[{value:"Description",id:"description",level:2},{value:"<code>level = int (optional)</code>",id:"level--int-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Export all events in a Bzip2-compressed NDJSON file",id:"export-all-events-in-a-bzip2-compressed-ndjson-file",level:3},{value:"Recompress a Bzip2-compressed file at a different compression level",id:"recompress-a-bzip2-compressed-file-at-a-different-compression-level",level:3}],N={toc:D},v="wrapper";function j(e){var n=e,{components:a}=n,r=m(n,["components"]);return(0,t.yg)(v,y(d(d({},N),r),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"compress_bz2"}),"compress_bz2"),(0,t.yg)("p",null,"Compresses a stream of bytes using bz2 compression."),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"compress_bz2"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [level"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:"compress_bz2 [level=int]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"compress_bz2")," operator compresses bytes in a pipeline incrementally."),(0,t.yg)("h3",d({},{id:"level--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"level = int (optional)")),(0,t.yg)("p",null,"The compression level to use. The supported values depend on the codec used. If\nomitted, the default level for the codec is used."),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("h3",d({},{id:"export-all-events-in-a-bzip2-compressed-ndjson-file"}),"Export all events in a Bzip2-compressed NDJSON file"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_ndjson")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"compress_bz2")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/backup.json.bz2"'))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'export\nwrite_ndjson\ncompress_bz2\nsave_file "/tmp/backup.json.bz2"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",d({},{id:"recompress-a-bzip2-compressed-file-at-a-different-compression-level"}),"Recompress a Bzip2-compressed file at a different compression level"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "in.bz2"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"decompress_bz2")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"compress_bz2"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," level"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"18")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "out.bz2"'))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'load_file "in.bz2"\ndecompress_bz2\ncompress_bz2 level=18\nsave_file "out.bz2"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}j.isMDXComponent=!0}}]);