"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10613],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||y[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>d,toc:()=>h});var r=n(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},y=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={},g="Bloom Filter",d={unversionedId:"contexts/bloom-filter",id:"version-v4.19/contexts/bloom-filter",title:"Bloom Filter",description:"A space-efficient data structure to represent large sets.",source:"@site/versioned_docs/version-v4.19/contexts/bloom-filter.md",sourceDirName:"contexts",slug:"/contexts/bloom-filter",permalink:"/contexts/bloom-filter",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/contexts/bloom-filter.md",tags:[],version:"v4.19",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Contexts",permalink:"/contexts"},next:{title:"GeoIP",permalink:"/contexts/geoip"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--capacity &lt;capacity&gt;</code>",id:"--capacity-capacity",level:3},{value:"<code>--fp-probability &lt;probability&gt;</code>",id:"--fp-probability-probability",level:3},{value:"<code>--key &lt;field&gt;</code>",id:"--key-field",level:3}],v={toc:h},N="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.yg)(N,y(m(m({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",m({},{id:"bloom-filter"}),"Bloom Filter"),(0,r.yg)("p",null,"A space-efficient data structure to represent large sets."),(0,r.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",m({parentName:"pre"},{}),"context create  <name> bloom-filter --capacity <capacity> --fp-probability <probability>\ncontext update  <name> [--key <field>]\ncontext delete  <name>\ncontext reset   <name>\ncontext save    <name>\ncontext load    <name>\ncontext inspect <name>\nenrich <name>\nlookup <name>\n")),(0,r.yg)("h2",m({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"bloom-filter")," context is a ",(0,r.yg)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Bloom_filter"}),"Bloom\nfilter")," that stores large sets data\nin a compact way, at the cost of false positives during lookup."),(0,r.yg)("p",null,"The Bloom filter has two tuning knobs:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Capacity"),": the maximum number of items in the filter."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"False-positive probability"),": the chance of reporting an indicator not in\nthe filter.")),(0,r.yg)("p",null,"These two parameters dictate the space usage of the Bloom filter. Consult Thomas\nHurst's ",(0,r.yg)("a",m({parentName:"p"},{href:"https://hur.st/bloomfilter/"}),"Bloom Filter Calculator")," for finding the\noptimal configuration for your use case."),(0,r.yg)("p",null,"Bloom filter terminology commonly uses the following parameter abbreviations:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",m({parentName:"tr"},{align:"center"}),"Parameter"),(0,r.yg)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.yg)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",m({parentName:"tr"},{align:"center"}),(0,r.yg)("inlineCode",{parentName:"td"},"n")),(0,r.yg)("td",m({parentName:"tr"},{align:null}),"Capacity"),(0,r.yg)("td",m({parentName:"tr"},{align:null}),"The maximum number of unique elements that guarantee the configured false-positive probability")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",m({parentName:"tr"},{align:"center"}),(0,r.yg)("inlineCode",{parentName:"td"},"m")),(0,r.yg)("td",m({parentName:"tr"},{align:null}),"Size"),(0,r.yg)("td",m({parentName:"tr"},{align:null}),"The number of bits that the Bloom filter occupies")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",m({parentName:"tr"},{align:"center"}),(0,r.yg)("inlineCode",{parentName:"td"},"p")),(0,r.yg)("td",m({parentName:"tr"},{align:null}),"False positive probability"),(0,r.yg)("td",m({parentName:"tr"},{align:null}),"The probability of erroneously reporting an element to be in the set")))),(0,r.yg)("p",null,"The Bloom filter implementation is a C++ rebuild of DCSO's\n",(0,r.yg)("a",m({parentName:"p"},{href:"https://github.com/DCSO/bloom"}),"bloom")," library. It is binary-compatible and uses\nthe exact same method for FNV1 hashing and parameter calculation, making it a\ndrop-in replacement for ",(0,r.yg)("inlineCode",{parentName:"p"},"bloom")," users."),(0,r.yg)("h3",m({},{id:"--capacity-capacity"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--capacity <capacity>")),(0,r.yg)("p",null,"The maximum number of unique items the Bloom filter can hold while guaranteeing\nthe configured false-positive probability."),(0,r.yg)("h3",m({},{id:"--fp-probability-probability"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--fp-probability <probability>")),(0,r.yg)("p",null,"The probability of a false positive when looking up an item in the Bloom filter."),(0,r.yg)("p",null,"Must be within ",(0,r.yg)("inlineCode",{parentName:"p"},"0.0")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"1.0"),"."),(0,r.yg)("h3",m({},{id:"--key-field"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--key <field>")),(0,r.yg)("p",null,"The field in the input to be inserted into the Bloom filter."),(0,r.yg)("p",null,"If an element exists already in the Bloom filter, the update operation is a\nno-op."),(0,r.yg)("p",null,"Defaults to the first field of the input."))}O.isMDXComponent=!0}}]);