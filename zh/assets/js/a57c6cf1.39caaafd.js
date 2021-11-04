"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2480],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||c;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58289:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return l}});var r=t(87462),i=t(63366),c=(t(67294),t(3905)),o={title:"Service"},a=void 0,u={unversionedId:"architecture-design/service",id:"version-2.8/architecture-design/service",isDocsHomePage:!1,title:"Service",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.8/architecture-design/service.md",sourceDirName:"architecture-design",slug:"/architecture-design/service",permalink:"/zh/docs/apisix/2.8/architecture-design/service",editUrl:"https://github.com/apache/apisix/edit/release/2.8/docs/zh/latest/architecture-design/service.md",tags:[],version:"2.8",frontMatter:{title:"Service"},sidebar:"version-2.8/docs",previous:{title:"Script",permalink:"/zh/docs/apisix/2.8/architecture-design/script"},next:{title:"Consumer",permalink:"/zh/docs/apisix/2.8/architecture-design/consumer"}},s=[],p={toc:s};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Service")," \u662f\u67d0\u7c7b API \u7684\u62bd\u8c61\uff08\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u7ec4 Route \u7684\u62bd\u8c61\uff09\u3002\u5b83\u901a\u5e38\u4e0e\u4e0a\u6e38\u670d\u52a1\u62bd\u8c61\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c",(0,c.kt)("inlineCode",{parentName:"p"},"Route"),"\n\u4e0e ",(0,c.kt)("inlineCode",{parentName:"p"},"Service")," \u4e4b\u95f4\uff0c\u901a\u5e38\u662f N:1 \u7684\u5173\u7cfb\uff0c\u53c2\u770b\u4e0b\u56fe\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.8/docs/assets/images/service-example.png",alt:"\u670d\u52a1\u793a\u4f8b"})),(0,c.kt)("p",null,"\u4e0d\u540c Route \u89c4\u5219\u540c\u65f6\u7ed1\u5b9a\u5230\u4e00\u4e2a Service \u4e0a\uff0c\u8fd9\u4e9b Route \u5c06\u5177\u6709\u76f8\u540c\u7684\u4e0a\u6e38\u548c\u63d2\u4ef6\u914d\u7f6e\uff0c\u51cf\u5c11\u5197\u4f59\u914d\u7f6e\u3002"),(0,c.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u542f\u7528\u9650\u6d41\u63d2\u4ef6\u7684 Service\uff0c\u7136\u540e\u628a id \u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"100"),"\u3001",(0,c.kt)("inlineCode",{parentName:"p"},"101")," \u7684 Route \u90fd\u7ed1\u5b9a\u5728\u8fd9\u4e2a Service \u4e0a\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'# create new Service\n$ curl http://127.0.0.1:9080/apisix/admin/services/200 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n\n# create new Route and reference the service by id `200`\ncurl http://127.0.0.1:9080/apisix/admin/routes/100 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "service_id": "200"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/101 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/foo/index.html",\n    "service_id": "200"\n}\'\n')),(0,c.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e3a Route \u6307\u5b9a\u4e0d\u540c\u7684\u63d2\u4ef6\u53c2\u6570\u6216\u4e0a\u6e38\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a Route \u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684\u9650\u6d41\u53c2\u6570\uff0c\u5176\u4ed6\u90e8\u5206\uff08\u6bd4\u5982\u4e0a\u6e38\uff09\u5219\u7ee7\u7eed\u4f7f\u7528 Service \u4e2d\u7684\u914d\u7f6e\u53c2\u6570\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/102 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/bar/index.html",\n    "id": "102",\n    "service_id": "200",\n    "plugins": {\n        "limit-count": {\n            "count": 2000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n')),(0,c.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53 Route \u548c Service \u90fd\u5f00\u542f\u540c\u4e00\u4e2a\u63d2\u4ef6\u65f6\uff0cRoute \u53c2\u6570\u7684\u4f18\u5148\u7ea7\u662f\u9ad8\u4e8e Service \u7684\u3002"))}l.isMDXComponent=!0}}]);