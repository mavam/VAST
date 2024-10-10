"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42717],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=r,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||p;return t?n.createElement(m,o(o({ref:a},y),{},{components:t})):n.createElement(m,o({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2321:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>E});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&y(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&y(e,t,a[t]);return e},g=(e,a)=>p(e,o(a)),d=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},u="print",f={unversionedId:"operators/print",id:"operators/print",title:"print",description:"Prints the specified record field as a string.",source:"@site/docs/operators/print.md",sourceDirName:"operators",slug:"/operators/print",permalink:"/next/operators/print",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/print.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"plugins",permalink:"/next/operators/plugins"},next:{title:"processes",permalink:"/next/operators/processes"}},N={},E=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;input&gt;</code>",id:"input",level:3},{value:"<code>&lt;printer&gt; [&lt;args...&gt;]</code>",id:"printer-args",level:3},{value:"Examples",id:"examples",level:2}],b={toc:E},h="wrapper";function v(e){var a=e,{components:t}=a,r=d(a,["components"]);return(0,n.yg)(h,g(c(c({},b),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"print"}),"print"),(0,n.yg)("p",null,"Prints the specified record field as a string."),(0,n.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",c({parentName:"pre"},{}),"print <input> <printer> [<args...>]\n")),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"print")," operator prints a given ",(0,n.yg)("inlineCode",{parentName:"p"},"<input>")," field of type ",(0,n.yg)("inlineCode",{parentName:"p"},"record")," using\n",(0,n.yg)("inlineCode",{parentName:"p"},"<printer>")," and replaces this field with the result."),(0,n.yg)("h3",c({},{id:"input"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<input>")),(0,n.yg)("p",null,"Specifies the field of interest. The field must be a record type."),(0,n.yg)("h3",c({},{id:"printer-args"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<printer> [<args...>]")),(0,n.yg)("p",null,"Specifies the printer format and the corresponding arguments specific to each\nprinter."),(0,n.yg)("admonition",c({},{title:"Text-based and Binary Formats",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"print")," operator is currently restricted to text-based formats like JSON or\nCSV. Binary formats like PCAP or Parquet are not supported.")),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Print ",(0,n.yg)("a",c({parentName:"p"},{href:"/next/formats/json"}),"JSON")," from the ",(0,n.yg)("inlineCode",{parentName:"p"},"flow")," field in the input as\n",(0,n.yg)("a",c({parentName:"p"},{href:"/next/formats/csv"}),"CSV"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",c({parentName:"pre"},{}),"print flow csv --no-header\n")),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Input"),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "timestamp"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2021-11-17T13:32:43.237882"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "flow_id"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"852833247340038"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "flow"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "pkts_toserver"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "pkts_toclient"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "bytes_toserver"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"54"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "bytes_toclient"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," }")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Output"),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "timestamp"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2021-11-17T13:32:43.237882"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "flow_id"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"852833247340038"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "flow"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1,0,54,0"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}v.isMDXComponent=!0}}]);