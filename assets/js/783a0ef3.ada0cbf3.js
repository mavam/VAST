"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30658],{78492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>h,default:()=>C,frontMatter:()=>m,metadata:()=>f,toc:()=>N});var a=t(15680),o=t(91461),i=t(46410),r=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(p)for(var t of p(n))d.call(n,t)&&u(e,t,n[t]);return e},g=(e,n)=>s(e,c(n)),y=(e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const m={},h="GitHub",f={unversionedId:"contribution/github",id:"contribution/github",title:"GitHub",description:"This page documents workflows concerning developer-facing GitHub infrastructure.",source:"@site/docs/contribution/github.md",sourceDirName:"contribution",slug:"/contribution/github",permalink:"/next/contribution/github",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/contribution/github.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Security Policy",permalink:"/next/contribution/security"},next:{title:"Development Guides",permalink:"/next/development"}},I={},N=[{value:"Synchronize issue labels",id:"synchronize-issue-labels",level:2}],D={toc:N},M="wrapper";function C(e){var n=e,{components:t}=n,r=y(n,["components"]);return(0,a.yg)(M,g(b(b({},D),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",b({},{id:"github"}),"GitHub"),(0,a.yg)("p",null,"This page documents workflows concerning developer-facing GitHub infrastructure."),(0,a.yg)("h2",b({},{id:"synchronize-issue-labels"}),"Synchronize issue labels"),(0,a.yg)("p",null,"To ensure that ",(0,a.yg)("a",b({parentName:"p"},{href:"https://github.com/tenzir/tenzir/labels"}),"issue and pull request\nlabels")," are consistent within and\nacross several of our repositories, we use ",(0,a.yg)("a",b({parentName:"p"},{href:"https://github.com/Financial-Times/github-label-sync"}),"GitHub Label\nSync"),"."),(0,a.yg)("p",null,"To synchronize the labels, run:"),(0,a.yg)("figure",b({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",b({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",b({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",b({parentName:"code"},{"data-line":""}),(0,a.yg)("span",b({parentName:"span"},{style:{color:"#FFA657"}}),"github-label-sync"),(0,a.yg)("span",b({parentName:"span"},{style:{color:"#79C0FF"}})," --access-token"),(0,a.yg)("span",b({parentName:"span"},{style:{color:"#A5D6FF"}})," TOKEN"),(0,a.yg)("span",b({parentName:"span"},{style:{color:"#79C0FF"}})," --labels"),(0,a.yg)("span",b({parentName:"span"},{style:{color:"#A5D6FF"}})," labels.yml"),(0,a.yg)("span",b({parentName:"span"},{style:{color:"#A5D6FF"}})," REPO"))),(0,a.yg)("button",b({parentName:"pre"},{type:"button",data:"github-label-sync --access-token TOKEN --labels labels.yml REPO",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",b({parentName:"button"},{className:"ready"})),(0,a.yg)("span",b({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TOKEN")," is a personal GitHub Access Token and ",(0,a.yg)("inlineCode",{parentName:"p"},"REPO")," the GitHub repository,\ne.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir/tenzir"),". The labels configuration\n",(0,a.yg)("a",b({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/.github/labels.yml"}),(0,a.yg)("inlineCode",{parentName:"a"},"labels.yml"))," is\npart of this repository and has the following contents:"),(0,a.yg)(o.A,{language:"yaml",mdxType:"CodeBlock"},i.A))}C.isMDXComponent=!0},46410:(e,n,t)=>{t.d(n,{A:()=>a});const a="# This file contains the configuration for GitHub Label Sync.\n#\n# Usage:\n#\n#    github-label-sync --access-token TOKEN --labels labels.yaml REPO\n#\n# Where TOKEN is a GitHub Access Token and REPO the repository name to apply\n# this configuration file to, e.g., tenzir/tenzir.\n#\n# For details, see:\n# https://github.com/Financial-Times/github-label-sync\n\n# Status\n- name: blocked\n  color: dddddd\n  description: Blocked by an (external) issue\n# Type of work\n- name: bug\n  color: fbca04\n  description: Incorrect behavior\n- name: feature\n  color: fbca04\n  description: New functionality\n- name: improvement\n  color: fbca04\n  description: An incremental enhancement of an existing feature\n- name: maintenance\n  color: fbca04\n  description: Tasks for keeping up the infrastructure\n- name: performance\n  color: fbca04\n  description: Improvements or regressions of performance\n- name: refactoring\n  color: fbca04\n  description: Restructuring of existing code\n# Code base part\n- name: ci\n  color: 0366d6\n  description: Continuous integration and delivery\n- name: dependencies\n  color: 0366d6\n  description: Update of dependent software\n- name: docs\n  color: 0366d6\n  description: Documentation and blog\n- name: packaging\n  color: 0366d6\n  description: Relating to the build scaffold\n- name: rfc\n  color: 0366d6\n  description: A Request For Comments (RFC)\n# Functionality\n- name: app\n  color: d93f0b\n  description: Our app at app.tenzir.com\n- name: platform\n  color: d93f0b\n  description: The infra behind app.tenzir.com\n- name: engine\n  color: d93f0b\n  description: Core pipeline and storage engine\n- name: connector\n  color: d93f0b\n  description: Loader and saver\n- name: format\n  color: d93f0b\n  description: Parser and printer\n- name: operator\n  color: d93f0b\n  description: Source, transformation, and sink\n- name: language\n  color: d93f0b\n  description: Tenzir Query Language (TQL)\n- name: integration\n  color: d93f0b\n  description: Integration with third-party tools\n"}}]);