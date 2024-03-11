"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{format:{parser:!0}}},y="time",v={unversionedId:"formats/time",id:"version-Tenzir v4.9/formats/time",title:"time",description:"Parses a datetime/timestamp using a strptime-like format string.",source:"@site/versioned_docs/version-Tenzir v4.9/formats/time.md",sourceDirName:"formats",slug:"/formats/time",permalink:"/Tenzir v4.9/formats/time",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/formats/time.md",tags:[],version:"Tenzir v4.9",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"syslog",permalink:"/Tenzir v4.9/formats/syslog"},next:{title:"tsv",permalink:"/Tenzir v4.9/formats/tsv"}},k={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"<code>--components</code>",id:"--components",level:3},{value:"<code>--strict</code>",id:"--strict",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function g(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,r.kt)(O,d(c(c({},h),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"time"}),"time"),(0,r.kt)("p",null,"Parses a datetime/timestamp using a ",(0,r.kt)("inlineCode",{parentName:"p"},"strptime"),"-like format string."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"time [--components] [--strict]\n     <format>\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Returns a timestamp in Unix time."),(0,r.kt)("h3",c({},{id:"format"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"time")," is backed by POSIX\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://man7.org/linux/man-pages/man3/strptime.3.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"strptime")),",\nand uses the same format string syntax, with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"C"')," locale."),(0,r.kt)("h3",c({},{id:"--components"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--components")),(0,r.kt)("p",null,"Instead of a timestamp, returns a record with fields for\n",(0,r.kt)("inlineCode",{parentName:"p"},"second"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"utc_offset"),",\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"timezone"),"."),(0,r.kt)("h3",c({},{id:"--strict"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--strict")),(0,r.kt)("p",null,"By default, if some information is missing from the parsed value,\nit's defaulted to be today at 00:00 UTC. Additionally, if no year is parsed,\nit's set to the previous year if the resulting time had been in the future."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--strict"),", these defaults aren't used. Not providing values for\nyears, months, days, hours, and minutes is an error, except when ",(0,r.kt)("inlineCode",{parentName:"p"},"--components"),"\nis set, where these fields will be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Parse an ISO 8601 timestamp:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'# Example input:\n# 2023-12-18T12:11:05+0100\nparse time "%FT%T%z"\n# Output:\n# 2023-12-18T11:11:05\n')),(0,r.kt)("p",null,"Parse an RFC 3164 syslog message timestamp:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'# Assuming today is 2023-12-18\n\n# Example input:\n# Nov 10 15:10:20\nparse time "%b %d %H:%M:%S"\n# Output:\n# 2023-10-10T15:10:20\n\n# Input in the future:\n# Dec 29 15:10:20\nparse time "%b %d %H:%M:%S"\n# Output (year is 2022):\n# 2022-12-29T15:10:20\n\n# With --strict\nparse time "%b %d %H:%M:%S"\n# Error, missing year\n')))}g.isMDXComponent=!0}}]);