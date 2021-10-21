"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31978],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5264:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"limit-count"},o=void 0,s={unversionedId:"plugins/limit-count",id:"version-2.7/plugins/limit-count",isDocsHomePage:!1,title:"limit-count",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/plugins/limit-count.md",sourceDirName:"plugins",slug:"/plugins/limit-count",permalink:"/docs/apisix/2.7/plugins/limit-count",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/limit-count.md",tags:[],version:"2.7",frontMatter:{title:"limit-count"},sidebar:"version-2.7/docs",previous:{title:"limit-conn",permalink:"/docs/apisix/2.7/plugins/limit-conn"},next:{title:"proxy-cache",permalink:"/docs/apisix/2.7/plugins/proxy-cache"}},d=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},"How To Enable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},"Test Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"Limit request rate by a fixed number of requests in a given time window."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"count"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"count > 0"),(0,i.kt)("td",{parentName:"tr",align:null},"the specified number of requests threshold.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"time_window"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"time_window > 0"),(0,i.kt)("td",{parentName:"tr",align:null},"the time window in seconds before the request count is reset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"remote_addr"'),(0,i.kt)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name", "service_id"]'),(0,i.kt)("td",{parentName:"tr",align:null},"The user specified key to limit the count. ",(0,i.kt)("br",null),' Now accept those as key: "remote_addr"(client\'s IP), "server_addr"(server\'s IP), "X-Forwarded-For/X-Real-IP" in request header, "consumer_name"(consumer\'s username) and "service_id".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"503"),(0,i.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,i.kt)("td",{parentName:"tr",align:null},"The HTTP status code returned when the request exceeds the threshold is rejected, default 503.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"policy"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"local"'),(0,i.kt)("td",{parentName:"tr",align:null},'["local", "redis", "redis-cluster"]'),(0,i.kt)("td",{parentName:"tr",align:null},"The rate-limiting policies to use for retrieving and incrementing the limits. Available values are ",(0,i.kt)("inlineCode",{parentName:"td"},"local"),"(the counters will be stored locally in-memory on the node), ",(0,i.kt)("inlineCode",{parentName:"td"},"redis"),"(counters are stored on a Redis server and will be shared across the nodes, usually use it to do the global speed limit), and ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," which works the same as ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," but with redis cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required for ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the address of the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_port"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"6379"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the port of the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the password of the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_database"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"redis_database >= 0"),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the database you selected of the Redis server, and only for non Redis cluster mode (single instance mode or Redis public cloud service that provides single entry).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"When using the ",(0,i.kt)("inlineCode",{parentName:"td"},"redis")," policy, this property specifies the timeout in milliseconds of any command submitted to the Redis server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_cluster_nodes"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"required when policy is ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," policy\uff0cThis property is a list of addresses of Redis cluster service nodes (at least two).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redis_cluster_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required when policy is ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When using ",(0,i.kt)("inlineCode",{parentName:"td"},"redis-cluster")," policy, this property is the name of Redis cluster service nodes.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key can be customized by the user, only need to modify a line of code of the plug-in to complete. It is a security consideration that is not open in the plugin.")),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Here's an example, enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin on the specified route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"You can open dashboard with a browser: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/limit-count-1.png",alt:"Add a router."})),(0,i.kt)("p",null,"Then add limit-count plugin:\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/limit-count-2.png",alt:"Add limit-count plugin."})),(0,i.kt)("p",null,"If you need a cluster-level precision traffic limit, then we can do it with the redis server. The rate limit of the traffic will be shared between different APISIX nodes to limit the rate of cluster traffic."),(0,i.kt)("p",null,"Here is the example if we use single ",(0,i.kt)("inlineCode",{parentName:"p"},"redis")," policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis",\n            "redis_host": "127.0.0.1",\n            "redis_port": 6379,\n            "redis_password": "password",\n            "redis_database": 1,\n            "redis_timeout": 1001\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"If using ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cluster")," policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis-cluster",\n            "redis_cluster_nodes": [\n              "127.0.0.1:5000",\n              "127.0.0.1:5001"\n            ],\n            "redis_password": "password",\n            "redis_cluster_name": "redis-cluster-1"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"The above configuration limits access to only 2 times in 60 seconds. The first two visits will be normally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,i.kt)("p",null,"The response header contains ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining"),",\nwhich mean the total number of requests and the remaining number of requests that can be sent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nServer: APISIX web server\n")),(0,i.kt)("p",null,"When you visit for the third time, you will receive a response with the 503 HTTP code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,i.kt)("p",null,"This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin is in effect."),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"limit count")," plugin has been disabled now. It works for other plugins."))}u.isMDXComponent=!0}}]);