"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51719],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(t),d=o,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83459:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i={title:"Control API"},l=void 0,p={unversionedId:"control-api",id:"version-2.8/control-api",isDocsHomePage:!1,title:"Control API",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/zh/docs/apisix/2.8/control-api",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/control-api.md",tags:[],version:"2.8",frontMatter:{title:"Control API"},sidebar:"version-2.8/docs",previous:{title:"Admin API",permalink:"/zh/docs/apisix/2.8/admin-api"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/apisix/2.8/FAQ"}},c=[{value:"Control API Added via plugin",id:"control-api-added-via-plugin",children:[]},{value:"Plugin independent Control API",id:"plugin-independent-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]}]}],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The control API can be used to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"expose APISIX internal state"),(0,a.kt)("li",{parentName:"ul"},"control the behavior of a single isolate APISIX data panel")),(0,a.kt)("p",null,"By default, the control API server is enabled and listens to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),". You can change it via\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"control")," section under ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,a.kt)("p",null,"Note that the control API server should not be configured to listen to the public traffic!"),(0,a.kt)("h2",{id:"control-api-added-via-plugin"},"Control API Added via plugin"),(0,a.kt)("p",null,"Plugin can add its control API when it is enabled.\nIf a plugin adds such a control API, please refer to each plugin's documentation for those APIs."),(0,a.kt)("h2",{id:"plugin-independent-control-api"},"Plugin independent Control API"),(0,a.kt)("p",null,"Here is the supported API:"),(0,a.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,a.kt)("p",null,"Introduced since ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.2"),"."),(0,a.kt)("p",null,"Return the jsonschema used by this APISIX instance in the format below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    }\n}\n')),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," part, only enabled plugins will be returned. Some plugins may lack\nof fields like ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer_schema")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),", it is depended on by the plugin's\ndefinition."),(0,a.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,a.kt)("p",null,"Introduced since ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.3"),"."),(0,a.kt)("p",null,"Return current ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/health-check"},"health check")," status in the format below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,a.kt)("p",null,"Each entry contains fields below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src_type: where the health checker comes from. The value is one of ",(0,a.kt)("inlineCode",{parentName:"li"},'["routes", "services", "upstreams"]'),"."),(0,a.kt)("li",{parentName:"ul"},"src_id: the id of object which creates the health checker. For example, if Upstream\nobject with id 1 creates a health checker, the ",(0,a.kt)("inlineCode",{parentName:"li"},"src_type")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"upstreams")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"src_id")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},"name: the name of the health checker."),(0,a.kt)("li",{parentName:"ul"},"nodes: the target nodes of the health checker."),(0,a.kt)("li",{parentName:"ul"},"healthy_nodes: the healthy node known by the health checker.")),(0,a.kt)("p",null,"User can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," can get the status of a health checker."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," returns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,a.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,a.kt)("p",null,"Introduced since ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.8"),"."),(0,a.kt)("p",null,"Trigger a full GC in the http subsystem.\nNote that when you enable stream proxy, APISIX will run another Lua VM for the stream subsystem. It won't trigger a full GC in this Lua VM ."))}u.isMDXComponent=!0}}]);