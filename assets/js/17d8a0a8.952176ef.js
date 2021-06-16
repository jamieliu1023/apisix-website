(self.webpackChunk=self.webpackChunk||[]).push([[702],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22983:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o={title:"Route"},s={unversionedId:"architecture-design/route",id:"version-2.6/architecture-design/route",isDocsHomePage:!1,title:"Route",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/architecture-design/route.md",sourceDirName:"architecture-design",slug:"/architecture-design/route",permalink:"/docs/apisix/architecture-design/route",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/route.md",version:"2.6",frontMatter:{title:"Route"},sidebar:"version-2.6/docs",previous:{title:"APISIX",permalink:"/docs/apisix/architecture-design/apisix"},next:{title:"Plugin",permalink:"/docs/apisix/architecture-design/plugin"}},c=[],u={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The route matches the client's request by defining rules, then loads and executes the corresponding plugin based on the matching result, and forwards the request to the specified Upstream."),(0,a.kt)("p",null,"The route mainly consists of three parts: matching rules (e.g uri, host, remote_addr, etc.), plugin configuration (current-limit & rate-limit, etc.) and upstream information."),(0,a.kt)("p",null,"The following image shows an example of some Route rules. When some attribute values are the same, the figure is identified by the same color."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/routes-example.png",alt:"routes-example"})),(0,a.kt)("p",null,"We configure all the parameters directly in the Route, it's easy to set up, and each Route has a relatively high degree of freedom. But when our Route has more repetitive configurations (such as enabling the same plugin configuration or upstream information), once we need update these same properties, we have to traverse all the Routes and modify them, so it's adding a lot of complexity of management and maintenance."),(0,a.kt)("p",null,"The shortcomings mentioned above are independently abstracted in APISIX by the two concepts ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/architecture-design/service"},"Service")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/architecture-design/upstream"},"Upstream"),"."),(0,a.kt)("p",null,"The route example created below is to proxy the request with URL ",(0,a.kt)("inlineCode",{parentName:"p"},"/index.html")," to the Upstream service with the address ",(0,a.kt)("inlineCode",{parentName:"p"},"39.97.63.215:80"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n\nHTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/index.html","upstream":{"nodes":{"39.97.63.215:80":1},"type":"roundrobin"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),(0,a.kt)("p",null,"When we receive a successful response, it indicates that the route was successfully created."),(0,a.kt)("p",null,"For specific options of Route, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api#route"},"Admin API"),"."))}p.isMDXComponent=!0}}]);