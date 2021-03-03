(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(229)),l={title:"basic-auth"},c={unversionedId:"plugins/basic-auth",id:"plugins/basic-auth",isDocsHomePage:!1,title:"basic-auth",description:"\x3c!--",source:"@site/docs/apisix/plugins/basic-auth.md",slug:"/plugins/basic-auth",permalink:"/docs/apisix/plugins/basic-auth",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/basic-auth.md",version:"current",sidebar:"docs",previous:{title:"jwt-auth",permalink:"/docs/apisix/plugins/jwt-auth"},next:{title:"authz-keycloak",permalink:"/docs/apisix/plugins/authz-keycloak"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"1. set a consumer and config the value of the <code>basic-auth</code> option",id:"1-set-a-consumer-and-config-the-value-of-the-basic-auth-option",children:[]},{value:"2. add a Route or add a Service, and enable the <code>basic-auth</code> plugin",id:"2-add-a-route-or-add-a-service-and-enable-the-basic-auth-plugin",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],b={toc:u};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#name"},Object(i.b)("strong",{parentName:"a"},"Name"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#attributes"},Object(i.b)("strong",{parentName:"a"},"Attributes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-enable"},Object(i.b)("strong",{parentName:"a"},"How To Enable"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#test-plugin"},Object(i.b)("strong",{parentName:"a"},"Test Plugin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#disable-plugin"},Object(i.b)("strong",{parentName:"a"},"Disable Plugin")))),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"basic-auth")," is an authentication plugin that need to work with ",Object(i.b)("inlineCode",{parentName:"p"},"consumer"),". Add Basic Authentication to a ",Object(i.b)("inlineCode",{parentName:"p"},"service")," or ",Object(i.b)("inlineCode",{parentName:"p"},"route"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"consumer")," then adds its key to the request header to verify its request."),Object(i.b)("p",null,"For more information on Basic authentication, refer to ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Wiki")," for more information."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Requirement"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Valid"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"username"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"required"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Different ",Object(i.b)("inlineCode",{parentName:"td"},"consumer")," should have different value which is unique. When different ",Object(i.b)("inlineCode",{parentName:"td"},"consumer")," use a same ",Object(i.b)("inlineCode",{parentName:"td"},"username"),", a request matching exception would be raised.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"password"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"required"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"the user's password")))),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("h3",{id:"1-set-a-consumer-and-config-the-value-of-the-basic-auth-option"},"1. set a consumer and config the value of the ",Object(i.b)("inlineCode",{parentName:"h3"},"basic-auth")," option"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "foo",\n    "plugins": {\n        "basic-auth": {\n            "username": "foo",\n            "password": "bar"\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"you can visit Dashboard ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/")," and add a Consumer through the web console:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/basic-auth-1.png",alt:"auth-1"})),Object(i.b)("p",null,"then add basic-auth plugin in the Consumer page:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/basic-auth-2.png",alt:"auth-2"})),Object(i.b)("h3",{id:"2-add-a-route-or-add-a-service-and-enable-the-basic-auth-plugin"},"2. add a Route or add a Service, and enable the ",Object(i.b)("inlineCode",{parentName:"h3"},"basic-auth")," plugin"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "basic-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"missing Authorization header")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing authorization in request"}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"user is not exists:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -ubar:bar http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user key in authorization"}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"password is invalid:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -ufoo:foo http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Password is error"}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"success:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -ufoo:bar http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"p"},"basic-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/apisix/admin/routes/1 -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}o.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);