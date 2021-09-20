"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48235],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69566:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c={title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",author:"\u5f20\u8d85",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4",keywords:["Apache APISIX","Service Mesh","\u670d\u52a1\u7f51\u683c","xDS"],description:"\u652f\u6d41\u79d1\u6280\u63a8\u51fa\u4e86\u57fa\u4e8eApache APISIX\u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848\uff0c\u5176\u4e2dApache APISIX\u4f5c\u4e3a\u670d\u52a1\u7f51\u683c\u7684\u6570\u636e\u9762\uff0c\u4e0e\u652f\u6301xDS\u534f\u8bae\u7684\u63a7\u5236\u9762\u914d\u5408\uff0c\u8fdb\u800c\u6258\u7ba1\u670d\u52a1\u95f4\u7684\u6d41\u91cf\u3002\u5728\u8be5\u65b9\u6848\u4e2d\u6709\u4e00\u4e2a\u4e0d\u53ef\u6216\u7f3a\u7684\u7ec4\u4ef6apisix-mesh-agent\uff0c\u5b83\u4f5c\u4e3a\u6570\u636e\u9762\u4e0e\u63a7\u5236\u9762\u7684\u4e2d\u95f4\u5c42\uff0c\u5b8c\u6210\u4e86\u5f88\u591a\u9002\u914d\u6027\u7684\u5de5\u4f5c\uff0c\u8fdb\u800c\u8ba9 Apache APISIX \u5728\u63a5\u8fd1\u96f6\u6539\u9020\u7684\u60c5\u51b5\u4e0b\u5373\u53ef\u5b8c\u7f8e\u5730\u5de5\u4f5c\u5728\u670d\u52a1\u7f51\u683c\u4e2d\u3002",tags:["technology"]},i=void 0,u={permalink:"/blog/2021/07/16/Analyze-Apache-APISIX-Mesh-Agent-deeply",source:"@site/blog/2021-07-16-Analyze-Apache-APISIX-Mesh-Agent-deeply.md",title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",description:"\u652f\u6d41\u79d1\u6280\u63a8\u51fa\u4e86\u57fa\u4e8eApache APISIX\u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848\uff0c\u5176\u4e2dApache APISIX\u4f5c\u4e3a\u670d\u52a1\u7f51\u683c\u7684\u6570\u636e\u9762\uff0c\u4e0e\u652f\u6301xDS\u534f\u8bae\u7684\u63a7\u5236\u9762\u914d\u5408\uff0c\u8fdb\u800c\u6258\u7ba1\u670d\u52a1\u95f4\u7684\u6d41\u91cf\u3002\u5728\u8be5\u65b9\u6848\u4e2d\u6709\u4e00\u4e2a\u4e0d\u53ef\u6216\u7f3a\u7684\u7ec4\u4ef6apisix-mesh-agent\uff0c\u5b83\u4f5c\u4e3a\u6570\u636e\u9762\u4e0e\u63a7\u5236\u9762\u7684\u4e2d\u95f4\u5c42\uff0c\u5b8c\u6210\u4e86\u5f88\u591a\u9002\u914d\u6027\u7684\u5de5\u4f5c\uff0c\u8fdb\u800c\u8ba9 Apache APISIX \u5728\u63a5\u8fd1\u96f6\u6539\u9020\u7684\u60c5\u51b5\u4e0b\u5373\u53ef\u5b8c\u7f8e\u5730\u5de5\u4f5c\u5728\u670d\u52a1\u7f51\u683c\u4e2d\u3002",date:"2021-07-16T00:00:00.000Z",formattedDate:"July 16, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:1.28,truncated:!0,authors:[{name:"\u5f20\u8d85",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"}],prevItem:{title:"Apache APISIX x Kubernetes\uff1a\u6070\u5230\u597d\u5904\uff5c\u76f4\u64ad\u9884\u544a",permalink:"/blog/2021/07/21/Apache-APISIX-Kubernetes"},nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",permalink:"/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u5bf9 apisix-mesh-agent \u8fdb\u884c\u5206\u6790\uff0c\u4ecb\u7ecd\u5176\u4f7f\u7528\u5b9a\u4f4d\u53ca\u5176\u5b9e\u73b0\u7684\u529f\u80fd\u3002")))}f.isMDXComponent=!0}}]);