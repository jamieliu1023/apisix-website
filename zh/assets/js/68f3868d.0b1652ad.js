(self.webpackChunk=self.webpackChunk||[]).push([[88908],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,h=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11634:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",author:"\u738b\u9662\u751f",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Kong","Nginx","API \u7f51\u5173","\u5f00\u6e90"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u67b6\u6784\u6f14\u8fdb\u5386\u53f2\uff0c\u5bf9\u6bd4 Nginx \u548c Kong \u8fd9\u4e24\u4e2a\u6846\u67b6 Apache APISIX \u7684\u4f18\u52bf\u662f\u4ec0\u4e48\u3002",tags:["technology"]},p={permalink:"/zh/blog/2021/06/28/why-we-need-Apache-APISIX",source:"@site/blog/2021-06-28-why-we-need-Apache-APISIX.md",title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u67b6\u6784\u6f14\u8fdb\u5386\u53f2\uff0c\u5bf9\u6bd4 Nginx \u548c Kong \u8fd9\u4e24\u4e2a\u6846\u67b6 Apache APISIX \u7684\u4f18\u52bf\u662f\u4ec0\u4e48\u3002",date:"2021-06-28T00:00:00.000Z",formattedDate:"2021\u5e746\u670828\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:2.04,truncated:!0,prevItem:{title:"Apache APISIX 2.7.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/06/29/release-apache-apisix-2.7"},nextItem:{title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",permalink:"/zh/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"}},i=[],l={toc:i};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/membphis"},"@membphis"),", Apache APISIX PMC from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"api7.ai"))))}u.isMDXComponent=!0}}]);