"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3152],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),y=i(a),m=r,d=y["".concat(o,".").concat(m)]||y[m]||c[m]||p;return a?n.createElement(d,l(l({ref:t},g),{},{components:a})):n.createElement(d,l({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[y]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<p;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>f,toc:()=>F});var n=a(15680),r=Object.defineProperty,p=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&g(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&g(e,a,t[a]);return e},c=(e,t)=>p(e,l(t)),m=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const d={},u="split_regex",f={unversionedId:"tql2/functions/split_regex",id:"tql2/functions/split_regex",title:"split_regex",description:"Splits a string into substrings with a regex.",source:"@site/docs/tql2/functions/split_regex.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/split_regex",permalink:"/next/tql2/functions/split_regex",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/split_regex.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"split",permalink:"/next/tql2/functions/split"},next:{title:"sqrt",permalink:"/next/tql2/functions/sqrt"}},N={},F=[{value:"Description",id:"description",level:2},{value:"<code>x: string</code>",id:"x-string",level:3},{value:"<code>pattern: string</code>",id:"pattern-string",level:3},{value:"<code>max: int (optional)</code>",id:"max-int-optional",level:3},{value:"<code>reverse: bool (optional)</code>",id:"reverse-bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Split a string using a regex pattern",id:"split-a-string-using-a-regex-pattern",level:3},{value:"Limit the number of splits",id:"limit-the-number-of-splits",level:3},{value:"See Also",id:"see-also",level:2}],b={toc:F},h="wrapper";function x(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.yg)(h,c(y(y({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"split_regex"}),"split_regex"),(0,n.yg)("p",null,"Splits a string into substrings with a regex."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"split_regex"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, pattern"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [max"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int], [reverse"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]) "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," list"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"split_regex")," function splits the input string ",(0,n.yg)("inlineCode",{parentName:"p"},"x")," into a list of\nsubstrings using the specified regular expression ",(0,n.yg)("inlineCode",{parentName:"p"},"pattern"),". Optional\narguments allow limiting the number of splits (",(0,n.yg)("inlineCode",{parentName:"p"},"max"),") and reversing the\nsplitting direction (",(0,n.yg)("inlineCode",{parentName:"p"},"reverse"),")."),(0,n.yg)("h3",y({},{id:"x-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"x: string")),(0,n.yg)("p",null,"The string to split."),(0,n.yg)("h3",y({},{id:"pattern-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"pattern: string")),(0,n.yg)("p",null,"The regular expression used for splitting."),(0,n.yg)("h3",y({},{id:"max-int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"max: int (optional)")),(0,n.yg)("p",null,"The maximum number of splits to perform."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"0"),", meaning no limit."),(0,n.yg)("h3",y({},{id:"reverse-bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"reverse: bool (optional)")),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", splits from the end of the string."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"split-a-string-using-a-regex-pattern"}),"Split a string using a regex pattern"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {xs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," split_regex"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a1b2c"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", r"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"\\d"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{xs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"c"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'""'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}"))))),(0,n.yg)("h3",y({},{id:"limit-the-number-of-splits"}),"Limit the number of splits"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {xs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," split_regex"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a1b2c3"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", r"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"\\d"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", max"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{xs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b2c3"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}"))))),(0,n.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/split"}),(0,n.yg)("inlineCode",{parentName:"a"},"split")),", ",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/join"}),(0,n.yg)("inlineCode",{parentName:"a"},"join"))))}x.isMDXComponent=!0}}]);