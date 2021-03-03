(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(229)),i={title:"limit-conn"},c={unversionedId:"plugins/limit-conn",id:"plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/limit-conn.md",slug:"/plugins/limit-conn",permalink:"/zh/docs/apisix/plugins/limit-conn",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/limit-conn.md",version:"current",sidebar:"docs",previous:{title:"limit-req",permalink:"/zh/docs/apisix/plugins/limit-req"},next:{title:"limit-count",permalink:"/zh/docs/apisix/plugins/limit-count"}},b=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\uff08\u6216\u5e76\u53d1\u8fde\u63a5\uff09\u63d2\u4ef6\u3002"),Object(l.b)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"conn"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"conn > 0"),Object(l.b)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6700\u5927\u5e76\u53d1\u8bf7\u6c42\u6570\u3002\u8d85\u8fc7 ",Object(l.b)("inlineCode",{parentName:"td"},"conn")," \u7684\u9650\u5236\u3001\u4f46\u662f\u4f4e\u4e8e ",Object(l.b)("inlineCode",{parentName:"td"},"conn")," + ",Object(l.b)("inlineCode",{parentName:"td"},"burst")," \u7684\u8bf7\u6c42\uff0c\u5c06\u88ab\u5ef6\u8fdf\u5904\u7406\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"burst"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"burst >= 0"),Object(l.b)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u88ab\u5ef6\u8fdf\u5904\u7406\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"default_conn_delay"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),Object(l.b)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684\u5178\u578b\u8fde\u63a5(\u6216\u8bf7\u6c42)\u7684\u5904\u7406\u5ef6\u8fdf\u65f6\u95f4\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name"]'),Object(l.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u6307\u5b9a\u7684\u9650\u5236\u5e76\u53d1\u7ea7\u522b\u7684\u5173\u952e\u5b57\uff0c\u53ef\u4ee5\u662f\u5ba2\u6237\u7aef IP \u6216\u670d\u52a1\u7aef IP\u3002",Object(l.b)("br",null),"\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e3b\u673a\u540d\uff08\u6216\u670d\u52a1\u5668\u533a\u57df\uff09\u4f5c\u4e3a\u5173\u952e\u5b57\uff0c\u4ee5\u4fbf\u9650\u5236\u6bcf\u4e2a\u4e3b\u673a\u540d\u7684\u5e76\u53d1\u6027\u3002 \u5426\u5219\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5ba2\u6237\u7aef\u5730\u5740\u4f5c\u4e3a\u5173\u952e\u5b57\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u907f\u514d\u5355\u4e2a\u5ba2\u6237\u7aef\u7528\u592a\u591a\u7684\u5e76\u884c\u8fde\u63a5\u6216\u8bf7\u6c42\u6df9\u6ca1\u6211\u4eec\u7684\u670d\u52a1\u3002 ",Object(l.b)("br",null),'\u5f53\u524d\u63a5\u53d7\u7684 key \u6709\uff1a"remote_addr"\uff08\u5ba2\u6237\u7aef IP \u5730\u5740\uff09, "server_addr"\uff08\u670d\u52a1\u7aef IP \u5730\u5740\uff09, \u8bf7\u6c42\u5934\u4e2d\u7684"X-Forwarded-For" \u6216 "X-Real-IP", "consumer_name"\uff08consumer \u7684 username\uff09\u3002')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rejected_code"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"503"),Object(l.b)("td",{parentName:"tr",align:null},"[200,...,599]"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7 ",Object(l.b)("inlineCode",{parentName:"td"},"conn")," + ",Object(l.b)("inlineCode",{parentName:"td"},"burst")," \u8fd9\u4e2a\u9608\u503c\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\uff1akey \u662f\u53ef\u4ee5\u88ab\u7528\u6237\u81ea\u5b9a\u4e49\u7684\uff0c\u53ea\u9700\u8981\u4fee\u6539\u63d2\u4ef6\u7684\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u5b8c\u6210\u3002\u5e76\u6ca1\u6709\u5728\u63d2\u4ef6\u4e2d\u653e\u5f00\u662f\u5904\u4e8e\u5b89\u5168\u7684\u8003\u8651\u3002")),Object(l.b)("h4",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 limit-conn \u63d2\u4ef6:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff1a\n",Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/limit-conn-1.png",alt:null})),Object(l.b)("p",null,"\u7136\u540e\u5728 route \u9875\u9762\u4e2d\u6dfb\u52a0 limit-conn \u63d2\u4ef6\uff1a\n",Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/limit-conn-2.png",alt:null})),Object(l.b)("h4",{id:"test-plugin"},"test plugin"),Object(l.b)("p",null,"\u4e0a\u9762\u542f\u7528\u7684\u63d2\u4ef6\u7684\u53c2\u6570\u8868\u793a\u53ea\u5141\u8bb8\u4e00\u4e2a\u5e76\u53d1\u8bf7\u6c42\u3002 \u5f53\u6536\u5230\u591a\u4e2a\u5e76\u53d1\u8bf7\u6c42\u65f6\uff0c\u5c06\u76f4\u63a5\u8fd4\u56de 503 \u62d2\u7edd\u8bf7\u6c42\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),Object(l.b)("p",null,"\u8fd9\u5c31\u8868\u793a limit-conn \u63d2\u4ef6\u751f\u6548\u4e86\u3002"),Object(l.b)("h4",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),Object(l.b)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 limit-conn \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 limit-conn \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.a.createElement(s,c(c({ref:t},o),{},{components:n})):a.a.createElement(s,c({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);