"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72937],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(n),u=r,g=l["".concat(s,".").concat(u)]||l[u]||y[u]||o;return n?t.createElement(g,p(p({ref:a},d),{},{components:n})):t.createElement(g,p({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[l]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4945:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>g,metadata:()=>I,toc:()=>N});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,l=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&d(e,n,a[n]);if(i)for(var n of i(a))c.call(a,n)&&d(e,n,a[n]);return e},y=(e,a)=>o(e,p(a)),u=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const g={},m="load_s3",I={unversionedId:"tql2/operators/load_s3",id:"tql2/operators/load_s3",title:"load_s3",description:"Loads from an Amazon S3 object.",source:"@site/docs/tql2/operators/load_s3.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_s3",permalink:"/next/tql2/operators/load_s3",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/load_s3.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_nic",permalink:"/next/tql2/operators/load_nic"},next:{title:"load_sqs",permalink:"/next/tql2/operators/load_sqs"}},b={},N=[{value:"Description",id:"description",level:2},{value:"<code>uri: str</code>",id:"uri-str",level:3},{value:"<code>anonymous = bool (optional)</code>",id:"anonymous--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}],h={toc:N},D="wrapper";function j(e){var a=e,{components:n}=a,r=u(a,["components"]);return(0,t.yg)(D,y(l(l({},h),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",l({},{id:"load_s3"}),"load_s3"),(0,t.yg)("p",null,"Loads from an Amazon S3 object."),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_s3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}})," uri"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [anonymous"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"load_s3 uri:str, [anonymous=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",l({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"load_s3")," operator connects to an S3 bucket to acquire raw bytes from an S3\nobject."),(0,t.yg)("p",null,"The connector tries to retrieve the appropriate credentials using AWS's\n",(0,t.yg)("a",l({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"default credentials provider\nchain"),"."),(0,t.yg)("admonition",l({},{type:"info"}),(0,t.yg)("p",{parentName:"admonition"},"Make sure to configure AWS credentials for the same user account that runs\n",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-node"),". The AWS CLI creates configuration files for the\ncurrent user under ",(0,t.yg)("inlineCode",{parentName:"p"},"~/.aws"),", which can only be read by the same user account."),(0,t.yg)("p",{parentName:"admonition"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-node")," systemd unit by default creates a ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir")," user and runs as\nthat user, meaning that the AWS credentials must also be configured for that\nuser. The directory ",(0,t.yg)("inlineCode",{parentName:"p"},"~/.aws")," must be readable for the ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir")," user.")),(0,t.yg)("p",null,"If a config file ",(0,t.yg)("inlineCode",{parentName:"p"},"<prefix>/etc/tenzir/plugin/s3.yaml")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"~/.config/tenzir/plugin/s3.yaml")," exists, it is always preferred over the\ndefault AWS credentials. The configuration file must have the following format:"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),"access-key"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-access-key")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),"secret-key"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-secret-key")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),"session-token"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-session-token (optional)"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"access-key: your-access-key\nsecret-key: your-secret-key\nsession-token: your-session-token (optional)",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",l({},{id:"uri-str"}),(0,t.yg)("inlineCode",{parentName:"h3"},"uri: str")),(0,t.yg)("p",null,"The path to the S3 object."),(0,t.yg)("p",null,"The syntax is\n",(0,t.yg)("inlineCode",{parentName:"p"},"s3://[<access-key>:<secret-key>@]<bucket-name>/<full-path-to-object>(?<options>)"),"."),(0,t.yg)("p",null,"Options can be appended to the path as query parameters, as per\n",(0,t.yg)("a",l({parentName:"p"},{href:"https://arrow.apache.org/docs/r/articles/fs.html#connecting-directly-with-a-uri"}),"Arrow"),":"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"For S3, the options that can be included in the URI as query parameters are\n",(0,t.yg)("inlineCode",{parentName:"p"},"region"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"scheme"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"endpoint_override"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"allow_bucket_creation"),", and\n",(0,t.yg)("inlineCode",{parentName:"p"},"allow_bucket_deletion"),".")),(0,t.yg)("h3",l({},{id:"anonymous--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"anonymous = bool (optional)")),(0,t.yg)("p",null,"If to ignore any predefined credentials and try to load with anonymous\ncredentials."),(0,t.yg)("h2",l({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read CSV from an object ",(0,t.yg)("inlineCode",{parentName:"p"},"obj.csv")," in the bucket ",(0,t.yg)("inlineCode",{parentName:"p"},"examplebucket"),":"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_s3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),' "s3://examplebucket/obj.csv"')),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_csv"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:'load_s3 "s3://examplebucket/obj.csv"\nread_csv',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Read JSON from an object ",(0,t.yg)("inlineCode",{parentName:"p"},"test.json")," in the bucket ",(0,t.yg)("inlineCode",{parentName:"p"},"examplebucket"),", but using a\ndifferent, S3-compatible endpoint:"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_s3"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),' "s3://examplebucket/test.json?endpoint_override=s3.us-west.mycloudservice.com"')),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:'load_s3 "s3://examplebucket/test.json?endpoint_override=s3.us-west.mycloudservice.com"\nread_json',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",l({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",l({parentName:"p"},{href:"/next/tql2/operators/save_s3"}),(0,t.yg)("inlineCode",{parentName:"a"},"save_s3"))))}j.isMDXComponent=!0}}]);