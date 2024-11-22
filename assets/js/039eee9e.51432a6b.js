"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34658],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=i(a),x=r,d=y["".concat(p,".").concat(x)]||y[x]||g[x]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=x;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},92659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>N});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&c(e,a,t[a]);return e},g=(e,t)=>o(e,l(t)),x=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const d={},m="to_azure_log_analytics",u={unversionedId:"tql2/operators/to_azure_log_analytics",id:"tql2/operators/to_azure_log_analytics",title:"to_azure_log_analytics",description:"Sends events via the Microsoft Azure Logs Ingestion API.",source:"@site/docs/tql2/operators/to_azure_log_analytics.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/to_azure_log_analytics",permalink:"/next/tql2/operators/to_azure_log_analytics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/to_azure_log_analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"timeshift",permalink:"/next/tql2/operators/timeshift"},next:{title:"to_hive",permalink:"/next/tql2/operators/to_hive"}},f={},N=[{value:"Description",id:"description",level:2},{value:"<code>tenant_id = string</code>",id:"tenant_id--string",level:3},{value:"<code>client_id = string</code>",id:"client_id--string",level:3},{value:"<code>client_secret = string</code>",id:"client_secret--string",level:3},{value:"<code>dce = string</code>",id:"dce--string",level:3},{value:"<code>dcr = string</code>",id:"dcr--string",level:3},{value:"<code>table = string</code>",id:"table--string",level:3},{value:"Examples",id:"examples",level:2},{value:"Upload <code>custom.mydata</code> events to a table <code>Custom-MyData</code>",id:"upload-custommydata-events-to-a-table-custom-mydata",level:3}],F={toc:N},h="wrapper";function b(e){var t=e,{components:a}=t,r=x(t,["components"]);return(0,n.yg)(h,g(y(y({},F),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"to_azure_log_analytics"}),"to_azure_log_analytics"),(0,n.yg)("p",null,"Sends events via the ",(0,n.yg)("a",y({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview"}),"Microsoft Azure Logs Ingestion API"),"."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_azure_log_analytics"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," tenant_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, client_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, client_secret"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, dce"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, dcr"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, table"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"to_azure_log_analytics")," operator makes it possible to upload events to\n",(0,n.yg)("a",y({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview#supported-tables"}),"supported tables")," or to ",(0,n.yg)("a",y({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/create-custom-table?tabs=azure-portal-1%2Cazure-portal-2%2Cazure-portal-3#create-a-custom-table"}),"custom tables")," in Microsoft Azure."),(0,n.yg)("p",null,"The operator handles access token retrievals by itself and updates that token\nautomatically, if needed."),(0,n.yg)("h3",y({},{id:"tenant_id--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenant_id = string")),(0,n.yg)("p",null,"The Microsoft Directory (tenant) ID, written as\n",(0,n.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"."),(0,n.yg)("h3",y({},{id:"client_id--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"client_id = string")),(0,n.yg)("p",null,"The Microsoft Application (client) ID, written as\n",(0,n.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"."),(0,n.yg)("h3",y({},{id:"client_secret--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"client_secret = string")),(0,n.yg)("p",null,"The client secret."),(0,n.yg)("h3",y({},{id:"dce--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"dce = string")),(0,n.yg)("p",null,"The data collection endpoint URL."),(0,n.yg)("h3",y({},{id:"dcr--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"dcr = string")),(0,n.yg)("p",null,"The data collection rule ID, written as ",(0,n.yg)("inlineCode",{parentName:"p"},"dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),"."),(0,n.yg)("h3",y({},{id:"table--string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"table = string")),(0,n.yg)("p",null,"The table to upload events to."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"upload-custommydata-events-to-a-table-custom-mydata"}),"Upload ",(0,n.yg)("inlineCode",{parentName:"h3"},"custom.mydata")," events to a table ",(0,n.yg)("inlineCode",{parentName:"h3"},"Custom-MyData")),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "custom.mydata"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_azure_log_analytics"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," tenant_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"00a00a00-0a00-0a00-00aa-000aa0a0a000"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  client_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"000a00a0-0aa0-00a0-0000-00a000a000a0"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  client_secret"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dce"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"https://my-stuff-a0a0.westeurope-1.ingest.monitor.azure.com"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dcr"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  table"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Custom-MyData"'))))))}b.isMDXComponent=!0}}]);