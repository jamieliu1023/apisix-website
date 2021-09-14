"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74665],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,h=m["".concat(o,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94287:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX 1.4",tags:["APISIX"]},p=void 0,o={permalink:"/zh/releases/2020/6/30/release-apache-apisix-1.4",source:"@site/releases/2020-6-30-release-apache-apisix-1.4.md",title:"Release Apache APISIX 1.4",description:"Core",date:"2020-06-30T00:00:00.000Z",formattedDate:"2020\u5e746\u670830\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:.37,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX 1.4.1",permalink:"/zh/releases/2020/7/20/release-apache-apisix-1.4.1"},nextItem:{title:"Release Apache APISIX 1.3",permalink:"/zh/releases/2020/5/26/release-apache-apisix-1.3"}},u={authorsImageUrls:[]},c=[{value:"Core",id:"core",children:[]},{value:"New plugins",id:"new-plugins",children:[]},{value:"Improvements",id:"improvements",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Admin API: Support unique names for routes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1655"},"1655")),(0,i.kt)("li",{parentName:"ul"},"Optimization of log buffer size and flush time ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1570"},"1570"))),(0,i.kt)("h3",{id:"new-plugins"},"New plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Apache Skywalking plugin")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1241"},"1241")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Keycloak Identity Server Plugin")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1701"},"1701")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Echo Plugin")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1632"},"1632")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Consume Restriction Plugin")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1437"},"1437"))),(0,i.kt)("h3",{id:"improvements"},"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Batch Request : Copy all headers to every request ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1697"},"1697")),(0,i.kt)("li",{parentName:"ul"},"SSL private key encryption ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1678"},"1678")),(0,i.kt)("li",{parentName:"ul"},"Improvement of docs for multiple plugins")))}m.isMDXComponent=!0}}]);