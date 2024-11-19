"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7692],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,f=d["".concat(p,".").concat(u)]||d[u]||y[u]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var r=a(15680),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&c(e,a,t[a]);return e},y=(e,t)=>o(e,l(t)),u=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const f={},m="save_file",g={unversionedId:"tql2/operators/save_file",id:"tql2/operators/save_file",title:"save_file",description:"Writes a byte stream to a file.",source:"@site/docs/tql2/operators/save_file.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_file",permalink:"/next/tql2/operators/save_file",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/save_file.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_email",permalink:"/next/tql2/operators/save_email"},next:{title:"save_ftp",permalink:"/next/tql2/operators/save_ftp"}},b={},v=[{value:"Description",id:"description",level:2},{value:"<code>path: str</code>",id:"path-str",level:3},{value:"<code>append = bool (optional)</code>",id:"append--bool-optional",level:3},{value:"<code>real_time = bool (optional)</code>",id:"real_time--bool-optional",level:3},{value:"<code>uds = bool (optional)</code>",id:"uds--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Save bytes to a file",id:"save-bytes-to-a-file",level:3}],h={toc:v},O="wrapper";function N(e){var t=e,{components:a}=t,n=u(t,["components"]);return(0,r.yg)(O,y(d(d({},h),n),{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"save_file"}),"save_file"),(0,r.yg)("p",null,"Writes a byte stream to a file."),(0,r.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," path"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [append"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, real_time"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, uds"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,r.yg)("h2",d({},{id:"description"}),"Description"),(0,r.yg)("p",null,"Writes a byte stream to a file."),(0,r.yg)("h3",d({},{id:"path-str"}),(0,r.yg)("inlineCode",{parentName:"h3"},"path: str")),(0,r.yg)("p",null,"The file path to write to. If intermediate directories do not exist, they will\nbe created. When ",(0,r.yg)("inlineCode",{parentName:"p"},"~")," is the first character, it will be substituted with the\nvalue of the ",(0,r.yg)("inlineCode",{parentName:"p"},"$HOME")," environment variable."),(0,r.yg)("h3",d({},{id:"append--bool-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"append = bool (optional)")),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", appends to the file instead of overwriting it."),(0,r.yg)("h3",d({},{id:"real_time--bool-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"real_time = bool (optional)")),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", immediately synchronizes the file with every chunk of bytes instead\nof buffering bytes to batch filesystem write operations."),(0,r.yg)("h3",d({},{id:"uds--bool-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"uds = bool (optional)")),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", creates a Unix Domain Socket instead of a normal file. Cannot be\ncombined with ",(0,r.yg)("inlineCode",{parentName:"p"},"append=true"),"."),(0,r.yg)("h2",d({},{id:"examples"}),"Examples"),(0,r.yg)("h3",d({},{id:"save-bytes-to-a-file"}),"Save bytes to a file"),(0,r.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/out.txt"'))))))}N.isMDXComponent=!0}}]);