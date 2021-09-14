"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"proxy-rewrite"},o=void 0,p={unversionedId:"plugins/proxy-rewrite",id:"version-2.4/plugins/proxy-rewrite",isDocsHomePage:!1,title:"proxy-rewrite",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/plugins/proxy-rewrite.md",sourceDirName:"plugins",slug:"/plugins/proxy-rewrite",permalink:"/docs/apisix/2.4/plugins/proxy-rewrite",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/proxy-rewrite.md",tags:[],version:"2.4",frontMatter:{title:"proxy-rewrite"},sidebar:"version-2.4/docs",previous:{title:"response-rewrite",permalink:"/docs/apisix/2.4/plugins/response-rewrite"},next:{title:"grpc-transcode",permalink:"/docs/apisix/2.4/plugins/grpc-transcode"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," is an upstream proxy information rewriting plugin, which supports the rewriting of information such as ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scheme"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"http"'),(0,i.kt)("td",{parentName:"tr",align:null},'["http", "https"]'),(0,i.kt)("td",{parentName:"tr",align:null},"Upstream new ",(0,i.kt)("inlineCode",{parentName:"td"},"schema")," forwarding protocol. This option is deprecated. It's recommended to set the proxy ",(0,i.kt)("inlineCode",{parentName:"td"},"scheme")," in the Upstream object's ",(0,i.kt)("inlineCode",{parentName:"td"},"scheme")," field instead.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Upstream new ",(0,i.kt)("inlineCode",{parentName:"td"},"uri")," forwarding address. Supports the use of ",(0,i.kt)("a",{parentName:"td",href:"https://nginx.org/en/docs/http/ngx_http_core_module.html"},"Nginx variables"),". Variables must start with ",(0,i.kt)("inlineCode",{parentName:"td"},"$"),", such as ",(0,i.kt)("inlineCode",{parentName:"td"},"$arg_name"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Upstream new ",(0,i.kt)("inlineCode",{parentName:"td"},"uri")," forwarding address. Use regular expression to match URL from client, when the match is successful, the URL template will be forwarded upstream. If the match is not successful, the URL from the client will be forwarded to the upstream. When ",(0,i.kt)("inlineCode",{parentName:"td"},"uri")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"regex_uri")," are both exist, ",(0,i.kt)("inlineCode",{parentName:"td"},"uri")," is used first. For example: ",'[" ^/iresty/(.',(0,i.kt)("em",{parentName:"td"},")/(."),')/(.*)", "/$1-$2-$3"]',", the first element represents the matching regular expression and the second element represents the URL template that is forwarded to the upstream.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Upstream new ",(0,i.kt)("inlineCode",{parentName:"td"},"host")," forwarding address, example ",(0,i.kt)("inlineCode",{parentName:"td"},"iresty.com"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"headers"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Forward to the new ",(0,i.kt)("inlineCode",{parentName:"td"},"headers")," of the upstream, can set up multiple. If it exists, will rewrite the header, otherwise will add the header. You can set the corresponding value to an empty string to remove a header. Support the use of Nginx variables. Need to start with ",(0,i.kt)("inlineCode",{parentName:"td"},"$"),", such as ",(0,i.kt)("inlineCode",{parentName:"td"},"client_addr: $remote_addr"),": it means that the request header ",(0,i.kt)("inlineCode",{parentName:"td"},"client_addr")," is the client IP.")))),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Here's an example, enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy rewrite")," plugin on the specified route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/home.html",\n            "scheme": "http",\n            "host": "iresty.com",\n            "headers": {\n                "X-Api-Version": "v1",\n                "X-Api-Engine": "apisix",\n                "X-Api-useless": ""\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"Testing based on the above examples :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://127.0.0.1:9080/test/index.html\n")),(0,i.kt)("p",null,"Send the request and see upstream `access.log', if the output information is consistent with the configuration :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"127.0.0.1 - [26/Sep/2019:10:52:20 +0800] iresty.com GET /test/home.html HTTP/1.1 200 38 - curl/7.29.0 - 0.000 199 107\n")),(0,i.kt)("p",null,"This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy rewrite")," plugin is in effect."),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy rewrite")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy rewrite")," plugin has been disabled now. It works for other plugins."))}d.isMDXComponent=!0}}]);