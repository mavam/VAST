"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53151],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>E});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=y(n),g=r,E=m["".concat(l,".").concat(g)]||m[g]||i[g]||p;return n?t.createElement(E,s(s({ref:a},c),{},{components:n})):t.createElement(E,s({ref:a},c))}));function E(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22494:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>d,default:()=>v,frontMatter:()=>E,metadata:()=>u,toc:()=>f});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},i=(e,a)=>p(e,s(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const E={sidebar_custom_props:{operator:{transformation:!0}}},d="enumerate",u={unversionedId:"operators/enumerate",id:"version-v4.20/operators/enumerate",title:"enumerate",description:"Prepend a column with row numbers.",source:"@site/versioned_docs/version-v4.20/operators/enumerate.md",sourceDirName:"operators",slug:"/operators/enumerate",permalink:"/v4.20/operators/enumerate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/enumerate.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"enrich",permalink:"/v4.20/operators/enrich"},next:{title:"export",permalink:"/v4.20/operators/export"}},N={},f=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"Examples",id:"examples",level:2}],F={toc:f},D="wrapper";function v(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(D,i(m(m({},F),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",m({},{id:"enumerate"}),"enumerate"),(0,t.yg)("p",null,"Prepend a column with row numbers."),(0,t.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"enumerate [<field>]\n")),(0,t.yg)("h2",m({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"enumerate")," operator prepends a new column with row numbers to the beginning\nof the input record."),(0,t.yg)("admonition",m({},{title:"Per-schema Counting",type:"note"}),(0,t.yg)("p",{parentName:"admonition"},'The operator counts row numbers per schema. We plan to change this behavior with\na in the future once we have a modifer that toggles "per-schema-ness"\nexplicitly.')),(0,t.yg)("h3",m({},{id:"field"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<field>")),(0,t.yg)("p",null,"Sets the name of the output field."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"#")," to avoid conflicts with existing field names."),(0,t.yg)("h2",m({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Enumerate the input by prepending row numbers:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"from file eve.json read suricata | select event_type | enumerate | write json\n")),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"alert"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"flow"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"flow"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"alert"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"flow"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"fileinfo"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"flow"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"#"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"flow"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Use ",(0,t.yg)("inlineCode",{parentName:"p"},"index")," as field name instead of the default:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"enumerate index\n")))}v.isMDXComponent=!0}}]);