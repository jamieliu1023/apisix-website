"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52066],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91138:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return u}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o={title:"Apache APISIX Extensions Guide",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","Plugin","HTTP","Apache"],description:"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.",tags:["technology"]},s=void 0,l={permalink:"/blog/2021/10/29/Extension-guide",source:"@site/blog/2021/10/29/Extension-guide.md",title:"Apache APISIX Extensions Guide",description:"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.",date:"2021-10-29T00:00:00.000Z",formattedDate:"October 29, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:7.69,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],nextItem:{title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",permalink:"/blog/2021/10/27/APISIX Ingress"}},c={authorsImageUrls:[void 0]},p=[{value:"Expansion Direction 1: Rewrite or Access?",id:"expansion-direction-1-rewrite-or-access",children:[]},{value:"Extension Direction 2: Configure Service Discovery",id:"extension-direction-2-configure-service-discovery",children:[]},{value:"Expansion Direction 3: Configure Load Balancing",id:"expansion-direction-3-configure-load-balancing",children:[]},{value:"Extension Direction 4: Handling Response",id:"extension-direction-4-handling-response",children:[]},{value:"Extension Direction 5: Reporting Logs and Monitoring Parameters",id:"extension-direction-5-reporting-logs-and-monitoring-parameters",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.")),(0,a.kt)("p",null,"Apache APISIX provides more than 50 plugins, several commonly used load balancing selectors, and support for mainstream service discovery (such as Nacos and DNS). The API gateway is closely related to the internal business of the enterprise. In order to meet the business needs of the enterprise, users usually need to add some code on the basis of Apache APISIX to realize the functions required by the business. How to expand Apache APISIX has become a common pain point for many users: on the premise of ensuring the smooth operation of Apache APISIX, how to add business code to meet actual needs?"),(0,a.kt)("p",null,"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX. Since Apache APISIX is in a stage of rapid development and the frequency of version iterations is relatively high, this article will be based on the first LTS version v2.10.0 of Apache APISIX. If your Apache APISIX version is lower than 2.10.0, you may need to make some modifications based on actual conditions. In addition, although this article only explains the HTTP-related logic, the TCP-related parts are generally similar."),(0,a.kt)("h2",{id:"expansion-direction-1-rewrite-or-access"},"Expansion Direction 1: Rewrite or Access?"),(0,a.kt)("p",null,"Let's start with the life cycle of the request: when a request enters Apache APISIX, it will first be processed by the method ",(0,a.kt)("inlineCode",{parentName:"p"},"http_access_phase"),". Readers who are familiar with the concept of OpenResty phases may be a little confused: OpenResty has a total of 6 phases, which are arranged in order of execution: ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"before_proxy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"log"),", why is ",(0,a.kt)("inlineCode",{parentName:"p"},"access")," at the beginning, and where is ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite"),"?"),(0,a.kt)("p",null,"The phases concept of the Apache APISIX plug-in is slightly different from the OpenResty phases concept. In order to improve the performance of Apache APISIX, the rewrite method of the APISIX plugin will run in the access phase of OpenResty. Users can still customize the logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," at the plugin level, but at the code level, ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," is actually executed in ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),"."),(0,a.kt)("p",null,"Although both the logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," and the logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"access")," run in the access phase, the logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," will still be executed before the logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),". In order to avoid the failure of subsequent plugins to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," and fail to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),", which will cause trace omissions, trace logic must be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite"),"."),(0,a.kt)("p",null,"In addition to the order of execution, there is another difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),", that is, there is a logic for processing ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer")," between them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Lua"},' plugin.run_plugin("rewrite", plugins, api_ctx)\n        if api_ctx.consumer then\n            ...\n        end\n        plugin.run_plugin("access", plugins, api_ctx)\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"consumer")," represents an identity. You can control permissions for different consumers. For example, use the plugin ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," to implement role-based permission control, which is what everyone calls RBAC. In addition, you can also set corresponding current limiting strategies for different ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer"),"."),(0,a.kt)("p",null,"The authentication plugin in Apache APISIX (with ",(0,a.kt)("inlineCode",{parentName:"p"},'type = "auth"')," in the plugin definition), you need to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," stage. Here we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Lua"},'local _M = {\n    version = 0.1,\n    priority = 2500,\n    type = \'auth\',\n    name = plugin_name,\n    schema = schema,\n    consumer_schema = consumer_schema,\n}\n\n...\nfunction _M.rewrite(conf, ctx)\n    ...\n    local consumer_conf = consumer_mod.plugin(plugin_name)\n    if not consumer_conf then\n        return 401, {message = "Missing related consumer"}\n    end\n\n    local consumers = lrucache("consumers_key", consumer_conf.conf_version,\n        create_consume_cache, consumer_conf)\n\n    local consumer = consumers[key]\n    if not consumer then\n        return 401, {message = "Invalid API key in request"}\n    end\n\n    consumer_mod.attach_consumer(ctx, consumer, consumer_conf)\nend\n')),(0,a.kt)("p",null,"The execution logic of the authentication plugins is similar: first obtain a certain set of parameters from the input of the users, then find the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer")," according to the parameters, and finally append the ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer_conf")," corresponding to the plugin to ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),"."),(0,a.kt)("p",null,"In summary, for plugins that do not need to be executed in the early stage of the request and do not need to find the ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer"),", it is recommended to write the logic in the ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),"."),(0,a.kt)("h2",{id:"extension-direction-2-configure-service-discovery"},"Extension Direction 2: Configure Service Discovery"),(0,a.kt)("p",null,"After executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),", we are about to deal with the Upstream. Normally, the Upstream node is hard-coded on the Upstream configuration. However, it is also possible to obtain nodes from the service discovery to implement discovery."),(0,a.kt)("p",null,"Next, we will take Nacos as an example to talk about how to implement it."),(0,a.kt)("p",null,"An Upstream configuration that dynamically acquires a node managed by Nacos is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "service_name": "APISIX-NACOS",\n    "type": "roundrobin",\n    "discovery_type": "nacos",\n    "discovery_args": {\n        "namespace_id": "test_ns",\n        "group_name": "test_group"\n    }\n}\n')),(0,a.kt)("p",null,"We can see three of these important variables:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"discovery_type"),": Types of Service Discovery,",(0,a.kt)("inlineCode",{parentName:"li"},'"discovery_type": "nacos"')," indicates service discovery using Nacos."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"service_name"),": Service Name\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"discovery_args"),": different discovery-specific parameters, specific parameters of Nacos include: ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace_id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"group_name"),".")),(0,a.kt)("p",null,"The Lua code corresponding to Nacos discovery is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"discovery/nacos.lua"),". Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos.lua"),", we can see that several required methods are implemented in it."),(0,a.kt)("p",null,"A discovery needs to implement at least two methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"init_worker"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Lua"},"function _M.nodes(service_name, discovery_args)\n    local namespace_id = discovery_args and\n            discovery_args.namespace_id or default_namespace_id\n    local group_name = discovery_args\n            and discovery_args.group_name or default_group_name\n\n    ...\nend\n\nfunction _M.init_worker()\n    ...\nend\n")),(0,a.kt)("p",null,"The function signature of ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," has already explicitly shown the query parameters used to get new nodes: ",(0,a.kt)("inlineCode",{parentName:"p"},"service_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"discovery_args"),". For each request, Apache APISIX will use this set to query for the latest node. The method returns an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},'{\n    {host = "xxx", port = 12100, weight = 100, priority = 0, metadata = ...},\n    # priority and metadata are optional\n    ...\n}\n')),(0,a.kt)("p",null,"And ",(0,a.kt)("inlineCode",{parentName:"p"},"init_worker")," is responsible for starting a timer in the background to ensure that the local node data is consistent with the data discovered by the service."),(0,a.kt)("h2",{id:"expansion-direction-3-configure-load-balancing"},"Expansion Direction 3: Configure Load Balancing"),(0,a.kt)("p",null,"After obtaining a set of nodes, we have to decide which node to try first in accordance with the rules of load balancing. If several commonly used load balancing algorithms cannot meet your needs, you can also implement a load balancing by yourself."),(0,a.kt)("p",null,"Let's take load balancing with the least number of connections as an example. The corresponding Lua code is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"balancer/least_conn.lua"),". Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"least_conn.lua"),", we can see that it implements several required methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"new"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"after_balance")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"before_retry_next_priority"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"new")," is responsible for doing some initialization work.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"get")," is responsible for executing the logic of the selected node.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"after_balance")," will run in the following two situations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Before each retry (when before_retry is true)"),(0,a.kt)("li",{parentName:"ul"},"After the last try"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"before_retry_next_priority")," runs before preparing to try the next set of nodes with the same priority, while the current set has been tried."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Lua"},'function _M.new(up_nodes, upstream)\n    ...\n\n    return {\n        upstream = upstream,\n        get = function (ctx)\n            ...\n        end,\n        after_balance = function (ctx, before_retry)\n            ...\n            if not before_retry then\n                if ctx.balancer_tried_servers then\n                    core.tablepool.release("balancer_tried_servers", ctx.balancer_tried_servers)\n                    ctx.balancer_tried_servers = nil\n                end\n\n                return nil\n            end\n\n            if not ctx.balancer_tried_servers then\n                ctx.balancer_tried_servers = core.tablepool.fetch("balancer_tried_servers", 0, 2)\n            end\n\n            ctx.balancer_tried_servers[server] = true\n        end,\n        before_retry_next_priority = function (ctx)\n            if ctx.balancer_tried_servers then\n                core.tablepool.release("balancer_tried_servers", ctx.balancer_tried_servers)\n                ctx.balancer_tried_servers = nil\n            end\n        end,\n    }\nend\n')),(0,a.kt)("p",null,"If there is no internal state to maintain, you can directly borrow the fixed template code (in the above code, outside the ellipsis) to fill in the two methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"after_balance")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"before_retry_next_priority"),"."),(0,a.kt)("p",null,"After selecting the node, we can also add additional logic in the form of a plugin. The plugin can implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"before_proxy")," method. This method will be called after the node is selected, and we can record the information of the currently selected node in this method, which will be useful in trace."),(0,a.kt)("h2",{id:"extension-direction-4-handling-response"},"Extension Direction 4: Handling Response"),(0,a.kt)("p",null,"We can process the responses returned from upstream in ",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin. The former method modifies the response header, the latter modifies the response body. Note that Apache APISIX response processing is streaming, so if the response header is not modified inside ",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter"),", the response header will be sent out first and there will be no way to modify the response body when it reaches ",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter"),"."),(0,a.kt)("p",null,"This means that if you want to modify the body later, but there are body-related response headers like Content-Length in the header, you have to change those headers in the ",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter")," in advance. We provide a helper method: ",(0,a.kt)("inlineCode",{parentName:"p"},"core.response.clear_header_as_body_modified"),", which can be called in ",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter")," is also streaming and will be called multiple times. So if you want to get the full response body, you need to put together the partial response body provided by each ",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter"),". On the Apache APISIX master branch, we provide a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"core.response.hold_body_chunk")," to simplify the operation. Interested readers can take a look at the code."),(0,a.kt)("h2",{id:"extension-direction-5-reporting-logs-and-monitoring-parameters"},"Extension Direction 5: Reporting Logs and Monitoring Parameters"),(0,a.kt)("p",null,"After the request is finished, we can also do some cleanup work with the ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," method. This type of work can be divided into two categories:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Record metrics, such as the ",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus")," plugin."),(0,a.kt)("li",{parentName:"ol"},"Record the access log, and then report it regularly, such as the ",(0,a.kt)("inlineCode",{parentName:"li"},"http-logger")," plugin.")),(0,a.kt)("p",null,"If you are interested, you can take a look at how the ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," method of these two plugins is implemented:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/prometheus/"},(0,a.kt)("inlineCode",{parentName:"a"},"prometheus")," plugin documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/http-logger/"},(0,a.kt)("inlineCode",{parentName:"a"},"http-logger")," plugin documentation"))))}u.isMDXComponent=!0}}]);