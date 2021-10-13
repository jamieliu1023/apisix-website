"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42241],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),h=a,m=f["".concat(u,".").concat(h)]||f[h]||s[h]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c={title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",author:"\u6731\u6b23\u6b23",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Okta","\u96c6\u4e2d\u8ba4\u8bc1"],description:"\u672c\u6587\u5c55\u793a\u4e86\u4f7f\u7528 Apache APISIX OpenID Connect Plugin \u8fdb\u884c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002 \u672c\u6587\u5305\u542b\u4e86\u5bf9 Apache APISIX \u548c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u6982\u5ff5\u4ecb\u7ecd\uff0c\u5c55\u793a\u4e86\u5728 Apache APISIX \u4e2d\u76f4\u63a5\u5efa\u7acb\u6765\u81ea Okta \u7684\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002\u8fd9\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u7684\u65b9\u6cd5\u51cf\u5c11\u4e86\u5f00\u53d1\u8005\u7684\u5b66\u4e60\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u63d0\u4f9b\u4e86\u5b89\u5168\u548c\u7cbe\u7b80\u7684\u7528\u6237\u4f53\u9a8c\u3002",tags:["Practical Case"]},i=void 0,u={permalink:"/zh/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication.md",title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",description:"\u672c\u6587\u5c55\u793a\u4e86\u4f7f\u7528 Apache APISIX OpenID Connect Plugin \u8fdb\u884c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002 \u672c\u6587\u5305\u542b\u4e86\u5bf9 Apache APISIX \u548c Okta \u96c6\u4e2d\u8ba4\u8bc1\u7684\u6982\u5ff5\u4ecb\u7ecd\uff0c\u5c55\u793a\u4e86\u5728 Apache APISIX \u4e2d\u76f4\u63a5\u5efa\u7acb\u6765\u81ea Okta \u7684\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002\u8fd9\u79cd\u96c6\u4e2d\u8ba4\u8bc1\u7684\u65b9\u6cd5\u51cf\u5c11\u4e86\u5f00\u53d1\u8005\u7684\u5b66\u4e60\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u63d0\u4f9b\u4e86\u5b89\u5168\u548c\u7cbe\u7b80\u7684\u7528\u6237\u4f53\u9a8c\u3002",date:"2021-08-25T00:00:00.000Z",formattedDate:"2021\u5e748\u670825\u65e5",tags:[{label:"Practical Case",permalink:"/zh/blog/tags/practical-case"}],readingTime:3.31,truncated:!0,authors:[{name:"\u6731\u6b23\u6b23",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"Authorization with Casbin in Apache APISIX",permalink:"/zh/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX"},nextItem:{title:"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f",permalink:"/zh/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76f8\u6bd4\u8f83\u4f20\u7edf\u8ba4\u8bc1\u6a21\u5f0f\uff0c\u96c6\u4e2d\u8ba4\u8bc1\u6a21\u5f0f\u4e0b\u6709\u5982\u4e0b\u4f18\u70b9\uff1a\u7b2c\u4e00\uff0c\u7b80\u5316\u5e94\u7528\u5f00\u53d1\u6d41\u7a0b\uff0c\u964d\u4f4e\u5f00\u53d1\u5e94\u7528\u5de5\u4f5c\u91cf\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u907f\u514d\u5404\u4e2a\u5e94\u7528\u91cd\u590d\u5f00\u53d1\u8eab\u4efd\u8ba4\u8bc1\u4ee3\u7801\uff1b\u7b2c\u4e8c\uff0c\u63d0\u9ad8\u4e1a\u52a1\u7684\u5b89\u5168\u6027\uff0c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5f0f\u5728\u7f51\u5173\u5c42\u9762\u80fd\u591f\u53ca\u65f6\u62e6\u622a\u672a\u7ecf\u8eab\u4efd\u8ba4\u8bc1\u7684\u8bf7\u6c42\uff0c\u4fdd\u62a4\u540e\u7aef\u7684\u5e94\u7528\u3002")))}f.isMDXComponent=!0}}]);