"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72655],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>u});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=o,u=m["".concat(i,".").concat(g)]||m[g]||y[g]||a;return t?n.createElement(u,s(s({ref:r},c),{},{components:t})):n.createElement(u,s({ref:r},c))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},75010:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>u,metadata:()=>d,toc:()=>v});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&c(e,t,r[t]);return e},y=(e,r)=>a(e,s(r)),g=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const u={sidebar_custom_props:{format:{parser:!0}}},f="syslog",d={unversionedId:"formats/syslog",id:"formats/syslog",title:"syslog",description:"Reads syslog messages.",source:"@site/docs/formats/syslog.md",sourceDirName:"formats",slug:"/formats/syslog",permalink:"/next/formats/syslog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/syslog.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"suricata",permalink:"/next/formats/suricata"},next:{title:"time",permalink:"/next/formats/time"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],b={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,o=g(r,["components"]);return(0,n.yg)(O,y(m(m({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",m({},{id:"syslog"}),"syslog"),(0,n.yg)("p",null,"Reads syslog messages."),(0,n.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"syslog\n")),(0,n.yg)("h2",m({},{id:"description"}),"Description"),(0,n.yg)("p",null,'Syslog is a standard format for message logging.\nTenzir supports reading syslog messages in both the standardized "Syslog Protocol" format\n(',(0,n.yg)("a",m({parentName:"p"},{href:"https://tools.ietf.org/html/rfc5424"}),"RFC 5424"),'), and the older "BSD syslog Protocol" format\n(',(0,n.yg)("a",m({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3164"}),"RFC 3164"),")."),(0,n.yg)("p",null,"Depending on the syslog format, the result can be different.\nHere's an example of a syslog message in RFC 5424 format:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),'<165>8 2023-10-11T22:14:15.003Z mymachineexamplecom evntslog 1370 ID47 [exampleSDID@32473 eventSource="Application" eventID="1011"] Event log entry\n')),(0,n.yg)("p",null,"With this input, the parser will produce the following output, with the schema name ",(0,n.yg)("inlineCode",{parentName:"p"},"syslog.rfc5424"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "facility": 20,\n  "severity": 5,\n  "version": 8,\n  "timestamp": "2023-10-11T22:14:15.003000",\n  "hostname": "mymachineexamplecom",\n  "app_name": "evntslog",\n  "process_id": "1370",\n  "message_id": "ID47",\n  "structured_data": {\n    "exampleSDID@32473": {\n      "eventSource": "Application",\n      "eventID": 1011\n    }\n  },\n  "message": "Event log entry"\n}\n')),(0,n.yg)("p",null,"Here's an example of a syslog message in RFC 3164 format:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"<34>Nov 16 14:55:56 mymachine PROGRAM: Freeform message\n")),(0,n.yg)("p",null,"With this input, the parser will produce the following output, with the schema name ",(0,n.yg)("inlineCode",{parentName:"p"},"syslog.rfc3164"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "facility": 4,\n  "severity": 2,\n  "timestamp": "Nov 16 14:55:56",\n  "hostname": "mymachine",\n  "app_name": "PROGRAM",\n  "process_id": null,\n  "content": "Freeform message"\n}\n')),(0,n.yg)("h2",m({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Read a syslog file:"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{}),"from mylog.log read syslog\n")))}w.isMDXComponent=!0}}]);