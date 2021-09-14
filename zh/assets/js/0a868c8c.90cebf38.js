"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51618],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return I}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(a),I=r,m=d["".concat(o,".").concat(I)]||d[I]||k[I]||i;return a?n.createElement(m,p(p({ref:e},s),{},{components:a})):n.createElement(m,p({ref:e},s))}));function I(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,p[1]=l;for(var c=2;c<i;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63478:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return c},toc:function(){return s},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p={title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",author:"\u6731\u6b23\u6b23",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Okta","\u96c6\u4e2d\u8ba4\u8bc1"],description:"\u672c\u6587\u5c55\u793a\u4e86\u4f7f\u7528 Apache APISIX OpenID Connect Plugin \u8fdb\u884c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002 \u672c\u6587\u5305\u542b\u4e86\u5bf9Apache APISIX \u548c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u6982\u5ff5\u4ecb\u7ecd\uff0c\u5c55\u793a\u4e86\u5728 Apache APISIX \u4e2d\u76f4\u63a5\u5efa\u7acb\u6765\u81ea Okta \u7684\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002\u8fd9\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u7684\u65b9\u6cd5\u51cf\u5c11\u4e86\u5f00\u53d1\u8005\u7684\u5b66\u4e60\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u63d0\u4f9b\u4e86\u5b89\u5168\u548c\u7cbe\u7b80\u7684\u7528\u6237\u4f53\u9a8c\u3002",tags:["technology","practical case"]},l=void 0,o={permalink:"/zh/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication",source:"@site/blog/2021-08-25-Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication.md",title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",description:"\u672c\u6587\u5c55\u793a\u4e86\u4f7f\u7528 Apache APISIX OpenID Connect Plugin \u8fdb\u884c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002 \u672c\u6587\u5305\u542b\u4e86\u5bf9Apache APISIX \u548c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u6982\u5ff5\u4ecb\u7ecd\uff0c\u5c55\u793a\u4e86\u5728 Apache APISIX \u4e2d\u76f4\u63a5\u5efa\u7acb\u6765\u81ea Okta \u7684\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002\u8fd9\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u7684\u65b9\u6cd5\u51cf\u5c11\u4e86\u5f00\u53d1\u8005\u7684\u5b66\u4e60\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u63d0\u4f9b\u4e86\u5b89\u5168\u548c\u7cbe\u7b80\u7684\u7528\u6237\u4f53\u9a8c\u3002",date:"2021-08-25T00:00:00.000Z",formattedDate:"2021\u5e748\u670825\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:3.395,truncated:!0,authors:[{name:"\u6731\u6b23\u6b23",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"Authorization with Casbin in Apache APISIX",permalink:"/zh/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX"},nextItem:{title:"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f",permalink:"/zh/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua"}},c={authorsImageUrls:[void 0]},s=[{value:"\u4ec0\u4e48\u662f Apache APISIX\uff1f",id:"\u4ec0\u4e48\u662f-apache-apisix\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f\u8eab\u4efd\u8ba4\u8bc1\uff1f",id:"\u4ec0\u4e48\u662f\u8eab\u4efd\u8ba4\u8bc1\uff1f",children:[{value:"\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f",id:"\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f",children:[]},{value:"\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f",id:"\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f",children:[]}]},{value:"\u4ec0\u4e48\u662f OpenID\uff1f",id:"\u4ec0\u4e48\u662f-openid\uff1f",children:[{value:"OpenID \u8ba4\u8bc1\u8fc7\u7a0b",id:"openid-\u8ba4\u8bc1\u8fc7\u7a0b",children:[]}]},{value:"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u914d\u7f6e Okta \u8ba4\u8bc1\uff1f",id:"\u5982\u4f55\u4f7f\u7528-apache-apisix-\u7684-openid-connect-\u63d2\u4ef6\u914d\u7f6e-okta-\u8ba4\u8bc1\uff1f",children:[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e Okta",id:"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e-okta",children:[]},{value:"\u5b89\u88c5 Apache APISIX",id:"\u5b89\u88c5-apache-apisix",children:[]},{value:"\u542f\u52a8 Apache APISIX \u5e76\u914d\u7f6e\u5bf9\u5e94\u7684\u8def\u7531",id:"\u542f\u52a8-apache-apisix-\u5e76\u914d\u7f6e\u5bf9\u5e94\u7684\u8def\u7531",children:[]},{value:"\u6b65\u9aa4\u56db\uff1a\u8bbf\u95ee Apache APISIX",id:"\u6b65\u9aa4\u56db\uff1a\u8bbf\u95ee-apache-apisix",children:[]}]},{value:"\u5173\u4e8e Okta",id:"\u5173\u4e8e-okta",children:[]},{value:"\u5173\u4e8e Apache APISIX",id:"\u5173\u4e8e-apache-apisix",children:[]}],k={toc:s};function d(t){var e=t.components,p=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/starsz"},"@\u6731\u6b23\u6b23")," \u662f",(0,i.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh"},"API7.AI"),"\u7684\u7cfb\u7edf\u5de5\u7a0b\u5e08\uff0c\u4e5f\u662f Apache APISIX \u9879\u76ee\u7684 committer\u3002\u4ed6\u662f\u4e00\u4e2a\u5f00\u6e90\u7231\u597d\u8005\uff0c\u4e5f\u662f\u4e00\u4e2a Golang \u5f00\u53d1\u8005\u3002\u73b0\u5728\u4ed6\u6b63\u5728\u4e3a Apache APISIX \u7684 control plane \u8d21\u732e\u4ee3\u7801\u5e76\u6267\u884c code review\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4ed6\u5728 Apache APISIX \u793e\u533a\u4e2d\u975e\u5e38\u6d3b\u8dc3\uff0c\u4e50\u4e8e\u56de\u7b54\u793e\u533a\u5185\u7684\u5404\u79cd\u95ee\u9898\u3002")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-apache-apisix\uff1f"},"\u4ec0\u4e48\u662f Apache APISIX\uff1f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002Apache APISIX \u4e0d\u4ec5\u652f\u6301\u63d2\u4ef6\u52a8\u6001\u53d8\u66f4\u548c\u70ed\u63d2\u62d4\uff0c\u800c\u4e14\u62e5\u6709\u4f17\u591a\u5b9e\u7528\u7684\u63d2\u4ef6\u3002Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u652f\u6301 OpenID\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8be5\u63d2\u4ef6\u5c06\u8eab\u4efd\u8ba4\u8bc1\u4ece\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\u66ff\u6362\u4e3a\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u8eab\u4efd\u8ba4\u8bc1\uff1f"},"\u4ec0\u4e48\u662f\u8eab\u4efd\u8ba4\u8bc1\uff1f"),(0,i.kt)("p",null,"\u8eab\u4efd\u8ba4\u8bc1\u662f\u6307\u901a\u8fc7\u4e00\u5b9a\u7684\u624b\u6bb5\uff0c\u5bf9\u7528\u6237\u7684\u8eab\u4efd\u8fdb\u884c\u9a8c\u8bc1\u3002\u5e94\u7528\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u8bc6\u522b\u7528\u6237\u8eab\u4efd\uff0c\u5e76\u6839\u636e\u7528\u6237\u8eab\u4efd ID \u4ece\u8eab\u4efd\u63d0\u4f9b\u65b9\uff08Identity Provider\uff09\u83b7\u53d6\u8be6\u7ec6\u7684\u7528\u6237\u5143\u6570\u636e\uff0c\u5e76\u4ee5\u6b64\u5224\u65ad\u7528\u6237\u662f\u5426\u62e5\u6709\u8bbf\u95ee\u6307\u5b9a\u8d44\u6e90\u7684\u6743\u9650\u3002\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5f0f\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f"),"\u3002"),(0,i.kt)("h3",{id:"\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f"},"\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5728\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\u4e0b\uff0c\u5404\u4e2a\u5e94\u7528\u670d\u52a1\u9700\u8981\u5355\u72ec\u652f\u6301\u8eab\u4efd\u8ba4\u8bc1\uff0c\u4f8b\u5982\u5f53\u7528\u6237\u672a\u767b\u5f55\u65f6\u8bbf\u95ee\u767b\u5f55\u63a5\u53e3\uff0c\u63a5\u53e3\u8fd4\u56de 301 \u8df3\u8f6c\u9875\u9762\u3002\u5e94\u7528\u9700\u8981\u5f00\u53d1\u7ef4\u62a4 Session \u4ee5\u53ca\u548c\u8eab\u4efd\u63d0\u4f9b\u5546\u7684\u8ba4\u8bc1\u4ea4\u4e92\u7b49\u903b\u8f91\u3002\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\u7684\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a\u9996\u5148\u7531\u7528\u6237\u53d1\u8d77\u8bf7\u6c42\uff08request\uff09\uff0c\u7136\u540e\u7531\u7f51\u5173\u63a5\u6536\u8bf7\u6c42\u5e76\u5c06\u5176\u8f6c\u53d1\u81f3\u5bf9\u5e94\u7684\u5e94\u7528\u670d\u52a1\uff0c\u6700\u540e\u7531\u5e94\u7528\u670d\u52a1\u4e0e\u8eab\u4efd\u63d0\u4f9b\u65b9\u5bf9\u63a5\uff0c\u5b8c\u6210\u8eab\u4efd\u8ba4\u8bc1\uff08authorization\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\u6d41\u7a0b\u56fe",src:a(74937).Z})),(0,i.kt)("h3",{id:"\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f"},"\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f"),(0,i.kt)("p",null,"\u4e0e\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\u4e0d\u540c\uff0c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5f0f\u628a\u7528\u6237\u8ba4\u8bc1\u4ece\u5e94\u7528\u670d\u52a1\u4e2d\u62bd\u79bb\u4e86\u51fa\u6765\uff0c\u4ee5 Apache APISIX \u4e3a\u4f8b\uff0c\u96c6\u4e2d\u8ba4\u8bc1\u7684\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a\u9996\u5148\u7531\u7528\u6237\u53d1\u8d77\u8bf7\u6c42\uff08request\uff09\uff0c\u7136\u540e\u7531\u524d\u7f6e\u7684\u7f51\u5173\u8d1f\u8d23\u7528\u6237\u8ba4\u8bc1\u6d41\u7a0b\uff0c\u4e0e\u8eab\u4efd\u63d0\u4f9b\u65b9\u5bf9\u63a5\uff0c\u5411\u8eab\u4efd\u63d0\u4f9b\u65b9\u53d1\u9001\u8eab\u4efd\u8ba4\u8bc1\uff08authorization\uff09\u8bf7\u6c42\u3002\u8eab\u4efd\u63d0\u4f9b\u65b9\u8fd4\u56de\u7528\u6237\u8eab\u4efd\u4fe1\u606f\uff08user info\uff09\u3002\u7f51\u5173\u5b8c\u6210\u7528\u6237\u8eab\u4efd\u8bc6\u522b\u540e\uff0c\u5c06\u7528\u6237\u8eab\u4efd\u4fe1\u606f\u901a\u8fc7\u8bf7\u6c42\u5934\u7684\u5f62\u5f0f\u8f6c\u53d1\u81f3\u540e\u7aef\u5e94\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\u6d41\u7a0b\u56fe",src:a(53726).Z})),(0,i.kt)("p",null,"\u76f8\u6bd4\u8f83\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\uff0c\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\u4e0b\u6709\u5982\u4e0b\u4f18\u70b9\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7b80\u5316\u5e94\u7528\u5f00\u53d1\u6d41\u7a0b\uff0c\u964d\u4f4e\u5f00\u53d1\u5e94\u7528\u5de5\u4f5c\u91cf\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u907f\u514d\u5404\u4e2a\u5e94\u7528\u91cd\u590d\u5f00\u53d1\u8eab\u4efd\u8ba4\u8bc1\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u63d0\u9ad8\u4e1a\u52a1\u7684\u5b89\u5168\u6027\uff0c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5f0f\u5728\u7f51\u5173\u5c42\u9762\u80fd\u591f\u53ca\u65f6\u62e6\u622a\u672a\u7ecf\u8eab\u4efd\u8ba4\u8bc1\u7684\u8bf7\u6c42\uff0c\u4fdd\u62a4\u540e\u7aef\u7684\u5e94\u7528\u3002")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-openid\uff1f"},"\u4ec0\u4e48\u662f OpenID\uff1f"),(0,i.kt)("p",null,"OpenID \u662f\u4e00\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\uff0c\u5b83\u662f\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u8eab\u4efd\u8ba4\u8bc1\u7cfb\u7edf\u3002\u4f7f\u7528 OpenID \u7684\u597d\u5904\u662f\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728\u4e00\u4e2a OpenID \u8eab\u4efd\u63d0\u4f9b\u65b9\u7684\u7f51\u7ad9\u4e0a\u6ce8\u518c\u548c\u767b\u5f55\uff0c\u4f7f\u7528\u4e00\u4efd\u8d26\u6237\u5bc6\u7801\u4fe1\u606f\u5373\u53ef\u8bbf\u95ee\u4e0d\u540c\u5e94\u7528\u3002Okta \u662f\u4e00\u4e2a\u5e38\u89c1\u7684 OpenID \u8eab\u4efd\u63d0\u4f9b\u65b9\uff0cApache APISIX OpenID Connect \u63d2\u4ef6\u652f\u6301 OpenID\uff0c\u6240\u4ee5\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8be5\u63d2\u4ef6\u5c06\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\u66ff\u6362\u4e3a\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\u3002"),(0,i.kt)("h3",{id:"openid-\u8ba4\u8bc1\u8fc7\u7a0b"},"OpenID \u8ba4\u8bc1\u8fc7\u7a0b"),(0,i.kt)("p",null,"OpenID \u8ba4\u8bc1\u8fc7\u7a0b\u6709\u4ee5\u4e0b 7 \u4e2a\u6b65\u9aa4\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"APISIX \u5411 Identity Provider \u53d1\u8d77\u8ba4\u8bc1\u8bf7\u6c42\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7528\u6237\u5728 Identity Provider \u4e0a\u767b\u5f55\u5e76\u8ba4\u8bc1\u8eab\u4efd\u3002"),(0,i.kt)("li",{parentName:"ol"},"Identity Provider \u643a\u5e26 Authorization Code \u8fd4\u56de APISIX\u3002"),(0,i.kt)("li",{parentName:"ol"},"APISIX \u4f7f\u7528\u4ece\u8bf7\u6c42\u53c2\u6570\u4e2d\u63d0\u53d6\u5230\u7684 Code \u8bf7\u6c42 Identity Provider\u3002"),(0,i.kt)("li",{parentName:"ol"},"Identity Provider \u5411 APISIX \u53d1\u9001\u5e94\u7b54\u6d88\u606f\uff0c\u91cc\u9762\u5305\u542b\u4e86 ID Token \u548c Access Token\u3002"),(0,i.kt)("li",{parentName:"ol"},"APISIX \u5c06 Access Token \u53d1\u9001\u5230 Identity Provider \u7684 User Endpoint\uff0c\u4ee5\u8fdb\u884c\u83b7\u53d6\u7528\u6237\u8eab\u4efd\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8ba4\u8bc1\u540e\uff0cUser Endpoint \u5c06 User info \u53d1\u9001\u5230 APISIX\uff0c\u5b8c\u6210\u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenID \u8ba4\u8bc1\u6d41\u7a0b\u56fe",src:a(6896).Z})),(0,i.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-apache-apisix-\u7684-openid-connect-\u63d2\u4ef6\u914d\u7f6e-okta-\u8ba4\u8bc1\uff1f"},"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u914d\u7f6e Okta \u8ba4\u8bc1\uff1f"),(0,i.kt)("p",null,"\u4f7f\u7528 Apache APISIX OpenID Connect \u63d2\u4ef6\u914d\u7f6e Okta \u8ba4\u8bc1\u7684\u8fc7\u7a0b\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u4e09\u6b65\u5373\u53ef\u5b8c\u6210 Okta \u914d\u7f6e \uff0c\u4ece\u4f20\u7edf\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5f0f\u5207\u6362\u5230\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5f0f\u3002\u4e0b\u6587\u8bb2\u8ff0\u4e86\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u914d\u7f6e Okta \u8ba4\u8bc1\u7684\u64cd\u4f5c\u6b65\u9aa4\u3002"),(0,i.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,i.kt)("p",null,"\u5df2\u6709 Okta \u8d26\u53f7\u3002"),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e-okta"},"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e Okta"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u767b\u5f55\u4f60\u7684 Okta \u8d26\u53f7\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a Okta \u5e94\u7528\uff0c\u9009\u62e9 OIDC \u767b\u5f55\u6a21\u5f0f\u4ee5\u53ca Web Application \u5e94\u7528\u7c7b\u578b\u3002\n",(0,i.kt)("img",{alt:"\u521b\u5efa\u4e00\u4e2a Okta \u5e94\u7528",src:a(17054).Z}),(0,i.kt)("img",{alt:"\u9009\u62e9 OIDC \u767b\u5f55\u6a21\u5f0f\u4ee5\u53ca Web Application \u5e94\u7528\u7c7b\u578b",src:a(54109).Z})),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u767b\u5f55\u548c\u767b\u51fa\u7684\u8df3\u8f6c URL\u3002\n\u5176\u4e2d \u201cSign-in redirect URIs\u201d \u4e3a\u767b\u5f55\u6210\u529f\u5141\u8bb8\u8df3\u8f6c\u7684\u94fe\u63a5\u5730\u5740\uff0c\u201cSign-out redirect URIs\u201d \u8868\u793a\u767b\u51fa\u4e4b\u540e\u8df3\u8f6c\u7684\u94fe\u63a5\u5730\u5740\u3002\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u767b\u5f55\u6210\u529f\u8df3\u8f6c\u548c\u767b\u51fa\u4e4b\u540e\u8df3\u8f6c\u7684\u94fe\u63a5\u5730\u5740\u90fd\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:9080/"),"\u3002\n",(0,i.kt)("img",{alt:"\u8bbe\u7f6e\u767b\u5f55\u548c\u767b\u51fa\u7684\u8df3\u8f6c URL",src:a(36090).Z})),(0,i.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u8bbe\u7f6e\u4ee5\u540e\uff0c\u5355\u51fb\u201cSave\u201d\u4fdd\u5b58\u4fee\u6539\u3002\n",(0,i.kt)("img",{alt:"\u4fdd\u5b58\u4fee\u6539",src:a(87033).Z})),(0,i.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u5e94\u7528\u7684 General \u9875\u9762\uff0c\u83b7\u53d6\u4ee5\u4e0b\u914d\u7f6e\uff0c\u914d\u7f6e Apache APISIX OpenID Connect \u65f6\u9700\u8981\u63d0\u4f9b\u8fd9\u4e9b\u4fe1\u606f\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client ID\uff1aOAuth client ID\uff0c\u5373\u5e94\u7528\u7684 ID\uff0c\u4e0e\u4e0b\u6587\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),"  \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"{YOUR_CLIENT_ID}")," \u5bf9\u5e94\u3002"),(0,i.kt)("li",{parentName:"ul"},"Client secret\uff1aOAuth client secret\uff0c\u5373\u5e94\u7528\u5bc6\u94a5\uff0c\u4e0e\u4e0b\u6587\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret"),"  \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"{YOUR_CLIENT_SECRET}")," \u5bf9\u5e94\u3002"),(0,i.kt)("li",{parentName:"ul"},"Okta domain\uff1a\u5e94\u7528\u4f7f\u7528\u7684\u57df\u540d\uff0c\u4e0e\u4e0b\u6587\u7684 discovery  \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"{YOUR_ISSUER}")," \u5bf9\u5e94\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f",src:a(46719).Z})),(0,i.kt)("h3",{id:"\u5b89\u88c5-apache-apisix"},"\u5b89\u88c5 Apache APISIX"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6e90\u7801\u5305\u3001Docker\u3001Helm Chart \u7b49\u591a\u79cd\u65b9\u5f0f\u6765\u5b89\u88c5 Apache APISIX\u3002"),(0,i.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("p",null,"Apache APISIX \u7684\u8fd0\u884c\u73af\u5883\u9700\u8981\u4f9d\u8d56 NGINX \u548c etcd\uff0c\u6240\u4ee5\u5728\u5b89\u88c5 Apache APISIX \u524d\uff0c\u8bf7\u6839\u636e\u60a8\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u5bf9\u5e94\u7684\u4f9d\u8d56\u3002\u6211\u4eec\u63d0\u4f9b\u4e86 CentOS7\u3001Fedora 31 & 32 \u3001Ubuntu 16.04 & 18.04\u3001 Debian 9 & 10 \u548c MacOS \u4e0a\u7684\u4f9d\u8d56\u5b89\u88c5\u64cd\u4f5c\u6b65\u9aa4\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/install-dependencies/"},"\u5b89\u88c5\u4f9d\u8d56"),"\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7 Docker \u6216 Helm Chart \u5b89\u88c5 Apache APISIX \u65f6\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u6240\u9700\u7684 NGINX \u548c etcd\uff0c\u8bf7\u53c2\u7167\u5404\u81ea\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,i.kt)("h4",{id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5\uff08centos-7\uff09"},"\u901a\u8fc7 RPM \u5305\u5b89\u88c5\uff08CentOS 7\uff09"),(0,i.kt)("p",null,"\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u9002\u7528\u4e8e CentOS 7 \u64cd\u4f5c\u7cfb\u7edf\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Apache APISIX\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.7/apisix-2.7-0.x86_64.rpm\n")),(0,i.kt)("h4",{id:"\u901a\u8fc7-docker-\u5b89\u88c5"},"\u901a\u8fc7 Docker \u5b89\u88c5"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"\u4f7f\u7528 Docker \u5b89\u88c5 Apache APISIX"),"\u3002"),(0,i.kt)("h4",{id:"\u901a\u8fc7-helm-chart-\u5b89\u88c5"},"\u901a\u8fc7 Helm Chart \u5b89\u88c5"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"\u4f7f\u7528 Helm Chart \u5b89\u88c5 Apache APISIX"),"\u3002"),(0,i.kt)("h4",{id:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5"},"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-2.7")," \u7684\u76ee\u5f55\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir apisix-2.7\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d Apache APISIX Release \u6e90\u7801\u5305\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/2.7/apache-apisix-2.7-src.tgz\n")),(0,i.kt)("p",{parentName:"li"},"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 Apache APISIX \u5b98\u7f51\u4e0b\u8f7d Apache APISIX Release \u6e90\u7801\u5305\u3002 Apache APISIX \u5b98\u7f51\u4e5f\u63d0\u4f9b\u4e86 Apache APISIX\u3001APISIX Dashboard \u548c APISIX Ingress Controller \u7684\u6e90\u7801\u5305\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/downloads"},"Apache APISIX \u5b98\u7f51-\u4e0b\u8f7d\u9875"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u538b Apache APISIX Release \u6e90\u7801\u5305\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-2.7-src.tgz -C apisix-2.7\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5\u8fd0\u884c\u65f6\u4f9d\u8d56\u7684 Lua \u5e93\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5207\u6362\u5230 apisix-2.7 \u76ee\u5f55\ncd apisix-2.7\n# \u521b\u5efa\u4f9d\u8d56\nmake deps\n")))),(0,i.kt)("h4",{id:"\u521d\u59cb\u5316\u4f9d\u8d56"},"\u521d\u59cb\u5316\u4f9d\u8d56"),(0,i.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316 NGINX \u914d\u7f6e\u6587\u4ef6\u548c etcd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize NGINX config file and etcd\nmake init\n")),(0,i.kt)("h3",{id:"\u542f\u52a8-apache-apisix-\u5e76\u914d\u7f6e\u5bf9\u5e94\u7684\u8def\u7531"},"\u542f\u52a8 Apache APISIX \u5e76\u914d\u7f6e\u5bf9\u5e94\u7684\u8def\u7531"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8 Apache APISIX\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u8def\u7531\u5e76\u914d\u7f6e OpenID Connect \u63d2\u4ef6\u3002"))),(0,i.kt)("p",null,"OpenID Connect \u914d\u7f6e\u5217\u8868\u5982\u4e0b\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"client_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"OAuth \u5ba2\u6237\u7aef ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"client_secret"),(0,i.kt)("td",{parentName:"tr",align:"left"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"OAuth \u5ba2\u6237\u7aef\u5bc6\u94a5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"discovery"),(0,i.kt)("td",{parentName:"tr",align:"left"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8eab\u4efd\u63d0\u4f9b\u5546\u7684\u670d\u52a1\u53d1\u73b0\u7aef\u70b9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,i.kt)("td",{parentName:"tr",align:"left"},"openid"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u8bbf\u95ee\u8d44\u6e90\u8303\u56f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"relm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"apisix"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a WWW-Authenticate \u54cd\u5e94\u5934\u9a8c\u8bc1\u4fe1\u606f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bearer_only"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u68c0\u67e5\u8bf7\u6c42\u5934\u4e2d\u7684 token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"logout_path"),(0,i.kt)("td",{parentName:"tr",align:"left"},"/logout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u767b\u51fa\u7684 URI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redirect_uri"),(0,i.kt)("td",{parentName:"tr",align:"left"},"request_uri"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8eab\u4efd\u63d0\u4f9b\u5546\u8df3\u8f6c\u56de\u6765\u7684 URI\uff0c\u9ed8\u8ba4\u4e3a\u8bf7\u6c42\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ssl_verify"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u8eab\u4efd\u63d0\u4f9b\u5546\u7684\u6821\u9a8c ssl \u8bc1\u4e66")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"introspection_endpoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8eab\u4efd\u63d0\u4f9b\u5546\u7684\u4ee4\u724c\u9a8c\u8bc1\u7aef\u70b9\u7684 URL\uff0c\u4e0d\u586b\u5219\u5c06\u4ece discovery \u54cd\u5e94\u4e2d\u63d0\u53d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"introspection_endpoint_auth_method"),(0,i.kt)("td",{parentName:"tr",align:"left"},"client_secret_basic"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ee4\u724c\u81ea\u7701\u7684\u8ba4\u8bc1\u65b9\u6cd5\u540d\u79f0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"public_key"),(0,i.kt)("td",{parentName:"tr",align:"left"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9a8c\u8bc1\u4ee4\u724c\u7684\u516c\u94a5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"token_signing_alg_values_expected"),(0,i.kt)("td",{parentName:"tr",align:"left"},'""'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9a8c\u8bc1\u4ee4\u724c\u7684\u7b97\u6cd5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"set_access_token_header"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5728\u8bf7\u6c42\u5934\u4e2d\u643a\u5e26 access token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"access_token_in_authorization_header"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true \u65f6\u5c06 access token \u653e\u7f6e\u5728 Authorization \u5934\u4e2d\uff0cfalse \u65f6\u5c06 access token \u653e\u7f6e\u5728 X-Access-Token \u5934\u4e2d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"set_id_token_header"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5c06 ID token \u643a\u5e26\u81f3 X-ID-Token \u8bf7\u6c42\u5934")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"set_userinfo_header"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5c06\u7528\u6237\u4fe1\u606f\u643a\u5e26\u81f3 X-Userinfo \u8bf7\u6c42\u5934")))),(0,i.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u901a\u8fc7 Apache APISIX Admin API \u8fdb\u884c\u521b\u5efa\u8def\u7531\uff0c\u8bbe\u7f6e\u8def\u7531\u7684\u4e0a\u6e38\u4e3a httpbin.org\u3002httpbin.org \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7528\u4e8e\u63a5\u6536\u8bf7\u6c42\u548c\u54cd\u5e94\u8bf7\u6c42\u7684\u540e\u7aef\u670d\u52a1\uff0c\u4e0b\u6587\u5c06\u4f7f\u7528 httpbin.org \u7684 get \u9875\u9762\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"http://httpbin.org/#/HTTP_Methods/get_get"},"http bin get"),"\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u9879\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/openid-connect/"},"Apache APISIX OpenID Connect Plugin"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl  -XPOST 127.0.0.1:9080/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d \'{\n    "uri":"/*",\n    "plugins":{\n        "openid-connect":{\n            "client_id":"{YOUR_CLIENT_ID}",\n            "client_secret":"{YOUR_CLIENT_SECRET}",\n            "discovery":"https://{YOUR_ISSUER}/.well-known/openid-configuration",\n            "scope":"openid profile",\n            "bearer_only":false,\n            "realm":"master",\n            "introspection_endpoint_auth_method":"client_secret_post",\n            "redirect_uri":"http://127.0.0.1:9080/"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "httpbin.org:80":1\n        }\n    }\n}\'\n')),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u56db\uff1a\u8bbf\u95ee-apache-apisix"},"\u6b65\u9aa4\u56db\uff1a\u8bbf\u95ee Apache APISIX"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bbf\u95ee ",(0,i.kt)("a",{parentName:"li",href:"http://127.0.0.1:9080/get"},"http://127.0.0.1:9080/get")," \uff0c\u56e0\u4e3a\u5f00\u542f\u4e86 OpenID Connect \u63d2\u4ef6\uff0c\u6240\u4ee5\u9875\u9762\u88ab\u91cd\u5b9a\u5411\u5230 Okta \u767b\u5f55\u9875\u9762\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"visit Okta login page",src:a(62887).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f93\u5165\u7528\u6237\u5728 Okta \u6ce8\u518c\u7684\u8d26\u53f7\u5bc6\u7801\uff0c\u5355\u51fb\u201cSign in\u201d\uff0c\u767b\u5f55 Okta \u8d26\u6237\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u767b\u5f55\u6210\u529f\u4e4b\u540e\uff0c\u80fd\u6210\u529f\u8bbf\u95ee\u5230 httpbin.org \u4e2d\u7684 get \u9875\u9762\u3002\u8be5 httpbin.org/get \u9875\u9762\u5c06\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"X-Access-Token": "******Y0RPcXRtc0FtWWVuX2JQaFo1ZVBvSlBNdlFHejN1dXY5elV3IiwiYWxnIjoiUlMyNTYifQ.***TVER3QUlPbWZYSVRzWHRxRWh2QUtQMWRzVDVGZHZnZzAiLCJpc3MiOiJodHRwczovL3FxdGVzdG1hbi5va3RhLmNvbSIsImF1ZCI6Imh0dHBzOi8vcXF0ZXN0bWFuLm9rdGEuY29tIiwic3ViIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImlhdCI6MTYyODEyNjIyNSwiZXhwIjoxNjI4MTI5ODI1LCJjaWQiOiIwb2ExMWc4ZDg3TzBGQ0dYZzY5NiIsInVpZCI6IjAwdWEwNWVjZEZmV0tMS3VvNjk1Iiwic2NwIjpbIm9wZW5pZCIsInByb2Zpb***.****iBshIcJhy8QNvzAFD0fV4gh7OAdTXFMu5k0hk0JeIU6Tfg_Mh-josfap38nxRN5hSWAvWSk8VNxokWTf1qlaRbypJrKI4ntadl1PrvG-HgUSFD0JpyqSQcv10TzVeSgBfOVD-czprG2Azhck-SvcjCNDV-qc3P9KoPQz0SRFX0wuAHWUbj1FRBq79YnoJfjkJKUHz3uu7qpTK89mxco8iyuIwB8fAxPMoXjIuU6-6Bw8kfZ4S2FFg3GeFtN-vE9bE5vFbP-JFQuwFLZNgqI0XO2S7l7Moa4mWm51r2fmV7p7rdpoNXYNerXOeZIYysQwe2_L****",\n"X-Id-Token": "******aTdDRDJnczF5RnlXMUtPZUtuSUpQdyIsImFtciI6WyJwd2QiXSwic3ViIjoiMDB1YTA1ZWNkRmZXS0xLdW82OTUiLCJpc3MiOiJodHRwczpcL1wvcXF0ZXN0bWFuLm9rdGEuY29tIiwiYXVkIjoiMG9hMTFnOGQ4N08wRkNHWGc2OTYiLCJuYW1lIjoiUGV0ZXIgWmh1IiwianRpIjoiSUQuNGdvZWo4OGUyX2RuWUI1VmFMeUt2djNTdVJTQWhGNS0tM2l3Z0p5TTcxTSIsInZlciI6MSwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImV4cCI6MTYyODEyOTgyNSwiaWRwIjoiMDBvYTA1OTFndHAzMDhFbm02OTUiLCJub25jZSI6ImY3MjhkZDMxMWRjNGY3MTI4YzlmNjViOGYzYjJkMDgyIiwiaWF0IjoxNjI4MTI2MjI1LCJhdXRoX3RpbWUi*****",\n"X-Userinfo": "*****lfbmFtZSI6IlpodSIsImxvY2FsZSI6ImVuLVVTIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsInVwZGF0ZWRfYXQiOjE2MjgwNzA1ODEsInpvbmVpbmZvIjoiQW1lcmljYVwvTG9zX0FuZ2VsZXMiLCJzdWIiOiIwMHVhMDVlY2RGZldLTEt1bzY5NSIsImdpdmVuX25hbWUiOiJQZXRlciIsIm5hbWUiOiJQZXRl****"\n')))),(0,i.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"X-Access-Token"),"\uff1aApache APISIX \u5c06\u4ece\u7528\u6237\u63d0\u4f9b\u5546\u83b7\u53d6\u5230\u7684 access token \u653e\u5165 X-Access-Token \u8bf7\u6c42\u5934\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u914d\u7f6e\u4e2d\u7684 access_token_in_authorization_header \u6765\u9009\u62e9\u662f\u5426\u653e\u5165 Authorization \u8bf7\u6c42\u5934\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"X-Access-Token",src:a(19379).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"X-Id-Token"),"\uff1aApache APISIX \u5c06\u4ece\u7528\u6237\u63d0\u4f9b\u5546\u83b7\u53d6\u5230\u7684 ID token \u901a\u8fc7 base64 \u7f16\u7801\u4e4b\u540e\u653e\u5165 X-Id-Token \u8bf7\u6c42\u5934\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u914d\u7f6e\u4e2d\u7684 set_id_token_header \u6765\u9009\u62e9\u662f\u5426\u5f00\u542f\u8be5\u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a\u4e3a\u5f00\u542f\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"X-Id-Token",src:a(56561).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"X-Userinfo"),"\uff1a  Apache APISIX \u5c06\u4ece\u7528\u6237\u63d0\u4f9b\u5546\u83b7\u53d6\u5230\u7684\u7528\u6237\u4fe1\u606f\uff0c\u901a\u8fc7 base64 \u7f16\u7801\u4e4b\u540e\u653e\u5165 X-Userinfo\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u914d\u7f6e\u4e2d\u7684 set_userinfo_header \u6765\u9009\u62e9\u662f\u5426\u5f00\u542f\u8be5\u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"X-Userinfo",src:a(79318).Z})),(0,i.kt)("p",null,"\u7531\u6b64\u53ef\u4ee5\u770b\u5230\uff0cApache APISIX \u5c06\u4f1a\u643a\u5e26 X-Access-Token,X-Id-Token,X-Userinfo \u4e09\u4e2a\u8bf7\u6c42\u5934\u4f20\u9012\u81f3\u4e0a\u6e38\u3002\u4e0a\u6e38\u53ef\u4ee5\u901a\u8fc7\u89e3\u6790\u8fd9\u51e0\u4e2a\u5934\u90e8\uff0c\u4ece\u800c\u83b7\u53d6\u5230\u7528\u6237 ID \u4fe1\u606f\u548c\u7528\u6237\u7684\u5143\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5c55\u793a\u4e86\u5728 Apache APISIX \u4e2d\u76f4\u63a5\u5efa\u7acb\u6765\u81ea Okta \u7684\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002\u53ea\u8981\u6ce8\u518c\u4e00\u4e2a\u514d\u8d39\u7684 Okta \u5f00\u53d1\u8005\u8d26\u6237\u5c31\u53ef\u4ee5\u8f7b\u677e\u5f00\u59cb\u4e86\u3002\u8fd9\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u7684\u65b9\u6cd5\u51cf\u5c11\u4e86\u5f00\u53d1\u8005\u7684\u5b66\u4e60\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u63d0\u4f9b\u4e86\u5b89\u5168\u548c\u7cbe\u7b80\u7684\u7528\u6237\u4f53\u9a8c\u3002"),(0,i.kt)("h2",{id:"\u5173\u4e8e-okta"},"\u5173\u4e8e Okta"),(0,i.kt)("p",null,"Okta \u662f\u4e00\u4e2a\u53ef\u5b9a\u5236\u7684\u3001\u5b89\u5168\u7684\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u89e3\u51b3\u65b9\u6848\u3002Okta \u53ef\u4ee5\u4e3a\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u8ba4\u8bc1\u548c\u6388\u6743\u3002\u4e0d\u9700\u8981\u81ea\u5df1\u7f16\u5199\u4ee3\u7801\uff0c\u5373\u53ef\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u76f4\u63a5\u83b7\u5f97\u53ef\u6269\u5c55\u7684\u8ba4\u8bc1\u3002\u60a8\u53ef\u4ee5\u5c06\u5e94\u7528\u7a0b\u5e8f\u8fde\u63a5\u5230Okta\uff0c\u5e76\u5b9a\u4e49\u7528\u6237\u7684\u767b\u5f55\u65b9\u5f0f\u3002\u6bcf\u6b21\u7528\u6237\u5c1d\u8bd5\u8ba4\u8bc1\u65f6\uff0cOkta\u90fd\u4f1a\u9a8c\u8bc1\u4ed6\u4eec\u7684\u8eab\u4efd\uff0c\u5e76\u5c06\u6240\u9700\u4fe1\u606f\u53d1\u56de\u7ed9\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("h2",{id:"\u5173\u4e8e-apache-apisix"},"\u5173\u4e8e Apache APISIX"),(0,i.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u5904\u7406\u4f20\u7edf\u7684\u5357\u5317\u5411\u6d41\u91cf\uff0c\u4ee5\u53ca\u670d\u52a1\u95f4\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u4e5f\u53ef\u4ee5\u5f53\u505a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"Kubernetes Ingress Controller")," \u6765\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u5168\u7403\u5df2\u6709\u6570\u767e\u5bb6\u4f01\u4e1a\u4f7f\u7528 Apache APISIX \u5904\u7406\u5173\u952e\u4e1a\u52a1\u6d41\u91cf\uff0c\u6db5\u76d6\u91d1\u878d\u3001\u4e92\u8054\u7f51\u3001\u5236\u9020\u3001\u96f6\u552e\u3001\u8fd0\u8425\u5546\u7b49\u7b49\uff0c\u6bd4\u5982\u7f8e\u56fd\u822a\u7a7a\u822a\u5929\u5c40\uff08NASA\uff09\u3001\u6b27\u76df\u7684\u6570\u5b57\u5de5\u5382\u3001\u4e2d\u56fd\u822a\u4fe1\u3001\u4e2d\u56fd\u79fb\u52a8\u3001\u817e\u8baf\u3001\u534e\u4e3a\u3001\u5fae\u535a\u3001\u7f51\u6613\u3001\u8d1d\u58f3\u627e\u623f\u3001360\u3001\u6cf0\u5eb7\u3001\u5948\u96ea\u7684\u8336\u7b49\u7b49\u3002"),(0,i.kt)("p",null,"Github\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,i.kt)("p",null,"\u5b98\u7f51\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"https://apisix.apache.org")))}d.isMDXComponent=!0},74937:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-1-6b6bfd5a6ac99bafa8ba33555499d2c9.png"},19379:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-10-4cf579f111e40baad9180625798ae68c.png"},56561:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-11-55634bfb527367e0fc0a4882cc9c0a23.png"},79318:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-12-ca8f94d3f7463d7d21eb0c327ff6f782.png"},53726:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-2-b929bda58f8f6facbd5ab27e9d401742.png"},6896:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-3-08fa96f4a7e30f486efde0ddce85f194.png"},17054:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-4-56246ab773e8514b6d7ff6e88a1ba575.png"},54109:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-5-27949e296923f482ca03e52147040e5b.png"},36090:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-6-f282419b7f52ab87487580f15b7789f3.png"},87033:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-7-b7ceb94a0cbdac698adcdd78dd290bbe.png"},46719:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-8-81d934986b33acd9cc80dbb6329c38e3.png"},62887:function(t,e,a){e.Z=a.p+"assets/images/2021-08-16-9-9752a521c7717adfb0fe94f20bb28c8d.png"}}]);