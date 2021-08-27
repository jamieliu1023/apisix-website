(self.webpackChunk=self.webpackChunk||[]).push([[38935],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66010:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Authorization with Casbin in Apache APISIX",author:"Casbin Community & Apache APISIX Community",keywords:["API gateway","APISIX","Apache APISIX","Casbin","RBAC"],description:"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model."},c={permalink:"/zh/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX",source:"@site/blog/2021-08-25-Auth-with-Casbin-in-Apache-APISIX.md",title:"Authorization with Casbin in Apache APISIX",description:"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",date:"2021-08-25T00:00:00.000Z",formattedDate:"2021\u5e748\u670825\u65e5",tags:[],readingTime:5.625,truncated:!0,nextItem:{title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",permalink:"/zh/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);