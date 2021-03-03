(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(229)),a={title:"FAQ"},s={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/FAQ.md",slug:"/FAQ",permalink:"/docs/ingress-controller/FAQ",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/FAQ.md",version:"current",sidebar:"docs",previous:{title:"Contributing to apisix-ingress-controller",permalink:"/docs/ingress-controller/contribute"}},l=[],c={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"How to bind Service and Upstream?")),Object(o.b)("p",null,"All resource objects are uniquely determined by the namespace / name / port combination Id. If the combined Id is the same, the ",Object(o.b)("inlineCode",{parentName:"p"},"service")," and ",Object(o.b)("inlineCode",{parentName:"p"},"upstream")," will be considered as a binding relationship."),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"When modifying a CRD, how do other binding objects perceive it?")),Object(o.b)("p",null,"This is a cascading update problem, see for details ",Object(o.b)("a",{parentName:"p",href:"/docs/ingress-controller/design"},"apisix-ingress-controller Design ideas")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Can I mix CRDs and admin api to define routing rules?")),Object(o.b)("p",null,"No, currently we are implementing one-way synchronization, that is, CRDs file -> Apache AIPSIX. If the configuration is modified separately through admin api, it will not be synchronized to CRDs in Kubernetes."),Object(o.b)("p",null,"This is because CRDs are generally declared in the file system, and Apply to enter Kubernetes etcd, we follow the definition of CRDs and synchronize to Apache Apisix Data Plane, but the reverse will make the situation more complicated."),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Why there are some error logs like "list upstreams failed, err: http get failed, url: blahblahblah, err: status: 401"?')),Object(o.b)("p",null,"So far apisix-ingress-controller doesn't support set admin_key for Apache APISIX, so when you deploy your APISIX cluster, admin_key should be removed from config."),Object(o.b)("p",null,"Note since APISIX have two configuration files, the first is config.yaml, which contains the user specified configs, the other is config-default.yaml, which has all default items, config items in these two files will be merged. So admin_key in both files should be removed. You can customize these two configuration files and mount them to APISIX deployment."),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Failed to create route with ",Object(o.b)("inlineCode",{parentName:"li"},"ApisixRoute"),"?")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," creates a route with CRD, it checks the ",Object(o.b)("inlineCode",{parentName:"p"},"Endpoint")," resources in Kubernetes (matched by namespace_name_port). If the corresponding endpoint information is not found, the route will not be created and wait for the next retry."),Object(o.b)("p",null,"Tips: The failure caused by empty upstream nodes is a limitation of Apache APISIX, related ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/3072"},"issue")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"What is the retry rule of ",Object(o.b)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),"?")),Object(o.b)("p",null,"If an error occurs during the process of ",Object(o.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," parsing CRD and distributing the configuration to APISIX, a retry will be triggered."),Object(o.b)("p",null,"The delayed retry method is adopted. After the first failure, it is retried once per second. After 5 retries are triggered, the slow retry strategy will be enabled, and the retry will be performed every 1 minute until it succeeds."))}p.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return r?i.a.createElement(m,s(s({ref:t},c),{},{components:r})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);