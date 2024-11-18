"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91119],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=l(n),m=a,u=y["".concat(o,".").concat(m)]||y[m]||c[m]||i;return n?r.createElement(u,p(p({ref:t},d),{},{components:n})):r.createElement(u,p({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[y]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>i(e,p(t)),m=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const u={sidebar_custom_props:{format:{parser:!0,printer:!0}}},g="zeek-tsv",f={unversionedId:"formats/zeek-tsv",id:"formats/zeek-tsv",title:"zeek-tsv",description:"Reads and writes Zeek tab-separated values.",source:"@site/docs/formats/zeek-tsv.md",sourceDirName:"formats",slug:"/formats/zeek-tsv",permalink:"/next/formats/zeek-tsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/zeek-tsv.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"zeek-json",permalink:"/next/formats/zeek-json"},next:{title:"Data Model",permalink:"/next/data-model"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--set-separator=&lt;string&gt;</code> (Printer)",id:"-s--set-separatorstring-printer",level:3},{value:"<code>-e|--empty-field=&lt;string&gt;</code> (Printer)",id:"-e--empty-fieldstring-printer",level:3},{value:"<code>-u|--unset-field=&lt;string&gt;</code> (Printer)",id:"-u--unset-fieldstring-printer",level:3},{value:"<code>-d|--disable-timestamp-tags</code> (Printer)",id:"-d--disable-timestamp-tags-printer",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},k="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.yg)(k,c(y(y({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",y({},{id:"zeek-tsv"}),"zeek-tsv"),(0,r.yg)("p",null,"Reads and writes Zeek tab-separated values."),(0,r.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("p",null,"Parser:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"zeek-tsv\n")),(0,r.yg)("p",null,"Printer:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"zeek-tsv [-s|--set-separator=<string>] [-e|--empty-field=<string>]\n         [-u|--unset-field=<string>]\n")),(0,r.yg)("h2",y({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",y({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," network security monitor comes with its own\ntab-separated value (TSV) format for representing logs. This format includes\nadditional header fields with field names, type annotations, and additional\nmetadata."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"zeek-tsv")," parser processes this metadata to extract a schema for the\nsubsequent log entries. Similarly, the ",(0,r.yg)("inlineCode",{parentName:"p"},"zeek-tsv")," printer (re)generates the TSV\nmetadata based on Tenzir's internal schema. Tenzir's data model is a superset of\nZeek's, so the conversion into Zeek TSV may be lossy. The Zeek types ",(0,r.yg)("inlineCode",{parentName:"p"},"count"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"real"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"addr")," map to the respective Tenzir types ",(0,r.yg)("inlineCode",{parentName:"p"},"uint64"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"double"),", and\n",(0,r.yg)("inlineCode",{parentName:"p"},"ip"),"."),(0,r.yg)("p",null,"Here's an example of a typical Zeek ",(0,r.yg)("inlineCode",{parentName:"p"},"conn.log")," in TSV form:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"#separator \\x09\n#set_separator  ,\n#empty_field  (empty)\n#unset_field  -\n#path conn\n#open 2014-05-23-18-02-04\n#fields ts  uid id.orig_h id.orig_p id.resp_h id.resp_p proto service duration  \u2026orig_bytes resp_bytes  conn_state  local_orig  missed_bytes  history orig_pkts \u2026orig_ip_bytes  resp_pkts resp_ip_bytes tunnel_parents\n#types  time  string  addr  port  addr  port  enum  string  interval  count coun\u2026t  string  bool  count string  count count count count table[string]\n1258531221.486539 Pii6cUUq1v4 192.168.1.102 68  192.168.1.1 67  udp - 0.163820  \u2026301  300 SF  - 0 Dd  1 329 1 328 (empty)\n1258531680.237254 nkCxlvNN8pi 192.168.1.103 137 192.168.1.255 137 udp dns 3.7801\u202625 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531693.816224 9VdICMMnxQ7 192.168.1.102 137 192.168.1.255 137 udp dns 3.7486\u202647 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531635.800933 bEgBnkI31Vf 192.168.1.103 138 192.168.1.255 138 udp - 46.72538\u20260  560 0 S0  - 0 D 3 644 0 0 (empty)\n1258531693.825212 Ol4qkvXOksc 192.168.1.102 138 192.168.1.255 138 udp - 2.248589\u2026  348  0 S0  - 0 D 2 404 0 0 (empty)\n1258531803.872834 kmnBNBtl96d 192.168.1.104 137 192.168.1.255 137 udp dns 3.7488\u202693 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531747.077012 CFIX6YVTFp2 192.168.1.104 138 192.168.1.255 138 udp - 59.05289\u20268  549 0 S0  - 0 D 3 633 0 0 (empty)\n1258531924.321413 KlF6tbPUSQ1 192.168.1.103 68  192.168.1.1 67  udp - 0.044779  \u2026303  300 SF  - 0 Dd  1 331 1 328 (empty)\n1258531939.613071 tP3DM6npTdj 192.168.1.102 138 192.168.1.255 138 udp - - - - S0\u2026  -  0 D 1 229 0 0 (empty)\n1258532046.693816 Jb4jIDToo77 192.168.1.104 68  192.168.1.1 67  udp - 0.002103  \u2026311  300 SF  - 0 Dd  1 339 1 328 (empty)\n1258532143.457078 xvWLhxgUmj5 192.168.1.102 1170  192.168.1.1 53  udp dns 0.0685\u202611 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532203.657268 feNcvrZfDbf 192.168.1.104 1174  192.168.1.1 53  udp dns 0.1709\u202662 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532331.365294 aLsTcZJHAwa 192.168.1.1 5353  224.0.0.251 5353  udp dns 0.1003\u202681 273 0 S0  - 0 D 2 329 0 0 (empty)\n")),(0,r.yg)("h3",y({},{id:"-s--set-separatorstring-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-s|--set-separator=<string>")," (Printer)"),(0,r.yg)("p",null,"Specifies the set separator."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"\\x09"),"."),(0,r.yg)("h3",y({},{id:"-e--empty-fieldstring-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-e|--empty-field=<string>")," (Printer)"),(0,r.yg)("p",null,"Specifies the separator for empty fields."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"(empty)"),"."),(0,r.yg)("h3",y({},{id:"-u--unset-fieldstring-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-u|--unset-field=<string>")," (Printer)"),(0,r.yg)("p",null,'Specifies the separator for unset "null" fields.'),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"-"),"."),(0,r.yg)("h3",y({},{id:"-d--disable-timestamp-tags-printer"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-d|--disable-timestamp-tags")," (Printer)"),(0,r.yg)("p",null,"Disables the ",(0,r.yg)("inlineCode",{parentName:"p"},"#open")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"#close")," timestamp tags."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,r.yg)("h2",y({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Read a Zeek ",(0,r.yg)("inlineCode",{parentName:"p"},"conn.log")," from a file:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"from file /tmp/conn.log read zeek-tsv\n")),(0,r.yg)("p",null,"Read compressed Zeek TSV logs in one shot:"),(0,r.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,r.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"gunzip"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -c"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," *"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),".gz"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}})," tenzir"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read zeek-tsv | ...'"))))),(0,r.yg)("p",null,"Write Zeek TSV into a directory, one file per schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"to directory /tmp/results write zeek-tsv\n")))}N.isMDXComponent=!0}}]);