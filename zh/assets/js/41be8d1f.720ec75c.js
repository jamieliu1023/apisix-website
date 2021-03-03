(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),i=(n(0),n(229)),l={title:"zipkin"},p={unversionedId:"plugins/zipkin",id:"plugins/zipkin",isDocsHomePage:!1,title:"zipkin",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/zipkin.md",slug:"/plugins/zipkin",permalink:"/zh/docs/apisix/plugins/zipkin",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/zipkin.md",version:"current",sidebar:"docs",previous:{title:"prometheus",permalink:"/zh/docs/apisix/plugins/prometheus"},next:{title:"skywalking",permalink:"/zh/docs/apisix/plugins/skywalking"}},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u8fd0\u884c Zipkin \u5b9e\u4f8b",id:"\u8fd0\u884c-zipkin-\u5b9e\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u4e0a\u6e38\u670d\u52a1\u662fGolang\u7684\u793a\u4f8b\u4ee3\u7801",id:"\u4e0a\u6e38\u670d\u52a1\u662fgolang\u7684\u793a\u4f8b\u4ee3\u7801",children:[]}],b={toc:c};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},Object(i.b)("strong",{parentName:"a"},"\u540d\u5b57"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},Object(i.b)("strong",{parentName:"a"},"\u5c5e\u6027"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},Object(i.b)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},Object(i.b)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},Object(i.b)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),Object(i.b)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"zipkin"),"(",Object(i.b)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin"},"https://github.com/openzipkin/zipkin"),") \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u670d\u52a1\u8ddf\u8e2a\u63d2\u4ef6\u3002"),Object(i.b)("p",null,"\u5b83\u8fd8\u53ef\u4ee5\u5728 \u201cApache SkyWalking\u201d \u4e0a\u8fd0\u884c\uff0c\u652f\u6301 Zipkin v1/v2 \u683c\u5f0f\u3002"),Object(i.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(i.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(i.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(i.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(i.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(i.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Zipkin \u7684 http \u8282\u70b9\uff0c\u4f8b\u5982",Object(i.b)("inlineCode",{parentName:"td"},"http://127.0.0.1:9411/api/v2/spans"),"\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"sample_ratio"),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"[0.00001, 1]"),Object(i.b)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7684\u6bd4\u4f8b")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"service_name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(i.b)("td",{parentName:"tr",align:null},'"APISIX"'),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"\u6807\u8bb0\u5f53\u524d\u670d\u52a1\u7684\u540d\u79f0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"server_addr"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"\u6807\u8bb0\u5f53\u524d APISIX \u5b9e\u4f8b\u7684IP\u5730\u5740\uff0c\u9ed8\u8ba4\u503c\u662f nginx \u7684\u5185\u7f6e\u53d8\u91cf",Object(i.b)("inlineCode",{parentName:"td"},"server_addr"))))),Object(i.b)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),Object(i.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 zipkin \u63d2\u4ef6:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/zipkin-1.png",alt:null})),Object(i.b)("p",null,"\u7136\u540e\u5728 route \u9875\u9762\u4e2d\u6dfb\u52a0 zipkin \u63d2\u4ef6\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/zipkin-2.png",alt:null})),Object(i.b)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(i.b)("h3",{id:"\u8fd0\u884c-zipkin-\u5b9e\u4f8b"},"\u8fd0\u884c Zipkin \u5b9e\u4f8b"),Object(i.b)("p",null,"e.g. \u7528docker:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sudo docker run -d -p 9411:9411 openzipkin/zipkin\n")),Object(i.b)("p",null,"\u6d4b\u8bd5\u793a\u4f8b:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n...\n")),Object(i.b)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee Zipkin \u7684 web \u9875\u9762\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"http://127.0.0.1:9411/zipkin\n")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/zipkin-1.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/zipkin-2.jpg",alt:null})),Object(i.b)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(i.b)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/v2/keys/apisix/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 Zipkin \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"),Object(i.b)("h2",{id:"\u4e0a\u6e38\u670d\u52a1\u662fgolang\u7684\u793a\u4f8b\u4ee3\u7801"},"\u4e0a\u6e38\u670d\u52a1\u662fGolang\u7684\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-golang"},'func GetTracer(serviceName string, port int, enpoitUrl string, rate float64) *zipkin.Tracer {\n    // create a reporter to be used by the tracer\n    reporter := httpreporter.NewReporter(enpoitUrl)\n    // set-up the local endpoint for our service host is  ip:host\n\n    thisip, _ := GetLocalIP()\n\n    host := fmt.Sprintf("%s:%d", thisip, port)\n    endpoint, _ := zipkin.NewEndpoint(serviceName, host)\n    // set-up our sampling strategy\n    sampler, _ := zipkin.NewCountingSampler(rate)\n    // initialize the tracer\n    tracer, _ := zipkin.NewTracer(\n        reporter,\n        zipkin.WithLocalEndpoint(endpoint),\n        zipkin.WithSampler(sampler),\n    )\n    return tracer\n}\n\nfunc main(){\n    r := gin.Default()\n\n    tracer := GetTracer(...)\n\n    // use middleware to extract parentID from http header that injected by APISIX\n    r.Use(func(c *gin.Context) {\n        span := this.Tracer.Extract(b3.ExtractHTTP(c.Request))\n        childSpan := this.Tracer.StartSpan(spanName, zipkin.Parent(span))\n        defer childSpan.Finish()\n        c.Next()\n    })\n\n}\n')))}o.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,p(p({ref:t},b),{},{components:n})):a.a.createElement(m,p({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);