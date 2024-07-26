"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,y=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>m,default:()=>g,frontMatter:()=>y,metadata:()=>f,toc:()=>k});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>i(e,o(t)),h=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const y={sidebar_custom_props:{operator:{transformation:!0}}},m="chart",f={unversionedId:"operators/chart",id:"version-v4.18/operators/chart",title:"chart",description:"Add metadata to a schema, necessary for rendering as a chart.",source:"@site/versioned_docs/version-v4.18/operators/chart.md",sourceDirName:"operators",slug:"/operators/chart",permalink:"/v4.18/operators/chart",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/operators/chart.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/v4.18/operators/batch"},next:{title:"compress",permalink:"/v4.18/operators/compress"}},x={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-x|--x-axis &lt;fields&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"-x--x-axis-fields-line-area-and-bar-charts-only",level:3},{value:"<code>-y|--y-axis &lt;fields&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"-y--y-axis-fields-line-area-and-bar-charts-only",level:3},{value:"<code>--position &lt;position&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"--position-position-line-area-and-bar-charts-only",level:3},{value:"<code>--x-axis-type &lt;x-axis-type&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"--x-axis-type-x-axis-type-line-area-and-bar-charts-only",level:3},{value:"<code>--y-axis-type &lt;y-axis-type&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"--y-axis-type-y-axis-type-line-area-and-bar-charts-only",level:3},{value:"<code>--name &lt;field&gt;</code> (<code>pie</code> chart only)",id:"--name-field-pie-chart-only",level:3},{value:"<code>--value &lt;fields&gt;</code> (<code>pie</code> chart only)",id:"--value-fields-pie-chart-only",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},v="wrapper";function g(e){var t=e,{components:a}=t,r=h(t,["components"]);return(0,n.kt)(v,u(c(c({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"chart"}),"chart"),(0,n.kt)("p",null,"Add metadata to a schema, necessary for rendering as a chart."),(0,n.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"chart line [-x|--x-axis <fields>] [-y|--y-axis <field>]\n           [--x-axis-type <x-axis-type>]  [--y-axis-type <y-axis-type>]\nchart area [-x|--x-axis <fields>] [-y|--y-axis <field>]\n           [--x-axis-type <x-axis-type>]  [--y-axis-type <y-axis-type>]\nchart bar  [-x|--x-axis <fields>] [-y|--y-axis <field>]\n           [--x-axis-type <x-axis-type>]  [--y-axis-type <y-axis-type>]\nchart pie  [--name <field>] [--value <fields>]\n")),(0,n.kt)("h2",c({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"chart")," operator adds attributes to the schema of the input events,\nthat are used to guide rendering of the data as a chart.\nThe operator does no rendering itself."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," option value is either the name of a single field, or a\ncomma-separated list of multiple field names, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"foo,bar,baz"),"."),(0,n.kt)("h3",c({},{id:"-x--x-axis-fields-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-x|--x-axis <fields>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Sets the field used for the X-axis."),(0,n.kt)("p",null,"Values in this field must be strictly increasing (sorted in ascending order,\nwithout duplicates) when creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"line")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"area")," chart, or unique when\ncreating a ",(0,n.kt)("inlineCode",{parentName:"p"},"bar")," chart."),(0,n.kt)("p",null,"Defaults to the first field in the schema."),(0,n.kt)("h3",c({},{id:"-y--y-axis-fields-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-y|--y-axis <fields>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Sets the fields used for the Y-axis."),(0,n.kt)("p",null,"Defaults to every field but the first one."),(0,n.kt)("h3",c({},{id:"--position-position-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--position <position>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Controls how the values are grouped when rendered as a chart.\nPossible values are ",(0,n.kt)("inlineCode",{parentName:"p"},"grouped")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"stacked"),"."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"grouped"),"."),(0,n.kt)("h3",c({},{id:"--x-axis-type-x-axis-type-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--x-axis-type <x-axis-type>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Sets the x-axis scale type.\nPossible values are ",(0,n.kt)("inlineCode",{parentName:"p"},"linear")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"log"),"."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"linear"),"."),(0,n.kt)("h3",c({},{id:"--y-axis-type-y-axis-type-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--y-axis-type <y-axis-type>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Sets the y-axis scale type.\nPossible values are ",(0,n.kt)("inlineCode",{parentName:"p"},"linear")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"log"),"."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"linear"),"."),(0,n.kt)("h3",c({},{id:"--name-field-pie-chart-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--name <field>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"pie")," chart only)"),(0,n.kt)("p",null,"Sets the field used for the names of the segments."),(0,n.kt)("p",null,"Values in this field must be unique."),(0,n.kt)("p",null,"Defaults to the first field in the schema."),(0,n.kt)("h3",c({},{id:"--value-fields-pie-chart-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--value <fields>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"pie")," chart only)"),(0,n.kt)("p",null,"Sets the fields used for the value of a segment."),(0,n.kt)("p",null,"Defaults to every field but the first one."),(0,n.kt)("h2",c({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Render most common ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," values in ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.flow")," events as a bar chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'export\n| where #schema == "suricata.flow"\n| top src_ip\n/* -x and -y default to `src_ip` and `count` */\n| chart bar\n')),(0,n.kt)("p",null,"Render historical import throughput statistics as a line chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'metrics\n| where #schema == "tenzir.metrics.operator"\n| where source == true\n| summarize bytes=sum(output.approx_bytes) by timestamp resolution 1s\n| sort timestamp desc\n| chart line -x timestamp -y bytes --y-axis-type "log"\n')))}g.isMDXComponent=!0}}]);