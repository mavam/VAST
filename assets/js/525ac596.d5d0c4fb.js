"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56545],{15680:(M,e,c)=>{c.d(e,{xA:()=>n,yg:()=>T});var t=c(96540);function D(M,e,c){return e in M?Object.defineProperty(M,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):M[e]=c,M}function x(M,e){var c=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),c.push.apply(c,t)}return c}function w(M){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?x(Object(c),!0).forEach((function(e){D(M,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(c)):x(Object(c)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(c,e))}))}return M}function m(M,e){if(null==M)return{};var c,t,D=function(M,e){if(null==M)return{};var c,t,D={},x=Object.keys(M);for(t=0;t<x.length;t++)c=x[t],e.indexOf(c)>=0||(D[c]=M[c]);return D}(M,e);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(M);for(t=0;t<x.length;t++)c=x[t],e.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(M,c)&&(D[c]=M[c])}return D}var a=t.createContext({}),A=function(M){var e=t.useContext(a),c=e;return M&&(c="function"==typeof M?M(e):w(w({},e),M)),c},n=function(M){var e=A(M.components);return t.createElement(a.Provider,{value:e},M.children)},d="mdxType",r={inlineCode:"code",wrapper:function(M){var e=M.children;return t.createElement(t.Fragment,{},e)}},l=t.forwardRef((function(M,e){var c=M.components,D=M.mdxType,x=M.originalType,a=M.parentName,n=m(M,["components","mdxType","originalType","parentName"]),d=A(c),l=D,T=d["".concat(a,".").concat(l)]||d[l]||r[l]||x;return c?t.createElement(T,w(w({ref:e},n),{},{components:c})):t.createElement(T,w({ref:e},n))}));function T(M,e){var c=arguments,D=e&&e.mdxType;if("string"==typeof M||D){var x=c.length,w=new Array(x);w[0]=l;var m={};for(var a in e)hasOwnProperty.call(e,a)&&(m[a]=e[a]);m.originalType=M,m[d]="string"==typeof M?M:D,w[1]=m;for(var A=2;A<x;A++)w[A]=c[A];return t.createElement.apply(null,w)}return t.createElement.apply(null,c)}l.displayName="MDXCreateElement"},15251:(M,e,c)=>{c.r(e),c.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>T,metadata:()=>o,toc:()=>g});var t=c(15680),D=Object.defineProperty,x=Object.defineProperties,w=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,n=(M,e,c)=>e in M?D(M,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):M[e]=c,d=(M,e)=>{for(var c in e||(e={}))a.call(e,c)&&n(M,c,e[c]);if(m)for(var c of m(e))A.call(e,c)&&n(M,c,e[c]);return M},r=(M,e)=>x(M,w(e)),l=(M,e)=>{var c={};for(var t in M)a.call(M,t)&&e.indexOf(t)<0&&(c[t]=M[t]);if(null!=M&&m)for(var t of m(M))e.indexOf(t)<0&&A.call(M,t)&&(c[t]=M[t]);return c};const T={title:"Tenzir v4.19",authors:["lava"],date:new Date("2024-07-26T00:00:00.000Z"),tags:["release","packages","python"],comments:!0},i=void 0,o={permalink:"/blog/tenzir-v4.19",source:"@site/blog/tenzir-v4.19/index.md",title:"Tenzir v4.19",description:"Tenzir v4.19 now supports installing pipelines and contexts",date:"2024-07-26T00:00:00.000Z",formattedDate:"July 26, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"packages",permalink:"/blog/tags/packages"},{label:"python",permalink:"/blog/tags/python"}],readingTime:5.54,hasTruncateMarker:!0,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"}],frontMatter:{title:"Tenzir v4.19",authors:["lava"],date:"2024-07-26T00:00:00.000Z",tags:["release","packages","python"],comments:!0},prevItem:{title:"Tenzir Platform is Now Generally Available",permalink:"/blog/tenzir-platform-is-now-generally-available"},nextItem:{title:"Tenzir v4.18",permalink:"/blog/tenzir-v4.18"}},s={authorsImageUrls:[void 0]},g=[],N={toc:g},X="wrapper";function y(M){var e=M,{components:c}=e,D=l(e,["components"]);return(0,t.yg)(X,r(d(d({},N),D),{components:c,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/tag/v4.19.0"}),"Tenzir v4.19")," now supports installing pipelines and contexts\ntogether in packages, an all-new mechanism that makes installing integrations\neasier than before."),(0,t.yg)("p",null,(0,t.yg)("figure",d({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,t.yg)("svg",d({parentName:"figure"},{viewBox:"0 0 530.476 216.209",role:"img","aria-hidden":"true"}),(0,t.yg)("symbol",d({parentName:"svg"},{id:"image-0dfe8882744af45da742ec1d93b0c09b79ca0168e3a396c69f9cdd1abfd96c3d5afe247e7d84c6323cef523245599f75"}),(0,t.yg)("image",d({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik05NjAgMTI4cTcwIDAgMTU4IDh0MTc2IDI4dDE2OCA1M3QxMzIgODVxMzEgMzAgNTAgNjV0MjAgODF2MTE1MnEwIDQ1LTE5IDgwdC01MSA2NnEtNTIgNTEtMTMxIDg0dC0xNjggNTR0LTE3NyAyOHQtMTU4IDhxLTcwIDAtMTU4LTh0LTE3Ni0yOHQtMTY4LTUzdC0xMzItODVxLTMxLTMwLTUwLTY1dC0yMC04MVY0NDhxMC00NSAxOS04MHQ1MS02NnE1Mi01MSAxMzEtODR0MTY4LTU0dDE3Ny0yOHQxNTgtOG0wIDEyOHEtNTEgMC0xMDYgM3QtMTExIDEydC0xMTAgMjJ0LTEwMiAzM3EtMTUgNi00MCAxOHQtNDkgMjl0LTQxIDM1dC0xNyA0MHEwIDggMyAxNXQ4IDE0cTIxIDMyIDYwIDU2dDg5IDQydDEwNiAzMHQxMTIgMjB0MTA3IDExdDkxIDRxNDAgMCA5MS0zdDEwNy0xMXQxMTItMjB0MTA1LTMxdDg5LTQydDYxLTU2cTUtNyA4LTE0dDMtMTVxMC0yMC0xNy0zOXQtNDEtMzZ0LTQ5LTI4dC00MC0xOXEtNDgtMTktMTAyLTMydC0xMDktMjJ0LTExMS0xMnQtMTA3LTRtMCAxNTM2cTUxIDAgMTA2LTN0MTEyLTEydDExMC0yMnQxMDEtMzNxMTUtNiA0MC0xOHQ0OS0yOXQ0MS0zNXQxNy00MHYtMTk0cS01NyAzOC0xMjkgNjN0LTE0OSA0MHQtMTU0IDIxdC0xNDQgNnQtMTQ0LTZ0LTE1NC0yMXQtMTQ5LTQwdC0xMjktNjN2MTk0cTAgMjEgMTcgNDB0NDEgMzV0NDkgMjh0NDAgMTlxNDcgMjAgMTAxIDMzdDExMCAyMXQxMTEgMTJ0MTA3IDRtMC0zODRxNTEgMCAxMDYtM3QxMTItMTJ0MTEwLTIydDEwMS0zM3ExNS02IDQwLTE4dDQ5LTI5dDQxLTM1dDE3LTQwdi0xOTRxLTU3IDM4LTEyOSA2M3QtMTQ5IDQwdC0xNTQgMjF0LTE0NCA2dC0xNDQtNnQtMTU0LTIxdC0xNDktNDB0LTEyOS02M3YxOTRxMCAyMSAxNyA0MHQ0MSAzNXQ0OSAyOHQ0MCAxOXE0NyAyMCAxMDEgMzN0MTEwIDIxdDExMSAxMnQxMDcgNG0wLTM4NHE1MiAwIDEwNy0zdDExMC0xMnQxMTAtMjJ0MTAyLTMzcTE1LTYgNDAtMTh0NDktMjl0NDEtMzV0MTctNDBWNjM4cS01NyAzNy0xMjggNjJ0LTE0OSA0MHQtMTU1IDIxdC0xNDQgN3EtNjcgMC0xNDQtNnQtMTU0LTIydC0xNDktNDB0LTEyOS02MnYxOTRxMCAyMCAxNyAzOXQ0MSAzNnQ0OSAyOHQ0MCAxOXE0OCAyMCAxMDIgMzN0MTA5IDIxdDExMSAxMnQxMDcgNCIvPjwvc3ZnPg=="}))),(0,t.yg)("symbol",d({parentName:"svg"},{id:"image-6e6f84e34571c11e053dff09b3c1d00e67aaec2e395c0f205cfeb9fbdfdce9d1e28594360c1f6abd560ad7bc98f1e9e8"}),(0,t.yg)("image",d({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMjJjLS44MTggMC0xLjYtLjMzNS0zLjE2My0xLjAwNkM0Ljk0NiAxOS4zMjQgMyAxOC40OSAzIDE3LjA4NVY3Ljc0N00xMiAyMmMuODE4IDAgMS42LS4zMzUgMy4xNjMtMS4wMDZDMTkuMDU0IDE5LjMyNCAyMSAxOC40OSAyMSAxNy4wODVWNy43NDdNMTIgMjJ2LTkuODNtOS00LjQyMmMwIC42MDMtLjgwMi45ODQtMi40MDUgMS43NDdsLTIuOTIgMS4zOUMxMy44NyAxMS43NDEgMTIuOTcgMTIuMTcgMTIgMTIuMTdtOS00LjQyM2MwLS42MDQtLjgwMi0uOTg1LTIuNDA1LTEuNzQ4TTMgNy43NDdjMCAuNjA0LjgwMi45ODYgMi40MDUgMS43NDhsMi45MiAxLjM5YzEuODA0Ljg1NyAyLjcwNSAxLjI4NiAzLjY3NSAxLjI4Nk0zIDcuNzQ4YzAtLjYwNC44MDItLjk4NSAyLjQwNS0xLjc0OG0uOTI3IDcuMzExbDEuOTk0Ljk0OE0xMiAydjJtNC0xbC0xLjUgMk04IDNsMS41IDIiIGNvbG9yPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXOtT4sq2/77/iinPxztm9/txbp1cdTAwMGZcYqg4JIjgXHUwMDAzb52yQlx1MDAxMjC8N1x1MDAwNHns2v/7XVx1MDAxZJRcdTAwMDRcdTAwMDRR9+h2LJlygKR79er1+K21ujv8+du3b3vRbFx1MDAxMOz9+9teMPXcTuhcdTAwMGbdyd53c/0uXHUwMDE4jsJ+XHUwMDBmbpH4+6g/XHUwMDFlenHL2yhcdTAwMWGM/v377+5gYCW9LK/fXfRcZjpBN+hFI2j7f/D927c/4/9TY3XCXlx1MDAxMLeNryYjYVwi8Pplp9+Lh8Wcc8kw0mjZXCLs+cHU0HMnKiFcdTAwMTeOcsBBXHUwMDE0+HCn4XZGQXLHXFzauyHFXG46Paj8wVx1MDAwMnbTXHUwMDE40Uz2hthJ90bY6VSiWSdmdNSHySX3RtGw31x1MDAwZS5DP7o1XHUwMDFjrV3f1mvYXHUwMDFmN297wWi00qc/cL0wmplrKJmS22vGNJDFmMJSaUoo1lxcSbpsYmYstLQ4VUxzTIVASi3vXHUwMDFhgkIwiymtXHUwMDExdJZcdTAwMDIzvsZott/pXHUwMDBmXHKj/0LxK2G17nrtJvDb85M2jfiVtJk8TF9bXG5cdTAwMTEtuVJaUIxUMsxtXHUwMDEwNm8jaKMtjTBTUpvZcM6SWYyCWEFYYayVTmvVjD8o+In5LNrvi7tocvxcdTAwMDdv3tb5QSBuq85cdTAwMTgvmYJcdTAwMDY5J3PQu6tddPZcdTAwMWLk+Fxuqc5IuNd79/f/m6h36HaDglx1MDAxObo37nTSOur59zpauVE3N/Ipi05IjVx1MDAwN767MDMsXHRcdTAwMTZcXFxioUBcdTAwMWHL+2Dl7XVynb7X3mCZo8hcdTAwMWRGXHUwMDA3YM9hr7neJej5W+503FGU7Xe7YVx1MDAwNGyc9sNetN5cIqabXHUwMDE5XHUwMDBl+5PbwH00aaC89d7AkFvVQfLp2zf0Pf1l+fm/3ze2Jlx1MDAxNpgkp5xwXHLGTiWXwT7maVx1MDAxMo9cZmVcdTAwMTdJzCzFiXFcdTAwMGVcdTAwMTA+oVx1MDAxNJOnyO2kttWWzYtZmiPJqJaEISklfzFzL5LWNtn+ln7/6/tcdTAwMGKhVSi9XHJaJVJcdTAwMDC8XHUwMDA0J6abQtaj5yPrj3zr7OZif5g5Ocnf8MKPcbfWXHJ+MWSVoDuCwFx1MDAxOFx1MDAxMIhEXCK5NKtcdTAwMDWySmJxgFuJMaGCKLLG6Nsgq06GSSGrotBcYlx1MDAxYVxiTTBPxc17ZGVcdTAwMWGBTklcbo++gPXTXHUwMDAxK7M4VsZYkWaYY7JcdTAwMDZbYKhcdTAwMDSSXHUwMDA0zSBNkHpcdTAwMTexfXBccnBcdIa1IFpcdTAwMTNAbClWQXXN5J6BqlRiRClcdTAwMTBcdTAwMTOQrTD5XHUwMDA0OS6fQY5ITYiiRGFcdTAwMDRcdTAwMWRWZlx1MDAwYsxzXHUwMDA1XHUwMDBlLVx1MDAwNVx1MDAwNZlQcOGdqP82QEs025rDUqmkQDrVXCKFtKXnI+2kXFyut4Tuzs7ZSa5zJ/NRUHY+XHUwMDFh0lxuXHUwMDBiQVx1MDAxNkooYVx1MDAwNGyK06UxLVJYxixcYqZKUc2ZXHUwMDE2S9NY4izBWGnFiElv2Vx1MDAxYZtcdTAwMWYpg+VKSE70XHUwMDE3zn5inP1KYP/5XHUwMDA0XHUwMDE2XHUwMDE42YarkMRRRTHdmMBePFx1MDAxZlaF9q/0abt9Ncx5R+eXh4Oznnf0i8GqIFx1MDAxNlx1MDAwNssxYVKAXHUwMDE5rq9cZihcdTAwMGJyXy4lXHUwMDEzxrjW+fxA+SuRlFx0wkXS91x1MDAwYlc/XHUwMDFkrn7lr4msPkr+XG5Rbmv+KoVimIJjblx1MDAwMlr/+UB7ddbTjqigUv2WX3eKl0EhXHUwMDFj1j9cdTAwMWHQXCJcdTAwMGIhwrlCXHUwMDEwWlx1MDAwNEdcdTAwMTjiSypcdTAwMDTFYKuQXHUwMDA1MCy0xIC0Oslccmf3NynSXHUwMDE0XopcdTAwMDBO6zVWP1JcdTAwMGVcdTAwMGJ5XHLEXHUwMDE0TL7A9lx1MDAxM4PtV1x1MDAxMvtcdTAwMDGSWIXWLz+AKyVcdTAwMDZiUvlOXG5aO8+H1qlqXHUwMDE3RqPgZKy7XHUwMDE5VKifOVxiXUS/ILRqZSkmXHUwMDE1gXDIzULsI2yFKFx0hTfEI0Q+8DKsmVx1MDAxZWQ4NFnB+ELWT4esX2lsXCKrj5LGQtzZmsZcIkFcdNFMblqGnT5cdTAwMWZq+Tg/zOUnd9l6mJ//sPG8XHUwMDE0XvKPXHUwMDA2tdySjFHwXFxcdTAwMDE6llSsXHUwMDFkJFx1MDAxMMyCzFUpTFx01iix3PtlWG1BZss4XHUwMDE3SH/kU1x1MDAwNFhqxFx1MDAxOFFJXfKFsp9cdTAwMGVlv/LXfz5/1YnAN2xuYWLi1aZcZnb6gmNcdTAwMDR2Lz8+XHUwMDE1Z4dheXrzQ1x1MDAwZa79aHp9/IvBqqn9oaCGslorsKC17FWAZVx1MDAxMVNcdTAwMGJwXHLBV7xcdTAwMGayvi59RZQjiFx1MDAwYvjrfNYnRtav/DWR1Tvnr1EwjTYh7Vx1MDAxM6uwIFxcwbTQm3a7pi/Y7crrXHUwMDA2ue61pvmbYdNt31RD1jve34Kzt653O1x1MDAxZVx1MDAwNv/IWsEqslx1MDAxMmFxJVx1MDAxMZT+XHUwMDE0oVTCZ7pLySzBXHUwMDAwkZlAJtBuxVVcdTAwMWOYf7twNfC03oCrRFnYwLIw4IjTO1RLXFylKUhfXHUwMDAwqZZSXHTosytDPZ9cdTAwMDQzeXN1J2vMP8xcdTAwMWReo7GUp59cdTAwMDZHXHUwMDFi/V5UXHTnRq1ErVxcPXS7YWe2Ylx1MDAxNrFrgCZOQTluM1x1MDAxOO2t3Ml0wmYvzlWCxqpcdTAwMDdFoed2lrej/iC568FILuQ2w8eS6Vx1MDAwZsNm2HM71a2juuOof1x1MDAxNoxcdTAwMTbsR8NxkJZAcPyge2xcdTAwMTH+pMuHXaC7+ejQ9pJcdTAwMTXqM1x1MDAwMWUr2rTzMn3B8uB5uduqdZo3PdRcdTAwMTmc/zjKVFx1MDAxYUV++5rkan3N7Tkun7jyi1xcXHUwMDFlc1x1MDAwYlx1MDAwMlx1MDAwZlx1MDAwMqeHXHUwMDE4oHliIXEyRei9z1OmON+aS0VDtzdcdTAwMWG4Q7DvJ/1+Y7ul73Nk6fQrUdjS959o85BUSa045Mk7z2Z+bjCA5CdcdTAwMWGPYpNx71x1MDAwMn/FXGJcdTAwMTfc7olANFx1MDAxNFx1MDAwYijkXHUwMDEw2MM4QJz6jVx1MDAwNtJ16mFcdTAwMWahQEjXXHI8XHUwMDEyUM091CCIe42grlx1MDAxYnW/4XuB9nFAXHUwMDE0pOBUIFx1MDAwZjeEW/e5QK4v655WXHJcdTAwMWPoIPXUyFxiMCNYkX6q3HpIUV5cdTAwMTfKXHR6wq1NRauF2lQzzZ7v1dptNIrXut+Wg86oWeR4cFPtfnCvltiCVFx1MDAwZVx1MDAxY1x1MDAxYpxXQDm/6tWYQlx1MDAxNilcdTAwMTEmXHUwMDA0qmVo9jdD+eZcdTAwMTKJXHUwMDExi2tuNlwisFx1MDAxNFDP4Vxy3kzNeXElpFx1MDAxNpBdXHUwMDAwXGJvWHyiSGJgeFeJ9Es7aypyY2RJrqFUXHUwMDAw1UGenypcdTAwMWF3XHUwMDA18nBcdTAwMTCYULktknswg2D4XHUwMDE2sfzxwD8rmG91+tTTXHUwMDE0605cdTAwMGbJO1x1MDAxM1x1MDAwMm88RTF7SVx1MDAwMn+duajJ7snFgJCTqNS+/qNcdTAwMTO9aqHkXHUwMDFkvZ4wi1BmzvSaXHUwMDA3TlhyKOIhliuQjdJcdTAwMWNKurdxeWkpxqFUhFx1MDAwMooyXHUwMDAwl1xy6827fZ5gTahOXHUwMDFmOPxy+Y0un4Xb8PHdPf7xuG/u8GT7sX+OkFnH3Xg+df58f7+cXCJ6xbLHXHUwMDE597zjn7T4hds9bn1sfzePU0lcdTAwMDIhVlx1MDAxMiZFan393t+FXHUwMDA1XHUwMDA2RTRcIlx1MDAxNGFJ3yzKU0glKDeHXjFPb/u9wOUl8Fx1MDAwZtD05fK7XFy+0lx1MDAwYlx1MDAwN4Pg/V3+8bhvXrCnXHUwMDBm9a37vGKESpDgXHUwMDA2n6+jzFx1MDAwYrZDZleHlbNcdTAwMGI1zZxFNkF+JvfHefSqZ33ez+vBXFzix3dcdTAwMDSUXpqlt1x1MDAxNeJVOiosqlxiU1pcblx1MDAwMjWbWOPr55bsXFxY5kFIheFlXHUwMDFliN+wWre9yUOKz5BEUuidh9FcdTAwMGb7t25TXHUwMDFj3t6ps5Jbre2Xfyg8f1x1MDAwM+dfjvjn8tPSXmqj5lx1MDAxY4+aXHUwMDEzv5znt9VOv6zdKze1aJAybNfsLuwt7/z1/Sm6nSrp3lx1MDAwNOfZWi9cdTAwMWONO/WIjv3zzPPoPlx1MDAxMsA6ZEl4g0r9NZD1jFVcdTAwMDTkN1x1MDAwMqVcdTAwMTSBXG7PbTDuu5KRwMO+pnXkIV2X2nNcdTAwMTFcdTAwMTYqoC7U4p7QXHLt+T5261xyXHUwMDFmvlKfu41cdTAwMDDCVyB9xTxcdTAwMDFcdTAwMDbiXHUwMDA1XHJuXHUwMDFlwOBcXOuGTFx1MDAxZPn4XHSrXGJbt145ouuXXHUwMDEzsMGCIII2LSNcdTAwMDDYvKCk6JTqpUuiaMlz+jn7JFx1MDAxN9q2vW0hYceewGvg5nV7XHUwMDAyXHUwMDFhKVx1MDAwYlx1MDAxMaYhdkOE5mgtyVx1MDAxMMgyj5JcYqGxVCve/Yrd1kBcdTAwMDeg/VxyK4NcZkpcdTAwMTckTI4hzF5aXHUwMDAy+8mmgLI0RZxhiSGTSCVcdTAwMTLL38Jg0G93hvFeIPNW7vqZd1IxJLRcdTAwMWGckUORrylmK2c2yM7u+1x1MDAxOFwiXHUwMDExRExcdTAwMDUuSLkwXHUwMDA3RdJcdTAwMDTWLWgnN1BPQ7RcdTAwMTVcdTAwMDKiXHUwMDE3k5xxsUbN/NCBXHUwMDAw15CAjZzsJFx1MDAwN5m0pFx1MDAxMmNBpeJcdTAwMDb+0uTMNq3iyGyfclx1MDAxM9V3b8RcdTAwMTJu1vhcYpZaUlx1MDAwNtKiK6K2kFx1MDAxNlRQXHUwMDA2I1wis1ZO/pmNWJbacnl0jlx1MDAxMCvCXHUwMDE5kVx1MDAxYn6SXGJg91x1MDAwNbsy3uCketNGTv7HTdA5+SMqX2TL09fB7vttxWrIm1x1MDAxNJaSIMHMIcG1tVx1MDAxY6EtwFx0TsFcdTAwMGK45qmf2XhFbfdkhseUxVxmcIPZcSWVTilsib0kYf2hnoOIr4n6MCndm6Btup5cdTAwMTMrV58o4OrjRiNdob1P+bY+6s8q3rbmU4htXbDhUO5SLDct0NbRwfPdmpT2z1x1MDAwZustNT3Iilx1MDAxZof1Rudmnjv56G6tKLZcdTAwMTRcdTAwMDCyXHUwMDEyMl41SaRcdTAwMTS7NVx1MDAwN5hcdTAwMTdcdTAwMTCBkEBQ4jK1xlfi1lxuXHUwMDEyai1el02lnpJZujB75MJYM+MgVH1qXHUwMDFm/uRcdTAwMTnTSmu2s7l4YXu10p6YXHUwMDA3j1KvnWfPVoejXHUwMDE250RiKiRk+IgjbFx1MDAwZSC/aVay/fFcdTAwMDax/SAu5E3SXHUwMDFjXHUwMDEy21xmXy+oXHUwMDA2e3Y5P5w1VTdTzOJcdTAwMWasf3z6ozn86PhcdTAwMDXALiymlfldXHUwMDE20NT6U7lQXHJcdTAwMTLILFx1MDAxNTLZXHUwMDFiw1tcdTAwMTef/iZ+rdpZwkNSXHJCesQgv1VcdTAwMDJrc1x1MDAxMjj1XHUwMDEzN1x1MDAwZntMJp3BYGtf6PbLolx1MDAxYlaQn0BRRIh5TFx1MDAxMVx1MDAxM53ujddNYFx1MDAxNzUoXHUwMDBmJWOQTEOWXHUwMDBif1x1MDAxMiU/JGVej0xqXHUwMDE3PbnKXHUwMDFkJU9R21lcdTAwMWVKaSnjUaZsjc/irszVUlx1MDAxYzxOKlxmTEusdlx1MDAxN69/XHUwMDBiN1x1MDAxNyuQXHUwMDFigJOL7eWcWa+HingzbmafXHUwMDBmm0+vwH7MXHUwMDE1eyws82MrUK0pczh69Tkwic1PXHUwMDE5YCUg/HGWXHUwMDE20M/cp6MwXGLYoJLmh2lcdTAwMDTBelx1MDAwM2pcbmBTQNGGKGKIarbpbJ0pyenOXHUwMDA3bn9cdTAwMWVqJmvlXHUwMDBm5vfgKn8lcvhYYJpi+f7Xmlx1MDAwYs/Ya4pLRy9ebN9HlnFiUFx1MDAwMUbcPEmpU8i213RcdTAwMDdmOo+k8JNhey9cdTAwMWGGXHUwMDBic35cdTAwMWLwXHUwMDA2uKVcXJpcclVMzFx1MDAwMVOV/M6yeVx1MDAwMUBcIiVcdTAwMDRXjGLIJ3ZcdTAwMDJcdTAwMWFRluZcXFCMXHUwMDE15mZHelx1MDAwNbxcdTAwMWZZ9s9CPPbUqWLgXHUwMDA36rhNPzpcdTAwMDCI95J9gyc3hz4k5Jkz/Fx1MDAxNlx1MDAxMkyac8VcdTAwMTBcdTAwMDPR2i6lXHUwMDE0lpacalxy6lx1MDAxMFxibf/5lr+DeURYXGJcdTAwMTOoJlx1MDAwMHsxUlhvOJsgpGVSXHUwMDA3XHUwMDA0dkMgpeWPni3AxlxiXHUwMDExZPzvlyl+WMz728iGLGFcdTAwMGV6ME4g8Vx1MDAwMW9VqVx1MDAxNfitwPZumepbQ1x1MDAxZeFcdTAwMTYnRFJF4kdONV3Zf9g35/NcdTAwMTikSZhxJoWEXHUwMDEwvZPgVlx1MDAwM49cdD6y7W2o99v9XGJ77mBQicB4lrreu1x1MDAwYoPJwXaf++1eUfGGcGK7b3+2PDHGvW7YXHKq6dMkv4/umv8z7aa3XGLe+cA7OKB7flY0g5qP/15h63/r7ihcdTAwMTDs++mxQ65nXHUwMDA3rH45XHUwMDFke3NcdTAwMTS6x2fIy/XvitSn/oxTe8bvvK53Z7cyXHUwMDEzO6vnftdcdTAwMGJcdTAwMGLH/uD6+Kx/WilMry9RWDi67biXft/PodC+vIhcbuFcdTAwMDFxLy9ouatcdTAwMTm0mVx1MDAxNHKZpt0qm7/wtDWd1K7O+oWj60H9aKJcdTAwMGJdflfvnlx1MDAwM01cdTAwMDd5XT28rqKwRi9mXvdi7Oedu/qRnlx1MDAwMb25f3xy55LzqH7UXHUwMDE5X186t1x1MDAxZYxcdTAwMDXtcb1bTvpW8Mi95Fx1MDAxZLerXHUwMDA39dbG+9S9PEOu4bPCMNBtn1ZOXHUwMDFju1pcdTAwMDDeTlrFXG5jdrXZtLNoWmzVomLLnjtcdTAwMTU0L7byxJ6Za5mJ07ZRsdVGTpiZlipsXHUwMDFlz2tcdTAwMDafs1xmlSqZeSGXp9COOVx1MDAxNzV495CD0NRcdTAwMGUzM7trj0u5PItlUWGkaPrOz6EvmzotO4JrXHUwMDEzO3eds6vtsZ07R0CHw/gzJ1x1MDAwYn0rS/rxZ2fGJqXcxSW8UyfnP/BPitC3lHOiUlx1MDAwNVx1MDAwMY9lM+akkGXEztkwl+bEXHUwMDBlXHUwMDE5L+XKXHUwMDExvCNcdTAwMTjD8GH6j4rVwrhkaFx1MDAwME+lc3tcbjwxXHUwMDA35rS4n2/a8X0vfrdcdTAwMTfv95/9ZCxiT2BOMFb5fixcdTAwMDR9mtjQdnJcdTAwMTl4z4+deZlVq3bznu+Wnc2MnVZcdTAwMDYlvNWaq7zdjsx1kFx1MDAxZsje5rV5XHUwMDFl5lx1MDAxN7fHwN9cZuQ7cSrmXoGBPkBPNbr83kagXHUwMDBiL1x1MDAxZbM2z1x1MDAwME+1iZNcdTAwMDX95lxu8LnNoFx1MDAxZPQvQ3+jV1x1MDAwZpWOXGa/XHUwMDA1avrY8/y0noOxqu1Y16X8Qod+6yRywDbqsX1cdTAwMDCPbVx1MDAwNPp0RrEt5Vxu4Fx1MDAwN1x1MDAwYntcdTAwMDWbavlXJ7PrS47KRI/qtFx1MDAxMFx1MDAxNudMXHUwMDE1KfjanP0ntXsyXGZWoiRX2jxqnk5cdTAwMDPf/mzLa1Ds/Vx1MDAwZdx8MFx1MDAxNMugkvHIXFyZXHUwMDE1Wkx5R4fIzVx1MDAxZXTdy+lok9ZcdTAwMGJHZV1oI1x1MDAwZVZuPIZ5VW9Bp3pcdTAwMGWWc4vAm1xiWFx1MDAwZfNzeVx1MDAwMnSxTctTe15ognfDO3jePNN0qvDXukAwNlxcPyR2NY/tXlx1MDAxZeiUjVfxQq458bNcYlx1MDAwMzJcdTAwMTCnl49cdTAwMWPwTqeaj+yqPYV7XGLuXHUwMDAxwjTh2lx1MDAxOYL21HhO6Vx1MDAxOFBgwcO0uOAp/l6s3i7ahOi+TVxyrp3PXHJccuArMnxcdTAwMTWBLvxN4Dr81TDcm1x1MDAwMWIy+6KGwGOn8Fx1MDAxOVx1MDAxOS9cdTAwMDRkYPZxXHUwMDE5+EKGL1xmiGB4NPNcdTAwMDI6Z+ieNoK5XHUwMDAzT/F4U6fajMBcdTAwMTOBnzx8N3PJx2hsXHUwMDFiZKCGn/zU3Iv5qVx1MDAxYX2cXHUwMDE4flx1MDAwMT0yc5uaOZ83gXdcdTAwMDTIMjX8O7k2tOlAmzL0s3Esi1lcdTAwMDbZx0Z+zVx1MDAxOLmdK9BlLo+8asG0mVx1MDAxNXI1uHdO/FxcXHUwMDEzZFueXHUwMDAxf1x1MDAxM4MuMJfpXHUwMDAyaVx1MDAwZoD3XGYgRX7q59rQ52zqXHUwMDE4nWYzXHUwMDFj5jqP20O0sK/i9tF9e2zkZmhcdTAwMDIvQLNcdTAwMDYyPCdeXHUwMDE1ctRZXHUwMDA25JBcdTAwMDc5QFx1MDAxNKheXHUwMDE4+Vx1MDAxOXlcdTAwMDKfaF66MnOAec2vzVx1MDAxY6Av2ErWzFx1MDAwZk1LVyCfXFxcdTAwMTP6tOFcdTAwMGbQrGov5JKD71x1MDAwYrlcdTAwMDCCw/eekVuGXHUwMDE2q5BcdTAwMTiDXFycqm3GnS7sMFx1MDAwM1HDXHUwMDAx/vLQP2/mulx1MDAxOL9cdTAwMDe8x+M6MFx1MDAwN+AxzCzGPC5DXHUwMDE0XHUwMDAyXV2VkZkryM7wXHTyrFx1MDAxOT6QV0FcdTAwMDaZ5yXDR6tccnbrXHUwMDE4PkzkgjaxzUFkK0xjPeTKTSfmrVxmbcz88tgxY1/F14ycJv6CTlx1MDAwNHRITD/WuYlIXtPJXHUwMDFkoDg6zS/QQs+3KNZDtVx1MDAwM7Q946tmfkan88W8MrOFTkz/k3tcdTAwMWRcdTAwMWGZgJyNXHUwMDBlY1vLXHUwMDE4W4tiPzS6i9vlwc5cdTAwMGKxXHUwMDFkmDmDnU0haoDfluF6XHUwMDFlfDfWXHUwMDBih3fjXHUwMDE32NhzzHtcYvKqnlx1MDAxOT3DOLbR8Vxm5EBcdTAwMTZ2XFw2tlx1MDAxNc/PqZrM6DCWXHUwMDEzRHtyL5toIZtzuP4gL5BcdTAwMDPMeUFcdTAwMDdcdTAwMDGdWkzfzj5kXHUwMDA1sYxBL1x1MDAxOaOXOFsw+op94VxuaIPfL+ZnZFx1MDAxNut8XHUwMDEy68LIxvhlrHOQK/hcdTAwMWbMgznHxmczxlx1MDAxN40938tcdTAwMTAt2lUzsY3d293cXHUwMDAz3Vx1MDAwMVx1MDAxNoBOXGaOXHUwMDE4PVx1MDAxOFx1MDAxYuyghe1eXHUwMDE4nDO8X0Kmw1x1MDAxZWwk9lx1MDAxMYNLXHUwMDBiW03bXGJesVx1MDAxMfBrp+XFOLAml9lGufRScsnGcpkv7Fx1MDAxNcbsPZZLKfsgl8K9XFwyfKNcXLKFu9PW5M6j173T5n+eiOLmuFWqroorxLNcdTAwMDDquuDucatl8fPXb3/9PyCVabQifQ==",(0,t.yg)("defs",{parentName:"svg"},(0,t.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m94.574 57.37-2.612 8.11 13.45 7.565 5.932-1.63-2.298-6.92-14.61-7.301"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M95.44 57.232c-1.592 3.54-2.49 6.148-4.29 8.922m4.29-8.922c-1.365 2.861-2.671 5.784-4.29 8.922m0 0c3.447 1.114 6.534 2.887 13.383 6.435m-13.384-6.435c4.263 1.772 9.015 4.512 13.384 6.435m0 0c2.512-.679 4.501-1.886 6.606-2.316m-6.606 2.316c2.037-.707 3.797-1.414 6.606-2.316m0 0c-.783-1.741-1.169-3.247-2.316-6.606m2.316 6.606c-.8-2.56-1.714-4.93-2.316-6.606m0 0c-4.927-2.769-9.675-5.495-13.384-6.435m13.384 6.435c-4.334-1.718-8.358-4.218-13.384-6.435m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m112.946 64.76 2.022 7.495-7.29 2.998 17.872 8.27 2.758-9.358-16.374-8.062"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M112.134 65.434c1.163 2.357 1.607 5.011 1.954 6.365m-1.954-6.365c.514 1.423.816 2.778 1.954 6.365m0 0c-2.181.66-4.292 1.52-6.606 2.317m6.606-2.317a74.458 74.458 0 0 1-6.606 2.317m0 0c5.185 1.494 10.205 4.207 17.845 8.58m-17.845-8.58c3.65 1.71 7.775 3.26 17.845 8.58m0 0c.767-2.128 2.253-3.833 3.983-8.493m-3.983 8.492c.89-1.78 1.913-3.563 3.983-8.492m0 0c-3.173-2.747-8.579-4.08-17.176-8.77m17.176 8.77c-6.406-3.569-13.93-7.12-17.176-8.77m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m39.125 71.601 1.416 9.08 14.375-4.17 3.52-5.241-6.24-3.014-13.307 2.23"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M38.062 71.197c.52 3.382 1.708 6.553 2.298 9.63m-2.298-9.63c.243 1.793 1.087 3.822 2.298 9.63m0 0c3.78-1.478 7.598-1.721 14.444-3.447M40.36 80.827c4.558-.76 8.71-1.801 14.444-3.447m0 0c1.008-1.207 1.707-2.885 3.666-5.964m-3.666 5.964c1.245-2.024 2.524-4.16 3.666-5.964m0 0c-1.714-.763-3.56-2.338-5.964-3.666m5.964 3.666a71.803 71.803 0 0 1-5.964-3.666m0 0c-3.562.367-6.671 1.51-14.444 3.447m14.444-3.447c-4.478.75-9.46 2.36-14.444 3.447m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m56.283 66.917 5.464 2.994-3.812 6.687 18.983-3.944-1.126-10.32-19.718 5.517"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M56.104 67.073c2.185 1.401 3.777 2.645 5.532 3.707m-5.532-3.707c2.145 1.277 3.99 2.8 5.532 3.707m0 0c-.93 1.877-2.359 3.688-3.666 5.964m3.666-5.964c-1.288 2.23-2.646 4.25-3.666 5.964m0 0c5.823-2.397 11.083-2.367 19.26-4.596m-19.26 4.596c5.884-1.836 11.338-2.377 19.26-4.596m0 0c-.865-2.888-1.344-5.241-2.266-9.103m2.265 9.103c-.74-2.198-1.344-4.727-2.265-9.103m0 0c-5.71 1.105-9.857 1.386-18.86 4.028m18.86-4.028c-5.993 1.338-11.238 2.62-18.86 4.028m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m75.877 77.58-.882 8.307 14.068.836 6.433-5.054-5.018-4.663-16.099-.38"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M75.119 76.847c.22 3.87-.257 6.45-.026 9.9m.026-9.9c-.108 2.95-.205 5.68-.026 9.9m0 0c4.312-.509 10.11.326 14.85.038m-14.85-.038c5.15.273 9.89.155 14.85.038m0 0c1.623-1.266 3.368-3.011 4.963-4.937m-4.963 4.937c1.594-1.356 2.758-3.043 4.963-4.937m0 0c-1.646-1.784-4-3.7-4.938-4.963m4.938 4.963c-.847-1.092-1.985-2.095-4.938-4.963m0 0c-5.28.117-9.73.455-14.85-.038m14.85.038c-3.46.311-6.6.013-14.85-.038m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m93.626 76.197 3.725 5.7-3.502 4.81 19.729.361-1.315-9.723h-19.18"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M93.723 77.057c1.536 1.544 3.302 3.329 4.508 4.902m-4.508-4.902c1.436 1.584 3.132 3.458 4.508 4.902m0 0c-1.635 1.846-3.318 3.052-4.963 4.937m4.963-4.937c-1.283 1.287-2.436 2.444-4.963 4.937m0 0c5.25.354 9.5.185 19.8.051m-19.8-.05c4.952-.508 11.07-.172 19.8.05m0 0c-.384-2.341-.497-5.171-.066-9.38m.066 9.38c-.002-3.25-.023-6.42-.066-9.38m0 0c-7.03.382-14.677-1.228-19.279-.51m19.28.51c-7.15-.179-14.78-.198-19.28-.51m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m57.945 81.38 4.176 8.758 14.433-8.267.523-6.394-6.242-1.36L57.32 81.72"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M58.024 81.473c1.464 2.585 3.015 5.433 5.08 8.497m-5.08-8.497c1.696 3.227 3.636 6.471 5.08 8.497m0 0c3-1.199 5.257-2.548 12.746-7.62m-12.746 7.62c4.956-2.916 10.205-5.751 12.746-7.62m0 0c.165-1.205.824-2.753 1.709-6.788M75.85 82.35c.48-1.731.89-3.246 1.709-6.788m0 0c-1.577-.747-3.452-1.292-6.789-1.709m6.789 1.709c-1.306-.373-2.87-.65-6.789-1.709m0 0c-3.418 2.195-5.889 4.103-12.746 7.62m12.746-7.62c-4.755 2.668-9.71 5.817-12.746 7.62m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m73.496 71.329 7.083 3.525-2.055 5.586 16.906-9.78-4.72-8.852-17.106 9.76"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M74.077 72.066c2.088.51 4.628 1.369 6.388 1.878m-6.388-1.878c1.93.5 3.977 1.059 6.388 1.878m0 0c-.595 2.278-.957 5.512-1.708 6.788m1.708-6.788c-.37 1.7-.782 3.135-1.708 6.788m0 0c6.621-4.203 13.176-8.343 16.994-10.16m-16.994 10.16c4.511-2.918 9.47-5.907 16.994-10.16m0 0c-1.016-1.35-2.626-3.672-4.89-8.004m4.89 8.004c-1.571-2.882-3.341-5.901-4.89-8.004m0 0c-4.813 2.842-9.082 6.011-16.784 9.498m16.784-9.498c-3.416 2.217-6.672 3.942-16.784 9.498m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("text",d({parentName:"svg"},{y:"24.528",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(21.45 171.21)"}),"Packages"),(0,t.yg)("use",d({parentName:"svg"},{width:"151",height:"151",href:"#image-6e6f84e34571c11e053dff09b3c1d00e67aaec2e395c0f205cfeb9fbdfdce9d1e28594360c1f6abd560ad7bc98f1e9e8",transform:"translate(10 20.21)"})),(0,t.yg)("text",d({parentName:"svg"},{x:"21.298",y:"9.425",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"10.759",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(66.31 10)"}),"Pipelines"),(0,t.yg)("text",d({parentName:"svg"},{x:"23.923",y:"9.425",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"10.759",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(19.098 20.428)"}),"Contexts"),(0,t.yg)("text",d({parentName:"svg"},{x:"21.169",y:"9.425",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"10.759",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(109.588 23.304)"}),"Snippets"),(0,t.yg)("use",d({parentName:"svg"},{width:"56",height:"56",href:"#image-0dfe8882744af45da742ec1d93b0c09b79ca0168e3a396c69f9cdd1abfd96c3d5afe247e7d84c6323cef523245599f75",transform:"translate(341.075 132.945)"})),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e9ecef",d:"M302.888 56.91s0 0 0 0m0 0s0 0 0 0m5.38 6c1.54-2.54 3.94-5.4 5.25-6.03m-5.25 6.03c2.03-2.21 3.85-4.6 5.25-6.03m-.52 12.79c4.11-2.89 5.99-6.23 11.15-12.83m-11.15 12.83c4.23-4.61 7.27-8.79 11.15-12.83m-5.77 18.83c5.49-4.73 11.21-12 16.4-18.86m-16.4 18.86c2.87-4.99 6.34-7.83 16.4-18.86m-27.42 43.74c8.85-11.83 18.38-24.17 38.05-43.78m-38.05 43.78c11.2-14.2 24.25-26.68 38.05-43.78m-27.42 43.74c11.22-14.41 25.57-29.52 38.05-43.77m-38.05 43.77c9.96-11.65 19.51-21.17 38.05-43.77m-27.42 43.74c9.91-11.16 18.32-20.53 38.05-43.78m-38.05 43.78c7.41-10.08 15.8-19.73 38.05-43.78m-27.42 43.74c7.74-11.26 18-22.23 38.05-43.77m-38.05 43.77c10.35-11.08 20.54-22.24 38.05-43.77m-27.42 43.74c12.56-14.65 23.77-27.93 38.05-43.78m-38.05 43.78c10.79-11.94 22.25-24.53 38.05-43.78m-27.42 43.74c10.68-9 19.62-21.87 37.39-43.02m-37.39 43.02c15.18-16.37 29.34-32.1 37.39-43.02m-26.76 42.99c12.39-11.67 20.94-26.02 37.39-43.02m-37.39 43.02c15.72-16.52 29.26-34.17 37.39-43.02m-26.76 42.98c15.64-15.55 28.58-35.86 37.39-43.01m-37.39 43.01c11.85-13.29 22.4-25.65 37.39-43.01m-26.76 42.98c8.79-8.65 17.85-18.6 36.74-42.26m-36.74 42.26c10.65-11.42 20.68-23.96 36.74-42.26m-26.11 42.22c10.01-11.47 16.05-18.34 31.49-36.22m-31.49 36.22c6.69-7.92 14.94-16.72 31.49-36.22m-20.86 36.19c11.82-11.74 18.3-22.81 26.24-30.19m-26.24 30.19c8.56-10.81 18.47-20.48 26.24-30.19m-12.33 26.38c4.55-7.64 12.23-14.48 17.71-20.37m-17.71 20.37c3.34-3.68 6.87-8.76 17.71-20.37"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M302.888 56.91c3.74 4.28 8.64 7.17 16.79 20m-16.79-20c4.7 5.21 10.27 11.41 16.79 20m0 0c-6.95 4.02-11.78 9.72-17.86 18.93m17.86-18.93c-3.73 4.43-7.49 8.75-17.86 18.93m0 0c38.11-.73 78.89-3.18 124.81-.85m-124.81.85c40.76-.01 81.98 1.13 124.81-.85m0 0c6.6-8.2 16.25-15.79 19-18.69m-19 18.69c4.37-3.66 8.91-8.36 19-18.69m0 0c-6.9-6.63-11.67-13.46-17.3-19.29m17.3 19.29c-6.11-7.99-14.03-15.17-17.3-19.29m0 0c-28.32.33-53.17-1.75-125.44-.1m125.44.1c-42.8.91-84.34.65-125.44-.1m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("text",d({parentName:"svg"},{x:"24.2",y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(351.68 66.28)"}),"buffer"),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e9ecef",strokeWidth:".5",d:"M226.736 55.927s0 0 0 0m0 0s0 0 0 0m-.26 6.4c1.57-2.31 2.74-4.16 5.25-6.04m-5.25 6.04c1.57-1.48 2.59-3.36 5.25-6.04m-4.86 11.68c4.1-4.21 6.49-6.5 10.5-12.07m-10.5 12.07c3.75-3 5.85-7.17 10.5-12.07m-10.76 18.47c1.84-3.86 7.12-6.28 15.75-18.11m-15.75 18.11c5.53-5.59 8.56-10.9 15.75-18.11m-15.35 23.75c3.42-5.64 10.66-12.65 20.99-24.15m-20.99 24.15c5.23-6.31 10.84-11.37 20.99-24.15m-21.26 30.55c11.13-11.69 18.75-23.3 26.25-30.19m-26.25 30.19c7.03-7.45 14.91-17.25 26.25-30.19m-26.51 36.59c13.72-12.93 26.43-28.71 32.15-36.98m-32.15 36.98c7.47-7.51 13.23-16.86 32.15-36.98m-29.78 40.36c8.75-9.09 16.69-21.48 34.77-40m-34.77 40c9.43-12.1 20.91-24.22 34.77-40m-29.79 40.36c13.99-15.66 30.07-32.24 35.43-40.76m-35.43 40.76c9.28-10.09 17.39-20.78 35.43-40.76m-29.78 40.36c11.41-11.96 21.48-26.85 34.77-40m-34.77 40c13.4-15.55 25.56-29.89 34.77-40m-29.79 40.36c10.2-14.39 21.28-26.46 35.43-40.75m-35.43 40.75c8.49-10.02 15.43-18.74 35.43-40.75m-29.78 40.36c9.57-10.57 15.27-20.36 34.77-40m-34.77 40c12.62-13.23 22.99-27.16 34.77-40m-29.79 40.36c12.13-11.71 18.43-23.63 33.46-38.49m-33.46 38.49c10.38-10.26 19.71-21.36 33.46-38.49m-27.81 38.09c9.19-11.35 17.54-19.93 30.83-35.47m-30.83 35.47c9.98-10.54 20.25-21.91 30.83-35.47m-25.85 35.83c9.96-11.32 20.74-25.33 28.87-33.2m-28.87 33.2c6.19-7 13.41-15.4 28.87-33.2m-23.88 33.56c8.34-8.51 14.51-15.59 26.24-30.19m-26.24 30.19c10.33-11.56 21.3-23.64 26.24-30.19m-20.6 29.8c5.99-9.5 14.57-15.14 23.62-27.17m-23.62 27.17c6.16-8.49 12.75-16.13 23.62-27.17m-18.63 27.53c5.7-5.66 11.75-14.81 21.65-24.91m-21.65 24.91c5.42-5.15 9.46-11.17 21.65-24.91m-16.01 24.51c4.83-5.61 7.91-9.57 19.03-21.88m-19.03 21.88c8.28-8.39 15.27-15.95 19.03-21.88"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#868e96",d:"M226.736 55.927c-.52 11.78-1.52 24.42 0 40m0-40c-.29 13.05-.63 24.73 0 40m0 0c16.95-.16 36.27 1.42 60 0m-60 0c19.25-.37 38.91-.57 60 0m0 0c7.63-8.72 15.07-14.84 20-20m-20 20c7.27-7.87 16.75-16.01 20-20m0 0c-4.29-4.5-7.84-7.8-20-20m20 20c-8.02-7.31-13.62-13.86-20-20m0 0c-16.31-.81-29.86-.13-60 0m60 0c-15.88.16-32.17-.76-60 0m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e9ecef",strokeWidth:".5",d:"M441.362 56.773s0 0 0 0m0 0s0 0 0 0m3.02 2.62c.56-.99 1.34-1.45 1.97-2.26m-1.97 2.26c.56-.78 1.21-1.57 1.97-2.26m.39 5.64c2-1.88 2.86-4.13 5.25-6.03m-5.25 6.03c1.67-2.26 3.06-3.89 5.25-6.03m-2.23 8.66c3.21-2.46 5.75-7.14 7.22-8.3m-7.22 8.3c2.23-3.2 5.12-6.24 7.22-8.3m-4.86 11.68c3.89-4.54 6.67-9.27 9.84-11.32m-9.84 11.32c3.3-3.04 6.46-6.97 9.84-11.32m-6.82 13.94c1.45-3.62 5.98-5.97 12.47-14.34m-12.47 14.34c3.69-4.33 6.7-7 12.47-14.34m-10.11 17.72c4.47-3.92 6.17-7.35 15.09-17.36m-15.09 17.36c3.94-5.96 9.36-11.34 15.09-17.36m-29.12 39.61c11.44-15.36 24.98-30.61 34.11-39.25m-34.11 39.25c13.13-14.87 25.78-28.36 34.11-39.25m-28.47 38.85c11.15-10.74 17.52-19.76 34.11-39.24m-34.11 39.24c6.14-8.07 13.92-14.9 34.11-39.24m-29.12 39.6c9.67-13.04 23.71-24.29 34.11-39.24m-34.11 39.24c8.79-10.4 19.53-21.31 34.11-39.24m-28.47 38.85c6.51-8.82 15.32-17.58 33.46-38.49m-33.46 38.49c7.24-9.23 15.38-19.18 33.46-38.49m-28.47 38.85c9.65-14.19 22.96-26 33.46-38.49m-33.46 38.49c11.64-14.46 25.42-30.26 33.46-38.49m-27.82 38.09c8.28-12.51 20.57-24.36 33.46-38.49m-33.46 38.49c11.26-12.17 21.48-24.74 33.46-38.49m-28.47 38.85c14.3-15.53 26.81-30.23 33.46-38.49m-33.46 38.49c10.35-10.84 19.97-22.77 33.46-38.49m-27.82 38.1c8.46-11.33 18.75-22.68 32.8-37.74m-32.8 37.74c10.4-11.9 18.86-21.89 32.8-37.74m-27.81 38.1c11.6-12.33 23.03-23.48 33.46-38.49m-33.46 38.49c9.96-10.62 18.38-21.24 33.46-38.49m-27.82 38.09c10.98-10.47 18.23-19.06 27.55-31.69m-27.55 31.69c8.5-10.58 17.63-19.52 27.55-31.69m-22.56 32.05c5.96-8.14 12.23-14.51 22.96-26.41m-22.96 26.41c5.99-7.33 12.87-14.85 22.96-26.41m-17.32 26.02c2.69-3.49 9.16-10.21 17.06-19.62m-17.06 19.62c6.5-6.18 12.46-12.7 17.06-19.62m-12.07 19.98c4.37-4.74 6.68-7.31 12.46-14.34m-12.46 14.34c4.78-4 8.77-9.64 12.46-14.34m-6.82 13.94c1.43-2.02 3.28-3.75 6.56-7.54m-6.56 7.54c1.74-1.85 3.18-4.24 6.56-7.54m-1.57 7.9c.59-.81 1.59-1.35 1.96-2.26m-1.96 2.26c.36-.46.85-.86 1.96-2.26"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#868e96",d:"M441.362 56.773c2.4 6.65 8.77 9.12 18.26 19.74m-18.26-19.74c3.21 4.48 7.46 9.06 18.26 19.74m0 0c-3.85 6.58-10.33 12.07-20 20m20-20c-7.87 7.89-15.36 16.72-20 20m0 0c26.01-.45 50.71.62 80 0m-80 0c16.95-.17 31.78-.19 80 0m0 0c1.51-12.74.79-28.68-.38-37.89m.38 37.89c.94-9.64-.25-20.01-.38-37.89m0 0c-20.77-.89-45.88-1.29-77.88-1.85m77.88 1.85c-21.01-.7-41.6-.34-77.88-1.85m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",strokeWidth:"2",d:"M311.12 106.865c-.23 6.51-6.18 28.04-1.36 39.09 4.83 11.04 25.26 22.65 30.32 27.18m-28.96-66.27c-.23 6.51-6.18 28.04-1.36 39.09 4.83 11.04 25.26 22.65 30.32 27.18"})),(0,t.yg)("path",d({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m340.08 173.135-14.71-2.95 7.51-10.21 7.2 13.16"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",strokeWidth:"2",d:"M340.08 173.135c-4.86-.97-9.72-1.95-14.71-2.95m14.71 2.95c-5.18-1.04-10.36-2.07-14.71-2.95m0 0c2.51-3.42 5.03-6.84 7.51-10.21m-7.51 10.21c2.03-2.76 4.07-5.53 7.51-10.21m0 0c1.78 3.26 3.57 6.53 7.2 13.16m-7.2-13.16c2.51 4.59 5.02 9.18 7.2 13.16m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",strokeWidth:"2",d:"M394.928 173.538c4.25-3.97 21.19-12.64 25.52-23.84 4.34-11.21.41-36.15.49-43.38m-26.01 67.22c4.25-3.97 21.19-12.64 25.52-23.84 4.34-11.21.41-36.15.49-43.38"})),(0,t.yg)("path",d({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m420.938 106.318 7.21 13.15-12.65.83 5.44-13.98"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",strokeWidth:"2",d:"M420.938 106.318c2.62 4.78 5.24 9.56 7.21 13.15m-7.21-13.15c2.28 4.15 4.55 8.31 7.21 13.15m0 0c-3.02.2-6.03.4-12.65.83m12.65-.83c-4.24.28-8.48.55-12.65.83m0 0c2.14-5.5 4.28-10.99 5.44-13.98m-5.44 13.98c1.23-3.18 2.47-6.35 5.44-13.98m0 0s0 0 0 0m0 0s0 0 0 0"})))))))}y.isMDXComponent=!0}}]);