"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61329],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(r),m=o,I=h["".concat(p,".").concat(m)]||h[m]||s[m]||a;return r?n.createElement(I,c(c({ref:t},l),{},{components:r})):n.createElement(I,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95037:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",author:"\u5f20\u8d85",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4",keywords:["APISIX","Apache APISIX","\u670d\u52a1\u7f51\u683c","Service Mesh"],description:"\u9274\u4e8e Apache APISIX \u7684\u4f18\u79c0\u8bbe\u8ba1\uff0c\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u5c06 Apache APISIX \u7528\u4e8e\u5357\u5317\u5411\u6d41\u91cf\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u7528\u5b83\u7ba1\u7406\u670d\u52a1\u7f51\u683c\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u6211\u4eec\u901a\u8fc7\u5f15\u5165 APISIX-Mesh-Agent \u8fd9\u4e00\u7ec4\u4ef6\uff0c\u914d\u5408 Apache APISIX \u8fdb\u884c\u4f7f\u7528\uff0c\u4ece\u800c\u4f7f\u5f97 Apache APISIX \u53ef\u4ee5\u5bf9\u63a5\u4e1a\u5185\u5e7f\u6cdb\u4f7f\u7528\u7684\u670d\u52a1\u7f51\u683c\u63a7\u5236\u9762\uff0c\u4f8b\u5982\uff1a Istio \u548c Kuma \u7b49\u3002",tags:["news","technology"]},i=void 0,p={permalink:"/zh/blog/2021/05/31/\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",source:"@site/blog/2021-05-31-\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90.md",title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",description:"\u9274\u4e8e Apache APISIX \u7684\u4f18\u79c0\u8bbe\u8ba1\uff0c\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u5c06 Apache APISIX \u7528\u4e8e\u5357\u5317\u5411\u6d41\u91cf\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u7528\u5b83\u7ba1\u7406\u670d\u52a1\u7f51\u683c\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u6211\u4eec\u901a\u8fc7\u5f15\u5165 APISIX-Mesh-Agent \u8fd9\u4e00\u7ec4\u4ef6\uff0c\u914d\u5408 Apache APISIX \u8fdb\u884c\u4f7f\u7528\uff0c\u4ece\u800c\u4f7f\u5f97 Apache APISIX \u53ef\u4ee5\u5bf9\u63a5\u4e1a\u5185\u5e7f\u6cdb\u4f7f\u7528\u7684\u670d\u52a1\u7f51\u683c\u63a7\u5236\u9762\uff0c\u4f8b\u5982\uff1a Istio \u548c Kuma \u7b49\u3002",date:"2021-05-31T00:00:00.000Z",formattedDate:"2021\u5e745\u670831\u65e5",tags:[{label:"news",permalink:"/zh/blog/tags/news"},{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:.645,truncated:!0,authors:[{name:"\u5f20\u8d85",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"}],prevItem:{title:"\u6765\u81ea Apache APISIX committer \u7684\u7ecf\u9a8c\u5206\u4eab \u2014\u2014 \u7f16\u7a0b\u4e4b\u590f\u4e13\u8bbf",permalink:"/zh/blog/2021/06/03/experience-share-from-Apache-APISIX-committer"},nextItem:{title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03"}},u={authorsImageUrls:[void 0]},l=[],s={toc:l};function h(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9274\u4e8e Apache APISIX \u7684\u4f18\u79c0\u8bbe\u8ba1\uff0c\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u5c06 Apache APISIX \u7528\u4e8e\u5357\u5317\u5411\u6d41\u91cf\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u7528\u5b83\u7ba1\u7406\u670d\u52a1\u7f51\u683c\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u6211\u4eec\u901a\u8fc7\u5f15\u5165 APISIX-Mesh-Agent \u8fd9\u4e00\u7ec4\u4ef6\uff0c\u914d\u5408 Apache APISIX \u8fdb\u884c\u4f7f\u7528\uff0c\u4ece\u800c\u4f7f\u5f97 Apache APISIX \u53ef\u4ee5\u5bf9\u63a5\u4e1a\u5185\u5e7f\u6cdb\u4f7f\u7528\u7684\u670d\u52a1\u7f51\u683c\u63a7\u5236\u9762\uff0c\u4f8b\u5982\uff1a Istio \u548c Kuma \u7b49\u3002")))}h.isMDXComponent=!0}}]);