"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43154],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(r),f=o,m=h["".concat(u,".").concat(f)]||h[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29313:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",author:"\u5434\u8212\u65f8",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["APISIX","Apache APISIX","Chaos Mesh","\u7a33\u5b9a\u6027"],description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u591a\u79cd\u573a\u666f\u4e0b\u4f7f\u7528 Chaos Mesh\uff0c\u4e3a Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027\u3002",tags:["Practical Case"]},i=void 0,u={permalink:"/zh/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability",source:"@site/blog/2021-06-16-Chaos-Mesh-helps-Apache-APISIX-improve-stability.md",title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u591a\u79cd\u573a\u666f\u4e0b\u4f7f\u7528 Chaos Mesh\uff0c\u4e3a Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027\u3002",date:"2021-06-16T00:00:00.000Z",formattedDate:"2021\u5e746\u670816\u65e5",tags:[{label:"Practical Case",permalink:"/zh/blog/tags/practical-case"}],readingTime:1.185,truncated:!0,authors:[{name:"\u5434\u8212\u65f8",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",permalink:"/zh/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement"},nextItem:{title:"Apache APISIX \u548c Envoy \u6027\u80fd\u5927\u6bd4\u62fc",permalink:"/zh/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison"}},p={authorsImageUrls:[void 0]},s=[],l={toc:s};function h(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u591a\u79cd\u573a\u666f\u4e0b\u4f7f\u7528 Chaos Mesh\uff0c\u4e3a Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027\u3002")))}h.isMDXComponent=!0}}]);