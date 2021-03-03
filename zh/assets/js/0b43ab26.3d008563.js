(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{229:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),o=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=o(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(t),m=a,s=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return t?r.a.createElement(s,b(b({ref:n},c),{},{components:t})):r.a.createElement(s,b({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=m;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var c=2;c<l;c++)p[c]=t[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return o}));var a=t(3),r=t(7),l=(t(0),t(229)),p={title:"request-validation"},b={unversionedId:"plugins/request-validation",id:"plugins/request-validation",isDocsHomePage:!1,title:"request-validation",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/request-validation.md",slug:"/plugins/request-validation",permalink:"/zh/docs/apisix/plugins/request-validation",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/request-validation.md",version:"current",sidebar:"docs",previous:{title:"proxy-cache",permalink:"/zh/docs/apisix/plugins/proxy-cache"},next:{title:"proxy-mirror",permalink:"/zh/docs/apisix/plugins/proxy-mirror"}},i=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u79f0",id:"\u540d\u79f0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],c={toc:i};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%90%8D%E7%A7%B0"},Object(l.b)("strong",{parentName:"a"},"\u540d\u79f0"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},Object(l.b)("strong",{parentName:"a"},"\u5c5e\u6027"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},Object(l.b)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A4%BA%E4%BE%8B"},Object(l.b)("strong",{parentName:"a"},"\u793a\u4f8b")))),Object(l.b)("h2",{id:"\u540d\u79f0"},"\u540d\u79f0"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"request-validation")," \u63d2\u4ef6\u7528\u4e8e\u63d0\u524d\u9a8c\u8bc1\u8bf7\u6c42\u5411\u4e0a\u6e38\u8f6c\u53d1\u8bf7\u6c42\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u8bf7\u6c42\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"body")," \u53ca ",Object(l.b)("inlineCode",{parentName:"p"},"header")," \u6570\u636e\u3002"),Object(l.b)("p",null,"\u8be5\u63d2\u4ef6\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"Json Schema")," \u8fdb\u884c\u6570\u636e\u9a8c\u8bc1\uff0c\u6709\u5173 ",Object(l.b)("inlineCode",{parentName:"p"},"Json Schema")," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/api7/jsonschema"},"JSON schema"),"\u3002"),Object(l.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"header_schema"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"header")," \u6570\u636e\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"schema")," \u6570\u636e\u7ed3\u6784")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"body_schema"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"body")," \u6570\u636e\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"schema")," \u6570\u636e\u7ed3\u6784")))),Object(l.b)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),Object(l.b)("p",null,"\u521b\u5efa\u4e00\u6761\u8def\u7531\u5e76\u5728\u8be5\u8def\u7531\u4e0a\u542f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"request-validation")," \u63d2\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "request-validation": {\n            "body_schema": {\n                "type": "object",\n                "required": ["required_payload"],\n                "properties": {\n                    "required_payload": {"type": "string"},\n                    "boolean_payload": {"type": "boolean"}\n                }\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),Object(l.b)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"boolean-payload":true,"required_payload":"hello"}\' \\\n  http://127.0.0.1:9080/get\n')),Object(l.b)("p",null,"\u5982\u679c ",Object(l.b)("inlineCode",{parentName:"p"},"Schema")," \u9a8c\u8bc1\u5931\u8d25\uff0c\u5c06\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"p"},"400 bad request")," \u9519\u8bef\u3002"),Object(l.b)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u5728\u8def\u7531 ",Object(l.b)("inlineCode",{parentName:"p"},"plugins")," \u914d\u7f6e\u5757\u4e2d\u5220\u9664 ",Object(l.b)("inlineCode",{parentName:"p"},"request-validation")," \u914d\u7f6e\uff0c\u5373\u53ef\u7981\u7528\u8be5\u63d2\u4ef6\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),Object(l.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u679a\u4e3e\uff08Enums\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["enum_payload"],\n        "properties": {\n            "enum_payload": {\n                "type": "string",\n                "enum": ["enum_string_1", "enum_string_2"],\n                "default": "enum_string_1"\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5e03\u5c14\uff08Boolean\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["bool_payload"],\n        "properties": {\n            "bool_payload": {\n                "type": "boolean",\n                "default": true\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6570\u5b57\u8303\u56f4\uff08Number or Integer\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["integer_payload"],\n        "properties": {\n            "integer_payload": {\n                "type": "integer",\n                "minimum": 1,\n                "maximum": 65535\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u957f\u5ea6\uff08String\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["string_payload"],\n        "properties": {\n            "string_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6b63\u5219\u8868\u8fbe\u5f0f\uff08Regex\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["regex_payload"],\n        "properties": {\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6570\u7ec4\uff08Array\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["array_payload"],\n        "properties": {\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u591a\u5b57\u6bb5\u7ec4\u5408\uff08Multiple Fields\uff09\u9a8c\u8bc1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["boolean_payload", "array_payload", "regex_payload"],\n        "properties": {\n            "boolean_payload": {\n                "type": "boolean"\n            },\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            },\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')))}o.isMDXComponent=!0}}]);