(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(229)),b={title:"node-status"},i={unversionedId:"plugins/node-status",id:"plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/node-status.md",slug:"/plugins/node-status",permalink:"/zh/docs/apisix/plugins/node-status",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/node-status.md",version:"current"},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u63d2\u4ef6\u7b80\u4ecb",id:"\u63d2\u4ef6\u7b80\u4ecb",children:[]},{value:"\u63d2\u4ef6\u5c5e\u6027",id:"\u63d2\u4ef6\u5c5e\u6027",children:[]},{value:"\u63d2\u4ef6\u63a5\u53e3",id:"\u63d2\u4ef6\u63a5\u53e3",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8F%92%E4%BB%B6%E7%AE%80%E4%BB%8B"},Object(l.b)("strong",{parentName:"a"},"\u63d2\u4ef6\u7b80\u4ecb"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8F%92%E4%BB%B6%E5%B1%9E%E6%80%A7"},Object(l.b)("strong",{parentName:"a"},"\u63d2\u4ef6\u5c5e\u6027"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8F%92%E4%BB%B6%E6%8E%A5%E5%8F%A3"},Object(l.b)("strong",{parentName:"a"},"\u63d2\u4ef6\u63a5\u53e3"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%90%AF%E7%94%A8%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u542f\u7528\u63d2\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),Object(l.b)("h2",{id:"\u63d2\u4ef6\u7b80\u4ecb"},"\u63d2\u4ef6\u7b80\u4ecb"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"node-status")," \u662f ",Object(l.b)("inlineCode",{parentName:"p"},"APISIX")," \u7684\u8bf7\u6c42\u72b6\u6001\u67e5\u8be2\u63d2\u4ef6\uff0c\u8fd4\u56de\u57fa\u672c\u7684\u72b6\u6001\u4fe1\u606f\u3002"),Object(l.b)("h2",{id:"\u63d2\u4ef6\u5c5e\u6027"},"\u63d2\u4ef6\u5c5e\u6027"),Object(l.b)("p",null,"\u65e0\u3002"),Object(l.b)("h2",{id:"\u63d2\u4ef6\u63a5\u53e3"},"\u63d2\u4ef6\u63a5\u53e3"),Object(l.b)("p",null,"\u63d2\u4ef6\u589e\u52a0\u63a5\u53e3 ",Object(l.b)("inlineCode",{parentName:"p"},"/apisix/status"),"\uff0c\u53ef\u901a\u8fc7 ",Object(l.b)("a",{parentName:"p",href:"/zh/docs/apisix/plugin-interceptors"},"interceptors")," \u4fdd\u62a4\u8be5\u63a5\u53e3\u3002"),Object(l.b)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u914d\u7f6e\u6587\u4ef6 ",Object(l.b)("inlineCode",{parentName:"li"},"conf/config.yaml")," \u7684 plugin list \u4e2d\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"node-status"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),Object(l.b)("p",null,"\u542f\u52a8 ",Object(l.b)("inlineCode",{parentName:"p"},"APISIX")," \u4e4b\u540e\uff0c\u5373\u53ef\u8bbf\u95ee\u8be5\u63d2\u4ef6\u63d0\u4f9b\u7684\u63a5\u53e3\uff0c\u83b7\u5f97\u57fa\u672c\u7684\u72b6\u6001\u4fe1\u606f\u3002"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"\u5728\u521b\u5efa route \u65f6\u6dfb\u52a0\u63d2\u4ef6 ",Object(l.b)("inlineCode",{parentName:"li"},"node-status"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80:": 1\n        }\n    },\n    "plugins": {\n        "node-status":{}\n    }\n}\'\n')),Object(l.b)("p",null,"\u53d1\u9001\u8be5\u8bf7\u6c42\u7684\u524d\u63d0\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"apisix/conf/config.yaml")," \u4e2d\u5df2\u7ecf\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"p"},"node-status"),"\uff0c\u6b64\u65f6 ",Object(l.b)("inlineCode",{parentName:"p"},"node-status")," \u63d2\u4ef6\u5bf9\u8be5\u8bf7\u6c42\u5904\u7406\u65e0\u5f71\u54cd\uff0c\u6240\u4ee5\u4e00\u822c\u4e0d\u4f1a\u5c06 ",Object(l.b)("inlineCode",{parentName:"p"},"node-status")," \u63d2\u4ef6\u8bbe\u7f6e\u5230\u8def\u7531\u4e2d\u3002"),Object(l.b)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u53d1\u9001\u8bf7\u6c42")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:9080/apisix/status -i\nHTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"\u53c2\u6570\u8bf4\u660e")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(l.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status"),Object(l.b)("td",{parentName:"tr",align:null},"\u72b6\u6001\u4fe1\u606f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"total"),Object(l.b)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u603b\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"waiting"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7b49\u5f85\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u7a7a\u95f2\u8fde\u63a5\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"accepted"),Object(l.b)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u63a5\u53d7\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u603b\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"writing"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u5199\u7ed9\u5ba2\u6237\u7aef\u54cd\u5e94\u7684\u8fde\u63a5\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"handled"),Object(l.b)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u5904\u7406\u7684\u8fde\u63a5\u603b\u6570,\u901a\u5e38\u7b49\u4e8e accepted")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"active"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6d3b\u8dc3\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"reading"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u8bfb\u53d6\u8bf7\u6c42\u5934\u7684\u8fde\u63a5\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"APISIX uid \u4fe1\u606f\uff0c\u4fdd\u5b58\u5728 apisix/conf/apisix.uid")))),Object(l.b)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u914d\u7f6e\u6587\u4ef6 ",Object(l.b)("inlineCode",{parentName:"li"},"apisix/conf/config.yaml")," \u7684 plugin list \u4e2d\u5220\u9664 ",Object(l.b)("inlineCode",{parentName:"li"},"node-status"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"\u5220\u9664 route \u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"node-status")," \u63d2\u4ef6\u4fe1\u606f")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80": 1\n        }\n    },\n    "plugins": {}\n}\'\n')))}o.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),s=a,O=u["".concat(b,".").concat(s)]||u[s]||d[s]||l;return n?r.a.createElement(O,i(i({ref:t},p),{},{components:n})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);