"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37380],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,y=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},55477:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021\u5e748\u67089\u65e5\uff5e8\u670815\u65e5",keywords:["\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005","APISIX","Apache","Good first issue","contributor","API Gateway"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Events"]},i=void 0,p={permalink:"/blog/2021/08/19/weekly-report",source:"@site/blog/2021-08-19-weekly-report.md",title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021\u5e748\u67089\u65e5\uff5e8\u670815\u65e5",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:1.36,truncated:!0,authors:[],prevItem:{title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",permalink:"/blog/2021/08/19/go-makes-Apache-APISIX-better"},nextItem:{title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",permalink:"/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX"}},u={authorsImageUrls:[]},l=[],f={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5468\uff0c\u6709 26 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 96 \u4e2a commit \u3002\u611f\u8c22\u672c\u5468\u4ee5\u4e0b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff08\u6392\u540d\u4e0d\u5206\u5148\u540e\uff09\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u53d8\u5f97\u66f4\u597d\uff01")))}s.isMDXComponent=!0}}]);