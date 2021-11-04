"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84601],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92323:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o={title:"Annotations"},s=void 0,p={unversionedId:"concepts/annotations",id:"concepts/annotations",isDocsHomePage:!1,title:"Annotations",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/concepts/annotations.md",sourceDirName:"concepts",slug:"/concepts/annotations",permalink:"/zh/docs/ingress-controller/concepts/annotations",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/concepts/annotations.md",tags:[],version:"current",frontMatter:{title:"Annotations"}},l=[{value:"CORS Support",id:"cors-support",children:[]},{value:"Allowlist Source Range",id:"allowlist-source-range",children:[]},{value:"Blocklist Source Range",id:"blocklist-source-range",children:[]},{value:"Rewrite Target",id:"rewrite-target",children:[]},{value:"Redirect",id:"redirect",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes all supported annotations and their functions. You can add these annotations in the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources so that advanced features in ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," can be combined into ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress"},"Ingress")," resources."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note all keys and values of annotations are strings, so boolean value like ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," should be represented as ",(0,i.kt)("inlineCode",{parentName:"p"},'"true"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"false"'),".")),(0,i.kt)("h2",{id:"cors-support"},"CORS Support"),(0,i.kt)("p",null,"In order to enable ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS"),", the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/enable-cors")," should be set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"true"'),", also, there are some other annotations to customize the cors behavior."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-origin"))),(0,i.kt)("p",null,"This annotation controls which origins will be allowed, multiple origins join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),", for instance: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://foo.com,http://bar.com:8080")),(0,i.kt)("p",null,"Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all origins are allowed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-headers"))),(0,i.kt)("p",null,"This annotation controls which headers are accepted, multiple headers join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),"."),(0,i.kt)("p",null,"Default is ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all headers are accepted."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-methods"))),(0,i.kt)("p",null,"This annotation controls which methods are accepted, multiple methods join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),"."),(0,i.kt)("p",null,"Default is ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all HTTP methods are accepted."),(0,i.kt)("h2",{id:"allowlist-source-range"},"Allowlist Source Range"),(0,i.kt)("p",null,"You can specify the allowed client IP addresses or nets by the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range"),", multiple IP addresses or nets join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range: 10.0.5.0/16,127.0.0.1,192.168.3.98"),". Default value is ",(0,i.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,i.kt)("h2",{id:"blocklist-source-range"},"Blocklist Source Range"),(0,i.kt)("p",null,"You can specify the denied client IP addresses or nets by the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range"),", multiple IP addresses or nets join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range: 127.0.0.1,172.17.0.0/16"),". Default value is ",(0,i.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,i.kt)("h2",{id:"rewrite-target"},"Rewrite Target"),(0,i.kt)("p",null,"You can rewrite requests by specifying the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex"),"."),(0,i.kt)("p",null,"The annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," controls where the request will be forwarded to."),(0,i.kt)("p",null,"If you want to use regex and match groups, use annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template"),". The first annotation contains the matching rule (regex), the second one contains the rewrite rule."),(0,i.kt)("p",null,"Both annotations must be used together, otherwise they will be ignored."),(0,i.kt)("p",null,"For example, we have an Ingress matches prefix path ",(0,i.kt)("inlineCode",{parentName:"p"},"/app"),", and we set ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/(.*)")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/$1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/rewrite-target-regex: "/app/(.*)"\n    k8s.apisix.apache.org/rewrite-target-regex-template: "/$1"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /app\n        pathType: Prefix\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n')),(0,i.kt)("p",null,"With this Ingress, any requests with ",(0,i.kt)("inlineCode",{parentName:"p"},"/app")," prefix will be forwarded to backend without the ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/")," part, e.g. request ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/ip")," will be forwarded to ",(0,i.kt)("inlineCode",{parentName:"p"},"/ip"),"."),(0,i.kt)("h2",{id:"redirect"},"Redirect"),(0,i.kt)("p",null,"You can use the following annotations to control the redirect behavior."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/http-to-https"))),(0,i.kt)("p",null,"If this annotation set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and the request is HTTP, it will be automatically redirected to HTTPS with 301 response code,\nand the URI will keep the same as client request."),(0,i.kt)("p",null,"For example, the following Ingress, if we set ",(0,i.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/http-to-https: "true"'),". The client will get a response with 301 status code, and the response header ",(0,i.kt)("inlineCode",{parentName:"p"},"Location"),"  will be ",(0,i.kt)("inlineCode",{parentName:"p"},"https://httpbin.org/sample"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/http-to-https: "true"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /sample\n        pathType: Exact\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n')))}u.isMDXComponent=!0}}]);