(self.webpackChunk=self.webpackChunk||[]).push([[21771],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97506:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"Release Apache APISIX Dashboard 1.5",tags:["APISIX Dashboard"]},l={permalink:"/zh/releases/2020/08/12/release-apache-apisix-dashboard-1.5",source:"@site/releases/2020-8-12-release-apache-apisix-dashboard-1.5.md",title:"Release Apache APISIX Dashboard 1.5",description:"This release mainly refactors the dashboard.",date:"2020-08-12T00:00:00.000Z",formattedDate:"2020\u5e748\u670812\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:.155,truncated:!1,prevItem:{title:"Release Apache APISIX 2.0",permalink:"/zh/releases/2020/10/28/release-apache-apisix-2.0"},nextItem:{title:"Release Apache APISIX 1.5",permalink:"/zh/releases/2020/08/06/release-apache-apisix-1.5"}},c=[{value:"Core",id:"core",children:[]}],s={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release mainly refactors the dashboard."),(0,o.kt)("h3",{id:"core"},"Core"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrate with Ant Design Pro. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/263"},"#263")),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"Manager API")," support to process logics between APISIX and Dashboard."),(0,o.kt)("li",{parentName:"ul"},"Added Metrics/Route/SSL/Upstream/Consumer module.")))}p.isMDXComponent=!0}}]);