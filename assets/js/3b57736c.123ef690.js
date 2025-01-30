"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60911],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,g=l["".concat(d,".").concat(u)]||l[u]||y[u]||o;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[l]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>m,default:()=>f,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var a=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>o(e,p(n)),u=(e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const g={},m="read_zeek_tsv",b={unversionedId:"tql2/operators/read_zeek_tsv",id:"version-v4.27/tql2/operators/read_zeek_tsv",title:"read_zeek_tsv",description:"Parse an incoming Zeek TSV stream into events.",source:"@site/versioned_docs/version-v4.27/tql2/operators/read_zeek_tsv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_zeek_tsv",permalink:"/tql2/operators/read_zeek_tsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/tql2/operators/read_zeek_tsv.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_zeek_json",permalink:"/tql2/operators/read_zeek_json"},next:{title:"remote",permalink:"/tql2/operators/remote"}},I={},v=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Read a Zeek <code>conn.log</code> from a file",id:"read-a-zeek-connlog-from-a-file",level:3}],D={toc:v},h="wrapper";function f(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,a.yg)(h,y(l(l({},D),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",l({},{id:"read_zeek_tsv"}),"read_zeek_tsv"),(0,a.yg)("p",null,"Parse an incoming ",(0,a.yg)("inlineCode",{parentName:"p"},"Zeek TSV")," stream into events."),(0,a.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",l({parentName:"code"},{"data-line":""}),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_zeek_tsv"))),(0,a.yg)("button",l({parentName:"pre"},{type:"button",data:"read_zeek_tsv",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",l({parentName:"button"},{className:"ready"})),(0,a.yg)("span",l({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",l({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("a",l({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," network security monitor comes with its own\ntab-separated value (TSV) format for representing logs. This format includes\nadditional header fields with field names, type annotations, and additional\nmetadata."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"read_zeek_tsv")," operator processes this metadata to extract a schema for the\nsubsequent log entries. The Zeek types ",(0,a.yg)("inlineCode",{parentName:"p"},"count"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"real"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"addr")," map to the\nrespective Tenzir types ",(0,a.yg)("inlineCode",{parentName:"p"},"uint64"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"double"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"ip"),"."),(0,a.yg)("p",null,"Here's an example of a typical Zeek ",(0,a.yg)("inlineCode",{parentName:"p"},"conn.log")," in TSV form:"),(0,a.yg)("pre",null,(0,a.yg)("code",l({parentName:"pre"},{}),"#separator \\x09\n#set_separator  ,\n#empty_field  (empty)\n#unset_field  -\n#path conn\n#open 2014-05-23-18-02-04\n#fields ts  uid id.orig_h id.orig_p id.resp_h id.resp_p proto service duration  \u2026orig_bytes resp_bytes  conn_state  local_orig  missed_bytes  history orig_pkts \u2026orig_ip_bytes  resp_pkts resp_ip_bytes tunnel_parents\n#types  time  string  addr  port  addr  port  enum  string  interval  count coun\u2026t  string  bool  count string  count count count count table[string]\n1258531221.486539 Pii6cUUq1v4 192.168.1.102 68  192.168.1.1 67  udp - 0.163820  \u2026301  300 SF  - 0 Dd  1 329 1 328 (empty)\n1258531680.237254 nkCxlvNN8pi 192.168.1.103 137 192.168.1.255 137 udp dns 3.7801\u202625 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531693.816224 9VdICMMnxQ7 192.168.1.102 137 192.168.1.255 137 udp dns 3.7486\u202647 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531635.800933 bEgBnkI31Vf 192.168.1.103 138 192.168.1.255 138 udp - 46.72538\u20260  560 0 S0  - 0 D 3 644 0 0 (empty)\n1258531693.825212 Ol4qkvXOksc 192.168.1.102 138 192.168.1.255 138 udp - 2.248589\u2026  348  0 S0  - 0 D 2 404 0 0 (empty)\n1258531803.872834 kmnBNBtl96d 192.168.1.104 137 192.168.1.255 137 udp dns 3.7488\u202693 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531747.077012 CFIX6YVTFp2 192.168.1.104 138 192.168.1.255 138 udp - 59.05289\u20268  549 0 S0  - 0 D 3 633 0 0 (empty)\n1258531924.321413 KlF6tbPUSQ1 192.168.1.103 68  192.168.1.1 67  udp - 0.044779  \u2026303  300 SF  - 0 Dd  1 331 1 328 (empty)\n1258531939.613071 tP3DM6npTdj 192.168.1.102 138 192.168.1.255 138 udp - - - - S0\u2026  -  0 D 1 229 0 0 (empty)\n1258532046.693816 Jb4jIDToo77 192.168.1.104 68  192.168.1.1 67  udp - 0.002103  \u2026311  300 SF  - 0 Dd  1 339 1 328 (empty)\n1258532143.457078 xvWLhxgUmj5 192.168.1.102 1170  192.168.1.1 53  udp dns 0.0685\u202611 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532203.657268 feNcvrZfDbf 192.168.1.104 1174  192.168.1.1 53  udp dns 0.1709\u202662 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532331.365294 aLsTcZJHAwa 192.168.1.1 5353  224.0.0.251 5353  udp dns 0.1003\u202681 273 0 S0  - 0 D 2 329 0 0 (empty)\n")),(0,a.yg)("h2",l({},{id:"examples"}),"Examples"),(0,a.yg)("h3",l({},{id:"read-a-zeek-connlog-from-a-file"}),"Read a Zeek ",(0,a.yg)("inlineCode",{parentName:"h3"},"conn.log")," from a file"),(0,a.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",l({parentName:"code"},{"data-line":""}),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/conn.log"'),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," ")),"\n",(0,a.yg)("span",l({parentName:"code"},{"data-line":""}),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_zeek_tsv"))),(0,a.yg)("button",l({parentName:"pre"},{type:"button",data:'load_file "/tmp/conn.log" \nread_zeek_tsv',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",l({parentName:"button"},{className:"ready"})),(0,a.yg)("span",l({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}f.isMDXComponent=!0}}]);