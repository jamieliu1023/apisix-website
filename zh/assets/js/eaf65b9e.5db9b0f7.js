"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7517],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return I}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(t),I=o,g=f["".concat(i,".").concat(I)]||f[I]||u[I]||a;return t?n.createElement(g,c(c({ref:r},l),{},{components:t})):n.createElement(g,c({ref:r},l))}));function I(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58067:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return i},assets:function(){return s},toc:function(){return l},default:function(){return f}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c={title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",author:"Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Ingress"],description:"Apache APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\u3002",tags:["news"]},p=void 0,i={permalink:"/zh/blog/2021/08/30/Ingress-Meeting",source:"@site/blog/2021-08-30-Ingress-Meeting.md",title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",description:"Apache APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\u3002",date:"2021-08-30T00:00:00.000Z",formattedDate:"2021\u5e748\u670830\u65e5",tags:[{label:"news",permalink:"/zh/blog/tags/news"}],readingTime:.525,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"Apache APISIX \xd7 KubeSphere\uff1a\u63d0\u4f9b\u66f4\u597d\u7528\u7684\u7f51\u5173\u53ca K8S Ingress Controller",permalink:"/zh/blog/2021/08/31/Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller"},nextItem:{title:"Apache APISIX 2.9 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",permalink:"/zh/blog/2021/08/27/release-apache-apisix-2.9"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u968f\u7740 ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released"},"Apache APISIX Ingress Controller 1.0 \u7248\u672c")," \u53d1\u5e03\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u5f00\u59cb\u5173\u6ce8 Apache APISIX Ingress \u65b9\u6848\uff0cApache APISIX \u793e\u533a\u5e0c\u671b\u80fd\u591f\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u66f4\u76f4\u63a5\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\uff0c\u5e0c\u671b\u6bcf\u4e00\u4f4d\u7528\u6237\u3001\u6bcf\u4e00\u4f4d\u5f00\u53d1\u8005\u7684\u58f0\u97f3\u90fd\u53ef\u4ee5\u88ab\u542c\u89c1\u3002 \u56e0\u6b64\uff0cApache APISIX \u793e\u533a\u5f00\u59cb\u7ec4\u7ec7\u6bcf\u4e24\u5468\u7ebf\u4e0a\u793e\u533a\u4f1a\u8bae\u3002")))}f.isMDXComponent=!0}}]);