"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8056],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=p,f=h["".concat(i,".").concat(m)]||h[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:p,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(87462),p=n(63366),a=(n(67294),n(3905)),o={title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",keywords:["Apache APISIX","openEuler","APISIX","API Gateway","OpenResty","\u6b27\u62c9"],description:"\u6765\u81ea Apache APISIX \u793e\u533a\u7684\u7f57\u6cfd\u8f69\u548c\u6e29\u94ed\u5728 openEuler 9 \u6708 30 \u65e5\u53d1\u5e03\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff08 openEuler 21.09\uff09\u4e2d\uff0c\u4e3a OpenResty \u8fc1\u79fb\u5de5\u4f5c\u4e2d\u505a\u4e86\u975e\u5e38\u591a\u7684\u8d21\u732e\uff0c\u8ba9 OpenResty \u53ef\u4ee5\u5728\u6b27\u62c9\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5e73\u7a33\u9ad8\u6548\u7684\u8fd0\u884c\u3002",tags:["Events"]},c=void 0,i={permalink:"/blog/2021/10/01/openEuler",source:"@site/blog/2021/10/01/openEuler.md",title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",description:"\u6765\u81ea Apache APISIX \u793e\u533a\u7684\u7f57\u6cfd\u8f69\u548c\u6e29\u94ed\u5728 openEuler 9 \u6708 30 \u65e5\u53d1\u5e03\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff08 openEuler 21.09\uff09\u4e2d\uff0c\u4e3a OpenResty \u8fc1\u79fb\u5de5\u4f5c\u4e2d\u505a\u4e86\u975e\u5e38\u591a\u7684\u8d21\u732e\uff0c\u8ba9 OpenResty \u53ef\u4ee5\u5728\u6b27\u62c9\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5e73\u7a33\u9ad8\u6548\u7684\u8fd0\u884c\u3002",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:.495,truncated:!0,authors:[],prevItem:{title:"\u4fdd\u59c6\u7ea7\u6559\u7a0b\uff0c\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",permalink:"/blog/2021/10/09/apisix-ingress-techblog"},nextItem:{title:"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e00\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/blog/2021/09/30/weekly-report"}},l={authorsImageUrls:[]},u=[{value:"\u5173\u4e8e OpenEuler",id:"\u5173\u4e8e-openeuler",children:[]}],s={toc:u};function h(e){var t=e.components,n=(0,p.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6765\u81ea Apache APISIX \u793e\u533a\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"\u7f57\u6cfd\u8f69"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonming"},"\u6e29\u94ed"),"\u5728 openEuler 9 \u6708 30 \u65e5\u53d1\u5e03\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff08 ",(0,a.kt)("a",{parentName:"p",href:"https://openeuler.org/"},"openEuler 21.09")," \uff09\u4e2d\uff0c\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openresty/openresty"},"OpenResty")," \u8fc1\u79fb\u5de5\u4f5c\u4e2d\u505a\u4e86\u975e\u5e38\u591a\u7684\u8d21\u732e\uff0c\u8ba9 OpenResty \u53ef\u4ee5\u5728\u6b27\u62c9\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5e73\u7a33\u9ad8\u6548\u7684\u8fd0\u884c\u3002OpenResty \u7684\u7a33\u5b9a\u8fd0\u884c\u4e5f\u610f\u5473\u7740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u53ef\u4ee5\u987a\u7545\u5730\u8fd0\u884c\u5728 openEuler \u7cfb\u7edf\u4e0a\uff0cApache APISIX \u5e95\u5c42\u57fa\u4e8e OpenResty \u505a\u4e86\u4e00\u5b9a\u5f00\u53d1\u3002")),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u8ba4\u8bc6\u4e0b\u8fd9\u4e24\u4f4d\u793e\u533a\u6210\u5458\u5427\uff01"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"\u7f57\u6cfd\u8f69"),"\uff0cApache APISIX PMC\uff0cOpenResty \u7684\u6838\u5fc3\u5f00\u53d1\u8005\uff0cgit-extras \u9879\u76ee\u7684 Maintainer\uff0c\u64c5\u957f C\u3001Golang \u548c Lua\uff0c\u64b0\u5199\u8fc7\u591a\u7bc7\u6280\u672f\u5e72\u8d27\uff0c\u63a8\u8350\u9605\u8bfb\u300a ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua"},"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f"),"\u300b\u300a",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/30/etcd3-support-HTTP-access-perfectly"},"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f"),"\u300b\u3002"),(0,a.kt)("img",{src:"https://static.apiseven.com/202108/1633068755509-66b85782-ecca-43cc-bbcc-5a7b11cee0f4.png",alt:"\u7f57\u6cfd\u8f69",style:{width:"200px"}}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonming"},"\u6e29\u94ed"),"\uff0cApache Member\uff0cApache APISIX PMC Chair\uff0cOpenResty \u7684\u6838\u5fc3\u5f00\u53d1\u8005\uff0c\u524d 360 \u5f00\u6e90\u6280\u672f\u59d4\u5458\u4f1a\u59d4\u5458\uff0c\u5341\u4f59\u5e74\u5f00\u53d1\u7ecf\u9a8c\u3002\u8457\u6709\u6781\u5ba2\u65f6\u95f4\u4e13\u680f\u300a",(0,a.kt)("a",{parentName:"p",href:"https://time.geekbang.org/column/intro/186"},"OpenResty \u4ece\u5165\u95e8\u5230\u5b9e\u6218"),"\u300b\u3002"),(0,a.kt)("img",{src:"https://static.apiseven.com/202108/1633068755501-b52403ee-c43a-4da7-9ca7-46bc457da6fa.png",alt:"\u6e29\u94ed",style:{width:"300px"}}),(0,a.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0cApache APISIX \u7684\u5c0f\u4f19\u4f34\u4e0d\u4ec5\u4ec5\u5728\u672c\u793e\u533a\u6d3b\u8dc3\uff0c\u8fd8\u79ef\u6781\u53c2\u4e0e\u5230\u5176\u4ed6\u793e\u533a\u7684\u5f00\u6e90\u9879\u76ee\u4e2d\uff0c\u8fd9\u6b63\u662f\u5f00\u6e90\u7cbe\u795e\u7684\u4f53\u73b0\uff0c\u5f00\u6e90\u4e0d\u4ec5\u4ec5\u662f\u5f00\u653e\u6e90\u4ee3\u7801\uff0c\u66f4\u662f\u5f00\u653e\u7684\u793e\u533a\u3001\u5f00\u653e\u7684\u5fc3\u6001\uff0c\u793e\u533a\u95f4\u5408\u4f5c\u4e92\u52a9\uff0c\u5927\u5bb6\u4e00\u8d77\u8d21\u732e\u66f4\u597d\u7528\u7684\u5f00\u6e90\u4ea7\u54c1\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u4e24\u4f4d\u793e\u533a\u6210\u5458\uff0c\u8fd8\u8981\u591a\u4ecb\u7ecd\u4e00\u4e0b Apache APISIX\u3002 openEuler \u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff0821.09\uff09\u6781\u5927\u4e30\u5bcc\u4e86\u4e91\u539f\u751f\u76f8\u5173\u7684\u57fa\u7840\u8bbe\u65bd\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX"),"\u5929\u7136\u62e5\u6709\u4e91\u539f\u751f\u7684\u4f18\u52bf\uff0c\u652f\u6301\u88f8\u91d1\u5c5e\u3001\u865a\u62df\u673a\u3001Kubernetes\u3001ARM64\u3001\u516c\u6709\u4e91\u3001\u6df7\u5408\u4e91\u7b49\u591a\u79cd\u90e8\u7f72\u6a21\u5f0f\uff0c\u671f\u5f85 Apache APISIX \u5728 openEuler \u4e0a\u5e94\u7528\u4e8e\u66f4\u591a\u4e1a\u52a1\u3001\u66f4\u591a\u573a\u666f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633068859274-4db4d50e-2646-433b-94cf-b75727bf877e.png",alt:"Apache APISIX \u751f\u6001"})),(0,a.kt)("h2",{id:"\u5173\u4e8e-openeuler"},"\u5173\u4e8e OpenEuler"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openeuler.org/"},"openEuler")," \u662f\u4e00\u4e2a\u5f00\u6e90\u3001\u514d\u8d39\u7684 Linux \u53d1\u884c\u7248\u5e73\u53f0\uff0c\u901a\u8fc7\u793e\u533a\u5f62\u5f0f\u4e0e\u5168\u7403\u5f00\u53d1\u8005\u5171\u540c\u6784\u5efa\u5f00\u653e\u3001\u591a\u5143\u548c\u67b6\u6784\u5305\u5bb9\u7684\u8f6f\u4ef6\u751f\u6001\u4f53\u7cfb\u3002openEuler 21.09 \u662f\u9762\u5411\u6570\u5b57\u57fa\u7840\u8bbe\u65bd\u7684\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\u672c\uff0c\u62d3\u5c55\u4e86\u4e91\u8ba1\u7b97\u3001\u8fb9\u7f18\u8ba1\u7b97\u3001\u5d4c\u5165\u5f0f\u7b49\u573a\u666f\u5316\u7684\u5e94\u7528\u3002"))}h.isMDXComponent=!0}}]);