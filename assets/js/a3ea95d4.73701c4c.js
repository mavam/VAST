"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>P,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&l(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{connector:{loader:!0}}},h="nic",k={unversionedId:"connectors/nic",id:"version-Tenzir v4.10/connectors/nic",title:"nic",description:"Reads bytes from a network interface card (NIC).",source:"@site/versioned_docs/version-Tenzir v4.10/connectors/nic.md",sourceDirName:"connectors",slug:"/connectors/nic",permalink:"/connectors/nic",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/connectors/nic.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"kafka",permalink:"/connectors/kafka"},next:{title:"s3",permalink:"/connectors/s3"}},v={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--snaplen &lt;count&gt;</code>",id:"-s--snaplen-count",level:3},{value:"<code>-e|--emit-file-headers</code>",id:"-e--emit-file-headers",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},O="wrapper";function P(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,u(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"nic"}),"nic"),(0,r.kt)("p",null,"Reads bytes from a network interface card (NIC)."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"nic <iface> [-s|--snaplen <count>] [-e|--emit-file-headers]\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nic")," loader uses libpcap to acquire packets from a network interface and\npacks them into blocks of bytes that represent PCAP packet records."),(0,r.kt)("p",null,"The received first packet triggers also emission of PCAP file header such that\ndownstream operators can treat the packet stream as valid PCAP capture file."),(0,r.kt)("p",null,"The default parser for the ",(0,r.kt)("inlineCode",{parentName:"p"},"nic")," loader is ",(0,r.kt)("a",d({parentName:"p"},{href:"/formats/pcap"}),(0,r.kt)("inlineCode",{parentName:"a"},"pcap")),"."),(0,r.kt)("h3",d({},{id:"-s--snaplen-count"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-s|--snaplen <count>")),(0,r.kt)("p",null,"Sets the snapshot length of the captured packets."),(0,r.kt)("p",null,"This value is an upper bound on the packet size. Packets larger than this size\nget truncated to ",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," bytes."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"262144"),"."),(0,r.kt)("h3",d({},{id:"-e--emit-file-headers"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-e|--emit-file-headers")),(0,r.kt)("p",null,"Creates PCAP file headers for every flushed batch."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nic")," connector emits chunk of bytes that represent a stream of packets.\nWhen setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--emit-file-headers")," every chunk gets its own PCAP file header, as\nopposed to just the very first. This yields a continuous stream of concatenated\nPCAP files."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"/formats/pcap"}),(0,r.kt)("inlineCode",{parentName:"a"},"pcap"))," parser can handle such concatenated traces, and\noptionally re-emit thes file headers as separate events."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read PCAP packets from ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from nic eth0\n")),(0,r.kt)("p",null,"Perform the equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump -i en0 -w trace.pcap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"load nic en0 | save file trace.pcap\n")))}P.isMDXComponent=!0}}]);