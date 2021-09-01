(self.webpackChunk=self.webpackChunk||[]).push([[51596],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34318:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={title:"gRPC Proxy"},l={unversionedId:"grpc-proxy",id:"version-2.7/grpc-proxy",isDocsHomePage:!1,title:"gRPC Proxy",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/grpc-proxy.md",sourceDirName:".",slug:"/grpc-proxy",permalink:"/docs/apisix/2.7/grpc-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/grpc-proxy.md",version:"2.7",frontMatter:{title:"gRPC Proxy"},sidebar:"version-2.7/docs",previous:{title:"Stream Proxy",permalink:"/docs/apisix/2.7/stream-proxy"},next:{title:"Customize Nginx configuration",permalink:"/docs/apisix/2.7/customize-nginx-configuration"}},p=[{value:"Parameters",id:"parameters",children:[{value:"Example",id:"example",children:[]},{value:"gRPCS",id:"grpcs",children:[]}]}],s={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"proxying gRPC traffic:\ngRPC client -> APISIX -> gRPC/gRPCS server"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheme"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,i.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uri"),": format likes /service/method, Example\uff1a/helloworld.Greeter/SayHello")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"create-proxying-grpc-route"},"create proxying gRPC route"),(0,i.kt)("p",null,"Here's an example, to proxying gRPC service by specified route:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"attention: the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,i.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,i.kt)("li",{parentName:"ul"},"attention: APISIX use TLS\u2011encrypted HTTP/2 to expose gRPC service, so need to ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/2.7/certificate"},"config SSL certificate")),(0,i.kt)("li",{parentName:"ul"},"attention: APISIX also support to expose gRPC service with plaintext HTTP/2, which does not rely on TLS, usually used to proxy gRPC service in intranet environment"),(0,i.kt)("li",{parentName:"ul"},"the grpc server example\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iresty/grpc_server_example"},"grpc_server_example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h4",{id:"testing-http2-with-tlsencrypted"},"testing HTTP/2 with TLS\u2011encrypted"),(0,i.kt)("p",null,"Invoking the route created before\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -insecure -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9443 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,i.kt)("p",null,"This means that the proxying is working."),(0,i.kt)("h4",{id:"testing-http2-with-plaintext"},"testing HTTP/2 with plaintext"),(0,i.kt)("p",null,"By default, the APISIX only listens to ",(0,i.kt)("inlineCode",{parentName:"p"},"9443")," for TLS\u2011encrypted HTTP/2. You can support HTTP/2 with plaintext via the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_listen")," section under ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    node_listen:\n        - port: 9080\n          enable_http2: false\n        - port: 9081\n          enable_http2: true\n")),(0,i.kt)("p",null,"Invoking the route created before\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -plaintext -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9081 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,i.kt)("p",null,"This means that the proxying is working."),(0,i.kt)("h3",{id:"grpcs"},"gRPCS"),(0,i.kt)("p",null,"If your gRPC service encrypts with TLS by itself (so called ",(0,i.kt)("inlineCode",{parentName:"p"},"gPRCS"),", gPRC + TLS), you need to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"grpcs"),". The example above runs gRPCS service on port 50052, to proxy gRPC request, we need to use the configuration below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpcs",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50052": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);