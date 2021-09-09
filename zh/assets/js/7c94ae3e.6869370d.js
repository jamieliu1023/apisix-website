"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86437],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=o(a),m=n,d=h["".concat(u,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(d,l(l({ref:t},s),{},{components:a})):r.createElement(d,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41883:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l={title:"Release Apache APISIX 0.9",tags:["APISIX"]},p={permalink:"/zh/releases/2019/11/15/release-apache-apisix-0.9",source:"@site/releases/2019-11-15-release-apache-apisix-0.9.md",title:"Release Apache APISIX 0.9",description:"This release brings many new features, such as support for running APISIX with Tengine,",date:"2019-11-15T00:00:00.000Z",formattedDate:"2019\u5e7411\u670815\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:1.175,truncated:!1,prevItem:{title:"Release Apache APISIX 1.0",permalink:"/zh/releases/2020/01/15/release-apache-apisix-1.0"},nextItem:{title:"Release Apache APISIX 0.8",permalink:"/zh/releases/2019/09/29/release-apache-apisix-0.8"}},u=[{value:"Core",id:"core",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"lua-resty-*",id:"lua-resty-",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],o={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release brings many new features, such as support for running APISIX with Tengine,\nan advanced debugging mode that is more developer friendly, and a new URI redirection plugin."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 Supported to run APISIX with tengine. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/683"},"#683")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 Enabled HTTP2 and supported to set ssl_protocols. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/663"},"#663")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 Advanced Debug Mode, Target module function's input arguments or returned value would be printed once this option is enabled. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/641"},"#614")),(0,i.kt)("li",{parentName:"ul"},"Support to install APISIX without dashboard. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/686"},"#686")),(0,i.kt)("li",{parentName:"ul"},"Removed router R3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/725"},"#725"))),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/redirect.md"},"Redirect URI"),": Redirect URI plugin. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/732"},"#732")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/proxy-rewrite.md"},"Proxy Rewrite"),": Supported remove ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," feature. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/658"},"#658")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/blob/master/docs/en/latest/plugins/limit-count.md"},"Limit Count"),": Supported global limit count with ",(0,i.kt)("inlineCode",{parentName:"li"},"Redis Server"),".",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/624"},"#624"))),(0,i.kt)("h3",{id:"lua-resty-"},"lua-resty-*"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lua-resty-radixtree",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Support for ",(0,i.kt)("inlineCode",{parentName:"li"},"host + uri")," as an index."))),(0,i.kt)("li",{parentName:"ul"},"lua-resty-jsonschema",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This extension is a JSON data validator that replaces the existing ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-rapidjson")," extension.")))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"key-auth plugin cannot run accurately in the case of multiple consumers. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/826"},"#826")),(0,i.kt)("li",{parentName:"ul"},"Exported schema for plugin serverless. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/787"},"#787")),(0,i.kt)("li",{parentName:"ul"},"Discard args of uri when using proxy-write plugin ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/642"},"#642")),(0,i.kt)("li",{parentName:"ul"},"Zipkin plugin not set tracing data to request header. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/715"},"#715")),(0,i.kt)("li",{parentName:"ul"},"Skipped check cjson for luajit environment in apisix CLI. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/652"},"#652")),(0,i.kt)("li",{parentName:"ul"},"Skipped to init etcd if use local file as config center. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/737"},"#737")),(0,i.kt)("li",{parentName:"ul"},"Support more built-in parameters when set chash balancer. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/775"},"#775"))),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-rapidjson")," module with ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-resty-jsonschema")," global,  ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-resty-jsonschema")," is faster and easier to compile.")))}s.isMDXComponent=!0}}]);