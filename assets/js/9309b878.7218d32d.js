"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1639],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),i=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=i(n),d=r,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||p;return n?t.createElement(m,s(s({ref:a},y),{},{components:n})):t.createElement(m,s({ref:a},y))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<p;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68352:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>N,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))o.call(a,n)&&y(e,n,a[n]);if(l)for(var n of l(a))i.call(a,n)&&y(e,n,a[n]);return e},c=(e,a)=>p(e,s(a)),d=(e,a)=>{var n={};for(var t in e)o.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const m={},u="Python Library",N={unversionedId:"python-library",id:"version-v4.19/python-library",title:"Python Library",description:"Tenzir ships with a Python library to enable interaction with Tenzir with",source:"@site/versioned_docs/version-v4.19/python-library.md",sourceDirName:".",slug:"/python-library",permalink:"/v4.19/python-library",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.19/python-library.md",tags:[],version:"v4.19",frontMatter:{},sidebar:"docsSidebar",previous:{title:"REST API",permalink:"/v4.19/rest-api"},next:{title:"Platform CLI",permalink:"/v4.19/platform-cli"}},h={},F=[{value:"Install the PyPI package",id:"install-the-pypi-package",level:2},{value:"Use the Tenzir Python library",id:"use-the-tenzir-python-library",level:2},{value:"Quickstart",id:"quickstart",level:3},{value:"Overview",id:"overview",level:3},{value:"class Tenzir",id:"class-tenzir",level:3},{value:"export",id:"export",level:4},{value:"count",id:"count",level:4},{value:"status",id:"status",level:4},{value:"class TableSlice",id:"class-tableslice",level:3},{value:"class TenzirRow",id:"class-tenzirrow",level:3}],f={toc:F},E="wrapper";function b(e){var a=e,{components:n}=a,r=d(a,["components"]);return(0,t.yg)(E,c(g(g({},f),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"python-library"}),"Python Library"),(0,t.yg)("p",null,"Tenzir ships with a Python library to enable interaction with Tenzir with\nprimitives that integrate well with the Python ecosystem. We distribute the\nlibrary as PyPI package called ",(0,t.yg)("a",g({parentName:"p"},{href:"https://pypi.org/project/tenzir/"}),"tenzir"),"."),(0,t.yg)("admonition",g({},{title:"Experimental",type:"warning"}),(0,t.yg)("p",{parentName:"admonition"},"The Python library is considered experimental and subject to change without\nnotice.")),(0,t.yg)("h2",g({},{id:"install-the-pypi-package"}),"Install the PyPI package"),(0,t.yg)("p",null,"Use ",(0,t.yg)("inlineCode",{parentName:"p"},"pip")," to install Tenzir:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"pip"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," install"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir[module]"))))),(0,t.yg)("h2",g({},{id:"use-the-tenzir-python-library"}),"Use the Tenzir Python library"),(0,t.yg)("h3",g({},{id:"quickstart"}),"Quickstart"),(0,t.yg)("p",null,"The following snippet illustrates a small script to query Tenzir."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"#!/usr/bin/env python3")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"import"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," asyncio")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"from"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," tenzir "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"import"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," Tenzir, to_json_rows")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"async"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," def"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," example"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"():")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    tenzir "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," Tenzir()")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    generator "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," tenzir.export("),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.1.103"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"limit"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"    async"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," for"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," row "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"in"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," to_json_rows(generator):")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"        print"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(row)")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"asyncio.run(example())"))))),(0,t.yg)("h3",g({},{id:"overview"}),"Overview"),(0,t.yg)("p",null,"The Python library is meant to expose all the Tenzir features that are relevant\nin a Python environment. For now though, it is still in active development and\nonly the following interfaces are exposed:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"export")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"count")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"status"))),(0,t.yg)("p",null,"Many options that exist on the CLI are not mapped to the library. The idea here\nis to avoid overwhelming the API with options that are actually not needed when\ninteracting with Tenzir from Python."),(0,t.yg)("h3",g({},{id:"class-tenzir"}),"class Tenzir"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"    class"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}})," Tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"        endpoint"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": Optional["),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"str"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    )"))))),(0,t.yg)("p",null,"Create a connection to a Tenzir node that is listening at the specified\nendpoint. If no enpdoint is given the ",(0,t.yg)("inlineCode",{parentName:"p"},"TENZIR_ENDPOINT")," environment variable is\nused, if that is also not present the ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint")," value from a local\n",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir.yaml")," configuration file is used. In case that value is also not present\nthe default connection endpoint of ",(0,t.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5158")," is used."),(0,t.yg)("h4",g({},{id:"export"}),"export"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    coroutine export(")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"        expression: "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"str"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"        mode: "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"ExportMode"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," ExportMode."),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"HISTORICAL"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"        limit: "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"int"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 100")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    ) "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}}),"->"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," AsyncIterable[TableSlice]"))))),(0,t.yg)("p",null,"Evaluate an expression in a Tenzir node and receive the resulting events in an\nasynchronous stream of ",(0,t.yg)("inlineCode",{parentName:"p"},"TableSlices"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"mode")," argument can be set to one of ",(0,t.yg)("inlineCode",{parentName:"p"},"HISTORICAL"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"CONTINUOUS"),", or\n",(0,t.yg)("inlineCode",{parentName:"p"},"UNIFIED"),". A historical export evaluates the expression against data\nthat is stored in the Tenzir database, the resulting output stream ends\nwhen all eligible data has been evaluated. A ",(0,t.yg)("inlineCode",{parentName:"p"},"CONTINUOUS")," one looks at data\nas it flows into the node, it will continue to run until the event limit is\nreached, it gets discarded, or the node terminates."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"limit")," argument sets an upper bound on the number of events that should\nbe produced. The special value ",(0,t.yg)("inlineCode",{parentName:"p"},"0")," indicates that the number of results is\nunbounded."),(0,t.yg)("h4",g({},{id:"count"}),"count"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    coroutine count(")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"        expression: "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"str")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    ) "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}}),"->"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," int"))))),(0,t.yg)("p",null,"Evaluate the sum of all events in the database that match the given expression."),(0,t.yg)("h4",g({},{id:"status"}),"status"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    coroutine status() "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}}),"->"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," dict"))))),(0,t.yg)("p",null,"Retrieve the current status from Tenzir."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),">>>"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," st "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," await"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," tenzir.status()")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),">>>"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," pprint.pprint(st["),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"system"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"])")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"'current-memory-usage'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"729628672"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'database-path'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"'/var/lib/tenzir'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'in-memory-table-slices'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'peak-memory-usage'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"729628672"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'swap-space-usage'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",g({},{id:"class-tableslice"}),"class TableSlice"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    coroutine collect_pyarrow(")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"        stream: AsyncIterable[TableSlice],")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    ) "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}}),"->"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," dict["),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"str"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", list[pyarrow.Table]]"))))),(0,t.yg)("p",null,"Collect a stream of ",(0,t.yg)("inlineCode",{parentName:"p"},"TableSlice")," and return a dictionary of ",(0,t.yg)("a",g({parentName:"p"},{href:"https://arrow.apache.org/docs/python/index.html"}),"Arrow\ntables")," indexed by schema name."),(0,t.yg)("h3",g({},{id:"class-tenzirrow"}),"class TenzirRow"),(0,t.yg)("p",null,"A ",(0,t.yg)("inlineCode",{parentName:"p"},"TenzirRow"),' is a Python native representation of an "event" from Tenzir. It\nconsists of a ',(0,t.yg)("inlineCode",{parentName:"p"},"name")," and a ",(0,t.yg)("inlineCode",{parentName:"p"},"data")," dictionary."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"py","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"py","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    coroutine to_json_rows(")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"        stream: AsyncIterable[TableSlice],")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    ) "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}}),"->"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," AsyncIterable[TenzirRow]"))))),(0,t.yg)("p",null,"Convert a stream of ",(0,t.yg)("inlineCode",{parentName:"p"},"TableSlice"),"s to a stream of ",(0,t.yg)("inlineCode",{parentName:"p"},"TenzirRow"),"s."))}b.isMDXComponent=!0}}]);