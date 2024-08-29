"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44152],{15680:(M,e,t)=>{t.d(e,{xA:()=>g,yg:()=>N});var n=t(96540);function i(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function w(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(M);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,n)}return t}function D(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){i(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function a(M,e){if(null==M)return{};var t,n,i=function(M,e){if(null==M)return{};var t,n,i={},w=Object.keys(M);for(n=0;n<w.length;n++)t=w[n],e.indexOf(t)>=0||(i[t]=M[t]);return i}(M,e);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(M);for(n=0;n<w.length;n++)t=w[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(i[t]=M[t])}return i}var c=n.createContext({}),s=function(M){var e=n.useContext(c),t=e;return M&&(t="function"==typeof M?M(e):D(D({},e),M)),t},g=function(M){var e=s(M.components);return n.createElement(c.Provider,{value:e},M.children)},r="mdxType",l={inlineCode:"code",wrapper:function(M){var e=M.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(M,e){var t=M.components,i=M.mdxType,w=M.originalType,c=M.parentName,g=a(M,["components","mdxType","originalType","parentName"]),r=s(t),o=i,N=r["".concat(c,".").concat(o)]||r[o]||l[o]||w;return t?n.createElement(N,D(D({ref:e},g),{},{components:t})):n.createElement(N,D({ref:e},g))}));function N(M,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof M||i){var w=t.length,D=new Array(w);D[0]=o;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=M,a[r]="string"==typeof M?M:i,D[1]=a;for(var s=2;s<w;s++)D[s]=t[s];return n.createElement.apply(null,D)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},2866:(M,e,t)=>{t.r(e),t.d(e,{assets:()=>T,contentTitle:()=>A,default:()=>L,frontMatter:()=>N,metadata:()=>u,toc:()=>j});var n=t(15680),i=Object.defineProperty,w=Object.defineProperties,D=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(M,e,t)=>e in M?i(M,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):M[e]=t,r=(M,e)=>{for(var t in e||(e={}))c.call(e,t)&&g(M,t,e[t]);if(a)for(var t of a(e))s.call(e,t)&&g(M,t,e[t]);return M},l=(M,e)=>w(M,D(e)),o=(M,e)=>{var t={};for(var n in M)c.call(M,n)&&e.indexOf(n)<0&&(t[n]=M[n]);if(null!=M&&a)for(var n of a(M))e.indexOf(n)<0&&s.call(M,n)&&(t[n]=M[n]);return t};const N={title:"Zeek and Ye Shall Pipe",authors:"mavam",date:new Date("2023-07-13T00:00:00.000Z"),tags:["zeek","logs","json","pipelines"],comments:!0},A="Zeek and Ye Shall Pipe",u={permalink:"/blog/zeek-and-ye-shall-pipe",source:"@site/blog/zeek-and-ye-shall-pipe/index.md",title:"Zeek and Ye Shall Pipe",description:"Zeek turns packets into structured logs. By default, Zeek",date:"2023-07-13T00:00:00.000Z",formattedDate:"July 13, 2023",tags:[{label:"zeek",permalink:"/blog/tags/zeek"},{label:"logs",permalink:"/blog/tags/logs"},{label:"json",permalink:"/blog/tags/json"},{label:"pipelines",permalink:"/blog/tags/pipelines"}],readingTime:2.46,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"Zeek and Ye Shall Pipe",authors:"mavam",date:"2023-07-13T00:00:00.000Z",tags:["zeek","logs","json","pipelines"],comments:!0},prevItem:{title:"Shell Yeah! Supercharging Zeek and Suricata with Tenzir",permalink:"/blog/shell-yeah-supercharging-zeek-and-suricata-with-tenzir"},nextItem:{title:"Mobilizing Zeek Logs",permalink:"/blog/mobilizing-zeek-logs"}},T={authorsImageUrls:[void 0]},j=[],x={toc:j},d="wrapper";function L(M){var e=M,{components:t}=e,i=o(e,["components"]);return(0,n.yg)(d,l(r(r({},x),i),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",r({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," turns packets into structured logs. By default, Zeek\ngenerates one file per log type and per rotation timeframe. If you don't want to\nwrangle files and directly process the output, this short blog post is for you."),(0,n.yg)("p",null,(0,n.yg)("figure",r({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.yg)("svg",r({parentName:"figure"},{viewBox:"0 0 4500 340.278",role:"img","aria-hidden":"true"}),(0,n.yg)("symbol",r({parentName:"svg"},{id:"image-5863f0cbbaf88c6609323df7296d0f11497e91b12f3ab6109c47e4f66d7bf271494d2c77e7fcb30fb2083ecd3bf10178"}),(0,n.yg)("image",r({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaWQ9InN2ZzIiIHdpZHRoPSIxNDQiIGhlaWdodD0iNDcuMTA2NjY3IiB2aWV3Qm94PSIwIDAgMTQ0IDQ3LjEwNjY2NyIgc29kaXBvZGk6ZG9jbmFtZT0iemVla19ibGFja19ob3Jpem9udGFsLmVwcyI+CiAgPGRlZnMgaWQ9ImRlZnM2Ii8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0ibmFtZWR2aWV3NCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzAwMDAwMCIgYm9yZGVyb3BhY2l0eT0iMC4yNSIgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIvPgogIDxnIGlkPSJnOCIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9Imlua19leHRfWFhYWFhYIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjMzMzMzMzMsMCwwLC0xLjMzMzMzMzMsMCw0Ny4xMDY2NjcpIj4KICAgIDxnIGlkPSJnMTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4xKSI+CiAgICAgIDxwYXRoIGQ9Im0gMjM0Ljc5NywxNjUuOTIyIGMgLTEuNjkyLDEuNjAxIC00LjE4NCwyLjA1MSAtNi4zMjgsMS4xMjUgLTIuMTQxLC0wLjkzIC0zLjUyOCwtMy4wMjcgLTMuNTI4LC01LjM2MyBsIDQuNjY4LC0zOC45NTQgLTE1Ljc2MSwxLjUyNCBjIC0wLjEyNSwwIC0wLjIzNSwwLjA2NiAtMC4zNTIsMC4wNjYgSCAxMjUuNDMgbCA5MS43MTEsMTA3LjUgYyAyLjA3LDIuNDM0IDIuNTM5LDUuODQgMS4xOTksOC43NDMgLTEuMzM2LDIuODkgLTQuMjM4LDQuNzQ2IC03LjQyMiw0Ljc0NiBIIDExMCBjIC0wLjEzNywwIC0wLjI1NCwtMC4wNzEgLTAuMzk4LC0wLjA3OSBsIC0yMS4zNzE1LC0yLjM2MyBjIC0zLjIzMDUsMCAtNS44MzYsLTIuNjA5IC01LjgzNiwtNS44NCBsIDQuNjY0MSwtMzEuODY3IC03Mi42NjQxLDY0LjI3IDcyLjE4NzUsNjMuODE2IDAuNjc1OCwwLjYzNyAtNC42Nzk3LC0zMS44NzUgYyAwLC0zLjIyMyAyLjYxNzIsLTUuODQgNS44Mzk5LC01Ljg0IGggMjAzLjg3OSBsIC0yMS4wMDgsLTI2LjIzIGMgLTIuMDE5LC0yLjUxMiAtMS42MDksLTYuMTkyIDAuOTA2LC04LjIwNCAxLjA3NSwtMC44NzEgMi4zNjgsLTEuMjg5IDMuNjQ1LC0xLjI4OSAxLjcxMSwwIDMuNDA2LDAuNzUgNC41NTgsMi4xOTYgbCAyOC42MTgsMzUuNzE0IGMgMS40MDYsMS43NTggMS42NzUsNC4xNjEgMC43MTEsNi4xOCAtMC45NzcsMi4wMjQgLTMuMDI4LDMuMzEzIC01LjI3NCwzLjMxMyBIIDk0LjI2OTUgbCA0LjY2NDEsMzkuNTkgYyAwLDIuMzMyIC0xLjM4NjcsNC40NDEgLTMuNTIzNCw1LjM3MSAtMi4xNDg1LDAuOTE4IC00LjYzNjgsMC40NjggLTYuMzI4MiwtMS4xMjUgTCAyLjAxOTUzLDI3My44MDUgQyAyLDI3My43OTMgMiwyNzMuNzczIDEuOTgwNDcsMjczLjc1NCAxLjg2MzI4LDI3My42NDggMS43MDcwMywyNzMuNjA5IDEuNjAxNTYsMjczLjQ4IC0wLjYyNSwyNzEuMTQ4IC0wLjUxOTUzMSwyNjcuNDQ1IDEuODI0MjIsMjY1LjIzIEwgODguODg2NywxODcuMzU5IGMgMS42OTkyLC0xLjYwMSA0LjE3OTcsLTIuMDUgNi4zMjgxLC0xLjEyNSAyLjE0ODUsMC45MTggMy41MzUyLDMuMDI4IDMuNTM1Miw1LjM2NCBsIC00LjY3NTgsMzguOTUzIDE1LjMzOTgsLTEuNDg1IGMgMC4yMDMsLTAuMDA3IDAuMzgzLC0wLjExNyAwLjU4NiwtMC4xMTcgaCA4My4xODQgbCAtOTEuNzA3LC0xMDcuNSBjIC0yLjA3MDcsLTIuNDI5IC0yLjU0MzQsLTUuODQgLTEuMjA0LC04LjczOCAxLjMzNiwtMi44OTEgNC4yMzksLTQuNzQ2IDcuNDIyLC00Ljc0NiBoIDEwNS44MDEgYyAwLjA3OCwwIDAuMTQ5LDAuMDM5IDAuMjI3LDAuMDQ3IHYgLTAuMDA4IGwgMjEuNzI2LDIuNDAyIGMgMy4yMzUsMCA1Ljg1MiwyLjYxNyA1Ljg1Miw1Ljg0OCBsIC00LjY4LDMxLjg2NyA3Mi42NjQsLTY0LjI2OTQgLTcyLjE4MywtNjMuODE2NCAtMC42NjQsLTAuNjM2OCA0LjY2NywzMS44NzUgYyAwLDMuMjIyNyAtMi42MjEsNS44Mzk5IC01LjgzOSw1LjgzOTkgSCAzMS4zOTg0IGwgMjEuMDAzOSwyNi4yMjI2IGMgMi4wMTE4LDIuNTE5NiAxLjYxMzMsNi4xOTkzIC0wLjkxMDEsOC4yMTEgLTEuMDgyLDAuODcxMSAtMi4zNTk0LDEuMjgxMiAtMy42NDg0LDEuMjgxMiAtMS43MTEsMCAtMy40MTAyLC0wLjc0MjIgLTQuNTYyNSwtMi4xODc1IEwgMTQuNjY4LDU0LjkyNTggYyAtMS40MDYzLC0xLjc1NzggLTEuNjc5NywtNC4xNjAyIC0wLjcwMzIsLTYuMTc5NyAwLjk2NDksLTIuMDMxMyAzLjAxNTcsLTMuMzEyNSA1LjI2MTgsLTMuMzEyNSBIIDIyOS40MjYgbCAtNC42OCwtMzkuNTg5ODUgYyAwLC0yLjMzMjAzIDEuMzg3LC00LjQ0MTQxIDMuNTM1LC01LjM3MTA5NCAyLjE0OSwtMC45MTc5NjkgNC42MjksLTAuNDY4NzQ5NzUgNi4zMjEsMS4xMjUwMDQgbCA4Ny4wNyw3Ny44NzExNCBjIDAuMDA4LDAuMDE5NSAwLjAwOCwwLjAzOSAwLjAyNywwLjA0NjggMC4xMTcsMC4xMTcyIDAuMjc0LDAuMTU2MyAwLjM5MSwwLjI4NTIgMi4yMTksMi4zMzIgMi4xMDksNi4wMzUxIC0wLjIzNSw4LjI1IGwgLTg3LjA1OCw3Ny44NzEyIiBzdHlsZT0iZmlsbDojMTEwYjA5O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBpZD0icGF0aDEyIi8+CiAgICAgIDxwYXRoIGQ9Ik0gNTIwLjk5NiwxMDUuMDk0IEggNDA0LjE2IGwgMTE4LjgyOCwxNDEuNTIzIGMgMiwyLjM0NCAzLjAwOCw0LjM0NCAzLjAwOCw3LjAyIHYgMC4zMjQgYyAwLDMuMzQgLTMuNjYsNi42OCAtNy42NzYsNi42OCBIIDM5MC40NjkgYyAtMy45OTIsMCAtNy4zMzIsLTMuMzQgLTcuMzMyLC03LjM0NCAwLC00LjAwNCAzLjM0LC03LjM0NCA3LjMzMiwtNy4zNDQgSCA1MDIuNjM3IEwgMzgzLjgwMSwxMDQuNDMgYyAtMi4wMDQsLTIuMzQ0IC0zLjAwOCwtNC4zNDggLTMuMDA4LC03LjAxMiB2IC0wLjMzMjEgYyAwLC0zLjMzOTggMy42OCwtNi42Nzk2IDcuNjg0LC02LjY3OTYgaCAxMzIuNTE5IGMgMy45OTIsMCA3LjMzMiwzLjMzOTggNy4zMzIsNy4zNDM3IDAsNC4wMDQgLTMuMzQsNy4zNDQgLTcuMzMyLDcuMzQ0IiBzdHlsZT0iZmlsbDojMTEwYjA5O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBpZD0icGF0aDE0Ii8+CiAgICAgIDxwYXRoIGQ9Im0gNTY2Ljk4LDE4My41MzEgYyAzLjAwOCwzNy43MjMgMjkuMDQzLDY2LjA5NCA2Mi43NjYsNjYuMDk0IDM5LjA0MywwIDU4LjczOCwtMzEuNzExIDYxLjA4MiwtNjYuMDk0IHogbSA2My40Myw4MS4xMTQgYyAtNDYuMDYyLDAgLTgwLjc4MSwtMzkuMzg3IC04MC43ODEsLTg4Ljc5IHYgLTAuNjY0IGMgMCwtNTMuMDc4IDM4LjcyMywtODguNzg4NyA4My40NTcsLTg4Ljc4ODcgMzAuNzAzLDAgNDkuNzI3LDExLjAxNTcgNjYuNDE4LDI3LjcwMjcgMiwyLjAwNCAyLjY3Niw0LjAwNCAyLjY3Niw1LjY3NiAwLDQuMzM2IC0zLjY4NCw3LjY3NiAtOC4wMiw3LjY3NiAtMi4zMzYsMCAtNC4wMDQsLTAuOTk2IC01LjM0NCwtMi4zMzYgLTEzLjY3OSwtMTMuMzQ4IC0zMC43MDMsLTIzLjM2NyAtNTUuMDY2LC0yMy4zNjcgLTMzLjM3OSwwIC02My43NjIsMjQuNzA3IC02Ni43Nyw2Ny4wOSBoIDEzMy41MjggYyA0LjAwNCwwIDguMDA4LDMuNjcyIDguMDA4LDcuNjgzIDAsNDguNzMxIC0zMC4zNzEsODguMTE4IC03OC4xMDYsODguMTE4IiBzdHlsZT0iZmlsbDojMTEwYjA5O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBpZD0icGF0aDE2Ii8+CiAgICAgIDxwYXRoIGQ9Im0gNzYxLjkyNiwxODMuNTMxIGMgMy4wMDgsMzcuNzIzIDI5LjA0Myw2Ni4wOTQgNjIuNzYyLDY2LjA5NCAzOS4wNDIsMCA1OC43NDIsLTMxLjcxMSA2MS4wODIsLTY2LjA5NCB6IG0gNjMuNDI2LDgxLjExNCBjIC00Ni4wNjcsMCAtODAuNzgyLC0zOS4zODcgLTgwLjc4MiwtODguNzkgdiAtMC42NjQgYyAwLC01My4wNzggMzguNzExLC04OC43ODg3IDgzLjQ1LC04OC43ODg3IDMwLjcwMywwIDQ5LjczNCwxMS4wMTU3IDY2LjQyMSwyNy43MDI3IDIuMDA0LDIuMDA0IDIuNjc2LDQuMDA0IDIuNjc2LDUuNjc2IDAsNC4zMzYgLTMuNjc5LDcuNjc2IC04LjAxNSw3LjY3NiAtMi4zMzIsMCAtNC4wMDQsLTAuOTk2IC01LjM0LC0yLjMzNiAtMTMuNjg0LC0xMy4zNDggLTMwLjcwMywtMjMuMzY3IC01NS4wNzgsLTIzLjM2NyAtMzMuMzcxLDAgLTYzLjc1LDI0LjcwNyAtNjYuNzU4LDY3LjA5IGggMTMzLjUyMyBjIDQuMDA0LDAgNy45OTYsMy42NzIgNy45OTYsNy42ODMgMCw0OC43MzEgLTMwLjM3MSw4OC4xMTggLTc4LjA5Myw4OC4xMTgiIHN0eWxlPSJmaWxsOiMxMTBiMDk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGlkPSJwYXRoMTgiLz4KICAgICAgPHBhdGggZD0ibSAxMDc3LjY3LDEwMi43NTggLTY2Ljc2LDgyLjQ0MSA2Mi40MSw2My40MyBjIDIsMiAyLjY4LDMuMzQgMi42OCw1LjY2NCAwLDQuMzQ0IC0zLjM0LDcuNjg0IC03LjY4LDcuNjg0IC0yLjM0LDAgLTQuMDEsLTAuNjcyIC01LjY4LC0yLjMzMiBMIDk1OC4xNjQsMTUxLjQ4OCB2IDE0OS4zMTcgYyAwLDQuNjc5IC0zLjY3Miw4LjM1MSAtOC4zNCw4LjM1MSAtNC42NzksMCAtOC4wMTUsLTMuNjcyIC04LjAxNSwtOC4zNTEgViA5Ny40MTggYyAwLC01LjAxMTcgMy42NzEsLTguMzUxNiA4LjM0NywtOC4zNTE2IDQuNjY4LDAgOC4wMDgsMy4zMzk5IDguMDA4LDguMzUxNiB2IDM0LjM3NSBsIDQxLjM4Nyw0MS43MjcgNjUuNDI5LC04MC43ODE3IGMgMi4zMywtMi42NjQxIDQsLTMuNjcxOSA3LjAxLC0zLjY3MTkgNC42NywwIDguMDEsMy4wMDc4IDguMDEsNy42ODc1IDAsMi4zMzIgLTAuNjYsNC4wMDQxIC0yLjMzLDYuMDA0MSIgc3R5bGU9ImZpbGw6IzExMGIwOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgaWQ9InBhdGgyMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+"}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nL1Z23bqSJJ9r684y/NY3ad0XHUwMDA1VPOEXHUwMDExxjpNXG5jwLaY1Vx1MDAwZpLAsiRuy1x1MDAxMujSU58y3zD/1F/SO1wiJcCuU7Vq1poun+WDlcpLROTeO1wik3/88OXLTV5cdTAwMWTWNz9/uVmXob+JV+9+cfNcdTAwMTdqP63fs3i/wyuNn7P98T3knm95fsh+/ukn/3D4elx1MDAxOfU13G/lyPVmvV3v8lxmff9cdTAwMGLPX778g//Hm3hF41x1MDAwM7+8N6cv/frhr7fdcDp9UHrpI1x1MDAwZuVOrUH5uswvrSWa/qp3XGbl3FJRi9a5NFx1MDAxNPEqf0OjYfQujW/rOHrLyVx1MDAwYsv82lV6WlfXzJ6hd61zXHUwMDE3f1x1MDAxN21oxcugLH/fp+vBfrN/J0v+Q+GfizGBXHUwMDFmptH7/rhbXfr45qr3+nrp81x1MDAxYW82s7zayJD54dvxfX3zaYXnxmLtU/t5XFy2R3Avo7Bk9LZbZ1x1MDAxNFr13Lo/+GGcUzhU5eJcdTAwMDPZd3BWvFx1MDAwYn+/WPXub9dcdTAwMGVtw+642VxcT7xbNVx1MDAxM394ka3X1Fk3urqldM/NV+DQ1M+t7n7HQFF7itLrdvTepUec2UBHznO++ptsfVx0KVkwvCDng1x1MDAxNcfDypeD1E7PUoyu1rWsnnF+v4l36ecxm32YfmdcdTAwMWRGXHUwMDE1XCL7z//53y/HXHUwMDAzwr32t1/+W77E52pf7GTj1U7ud/ksrsklzeh8NTTd7KiK0etYPe1Dpzt/XHUwMDFib2hcdTAwMWb0XHUwMDBmy/U3cUShulx04dv6/eY6XnlcZv6cO+T7wzXIsjVcdTAwMWPjZfXeV+X6p3PuXHUwMDE1Yl1cdTAwMWa93n+9qfv3OIp3/mb+f3eZ1r1vmaN+1a428I5cdTAwMTDk4rdcci2/+uUvXHUwMDFmmd6SON760frmO7jpdIzfxI2uaabVMXTzXHUwMDBm4EZKSrHaO6l1eFxc9V/uulx1MDAwZnZiXHUwMDFllHjxXHUwMDFiXFz8xKmPTFT/XHJM/LW+sJipve6FUFLMjN+UoPzd32VcdTAwMDf/XHUwMDFkXGL6fVx1MDAxOXp99S3jytBWXHUwMDE0Le07mqgrylete/3zmfhaT9H0jq5f1PL/R1c+0/1qql+T3bJcZs28xuZcdTAwMWYle5b7+THj7fNP69VcdTAwMDdASGtvzF5Hf1XCIPBfe72w01EsXdNXr1i0s1JeVdWwumtLXHJU7VX3XHUwMDAz0N5cbo3u2njtdFbd4FXr4r2x0sJud919XHJcdTAwMDNdeVxyNKWnr8OVXHUwMDFlvKqK2u1dXHUwMDAxXHJMX59zXCL9nIGDP5u//i7ZhP85IDfIsTM4QeMkt25O8bq4/e7G08/NXHUwMDBmXHJcdTAwMTfZxewy7N/u589cdTAwMTfyb+Pten4tXHUwMDAwP2Wn6Mdyu7n5RNs/L/iAlL94XHUwMDFj06L0589cdTAwMWbM+k+SWujRw72rLatbI3guj2F9OFx1MDAwNNu89rS7YjlXYv/+UVx07f1prK/0VWVe3s3MU7hcck/B9i5fvriF9+xuwsq6eu9E65GaXHUwMDA1O9FcdDUr9V9uT8tRajnbN2V13++MK6tcdTAwMGW0x0M4wruZWVx1MDAwN/pT5WlP20D/tsPcx+XL9PR49zhcdTAwMWPrLsZtXG7qO573j8v7x9SJW1t/ZZ8uKmmXSPqFXHUwMDE4WPVqXHUwMDFixs79W1x1MDAxZYzMerKDn394zHJcdTAwMTPu3EOgXHUwMDE5lpNcZo9cdTAwMDL++M9Ty+E5XHUwMDFjvF9cdTAwMWRgy/5h5pSuPY2d0dvGf17tV7ZcdTAwMTK7dnhcdTAwMTTzvuYmnlx1MDAwZVs1//lJn24tXHUwMDAzfVx1MDAwYsfuR2I+VVx1MDAxY3uqj5NhgT6aWznRVYw6y5GVcFxcXHUwMDEx//X2aeOrVlx1MDAxY4zuXHUwMDEyfO5cdTAwMTGfw3prXHUwMDFkV6O7bLx9KsLK+XFcdTAwMTD3o4fR42a5XHUwMDEz0sYt/605cU++u7/EcLI134Lnp3S13WxW1e1hXHR7ea3nR7bTXHUwMDFkwJbR3W757J6CkVXB5mS5lf/gS4z10+XLtyTQylOYKLFTI2Y2xc2JvK1VLUdPVaDfvnnaRlnDfjEwKpdjZ76HmvtcdTAwMTaOXHUwMDE2wMPbaYU+S+2p9kd3aaCHiDFiOtpcdTAwMWN9XHUwMDFkXHUwMDExebndTHb8/lx1MDAxNJLfL48mxW6c9L/XJ/FH+NWAn631XHUwMDE2buH/536IR6jlXHUwMDE3m7VpubTvUuzp6SHaR45d7tA/fZh9201cdTAwMDZcdTAwMWZtXerfTquX21x1MDAxY7Hb4H3mvWw2QMeHPtibePlcXCDuWFO1Nuv7x9fnuzePflx1MDAxMTMl3N5cdTAwMWRDbVx0jCnoo76t7rGHg6hcdTAwMWMnom7+ZWJQXHUwMDE044HyuU1xK6NcdTAwMTQ2MJKEXHUwMDA3JzH+5lxm+lx1MDAxZuxcdTAwMDXOgMXHyns26yXiXHUwMDFmIOZkVzBa7Fx1MDAxMfvybzOJj2ZcXOG9PO6dXHUwMDExYUSJRFwilHFcdTAwMTKablWUbrI4TuZO5YxENJ5cdTAwMGaPbpJWY5s++6UzUNBvaLiDosJcdTAwMWWoYtbP3dioRVx1MDAxMmViXHUwMDA2+5JcdTAwMDXGOMD8tIRcdTAwMGbYp7TGmHqcLKrJoMhFZVx1MDAxNFwiXHTRR1x1MDAxY925Y6CPXG4/NVHdZuBcdTAwMDHW8KitnlxmXGbTnU9pfbxcdTAwMGY1MStKmsNcdTAwMWTcJlx1MDAwZc87XHUwMDA0lopC/u3U9Dfs0dy4n8PXXHUwMDFhcyNmXHUwMDA2cSqaXHL6ZNfRtUVcdTAwMTRcZvom7NTFfJghXuDdXCLyqj75oo9th/qAj/icXHUwMDBic2wjXHUwMDBl9jRcIr8m8zSDTTrNQTHBnmjUf2KneJ5cdTAwMWVcdTAwMTE/Y0z211NccjZh3mkl4oJiqrjxrePYw1JcXGyvXHUwMDEx59Z21aW4kK31MFwiXVx1MDAxM3VqyNj19clcZnFcdTAwMTkoXHUwMDE1bKjxXkV71cQrkXF1amEv4Cv2YWZcdTAwMTii9jKKP/bKdDi2Ue3GXHUwMDA1v0Ps2lx1MDAxOCuIZy7qIeyHLsFeXHUwMDExXHUwMDFiwFx1MDAxNfbM9mCzozt2WPE+14vMTVx1MDAwNPpccjXoXHUwMDE1xobqhPCZePBcdTAwMDFrXHUwMDBlMK5OddozQWvUXHUwMDFjT8Iv2VZcdI6tV7q1XHUwMDAzu2Q8pZ2pKfc+UpxRXHUwMDA0/PXRP7r2XHUwMDE3Wlx1MDAxMpEvXHUwMDFh+SixXGJcXNlDU8ZgUVxu2uuZoVx0O0U/XHUwMDBmmEsrsnFcdTAwMDK9RVx1MDAxZlx1MDAwM+Ncblx1MDAxN3tPcXRnXHUwMDFjY4NiXGZfazehubGPSWQ6NrCYTFXJOceYzGhMWFxuwlx1MDAxN72zMVx1MDAxZvlcdTAwMGXf4K/qzoH1mDDhXHUwMDExnoBr2EBtNTBWXHUwMDBmXHUwMDE1slx1MDAxNXYp4CpxQkd/etY4luChm8CGgcSgS/NcZlx1MDAxOLOmW4c0L/gxZX5cYlx1MDAxYvzA+tinWu6lXHUwMDAzTS5cdTAwMTAnUWL/gamU9kqbzFx1MDAxN2RcdTAwMDf+hjbYwHWdXHUwMDAyv6ncXHUwMDA3YFx1MDAxNFitXHUwMDFjqSdcdTAwMDb2j2xQ0K/lYI05iYM6cZn8cu1IXHUwMDFkc1x1MDAxY4eG5LvH8Vx1MDAxMjQuiVwijnXtXHUwMDE4wHfecn4+YFx1MDAwZSEmi1x1MDAxYWtcIo9ij+1FNKX9l8/6ZI64xEXl1li3XHUwMDBla3BcdTAwMDJrRFx1MDAwNXJkXHUwMDA2TYBfoSr3K9Jo/mZcdTAwMWN84vjpwlx1MDAwZVx1MDAwYlE141x0340muXOvXHUwMDE5PzUkpzzSXHUwMDA29Fx1MDAxYpJcdTAwMGU1bVx1MDAwYrZNUHtcdTAwMTJiT6cqr287ikigXHUwMDE1iacyzoZFNLEjtEdcdTAwMWFp4YTyd70wmz1FrKGFXHUwMDFjS69AvEhcdTAwMGLhV5hJbFx1MDAwMlx1MDAxZlJcdTAwMGJL2Yc0iuIyVCbMUcNcdTAwMTSEhcpQMWfFe4s9ZozNhYrYsFx1MDAxNjJPZdx1xlpccntgO+yl9zVixtilfWK7kFeFLTLWXHUwMDBlu69cdTAwMTNcdTAwMDcwppZcdTAwMWEyLF3CQbIwSFx1MDAwNyhcdTAwMGaIeVx1MDAxOPmDvlx1MDAwMTtK4iOwk09ovrpPPEaOQXxmrC+si3iWmmI7pmxbKKKenvkseYRYMOdCaHefc1x1MDAxN69cdTAwMTdcdTAwMWJcdTAwMDbmJt5UwGVGWslcdTAwMWFJa9hcdTAwMGXFstXIPfwrWFx1MDAxYoBNxi7p34A42Kd9NFx0k/DT5GdwQT5Pdefei1x1MDAxYd9ccmdUQEvIXHUwMDE3R5N63uc8XHUwMDA2X7E+6yRpXHUwMDBlxVrqUnV+Zi2aXFxiT9xjLKJPq4+kM1xy58hvqZHAZN5qpCu53PQlvVx1MDAxNNqk5WZVfNRI2n9oJOkozVx1MDAwZruzVlx1MDAxYlvtnsxcbvlcdD4jj9F42n+l9Vx1MDAxMz5Tn1xuuKswl8a+koaAu+z/fGhcIidcdTAwMTJeS6ojWG/mnJMpN2Ovh5TXKvSX+2hHXHUwMDE1c98m/WO7kEuhMzZrpdRcXMnJj21tTlx1MDAxZPB7XHUwMDA1ubWS+Fx1MDAwYolfnCPB04p1mGywQ5W4JuZNzrdcdTAwMTeIUVqRVnpcdTAwMTXPR/pZS1x1MDAxZUFcdTAwMTfqqKlFuEbJpY72K+lcdTAwMDd0gfNcdTAwMGLlXHUwMDAwek/YSWFj2vCS9JLyXHUwMDBiaVx1MDAwNWGZNZW4SZxn7b60ka461YTWT1jfOcdx7cK6XHUwMDFhmeBym+MqrtGQu0hLwDld4nmqUP3T8rqpcVx1MDAxMJ++6Vx1MDAwZVx1MDAxYT2Q+chke5OU+IH9TyVmbFx1MDAwZlx1MDAxOJmanG9YT4ZtbYWcyHw1UFx1MDAwYlx1MDAxNoiDjk/KaSXXRbbkgORcdTAwMDX2fcZcdTAwMWMqZL4mnPBzRbVcdTAwMDc+WctcdTAwMWI9yJrPSnIrVHiO+Vx1MDAwMnVcdTAwMDaNXHUwMDExpuD6yjGQL1xiX8BLSrlcbrUpP5eUg13CXb0or2oyysEqYXU8R2xQL8KW1uZcbvVwvbrfZHS2WW43WWDvXHUwMDEzYKjwoO1cdTAwMTNteVxiRkV+OT/sy7Yt3D1hzOFcdTAwMThoZlx1MDAwN+eP00R3UVdb703bXHUwMDA28/JZXHUwMDA251x1MDAwNcW3aZ3e9+veVIngXHUwMDBmYVx1MDAwNVx1MDAxYyngw1x1MDAwMnFLXHUwMDE1Z1x1MDAxOEXQXHLSdo15RlxcSlwiql+RXHUwMDFih5wzJc9IQ4SCPa2bOCufnsnnivSJalLK62fe1zLHXHUwMDAz+1x1MDAxNDfSiNwlXtXtM+FcdTAwMTBx55ybSk5Uhjnhupb71lx1MDAxMvPtXFwh5/kx155sQyGx2C+kPUK5eqczbqkuxDzIhaQtqiC9XHUwMDAwTpmXlD+SqKC6W1DNiLrXkzpFXHUwMDE4lLyqcXblOo99JZ7UlKtl7dI35HqovXHulZggrlxmr+pDzmWkzcwv8lx1MDAxYrWkzFxy0GL00ShcdTAwMDdSneVTXHJfSz1r9LyNRevLeb42NtI3QfmQalx1MDAxZeZOXHUwMDEzr6z1+1x1MDAxYzfO8/Dnz8Gk8puY3Fx1MDAxMiY9+I0zgE25hWpcdTAwMDWOWVx1MDAxYmfU3dDaXHUwMDA0MUhSyn+ot6g/a4uG/dFcdTAwMTlTiSexXGZcZlx1MDAxMddcdTAwMDWdN+xFk59l7U+64dhcdTAwMWXVx1xcy53H3O+jYIa5SMerwmDtmTN2c2hcdTAwMTP6eJQjiNOkvYY8S6Ssf9hng2pb5EJgJKL1zDY/07lD1itYizFcdTAwMTJS7UN9KsqhVHdB56FtXFybKFKreVx1MDAwZVx1MDAwM/lcdTAwMDKYpFx1MDAxYVx1MDAxY3HA2tB2yvGoXHUwMDAxhmWj61x1MDAxMdlcdTAwMGZ+ct3IOVx1MDAwMedMyVHmQMX1XHUwMDE0n8k+PKvyk3g55XOdxLRHZ1xcvXmXT1xiP/HlWWqfJ7k4aDlBNXOqydxNPCvafpS7asYyxUpikOrSms9cdTAwMDFcXLs5Ndd+XHUwMDE04znpkEdnXHUwMDE4xIXOKnxepvc0ns6NtDfYZ6pbp1xct1GbS3tfXHUwMDE1XHUwMDFh5Vx1MDAwNpyjqJ6qXHUwMDE5P1x059TGb8JB1ORcdNJcdTAwMWbS/PaZeVczX3gvRNnYSGfPjPZHyDNcdTAwMDHqMr6LuLT9ObzRfpc3NWFcdTAwMTk1REx1O+festFcbj5LijokzMA/p+VcdTAwMDTFrKBaXHUwMDBlscQ7wvWZS8iXyLE2a4wqz/6st83ZXHUwMDEw/MD7XHS3tWNuO85cYnYkdGak+pPudZrcXGYtprXo/EWYmfB5Mqr4roNqOju88CluuZBGq/hcXE+2uqmSP1RcdTAwMGbRuYA4THX3hDlcdTAwMDf+2aTbfJa9alx1MDAxM7JGYlxyQFx1MDAxZFxyXHJcdTAwMDBcdTAwMGVKPmPPXHUwMDE3eE/2Tys+XHUwMDFikbbYdP6nulx0mGk++U4kXHQ15siH51x1MDAwNX82XHUwMDFh22CdcWVKPIXEXHUwMDA3gzk6+8xcdTAwMWbnd/nT1lfcn+fknFAyJ2Seaf3KoYfgXHUwMDE032Wo7ozj84FT4DXeh6XULY/PmvCNzlx1MDAxZVx1MDAwNXOOtKOGPtpcdTAwMWXlLJPvJJhzi4rvWlx1MDAxYb9Zezj3gPucr53zM+Vv4I70TaHYXHUwMDBivs8hXHUwMDFi6WxdXHUwMDE4zJk52Vx1MDAxZFI8TNLWpi127l1l/Vxc0r3i1n8us0mMmnV+XHUwMDFiQ4+7zKeBer7/nCTDtq1aYcxka56C3WFcdTAwMTNue91Qf6xcdTAwMDItl23bRdzcXHIyT2idcd3cXHUwMDFiXHUwMDBl6C749m1cdTAwMDU/+d531qdzXHUwMDFm71x1MDAwZjS14DzCtlx1MDAxMjZon4FVqmtnnGPo/qjJXHUwMDBmXHUwMDE0XHUwMDFi7GPMemq0tY3gXHUwMDFhhrVV41qEtbWtXHUwMDE3sLdNjpd3ZZ5x9Vxcyfd9ea/GeaQvdYpxwfeDsu6Ob4Vjp8TNks5bwHJJd1x1MDAwMKidgEeqsYEx5Fx1MDAwNVlzTVx1MDAxOZONtuM8R7Wp4PvLXHTp2+Dy3NxpSZ5cdTAwMGWYI1mD6epcbstyXHUwMDFjzk1PMbjPZ57ozFGue7C2xFxi50K6RyiBZYNzQ3VcdTAwMWWvne894TOvR1rFNVxmzoFnbW7Hk290Vyt0d8b3efJepypcdTAwMTQ+gyWUXHUwMDA3XHUwMDE3fFZcdTAwMWZfcrHenFx1MDAwYmvmSnPX5zDn2K9cdTAwMTJnXHUwMDAzrtXGbXzm8kzC95RswzCTOko5Wz5LvONcdTAwMWNcdTAwMDfut2eBJs+39VbZ7CfVKMxcdTAwMWb67lx1MDAwNFx1MDAxODWD0Vx1MDAwMprNOaDjQMPEyIFcdTAwMGXnjP3xs0XfIVx1MDAxZFb3aUe0bS/f1IDu17fWcb19qoI6R775dvI12bY8fyfDmK7EoLnPJ5xcdTAwMGasnbzbL05L4P9Bfq/z4+WrsfB9ffm+tddRu6apmWrn/EXkLz/88i9cdFx1MDAxMVW6In0=",(0,n.yg)("defs",{parentName:"svg"},(0,n.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.yg)("text",r({parentName:"svg"},{x:"2240",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"246.424",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 10)"}),"\u276f upstream |       | downstream"),(0,n.yg)("use",r({parentName:"svg"},{width:"920",height:"300",href:"#image-5863f0cbbaf88c6609323df7296d0f11497e91b12f3ab6109c47e4f66d7bf271494d2c77e7fcb30fb2083ecd3bf10178",transform:"translate(1773 30)"}))))),(0,n.yg)("p",null,"Zeek requires a bit of adaptation to fit in the Unix pipeline model, by which we\nmean ",(0,n.yg)("em",{parentName:"p"},"take your input on stdin and produce your output to stdout"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{}),"<upstream> | zeek | <downstream>\n")),(0,n.yg)("p",null,"In this example, ",(0,n.yg)("inlineCode",{parentName:"p"},"<upstream>")," produces packets in PCAP format and ",(0,n.yg)("inlineCode",{parentName:"p"},"<downstream>"),"\nprocesses the Zeek logs. Let's work towards this."),(0,n.yg)("p",null,"Solving the upstream part is easy: just use ",(0,n.yg)("inlineCode",{parentName:"p"},"zeek -r -")," to read from stdin. So\nlet's focus on the logs downstream. ",(0,n.yg)("a",r({parentName:"p"},{href:"/blog/mobilizing-zeek-logs"}),"Our last blog"),"\nintroduced the various logging formats, such as tab-separated values (TSV),\nJSON, and Streaming JSON with an extra ",(0,n.yg)("inlineCode",{parentName:"p"},"_path")," discriminator field. The only\nformat conducive to multiplexing different log types is Streaming JSON."),(0,n.yg)("p",null,"Let's see what we get:"),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{className:"language-bash"}),"zcat < trace.pcap | zeek -r - json-streaming-logs\n")),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{}),"\u276f ls\njson_streaming_analyzer.1.log       json_streaming_packet_filter.1.log\njson_streaming_conn.1.log           json_streaming_pe.1.log\njson_streaming_dce_rpc.1.log        json_streaming_reporter.1.log\njson_streaming_dhcp.1.log           json_streaming_sip.1.log\njson_streaming_dns.1.log            json_streaming_smb_files.1.log\njson_streaming_dpd.1.log            json_streaming_smb_mapping.1.log\njson_streaming_files.1.log          json_streaming_snmp.1.log\njson_streaming_http.1.log           json_streaming_ssl.1.log\njson_streaming_kerberos.1.log       json_streaming_tunnel.1.log\njson_streaming_ntlm.1.log           json_streaming_weird.1.log\njson_streaming_ntp.1.log            json_streaming_x509.1.log\njson_streaming_ocsp.1.log\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"json-streaming-package")," prepends a distinguishing prefix to the filename.\nThe ",(0,n.yg)("inlineCode",{parentName:"p"},"*.N.log")," suffix counts the rotations, e.g., ",(0,n.yg)("inlineCode",{parentName:"p"},"*.1.log")," means the logs from\nthe first batch."),(0,n.yg)("p",null,"Let's try to avoid the files altogether and send the contents of these file to\nstdout. This requires a bit of option fiddling to achieve the desired result:"),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{className:"language-bash"}),"zcat < trace.pcap |\n  zeek -r - \\\n    LogAscii::output_to_stdout=T \\\n    JSONStreaming::disable_default_logs=T \\\n    JSONStreaming::enable_log_rotation=F \\\n    json-streaming-logs\n")),(0,n.yg)("p",null,"This requires a bit explanation:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"LogAscii::output_to_stdout=T")," redirects the log output to stdout."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"JSONStreaming::disable_default_logs=T")," disables the default TSV logs.\nWithout this option, Zeek will print ",(0,n.yg)("em",{parentName:"li"},"both")," TSV and NDJSON to stdout."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"JSONStreaming::enable_log_rotation=F")," disables log rotation. This is needed\nbecause the option ",(0,n.yg)("inlineCode",{parentName:"li"},"output_to_stdout=T")," sets the internal filenames to\n",(0,n.yg)("inlineCode",{parentName:"li"},"/dev/stdout"),", which Zeek then tries to rotate away. Better not.")),(0,n.yg)("p",null,"Here's the result you'd expect, which is basically a ",(0,n.yg)("inlineCode",{parentName:"p"},"cat *.log"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{className:"language-json"}),'{"_path":"files","_write_ts":"2021-11-17T13:32:43.250616Z","ts":"2021-11-17T13:32:43.250616Z","fuid":"FhEFqzHx1hVpkhWci","uid":"CHhfpE1dTbPgBTR24","id.orig_h":"128.14.134.170","id.orig_p":57468,"id.resp_h":"198.71.247.91","id.resp_p":80,"source":"HTTP","depth":0,"analyzers":[],"mime_type":"text/html","duration":0.0,"is_orig":false,"seen_bytes":51,"total_bytes":51,"missing_bytes":0,"overflow_bytes":0,"timedout":false}\n{"_path":"http","_write_ts":"2021-11-17T13:32:43.250616Z","ts":"2021-11-17T13:32:43.249475Z","uid":"CHhfpE1dTbPgBTR24","id.orig_h":"128.14.134.170","id.orig_p":57468,"id.resp_h":"198.71.247.91","id.resp_p":80,"trans_depth":1,"method":"GET","host":"198.71.247.91","uri":"/","version":"1.1","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 ","request_body_len":0,"response_body_len":51,"status_code":200,"status_msg":"OK","tags":[],"resp_fuids":["FhEFqzHx1hVpkhWci"],"resp_mime_types":["text/html"]}\n{"_path":"packet_filter","_write_ts":"1970-01-01T00:00:00.000000Z","ts":"2023-07-11T03:30:17.189787Z","node":"zeek","filter":"ip or not ip","init":true,"success":true}\n{"_path":"conn","_write_ts":"2021-11-17T13:33:01.457108Z","ts":"2021-11-17T13:32:46.565338Z","uid":"CD868huwhDP636oT","id.orig_h":"89.248.165.145","id.orig_p":43831,"id.resp_h":"198.71.247.91","id.resp_p":52806,"proto":"tcp","conn_state":"S0","missed_bytes":0,"history":"S","orig_pkts":1,"orig_ip_bytes":40,"resp_pkts":0,"resp_ip_bytes":0}\n{"_path":"tunnel","_write_ts":"2021-11-17T13:40:34.891453Z","ts":"2021-11-17T13:40:34.891453Z","uid":"CsqzCG2F8VDR4gM3a8","id.orig_h":"49.213.162.198","id.orig_p":0,"id.resp_h":"198.71.247.91","id.resp_p":0,"tunnel_type":"Tunnel::GRE","action":"Tunnel::DISCOVER"}\n')),(0,n.yg)("p",null,"Nobody can remember this invocation. Especially during firefighting when you\nquickly need to plow through a trace to understand it. So we want to wrap this\nsomehow:"),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{className:"language-bash",metastring:"title=zeekify",title:"zeekify"}),'#!/bin/sh\nzeek -r - \\\n  LogAscii::output_to_stdout=T \\\n  JSONStreaming::disable_default_logs=T \\\n  JSONStreaming::enable_log_rotation=F \\\n  json-streaming-logs \\\n  "$@"\n')),(0,n.yg)("p",null,"Now we're in pipeline land:"),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{className:"language-bash"}),"zcat pcap.gz | zeekify | head | jq -r ._path\n")),(0,n.yg)("pre",null,(0,n.yg)("code",r({parentName:"pre"},{}),"packet_filter\nfiles\nntp\ntunnel\nconn\nntp\nhttp\nconn\nntp\nconn\n")),(0,n.yg)("p",null,"Okay, we got Zeek as a Unix pipe. But now you have to wrangle the JSON with\n",(0,n.yg)("inlineCode",{parentName:"p"},"jq"),". Unless you're a die-hard fan, even simple analytics, like filtering or\naggregating, have a steep learning curve. In the next blog post, we'll double\ndown on the elegant principle of pipelines and show how you can take do easy\nin-situ analytics with Tenzir."))}L.isMDXComponent=!0}}]);