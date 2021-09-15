"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84523],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(r),f=n,m=h["".concat(o,".").concat(f)]||h[f]||s[f]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46092:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return h}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX 2.5"},p=void 0,o={permalink:"/events/2021/04/05/release-apache-apisix-2.5",source:"@site/events/2021-04-05-release-apache-apisix-2.5.md",title:"Release Apache APISIX 2.5",description:"Change",date:"2021-04-05T00:00:00.000Z",formattedDate:"April 5, 2021",tags:[],readingTime:.85,truncated:!0,authors:[],prevItem:{title:"Release Apache APISIX Ingress Controller 0.5",permalink:"/events/2021/04/13/release-apisix-ingress-controller-0.5"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.4.0",permalink:"/events/2021/03/12/release-apache-apisix-ingress-controller-0.4.0"}},u={authorsImageUrls:[]},c=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],s={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"change"},"Change"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"change(zipkin): rearrange the child span ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3877"},"#3877"))),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support mTLS with etcd ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3905"},"#3905")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: upgrade lua-resty-expr/radixtree to support logical expression ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3809"},"#3809")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: load etcd configuration when apisix starts ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3799"},"#3799")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: let balancer support priority ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3755"},"#3755")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add control api for discovery module ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3742"},"#3742"))),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(skywalking):  allow destroy and configure report interval for reporter ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3925"},"#3925")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(traffic-split): the upstream pass_host needs to support IP mode ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3870"},"#3870")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: Add filter on HTTP methods for consumer-restriction plugin ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3691"},"#3691")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add allow_origins_by_regex to cors plugin ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3839"},"#3839")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support conditional response rewrite ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3577"},"#3577"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix(error-log-logger): the logger should be run in each process ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3912"},"#3912")),(0,i.kt)("li",{parentName:"ul"},"fix: use the builtin server by default ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3907"},"#3907")),(0,i.kt)("li",{parentName:"ul"},"fix(traffic-split): binding upstream via upstream_id is invalid ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3842"},"#3842")),(0,i.kt)("li",{parentName:"ul"},"fix: correct the validation for ssl_trusted_certificate ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3832"},"#3832")),(0,i.kt)("li",{parentName:"ul"},"fix: don't override cache relative headers ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3789"},"#3789")),(0,i.kt)("li",{parentName:"ul"},"fix: fail to run ",(0,i.kt)("inlineCode",{parentName:"li"},"make deps")," on macOS ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3718"},"#3718"))))}h.isMDXComponent=!0}}]);