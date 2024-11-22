"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44913],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=i(r),g=n,u=c["".concat(s,".").concat(g)]||c[g]||y[g]||o;return r?a.createElement(u,l(l({ref:t},d),{},{components:r})):a.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))i.call(t,r)&&d(e,r,t[r]);return e},y=(e,t)=>o(e,l(t)),g=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const u={},m="load_http",f={unversionedId:"tql2/operators/load_http",id:"tql2/operators/load_http",title:"load_http",description:"Loads a byte stream via HTTP.",source:"@site/docs/tql2/operators/load_http.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_http",permalink:"/next/tql2/operators/load_http",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/load_http.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_google_cloud_pubsub",permalink:"/next/tql2/operators/load_google_cloud_pubsub"},next:{title:"load_kafka",permalink:"/next/tql2/operators/load_kafka"}},h={},b=[{value:"Description",id:"description",level:2},{value:"<code>url: string</code>",id:"url-string",level:3},{value:"<code>method = string (optional)</code>",id:"method--string-optional",level:3},{value:"<code>params = record (optional)</code>",id:"params--record-optional",level:3},{value:"<code>headers = record (optional)</code>",id:"headers--record-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Perform an API call and get the response",id:"perform-an-api-call-and-get-the-response",level:3}],v={toc:b},O="wrapper";function N(e){var t=e,{components:r}=t,n=g(t,["components"]);return(0,a.yg)(O,y(c(c({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"load_http"}),"load_http"),(0,a.yg)("p",null,"Loads a byte stream via HTTP."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," url"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [method"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, params"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, headers"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record]"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"save_http")," operator performs a HTTP request and returns the response."),(0,a.yg)("h3",c({},{id:"url-string"}),(0,a.yg)("inlineCode",{parentName:"h3"},"url: string")),(0,a.yg)("p",null,"The URL to request from. The ",(0,a.yg)("inlineCode",{parentName:"p"},"http://")," scheme can be omitted."),(0,a.yg)("h3",c({},{id:"method--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"method = string (optional)")),(0,a.yg)("p",null,"The HTTP method, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"POST")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),"."),(0,a.yg)("p",null,"The default is ",(0,a.yg)("inlineCode",{parentName:"p"},'"GET"'),"."),(0,a.yg)("h3",c({},{id:"params--record-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"params = record (optional)")),(0,a.yg)("p",null,"The query parameters for the request."),(0,a.yg)("h3",c({},{id:"headers--record-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"headers = record (optional)")),(0,a.yg)("p",null,"The headers for the request."),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("h3",c({},{id:"perform-an-api-call-and-get-the-response"}),"Perform an API call and get the response"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example.org/api"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", headers"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"X-API-Token"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "0000-0000-0000"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}N.isMDXComponent=!0}}]);