"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63795],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,f=c["".concat(l,".").concat(y)]||c[y]||u[y]||o;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},64537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>m,toc:()=>v});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>o(e,p(t)),y=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},g="put",m={unversionedId:"operators/put",id:"version-v4.20/operators/put",title:"put",description:"Returns new events that only contain a set of specified fields.",source:"@site/versioned_docs/version-v4.20/operators/put.md",sourceDirName:"operators",slug:"/operators/put",permalink:"/v4.20/operators/put",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/put.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"publish",permalink:"/v4.20/operators/publish"},next:{title:"python",permalink:"/v4.20/operators/python"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field[=operand]&gt;</code>",id:"fieldoperand",level:3},{value:"Examples",id:"examples",level:3}],b={toc:v},O="wrapper";function N(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(O,u(c(c({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"put"}),"put"),(0,n.yg)("p",null,"Returns new events that only contain a set of specified fields."),(0,n.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",c({parentName:"pre"},{}),"put <field[=operand]>...\n")),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"put")," operator produces new events according to a specified list of fields.\nAll other fields are removed from the input."),(0,n.yg)("p",null,"The difference between ",(0,n.yg)("inlineCode",{parentName:"p"},"put")," and ",(0,n.yg)("a",c({parentName:"p"},{href:"/v4.20/operators/extend"}),(0,n.yg)("inlineCode",{parentName:"a"},"extend"))," is that ",(0,n.yg)("inlineCode",{parentName:"p"},"put")," drops all\nfields not explicitly specified, whereas ",(0,n.yg)("inlineCode",{parentName:"p"},"extend")," only appends fields."),(0,n.yg)("h3",c({},{id:"fieldoperand"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<field[=operand]>")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"field")," describes the name of the field to select. The extended form with an\n",(0,n.yg)("inlineCode",{parentName:"p"},"operand")," assignment allows for computing functions over existing fields."),(0,n.yg)("p",null,"If the right-hand side of the assignment\nis omitted, the field name is implicitly used as an extractor. If multiple\nfields match the extractor, the first matching field is used in the output. If\nno fields match, ",(0,n.yg)("inlineCode",{parentName:"p"},"null")," is assigned instead."),(0,n.yg)("h3",c({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Overwrite values of the field ",(0,n.yg)("inlineCode",{parentName:"p"},"payload")," with a fixed value:"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"c","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"c","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"put payload"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"REDACTED"'))))),(0,n.yg)("p",null,"Create connection 4-tuples:"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"c","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"c","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"put src_ip, src_port, dst_ip, dst_port"))))),(0,n.yg)("p",null,"Unlike ",(0,n.yg)("a",c({parentName:"p"},{href:"/v4.20/operators/select"}),(0,n.yg)("inlineCode",{parentName:"a"},"select")),", ",(0,n.yg)("inlineCode",{parentName:"p"},"put")," reorders fields. If the specified fields\ndo not exist in the input, ",(0,n.yg)("inlineCode",{parentName:"p"},"null")," values will be assigned."),(0,n.yg)("p",null,"You can also reference existing fields:"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"c","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"c","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"put src_ip, src_port, dst_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"dest_ip, dst_port"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"dest_port"))))))}N.isMDXComponent=!0}}]);