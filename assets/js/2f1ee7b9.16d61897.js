(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(229)),l={title:"Router radixtree"},b={unversionedId:"router-radixtree",id:"router-radixtree",isDocsHomePage:!1,title:"Router radixtree",description:"\x3c!--",source:"@site/docs/apisix/router-radixtree.md",slug:"/router-radixtree",permalink:"/docs/apisix/router-radixtree",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/router-radixtree.md",version:"current",sidebar:"docs",previous:{title:"Health Check",permalink:"/docs/apisix/health-check"},next:{title:"Stand-alone mode",permalink:"/docs/apisix/stand-alone"}},o=[{value:"what&#39;s libradixtree?",id:"whats-libradixtree",children:[]},{value:"How to use libradixtree in APISIX?",id:"how-to-use-libradixtree-in-apisix",children:[]},{value:"How to filter route by Nginx builtin variable",id:"how-to-filter-route-by-nginx-builtin-variable",children:[]},{value:"How to filter route by graphql attributes",id:"how-to-filter-route-by-graphql-attributes",children:[]}],c={toc:o};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"whats-libradixtree"},"what's libradixtree?"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree"},"libradixtree"),", adaptive radix trees implemented in Lua for OpenResty."),Object(i.b)("p",null,"APISIX using libradixtree as route dispatching library."),Object(i.b)("h3",{id:"how-to-use-libradixtree-in-apisix"},"How to use libradixtree in APISIX?"),Object(i.b)("p",null,"This is Lua-Openresty implementation library base on FFI for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/antirez/rax"},"rax"),"."),Object(i.b)("p",null,"Let's take a look at a few examples and have an intuitive understanding."),Object(i.b)("h4",{id:"1-full-match"},"1. Full match"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"/blog/foo\n")),Object(i.b)("p",null,"It will only match ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/foo"),"."),Object(i.b)("h4",{id:"2-prefix-matching"},"2. Prefix matching"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"/blog/bar*\n")),Object(i.b)("p",null,"It will match the path with the prefix ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/bar"),", eg: ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/bar/a"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"/blog/bar/b"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/bar/c/d/e"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/bar")," etc."),Object(i.b)("h4",{id:"3-match-priority"},"3. Match priority"),Object(i.b)("p",null,"Full match -> Deep prefix matching."),Object(i.b)("p",null,"Here are the rules:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"/blog/foo/*\n/blog/foo/a/*\n/blog/foo/c/*\n/blog/foo/bar\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"path"),Object(i.b)("th",{parentName:"tr",align:null},"Match result"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/blog/foo/bar"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/blog/foo/bar"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/blog/foo/a/b/c"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/blog/foo/a/*"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/blog/foo/c/d"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/blog/foo/c/*"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/blog/foo/gloo"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/blog/foo/*"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"/blog/bar"),Object(i.b)("td",{parentName:"tr",align:null},"not match")))),Object(i.b)("h4",{id:"4-parameter-match"},"4. Parameter match"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"radixtree_uri_with_parameter")," is used, we can match routes with parameters."),Object(i.b)("p",null,"For example, with configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    router:\n        http: 'radixtree_uri_with_parameter'\n")),Object(i.b)("p",null,"route like"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"/blog/:name\n")),Object(i.b)("p",null,"will match both ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/dog")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/blog/cat"),"."),Object(i.b)("p",null,"For more details, see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"},"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"),"."),Object(i.b)("h3",{id:"how-to-filter-route-by-nginx-builtin-variable"},"How to filter route by Nginx builtin variable"),Object(i.b)("p",null,"Please take a look at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree#new"},"radixtree-new"),",\nhere is an simple example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["http_host", "==", "iresty.com"],\n        ["cookie_device_id", "==", "a66f0cdc4ba2df8c096f74c9110163a9"],\n        ["arg_name", "==", "json"],\n        ["arg_age", ">", "18"],\n        ["arg_address", "~~", "China.*"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"This route will require the request header ",Object(i.b)("inlineCode",{parentName:"p"},"host")," equal ",Object(i.b)("inlineCode",{parentName:"p"},"iresty.com"),", request cookie key ",Object(i.b)("inlineCode",{parentName:"p"},"_device_id")," equal ",Object(i.b)("inlineCode",{parentName:"p"},"a66f0cdc4ba2df8c096f74c9110163a9")," etc."),Object(i.b)("h3",{id:"how-to-filter-route-by-graphql-attributes"},"How to filter route by graphql attributes"),Object(i.b)("p",null,"APISIX supports filtering route by some attributes of graphql. Currently we support:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"graphql_operation"),Object(i.b)("li",{parentName:"ul"},"graphql_name"),Object(i.b)("li",{parentName:"ul"},"graphql_root_fields")),Object(i.b)("p",null,"For instance, with graphql like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"graphql_operation")," is ",Object(i.b)("inlineCode",{parentName:"li"},"query")),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"graphql_name")," is ",Object(i.b)("inlineCode",{parentName:"li"},"getRepo"),","),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"graphql_root_fields")," is ",Object(i.b)("inlineCode",{parentName:"li"},'["owner", "repo"]'))),Object(i.b)("p",null,"We can filter such route out with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "methods": ["POST"],\n    "uri": "/_graphql",\n    "vars": [\n        ["graphql_operation", "==", "query"],\n        ["graphql_name", "==", "getRepo"],\n        ["graphql_root_fields", "has", "owner"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"To prevent spending too much time reading invalid graphql request body, we only read the first 1 MiB\ndata from the request body. This limitation is configured via:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  max_size: 1048576\n\n")),Object(i.b)("p",null,"If you need to pass a graphql body which is larger than the limitation, you can increase the value in ",Object(i.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."))}p.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,m=u["".concat(l,".").concat(s)]||u[s]||d[s]||i;return r?n.a.createElement(m,b(b({ref:t},c),{},{components:r})):n.a.createElement(m,b({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);