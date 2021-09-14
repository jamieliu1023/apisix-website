"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26851],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(a,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25785:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return a},assets:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c={title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",author:"Yiyiyimu",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u8d21\u732e\u8005\u56fe\u8868","\u5f00\u6e90\u9879\u76ee"],description:"\u672c\u6587\u8bb2\u8ff0\u4e86\u4e3a\u4ec0\u4e48\u8d21\u732e\u8005\u6570\u91cf\u53d8\u5316\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807\u3002\u867d\u7136 GitHub \u5df2\u6709\u7684\u6307\u6807\u6570\u91cf\u5f88\u591a\uff0c\u4f8b\u5982 Star \u6570\u3001Issue \u6570\u91cf\u548c PR \u6570\u91cf\uff0c\u4f46\u662f\u8fd9\u4e9b\u6307\u6807\u90fd\u4e0d\u80fd\u76f4\u89c2\u5730\u53cd\u6620\u51fa\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u53d8\u5316\u8d8b\u52bf\u548c\u6d3b\u8dc3\u5ea6\u3002\u6240\u4ee5\u7b14\u8005 Yiyiyimu \u63d0\u51fa\u4e86\u65b0\u7684\u6307\u6807\uff1a\u8d21\u732e\u8005\u589e\u957f\u548c\u6708\u5ea6\u6d3b\u8dc3\u8d21\u732e\u8005\uff0c\u5e76\u521b\u9020\u4e86\u4e00\u6b3e\u5f00\u6e90\u5de5\u5177\uff0c\u5176\u540d\u4e3a\u201c\u732e\u8005\u56fe\u8868\u201d\uff0c\u65b9\u4fbf GitHub \u7528\u6237\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u6765\u786e\u8ba4\u9879\u76ee\u7684\u6d3b\u8dc3\u5ea6\u3002\u76ee\u524d\uff0c\u591a\u4e2a\u5f00\u6e90\u9879\u76ee\u5df2\u7ecf\u5728\u4f7f\u7528\u8d21\u732e\u8005\u56fe\u8868\u3002"},u=void 0,a={permalink:"/zh/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects",source:"@site/blog/2021-08-14-contributors-the-golden-metric-of-openSource-projects.md",title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",description:"\u672c\u6587\u8bb2\u8ff0\u4e86\u4e3a\u4ec0\u4e48\u8d21\u732e\u8005\u6570\u91cf\u53d8\u5316\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807\u3002\u867d\u7136 GitHub \u5df2\u6709\u7684\u6307\u6807\u6570\u91cf\u5f88\u591a\uff0c\u4f8b\u5982 Star \u6570\u3001Issue \u6570\u91cf\u548c PR \u6570\u91cf\uff0c\u4f46\u662f\u8fd9\u4e9b\u6307\u6807\u90fd\u4e0d\u80fd\u76f4\u89c2\u5730\u53cd\u6620\u51fa\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u53d8\u5316\u8d8b\u52bf\u548c\u6d3b\u8dc3\u5ea6\u3002\u6240\u4ee5\u7b14\u8005 Yiyiyimu \u63d0\u51fa\u4e86\u65b0\u7684\u6307\u6807\uff1a\u8d21\u732e\u8005\u589e\u957f\u548c\u6708\u5ea6\u6d3b\u8dc3\u8d21\u732e\u8005\uff0c\u5e76\u521b\u9020\u4e86\u4e00\u6b3e\u5f00\u6e90\u5de5\u5177\uff0c\u5176\u540d\u4e3a\u201c\u732e\u8005\u56fe\u8868\u201d\uff0c\u65b9\u4fbf GitHub \u7528\u6237\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u6765\u786e\u8ba4\u9879\u76ee\u7684\u6d3b\u8dc3\u5ea6\u3002\u76ee\u524d\uff0c\u591a\u4e2a\u5f00\u6e90\u9879\u76ee\u5df2\u7ecf\u5728\u4f7f\u7528\u8d21\u732e\u8005\u56fe\u8868\u3002",date:"2021-08-14T00:00:00.000Z",formattedDate:"2021\u5e748\u670814\u65e5",tags:[],readingTime:1,truncated:!0,authors:[{name:"Yiyiyimu",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"Contributors \u2014 The Golden Metric of OpenSource Projects",permalink:"/zh/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects-en"},nextItem:{title:"Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/zh/blog/2021/08/12/Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yiyiyimu"},"@Yiyiyimu"),", Apache APISIX committer.")))}m.isMDXComponent=!0}}]);