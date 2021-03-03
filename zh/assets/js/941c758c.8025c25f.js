(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(229)),c={title:"Proxy the httpbin service"},o={unversionedId:"samples/proxy-the-httpbin-service",id:"samples/proxy-the-httpbin-service",isDocsHomePage:!1,title:"Proxy the httpbin service",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/samples/proxy-the-httpbin-service.md",slug:"/samples/proxy-the-httpbin-service",permalink:"/zh/docs/ingress-controller/samples/proxy-the-httpbin-service",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/samples/proxy-the-httpbin-service.md",version:"current",sidebar:"docs",previous:{title:"Proxy the httpbin service with Ingress",permalink:"/zh/docs/ingress-controller/samples/proxy-the-httpbin-service-with-ingress"},next:{title:"Install Ingress APISIX on ACK",permalink:"/zh/docs/ingress-controller/deployments/ack"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy httpbin service",id:"deploy-httpbin-service",children:[]},{value:"Resource Delivery",id:"resource-delivery",children:[]},{value:"Test",id:"test",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document explains how apisix-ingress-controller guides Apache APISIX routes traffic to httpbin service correctly."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",Object(i.b)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Install Apache APISIX in Kubernetes by Helm Chart"),"."),Object(i.b)("li",{parentName:"ul"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/install.md"},"apisix-ingress-controller"),".")),Object(i.b)("h2",{id:"deploy-httpbin-service"},"Deploy httpbin service"),Object(i.b)("p",null,"We use ",Object(i.b)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image, See its overview page for details."),Object(i.b)("p",null,"Now, try to deploy it to your Kubernetes cluster:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),Object(i.b)("h2",{id:"resource-delivery"},"Resource Delivery"),Object(i.b)("p",null,"In order to let Apache APISIX proxies requests to httpbin, we need to create an ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute")," resource, if you're not familiar with it, see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/CRD-specification.md#apisixroute"},"reference")," for the details."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# httpbin-route.yaml\napiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          serviceName: httpbin\n          servicePort: 80\n        path: /*\n")),Object(i.b)("p",null,"The YAML snippet shows a simple ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute")," configuration, which tells Apache APISIX to route all requests with Host ",Object(i.b)("inlineCode",{parentName:"p"},"local.httpbin.org")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"httpbin")," service.\nNow try to create it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f httpbin-route.yaml\n")),Object(i.b)("h2",{id:"test"},"Test"),Object(i.b)("p",null,"Run curl call in one of Apache APISIX Pods to check whether the resource was delivered to it. Note you should replace the value of ",Object(i.b)("inlineCode",{parentName:"p"},"--apisix-admin-key")," to the real ",Object(i.b)("inlineCode",{parentName:"p"},"admin_key")," value in your Apache APISIX cluster."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9180/apisix/admin/routes -H 'X-API-Key: edd1c9f034335f136f87ad84b625c8f1'\n")),Object(i.b)("p",null,"And request to Apache APISIX to verify the route."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9080/headers -H 'Host: local.httpbin.org'\n")),Object(i.b)("p",null,"In case of success, you'll see a JSON string which contains all requests headers carried by ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')))}p.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),h=n,d=b["".concat(c,".").concat(h)]||b[h]||u[h]||i;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);