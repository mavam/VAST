"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86344],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,u=c["".concat(p,".").concat(m)]||c[m]||f[m]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>w,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},f=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const u={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},y="file",h={unversionedId:"connectors/file",id:"version-v4.24/connectors/file",title:"file",description:"Loads bytes from a file. Saves bytes to a file.",source:"@site/versioned_docs/version-v4.24/connectors/file.md",sourceDirName:"connectors",slug:"/connectors/file",permalink:"/v4.24/connectors/file",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/connectors/file.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"email",permalink:"/v4.24/connectors/email"},next:{title:"ftp",permalink:"/v4.24/connectors/ftp"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;path&gt;</code> (Loader, Saver)",id:"path-loader-saver",level:3},{value:"<code>-f|--follow</code> (Loader)",id:"-f--follow-loader",level:3},{value:"<code>-m|--mmap</code> (Loader)",id:"-m--mmap-loader",level:3},{value:"<code>-t|--timeout=&lt;duration&gt;</code> (Loader)",id:"-t--timeoutduration-loader",level:3},{value:"<code>-a|--append</code> (Saver)",id:"-a--append-saver",level:3},{value:"<code>-r|--real-time</code> (Saver)",id:"-r--real-time-saver",level:3},{value:"<code>--uds</code> (Saver)",id:"--uds-saver",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.yg)(N,f(c(c({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",c({},{id:"file"}),"file"),(0,r.yg)("p",null,"Loads bytes from a file. Saves bytes to a file."),(0,r.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("p",null,"Loader:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"file [-f|--follow] [-m|--mmap] [-t|--timeout=<duration>] <path>\n")),(0,r.yg)("p",null,"Saver:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"file [-a|--append] [-r|--real-time] [--uds] <path>\n")),(0,r.yg)("h2",c({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," loader acquires raw bytes from a file. The ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," saver writes bytes\nto a file or a Unix domain socket."),(0,r.yg)("p",null,"When used as ",(0,r.yg)("inlineCode",{parentName:"p"},"from file <path> | ...")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"... | to file <path>"),", Tenzir uses the\nfollowing heuristics to infer the format based on the filename:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the filename is ",(0,r.yg)("inlineCode",{parentName:"li"},"eve.json"),", use ",(0,r.yg)("a",c({parentName:"li"},{href:"/v4.24/formats/suricata"}),(0,r.yg)("inlineCode",{parentName:"a"},"suricata"))),(0,r.yg)("li",{parentName:"ul"},"If the file extension is ",(0,r.yg)("inlineCode",{parentName:"li"},"ndjson"),", use ",(0,r.yg)("a",c({parentName:"li"},{href:"/v4.24/formats/json"}),(0,r.yg)("inlineCode",{parentName:"a"},"json")),"."),(0,r.yg)("li",{parentName:"ul"},"Otherwise, if the filename has an extension, try to use this as the format\n(this will produce an error if there is no such format)"),(0,r.yg)("li",{parentName:"ul"},"If the filename has no extension (that includes the reserved path ",(0,r.yg)("inlineCode",{parentName:"li"},"-"),"), the\ndefault format is JSON.")),(0,r.yg)("h3",c({},{id:"path-loader-saver"}),(0,r.yg)("inlineCode",{parentName:"h3"},"<path>")," (Loader, Saver)"),(0,r.yg)("p",null,"The path to the file to load/save. If intermediate directories do not exist, the\nsaver will create them."),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"~")," is the first character, it will be substituted with the value of the\n",(0,r.yg)("inlineCode",{parentName:"p"},"$HOME")," environment variable."),(0,r.yg)("p",null,"The path ",(0,r.yg)("inlineCode",{parentName:"p"},"-")," is a reserved value and means stdin for the loader and stdout for\nthe saver."),(0,r.yg)("h3",c({},{id:"-f--follow-loader"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-f|--follow")," (Loader)"),(0,r.yg)("p",null,"Do not stop when the end of file is reached, but rather to wait for additional\ndata to be appended to the input."),(0,r.yg)("p",null,'This flag has the semantics of the "tail -f" idiom in Unix.'),(0,r.yg)("h3",c({},{id:"-m--mmap-loader"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-m|--mmap")," (Loader)"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap(2)")," system call to map the file and produce only one single chunk\nof bytes, instead of producing data piecemeal via ",(0,r.yg)("inlineCode",{parentName:"p"},"read(2)"),". This option\neffectively gives the downstream parser full control over reads."),(0,r.yg)("p",null,"For the ",(0,r.yg)("a",c({parentName:"p"},{href:"/v4.24/formats/feather"}),(0,r.yg)("inlineCode",{parentName:"a"},"feather"))," and\n",(0,r.yg)("a",c({parentName:"p"},{href:"/v4.24/formats/parquet"}),(0,r.yg)("inlineCode",{parentName:"a"},"parquet"))," parsers, this significantly reduces memory\nusage and improves performance."),(0,r.yg)("h3",c({},{id:"-t--timeoutduration-loader"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-t|--timeout=<duration>")," (Loader)"),(0,r.yg)("p",null,"Wait at most for the provided duration when performing a blocking call to the\nsystem call ",(0,r.yg)("inlineCode",{parentName:"p"},"read(2)"),"."),(0,r.yg)("p",null,"This flags comes in handy in combination with ",(0,r.yg)("inlineCode",{parentName:"p"},"--follow")," to produce a steady\npulse of input in the pipeline execution, as input (even if empty) drives the\nprocessing forward."),(0,r.yg)("h3",c({},{id:"-a--append-saver"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-a|--append")," (Saver)"),(0,r.yg)("p",null,"Append to the file instead of overwriting it with a new file."),(0,r.yg)("h3",c({},{id:"-r--real-time-saver"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-r|--real-time")," (Saver)"),(0,r.yg)("p",null,"Immediately synchronize the file with every chunk of bytes instead of buffering\nbytes to batch filesystem write operations."),(0,r.yg)("h3",c({},{id:"--uds-saver"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--uds")," (Saver)"),(0,r.yg)("p",null,"Interpret ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," as a Unix domain socket and connect to it."),(0,r.yg)("h2",c({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Read JSON from stdin via ",(0,r.yg)("a",c({parentName:"p"},{href:"/v4.24/operators/from"}),(0,r.yg)("inlineCode",{parentName:"a"},"from"))," and convert\nit to CSV:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"from - read json | to stdout | write csv\n")),(0,r.yg)("p",null,"Read 1 MiB from a file ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/data")," and write the bytes another file ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/1mb"),",\nblocking if ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/data")," is less than 1 MiB until the file reaches this size:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"load file -f /tmp/data | head 1 Mi | save file /tmp/1mb\n")))}w.isMDXComponent=!0}}]);