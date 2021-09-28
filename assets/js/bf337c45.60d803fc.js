"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24656],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76793:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u7eb5\u89c2\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u53d1\u5c55\u5386\u7a0b\uff0c\u4e5f\u5c11\u4e0d\u4e86 Apache APISIX \u7684\u80fd\u529b\u52a0\u6301",author:"\u9648\u7131\u5c71",keywords:["\u79fb\u52a8\u4e91\u5b58\u50a8","Apache APISIX","\u4e91\u670d\u52a1","API \u7f51\u5173"],description:"\u672c\u6587\u6574\u7406\u81ea\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u9648\u7131\u5c71\u5728 ApacheCon 2021 \u4e9a\u6d32\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u4e91\u662f\u5982\u4f55\u57fa\u4e8e Apache APISIX \u8fdb\u884c\u4ea7\u54c1\u7684\u5f00\u53d1\u548c\u529f\u80fd\u6539\u8fdb\u4e0e\u66f4\u65b0\uff0c\u6253\u9020\u51fa\u66f4\u5b8c\u5584\u7684\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u3002",tags:["User Case"]},i=void 0,u={permalink:"/blog/2021/09/13/china-mobile-cloud-usercase",source:"@site/blog/2021-09-13-china-mobile-cloud-usercase.md",title:"\u7eb5\u89c2\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u53d1\u5c55\u5386\u7a0b\uff0c\u4e5f\u5c11\u4e0d\u4e86 Apache APISIX \u7684\u80fd\u529b\u52a0\u6301",description:"\u672c\u6587\u6574\u7406\u81ea\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u9648\u7131\u5c71\u5728 ApacheCon 2021 \u4e9a\u6d32\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u4e91\u662f\u5982\u4f55\u57fa\u4e8e Apache APISIX \u8fdb\u884c\u4ea7\u54c1\u7684\u5f00\u53d1\u548c\u529f\u80fd\u6539\u8fdb\u4e0e\u66f4\u65b0\uff0c\u6253\u9020\u51fa\u66f4\u5b8c\u5584\u7684\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u3002",date:"2021-09-13T00:00:00.000Z",formattedDate:"September 13, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:1.495,truncated:!0,authors:[{name:"\u9648\u7131\u5c71"}],prevItem:{title:"Apache APISIX \u52a9\u529b\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\uff0c\u5b9e\u73b0\u5168\u9762\u5fae\u670d\u52a1\u6cbb\u7406",permalink:"/blog/2021/09/14/youzan"},nextItem:{title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",permalink:"/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6574\u7406\u81ea\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u9648\u7131\u5c71\u5728 ApacheCon 2021 \u4e9a\u6d32\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u4e91\u662f\u5982\u4f55\u57fa\u4e8e Apache APISIX \u8fdb\u884c\u4ea7\u54c1\u7684\u5f00\u53d1\u548c\u529f\u80fd\u6539\u8fdb\u4e0e\u66f4\u65b0\uff0c\u6253\u9020\u51fa\u66f4\u5b8c\u5584\u7684\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u3002")))}f.isMDXComponent=!0}}]);