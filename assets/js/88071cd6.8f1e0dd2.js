"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26218],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,c=d["".concat(l,".").concat(m)]||d[m]||y[m]||p;return t?n.createElement(c,o(o({ref:a},g),{},{components:t})):n.createElement(c,o({ref:a},g))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13248:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>F,frontMatter:()=>c,metadata:()=>h,toc:()=>N});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,g=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&g(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&g(e,t,a[t]);return e},y=(e,a)=>p(e,o(a)),m=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const c={sidebar_position:5},u="Deploy the platform",h={unversionedId:"installation/deploy-the-platform",id:"version-v4.20/installation/deploy-the-platform",title:"Deploy the platform",description:"The Tenzir Platform manages nodes and the pipelines running on them, offering",source:"@site/versioned_docs/version-v4.20/installation/deploy-the-platform.md",sourceDirName:"installation",slug:"/installation/deploy-the-platform",permalink:"/v4.20/installation/deploy-the-platform",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/installation/deploy-the-platform.md",tags:[],version:"v4.20",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Update a node",permalink:"/v4.20/installation/update-a-node"},next:{title:"Tune performance",permalink:"/v4.20/installation/tune-performance/"}},f={},N=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP Reverse Proxy",id:"http-reverse-proxy",level:3},{value:"Identity Provider (IdP)",id:"identity-provider-idp",level:3},{value:"PostgreSQL Database",id:"postgresql-database",level:3},{value:"Docker",id:"docker",level:3},{value:"Run the Platform",id:"run-the-platform",level:2},{value:"Update the Platform",id:"update-the-platform",level:2},{value:"Manage the Platform",id:"manage-the-platform",level:2}],b={toc:N},v="wrapper";function F(e){var a=e,{components:t}=a,r=m(a,["components"]);return(0,n.yg)(v,y(d(d({},b),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"deploy-the-platform"}),"Deploy the platform"),(0,n.yg)("p",null,"The ",(0,n.yg)("em",{parentName:"p"},"Tenzir Platform")," manages nodes and the pipelines running on them, offering\na visual interface to explore data, manage nodes, and pipelines, and create\ndashboards."),(0,n.yg)("admonition",d({},{title:"Sovereign Edition Required",type:"warning"}),(0,n.yg)("p",{parentName:"admonition"},"Tenzir offers a free and cloud-hosted version of the Tenzir Platform on\n",(0,n.yg)("a",d({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com")," for all users of the Community Edition.\nThis guide explains how to run the platform on your own premises as a user of\nthe ",(0,n.yg)("a",d({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Sovereign Edition"),".")),(0,n.yg)("h2",d({},{id:"configuration"}),"Configuration"),(0,n.yg)("p",null,"The platform requires some external infrastructure that must be installed and\nconfigured separately."),(0,n.yg)("h3",d({},{id:"http-reverse-proxy"}),"HTTP Reverse Proxy"),(0,n.yg)("p",null,"The platform uses four URLs that require a HTTP reverse proxy to be set\nup. These URLs may be mapped to the same or different hostnames."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The URL that the user's browser connects to, e.g.,\n",(0,n.yg)("inlineCode",{parentName:"li"},"app.platform.example.org"),". This serves a web frontend where the user can\ninteract with the platform."),(0,n.yg)("li",{parentName:"ol"},"The URL that the nodes connect to, e.g., ",(0,n.yg)("inlineCode",{parentName:"li"},"nodes.platform.example.org"),". Tenzir\nNodes connect to this URL to establish long-running WebSocket connections."),(0,n.yg)("li",{parentName:"ol"},"The URL that the platform's S3-compatible blob storage is accessible at,\ne.g., ",(0,n.yg)("inlineCode",{parentName:"li"},"downloads.platform.example.org"),". When using the 'Download' button\nthe platform generates download links under this URL."),(0,n.yg)("li",{parentName:"ol"},"The URL that the Tenzir Platform CLI connects to, e.g.,\n",(0,n.yg)("inlineCode",{parentName:"li"},"api.platform.example.org"),".")),(0,n.yg)("p",null,"You must provide the following environment variables for the platform:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"# The domain under which the platform frontend is reachable. Must include the")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"# `http://` or `https://` scheme.")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_DOMAIN"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"https://app.platform.example.org")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""})," "),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"# The endpoint to which Tenzir nodes should connect. Must include the `ws://`")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"# or `wss://` scheme.")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_CONTROL_ENDPOINT"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"wss://nodes.platform.example.org")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""})," "),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"# The URL at which the platform's S3-compatible blob storage is accessible at.")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_BLOBS_ENDPOINT"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"https://downloads.platform.example.org")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""})," "),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"# The URL at which the platform's S3-compatible blob storage is accessible at.")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_API_ENDPOINT"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"https://api.platform.example.org"))))),(0,n.yg)("h3",d({},{id:"identity-provider-idp"}),"Identity Provider (IdP)"),(0,n.yg)("p",null,"The platform requires an external Identity Provider (IdP) supporting the OIDC\nprotocol. The IdP must provide valid RS256 ID tokens. The platform must be able\nto access the IdP's issuer URL."),(0,n.yg)("p",null,"You must provide the following environment variables for the OIDC provider\nconfiguration used for logging into the platform:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_OIDC_PROVIDER_NAME"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_PROVIDER_NAME")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_OIDC_PROVIDER_CLIENT_ID"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_PROVIDER_CLIENT_ID")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_OIDC_PROVIDER_CLIENT_SECRET"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_PROVIDER_CLIENT_SECRET")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_OIDC_PROVIDER_ISSUER_URL"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_PROVIDER_ISSUER_URL"))))),(0,n.yg)("p",null,"You must provide the following environment variable containing a JSON object\ncontaining the OIDC issuer and audiences that should be accepted by the\nplatform."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_OIDC_TRUSTED_AUDIENCES"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'\'{"keycloak.example.org": ["tenzir_platform"]}\''))))),(0,n.yg)("p",null,"You must provide the following environment variable containing a JSON list of\nrules granting access to the admin API. The example rule grants admin access to\nall users with a valid and signed ",(0,n.yg)("inlineCode",{parentName:"p"},"id_token")," containing the fields\n",(0,n.yg)("inlineCode",{parentName:"p"},'{"connection": "google-oauth2", "tenzir/org": "TenzirPlatformAdmins"}'),"."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_OIDC_ADMIN_RULES"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'\'[{"connection": "google-oauth2", "organization_claim": "tenzir/org", "organization": "TenzirPlatformAdmins", "auth_fn": "auth_organization"}]\''))))),(0,n.yg)("h3",d({},{id:"postgresql-database"}),"PostgreSQL Database"),(0,n.yg)("p",null,"A PostgreSQL database for storing the state of the platform."),(0,n.yg)("p",null,"You must provide the following environment variables:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_POSTGRES_USER"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_POSTGRES_USER")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_POSTGRES_PASSWORD"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_POSTGRES_PASSWORD")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_POSTGRES_DB"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_POSTGRES_DB")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_POSTGRES_HOSTNAME"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_POSTGRES_HOSTNAME"))))),(0,n.yg)("h3",d({},{id:"docker"}),"Docker"),(0,n.yg)("p",null,"The Tenzir Platform is shipped as a Docker Compose file. To run it, Docker and\nDocker Compose must be installed."),(0,n.yg)("p",null,"As part of your distribution, you were provided an authentication token to be\nable to fetch the Docker images. On the machine on which you want to run the\nDocker Compose stack, log in with the token like this:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"echo"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," YOUR_DOCKER_TOKEN"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}})," docker"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," login"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," ghcr.io"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -u"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir-distribution"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," --password-stdin"))))),(0,n.yg)("h2",d({},{id:"run-the-platform"}),"Run the Platform"),(0,n.yg)("p",null,"Once you went through all the prerequisites, and have filled in the required\nvariables in your ",(0,n.yg)("inlineCode",{parentName:"p"},".env")," file, you should be in a directory with the following\nfiles:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"\u276f tree"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},".")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"\u251c\u2500\u2500 localdev")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"\u2502   \u251c\u2500\u2500 docker-compose.yaml")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"\u2502   \u2514\u2500\u2500 env.example")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"\u2514\u2500\u2500 onprem-integrated")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"    \u251c\u2500\u2500 docker-compose.yaml")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"    \u2514\u2500\u2500 env.example"))))),(0,n.yg)("p",null,"From one of these directories, run ",(0,n.yg)("inlineCode",{parentName:"p"},"docker compose up")," to start the platform in\nthe foreground, or ",(0,n.yg)("inlineCode",{parentName:"p"},"docker compose up --detach")," to run it in the background:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"\u276f docker compose up"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"[+] Running 5/5")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"}," \u2714 Container compose-app-1                Running")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"}," \u2714 Container compose-websocket-gateway-1  Running")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"}," \u2714 Container compose-seaweed-1            Running")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"}," \u2714 Container compose-platform-1           Running")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"Attaching to app-1, platform-1, postgres-1, seaweed-1, websocket-gateway-1")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.205616Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.210667Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "created table", "level": "info", "ts": "2024-04-10T10:13:20.210883Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.217700Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.221194Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "creating a table", "level": "info", "ts": "2024-04-10T10:13:20.221248Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.221464Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'platform-1           | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.224226Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"app-1                | Listening on 0.0.0.0:3000")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'websocket-gateway-1  | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:15:37.033632Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'websocket-gateway-1  | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:15:37.038510Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'websocket-gateway-1  | {"event": "created table", "level": "info", "ts": "2024-04-10T10:15:37.042555Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'websocket-gateway-1  | {"host": "0.0.0.0", "port": 5000, "common_env": {"base_path": "", "tenzir_proxy_timeout": 60.0}, "local_env": {"store": {"postgres_uri": "postgresql://postgres:postgres@postgres:5432/platform"}, "tenant_manager_app_api_key": "d3d185cc4d9a1bde0e07e24c2eb0bfe9d2726acb3a386f8882113727ac6e90cf", "tenant_manager_tenant_token_encryption_key": "CBOXE4x37RKRLHyUNKeAsfg8Tbejm2N251aKnBXakpU="}, "event": "HTTP server running", "level": "info", "ts": "2024-04-10T10:15:37.045244Z"}')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"..."))))),(0,n.yg)("p",null,"It takes up to a minute for all services to be fully available."),(0,n.yg)("h2",d({},{id:"update-the-platform"}),"Update the Platform"),(0,n.yg)("p",null,"Pull the latest images to update the platform:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," pull"))))),(0,n.yg)("h2",d({},{id:"manage-the-platform"}),"Manage the Platform"),(0,n.yg)("p",null,"Install the ",(0,n.yg)("a",d({parentName:"p"},{href:"https://pypi.org/project/tenzir-platform/"}),(0,n.yg)("inlineCode",{parentName:"a"},"tenzir-platform")),"\npackage from PyPI."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir-platform")," command-line utility makes it simple to manage users,\norganizations, and their workspaces and nodes."),(0,n.yg)("p",null,"You must provide the following environment variables for interacting with the\nplatform through the CLI:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_CLI_API_ENDPOINT"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"api.platform.example.org:5000")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_CLI_OIDC_ISSUER_URL"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_ISSUER_URL")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_CLI_OIDC_CLIENT_ID"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_CLIENT_ID")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_PLATFORM_CLI_OIDC_AUDIENCE"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"YOUR_OIDC_AUDIENCE"))))),(0,n.yg)("p",null,"Read our documentation on the ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.20/platform-cli"}),"Tenzir Platform CLI")," to learn\nmore about managing your platform deployment."))}F.isMDXComponent=!0}}]);