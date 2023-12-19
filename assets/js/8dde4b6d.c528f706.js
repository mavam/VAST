"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,v=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>C,frontMatter:()=>v,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&l(e,n,t[n]);return e},d=(e,t)=>o(e,s(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const v={sidebar_custom_props:{format:{parser:!0}}},u="cef",y={unversionedId:"formats/cef",id:"version-Tenzir v4.7/formats/cef",title:"cef",description:"Parses events in the Common Event Format (CEF).",source:"@site/versioned_docs/version-Tenzir v4.7/formats/cef.md",sourceDirName:"formats",slug:"/formats/cef",permalink:"/formats/cef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/formats/cef.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"Formats",permalink:"/formats"},next:{title:"csv",permalink:"/formats/csv"}},h={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],F={toc:g},k="wrapper";function C(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(m(m({},F),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"cef"}),"cef"),(0,r.kt)("p",null,"Parses events in the Common Event Format (CEF)."),(0,r.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"cef\n")),(0,r.kt)("h2",m({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",m({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"Common Event Format (CEF)")," is a text-based event format that\noriginally stems from ArcSight. It is line-based and human readable. The first 7\nfields of a CEF event are always the same, and the 8th ",(0,r.kt)("em",{parentName:"p"},"extension")," field is an\noptional list of key-value pairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"CEF:Version|Device Vendor|Device Product|Device Version|Device Event Class ID|Name|Severity|[Extension]\n")),(0,r.kt)("p",null,"Here is a real-world example:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),'CEF:0|Cynet|Cynet 360|4.5.4.22139|0|Memory Pattern - Cobalt Strike Beacon ReflectiveLoader|8| externalId=6 clientId=2251997 scanGroupId=3 scanGroupName=Manually Installed Agents sev=High duser=tikasrv01\\\\administrator cat=END-POINT Alert dhost=TikaSrv01 src=172.31.5.93 filePath=c:\\\\windows\\\\temp\\\\javac.exe fname=javac.exe rt=3/30/2022 10:55:34 AM fileHash=2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD rtUtc=Mar 30 2022 10:55:34.688 dtUtc=Mar 30 2022 10:55:32.458 hostLS=2022-03-30 10:55:34 GMT+00:00 osVer=Windows Server 2016 Datacenter x64 1607 epsVer=4.5.5.6845 confVer=637842168250000000 prUser=tikasrv01\\\\administrator pParams="C:\\\\Windows\\\\Temp\\\\javac.exe" sign=Not signed pct=2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609 pFileHash=1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7 pprUser=tikasrv01\\\\administrator ppParams=C:\\\\Windows\\\\Explorer.EXE pssdeep=49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3 pSign=Signed and has certificate info gpFileHash=CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F gpprUser=tikasrv01\\\\administrator gpParams=C:\\\\Windows\\\\system32\\\\userinit.exe gpssdeep=384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu gpSign=Signed actRem=Kill, Rename\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",m({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"CEF specification")," pre-defines several extension field key names and\ndata types for the corresponding values. Tenzir's parser does not enforce the\nstrict definitions and instead tries to infer the type from the provided values."),(0,r.kt)("p",null,"Tenzir translates the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," field to a nested record, where the key-value\npairs of the extensions map to record fields. Here is an example of the above\nevent:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "cef_version": 0,\n  "device_vendor": "Cynet",\n  "device_product": "Cynet 360",\n  "device_version": "4.5.4.22139",\n  "signature_id": "0",\n  "name": "Memory Pattern - Cobalt Strike Beacon ReflectiveLoader",\n  "severity": "8",\n  "extension": {\n    "externalId": 6,\n    "clientId": 2251997,\n    "scanGroupId": 3,\n    "scanGroupName": "Manually Installed Agents",\n    "sev": "High",\n    "duser": "tikasrv01\\\\administrator",\n    "cat": "END-POINT Alert",\n    "dhost": "TikaSrv01",\n    "src": "172.31.5.93",\n    "filePath": "c:\\\\windows\\\\temp\\\\javac.exe",\n    "fname": "javac.exe",\n    "rt": "3/30/2022 10:55:34 AM",\n    "fileHash": "2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD",\n    "rtUtc": "Mar 30 2022 10:55:34.688",\n    "dtUtc": "Mar 30 2022 10:55:32.458",\n    "hostLS": "2022-03-30 10:55:34 GMT+00:00",\n    "osVer": "Windows Server 2016 Datacenter x64 1607",\n    "epsVer": "4.5.5.6845",\n    "confVer": 637842168250000000,\n    "prUser": "tikasrv01\\\\administrator",\n    "pParams": "C:\\\\Windows\\\\Temp\\\\javac.exe",\n    "sign": "Not signed",\n    "pct": "2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609",\n    "pFileHash": "1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7",\n    "pprUser": "tikasrv01\\\\administrator",\n    "ppParams": "C:\\\\Windows\\\\Explorer.EXE",\n    "pssdeep": "49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3",\n    "pSign": "Signed and has certificate info",\n    "gpFileHash": "CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F",\n    "gpprUser": "tikasrv01\\\\administrator",\n    "gpParams": "C:\\\\Windows\\\\system32\\\\userinit.exe",\n    "gpssdeep": "384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu",\n    "gpSign": "Signed",\n    "actRem": "Kill, Rename"\n  }\n}\n')),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read a CEF file:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"from file /tmp/events.cef read cef\n")))}C.isMDXComponent=!0}}]);