"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76220],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c={title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",author:"\u76db\u5a01\u950b",keywords:["APISIX","Kong","Nginx","API \u7f51\u5173","BaaS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002",tags:["technology","practical case"]},i=void 0,l={permalink:"/zh/blog/2021/08/09/Apache-APISIX-in-Quliankeji",source:"@site/blog/2021-08-09-Apache-APISIX-in-Quliankeji.md",title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002",date:"2021-08-09T00:00:00.000Z",formattedDate:"2021\u5e748\u67089\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:2.215,truncated:!0,authors:[{name:"\u76db\u5a01\u950b"}],prevItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",permalink:"/zh/blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud"},nextItem:{title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx"}},p={authorsImageUrls:[void 0]},u=[],f={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002")))}s.isMDXComponent=!0}}]);