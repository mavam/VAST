"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88714,6020],{87059:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Xt});var n=a(96540),r=a(20053),l=a(28367),o=a(62513),i=a(98141),c=a(36764),s=a(5394),m=a(31986),d=a(88895),u=a(72183),f=a(21162),p=a(84940);const b={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,a]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,f.gk)();return(0,f.Mq)((({scrollY:t},n)=>{const l=null==n?void 0:n.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),a(!1)):t<e?a(!1):t+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,p.$)((e=>{e.location.hash&&(r.current=!0,a(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.A)("clean-btn",o.G.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var v=a(25543),E=a(56347),g=a(13763),y=a(74728),w=a(23247),k=Object.defineProperty,x=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))O.call(t,a)&&A(e,a,t[a]);if(x)for(var a of x(t))C.call(t,a)&&A(e,a,t[a]);return e};function S(e){return n.createElement("svg",_({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function j({onClick:e}){return n.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.A)("button button--secondary button--outline",I.collapseSidebarButton),onClick:e},n.createElement(S,{className:I.collapseSidebarButtonIcon}))}var T=a(62391),P=a(31450);const L=Symbol("EmptyContext"),N=n.createContext(L);function B({children:e}){const[t,a]=(0,n.useState)(null),r=(0,n.useMemo)((()=>({expandedItem:t,setExpandedItem:a})),[t]);return n.createElement(N.Provider,{value:r},e)}var M=a(57932),H=a(45295),W=a(27449),V=a(42517),R=Object.defineProperty,F=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,q=(e,t,a)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t||(t={}))G.call(t,a)&&q(e,a,t[a]);if(F)for(var a of F(t))D.call(t,a)&&q(e,a,t[a]);return e},U=(e,t)=>{var a={};for(var n in e)G.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&F)for(var n of F(e))t.indexOf(n)<0&&D.call(e,n)&&(a[n]=e[n]);return a};function Z({categoryLabel:e,onClick:t}){return n.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function K(e){var t=e,{item:a,onItemClick:l,activePath:i,level:s,index:m}=t,d=U(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:f,collapsible:p,className:b,href:h}=a,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,y.p)(),E=function(e){const t=(0,V.A)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c._o)(e):void 0),[e,t])}(a),g=(0,c.w8)(a,i),w=(0,H.ys)(h,i),{collapsed:k,setCollapsed:x}=(0,M.u)({initialState:()=>!!p&&(!g&&a.collapsed)}),{expandedItem:O,setExpandedItem:C}=function(){const e=(0,n.useContext)(N);if(e===L)throw new P.dV("DocSidebarItemsExpandedStateProvider");return e}(),A=(e=!k)=>{C(e?null:m),x(e)};return function({isActive:e,collapsed:t,updateCollapsed:a}){const r=(0,P.ZC)(e);(0,n.useEffect)((()=>{e&&!r&&t&&a(!1)}),[e,r,t,a])}({isActive:g,collapsed:k,updateCollapsed:A}),(0,n.useEffect)((()=>{p&&null!=O&&O!==m&&v&&x(!0)}),[p,O,m,x,v]),n.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemCategory,o.G.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":k},b)},n.createElement("div",{className:(0,r.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":w})},n.createElement(W.A,z({className:(0,r.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{null==l||l(a),h?A(!1):(e.preventDefault(),A())}:()=>{null==l||l(a)},"aria-current":w?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=E?E:"#":E},d),f),h&&p&&n.createElement(Z,{categoryLabel:f,onClick:e=>{e.preventDefault(),A()}})),n.createElement(M.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(ut,{items:u,tabIndex:k?-1:0,onItemClick:l,activePath:i,level:s+1})))}var X=a(75068),Y=a(43064);const $={menuExternalLink:"menuExternalLink_NnFM"};var J,Q;function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ee.apply(this,arguments)}const te=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 140 100",width:420,height:300,"aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,J||(J=n.createElement("defs",null,n.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}'))),Q||(Q=n.createElement("g",{fillRule:"evenodd",strokeLinecap:"round"},n.createElement("path",{d:"M10 10v80h80l40-40-40-40H10",strokeWidth:0,fill:"#e9ecef"}),n.createElement("path",{d:"M10 10v80m0-80v80m0 0h80m-80 0h80m0 0 40-40M90 90l40-40m0 0L90 10m40 40L90 10m0 0H10m80 0H10m0 0s0 0 0 0m0 0s0 0 0 0",stroke:"#1e1e1e",strokeWidth:4,fill:"none"}))))};var ae,ne;function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},re.apply(this,arguments)}const le=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 140 100",width:420,height:300,"aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,ae||(ae=n.createElement("defs",null,n.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}'))),ne||(ne=n.createElement("g",{strokeOpacity:.3,fillOpacity:.3,fillRule:"evenodd",strokeLinecap:"round"},n.createElement("path",{d:"M10 10v80h80l40-40-40-40H10",strokeWidth:0,fill:"#f8f9fa"}),n.createElement("path",{d:"M10 10v80m0 0h80m0 0 40-40m0 0L90 10m0 0H10m0 0s0 0 0 0",stroke:"#1e1e1e",strokeWidth:2.5,fill:"none",strokeDasharray:"8 10"}))))};var oe,ie;function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ce.apply(this,arguments)}const se=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 160 100",width:480,height:300,"aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,oe||(oe=n.createElement("defs",null,n.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}'))),ie||(ie=n.createElement("g",{fillRule:"evenodd",strokeLinecap:"round"},n.createElement("path",{d:"m10 10 40 40-40 40h100l40-40-40-40H10",strokeWidth:0,fill:"#e9ecef"}),n.createElement("path",{d:"m10 10 40 40M10 10l40 40m0 0L10 90m40-40L10 90m0 0h100M10 90h100m0 0 40-40m-40 40 40-40m0 0-40-40m40 40-40-40m0 0H10m100 0H10m0 0s0 0 0 0m0 0s0 0 0 0",stroke:"#1e1e1e",strokeWidth:4,fill:"none"}))))};var me,de;function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ue.apply(this,arguments)}const fe=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 160 100",width:480,height:300,"aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,me||(me=n.createElement("defs",null,n.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}'))),de||(de=n.createElement("g",{strokeOpacity:.3,fillOpacity:.3,fillRule:"evenodd",strokeLinecap:"round"},n.createElement("path",{d:"m10 10 40 40-40 40h100l40-40-40-40H10",strokeWidth:0,fill:"#f8f9fa"}),n.createElement("path",{d:"m10 10 40 40m0 0L10 90m0 0h100m0 0 40-40m0 0-40-40m0 0H10m0 0s0 0 0 0",stroke:"#1e1e1e",strokeWidth:2.5,fill:"none",strokeDasharray:"8 10"}))))};var pe,be;function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},he.apply(this,arguments)}const ve=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 140 100",width:420,height:300,"aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,pe||(pe=n.createElement("defs",null,n.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}'))),be||(be=n.createElement("g",{fillRule:"evenodd",strokeLinecap:"round"},n.createElement("path",{d:"M10 90h120V10H10l40 40-40 40",strokeWidth:0,fill:"#e9ecef"}),n.createElement("path",{d:"M10 90h120M10 90h120m0 0V10m0 80V10m0 0H10m120 0H10m0 0 40 40M10 10l40 40m0 0L10 90m40-40L10 90m0 0s0 0 0 0m0 0s0 0 0 0",stroke:"#1e1e1e",strokeWidth:4,fill:"none"}))))};var Ee,ge;function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ye.apply(this,arguments)}const we=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 140 100",width:420,height:300,"aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,Ee||(Ee=n.createElement("defs",null,n.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}'))),ge||(ge=n.createElement("g",{strokeOpacity:.3,fillOpacity:.3,fillRule:"evenodd",strokeLinecap:"round"},n.createElement("path",{d:"M10 90h120V10H10l40 40-40 40",strokeWidth:0,fill:"#f8f9fa"}),n.createElement("path",{d:"M10 90h120m0 0V10m0 0H10m0 0 40 40m0 0L10 90m0 0s0 0 0 0",stroke:"#1e1e1e",strokeWidth:2.5,fill:"none",strokeDasharray:"8 10"}))))};var ke;function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},xe.apply(this,arguments)}const Oe=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,fill:"#5f6368","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,ke||(ke=n.createElement("path",{d:"M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"})))};var Ce=Object.defineProperty,Ae=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Ie=(e,t,a)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,je=(e,t)=>{for(var a in t||(t={}))_e.call(t,a)&&Ie(e,a,t[a]);if(Ae)for(var a of Ae(t))Se.call(t,a)&&Ie(e,a,t[a]);return e},Te=(e,t)=>{var a={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&Ae)for(var n of Ae(e))t.indexOf(n)<0&&Se.call(e,n)&&(a[n]=e[n]);return a};const Pe=({children:e,title:t,marginLeft:a})=>n.createElement("div",{style:{display:"flex",alignItems:"center",height:20,marginLeft:a,marginRight:-5},title:t},e),Le=(e,t,a)=>()=>n.createElement(Pe,{title:t,marginLeft:a},n.createElement(e,{style:{height:"100%",width:"auto"}})),Ne=Le(te,"Source",0),Be=Le(le,"",0),Me=Le(se,"Transformation",0),He=Le(fe,"",0),We=Le(ve,"Sink",0),Ve=Le(we,"",0),Re=Le(te,"Parser",0),Fe=Le(le,"",0),Ge=Le(ve,"Printer",0),De=Le(we,"",0),qe=Le(te,"Loader",0),ze=Le(le,"",0),Ue=Le(ve,"Saver",0),Ze=Le(we,"",0),Ke=Le(Oe,"Experimental",5);function Xe(e){var t=e,{item:a,onItemClick:l,activePath:i,level:s,index:m}=t,d=Te(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:f,className:p,autoAddBaseUrl:b,customProps:h}=a,v=(0,c.w8)(a,i),E=(0,X.A)(u);return n.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:f},n.createElement(W.A,je(je({className:(0,r.A)("menu__link",!E&&$.menuExternalLink,{"menu__link--active":v}),autoAddBaseUrl:b,"aria-current":v?"page":void 0,to:u},E&&{onClick:l?()=>l(a):void 0}),d),n.createElement("div",{style:{width:"100%",display:"flex"}},f,(null==h?void 0:h.experimental)&&n.createElement(Ke,null),n.createElement("span",{style:{flexGrow:1}}),n.createElement(Ye,{customProps:h})),!E&&n.createElement(Y.A,null)))}const Ye=({customProps:e})=>{let t=null;return(null==e?void 0:e.operator)?t=n.createElement(n.Fragment,null,e.operator.source?n.createElement(Ne,null):n.createElement(Be,null),e.operator.transformation?n.createElement(Me,null):n.createElement(He,null),e.operator.sink?n.createElement(We,null):n.createElement(Ve,null)):(null==e?void 0:e.connector)?t=n.createElement(n.Fragment,null,e.connector.loader?n.createElement(qe,null):n.createElement(ze,null),e.connector.saver?n.createElement(Ue,null):n.createElement(Ze,null)):(null==e?void 0:e.format)&&(t=n.createElement(n.Fragment,null,e.format.parser?n.createElement(Re,null):n.createElement(Fe,null),e.format.printer?n.createElement(Ge,null):n.createElement(De,null))),n.createElement(n.Fragment,null,t)},$e={menuHtmlItem:"menuHtmlItem_M9Kj"};function Je({item:e,level:t,index:a}){const{value:l,defaultStyle:i,className:c}=e;return n.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(t),i&&[$e.menuHtmlItem,"menu__list-item"],c),key:a,dangerouslySetInnerHTML:{__html:l}})}var Qe=Object.defineProperty,et=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,nt=(e,t,a)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,rt=(e,t)=>{for(var a in t||(t={}))tt.call(t,a)&&nt(e,a,t[a]);if(et)for(var a of et(t))at.call(t,a)&&nt(e,a,t[a]);return e},lt=(e,t)=>{var a={};for(var n in e)tt.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&et)for(var n of et(e))t.indexOf(n)<0&&at.call(e,n)&&(a[n]=e[n]);return a};function ot(e){var t=e,{item:a}=t,r=lt(t,["item"]);switch(a.type){case"category":return n.createElement(K,rt({item:a},r));case"html":return n.createElement(Je,rt({item:a},r));default:return n.createElement(Xe,rt({item:a},r))}}var it=Object.defineProperty,ct=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,dt=(e,t,a)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const ut=(0,n.memo)((function(e){var t=e,{items:a}=t,r=((e,t)=>{var a={};for(var n in e)st.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ct)for(var n of ct(e))t.indexOf(n)<0&&mt.call(e,n)&&(a[n]=e[n]);return a})(t,["items"]);return n.createElement(B,null,a.map(((e,t)=>n.createElement(ot,((e,t)=>{for(var a in t||(t={}))st.call(t,a)&&dt(e,a,t[a]);if(ct)for(var a of ct(t))mt.call(t,a)&&dt(e,a,t[a]);return e})({key:t,item:e,index:t},r)))))})),ft={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function pt({path:e,sidebar:t,className:a}){const l=function(){const{isActive:e}=(0,T.Mj)(),[t,a]=(0,n.useState)(e);return(0,f.Mq)((({scrollY:t})=>{e&&a(0===t)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.A)("menu thin-scrollbar",ft.menu,l&&ft.menuWithAnnouncementBar,a)},n.createElement("ul",{className:(0,r.A)(o.G.docs.docSidebarMenu,"menu__list")},n.createElement(ut,{items:t,activePath:e,level:1})))}const bt="sidebar_njMd",ht="sidebarWithHideableNavbar_wUlq",vt="sidebarHidden_VK0M",Et="sidebarLogo_isFc";const gt=n.memo((function({path:e,sidebar:t,onCollapse:a,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:i}}}=(0,y.p)();return n.createElement("div",{className:(0,r.A)(bt,o&&ht,l&&vt)},o&&n.createElement(w.A,{tabIndex:-1,className:Et}),n.createElement(pt,{path:e,sidebar:t}),i&&n.createElement(j,{onClick:a}))}));var yt=a(27098),wt=a(48983);const kt=({sidebar:e,path:t})=>{const a=(0,wt.M)();return n.createElement("ul",{className:(0,r.A)(o.G.docs.docSidebarMenu,"menu__list")},n.createElement(ut,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};const xt=n.memo((function(e){return n.createElement(yt.GX,{component:kt,props:e})}));var Ot=Object.defineProperty,Ct=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,St=(e,t,a)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,It=(e,t)=>{for(var a in t||(t={}))At.call(t,a)&&St(e,a,t[a]);if(Ct)for(var a of Ct(t))_t.call(t,a)&&St(e,a,t[a]);return e};function jt(e){const t=(0,g.l)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(gt,It({},e)),r&&n.createElement(xt,It({},e)))}const Tt={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function Pt({toggleSidebar:e}){return n.createElement("div",{className:Tt.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},n.createElement(S,{className:Tt.expandButtonIcon}))}const Lt={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function Nt({children:e}){var t;const a=(0,m.t)();return n.createElement(n.Fragment,{key:null!=(t=null==a?void 0:a.name)?t:"noSidebar"},e)}function Bt({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:a}){const{pathname:l}=(0,E.zy)(),[i,c]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{i&&c(!1),!i&&(0,v.O)()&&c(!0),a((e=>!e))}),[a,i]);return n.createElement("aside",{className:(0,r.A)(o.G.docs.docSidebarContainer,Lt.docSidebarContainer,t&&Lt.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(Lt.docSidebarContainer)&&t&&c(!0)}},n.createElement(Nt,null,n.createElement("div",{className:(0,r.A)(Lt.sidebarViewport,i&&Lt.sidebarViewportHidden)},n.createElement(jt,{sidebar:e,path:l,onCollapse:s,isHidden:i}),i&&n.createElement(Pt,{toggleSidebar:s}))))}const Mt={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ht({hiddenSidebarContainer:e,children:t}){const a=(0,m.t)();return n.createElement("main",{className:(0,r.A)(Mt.docMainContainer,(e||!a)&&Mt.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.A)("container padding-top--md padding-bottom--lg",Mt.docItemWrapper,e&&Mt.docItemWrapperEnhanced)},t))}const Wt={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function Vt({children:e}){const t=(0,m.t)(),[a,r]=(0,n.useState)(!1);return n.createElement(d.A,{wrapperClassName:Wt.docsWrapper},n.createElement(h,null),n.createElement("div",{className:Wt.docPage},t&&n.createElement(Bt,{sidebar:t.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}),n.createElement(Ht,{hiddenSidebarContainer:a},e)))}var Rt=a(6020),Ft=a(18389),Gt=Object.defineProperty,Dt=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,Ut=(e,t,a)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Zt=(e,t)=>{for(var a in t||(t={}))qt.call(t,a)&&Ut(e,a,t[a]);if(Dt)for(var a of Dt(t))zt.call(t,a)&&Ut(e,a,t[a]);return e};function Kt(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(Ft.A,{version:t.version,tag:(0,i.tU)(t.pluginId,t.version)}),n.createElement(l.be,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Xt(e){const{versionMetadata:t}=e,a=(0,c.mz)(e);if(!a)return n.createElement(Rt.default,null);const{docElement:i,sidebarName:d,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(Kt,Zt({},e)),n.createElement(l.e3,{className:(0,r.A)(o.G.wrapper.docsPages,o.G.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.n,{version:t},n.createElement(m.V,{name:d,items:u},n.createElement(Vt,null,i)))))}},6020:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(96540),r=a(72183),l=a(28367),o=a(88895);function i(){return n.createElement(n.Fragment,null,n.createElement(l.be,{title:(0,r.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.A,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);