(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(229)),i={title:"skywalking"},p={unversionedId:"plugins/skywalking",id:"plugins/skywalking",isDocsHomePage:!1,title:"skywalking",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/skywalking.md",slug:"/plugins/skywalking",permalink:"/zh/docs/apisix/plugins/skywalking",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/skywalking.md",version:"current",sidebar:"docs",previous:{title:"zipkin",permalink:"/zh/docs/apisix/plugins/zipkin"},next:{title:"http-logger",permalink:"/zh/docs/apisix/plugins/http-logger"}},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u5982\u4f55\u8bbe\u7f6e endpoint",id:"\u5982\u4f55\u8bbe\u7f6e-endpoint",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u8fd0\u884c Skywalking \u5b9e\u4f8b",id:"\u8fd0\u884c-skywalking-\u5b9e\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u4e0a\u6e38\u670d\u52a1\u662f java \u7684 SpringBoot \u793a\u4f8b\u4ee3\u7801",id:"\u4e0a\u6e38\u670d\u52a1\u662f-java-\u7684-springboot-\u793a\u4f8b\u4ee3\u7801",children:[]}],b={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},"\u540d\u5b57")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},"\u5c5e\u6027")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},"\u5982\u4f55\u542f\u7528")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E8%BF%90%E8%A1%8C-Skywalking-%E5%AE%9E%E4%BE%8B"},"\u8fd0\u884c Skywalking \u5b9e\u4f8b")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},"\u7981\u7528\u63d2\u4ef6")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E4%B8%8A%E6%B8%B8%E6%9C%8D%E5%8A%A1%E6%98%AFjava%E7%9A%84SpringBoot%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81"},"\u4e0a\u6e38\u670d\u52a1\u662fjava\u7684SpringBoot\u793a\u4f8b\u4ee3\u7801"))),Object(l.b)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Skywalking"),"(",Object(l.b)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"https://github.com/apache/skywalking"),") \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u670d\u52a1\u8ddf\u8e2a\u63d2\u4ef6\u3002"),Object(l.b)("p",null,"\u670d\u52a1\u7aef\u76ee\u524d\u652f\u6301http\u548cgrpc\u4e24\u79cd\u534f\u8bae\uff0c\u5728apisix\u4e2d\u76ee\u524d\u53ea\u652f\u6301http\u534f\u8bae"),Object(l.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sample_ratio"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"[0.00001, 1]"),Object(l.b)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7684\u6bd4\u4f8b")))),Object(l.b)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),Object(l.b)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"config.yaml")," \u91cc\u9762\u542f\u7528 Skywalking \u63d2\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"# \u52a0\u5230 config.yaml\nplugins:\n  - ... # plugin you need\n  - skywalking\n")),Object(l.b)("p",null,"\u7136\u540e\u91cd\u8f7d APISIX\uff0c\u8fd9\u6837\u4f1a\u521b\u5efa\u4e00\u4e2a\u540e\u53f0\u5b9a\u65f6\u5668\uff0c\u5411 skywalking \u670d\u52a1\u5668\u5b9a\u671f\u4e0a\u62a5\u6570\u636e\u3002"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 skywalking \u63d2\u4ef6:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "skywalking": {\n            "sample_ratio": 1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff1a"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-1.png",alt:"plugin_skywalking"})),Object(l.b)("p",null,"\u7136\u540e\u5728 route \u9875\u9762\u4e2d\u6dfb\u52a0 skywalking \u63d2\u4ef6\uff1a"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-2.png",alt:"plugin_skywalking"})),Object(l.b)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e-endpoint"},"\u5982\u4f55\u8bbe\u7f6e endpoint"),Object(l.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",Object(l.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u914d\u7f6e\u6765\u6307\u5b9a endpoint\uff1a"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service_name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'"APISIX"'),Object(l.b)("td",{parentName:"tr",align:null},"skywalking \u4e0a\u62a5\u7684 service \u540d\u79f0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service_instance_name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'"APISIX Instance Name"'),Object(l.b)("td",{parentName:"tr",align:null},"skywalking \u4e0a\u62a5\u7684 service \u5b9e\u4f8b\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"endpoint"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'"',Object(l.b)("a",{parentName:"td",href:"http://127.0.0.1:12800%22"},'http://127.0.0.1:12800"')),Object(l.b)("td",{parentName:"tr",align:null},"Skywalking \u7684 HTTP endpoint \u5730\u5740\uff0c\u4f8b\u5982\uff1a",Object(l.b)("a",{parentName:"td",href:"http://127.0.0.1:12800"},"http://127.0.0.1:12800"))))),Object(l.b)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'plugin_attr:\n  skywalking:\n    service_name: APISIX\n    service_instance_name: "APISIX Instance Name"\n    endpoint_addr: http://127.0.0.1:12800\n')),Object(l.b)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(l.b)("h3",{id:"\u8fd0\u884c-skywalking-\u5b9e\u4f8b"},"\u8fd0\u884c Skywalking \u5b9e\u4f8b"),Object(l.b)("h4",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u542f\u52a8 Skywalking Server:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u9ed8\u8ba4\u4f7f\u7528 H2 \u5b58\u50a8\uff0c\u76f4\u63a5\u542f\u52a8 skywalking \u5373\u53ef"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking -d -p 1234:1234 -p 11800:11800 -p 12800:12800 --restart always apache/skywalking-oap-server:8.3.0-es6\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 Elasticsearch \u5b58\u50a8"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u5219\u9700\u8981\u5148\u5b89\u88c5 Elasticsearch:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 --restart always -e "discovery.type=single-node" elasticsearch:6.7.2\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u5b89\u88c5 ElasticSearch \u7ba1\u7406\u754c\u9762 elasticsearch-hq"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name elastic-hq -p 5000:5000 --restart always elastichq/elasticsearch-hq\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u542f\u52a8 skywalking\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking -d -p 1234:1234 -p 11800:11800 -p 12800:12800 --restart always --link elasticsearch:elasticsearch -e SW_STORAGE=elasticsearch -e SW_STORAGE_ES_CLUSTER_NODES=elasticsearch:9200 apache/skywalking-oap-server:8.3.0-es6\n"))))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Skywalking \u7ba1\u7406\u7cfb\u7edf\uff1a"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u542f\u52a8\u7ba1\u7406\u7cfb\u7edf\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking-ui -d -p 8080:8080 --link skywalking:skywalking -e SW_OAP_ADDRESS=skywalking:12800 --restart always apache/skywalking-ui\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u6253\u5f00\u7ba1\u7406\u9875\u9762\n\u5728\u6d4f\u89c8\u5668\u91cc\u9762\u8f93\u5165 ",Object(l.b)("a",{parentName:"p",href:"http://10.110.149.175:8080%EF%BC%8C%E5%87%BA%E7%8E%B0%E4%BA%86%E5%A6%82%E4%B8%8B%E7%95%8C%E9%9D%A2%EF%BC%8C%E5%88%99%E8%A1%A8%E7%A4%BA%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F"},"http://10.110.149.175:8080\uff0c\u51fa\u73b0\u4e86\u5982\u4e0b\u754c\u9762\uff0c\u5219\u8868\u793a\u5b89\u88c5\u6210\u529f")),Object(l.b)("p",{parentName:"li"},Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-3.png",alt:"plugin_skywalking"}))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u793a\u4f8b:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u901a\u8fc7\u8bbf\u95eeapisix\uff0c\u8bbf\u95ee\u4e0a\u6e38\u670d\u52a1"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -v http://10.110.149.192:9080/uid/12\nHTTP/1.1 200 OK\nOK\n...\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee Skywalking \u7684 web \u9875\u9762\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"http://10.110.149.175:8080/\n")),Object(l.b)("p",{parentName:"li"},"  \u53ef\u4ee5\u770b\u5230\u8bbf\u95ee\u62d3\u6251\u56fe\\\n",Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-4.png",alt:"plugin_skywalking"}),"\\\n\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u8ffd\u8e2a\u56fe\\\n",Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-5.png",alt:"plugin_skywalking"})))))),Object(l.b)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389\u8def\u7531\u4e0a\u7684\u63d2\u4ef6\u89c4\u5219\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/v2/keys/apisix/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 Skywalking \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u60f3\u5b8c\u5168\u7981\u7528 skywalking \u63d2\u4ef6\uff0c\u6bd4\u5982\u505c\u6389\u540e\u53f0\u4e0a\u62a5\u6570\u636e\u7684\u5b9a\u65f6\u5668\uff0c\u9700\u8981\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"config.yaml"),"\n\u91cc\u628a\u63d2\u4ef6\u6ce8\u91ca\u6389\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  - ... # plugin you need\n  #- skywalking\n")),Object(l.b)("p",null,"\u7136\u540e\u91cd\u8f7d APISIX\u3002"),Object(l.b)("h2",{id:"\u4e0a\u6e38\u670d\u52a1\u662f-java-\u7684-springboot-\u793a\u4f8b\u4ee3\u7801"},"\u4e0a\u6e38\u670d\u52a1\u662f java \u7684 SpringBoot \u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'package com.lenovo.ai.controller;\n\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport javax.servlet.http.HttpServletRequest;\n\n/**\n * @author cyxinda\n * @create 2020-05-29 14:02\n * @desc skywalking\u6d4b\u8bd5\u4e2d\u592e\u63a7\u5236\u5c42\n **/\n@RestController\npublic class TestController {\n    @RequestMapping("/uid/{count}")\n    public String getUidList(@PathVariable("count") String countStr, HttpServletRequest request) {\n        System.out.println("counter:::::"+countStr);\n       return "OK";\n    }\n}\n\n')),Object(l.b)("p",null,"\u542f\u52a8\u670d\u52a1\u7684\u65f6\u5019\uff0c\u9700\u8981\u914d\u7f6eskywalking agent,\n\u4fee\u6539agent/config/agent.config\u4e2d\u7684\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"agent.service_name=yourservername\ncollector.backend_service=10.110.149.175:11800\n")),Object(l.b)("p",null,"\u542f\u52a8\u670d\u52a1\u811a\u672c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"nohup java -javaagent:/root/skywalking/app/agent/skywalking-agent.jar \\\n-jar /root/skywalking/app/app.jar \\\n--server.port=8089 \\\n2>&1 > /root/skywalking/app/logs/nohup.log &\n")))}s.isMDXComponent=!0},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),o=s(a),m=n,g=o["".concat(i,".").concat(m)]||o[m]||u[m]||l;return a?r.a.createElement(g,p(p({ref:t},b),{},{components:a})):r.a.createElement(g,p({ref:t},b))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);