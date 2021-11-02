"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76255],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||r;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9712:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o={title:"Python helps you develop Apache APISIX plugin",author:"Jinchao Shuai",authorURL:"https://github.com/shuaijinchao",authorImageURL:"https://avatars.githubusercontent.com/u/8529452?v=4",keywords:["Python","APISIX","Python plugin","apisix-python-plugin-runner","APISIX Python Plugin Runner"],tags:["Practical Case"]},l=void 0,p={permalink:"/blog/2021/09/06/python-helps-you-quickly-with-Apache-APISIX-development",source:"@site/blog/2021/09/06/python-helps-you-quickly-with-Apache-APISIX-development.md",title:"Python helps you develop Apache APISIX plugin",description:"The Java Plugin and Go Plugin languages have been supported in the community before the Apache APISIX Python Runner, and today Python Runner is now available, giving the community another option for developing plugins for Apache APISIX.",date:"2021-09-06T00:00:00.000Z",formattedDate:"September 6, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:6.375,truncated:!0,authors:[{name:"Jinchao Shuai",url:"https://github.com/shuaijinchao",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"}],prevItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",permalink:"/blog/2021/09/07/iQIYI-usercase"},nextItem:{title:"Apache APISIX \xd7 KubeSphere: Providing a better gateway and K8S Ingress Controller",permalink:"/blog/2021/08/31/Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller"}},u={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",children:[{value:"Apache APISIX",id:"apache-apisix",children:[]},{value:"Python",id:"python",children:[]},{value:"Apache APISIX Python Runner",id:"apache-apisix-python-runner",children:[]}]},{value:"Deploy test",id:"deploy-test",children:[{value:"Base runtime environment",id:"base-runtime-environment",children:[]},{value:"Download and install Python Runner",id:"download-and-install-python-runner",children:[]},{value:"Configuring Python Runner",id:"configuring-python-runner",children:[]},{value:"Start Python Runner",id:"start-python-runner",children:[]},{value:"Testing Python Runner",id:"testing-python-runner",children:[]}]},{value:"Plugin Development",id:"plugin-development",children:[{value:"Plugin directory",id:"plugin-directory",children:[]},{value:"Plugin example",id:"plugin-example",children:[]},{value:"Plugin format",id:"plugin-format",children:[]},{value:"Plugin specifications and considerations",id:"plugin-specifications-and-considerations",children:[]}]},{value:"Welcome to participate",id:"welcome-to-participate",children:[]},{value:"Related Reading",id:"related-reading",children:[]}],h={toc:s};function c(e){var n=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner"},"Java Plugin")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner"},"Go Plugin")," languages have been supported in the community before the Apache APISIX Python Runner, and today Python Runner is now available, giving the community another option for developing plugins for Apache APISIX.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," is a high-performance cloud-native open-source API gateway that provides unified request interception and governance (e.g., authentication, caching, versioning, fusing, auditing, etc.) to help developers easily provide secure and reliable services to the outside world, while developers only need to focus on business implementation with ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX"),", which saves a lot of time in developing and maintaining generic capabilities and reduces the complexity of the overall business architecture."),(0,r.kt)("h3",{id:"python"},"Python"),(0,r.kt)("p",null,"Python is an interpreted high-level programming language with a simple syntax, good code readability, cross-platform, portability, and development efficiency.\nAs a high-level programming language, it has a high degree of abstraction and shields a lot of underlying details (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"GC"),").\n) allows us to focus more on the development of application logic in the development process. As a 30-year old development language, Python has a well-developed ecology and various modules, and most of our development and application scenarios can be found in mature modules or solutions from the community. ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),"\nWe won't go into all the other advantages. The disadvantages of ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," are also obvious: ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),", as an interpreted language, has a relatively large performance gap compared to compiled languages like ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Go"),"."),(0,r.kt)("h3",{id:"apache-apisix-python-runner"},"Apache APISIX Python Runner"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-python-plugin-runner"},"apache-apisix-python-runner")," This project can be interpreted as ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),".\nThe most important thing is to let more ",(0,r.kt)("inlineCode",{parentName:"p"},"Python developers")," who are interested in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"API gateways")," to learn more about the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"API gateways")," through this project.\nThe following is a diagram of the architecture of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," multi-language support."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Apache APISIX work flow",src:t(32795).Z})),(0,r.kt)("p",null,"The above diagram shows the workflow of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," on the left, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," on the right is the plug-in runner for each language, the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-python-plugin-runner")," introduced in this article is the one that supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),".\nlanguage."),(0,r.kt)("p",null,"When you configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," will start a child process to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," that belongs to the same user as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," process belongs to the same user, and when we restart or reload ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," will also be restarted."),(0,r.kt)("p",null,"If you configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-plugin-*")," plugin for a given route, a request to hit that route will trigger an ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC")," call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Unix Socket"),". The call is split into two phases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/ext-plugin-pre-req.md"},"ext-plugin-pre-req"),": Before executing the ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache APISIX")," built-in plugin (Lua language plugin)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/ext-plugin-post-req.md"},"ext-plugin-post-req"),": after executing the ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache APISIX")," plug-in (Lua language plug-in).")),(0,r.kt)("p",null,"You can choose and configure the execution timing of ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," as needed."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Runner")," handles the ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC")," call, creates a simulated request inside it, and then runs the multilingual plugin and returns the result to Apache APISIX."),(0,r.kt)("p",null,"The execution order of multilingual plugins is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-plugin-*")," plugin configuration entry, and like other plugins, they can be enabled and redefined on the fly."),(0,r.kt)("h2",{id:"deploy-test"},"Deploy test"),(0,r.kt)("h3",{id:"base-runtime-environment"},"Base runtime environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache APISIX 2.7"),(0,r.kt)("li",{parentName:"ul"},"Python 3.6+")),(0,r.kt)("p",null,"To deploy Apache APISIX, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/how-to-build.md"},"Apache APISIX official documentation: How to build Apache APISIX")," for details."),(0,r.kt)("h3",{id:"download-and-install-python-runner"},"Download and install Python Runner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/apache/apisix-python-plugin-runner.git\n$ cd apisix-python-plugin-runner\n$ make install\n")),(0,r.kt)("h3",{id:"configuring-python-runner"},"Configuring Python Runner"),(0,r.kt)("h4",{id:"development-mode"},"development mode"),(0,r.kt)("h5",{id:"run-python-runner"},"Run Python Runner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /path/to/apisix-python-plugin-runner\n$ APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock python3 apisix/main.py start\n")),(0,r.kt)("h5",{id:"modify-apisix-configuration-file"},"Modify APISIX configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ vim /path/to/apisix/conf/config.yaml\napisix:\n  admin_key:\n    - name: "admin"\n      key: edd1c9f034335f136f87ad84b625c8f1\n      role: admin\next-plugin:\n  path_for_test: /tmp/runner.sock\n')),(0,r.kt)("h4",{id:"production-mode"},"Production mode"),(0,r.kt)("h5",{id:"modify-apisix-configuration-file-1"},"Modify APISIX configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ vim /path/to/apisix/conf/config.yaml\napisix:\n  admin_key:\n    - name: "admin"\n      key: edd1c9f034335f136f87ad84b625c8f1\n      role: admin\next-plugin:\n  cmd: [ "python3", "/path/to/apisix-python-plugin-runner/apisix/main.py", "start" ]\n')),(0,r.kt)("h4",{id:"python-runner-configuration-optional"},"Python Runner configuration (optional)"),(0,r.kt)("p",null,"If you need to adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"Log Level")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Unix Domain Socket")," environment variables, you can modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Runner")," configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim /path/to/apisix-python-plugin-runner/apisix/config.yaml\nsocket:\n  file: $env.APISIX_LISTEN_ADDRESS # Environment variable or absolute path\n\nlogging:\n  level: debug # error warn info debug\ndebug\n")),(0,r.kt)("h3",{id:"start-python-runner"},"Start Python Runner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /path/to/apisix\n# Start or Restart\n$ ./bin/apisix [ start | restart ]\n")),(0,r.kt)("p",null,"Start or restart ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX"),", when ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Python Runner")," have been configured and started."),(0,r.kt)("h3",{id:"testing-python-runner"},"Testing Python Runner"),(0,r.kt)("h4",{id:"configuring-apache-apisix-routing-and-plugin-information"},"Configuring Apache APISIX Routing and Plugin Information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Test with the default demo plugin\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        { "name": "stop", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins.ext-plugin-pre-req.conf")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Runner")," plugin configuration, ",(0,r.kt)("inlineCode",{parentName:"li"},"conf")," is an array format to set multiple plugins at the same time."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," in the plugin configuration object is the name of the plugin, which should be the same as the plugin code file and object name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," in the plugin configuration object is the plugin configuration, which can be a ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," string.")),(0,r.kt)("h4",{id:"access-verification"},"access verification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://127.0.0.1:9080/get -i\nHTTP/1.1 200 OK\nDate: Fri, 13 Aug 2021 13:39:18 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nhost: 127.0.0.1:9080\naccept: */*\nuser-agent: curl/7.64.1\nX-Resp-A6-Runner: Python\nServer: APISIX/2.7\n\nHello, Python Runner of APISIX\n")),(0,r.kt)("h2",{id:"plugin-development"},"Plugin Development"),(0,r.kt)("h3",{id:"plugin-directory"},"Plugin directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/apisix-python-plugin-runner/apisix/plugins\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".py")," files in this directory will be loaded automatically."),(0,r.kt)("h3",{id:"plugin-example"},"Plugin example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/apisix-python-plugin-runner/apisix/plugins/stop.py\n/path/to/apisix-python-plugin-runner/apisix/plugins/rewrite.py\n")),(0,r.kt)("h3",{id:"plugin-format"},"Plugin format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from apisix.runner.plugin.base import Base\nfrom apisix.runner.http.request import Request\nfrom apisix.runner.http.response import Response\n\n\nclass Stop(Base):\n    def __init__(self):\n        """\n        Example of `stop` type plugin, features:\n            This type of plugin can customize response `body`, `header`, `http_code`\n            This type of plugin will interrupt the request\n        """\n        super(Stop, self). __init__(self.__class__. __name__)\n\n    def filter(self, request: Request, response: Response):\n        """\n        The plugin executes the main function\n        :param request:\n            request parameters and information\n        :param response:\n            response parameters and information\n        :return:\n        """\n        # In the plugin you can get the configuration information through `self.config`,\n        # if the plugin configuration is JSON it will be automatically converted to\n        # a dictionary structure\n        # print(self.config)\n\n        # set the response headers\n        headers = request.headers\n        headers["X-Resp-A6-Runner"] = "Python"\n        response.headers = headers\n\n        # Set the response body information\n        response.body = "Hello, Python Runner of APISIX"\n\n        # Set the response status code\n        response.status_code = 201\n\n        # Interrupt the request process by calling `self.stop()`, which will immediately respond to the client\n        # If `self.stop()` is not shown or if `self.rewrite()` is shown, the request will continue\n        # Default is `self.rewrite()`\n        self.stop()\n')),(0,r.kt)("h3",{id:"plugin-specifications-and-considerations"},"Plugin specifications and considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin object implementation must inherit from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Base")," class"),(0,r.kt)("li",{parentName:"ul"},"The plugin must implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"filter")," function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter")," function parameters can only contain ",(0,r.kt)("inlineCode",{parentName:"li"},"Request")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Response")," class objects as parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Request")," object parameter can get request information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Response")," object parameter can set the response information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self.config")," can get the plugin configuration information"),(0,r.kt)("li",{parentName:"ul"},"Calling ",(0,r.kt)("inlineCode",{parentName:"li"},"self.stop()")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"filter")," function will immediately break the request and respond to the data."),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"self.rewrite()")," is called in the ",(0,r.kt)("inlineCode",{parentName:"li"},"filter")," function, the request will continue.")),(0,r.kt)("h2",{id:"welcome-to-participate"},"Welcome to participate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Runner")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," languages is still in the early stages of development, and we will continue to improve its functionality. A successful open source project cannot be achieved without everyone's participation and contribution, welcome to participate in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX Runner"),".\nLet's build a bridge between ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," and other languages together."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-python-plugin-runner"},"apisix-python-plugin-runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner"},"apisix-java-plugin-runner"))),(0,r.kt)("h2",{id:"related-reading"},"Related Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://apisix.apache.org/blog/2021/08/19/go-makes-Apache-APISIX-better"},"Go gives Apache APISIX a run for its money")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins"},"How to write Apache APISIX plugins in Java"))))}c.isMDXComponent=!0},32795:function(e,n,t){n.Z=t.p+"assets/images/2021-09-06-1-309b019beba33f8b42cef1731324c711.png"}}]);