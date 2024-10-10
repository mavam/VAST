"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95939],{88269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>k});var o=t(15680),r=t(91461),a=t(24029),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&u(e,t,n[t]);return e},g=(e,n)=>s(e,c(n)),m=(e,n)=>{var t={};for(var o in e)p.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&d.call(e,o)&&(t[o]=e[o]);return t};const f={},y="GitHub",h={unversionedId:"contribution/github",id:"version-v4.21/contribution/github",title:"GitHub",description:"This page documents workflows concerning developer-facing GitHub infrastructure.",source:"@site/versioned_docs/version-v4.21/contribution/github.md",sourceDirName:"contribution",slug:"/contribution/github",permalink:"/contribution/github",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/contribution/github.md",tags:[],version:"v4.21",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Security Policy",permalink:"/contribution/security"},next:{title:"Development Guides",permalink:"/development"}},v={},k=[{value:"Synchronize issue labels",id:"synchronize-issue-labels",level:2}],N={toc:k},T="wrapper";function O(e){var n=e,{components:t}=n,i=m(n,["components"]);return(0,o.yg)(T,g(b(b({},N),i),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",b({},{id:"github"}),"GitHub"),(0,o.yg)("p",null,"This page documents workflows concerning developer-facing GitHub infrastructure."),(0,o.yg)("h2",b({},{id:"synchronize-issue-labels"}),"Synchronize issue labels"),(0,o.yg)("p",null,"To ensure that ",(0,o.yg)("a",b({parentName:"p"},{href:"https://github.com/tenzir/tenzir/labels"}),"issue and pull request\nlabels")," are consistent within and\nacross several of our repositories, we use ",(0,o.yg)("a",b({parentName:"p"},{href:"https://github.com/Financial-Times/github-label-sync"}),"GitHub Label\nSync"),"."),(0,o.yg)("p",null,"To synchronize the labels, run:"),(0,o.yg)("figure",b({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",b({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,o.yg)("code",b({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",b({parentName:"code"},{"data-line":""}),(0,o.yg)("span",b({parentName:"span"},{style:{color:"#FFA657"}}),"github-label-sync"),(0,o.yg)("span",b({parentName:"span"},{style:{color:"#79C0FF"}})," --access-token"),(0,o.yg)("span",b({parentName:"span"},{style:{color:"#A5D6FF"}})," TOKEN"),(0,o.yg)("span",b({parentName:"span"},{style:{color:"#79C0FF"}})," --labels"),(0,o.yg)("span",b({parentName:"span"},{style:{color:"#A5D6FF"}})," labels.yml"),(0,o.yg)("span",b({parentName:"span"},{style:{color:"#A5D6FF"}})," REPO"))))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TOKEN")," is a personal GitHub Access Token and ",(0,o.yg)("inlineCode",{parentName:"p"},"REPO")," the GitHub repository,\ne.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir/tenzir"),". The labels configuration\n",(0,o.yg)("a",b({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/.github/labels.yml"}),(0,o.yg)("inlineCode",{parentName:"a"},"labels.yml"))," is\npart of this repository and has the following contents:"),(0,o.yg)(r.A,{language:"yaml",mdxType:"CodeBlock"},a.A))}O.isMDXComponent=!0},24029:(e,n,t)=>{t.d(n,{A:()=>o});const o="# This file contains the configuration for GitHub Label Sync.\n#\n# Usage:\n#\n#    github-label-sync --access-token TOKEN --labels labels.yaml REPO\n#\n# Where TOKEN is a GitHub Access Token and REPO the repository name to apply\n# this configuration file to, e.g., tenzir/tenzir.\n#\n# For details, see:\n# https://github.com/Financial-Times/github-label-sync\n\n# Status\n- name: blocked\n  color: dddddd\n  description: Blocked by an (external) issue\n# Type of work\n- name: bug\n  color: fbca04\n  description: Incorrect behavior\n- name: feature\n  color: fbca04\n  description: New functionality\n- name: improvement\n  color: fbca04\n  description: An incremental enhancement of an existing feature\n- name: maintenance\n  color: fbca04\n  description: Tasks for keeping up the infrastructure\n- name: performance\n  color: fbca04\n  description: Improvements or regressions of performance\n- name: refactoring\n  color: fbca04\n  description: Restructuring of existing code\n# Code base part\n- name: ci\n  color: 0366d6\n  description: Continuous integration and delivery\n- name: dependencies\n  color: 0366d6\n  description: Update of dependent software\n- name: docs\n  color: 0366d6\n  description: Documentation and blog\n- name: packaging\n  color: 0366d6\n  description: Relating to the build scaffold\n- name: rfc\n  color: 0366d6\n  description: A Request For Comments (RFC)\n# Functionality\n- name: app\n  color: d93f0b\n  description: Our app at app.tenzir.com\n- name: platform\n  color: d93f0b\n  description: The infra behind app.tenzir.com\n- name: engine\n  color: d93f0b\n  description: Core pipeline and storage engine\n- name: connector\n  color: d93f0b\n  description: Loader and saver\n- name: format\n  color: d93f0b\n  description: Parser and printer\n- name: operator\n  color: d93f0b\n  description: Source, transformation, and sink\n- name: language\n  color: d93f0b\n  description: Tenzir Query Language (TQL)\n- name: integration\n  color: d93f0b\n  description: Integration with third-party tools\n"}}]);