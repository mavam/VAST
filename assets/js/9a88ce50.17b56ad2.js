"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39898],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>h,toc:()=>b});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const y={sidebar_position:1},f="Schemas",h={unversionedId:"data-model/schemas",id:"version-v4.19/data-model/schemas",title:"Schemas",description:"A schema in Tenzir is named record type that specifies",source:"@site/versioned_docs/version-v4.19/data-model/schemas.md",sourceDirName:"data-model",slug:"/data-model/schemas",permalink:"/v4.19/data-model/schemas",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/data-model/schemas.md",tags:[],version:"v4.19",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Type System",permalink:"/v4.19/data-model/type-system"},next:{title:"Modules",permalink:"/v4.19/data-model/modules"}},g={},b=[],v={toc:b},w="wrapper";function O(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.yg)(w,d(m(m({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",m({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"A ",(0,n.yg)("strong",{parentName:"p"},"schema")," in Tenzir is ",(0,n.yg)("em",{parentName:"p"},"named")," ",(0,n.yg)("a",m({parentName:"p"},{href:"/v4.19/data-model/type-system"}),"record type")," that specifies\ntop-level structure of a data frame."),(0,n.yg)("p",null,"Ideally, each data source defines its own semantically rich schema to retain\nmost of the domain-specific information of the data. This is desirable because\naccurately modeled data is more productive to work with because it's less\nerror-prone to misinterpret and requires fewer context switches to infer missing\ngaps. ",(0,n.yg)("a",m({parentName:"p"},{href:"/v4.19/data-model/type-system"}),"Tenzir's type system")," is well-suited for deep domain\nmodeling: it can express structure with lists and records, add meta data to any\ntypes via tags, and also support aliasing for building libraries of composable\ntypes."),(0,n.yg)("p",null,'In practice, many tools often "dumb down" their rich internal representation\ninto a generic piece of JSON, CSV, or text. This puts the burden of gaining\nactionable insights onto the user downstream: either they work with a minimal\nlayer of typing, or they put in effort to (re)apply a coat of typing by writing\na schema.'),(0,n.yg)("p",null,"However, writing and managing schemas can quickly escalate: they evolve\ncontinuously and induce required changes in downstream analytics. Tenzir\nminimizes the needed effort to maintain schemas by tracking their lineage, and\nby making data sources infer their schema where possible. For example, the\n",(0,n.yg)("a",m({parentName:"p"},{href:"/v4.19/formats/json"}),"JSON"),' reader attempts to parse strings as timestamps, IP\naddress, or subnets, to gather a deeper semantic meaning than "just a string."\nThe idea is to make it easy to get started but still allow for later\nrefinements. You would provide a schema when you would like to boost the\nsemantics of your data, e.g., to imbue meaning into generic string values by\ncreating an alias type, or to enrich types with free-form attributes. This\napproach to schemas effectively combines the ease of use of document-oriented\nsystems with the horsepower of system that operate on structured data.'),(0,n.yg)("admonition",m({},{title:"Why factor types?",type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"Many data sources emit more than one event in the form of a record, and often\ncontain nested records shared across multiple event types. For example, the\nmajority of ",(0,n.yg)("a",m({parentName:"p"},{href:"/v4.19/formats/zeek-tsv"}),"Zeek")," logs have the connection record in\ncommon. Factoring this shared record into its own type, and then reusing across\nall other occurrences makes it easy to perform cross-event connection analysis\nlater on.")))}O.isMDXComponent=!0}}]);