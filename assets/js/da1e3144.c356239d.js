"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11031],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},32041:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"Debug Mode"},o=void 0,u={unversionedId:"architecture-design/debug-mode",id:"version-2.7/architecture-design/debug-mode",isDocsHomePage:!1,title:"Debug Mode",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/architecture-design/debug-mode.md",sourceDirName:"architecture-design",slug:"/architecture-design/debug-mode",permalink:"/docs/apisix/2.7/architecture-design/debug-mode",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/debug-mode.md",tags:[],version:"2.7",frontMatter:{title:"Debug Mode"},sidebar:"version-2.7/docs",previous:{title:"Router",permalink:"/docs/apisix/2.7/architecture-design/router"},next:{title:"Getting Started",permalink:"/docs/apisix/2.7/getting-started"}},d=[{value:"Basic Debug Mode",id:"basic-debug-mode",children:[]},{value:"Advanced Debug Mode",id:"advanced-debug-mode",children:[]}],c={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"basic-debug-mode"},"Basic Debug Mode"),(0,i.kt)("p",null,"Enable basic debug mode just by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.enable_debug = true")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," file."),(0,i.kt)("p",null,"e.g Using both ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-conn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," plugins for a ",(0,i.kt)("inlineCode",{parentName:"p"},"/hello")," request, there will have a response header called ",(0,i.kt)("inlineCode",{parentName:"p"},"Apisix-Plugins: limit-conn, limit-count"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:1984/hello -i\nHTTP/1.1 200 OK\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nApisix-Plugins: limit-conn, limit-count\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 1\nServer: openresty\n\nhello world\n")),(0,i.kt)("p",null,"If the information can not be delivered via HTTP response header, for example, the plugin is in stream\nsubsystem, the information will be logged in the error log with ",(0,i.kt)("inlineCode",{parentName:"p"},"warn")," level."),(0,i.kt)("h3",{id:"advanced-debug-mode"},"Advanced Debug Mode"),(0,i.kt)("p",null,"Enable advanced debug mode by modifying the configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," file. Because there will be a check every second, only the checker reads the ",(0,i.kt)("inlineCode",{parentName:"p"},"#END")," flag, and the file would be considered as closed."),(0,i.kt)("p",null,"The checker would judge whether the file data changed according to the last modification time of the file. If there has any change, reload it. If there was no change, skip this check. So it's hot reload for enabling or disabling advanced debug mode."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable/Disable hook debug trace. Target module function's input arguments or returned value would be printed once this option is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.name"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The module list name of hook which has enabled debug trace."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.log_level"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Logging levels for input arguments & returned value."),(0,i.kt)("td",{parentName:"tr",align:null},"warn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_input_args"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable/Disable input arguments print."),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_return_value"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable/Disable returned value print."),(0,i.kt)("td",{parentName:"tr",align:null},"true")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hook_conf:\n  enable: false # Enable/Disable Hook Debug Trace\n  name: hook_phase # The Module List Name of Hook which has enabled Debug Trace\n  log_level: warn # Logging Levels\n  is_print_input_args: true # Enable/Disable Input Arguments Print\n  is_print_return_value: true # Enable/Disable Returned Value Print\n\nhook_phase: # Module Function List, Name: hook_phase\n  apisix: # Referenced Module Name\n    - http_access_phase # Function Names\uff1aArray\n    - http_header_filter_phase\n    - http_body_filter_phase\n    - http_log_phase\n#END\n")))}p.isMDXComponent=!0}}]);