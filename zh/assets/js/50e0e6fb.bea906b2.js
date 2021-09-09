"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61322],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},36026:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o={title:"Release Apache APISIX 0.7",tags:["APISIX"]},s={permalink:"/zh/releases/2019/09/06/release-apache-apisix-0.7",source:"@site/releases/2019-9-6-release-apache-apisix-0.7.md",title:"Release Apache APISIX 0.7",description:"Released on 2019/09/06",date:"2019-09-06T00:00:00.000Z",formattedDate:"2019\u5e749\u67086\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:1.605,truncated:!1,prevItem:{title:"Release Apache APISIX 0.8",permalink:"/zh/releases/2019/09/29/release-apache-apisix-0.8"}},l=[{value:"Core",id:"core",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Admin",id:"admin",children:[]},{value:"Dashboard",id:"dashboard",children:[]}],p={toc:l};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Released on 2019/09/06")),(0,i.kt)("p",null,"This release brings many new features, such as IP black and white list, gPRC protocol transcoding, IPv6, IdP (identity provider) services, serverless, Change the default route to radix tree (",(0,i.kt)("strong",{parentName:"p"},"not downward compatible"),"), and more."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/grpc-transcoding.md"},"gRPC transcoding")),": supports protocol transcoding so that clients can access your gRPC API by using HTTP/JSON. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/395"},"#395")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/router-radixtree.md"},"radix tree router")),": The radix tree is used as the default router implementation. It supports the uri, host, cookie, request header, request parameters, Nginx built-in variables, etc. as the routing conditions, and supports common operators such as equal, greater than, less than, etc., more powerful and flexible.",(0,i.kt)("strong",{parentName:"li"},"IMPORTANT: This change is not downward compatible. All users who use historical versions need to manually modify their routing to work properly.")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/414"},"#414")),(0,i.kt)("li",{parentName:"ul"},"Dynamic upstream supports more parameters, you can specify the upstream uri and host, and whether to enable websocket. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/451"},"#451")),(0,i.kt)("li",{parentName:"ul"},"Support for get values from cookies directly from ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx.var"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/449"},"#449")),(0,i.kt)("li",{parentName:"ul"},"Routing support IPv6. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/331"},"#331"))),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/serverless.md"},"serverless")),": With serverless support, users can dynamically run any Lua function on a gateway node. Users can also use this feature as a lightweight plugin.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/86"},"#86")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"support IdP"),": Support external authentication services, such as Auth0, okta, etc., users can use this to connect to Oauth2.0 and other authentication methods. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/447"},"#447")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/limit-conn.md"},"rate limit"),": Support for more restricted keys, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Forwarded-For")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Real-IP"),", and allows users to use Nginx variables, request headers, and request parameters as keys. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/228"},"#228")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/ip-restriction.md"},"IP black and white list")," Support IP black and white list for security. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/398"},"#398"))),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," directive to get the version number of APISIX. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/420"},"#420"))),(0,i.kt)("h3",{id:"admin"},"Admin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")," API is supported and can be modified individually for a configuration without submitting the entire configuration. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/365"},"#365"))),(0,i.kt)("h3",{id:"dashboard"},"Dashboard"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Add the online version of the dashboard"),"\uff0cusers can ",(0,i.kt)("a",{parentName:"li",href:"http://apisix.iresty.com/"},"experience APISIX")," without install. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/issues/374"},"#374"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")))}u.isMDXComponent=!0}}]);