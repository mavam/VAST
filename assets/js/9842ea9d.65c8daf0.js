"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42703],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=s(t),u=r,c=y["".concat(p,".").concat(u)]||y[u]||g[u]||l;return t?n.createElement(c,o(o({ref:a},d),{},{components:t})):n.createElement(c,o({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},30020:(e,a,t)=>{t.d(a,{A:()=>g});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};var o=Object.defineProperty,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))p.call(a,t)&&d(e,t,a[t]);if(i)for(var t of i(a))s.call(a,t)&&d(e,t,a[t]);return e};function g({children:e,hidden:a,className:t}){return n.createElement("div",y({role:"tabpanel",className:(0,r.A)(l.tabItem,t)},{hidden:a}),e)}},37376:(e,a,t)=>{t.d(a,{A:()=>q});var n=t(96540),r=t(20053),l=t(21162),o=t(56347),i=t(56415),p=t(12388),s=t(95072),d=Object.defineProperty,y=Object.defineProperties,g=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,f=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&h(e,t,a[t]);if(u)for(var t of u(a))m.call(a,t)&&h(e,t,a[t]);return e},b=(e,a)=>y(e,g(a));function N(e){return function(e){var a,t;return null!=(t=null==(a=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}(e).map((({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})))}function v(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:N(t);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function F({value:e,tabValues:a}){return a.some((a=>a.value===e))}function _({queryString:e=!1,groupId:a}){const t=(0,o.W6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace(b(f({},t.location),{search:a.toString()}))}),[r,t])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=v(e),[o,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!F({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[p,d]=_({queryString:t,groupId:r}),[y,g]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,s.Dv)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),u=(()=>{const e=null!=p?p:y;return F({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{u&&i(u)}),[u]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!F({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var z=t(42517);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=Object.defineProperty,D=Object.defineProperties,A=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,T=(e,a,t)=>a in e?w(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,I=(e,a)=>{for(var t in a||(a={}))C.call(a,t)&&T(e,t,a[t]);if(x)for(var t of x(a))O.call(a,t)&&T(e,t,a[t]);return e},P=(e,a)=>D(e,A(a));function S({className:e,block:a,selectedValue:t,selectValue:o,tabValues:i}){const p=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.a_)(),d=e=>{const a=e.currentTarget,n=p.indexOf(a),r=i[n].value;r!==t&&(s(a),o(r))},y=e=>{var a,t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=null!=(a=p[t])?a:p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=null!=(t=p[a])?t:p[p.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},e)},i.map((({value:e,label:a,attributes:l})=>n.createElement("li",P(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>p.push(e),onKeyDown:y,onClick:d},l),{className:(0,r.A)("tabs__item",E.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function j({lazy:e,children:a,selectedValue:t}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function V(e){const a=k(e);return n.createElement("div",{className:(0,r.A)("tabs-container",E.tabList)},n.createElement(S,I(I({},e),a)),n.createElement(j,I(I({},e),a)))}function q(e){const a=(0,z.A)();return n.createElement(V,I({key:String(a)},e))}},46037:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>f,default:()=>k,frontMatter:()=>h,metadata:()=>b,toc:()=>v});var n=t(15680),r=t(37376),l=t(30020),o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&g(e,t,a[t]);if(s)for(var t of s(a))y.call(a,t)&&g(e,t,a[t]);return e},c=(e,a)=>i(e,p(a)),m=(e,a)=>{var t={};for(var n in e)d.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&y.call(e,n)&&(t[n]=e[n]);return t};const h={sidebar_position:1},f="Deploy a node",b={unversionedId:"installation/deploy-a-node",id:"installation/deploy-a-node",title:"Deploy a node",description:"A node is a managed service for pipelines and storage.",source:"@site/docs/installation/deploy-a-node.md",sourceDirName:"installation",slug:"/installation/deploy-a-node",permalink:"/next/installation/deploy-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/installation/deploy-a-node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Size a node",permalink:"/next/installation/size-a-node"},next:{title:"Update a node",permalink:"/next/installation/update-a-node"}},N={},v=[{value:"Install a node",id:"install-a-node",level:2},{value:"Docker",id:"docker",level:3},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Start a node",id:"start-a-node",level:2},{value:"Stop a node",id:"stop-a-node",level:2},{value:"Automate the deployment",id:"automate-the-deployment",level:2},{value:"systemd",id:"systemd",level:3},{value:"Prepare the host system",id:"prepare-the-host-system",level:4},{value:"Configure the unit",id:"configure-the-unit",level:4},{value:"Ansible",id:"ansible",level:3},{value:"Example",id:"example",level:4},{value:"Variables",id:"variables",level:4},{value:"<code>tenzir_config_dir</code> (required)",id:"tenzir_config_dir-required",level:5},{value:"<code>tenzir_read_write_paths</code>",id:"tenzir_read_write_paths",level:5},{value:"<code>tenzir_archive</code>",id:"tenzir_archive",level:5},{value:"<code>tenzir_debian_package</code>",id:"tenzir_debian_package",level:5}],F={toc:v},_="wrapper";function k(e){var a=e,{components:t}=a,o=m(a,["components"]);return(0,n.yg)(_,c(u(u({},F),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"deploy-a-node"}),"Deploy a node"),(0,n.yg)("p",null,"A ",(0,n.yg)("em",{parentName:"p"},"node")," is a managed service for pipelines and storage."),(0,n.yg)("h2",u({},{id:"install-a-node"}),"Install a node"),(0,n.yg)("p",null,"Start at ",(0,n.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com")," and click ",(0,n.yg)("em",{parentName:"p"},"Add")," in the nodes\npane. Then select your platform."),(0,n.yg)("h3",u({},{id:"docker"}),"Docker"),(0,n.yg)("p",null,"We provide Docker images and a Docker Compose file for a container setup.\nInstall a node as follows:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Enter a name for your node and click the download button to obtain the\n",(0,n.yg)("inlineCode",{parentName:"li"},"docker-compose.NODE.yaml")," configuration file where ",(0,n.yg)("inlineCode",{parentName:"li"},"NODE")," is the name you\nentered for your node."),(0,n.yg)("li",{parentName:"ol"},"Run",(0,n.yg)("figure",u({parentName:"li"},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," up"))))))),(0,n.yg)("p",null,"Edit the Docker Compose file and change ",(0,n.yg)("a",u({parentName:"p"},{href:"/next/configuration#environment-variables"}),"environment\nvariables")," to adjust the\nconfiguration."),(0,n.yg)("h3",u({},{id:"linux"}),"Linux"),(0,n.yg)("p",null,"We offer a native deployment on various Linux distributions.\nInstall a node as follows:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Enter a name for your node and click the download button to obtain a\n",(0,n.yg)("inlineCode",{parentName:"li"},"platform.yaml")," configuration file."),(0,n.yg)("li",{parentName:"ol"},"Move the ",(0,n.yg)("inlineCode",{parentName:"li"},"platform.yaml")," to ",(0,n.yg)("inlineCode",{parentName:"li"},"<sysconfdir>/tenzir/plugin/platform.yaml")," so\nthat the node can find it during startup where ",(0,n.yg)("inlineCode",{parentName:"li"},"<sysconfdir>")," might be\n",(0,n.yg)("inlineCode",{parentName:"li"},"/etc"),". See the ",(0,n.yg)("a",u({parentName:"li"},{href:"/next/configuration#configuration-files"}),"configuration files\ndocumentation")," for more options."),(0,n.yg)("li",{parentName:"ol"},"Run our installer to install a binary package on any Linux distribution:",(0,n.yg)("figure",u({parentName:"li"},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"curl"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," https://get.tenzir.app"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}})," sh"))))))),(0,n.yg)("p",null,"The installer script asks for confirmation before performing the installation.\nIf you prefer a manual installation you can also perform the installer steps\nyourself."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"debian",label:"Debian",mdxType:"TabItem"},(0,n.yg)("p",null,"Download the latest ",(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/latest/download/tenzir-static-amd64-linux.deb"}),"Debian package")," and install it via\n",(0,n.yg)("inlineCode",{parentName:"p"},"dpkg"),":"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"dpkg"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -i"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-static-amd64-linux.deb"))))),(0,n.yg)("p",null,"You can uninstall the Tenzir package as follows:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"apt-get"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," remove"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir"))))),(0,n.yg)("p",null,"Use purge instead of remove if you also want to delete the state directory and\nleave no trace:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"apt-get"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," purge"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir")))))),(0,n.yg)(l.A,{value:"rpm_based",label:"RPM-based (RedHat, OpenSUSE, Fedora)",mdxType:"TabItem"},(0,n.yg)("p",null,"Download the latest ",(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/latest/download/tenzir-static-amd64-linux.rpm"}),"RPM package")," and install it via\n",(0,n.yg)("inlineCode",{parentName:"p"},"rpm"),":"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"rpm"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -i"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-static-amd64-linux.rpm")))))),(0,n.yg)(l.A,{value:"nix",label:"Nix",mdxType:"TabItem"},(0,n.yg)("p",null,"Use our ",(0,n.yg)("inlineCode",{parentName:"p"},"flake.nix"),":"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"nix"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," run"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," github:tenzir/tenzir/stable"))))),(0,n.yg)("p",null,"Install Tenzir by adding ",(0,n.yg)("inlineCode",{parentName:"p"},"github:tenzir/tenzir/stable")," to your flake inputs, or\nuse your preferred method to include third-party modules on classic NixOS.")),(0,n.yg)(l.A,{value:"any",label:"Any",mdxType:"TabItem"},(0,n.yg)("p",null,"Download a tarball with our ",(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/latest/download/tenzir-static-x86_64-linux.tar.gz"}),"static binary")," for all Linux\ndistributions and unpack it into ",(0,n.yg)("inlineCode",{parentName:"p"},"/opt/tenzir"),":"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"tar"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," xzf"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-static-x86_64-linux.tar.gz"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -C"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," /"))))),(0,n.yg)("p",null,"We also offer prebuilt statically linked binaries for every Git commit to the\n",(0,n.yg)("inlineCode",{parentName:"p"},"main")," branch."),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"curl"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -O"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," https://storage.googleapis.com/tenzir-dist-public/packages/main/tarball/tenzir-static-main.gz"))))))),(0,n.yg)("h3",u({},{id:"macos"}),"macOS"),(0,n.yg)("p",null,"Please use Docker ",(0,n.yg)("a",u({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package."),(0,n.yg)("h2",u({},{id:"start-a-node"}),"Start a node"),(0,n.yg)("admonition",u({},{title:"Implicit start with Docker",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"You can skip this step if you use ",(0,n.yg)("a",u({parentName:"p"},{href:"#docker"}),"Docker")," because ",(0,n.yg)("inlineCode",{parentName:"p"},"docker compose up"),"\nalready starts a node for you.")),(0,n.yg)("p",null,"Run the ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir-node")," executable to start a node:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir-node"))))),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"      _____ _____ _   _ ________ ____\n     |_   _| ____| \\ | |__  /_ _|  _ \\\n       | | |  _| |  \\| | / / | || |_) |\n       | | | |___| |\\  |/ /_ | ||  _ <\n       |_| |_____|_| \\_/____|___|_| \\_\\\n\n          v4.0.0-rc6-0-gf193b51f1f\nVisit https://app.tenzir.com to get started.\n\n[16:50:26.741] node listens for node-to-node connections on tcp://127.0.0.1:5158\n[16:50:26.982] node connected to platform via wss://ws.tenzir.app:443/production\n")),(0,n.yg)("p",null,"This will spawn a blocking process that listens by default for node-to-node\nconnections on the TCP endpoint ",(0,n.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5158"),". Select a different endpoint\nvia the ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint")," option, e.g., bind to an IPv6 address:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir-node"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," --endpoint=[::1]:42000"))))),(0,n.yg)("p",null,"Set ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," to disable the endpoint, making the node\nexclusively accessible through the Tenzir Platform. This effectively prevents\nconnections from other ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir-node")," processes."),(0,n.yg)("h2",u({},{id:"stop-a-node"}),"Stop a node"),(0,n.yg)("p",null,"There exist two ways stop a server:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Hit CTRL+C in the same TTY where you ran ",(0,n.yg)("inlineCode",{parentName:"li"},"tenzir-node"),"."),(0,n.yg)("li",{parentName:"ol"},"Send the process a SIGINT or SIGTERM signal, e.g., via\n",(0,n.yg)("inlineCode",{parentName:"li"},"pkill -2 tenzir-node"),".")),(0,n.yg)("p",null,"Sending the process a SIGTERM is the same as hitting CTRL+C."),(0,n.yg)("h2",u({},{id:"automate-the-deployment"}),"Automate the deployment"),(0,n.yg)("p",null,"Use ",(0,n.yg)("a",u({parentName:"p"},{href:"#systemd"}),"systemd")," or ",(0,n.yg)("a",u({parentName:"p"},{href:"#ansible"}),"Ansible")," to automate the deployment of a\nnode."),(0,n.yg)("h3",u({},{id:"systemd"}),"systemd"),(0,n.yg)("p",null,"The Tenzir package bundles a systemd service unit under\n",(0,n.yg)("inlineCode",{parentName:"p"},"<extraction_path>/lib/systemd/system/tenzir-node.service"),". The service is\nsandboxed and runs with limited privileges."),(0,n.yg)("h4",u({},{id:"prepare-the-host-system"}),"Prepare the host system"),(0,n.yg)("p",null,"Please note that all subsequent commands require ",(0,n.yg)("inlineCode",{parentName:"p"},"root")," privileges. The service\nrequires a user and group called ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir"),". You can create them as follows."),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"useradd"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," --system"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," --user-group"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir"))))),(0,n.yg)("p",null,"Once the user exists, you should create the directory for Tenzir's persistent\ndata and change the permissions such that it is owned by the new ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir")," user:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"mkdir"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -p"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," /var/lib/tenzir")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"chown"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," -R"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir:tenzir"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," /var/lib/tenzir"))))),(0,n.yg)("h4",u({},{id:"configure-the-unit"}),"Configure the unit"),(0,n.yg)("p",null,"Locate the lines beginning with ",(0,n.yg)("inlineCode",{parentName:"p"},"ExecStart=")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"ExecStop=")," at the bottom\nof the ",(0,n.yg)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir")," binary."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"ExecStart=/path/to/tenzir start\n")),(0,n.yg)("p",null,"In case your Tenzir deployment needs elevated privileges, e.g., to capture\npackets, you can provide them as follows:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"ini","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"ini","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"CapabilityBoundingSet"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"=CAP_NET_RAW")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"AmbientCapabilities"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"=CAP_NET_RAW"))))),(0,n.yg)("p",null,"Then link the unit file to your systemd search path:"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"systemctl"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," link"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-node.service"))))),(0,n.yg)("p",null,"To have the service start up automatically on system boot, ",(0,n.yg)("inlineCode",{parentName:"p"},"enable")," it via\n",(0,n.yg)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,n.yg)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"systemctl"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," enable"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-node")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FFA657"}}),"systemctl"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," start"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-node"))))),(0,n.yg)("h3",u({},{id:"ansible"}),"Ansible"),(0,n.yg)("p",null,"The Ansible role for Tenzir allows for easy integration of Tenzir into\nexisting Ansible setups. The role uses either the Tenzir Debian package or\nthe tarball installation method depending on which is appropriate for the\ntarget environment. The role definition is in the\n",(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/ansible/roles/tenzir"}),(0,n.yg)("inlineCode",{parentName:"a"},"ansible/roles/tenzir"))," directory of the Tenzir\nrepository. You need a local copy of this directory so you can use it in your\nplaybook."),(0,n.yg)("h4",u({},{id:"example"}),"Example"),(0,n.yg)("p",null,"This example playbook shows how to run a Tenzir service on the machine\n",(0,n.yg)("inlineCode",{parentName:"p"},"example_tenzir_server"),":"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"- "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"name"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"Deploy Tenzir")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"  become"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"  hosts"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"example_tenzir_server")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"  remote_user"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"example_ansible_user")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"  roles"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"role"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"      vars"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_config_dir"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"./tenzir")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_read_write_paths"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": [ "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"/tmp"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}})," ]")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_archive"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"./tenzir.tar.gz")),"\n",(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_debian_package"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),"./tenzir.deb"))))),(0,n.yg)("h4",u({},{id:"variables"}),"Variables"),(0,n.yg)("h5",u({},{id:"tenzir_config_dir-required"}),(0,n.yg)("inlineCode",{parentName:"h5"},"tenzir_config_dir")," (required)"),(0,n.yg)("p",null,"A path to directory containing a ",(0,n.yg)("a",u({parentName:"p"},{href:"/next/configuration"}),(0,n.yg)("inlineCode",{parentName:"a"},"tenzir.yaml")),"\nrelative to the playbook."),(0,n.yg)("h5",u({},{id:"tenzir_read_write_paths"}),(0,n.yg)("inlineCode",{parentName:"h5"},"tenzir_read_write_paths")),(0,n.yg)("p",null,"A list of paths that Tenzir shall be granted access to in addition to its own\nstate and log directories."),(0,n.yg)("h5",u({},{id:"tenzir_archive"}),(0,n.yg)("inlineCode",{parentName:"h5"},"tenzir_archive")),(0,n.yg)("p",null,"A tarball of Tenzir structured like those that can be downloaded from the\n",(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases"}),"GitHub Releases Page"),". This is used\nfor target distributions that are not based on the ",(0,n.yg)("inlineCode",{parentName:"p"},"apt")," package manager."),(0,n.yg)("h5",u({},{id:"tenzir_debian_package"}),(0,n.yg)("inlineCode",{parentName:"h5"},"tenzir_debian_package")),(0,n.yg)("p",null,"A Debian package (",(0,n.yg)("inlineCode",{parentName:"p"},".deb"),"). This package is used for Debian and Debian based\nLinux distributions."))}k.isMDXComponent=!0}}]);