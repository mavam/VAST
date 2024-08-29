"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21616],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>f,default:()=>v,frontMatter:()=>h,metadata:()=>y,toc:()=>w});var a=t(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&s(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),u=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const h={sidebar_position:10},f="Enrich with Threat Intel",y={unversionedId:"usage/enrich-with-threat-intel/README",id:"version-v4.19/usage/enrich-with-threat-intel/README",title:"Enrich with Threat Intel",description:"Tenzir has a powerful contextualization framework for real-time enrichment of a",source:"@site/versioned_docs/version-v4.19/usage/enrich-with-threat-intel/README.md",sourceDirName:"usage/enrich-with-threat-intel",slug:"/usage/enrich-with-threat-intel/",permalink:"/usage/enrich-with-threat-intel/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/usage/enrich-with-threat-intel/README.md",tags:[],version:"v4.19",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Execute Sigma rules",permalink:"/usage/execute-sigma-rules/"},next:{title:"Enrich with Network Inventory",permalink:"/usage/enrich-with-network-inventory/"}},g={},w=[{value:"Setup a context",id:"setup-a-context",level:2},{value:"Enrich with a context",id:"enrich-with-a-context",level:2}],_={toc:w},b="wrapper";function v(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,a.yg)(b,d(m(m({},_),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",m({},{id:"enrich-with-threat-intel"}),"Enrich with Threat Intel"),(0,a.yg)("p",null,"Tenzir has a powerful contextualization framework for real-time enrichment of a\ndataflow with a ",(0,a.yg)("a",m({parentName:"p"},{href:"/contexts/lookup-table"}),"lookup table"),", a GeoIP\ndatabase, or a custom ",(0,a.yg)("a",m({parentName:"p"},{href:"/architecture/plugins"}),"plugin"),". The heart of the\nframework is a ",(0,a.yg)("a",m({parentName:"p"},{href:"/contexts"}),"context"),"\u2014a stateful object that can be\nmanaged with the ",(0,a.yg)("a",m({parentName:"p"},{href:"/operators/context"}),(0,a.yg)("inlineCode",{parentName:"a"},"context"))," operator and used with\nthe ",(0,a.yg)("a",m({parentName:"p"},{href:"/operators/enrich"}),(0,a.yg)("inlineCode",{parentName:"a"},"enrich"))," operator."),(0,a.yg)("h2",m({},{id:"setup-a-context"}),"Setup a context"),(0,a.yg)("p",null,"Prior to enriching, you need to populate a context with data. First, let's a\ncreate a context called ",(0,a.yg)("inlineCode",{parentName:"p"},"threatfox")," that uses a ",(0,a.yg)("a",m({parentName:"p"},{href:"/contexts/lookup-table"}),"lookup\ntable"),", i.e., a key-value mapping where a key is\nused to perform the context lookup and the value can be any structured\nadditional data."),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"context create threatfox lookup-table\n")),(0,a.yg)("p",null,"This yields the following pipeline output:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "num_entries": 0,\n  "name": "threatfox"\n}\n')),(0,a.yg)("p",null,"After creating a context, we load data into the context. In our example, we load\ndata from the ",(0,a.yg)("a",m({parentName:"p"},{href:"https://threatfox.abuse.ch/"}),"ThreatFox")," API:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),'from https://threatfox-api.abuse.ch/api/v1/ query=get_iocs days:=1\n| yield data[]\n| where ioc_type == "domain"\n| context update threatfox --key ioc\n')),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Example data for context updating"),(0,a.yg)("p",null,"If we replace the ",(0,a.yg)("inlineCode",{parentName:"p"},"context")," operator in the above pipeline with ",(0,a.yg)("inlineCode",{parentName:"p"},"head 5"),", we get\noutput similar to the following, depending on the current state of the API:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "id": "1213056",\n  "ioc": "deletefateoow.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213057",\n  "ioc": "perceivedomerusp.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213058",\n  "ioc": "showerreigerniop.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213059",\n  "ioc": "fortunedomerussea.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213060",\n  "ioc": "offerdelicateros.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n'))),(0,a.yg)("p",null,"The pipeline ",(0,a.yg)("inlineCode",{parentName:"p"},"context update")," may yield:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "num_entries": 57,\n  "name": "threatfox"\n}\n')),(0,a.yg)("p",null,"That is, 57 entries have been added successfully to the ",(0,a.yg)("inlineCode",{parentName:"p"},"threatfox")," context."),(0,a.yg)("h2",m({},{id:"enrich-with-a-context"}),"Enrich with a context"),(0,a.yg)("p",null,"Now that we loaded IoCs into the context, we can enrich with it in other\npipelines. Since we previously imported only domains, we would look for fields\nin the data of that type."),(0,a.yg)("p",null,"The following pipeline subscribes to the import feed of all data arriving at the\nnode via ",(0,a.yg)("inlineCode",{parentName:"p"},"export --live")," and applies the ",(0,a.yg)("inlineCode",{parentName:"p"},"threatfox")," context to Suricata DNS\nrequests in field ",(0,a.yg)("inlineCode",{parentName:"p"},"dns.rrname")," via ",(0,a.yg)("a",m({parentName:"p"},{href:"/operators/enrich"}),(0,a.yg)("inlineCode",{parentName:"a"},"enrich")),"."),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),'export --live\n| where #schema == "suricata.dns"\n| enrich threatfox --field dns.rrname\n')),(0,a.yg)("p",null,"Here is a sample of an event that the above pipeline yields:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2021-11-17T16:57:42.389824",\n  "flow_id": 1542499730911936,\n  "pcap_cnt": 3167,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "45.85.90.164",\n  "src_port": 56462,\n  "dest_ip": "198.71.247.91",\n  "dest_port": 53,\n  "proto": "UDP",\n  "event_type": "dns",\n  "community_id": null,\n  "dns": {\n    "version": null,\n    "type": "query",\n    "id": 1,\n    "flags": null,\n    "qr": null,\n    "rd": null,\n    "ra": null,\n    "aa": null,\n    "tc": null,\n    "rrname": "bza.fartit.com",\n    "rrtype": "RRSIG",\n    "rcode": null,\n    "ttl": null,\n    "tx_id": 0,\n    "grouped": null,\n    "answers": null\n  },\n  "threatfox": {\n    "key": "bza.fartit.com",\n    "context": {\n      "id": "1209087",\n      "ioc": "bza.fartit.com",\n      "threat_type": "payload_delivery",\n      "threat_type_desc": "Indicator that identifies a malware distribution server (payload delivery)",\n      "ioc_type": "domain",\n      "ioc_type_desc": "Domain name that delivers a malware payload",\n      "malware": "apk.irata",\n      "malware_printable": "IRATA",\n      "malware_alias": null,\n      "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/apk.irata",\n      "confidence_level": 100,\n      "first_seen": "2023-12-03 14:05:20 UTC",\n      "last_seen": null,\n      "reference": "",\n      "reporter": "onecert_ir",\n      "tags": [\n        "irata"\n      ]\n    },\n    "timestamp": "2023-12-04T13:52:49.043157"\n  }\n}\n')),(0,a.yg)("p",null,"The sub-record ",(0,a.yg)("inlineCode",{parentName:"p"},"threatfox")," holds the enrichment details. The field ",(0,a.yg)("inlineCode",{parentName:"p"},"key"),"\ncontains the matching key. The field ",(0,a.yg)("inlineCode",{parentName:"p"},"context")," is the row from the lookup table\nat key ",(0,a.yg)("inlineCode",{parentName:"p"},"bza.fartit.com"),". The field ",(0,a.yg)("inlineCode",{parentName:"p"},"timestamp")," is the time when the enrichment\noccurred."),(0,a.yg)("p",null,"For a more comprehensive discussion of contextualization, check out our blog\npost ",(0,a.yg)("a",m({parentName:"p"},{href:"/blog/contextualization-made-simple"}),"Contextualization Made Simple"),"."))}v.isMDXComponent=!0}}]);