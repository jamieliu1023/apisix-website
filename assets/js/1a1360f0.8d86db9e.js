"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8310],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=u(r),f=o,b=h["".concat(l,".").concat(f)]||h[f]||s[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82775:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i={title:"The observability of Apache APISIX",author:"Haochao Zhuang",authorURL:"https://github.com/dmsolr",authorImageURL:"https://avatars.githubusercontent.com/u/29735230?v=4",keywords:["Apache APISIX","observability","SkyWalking","Apache","Prometheus"],description:"This article introduces the observability capabilities of Apache APISIX and how to improve the observability capabilities of Apache APISIX through Apache SkyWalking.",tags:["Technology"]},c=void 0,l={permalink:"/blog/2021/11/04/skywalking",source:"@site/blog/2021/11/04/skywalking.md",title:"The observability of Apache APISIX",description:"This article introduces the observability capabilities of Apache APISIX and how to improve the observability capabilities of Apache APISIX through Apache SkyWalking.",date:"2021-11-04T00:00:00.000Z",formattedDate:"November 4, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:6.08,truncated:!0,authors:[{name:"Haochao Zhuang",url:"https://github.com/dmsolr",imageURL:"https://avatars.githubusercontent.com/u/29735230?v=4"}],nextItem:{title:"How Apache APISIX protects Airwallex data sovereignty through the gateway layer",permalink:"/blog/2021/11/03/airwallex-usercase"}},u={authorsImageUrls:[void 0]},p=[],s={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article introduces the observability capabilities of Apache APISIX and how to improve the observability capabilities of Apache APISIX through Apache SkyWalking.")))}h.isMDXComponent=!0}}]);