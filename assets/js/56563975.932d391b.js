"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33371],{15680:(e,c,m)=>{m.d(c,{xA:()=>i,yg:()=>p});var t=m(96540);function n(e,c,m){return c in e?Object.defineProperty(e,c,{value:m,enumerable:!0,configurable:!0,writable:!0}):e[c]=m,e}function r(e,c){var m=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),m.push.apply(m,t)}return m}function a(e){for(var c=1;c<arguments.length;c++){var m=null!=arguments[c]?arguments[c]:{};c%2?r(Object(m),!0).forEach((function(c){n(e,c,m[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(m)):r(Object(m)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(m,c))}))}return e}function l(e,c){if(null==e)return{};var m,t,n=function(e,c){if(null==e)return{};var m,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)m=r[t],c.indexOf(m)>=0||(n[m]=e[m]);return n}(e,c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)m=r[t],c.indexOf(m)>=0||Object.prototype.propertyIsEnumerable.call(e,m)&&(n[m]=e[m])}return n}var o=t.createContext({}),M=function(e){var c=t.useContext(o),m=c;return e&&(m="function"==typeof e?e(c):a(a({},c),e)),m},i=function(e){var c=M(e.components);return t.createElement(o.Provider,{value:c},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var c=e.children;return t.createElement(t.Fragment,{},c)}},w=t.forwardRef((function(e,c){var m=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=M(m),w=n,p=d["".concat(o,".").concat(w)]||d[w]||s[w]||r;return m?t.createElement(p,a(a({ref:c},i),{},{components:m})):t.createElement(p,a({ref:c},i))}));function p(e,c){var m=arguments,n=c&&c.mdxType;if("string"==typeof e||n){var r=m.length,a=new Array(r);a[0]=w;var l={};for(var o in c)hasOwnProperty.call(c,o)&&(l[o]=c[o]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var M=2;M<r;M++)a[M]=m[M];return t.createElement.apply(null,a)}return t.createElement.apply(null,m)}w.displayName="MDXCreateElement"},6427:(e,c,m)=>{m.r(c),m.d(c,{assets:()=>x,contentTitle:()=>D,default:()=>X,frontMatter:()=>p,metadata:()=>g,toc:()=>A});var t=m(15680),n=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,i=(e,c,m)=>c in e?n(e,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[c]=m,d=(e,c)=>{for(var m in c||(c={}))o.call(c,m)&&i(e,m,c[m]);if(l)for(var m of l(c))M.call(c,m)&&i(e,m,c[m]);return e},s=(e,c)=>r(e,a(c)),w=(e,c)=>{var m={};for(var t in e)o.call(e,t)&&c.indexOf(t)<0&&(m[t]=e[t]);if(null!=e&&l)for(var t of l(e))c.indexOf(t)<0&&M.call(e,t)&&(m[t]=e[t]);return m};const p={title:"Tenzir v4.11",authors:["dominiklohmann"],date:new Date("2024-03-22T00:00:00.000Z"),tags:["release","contexts","every","set","email","sqs"],comments:!0},D=void 0,g={permalink:"/blog/tenzir-v4.11",source:"@site/blog/tenzir-v4.11/index.md",title:"Tenzir v4.11",description:"Our latest v4.11",date:"2024-03-22T00:00:00.000Z",formattedDate:"March 22, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"contexts",permalink:"/blog/tags/contexts"},{label:"every",permalink:"/blog/tags/every"},{label:"set",permalink:"/blog/tags/set"},{label:"email",permalink:"/blog/tags/email"},{label:"sqs",permalink:"/blog/tags/sqs"}],readingTime:5.07,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Tenzir v4.11",authors:["dominiklohmann"],date:"2024-03-22T00:00:00.000Z",tags:["release","contexts","every","set","email","sqs"],comments:!0},prevItem:{title:"Reduce Cost and Noise with Deduplication",permalink:"/blog/reduce-cost-and-noise-with-deduplication"},nextItem:{title:"Tenzir v4.10",permalink:"/blog/tenzir-v4.10"}},x={authorsImageUrls:[void 0]},A=[],u={toc:A},f="wrapper";function X(e){var c=e,{components:m}=c,n=w(c,["components"]);return(0,t.yg)(f,s(d(d({},u),n),{components:m,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Our latest ",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/tag/v4.11.1"}),"v4.11"),"\nrelease delivers powerful automation features, such as scheduling pipelines in a\ngiven time interval and sending pipeline data as emails."),(0,t.yg)("p",null,(0,t.yg)("figure",d({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,t.yg)("svg",d({parentName:"figure"},{viewBox:"0 0 846.173 206.998",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1ba1Pbulx1MDAxNv3eX8Fwv1x1MDAxNlx1MDAxZG29tnS+XHUwMDE1yvO00FMoKb1zpmNcdTAwMTKTXHUwMDE4kjg45lx1MDAxMTr973fLXHUwMDAx7DgxSXjfM4jhXHUwMDExvSxLa6+9tiR+vVtYWExcdTAwMDe9cPHPhcXwslx1MDAxZbSjRlx1MDAxMlxcLL73+edh0o/iLlx1MDAxNYnscz8+S+pZzVaa9vp//vFH0OuxvFx1MDAxNavHnWHLsFx1MDAxZHbCbtqnuv+lz1x1MDAwYlx1MDAwYr+yn8VntdtRr1x1MDAxZmbVs4L8YYjlzO24mz1cdTAwMTdQg0FcdTAwMDFcdTAwMTZua0T9j/SwNGxQ8VHQ7od5ic9abKrjXHUwMDBmvFx1MDAxM3ePW6vh97h2eJycru/mTz2K2u3ddNDOxlRP4n5/qVx1MDAxNaT1Vl6jnybxSViLXHUwMDFhacuPoJR/27ZcdTAwMWbTXHUwMDFj5K2S+KzZ6ob9/kibuFx1MDAxN9SjdODzOL/NXHK6zayPPOeSPklEZjhoI/Rtvm8pXHUwMDFjZ5ZztFAoXHUwMDE4XHUwMDBlZiVux4lcdTAwMWbMfyD0X/lwXHUwMDBlg/pJk8bUbdzWSZOg2+9cdTAwMDVcdC1TXu/i5jVccmdcdTAwMDb16ENaYdRspVWl/TBbXHUwMDAzbYWVnEP+0v65vc1GhoV/8olPgk646Vt0z9rt4rx1XHUwMDFi1/M2UnDoXHUwMDBiVlx1MDAwYrDKuzrrNYIhXHUwMDAwXHUwMDAwgSZWOeW4ymezXHUwMDFkdU/K3bXj+kmOmSz39/vJSE3CejpcXKJcdFhcdTAwMTWFdSyBVWhrtNbczYzVrdNccvM9Wl9uK10/XrZcdTAwMWLbXHUwMDAzddWowGorqLfOkvAxcSruhVMlXHUwMDE1XHUwMDEzXHUwMDFhnJajMDWKKbRS0mJk6enAqpBJnFx1MDAwNFNkXHUwMDA0XGKLY1x1MDAxOFx1MDAwNUKullx1MDAxY6SbXGLS6zzK7Wx1XHUwMDBl92NdW9L68iCG86W98CpYvC5/XHUwMDE2LGuOSln1WFim5lx1MDAxM2FcZmCrYGy4c8bgXHUwMDFjMN44+rRdXHUwMDFiNNpcdTAwMWJnJ3utwfero+62+PTqYaxcdTAwMDWTwNFcdTAwMThcdTAwMDNcdTAwMDRccjCjaLaCgbTA7Vx1MDAxMMzuIWBcdTAwMWWrc1x1MDAwM2ROz9BoXGKbyqFWoLVcdTAwMWFHtWXGXGJygoqjlEJoUUa346C0MvgvxHZh1oMkXY66jajbLDdcdLuNipJ20E9X4k4nSmlcdTAwMThf4qiblmtk/X5IkviiXHUwMDE1XHUwMDA2Yy9NPVeW9Xx3o1Oc/7WQgy37cPv3P+8n1l66XHUwMDAzXHQ+jWEg7/Bd8ffcNGBEOfdWelmpyDysmV16xVD7eao6f0fm04/G5y/95bPuuXn1PGAk06RtSHjNwlx1MDAwM7I0sNdEXHUwMDA0gFxcgDNcXP9cdTAwMWLd3Fx1MDAxYlx1MDAxNVxm01NRgVx1MDAxNJWKXHUwMDAwXGJRToKyOfinUcHPXHUwMDE0jszPuGvw4sPGOdhjtbq+VkFcdTAwMDUlk36p+EuRgDXcaGmEM/TB5lx1MDAwZdV3IH1cZkRcdTAwMDSAnDukZEtcdTAwMDObj1xiQi5BwkRpy61cdTAwMTG07oKWl6xknFx1MDAwNiSS/LbE3EqCcdzK8ZBMXHUwMDEyeIwtXGL0XHUwMDE3XGLJtFOYM9Sbfd+kylx1MDAxNfZpSVKsXHUwMDBmXHUwMDE0QVlcdFRJXHUwMDBiMbU7Zlx1MDAwNZJYl4I7ij7zXGLHJ8OUtMYoIM9mvH+b1lvVq8zELHfs8IjqcENw7XVcdTAwMDbns5NcdTAwMGIml24/3D9dbVx1MDAwZa7q/Kvad3FP/F9s8VjNhDKaO0vGi5D76eFGj2VKaVx1MDAxNNaqjONNaWCPuN2jNKPBWIsgkDTDXHUwMDA0mqmucqM2iCVBKWUmq41nklx1MDAxMc7quWjm3lxiLoSAZfcoXHUwMDFjSFx1MDAwN0bizFxi3jv/vFx1MDAxMlxc9pb7J1xcbF6EXHUwMDA330KrqjYpX4t7VI7iZaOISEp+UTCtnHDEMtygdOohqK1UyIDecojnUHOfxFx1MDAwNMRWVrlGrHHGWTSF/aFcdTAwMTdcdTAwMDCsZ3b7WICtXHUwMDEyc9qZSrSSTftdXHUwMDBmNzvfLndcdTAwMWKwsjlohlx1MDAwN6vnXy8+ny0na7X4+eK6++HVgGKOgCA9TVGwMVx1MDAxYddJXHKM1kEjOiGVJZFdidpcZkv8btTWw4ZqXHUwMDA046i1fFx1MDAxY6aFjepcdTAwMWIm9XxcdTAwMGaKy8lbOM/FpD6meFx1MDAxM2x311ZTq5s569uR+oIzXkww3+Mk01ogSIPW+jWFcFx09JOKvipcdTAwMDZytvJQT3BjXHUwMDFkqVx1MDAwNzP7XHUwMDBl83GyMVxi2lx1MDAwNyebX6/2P9XWm1s1qK28dlx1MDAwNlwidmHopFx1MDAxM9pIS7/GXHUwMDE5SJLdc0FcdTAwMDGlllx1MDAxNqv95sNcdTAwMThoXHUwMDE0UDnr51x1MDAwMaVjqCSN0ZDKs7yw9XTDT1SEWlx1MDAxN1x1MDAwZv/e+OnV8Fx1MDAxM1gmtOZKXGLg9C1GXCJAKK/ttN6WgFx1MDAxYVD0jmhcdTAwMWR9U2Q5svs0hpVp/eHo6KS4q7ep0S5cIqPgXGIoOlwiXHUwMDFk6lx1MDAwNOiRd2VWXHUwMDAz92d9NGhcdTAwMDQr7YswnylY8vhGmqJcdTAwMDWyOHukMDCd07RcdTAwMDVcdTAwMDP1Q//4u7u9+20j7e28duYzTjOOVnDQyjrFSztpmjNCl5BCoZRUrTrOfVx1MDAxMPNcdTAwMDEjOEhJ/tAqV1R4d0gx4mzg1OBlY9o3pptYW5Sk0ksrtyqAZaOTjLiTXHUwMDAzt8RTRs2w9/ZalZyV1TtcdTAwMWZScW5RqtmVXFxta2NnfXtl6zOebeq6Oz5vfznuvXY+QzRMXHUwMDAx+IN2LpWE0ZsvUlx1MDAwYibQb384XG6swcLzKLn8VXIlR85cdTAwMTZcdTAwMTStiSOH6vSk21rGXHUwMDFmveFcdTAwMGKeXGa80VulkHNMXGJDMslQMECUokeOXHUwMDA2oLy2U5VcdTAwMWN5WZSk4iT481wiTVx1MDAxMchcYsGMYWVah7o0PvOw7rDUnX3Q275cdTAwMTR7XHUwMDBlWU3Esmej7XDQOf1rR3zk9fXmeuFE4oZiXHUwMDAzj6M821NcdTAwMGKNkzllyIVoelFbOCfJqFx1MDAwNWlcdTAwMTGNXHUwMDAxYVx1MDAwMchqXG5K6YZcdTAwMTV8XHUwMDE0ieCk8DKa6GfCTv5d7FYmqPK55KxcdTAwMDdcdTAwMGIvzduPQ2PXJCm4JodeXHUwMDEwjIVcdTAwMGIzuvL6J2iSjYBKzOJcZsuEOTKMMmVcdTAwMWGKn2h570OZj0pQlVgrtX5X6mVWXG6em9rnXCJuXHUwMDAybjQ0gDtcZvlLuFPbXt7dqtXrTXnk7NedeDmZyZCdv0/oT6NwsiFTXFwtXHUwMDAxXHUwMDExr1xyOddcYm+W/HSWXGZKXCJcbidcdTAwMGJiqXCkh9WHJChp+vyV9yewZaPnOlx1MDAwMHqz5XvaMuzt7ENcdTAwMTJF3z7KtaWjtbXj/tbWybgtT7juf5lhUnBGUpVcdTAwMDSIRjJuN3pYL7llisS01X5cdTAwMDJFwVncnlhawSxcdTAwMDfUTitHoYObsPVKZMCoUGtt/Z2jXHUwMDAyaUw38PveXHUwMDAxeOlrmI9s4KglrYCaZOBQuFx1MDAwMTV2XG7KUVxu41xuh9mPZuCgjJ3HWd9cdTAwMDFhiYfx5sH+9lm6l4Qn0e5fg2+N7+NcdTAwMTBcdTAwMWVcct1v0WuNo7kx/p+Kcu0/RC+QO1x1MDAxMlYhXGIgp8UnuCOaIdLnQlDYILU2RFrj8DWGWWt8qOJtXHUwMDAw+Fx1MDAxYnznhK8hbqD1MWM7LH4gslx1MDAxMr2CXHUwMDEwhvYphKYk3Nzr1t6jOifnQ1dNSlr62NC6XHUwMDEx52QkhYYgOLdg/NXsaZ1VXHUwMDAz2aclyVxm+vt2qNDQlGIxcH2dzs+XXHI549312Fx1MDAxNoNebzelpaTSIYMsnkfhxfKE3aWjLHm3mTGON6fQL9uv3+9+/1x1MDAwZsKQrpQifQ==",(0,t.yg)("defs",{parentName:"svg"},(0,t.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,t.yg)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M113.86 39.412c10.45 2.03 21.22 9.56 29.49 16.78 8.27 7.22 15.62 16.71 20.13 26.55 4.51 9.85 6.71 21.66 6.91 32.51.21 10.86-1.6 22.82-5.68 32.61s-10.9 18.66-18.79 26.12c-7.89 7.46-18.21 14.7-28.57 18.63-10.36 3.92-22.64 5.83-33.6 4.92-10.95-.91-22.57-4.96-32.14-10.39-9.57-5.44-18.75-13.45-25.29-22.2-6.54-8.76-11.35-19.8-13.95-30.35-2.6-10.55-3.52-22.51-1.64-32.97 1.87-10.45 6.57-20.95 12.87-29.77 6.3-8.81 15.55-17.43 24.95-23.1 9.4-5.67 19.26-10.1 31.46-10.92 12.2-.81 33.14 4.02 41.74 6.03 8.6 2.02 10.35 4.83 9.86 6.06m-15.95-11.04c10.6 1.94 21.59 9.71 29.35 17.33 7.77 7.62 12.75 18.48 17.25 28.39 4.49 9.91 9.47 20.48 9.71 31.07.24 10.6-3.64 22.24-8.27 32.5-4.63 10.27-11.67 21.42-19.5 29.06-7.83 7.65-17.19 13.7-27.48 16.82-10.29 3.12-23.51 3.3-34.25 1.89-10.73-1.41-20.87-5.26-30.19-10.35-9.31-5.1-19.15-11.42-25.69-20.2-6.54-8.79-11.24-21.83-13.56-32.51-2.31-10.67-2.53-21.15-.32-31.54 2.2-10.39 7.36-21.75 13.56-30.79 6.21-9.04 14.32-17.72 23.69-23.44 9.36-5.73 21.54-9.93 32.5-10.92 10.96-1 28.21 4.15 33.27 4.95 5.06.79-2.51-1.26-2.89-.19M67.82 11.42c11.28-1.27 18.29-.81 47.48-3.24m-49.63 2.4c12.89-1.23 25.75-1.03 49.04-1.07m.67-.85c.21 6.74-1.15 13.15.28 19.51m-2-18.58c.62 6.96.77 11.42.71 17.37m-.14.76c-10.29 1.34-21.14-1.86-48.01-.25m47.85-.74c-18.63 1.45-35.95 1.01-47.55-.29m-1.37-.47c2.53-4.91.85-12.67.79-15.46m.97 17.24c-.22-7.1-.95-13.1-.23-17.46"})),(0,t.yg)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M85.24 27.65c-1.04 2.35-.2 3.93-.93 8.41m.36-8.64c.15 2.33.11 4.64.17 9.04M95.464 27.78c.88 2.57.2 6.04.16 7.98m.55-8.28c-.06 3.14-.04 6.52-.12 9.07"})),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#e03131",strokeWidth:"0",d:"m96.765 106.982 47.79-32.06-43.4 37.35-4.14-5.44"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M97.005 106.222c17.14-10.98 34.36-23.42 47.09-30.82m-47.09 30.82c17.75-11.66 36.3-24.52 47.09-30.82m0 0c-12.62 10.42-23.47 21.63-42.26 37.26m42.26-37.26c-13.9 12.39-27.3 23.48-42.26 37.26m0 0c-1.59-2.1-3.82-5.2-4.83-6.44m4.83 6.44c-1.93-2.32-3.55-4.86-4.83-6.44m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M76.855 44.387c9.73-3 22.75-1.23 32.89 1.66 10.14 2.89 20.16 8.75 27.95 15.67 7.79 6.93 14.54 16.3 18.8 25.87 4.25 9.57 7.08 21.09 6.75 31.57-.34 10.48-3.68 22.09-8.77 31.31-5.09 9.22-13.26 17.68-21.76 24.01-8.5 6.32-18.92 12.03-29.23 13.95-10.31 1.93-22.65.33-32.64-2.41-10-2.73-19.52-7.23-27.32-14.02-7.8-6.78-15.04-17.13-19.47-26.69-4.42-9.55-7.47-20.2-7.09-30.66.38-10.46 4.38-22.71 9.39-32.08 5.01-9.37 11.38-17.64 20.69-24.15 9.3-6.5 28.6-12.67 35.15-14.88 6.55-2.21 4.03.11 4.17 1.61m36.56 8.07c9.42 4 18.46 12.52 24.71 20.78 6.24 8.27 10.41 18.36 12.73 28.81 2.32 10.44 3.85 23.82 1.18 33.85-2.67 10.04-10.1 18.72-17.2 26.37-7.11 7.66-15.79 15.34-25.44 19.58-9.65 4.24-22.06 5.9-32.46 5.84-10.39-.06-20.92-1.23-29.91-6.2-8.99-4.98-17.86-14.81-24.03-23.65-6.16-8.84-10.78-19.14-12.97-29.41-2.18-10.27-2.92-22.44-.16-32.21 2.75-9.77 9.96-18.57 16.68-26.41 6.72-7.84 14.44-16.17 23.66-20.62 9.22-4.46 20.83-6.62 31.66-6.1 10.84.53 28.2 7.54 33.35 9.23 5.16 1.7-1.94.06-2.43.94"})),(0,t.yg)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"#1e1e1e",strokeWidth:"0",d:"M89.655 108.631c1.76-.28 4.19-.15 5.66.78 1.47.93 2.57 3.1 3.15 4.81.57 1.71 1.03 3.68.31 5.45-.73 1.76-2.87 4.23-4.65 5.14-1.78.91-4.21.85-6.03.31-1.83-.53-3.91-2.1-4.92-3.52-1-1.41-1.19-3.1-1.11-4.97.09-1.87.35-4.85 1.6-6.22 1.26-1.38 4.87-1.66 5.94-2.02 1.06-.36.5-.3.44-.14m.18-.25c1.88.08 4.59 1.71 6.04 2.89 1.44 1.19 2.46 2.39 2.65 4.2.2 1.81-.42 5.13-1.48 6.66-1.07 1.52-3.07 1.89-4.9 2.48-1.84.58-4.48 1.52-6.11 1.04-1.64-.49-3.04-2.3-3.68-3.93-.64-1.62-.46-3.79-.18-5.83.29-2.03.56-5.03 1.88-6.36 1.31-1.34 5-1.4 6.02-1.64 1.02-.23.09-.03.09.23"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M89.245 107.961c1.73-.18 4.91 1.04 6.44 2.11 1.54 1.08 2.36 2.68 2.78 4.34.42 1.66.55 3.9-.26 5.6-.82 1.7-2.89 3.83-4.64 4.6-1.75.77-4.17.59-5.86.04-1.69-.55-3.25-1.95-4.3-3.34-1.05-1.39-2.17-3.18-2.01-5.01.15-1.83 1.6-4.67 2.96-6 1.36-1.32 4.14-1.65 5.19-1.94 1.05-.29.98.18 1.12.2m-2.46-.89c1.74-.53 5.02.31 6.67 1.25 1.64.95 2.45 2.6 3.19 4.42.74 1.82 1.87 4.84 1.25 6.5-.63 1.65-3.4 2.47-5.01 3.44-1.6.97-2.87 2.55-4.63 2.37-1.76-.19-4.66-2.12-5.93-3.46-1.28-1.35-1.69-2.9-1.72-4.62-.03-1.71.5-4.06 1.54-5.67 1.03-1.61 3.96-3.31 4.66-4 .7-.69-.44-.31-.48-.15"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M247.348 96.71s0 0 0 0m0 0s0 0 0 0m-.26 6.4c1.17-1.59 2.47-2.96 5.25-6.04m-5.25 6.04c1.06-1.93 2.81-3.3 5.25-6.04m-4.86 11.68c1.71-5.09 6.91-8.46 10.5-12.07m-10.5 12.07c4.34-4.19 8.35-8.36 10.5-12.07m-10.76 18.47c6.53-4.5 10.99-14.35 15.75-18.11m-15.75 18.11c5.77-6.39 11.08-12.57 15.75-18.11m-15.35 23.75c6-9.28 16.85-17.75 20.99-24.15m-20.99 24.15c5.98-5.59 11.07-11.64 20.99-24.15m-21.26 30.55c7.61-11.87 17.68-21.47 26.25-30.19m-26.25 30.19c8.34-9.02 16.16-20.72 26.25-30.19m-26.51 36.59c5.69-10.38 12.62-16.27 32.15-36.98m-32.15 36.98c7.78-9.2 15.26-18.11 32.15-36.98m-29.78 40.36c5.9-8.34 14.62-17.34 34.77-40m-34.77 40c7.18-9.97 16.86-17.68 34.77-40m-29.79 40.36c10.72-12.56 25.28-28.99 35.43-40.76m-35.43 40.76c13.06-15.03 28.27-32.71 35.43-40.76m-29.78 40.36c9.56-11.42 18.87-24.3 34.77-40m-34.77 40c12.68-16.37 25.84-31.02 34.77-40m-29.79 40.36c6.14-8.79 16.06-17.53 35.43-40.75m-35.43 40.75c7.52-8.84 16.07-17.69 35.43-40.75m-29.78 40.36c11.44-9.7 20.92-22.69 34.77-40m-34.77 40c13.23-13.82 23.63-29.12 34.77-40m-29.79 40.36c6.41-10.01 14.93-17.36 33.46-38.49m-33.46 38.49c12.62-13.77 23.26-27.39 33.46-38.49m-27.81 38.09c6.98-8.05 13.38-13.02 30.83-35.47m-30.83 35.47c10.16-13.29 21.03-26.02 30.83-35.47m-25.85 35.83c6.93-8.52 17.03-18.38 28.87-33.2m-28.87 33.2c7.73-10.79 16.88-20.36 28.87-33.2m-23.88 33.56c7.03-9.1 15.67-18.55 26.24-30.19m-26.24 30.19c5.89-5.82 11.06-13.41 26.24-30.19m-20.6 29.8c6.1-10.52 15.02-15.78 23.62-27.17m-23.62 27.17c6.75-8.32 12.67-14.82 23.62-27.17m-18.63 27.53c5.66-7.16 8.64-9.59 21.65-24.91m-21.65 24.91c5.79-6.82 9.97-11.6 21.65-24.91m-16.01 24.51c5.23-8.1 14.41-16.75 19.03-21.88m-19.03 21.88c7.24-6.87 14.12-15.99 19.03-21.88"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M247.348 96.71c-.23 10.04.39 16.73 0 40m0-40c-1.09 14.58.72 31 0 40m0 0c15.03.02 30.79-.58 60 0m-60 0c12.68.27 24.09.91 60 0m0 0c5.67-6.38 14.28-13.1 20-20m-20 20c5.09-5.25 9.83-9.63 20-20m0 0c-4.64-7.11-9.4-10.76-20-20m20 20c-4.7-3.81-9.5-8.27-20-20m0 0c-13.24-1.68-25.05 1.53-60 0m60 0c-20.53-.46-41.65.59-60 0m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M490.192 96.868s0 0 0 0m0 0s0 0 0 0m3.02 2.62c.69-.94.98-1.36 1.97-2.26m-1.97 2.26c.5-.7.84-1.07 1.97-2.26m.39 5.64c1.49-.83 2.56-1.97 5.25-6.03m-5.25 6.03c2.11-1.83 3.93-4.07 5.25-6.03m-2.23 8.66c2.41-1.52 3.11-3.55 7.22-8.3m-7.22 8.3c2.41-3.37 4.9-5.42 7.22-8.3m-4.86 11.68c3.8-1.86 6.37-5.2 9.84-11.32m-9.84 11.32c3.68-4.51 6.27-8.09 9.84-11.32m-6.82 13.94c3.26-4.67 9.33-10.72 12.47-14.34m-12.47 14.34c3.63-3.83 4.66-7.08 12.47-14.34m-10.11 17.72c6.57-5.87 9.83-11.98 15.09-17.36m-15.09 17.36c4.95-5.7 8.8-10.03 15.09-17.36m-29.12 39.61c14.6-16.74 25.05-28.15 34.11-39.25m-34.11 39.25c12.48-14.55 24.79-27.28 34.11-39.25m-28.47 38.85c9.2-12.8 20.95-21.37 34.11-39.24m-34.11 39.24c8.18-8.97 15.32-17.96 34.11-39.24m-29.12 39.6c8.58-9.5 12.63-18.21 34.11-39.24m-34.11 39.24c11.92-13.61 22.74-25.32 34.11-39.24m-28.47 38.85c11.85-11.92 21.41-22.06 33.46-38.49m-33.46 38.49c10.97-11.19 21.78-23.3 33.46-38.49m-28.47 38.85c10.46-8.94 19.72-23.59 33.46-38.49m-33.46 38.49c8.71-10.41 16.44-19.71 33.46-38.49m-27.82 38.09c13.96-12.81 25.06-29.6 33.46-38.49m-33.46 38.49c10.2-11.87 21.21-24.09 33.46-38.49m-28.47 38.85c13.35-14.96 22.37-28.6 33.46-38.49m-33.46 38.49c8.71-10.67 17.75-19.61 33.46-38.49m-27.82 38.1c10.15-13.6 18.87-24.39 32.8-37.74m-32.8 37.74c6.65-9.21 14.89-17.5 32.8-37.74m-27.81 38.1c8.99-10.54 20.4-22.4 33.46-38.49m-33.46 38.49c8.81-10.35 15.82-19.27 33.46-38.49m-27.82 38.09c11.61-11.24 19.05-24.04 27.55-31.69m-27.55 31.69c9.47-9.32 16.61-20.09 27.55-31.69m-22.56 32.05c8.49-9.31 16.55-21.91 22.96-26.41m-22.96 26.41c8.24-10.22 16.17-18.5 22.96-26.41m-17.32 26.02c2.35-3.83 9.76-8.4 17.06-19.62m-17.06 19.62c3.96-3.73 8.15-9.01 17.06-19.62m-12.07 19.98c5.23-4.35 8.35-10.08 12.46-14.34m-12.46 14.34c3.54-3.57 5.64-6.69 12.46-14.34m-6.82 13.94c.7-2.24 2.89-3.35 6.56-7.54m-6.56 7.54c2.59-2.98 4.68-5.4 6.56-7.54m-1.57 7.9c.54-.88 1.43-1.65 1.96-2.26m-1.96 2.26c.6-.57.91-1.22 1.96-2.26"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M490.192 96.868c4.86 3.55 8.45 12.67 18.26 19.74m-18.26-19.74c5.68 5.43 10.83 11.13 18.26 19.74m0 0c-6.97 6.7-11.61 10.82-20 20m20-20c-6.27 6.08-13.51 13.79-20 20m0 0c32.58.53 63.27.05 80 0m-80 0c27.16.05 53.48.23 80 0m0 0c.64-10.5 1.58-21.23-.38-37.89m.38 37.89c-.16-14.82-.75-28.93-.38-37.89m0 0c-30.09.14-60.93-.54-77.88-1.85m77.88 1.85c-27.26-.81-56.66-1.69-77.88-1.85m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M327.477 96.31s0 0 0 0m0 0s0 0 0 0m3.02 2.62c.85-.73 1.55-1.43 1.97-2.26m-1.97 2.26c.55-.74 1.41-1.51 1.97-2.26m.39 5.64c2.07-1.39 2.48-3.91 5.25-6.03m-5.25 6.03c1.05-1.51 2.41-2.31 5.25-6.03m-2.23 8.66c3.23-2.7 5.56-6.01 7.22-8.3m-7.22 8.3c1.62-1.56 3.58-3.64 7.22-8.3m-4.2 10.92c1.52-4.33 5.99-5.22 9.84-11.32m-9.84 11.32c2.58-2.93 4.09-4.49 9.84-11.32m-6.82 13.95c2.87-5.14 8.26-6.47 11.81-13.59m-11.81 13.59c3.06-3.34 4.03-4.89 11.81-13.59m-9.45 16.96c4.31-2.75 4.95-6.01 15.09-17.35m-15.09 17.35c2.75-2.62 6.09-7.15 15.09-17.35m-29.78 40.36c.81-2.5 4.63-3.81 8.52-9.81m-8.52 9.81c2.03-2.46 5.5-5.44 8.52-9.81m9.19-10.57c4.7-6.17 8.29-8.29 17.06-19.62m-17.06 19.62c3.94-5.34 8.28-8.35 17.06-19.62m-29.79 40.36c11.18-13.46 22.75-24.81 35.43-40.76m-35.43 40.76c13.64-16.05 28.04-32.22 35.43-40.76m-29.78 40.36c12.4-16.55 27.8-30.7 34.77-40m-34.77 40c8.46-8.01 15.42-16.48 34.77-40m-29.79 40.36c13.69-17.18 25.92-32.36 35.43-40.75m-35.43 40.75c12.52-13.16 24.08-26.33 35.43-40.75m-29.78 40.36c7.11-9.05 17.32-17.66 34.77-40m-34.77 40c8.76-10.29 17.47-20.47 34.77-40m-29.79 40.36c6.34-8.35 16.56-18.58 33.46-38.49m-33.46 38.49c8.61-10.91 17.04-20.54 33.46-38.49m-27.81 38.09c8.29-10.47 18.86-20.75 30.83-35.47m-30.83 35.47c8.25-8.59 14.44-15.96 30.83-35.47m-25.85 35.83c9.62-11.96 17.16-19.61 28.21-32.45m-28.21 32.45c10.44-11.05 19.12-21.52 28.21-32.45m-23.22 32.81c10.67-9.34 18.18-20.83 26.24-30.19m-26.24 30.19c5.21-6.1 11.5-14.07 26.24-30.19m-20.6 29.8c6.56-9.83 15.17-18.86 22.97-26.42m-22.97 26.42c8.61-9.3 16.97-18.93 22.97-26.42m-17.98 26.78c5.42-6.06 11.15-13.67 20.99-24.15m-20.99 24.15c5.75-6.69 12.42-15.23 20.99-24.15m-15.35 23.75c5.55-3.62 7.19-9 17.72-20.37m-17.72 20.37c3.99-4.01 7.2-9.08 17.72-20.37m-2.23 8.66c.87-1.4 3.24-2.37 5.25-6.04m-5.25 6.04c1.73-1.69 3.21-3.85 5.25-6.04"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M327.477 96.31c3.72 3.18 6.72 8.56 20 20m-20-20c4.85 4.16 10.13 9.57 20 20m0 0c-5.92 8.45-15.22 15.48-20 20m20-20c-3 3.52-8.81 8.51-20 20m0 0c18.63-.73 36.17.02 60 0m-60 0c19.28-.95 39.13-.02 60 0m0 0c8.03-6.27 13.78-10.09 21.51-16.29m-21.51 16.29c7.54-4.63 12.81-10.16 21.51-16.29m0 0c-6.42-8.91-15.96-15.29-21.51-23.71m21.51 23.71c-7-7.78-12.54-14.39-21.51-23.71m0 0c-18.69.33-34.13.62-60 0m60 0c-12.17-.3-25.53.95-60 0m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M408.81 97.796s0 0 0 0m0 0s0 0 0 0m3.02 2.62c.88-.66 1.75-1.54 1.97-2.26m-1.97 2.26c.65-.6 1.31-1.43 1.97-2.26m1.05 4.89c.56-1.63 1.91-3.2 4.59-5.28m-4.59 5.28c1.88-1.72 3.75-3.74 4.59-5.28m-2.23 8.66c2.67-2.66 4.53-6.95 7.22-8.3m-7.22 8.3c2.27-2.24 3.54-3.66 7.22-8.3m-4.2 10.92c2.47-.96 3.06-5.93 9.84-11.32m-9.84 11.32c1.57-1.78 4.03-4.83 9.84-11.32m-6.82 13.95c4.65-2.24 4.87-6.32 11.81-13.59m-11.81 13.59c1.96-2.53 4.49-6.87 11.81-13.59m-8.79 16.21c4.15-5.28 9.32-11.22 14.43-16.6m-14.43 16.6c4.66-5.4 8.26-9.58 14.43-16.6m-28.47 38.85c13.52-12.58 23.99-27.13 33.46-38.49m-33.46 38.49c10.42-10.52 19.13-23.18 33.46-38.49m-27.82 38.09c6.92-6.83 12.24-15.48 33.46-38.49m-33.46 38.49c11.92-12.22 22.8-25.7 33.46-38.49m-28.47 38.85c14.15-14.46 28.66-29.15 33.46-38.49m-33.46 38.49c13.26-14.62 27.24-29.77 33.46-38.49m-27.82 38.1c7.57-7.08 12.07-15.88 33.46-38.49m-33.46 38.49c7.76-8.52 16.46-18.39 33.46-38.49m-28.47 38.85c7.71-11.26 17.6-20.45 33.46-38.49m-33.46 38.49c11.54-12.44 22.04-26.97 33.46-38.49m-27.82 38.09c8.38-7.61 12.56-14.47 31.49-36.22m-31.49 36.22c11.09-12.81 21.21-26.35 31.49-36.22m-26.5 36.58c9.91-11.16 16.06-19.19 29.52-33.96m-29.52 33.96c8.21-10.1 17.47-19.09 29.52-33.96m-23.88 33.57c7.19-7.08 12.7-17.84 26.9-30.94m-26.9 30.94c7.76-8.81 16.56-19.73 26.9-30.94m-21.91 31.3c5.41-6.31 14.31-17 24.93-28.68m-24.93 28.68c5.86-6.89 11.94-14.06 24.93-28.68m-19.29 28.28c4.58-5.92 8.86-12.63 22.31-25.66m-22.31 25.66c7.7-9.6 15.61-16.61 22.31-25.66m-17.32 26.02c6.53-8.35 16.13-16.19 19.68-22.64m-19.68 22.64c5.77-6.11 11.78-13.27 19.68-22.64"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M408.81 97.796c6.23 7.72 13.65 14.18 19.23 18.21m-19.23-18.21c4.63 3.95 9.62 8.77 19.23 18.21m0 0c-6.53 7.12-12.84 12.43-20 20m20-20c-5.79 5.54-10.35 10.22-20 20m0 0c16.9.13 33.29-1.71 60 0m-60 0c20.63.66 41.13 1.18 60 0m0 0c6.6-5.94 10.9-12.33 20-20m-20 20c7.02-7.77 15.71-15.83 20-20m0 0c-7.64-4.97-13.86-14.16-19.23-18.21m19.23 18.21c-4.84-5.07-11.05-11.51-19.23-18.21m0 0c-17.45.7-38.05.84-60 0m60 0c-19.18.65-36.9.28-60 0m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e03131",d:"M185.345 116.288c19.04.22 37.01.28 51.37 0m-51.37 0c13.82-.11 26.69-1 51.37 0"})),(0,t.yg)("path",d({parentName:"g"},{fill:"#e03131",fillRule:"evenodd",strokeWidth:"0",d:"m235.705 116.288-11.51 4.08-.28-11.66 13.3 6.67"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e03131",d:"M236.715 116.288c-3.61 1.98-7.98 4.07-13.74 6.01m13.74-6.01c-3.36 1.94-7.43 2.86-13.74 6.01m0 0c.89-4.31-.43-9.78.3-12.67m-.3 12.67c-.25-5-.01-9.69.3-12.67m0 0c3.47 1.91 9.04 2.95 13.44 6.66m-13.44-6.66c4.96 3.36 11.2 5.96 13.44 6.66m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e03131",d:"M584.797 117.253c13.66.14 22.81-2.07 51.37 0m-51.37 0c17.43.12 35.2.07 51.37 0"})),(0,t.yg)("path",d({parentName:"g"},{fill:"#e03131",fillRule:"evenodd",strokeWidth:"0",d:"m635.617 117.783-13.47 4.21-1.21-10.93 16.32 6.47"})),(0,t.yg)("path",d({parentName:"g"},{fill:"none",stroke:"#e03131",d:"M636.167 117.253c-2.07 1.83-7.58 1.69-13.57 6.39m13.57-6.39c-4.73 2.6-9.25 4.75-13.57 6.39m0 0c.95-2.56-1.1-4.73-.05-12.68m.05 12.68c.16-3.44.61-6.57-.05-12.68m0 0c3.52 2.51 9.37 3.86 13.62 6.29m-13.62-6.29c4.82 2.9 10.08 4.81 13.62 6.29m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M649.831 54.552c58.1-7.59 112.79-.41 184.79.63m-182.35-2.08c74.6 1.56 145.06.76 183.36.99m1.9 1.27c2.1 38.68-2.35 81-1.9 113.38m-1.34-113.88c2.01 22.56 4.04 49.06.95 117.76m1.79-2.55c-64.45.32-122.05 7.61-186.16-2.11m183.69 2.94c-53.03-3.78-106.07-3.03-182.1.89m-1.99-4.16c-.01-32.48 4.08-64.62 1.43-115.34m3.13 118.36c-1.23-44.29-3.49-90.6-3.4-115.59"})),(0,t.yg)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M653.428 54.34c32.61 22.47 56.2 45.87 90.33 69.33m-89.16-65.56c26.53 14.56 52.18 33.48 90.27 62.61m-1.12 2.79c34.66-25.99 65.6-54.38 90.54-68.86m-89.03 65.95c27.64-20.99 55.47-42.82 89.84-65.11"}))))))}X.isMDXComponent=!0}}]);