"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21650],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(a),g=r,m=y["".concat(l,".").concat(g)]||y[g]||d[g]||o;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},77131:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>E,frontMatter:()=>m,metadata:()=>b,toc:()=>N});var t=a(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,a)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,y=(e,n)=>{for(var a in n||(n={}))l.call(n,a)&&c(e,a,n[a]);if(p)for(var a of p(n))s.call(n,a)&&c(e,a,n[a]);return e},d=(e,n)=>o(e,i(n)),g=(e,n)=>{var a={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&s.call(e,t)&&(a[t]=e[t]);return a};const m={},u="Ansible",b={unversionedId:"installation/deploy-a-node/ansible",id:"version-v4.27/installation/deploy-a-node/ansible",title:"Ansible",description:"The Ansible role for Tenzir allows for easy integration of Tenzir into",source:"@site/versioned_docs/version-v4.27/installation/deploy-a-node/ansible.md",sourceDirName:"installation/deploy-a-node",slug:"/installation/deploy-a-node/ansible",permalink:"/v4.27/installation/deploy-a-node/ansible",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.27/installation/deploy-a-node/ansible.md",tags:[],version:"v4.27",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Deploy a node",permalink:"/v4.27/installation/deploy-a-node/"},next:{title:"Azure",permalink:"/v4.27/installation/deploy-a-node/azure/"}},h={},N=[{value:"Example",id:"example",level:2},{value:"Variables",id:"variables",level:2},{value:"<code>tenzir_config_dir</code> (required)",id:"tenzir_config_dir-required",level:3},{value:"<code>tenzir_read_write_paths</code>",id:"tenzir_read_write_paths",level:3},{value:"<code>tenzir_archive</code>",id:"tenzir_archive",level:3},{value:"<code>tenzir_debian_package</code>",id:"tenzir_debian_package",level:3}],f={toc:N},v="wrapper";function E(e){var n=e,{components:a}=n,r=g(n,["components"]);return(0,t.yg)(v,d(y(y({},f),r),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"ansible"}),"Ansible"),(0,t.yg)("p",null,"The Ansible role for Tenzir allows for easy integration of Tenzir into\nexisting Ansible setups. The role uses either the Tenzir Debian package or\nthe tarball installation method depending on which is appropriate for the\ntarget environment. The role definition is in the\n",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/ansible/roles/tenzir"}),(0,t.yg)("inlineCode",{parentName:"a"},"ansible/roles/tenzir"))," directory of the Tenzir\nrepository. You need a local copy of this directory so you can use it in your\nplaybook."),(0,t.yg)("h2",y({},{id:"example"}),"Example"),(0,t.yg)("p",null,"This example playbook shows how to run a Tenzir service on the machine\n",(0,t.yg)("inlineCode",{parentName:"p"},"example_tenzir_server"),":"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"- "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"name"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"Deploy Tenzir")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  become"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  hosts"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"example_tenzir_server")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  remote_user"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"example_ansible_user")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  roles"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"role"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"      vars"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_config_dir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"./tenzir")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_read_write_paths"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": [ "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"/tmp"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," ]")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_archive"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"./tenzir.tar.gz")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        tenzir_debian_package"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"./tenzir.deb"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"- name: Deploy Tenzir\n  become: true\n  hosts: example_tenzir_server\n  remote_user: example_ansible_user\n  roles:\n    - role: tenzir\n      vars:\n        tenzir_config_dir: ./tenzir\n        tenzir_read_write_paths: [ /tmp ]\n        tenzir_archive: ./tenzir.tar.gz\n        tenzir_debian_package: ./tenzir.deb",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",y({},{id:"variables"}),"Variables"),(0,t.yg)("h3",y({},{id:"tenzir_config_dir-required"}),(0,t.yg)("inlineCode",{parentName:"h3"},"tenzir_config_dir")," (required)"),(0,t.yg)("p",null,"A path to directory containing a ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.27/configuration"}),(0,t.yg)("inlineCode",{parentName:"a"},"tenzir.yaml")),"\nrelative to the playbook."),(0,t.yg)("h3",y({},{id:"tenzir_read_write_paths"}),(0,t.yg)("inlineCode",{parentName:"h3"},"tenzir_read_write_paths")),(0,t.yg)("p",null,"A list of paths that Tenzir shall be granted access to in addition to its own\nstate and log directories."),(0,t.yg)("h3",y({},{id:"tenzir_archive"}),(0,t.yg)("inlineCode",{parentName:"h3"},"tenzir_archive")),(0,t.yg)("p",null,"A tarball of Tenzir structured like those that can be downloaded from the\n",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases"}),"GitHub Releases Page"),". This is used\nfor target distributions that are not based on the ",(0,t.yg)("inlineCode",{parentName:"p"},"apt")," package manager."),(0,t.yg)("h3",y({},{id:"tenzir_debian_package"}),(0,t.yg)("inlineCode",{parentName:"h3"},"tenzir_debian_package")),(0,t.yg)("p",null,"A Debian package (",(0,t.yg)("inlineCode",{parentName:"p"},".deb"),"). This package is used for Debian and Debian-based\nLinux distributions."))}E.isMDXComponent=!0}}]);