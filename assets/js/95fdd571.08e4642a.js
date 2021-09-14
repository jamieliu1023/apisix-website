"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48235],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),h=o,m=f["".concat(i,".").concat(h)]||f[h]||s[h]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69566:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",author:"tokers",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4",tags:["technology"]},u=void 0,i={permalink:"/blog/2021/07/16/Analyze-Apache-APISIX-Mesh-Agent-deeply",source:"@site/blog/2021-07-16-Analyze-Apache-APISIX-Mesh-Agent-deeply.md",title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",description:"@tokers, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2021-07-16T00:00:00.000Z",formattedDate:"July 16, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:1.31,truncated:!0,authors:[{name:"tokers",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"}],prevItem:{title:"Apache APISIX x Kubernetes\uff1a\u6070\u5230\u597d\u5904\uff5c\u76f4\u64ad\u9884\u544a",permalink:"/blog/2021/07/21/Apache-APISIX-Kubernetes"},nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",permalink:"/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@tokers"),", Apache APISIX PMC from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}f.isMDXComponent=!0}}]);