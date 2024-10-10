"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80777],{16095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>z,frontMatter:()=>f,metadata:()=>b,toc:()=>N});var a=t(15680),i=t(91461),o=t(64757),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&u(e,t,n[t]);if(p)for(var t of p(n))g.call(n,t)&&u(e,t,n[t]);return e},m=(e,n)=>s(e,l(n)),h=(e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t};const f={sidebar_position:4},y="Configuration",b={unversionedId:"configuration",id:"version-v4.21/configuration",title:"Configuration",description:"There exist multiple options to configure a Tenzir deployment:",source:"@site/versioned_docs/version-v4.21/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/configuration",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/configuration.md",tags:[],version:"v4.21",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Taxonomies",permalink:"/data-model/taxonomies"},next:{title:"REST API",permalink:"/rest-api"}},v={},N=[{value:"Command Line Arguments",id:"command-line-arguments",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Keys",id:"keys",level:3},{value:"Values",id:"values",level:3},{value:"Configuration files",id:"configuration-files",level:2},{value:"Plugin Configuration Files",id:"plugin-configuration-files",level:3},{value:"Bare Mode",id:"bare-mode",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Install plugins",id:"install-plugins",level:3},{value:"Load plugins",id:"load-plugins",level:3},{value:"List plugins",id:"list-plugins",level:3},{value:"Block plugins",id:"block-plugins",level:3},{value:"Example Configuration",id:"example-configuration",level:2}],w={toc:N},T="wrapper";function z(e){var n=e,{components:t}=n,r=h(n,["components"]);return(0,a.yg)(T,m(c(c({},w),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"configuration"}),"Configuration"),(0,a.yg)("p",null,"There exist multiple options to configure a Tenzir deployment:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Command-line arguments"),(0,a.yg)("li",{parentName:"ol"},"Environment variables"),(0,a.yg)("li",{parentName:"ol"},"Configuration files"),(0,a.yg)("li",{parentName:"ol"},"Compile-time defaults")),(0,a.yg)("p",null,"These options apply to the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir-node")," executables that ship with\na Tenzir package. The options are sorted by precedence, i.e., command-line\narguments override environment variables, which override configuration file\nsettings. Compile-time defaults can only be changed by rebuilding Tenzir from\nsource."),(0,a.yg)("p",null,"Let's discuss the first three options in more detail."),(0,a.yg)("h2",c({},{id:"command-line-arguments"}),"Command Line Arguments"),(0,a.yg)("p",null,"The command line arguments of the executables have the following synopsis:"),(0,a.yg)("pre",null,(0,a.yg)("code",c({parentName:"pre"},{}),"tenzir [opts] <pipeline>\ntenzir-node [opts]\n")),(0,a.yg)("p",null,"We have both long ",(0,a.yg)("inlineCode",{parentName:"p"},"--long=X")," and short ",(0,a.yg)("inlineCode",{parentName:"p"},"-s X")," options. Boolean options do not\nrequire explicit specification of a value, and it suffices to write ",(0,a.yg)("inlineCode",{parentName:"p"},"--long")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"-s")," to set an option to true."),(0,a.yg)("h2",c({},{id:"environment-variables"}),"Environment Variables"),(0,a.yg)("p",null,"You can use environment variables as an alternative method to passing command\nline options. This comes in handy when working with non-interactive deployments\nwhere the command line is hard-coded, such as in Docker containers."),(0,a.yg)("p",null,"An environment variable has the form ",(0,a.yg)("inlineCode",{parentName:"p"},"KEY=VALUE"),", and we describe the format of\n",(0,a.yg)("inlineCode",{parentName:"p"},"KEY")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"VALUE")," below. Tenzir processes only environment variables that have\nthe form ",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_{KEY}=VALUE"),". For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_ENDPOINT=1.2.3.4")," translates\nto the command line option ",(0,a.yg)("inlineCode",{parentName:"p"},"--endpoint=1.2.3.4")," and YAML configuration\n",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint: 1.2.3.4"),"."),(0,a.yg)("h3",c({},{id:"keys"}),"Keys"),(0,a.yg)("p",null,"There exists a one-to-one mapping from configuration file keys to environment\nvariable names. Here are two examples:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tenzir.import.batch-size")," \ud83d\udc48 configuration file key"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TENZIR_IMPORT__BATCH_SIZE")," \ud83d\udc48 environment variable")),(0,a.yg)("p",null,"A hierarchical key of the form ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.x.y.z")," maps to the environment variable\n",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_X__Y__Z"),". More generally, the ",(0,a.yg)("inlineCode",{parentName:"p"},"KEY")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_{KEY}=VALUE")," adheres to\nthe following rules:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Double underscores map to the ",(0,a.yg)("inlineCode",{parentName:"p"},".")," separator of YAML dictionaries.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Single underscores ",(0,a.yg)("inlineCode",{parentName:"p"},"_")," map to a ",(0,a.yg)("inlineCode",{parentName:"p"},"-")," in the corresponding configuration file\nkey. This is unambiguous because Tenzir does not have any options that\ninclude a literal underscore."))),(0,a.yg)("p",null,"From the perspective of the command line, setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"--foo")," option via ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir\n--foo")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir-node --foo")," maps onto the environment variable ",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_FOO"),"\nand the configuration file key ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.foo"),". Here are two examples with\nidentical behavior:"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"TENZIR_ENDPOINT"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"0.0.0.0:42000"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}})," tenzir-node")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir-node"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," --endpoint=0.0.0.0:42000"))))),(0,a.yg)("admonition",c({},{title:"CAF and plugin Settings",type:"caution"}),(0,a.yg)("p",{parentName:"admonition"},"To provide ",(0,a.yg)("a",c({parentName:"p"},{href:"https://github.com/actor-framework/actor-framework"}),"CAF")," and plugin\nsettings, which have the form ",(0,a.yg)("inlineCode",{parentName:"p"},"caf.x.y.z")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"plugins.name.x.y.z")," in the\nconfiguration file, the environment variable must have the form\n",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_CAF__X__Y__Z")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_PLUGINS__NAME__X__Y__Z")," respectively."),(0,a.yg)("p",{parentName:"admonition"},"The configuration file is an exception in this regard: ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.caf.")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugins.")," are invalid key prefixes. Instead, CAF and plugin\nconfiguration file keys have the prefixes ",(0,a.yg)("inlineCode",{parentName:"p"},"caf.")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"plugins."),", i.e., they are\nhoisted into the global scope.")),(0,a.yg)("h3",c({},{id:"values"}),"Values"),(0,a.yg)("p",null,"While all environment variables are strings on the shell, Tenzir parses them\ninto a typed value internally. In general, parsing values from the environment\nfollows the same syntactical rules as command line parsing."),(0,a.yg)("p",null,"In particular, this applies to lists. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},'TENZIR_PLUGINS="foo,bar"'),"\nis equivalent to ",(0,a.yg)("inlineCode",{parentName:"p"},"--plugins=foo,bar"),"."),(0,a.yg)("p",null,"Tenzir ignores environment variables with an empty value because the type cannot\nbe inferred. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"TENZIR_PLUGINS=")," will not be considered."),(0,a.yg)("h2",c({},{id:"configuration-files"}),"Configuration files"),(0,a.yg)("p",null,"Tenzir's configuration file is in YAML format. On startup, Tenzir attempts to\nread configuration files from the following places, in order:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"<sysconfdir>/tenzir/tenzir.yaml")," for system-wide configuration, where\n",(0,a.yg)("inlineCode",{parentName:"p"},"sysconfdir")," is the platform-specific directory for configuration files,\ne.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"~/.config/tenzir/tenzir.yaml")," for user-specific configuration. Tenzir\nrespects the XDG base directory specification and its environment variables.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"A path to a configuration file passed via ",(0,a.yg)("inlineCode",{parentName:"p"},"--config=/path/to/tenzir.yaml"),"."))),(0,a.yg)("p",null,"If there exist configuration files in multiple locations, options from all\nconfiguration files are merged in order, with the latter files receiving a\nhigher precedence than former ones. For lists, merging means concatenating the\nlist elements."),(0,a.yg)("h3",c({},{id:"plugin-configuration-files"}),"Plugin Configuration Files"),(0,a.yg)("p",null,"In addition to ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir/tenzir.yaml"),", Tenzir loads ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir/plugin/<plugin>.yaml"),"\nfor plugin-specific configuration for a given plugin named ",(0,a.yg)("inlineCode",{parentName:"p"},"<plugin>"),". The same\nrules apply as for the regular configuration file directory lookup."),(0,a.yg)("h3",c({},{id:"bare-mode"}),"Bare Mode"),(0,a.yg)("p",null,"Sometimes, users may wish to run Tenzir without side effects, e.g., when\nwrapping Tenzir in their own scripts. Run with ",(0,a.yg)("inlineCode",{parentName:"p"},"--bare-mode")," to disable looking\nat all system- and user-specified configuration paths."),(0,a.yg)("h2",c({},{id:"plugins"}),"Plugins"),(0,a.yg)("p",null,"Tenzir's ",(0,a.yg)("a",c({parentName:"p"},{href:"/architecture/plugins"}),"plugin architecture")," allows for\nflexible replacement and enhancement of functionality at various pre-defined\ncustomization points. There exist ",(0,a.yg)("strong",{parentName:"p"},"dynamic plugins")," that ship as shared\nlibraries and ",(0,a.yg)("strong",{parentName:"p"},"static plugins")," that are compiled into libtenzir."),(0,a.yg)("h3",c({},{id:"install-plugins"}),"Install plugins"),(0,a.yg)("p",null,"Dynamic plugins are just shared libraries and can be placed at a location of\nyour choice. We recommend putting them into a single directory and add the path\nto the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugin-dirs")," configuration option.."),(0,a.yg)("p",null,"Static plugins do not require installation since they are compiled into Tenzir."),(0,a.yg)("h3",c({},{id:"load-plugins"}),"Load plugins"),(0,a.yg)("p",null,"The configuration key ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugins")," specifies the list of plugins that should\nload at startup. The ",(0,a.yg)("inlineCode",{parentName:"p"},"all")," plugin name is reserved. When ",(0,a.yg)("inlineCode",{parentName:"p"},"all")," is specified\nTenzir loads all available plugins in the configured plugin directories. If no\n",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugins")," key is specified, Tenzir will load ",(0,a.yg)("inlineCode",{parentName:"p"},"all")," plugins by default. To\nload no plugins at all, specify a ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugins")," configuration key with no\nplugin values, e.g. the configuration file entry ",(0,a.yg)("inlineCode",{parentName:"p"},"plugins: []")," or launch\nparameter ",(0,a.yg)("inlineCode",{parentName:"p"},"--plugins="),"."),(0,a.yg)("p",null,"Since dynamic plugins are shared libraries, they must be loaded first into the\nrunning Tenzir process. At startup, Tenzir looks for the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugins")," inside\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.plugin-dirs")," directories configured in ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.yaml"),". For example:"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  plugin-dirs"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),".")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"/opt/foo/lib")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  plugins"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"example")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"/opt/bar/lib/libtenzir-plugin-example.so"))))),(0,a.yg)("p",null,"Before executing plugin code, Tenzir loads the specified plugins via ",(0,a.yg)("inlineCode",{parentName:"p"},"dlopen(3)"),"\nand attempts to initialize them as plugins. Part of the initialization is\npassing configuration options to the plugin. To this end, Tenzir looks for a\nYAML dictionary under ",(0,a.yg)("inlineCode",{parentName:"p"},"plugins.<name>")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.yaml")," file. For example:"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"# <configdir>/tenzir/tenzir.yaml")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"plugins"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  example"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    option"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"42"))))),(0,a.yg)("p",null,"Alternatively, you can specify a ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin/<plugin>.yaml")," file. The example\nconfigurations above and below are equivalent. This makes plugin deployments\neasier, as plugins can be installed and uninstalled alongside their respective\nconfiguration."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"# <configdir>/tenzir/plugin/example.yaml")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"option"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"42"))))),(0,a.yg)("p",null,"After initialization with the configuration options, the plugin is fully\noperational and Tenzir will call its functions at the plugin-specific\ncustomization points."),(0,a.yg)("h3",c({},{id:"list-plugins"}),"List plugins"),(0,a.yg)("p",null,"You can get the list of available plugins using the\n",(0,a.yg)("a",c({parentName:"p"},{href:"/operators/show"}),(0,a.yg)("inlineCode",{parentName:"a"},"show"))," operator:"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}})," 'show plugins'"))))),(0,a.yg)("h3",c({},{id:"block-plugins"}),"Block plugins"),(0,a.yg)("p",null,"As part of your Tenzir deployment, you can selectively disable plugins by name.\nFor example, if you do not want the ",(0,a.yg)("inlineCode",{parentName:"p"},"shell")," operator and the ",(0,a.yg)("inlineCode",{parentName:"p"},"kafka")," connector\nto be available, set this in your configuration:"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"# <configdir>/tenzir/tenzir.yaml")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  disable-plugins"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"shell")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"kafka"))))),(0,a.yg)("h2",c({},{id:"example-configuration"}),"Example Configuration"),(0,a.yg)("p",null,"Tenzir reads a configuration file at startup. Here is an example configuration\nthat you can adapt to your needs."),(0,a.yg)(i.A,{language:"yaml",mdxType:"CodeBlock"},o.A))}z.isMDXComponent=!0},64757:(e,n,t)=>{t.d(n,{A:()=>a});const a='# This is an example configuration file for Tenzir that shows all available\n# options. Options in angle brackets have their default value determined at\n# runtime.\n\n# Options that concern Tenzir.\ntenzir:\n  # The host and port to listen at for node-to-node connections to in the form\n  # `<host>:<port>`. Host or port may be emitted to use their defaults, which\n  # are localhost and 5158, respectively. Set the port to zero to automatically\n  # choose a port. Set to false to disable exposing an endpoint.\n  endpoint: localhost:5158\n\n  # The timeout for connecting to a Tenzir server. Set to 0 seconds to wait\n  # indefinitely.\n  connection-timeout: 5m\n\n  # The delay between two connection attempts. Set to 0s to try connecting\n  # without retries.\n  connection-retry-delay: 3s\n\n  # The file system path used for persistent state.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $STATE_DIRECTORY\n  #   - $PWD/tenzir.db\n  #state-directory:\n\n  # The file system path used for persistent state.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $CACHE_DIRECTORY\n  #   - $XDG_CACHE_HOME/tenzir\n  #   - $HOME/.cache/tenzir (Linux)\n  #   - $HOME/Library/Caches/tenzir (macOS)\n  #cache-directory:\n\n  # The file system path used for persistent state.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $CACHE_DIRECTORY\n  #   - $XDG_CACHE_HOME\n  #   - $XDG_HOME_DIR/.cache/tenzir (linux) or $XDG_HOME_DIR/Libraries/caches/tenzir (mac)\n  #   - $HOME/.cache/tenzir (linux) or $HOME/Libraries/caches/tenzir (mac)\n  #   - $TEMPORARY_DIRECTORY/tenzir/cache\n  # To determine $TEMPORARY_DIRECTORY, the values of TMPDIR, TMP, TEMP, TEMPDIR are\n  # checked in that order, and as a last resort "/tmp" is used.\n  #cache-directory:\n\n  # The file system path used for log files.\n  # Defaults to one of the following paths, selecting the first that is\n  # available:\n  #   - $LOGS_DIRECTORY/server.log\n  #   - <state-directory>/server.log\n  #log-file:\n\n  # The file system path used for client log files relative to the current\n  # working directory of the client. Note that this is disabled by default.\n  # If not specified no log files are written for clients at all.\n  client-log-file: "client.log"\n\n  # Format for printing individual log entries to the log-file.\n  # For a list of valid format specifiers, see spdlog format specification\n  # at https://github.com/gabime/spdlog/wiki/3.-Custom-formatting.\n  file-format: "[%Y-%m-%dT%T.%e%z] [%n] [%l] [%s:%#] %v"\n\n  # Configures the minimum severity of messages written to the log file.\n  # Possible values: quiet, error, warning, info, verbose, debug, trace.\n  # File logging is only available for commands that start a node (e.g.,\n  # tenzir-node). The levels above \'verbose\' are usually not available in\n  # release builds.\n  file-verbosity: debug\n\n  # Whether to enable automatic log rotation. If set to false, a new log file\n  # will be created when the size of the current log file exceeds 10 MiB.\n  disable-log-rotation: false\n\n  # The size limit when a log file should be rotated.\n  log-rotation-threshold: 10MiB\n\n  # Maximum number of log messages in the logger queue.\n  log-queue-size: 1000000\n\n  # The sink type to use for console logging. Possible values: stderr,\n  # syslog, journald. Note that \'journald\' can only be selected on linux\n  # systems, and only if Tenzir was built with journald support.\n  # The journald sink is used as default if Tenzir is started as a systemd\n  # service and the service is configured to use the journal for stderr,\n  # otherwise the default is the unstructured stderr sink.\n  #console-sink: stderr/journald\n\n  # Mode for console log output generation. Automatic renders color only when\n  # writing to a tty.\n  # Possible values: always, automatic, never. (default automatic)\n  console: automatic\n\n  # Format for printing individual log entries to the console. For a list\n  # of valid format specifiers, see spdlog format specification at\n  # https://github.com/gabime/spdlog/wiki/3.-Custom-formatting.\n  console-format: "%^[%T.%e] %v%$"\n\n  # Configures the minimum severity of messages written to the console.\n  # For a list of valid log levels, see file-verbosity.\n  console-verbosity: info\n\n  # List of directories to look for schema files in ascending order of\n  # priority.\n  schema-dirs: []\n\n  # Additional directories to load plugins specified using `tenzir.plugins`\n  # from.\n  plugin-dirs: []\n\n  # List of paths that contain statically configured packages.\n  # This setting is ignored unless the package manager plugin is enabled.\n  package-dirs: []\n\n  # The plugins to load at startup. For relative paths, Tenzir tries to find\n  # the files in the specified `tenzir.plugin-dirs`. The special values\n  # \'bundled\' and \'all\' enable autoloading of bundled and all plugins\n  # respectively. Note: Add `example` or `/path/to/libtenzir-plugin-example.so`\n  # to load the example plugin.\n  plugins: []\n\n  # Names of plugins and builtins to explicitly forbid from being used in\n  # Tenzir. For example, adding `shell` will prohibit use of the `shell`\n  # operator builtin, and adding `kafka` will prohibit use of the `kafka`\n  # connector plugin.\n  disable-plugins: []\n\n  # The unique ID of this node.\n  node-id: "node"\n\n  # Forbid unsafe location overrides for pipelines with the \'local\' and \'remote\'\n  # keywords, e.g., remotely reading from a file.\n  no-location-overrides: false\n\n  # The size of an index shard, expressed in number of events. This should\n  # be a power of 2.\n  max-partition-size: 4Mi\n\n  # Timeout after which an active partition is forcibly flushed, regardless of\n  # its size.\n  active-partition-timeout: 30 seconds\n\n  # Automatically rebuild undersized and outdated partitions in the background.\n  # The given number controls how much resources to spend on it. Set to 0 to\n  # disable.\n  automatic-rebuild: 1\n\n  # Timeout after which an automatic rebuild is triggered.\n  rebuild-interval: 2 hours\n\n  # Zstd compression level applied to the Feather store backend.\n  # zstd-compression-level: <default>\n\n  # Control how operator\'s calculate demand from their upstream operator. Note\n  # that this is an expert feature and should only be changed if you know what\n  # you are doing. All values may either be set to a number, or to a record\n  # containing `bytes` and `events` fields with numbers depending on the\n  # operator\'s input type.\n  demand:\n    # Issue demand only if room for at least this many elements is available.\n    # Must be greater than zero.\n    min-elements:\n      bytes: 128Ki\n      events: 8Ki\n    # Controls how many elements may be buffered until the operator stops\n    # issuing demand. Must be greater or equal to min-elements.\n    max-elements:\n      bytes: 4Mi\n      events: 254Ki\n    # Controls how many batches of elements may be buffered until the operator\n    # stops issuing demand. Must be greater than zero.\n    max-batches: 20\n\n  # Context configured as part of the configuration that are always available.\n  contexts:\n    # A unique name for the context that\'s used in the context, enrich, and\n    # lookup operators to refer to the context.\n    indicators:\n      # The type of the context.\n      type: bloom-filter\n      # Arguments for creating the context, depending on the type. Refer to the\n      # documentation of the individual context types to see the arguments they\n      # require. Note that changes to these arguments to not apply to any\n      # contexts that were previously created.\n      arguments:\n        capacity: 1B\n        fp-probability: 0.001\n\n  # The `index` key is used to adjust the false-positive rate of\n  # the first-level lookup data structures (called synopses) in the\n  # catalog. The lower the false-positive rate the more space will be\n  # required, so this setting can be used to manually tune the trade-off\n  # of performance vs. space.\n  index:\n    # The default false-positive rate for type synopses.\n    default-fp-rate: 0.01\n    # rules:\n    #   Every rule adjusts the behaviour of Tenzir for a set of targets.\n    #   Tenzir creates one synopsis per target. Targets can be either types\n    #   or field names.\n    #\n    #   fp-rate - false positive rate. Has effect on string and address type\n    #             targets\n    #\n    #   partition-index - Tenzir will not create dense index when set to false\n    #   - targets: [:ip]\n    #     fp-rate: 0.01\n\n  # The `tenzir-ctl start` command starts a new Tenzir server process.\n  start:\n\n    # Prints the endpoint for clients when the server is ready to accept\n    # connections. This comes in handy when letting the OS choose an\n    # available random port, i.e., when specifying 0 as port value.\n    print-endpoint: false\n\n    # Writes the endpoint for clients when the server is ready to accept\n    # connections to the specified destination. This comes in handy when letting\n    # the OS choose an available random port, i.e., when specifying 0 as port\n    # value, and `print-endpoint` is not sufficient.\n    #write-endpoint: /tmp/tenzir-node-endpoint\n\n    # An ordered list of commands to run inside the node after starting.\n    # As an example, to configure an auto-starting PCAP source that listens\n    # on the interface \'en0\' and lives inside the Tenzir node, add `spawn\n    # source pcap -i en0`.\n    # Note that commands are not executed sequentially but in parallel.\n    commands: []\n\n    # Triggers removal of old data when the disk budget is exceeded.\n    disk-budget-high: 0GiB\n\n    # When the budget was exceeded, data is erased until the disk space is\n    # below this value.\n    disk-budget-low: 0GiB\n\n    # Seconds between successive disk space checks.\n    disk-budget-check-interval: 90\n\n    # When erasing, how many partitions to erase in one go before rechecking\n    # the size of the database directory.\n    disk-budget-step-size: 1\n\n    # Binary to use for checking the size of the database directory. If left\n    # unset, Tenzir will recursively add up the size of all files in the\n    # database directory to compute the size. Mainly useful for e.g.\n    # compressed filesystem where raw file size is not the correct metric.\n    # Must be the absolute path to an executable file, which will get passed\n    # the database directory as its first and only argument.\n    #disk-budget-check-binary: /opt/tenzir/libexec/tenzir-df-percent.sh\n\n  # User-defined operators.\n  operators:\n    # The Zeek operator is an example that takes raw bytes in the form of a\n    # PCAP and then parses Zeek\'s output via the `zeek-json` format to generate\n    # a stream of events.\n    zeek:\n      shell "zeek -r - LogAscii::output_to_stdout=T\n             JSONStreaming::disable_default_logs=T\n             JSONStreaming::enable_log_rotation=F\n             json-streaming-logs"\n      | read zeek-json\n    # The Suricata operator is analogous to the above Zeek example, with the\n    # difference that we are using Suricata. The commmand line configures\n    # Suricata such that it reads PCAP on stdin and produces EVE JSON logs on\n    # stdout, which we then parse with the `suricata` format.\n    suricata:\n     shell "suricata -r /dev/stdin\n            --set outputs.1.eve-log.filename=/dev/stdout\n            --set logging.outputs.0.console.enabled=no"\n     | read suricata\n\n  # In addition to running pipelines interactively, you can also deploy\n  # *Pipelines as Code*. This infrastrucutre-as-code-like method differs from\n  # pipelines run on the command-line or through app.tenzir.com in two ways:\n  # 1. Pipelines deployed as code always start alongside the Tenzir node.\n  # 2. Deletion via the user interface is not allowed for pipelines configured\n  #    as code.\n  pipelines:\n    # A unique identifier for the pipeline that\'s used for metrics, diagnostics,\n    # and API calls interacting with the pipeline.\n    publish-suricata:\n      # An optional user-facing name for the pipeline. Defaults to the id.\n      name: Import Suricata from TCP\n      # The definition of the pipeline. Configured pipelines that fail to start\n      # cause the node to fail to start.\n      definition: |\n        from tcp://0.0.0.0:34343 read suricata --no-infer\n        | where event_type != "stats"\n        | publish suricata\n      # Pipelines that encounter an error stop running and show an error state.\n      # This option causes pipelines to automatically restart when they\n      # encounter an error instead. The first restart happens immediately, and\n      # subsequent restarts after the configured delay, defaulting to 1 minute.\n      # The following values are valid for this option:\n      # - Omit the option, or set it to null or false to disable.\n      # - Set the option to true to enable with the default delay of 1 minute.\n      # - Set the option to a valid duration to enable with a custom delay.\n      restart-on-error: 1 minute\n      # Pipelines that are unstoppable will run automatically and indefinitely.\n      # They are not able to pause or stop.\n      # If they do complete, they will end up in a failed state.\n      # If `restart-on-error` is enabled, they will restart after the specified\n      # duration.\n      unstoppable: false\n\n\n# The below settings are internal to CAF, and aren\'t checked by Tenzir directly.\n# Please be careful when changing these options. Note that some CAF options may\n# be in conflict with Tenzir options, and are only listed here for completeness.\ncaf:\n\n  # Options affecting the internal scheduler.\n  scheduler:\n\n    # Accepted alternative: "sharing".\n    policy: stealing\n\n    # Configures whether the scheduler generates profiling output.\n    enable-profiling: false\n\n    # Output file for profiler data (only if profiling is enabled).\n    #profiling-output-file: </dev/null>\n\n    # Measurement resolution in milliseconds (only if profiling is enabled).\n    profiling-resolution: 100ms\n\n    # Forces a fixed number of threads if set. Defaults to the number of\n    # available CPU cores if starting a Tenzir node, or *2* for client commands.\n    #max-threads: <number of cores>\n\n    # Maximum number of messages actors can consume in one run.\n    max-throughput: 500\n\n  # When using "stealing" as scheduler policy.\n  work-stealing:\n\n    # Number of zero-sleep-interval polling attempts.\n    aggressive-poll-attempts: 100\n\n    # Frequency of steal attempts during aggressive polling.\n    aggressive-steal-interval: 10\n\n    # Number of moderately aggressive polling attempts.\n    moderate-poll-attempts: 500\n\n    # Frequency of steal attempts during moderate polling.\n    moderate-steal-interval: 5\n\n    # Sleep interval between poll attempts.\n    moderate-sleep-duration: 50us\n\n    # Frequency of steal attempts during relaxed polling.\n    relaxed-steal-interval: 1\n\n    # Sleep interval between poll attempts.\n    relaxed-sleep-duration: 10ms\n\n  stream:\n\n    # Maximum delay for partial batches.\n    max-batch-delay: 15ms\n\n    # Selects an implementation for credit computation.\n    # Accepted alternative: "token-based".\n    credit-policy: token-based\n\n    # When using "size-based" as credit-policy.\n    size-based-policy:\n\n      # Desired batch size in bytes.\n      bytes-per-batch: 32\n\n      # Maximum input buffer size in bytes.\n      buffer-capacity: 256\n\n      # Frequency of collecting batch sizes.\n      sampling-rate: 100\n\n      # Frequency of re-calibrations.\n      calibration-interval: 1\n\n      # Factor for discounting older samples.\n      smoothing-factor: 2.5\n\n    # When using "token-based" as credit-policy.\n    token-based-policy:\n\n      # Number of elements per batch.\n      batch-size: 1\n\n      # Max. number of elements in the input buffer.\n      buffer-size: 64\n\n  # Collecting metrics can be resource consuming. This section is used for\n  # filtering what should and what should not be collected\n  metrics-filters:\n\n    # Rules for actor based metrics filtering.\n    actors:\n\n      # List of selected actors for run-time metrics.\n      includes: []\n\n      # List of excluded actors from run-time metrics.\n      excludes: []\n'}}]);