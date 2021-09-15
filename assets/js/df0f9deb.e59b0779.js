"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6386],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,m=s["".concat(i,".").concat(h)]||s[h]||f[h]||a;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var p=2;p<a;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),u={title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",author:"juzhiyuan",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",tags:["technology"]},c=void 0,i={permalink:"/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX",source:"@site/blog/2021-07-27-use-of-plugin-orchestration-in-Apache-APISIX.md",title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"@juzhiyuan, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2021-07-27T00:00:00.000Z",formattedDate:"July 27, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:2.055,truncated:!0,authors:[{name:"juzhiyuan",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/blog/2021/07/27/limit-rep-plug"},nextItem:{title:"ApacheCon Asia 2021\uff1aApache APISIX \u6280\u672f\u8bae\u9898\u4e00\u89c8",permalink:"/blog/2021/07/25/apachecon-asia"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/juzhiyuan"},"@juzhiyuan"),", Apache APISIX PMC from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}s.isMDXComponent=!0}}]);