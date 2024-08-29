"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58786],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),g=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={sidebar_position:1},y="Git and GitHub Workflow",f={unversionedId:"contribution/workflow",id:"contribution/workflow",title:"Git and GitHub Workflow",description:"The following diagram visualizes our branching model:",source:"@site/docs/contribution/workflow.md",sourceDirName:"contribution",slug:"/contribution/workflow",permalink:"/next/contribution/workflow",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/contribution/workflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Code of Conduct",permalink:"/next/contribution/code-of-conduct"},next:{title:"Coding Style",permalink:"/next/contribution/coding-style"}},h={},b=[{value:"Commit Messages",id:"commit-messages",level:2}],w={toc:b},N="wrapper";function v(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.yg)(N,u(m(m({},w),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",m({},{id:"git-and-github-workflow"}),"Git and GitHub Workflow"),(0,r.yg)("p",null,"The following diagram visualizes our branching model:"),(0,r.yg)("p",null,(0,r.yg)("img",m({parentName:"p"},{src:"https://user-images.githubusercontent.com/53797/156560785-c7279447-63eb-4428-9a11-9c90cc03acc8.png",alt:"Branching Model"}))),(0,r.yg)("p",null,"Our git workflow looks as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," branch reflects the latest state of development, and should\nalways compile.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In case we need to release a hotfix, we use dedicated patch release branches.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"stable")," branch always points to the latest release that is not a release\ncandidate. It exists so support a streamlined workflow for some packaging\ntools (e.g., Nix).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For new features or fixes, use ",(0,r.yg)("em",{parentName:"p"},"topic branches")," that branch off ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," with\na naming convention of ",(0,r.yg)("inlineCode",{parentName:"p"},"topic/description"),". After completing work in a topic\nbranch, check the following steps to prepare for a merge back into ",(0,r.yg)("inlineCode",{parentName:"p"},"main"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Squash your commits such that each commit reflects a self-contained change.\nYou can interactively rebase all commits in your current pull request with\n",(0,r.yg)("inlineCode",{parentName:"p"},"git rebase --interactive $(git merge-base origin/main HEAD)"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a pull request to ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," on GitHub.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Wait for the results of continuous integration tools and fix any reported\nissues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ask a maintainer to review your work when your changes merge cleanly. If\nyou don't want a specific maintainer's feedback, ask for a team review from\n",(0,r.yg)("a",m({parentName:"p"},{href:"https://github.com/orgs/tenzir/teams/engineering"}),"tenzir/engineering"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Address the feedback articulated during the review.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"A maintainer will merge the topic branch into ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," after it passes the\ncode review.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Similarly, for features or fixes relating to a specific GitHub issue, use\n",(0,r.yg)("em",{parentName:"p"},"topic branches")," that branch off ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," with a naming convention of\n",(0,r.yg)("inlineCode",{parentName:"p"},"topic/XXX"),", replacing XXX with a short description of the issue."))),(0,r.yg)("h2",m({},{id:"commit-messages"}),"Commit Messages"),(0,r.yg)("p",null,"Commit messages are formatted according to ",(0,r.yg)("a",m({parentName:"p"},{href:"https://github.com/agis/git-style-guide"}),"this git style\nguide"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'The first line succinctly summarizes the changes in no more than 50\ncharacters. It is capitalized and written in and imperative present tense:\ne.g., "Fix a bug" as opposed to "Fixes a bug" or "Fixed a bug". As a\nmnemonic, prepend "When applied, this commit will" to the commit summary and\ncheck if it builds a full sentence.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The first line does not contain a dot at the end. (Think of it as the header\nof the following description).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The second line is empty.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Optional long descriptions as full sentences begin on the third line,\nindented at 72 characters per line, explaining ",(0,r.yg)("em",{parentName:"p"},"why")," the change is needed,\n",(0,r.yg)("em",{parentName:"p"},"how")," it addresses the underlying issue, and what ",(0,r.yg)("em",{parentName:"p"},"side-effects")," it might\nhave."))))}v.isMDXComponent=!0}}]);