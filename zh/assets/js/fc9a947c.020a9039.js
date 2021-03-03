(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),l=(n(0),n(229)),i={title:"redirect"},c={unversionedId:"plugins/redirect",id:"plugins/redirect",isDocsHomePage:!1,title:"redirect",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/redirect.md",slug:"/plugins/redirect",permalink:"/zh/docs/apisix/plugins/redirect",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/redirect.md",version:"current",sidebar:"docs",previous:{title:"serverless",permalink:"/zh/docs/apisix/plugins/serverless"},next:{title:"response-rewrite",permalink:"/zh/docs/apisix/plugins/response-rewrite"}},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],b={toc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"URI \u91cd\u5b9a\u5411\u63d2\u4ef6\u3002"),Object(l.b)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http_to_https"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",Object(l.b)("inlineCode",{parentName:"td"},"true")," \u5e76\u4e14\u8bf7\u6c42\u662f http \u65f6\uff0c\u4f1a\u81ea\u52a8 301 \u91cd\u5b9a\u5411\u4e3a https\uff0curi \u4fdd\u6301\u4e0d\u53d8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uri"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5305\u542b Nginx \u53d8\u91cf\u7684 URI\uff0c\u4f8b\u5982\uff1a",Object(l.b)("inlineCode",{parentName:"td"},"/test/index.html"),", ",Object(l.b)("inlineCode",{parentName:"td"},"$uri/index.html"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7c7b\u4f3c\u4e8e ",Object(l.b)("inlineCode",{parentName:"td"},"$ {xxx}")," \u7684\u65b9\u5f0f\u5f15\u7528\u53d8\u91cf\uff0c\u4ee5\u907f\u514d\u4ea7\u751f\u6b67\u4e49\uff0c\u4f8b\u5982\uff1a",Object(l.b)("inlineCode",{parentName:"td"},"${uri}foo/index.html"),"\u3002\u82e5\u4f60\u9700\u8981\u4fdd\u7559 ",Object(l.b)("inlineCode",{parentName:"td"},"$")," \u5b57\u7b26\uff0c\u90a3\u4e48\u4f7f\u7528\u5982\u4e0b\u683c\u5f0f\uff1a",Object(l.b)("inlineCode",{parentName:"td"},"/\\$foo/index.html"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ret_code"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"302"),Object(l.b)("td",{parentName:"tr",align:null},"[200, ...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u54cd\u5e94\u7801")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"http_to_https")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"uri")," \u4e24\u4e2a\u4e2d\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u3002"),Object(l.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u672c\u5b9e\u4f8b\uff0c\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"redirect")," \u63d2\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {\n        "redirect": {\n            "uri": "/test/default.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u65b0\u7684 URI \u4e2d\u4f7f\u7528 Nginx \u5185\u7f6e\u7684\u4efb\u610f\u53d8\u91cf\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test",\n    "plugins": {\n        "redirect": {\n            "uri": "$uri/index.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("h4",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(l.b)("p",null,"\u6d4b\u8bd5\u793a\u4f8b\u57fa\u4e8e\u4e0a\u8ff0\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/test/index.html -i\nHTTP/1.1 301 Moved Permanently\nDate: Wed, 23 Oct 2019 13:48:23 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: /test/default.html\n\n...\n")),Object(l.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u54cd\u5e94\u7801\u548c\u54cd\u5e94\u5934\u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"Location")," \u53c2\u6570\uff0c\u5b83\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'\n\u4e0b\u9762\u662f\u4e00\u4e2a\u5b9e\u73b0 http \u5230 https \u8df3\u8f6c\u7684\u793a\u4f8b\uff1a\n```shell\ncurl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),Object(l.b)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u79fb\u9664\u63d2\u4ef6\u914d\u7f6e\u4e2d\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u53ef\u7acb\u5373\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u8fd9\u65f6\u8be5\u63d2\u4ef6\u5df2\u88ab\u7981\u7528\u3002"))}o.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=o(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||l;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);