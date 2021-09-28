"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44984],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34084:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",author:"\u8042\u6c38",keywords:["Apache APISIX","\u65b0\u6d6a\u5fae\u535a","Weibo","API Gateway"],description:"\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002",tags:["User Case"]},i=void 0,u={permalink:"/zh/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX",source:"@site/blog/2021-07-14-the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX.md",title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",description:"\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002",date:"2021-07-14T00:00:00.000Z",formattedDate:"2021\u5e747\u670814\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:2.095,truncated:!0,authors:[{name:"\u8042\u6c38"}],prevItem:{title:"Apache APISIX x Kubernetes\uff1a\u6070\u5230\u597d\u5904\uff5c\u76f4\u64ad\u9884\u544a",permalink:"/zh/blog/2021/07/21/Apache-APISIX-Kubernetes"},nextItem:{title:"Apache APISIX has over 200 contributors in GitHub main repo! ",permalink:"/zh/blog/2021/07/06/celebrate-200-contributors"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65b0\u6d6a\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002")))}f.isMDXComponent=!0}}]);