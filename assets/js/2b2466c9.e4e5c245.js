"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73385],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>E});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=y(n),m=r,E=i["".concat(l,".").concat(m)]||i[m]||g[m]||p;return n?t.createElement(E,s(s({ref:a},c),{},{components:n})):t.createElement(E,s({ref:a},c))}));function E(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35360:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>E,metadata:()=>N,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},g=(e,a)=>p(e,s(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const E={sidebar_custom_props:{operator:{transformation:!0}}},u="unique",N={unversionedId:"operators/unique",id:"version-v4.21/operators/unique",title:"unique",description:"Removes adjacent duplicates.",source:"@site/versioned_docs/version-v4.21/operators/unique.md",sourceDirName:"operators",slug:"/operators/unique",permalink:"/operators/unique",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/unique.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"unflatten",permalink:"/operators/unflatten"},next:{title:"unroll",permalink:"/operators/unroll"}},d={},F=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],f={toc:F},D="wrapper";function b(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(D,g(i(i({},f),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"unique"}),"unique"),(0,t.yg)("p",null,"Removes adjacent duplicates."),(0,t.yg)("h2",i({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"unique\n")),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unique")," operator deduplicates adjacent values, similar to the Unix tool\n",(0,t.yg)("inlineCode",{parentName:"p"},"uniq"),"."),(0,t.yg)("p",null,"A frequent use case is ",(0,t.yg)("a",i({parentName:"p"},{href:"/operators/select"}),"selecting a set of fields"),", ",(0,t.yg)("a",i({parentName:"p"},{href:"/operators/sort"}),"sorting the\ninput"),", and then removing duplicates from the input."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Consider the following data:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unique")," operator removes adjacent duplicates and produces the following output:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"foo"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'"bar"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Note that the output still contains the event ",(0,t.yg)("inlineCode",{parentName:"p"},'{"foo": null, "bar": "b"}')," twice.\nThis is because ",(0,t.yg)("inlineCode",{parentName:"p"},"unique")," only removes ",(0,t.yg)("em",{parentName:"p"},"adjacent")," duplicates."),(0,t.yg)("p",null,"To remove ",(0,t.yg)("em",{parentName:"p"},"all")," duplicates (including non-adjacent ones), ",(0,t.yg)("a",i({parentName:"p"},{href:"/operators/sort"}),(0,t.yg)("inlineCode",{parentName:"a"},"sort")),"\nthe input first such that duplicate values lay adjacent to each other. Unlike\ndeduplication via ",(0,t.yg)("inlineCode",{parentName:"p"},"unique"),", sorting is a blocking and operation and consumes\nthe entire input before producing outputs."))}b.isMDXComponent=!0}}]);