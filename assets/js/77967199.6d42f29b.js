"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53332],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54389:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l={title:"Release Apache APISIX Ingress Controller 1.1.0",tags:["APISIX Ingress Controller"]},o=void 0,s={permalink:"/releases/2021/7/14/release-apache-apisix-ingress-controller-1.1.0",source:"@site/releases/2021-7-14-release-apache-apisix-ingress-controller-1.1.0.md",title:"Release Apache APISIX Ingress Controller 1.1.0",description:"Welcome to the 1.1.0 release of apisix-ingress-controller!",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:1.035,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX Go Plugin Runner 0.1.0",permalink:"/releases/2021/7/15/release-apache-apisix-go-plugin-runner-0.1.0"},nextItem:{title:"Release Apache APISIX Java Plugin Runner 0.1.0",permalink:"/releases/2021/7/9/release-apache-apisix-java-plugin-runner-0.1.0"}},p={authorsImageUrls:[]},c=[{value:"Highlights",id:"highlights",children:[{value:"New Features",id:"new-features",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Dependency Changes",id:"dependency-changes",children:[]}]}],u={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the 1.1.0 release of apisix-ingress-controller!"),(0,i.kt)("p",null,"This is a ",(0,i.kt)("strong",{parentName:"p"},"GA")," release."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an available Kubernetes cluster (version >= 1.15)"),(0,i.kt)("li",{parentName:"ul"},"an available Apache APISIX (version >= 2.7)")),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support EndpointSlices")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/563"},"#563")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/574"},"#574")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support UDP definition")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/572"},"#572")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/576"},"#576"))),(0,i.kt)("p",null,"Please try out the release binaries and report any issues at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"https://github.com/apache/apisix-ingress-controller/issues"),"."),(0,i.kt)("h3",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alex Zhang"),(0,i.kt)("li",{parentName:"ul"},"Fang"),(0,i.kt)("li",{parentName:"ul"},"kv"),(0,i.kt)("li",{parentName:"ul"},"Jintao Zhang"),(0,i.kt)("li",{parentName:"ul"},"Shuyang Wu"),(0,i.kt)("li",{parentName:"ul"},"benson211")),(0,i.kt)("h3",{id:"changes"},"Changes"),(0,i.kt)("p",null,"11 commits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/67f3fd934b8a8b935440227a5c8ba7923ba91a2a"},(0,i.kt)("inlineCode",{parentName:"a"},"67f3fd9"))," chore: endpointslice controller (#574)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1c17b41249361444b5b10f4a8897f62484b545b0"},(0,i.kt)("inlineCode",{parentName:"a"},"1c17b41"))," feat: add logic for ApisixRoute v2beta1 (#576)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a754f69d3f2a7b637db039690ad849976178c148"},(0,i.kt)("inlineCode",{parentName:"a"},"a754f69"))," feat: abstract the endpoints-related logic (#563)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/4b16e289073ad88dc6be49ae621294ecf6c92cb4"},(0,i.kt)("inlineCode",{parentName:"a"},"4b16e28"))," chore: cleanup apisixservice. (#566)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/534fab34a6e046a46fb174d2a3620eacb431006f"},(0,i.kt)("inlineCode",{parentName:"a"},"534fab3"))," feat: add v2beta1 structure for ApisixRoute (#572)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/c871bdfb76fee37227d7de5a246cd94b867aad1d"},(0,i.kt)("inlineCode",{parentName:"a"},"c871bdf"))," test: dump the namespace content when e2e test cases failed (#571)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/dbc8133805122947bbad21711d66d0782e66bbb5"},(0,i.kt)("inlineCode",{parentName:"a"},"dbc8133"))," doc: update k3s-rke.md (#568)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/70d010092b626c9c6959bd026e669dbb60153608"},(0,i.kt)("inlineCode",{parentName:"a"},"70d0100"))," chore: update config of installation by Kustomize (#557)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/2122d76fd28cc7bce54e8f52e2d4c9d04a1e852a"},(0,i.kt)("inlineCode",{parentName:"a"},"2122d76"))," docs: clarify installation by Kustomize (#558)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/b4a6889e1564be61de6736af32a2075579c9b51f"},(0,i.kt)("inlineCode",{parentName:"a"},"b4a6889"))," Update default version in Makefile (#556)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f5cc76ec6ac671772063d38a09f508db71ac2e48"},(0,i.kt)("inlineCode",{parentName:"a"},"f5cc76e"))," chore: remove cancel-workflow.yml since no use (#550)")),(0,i.kt)("h3",{id:"dependency-changes"},"Dependency Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/fsnotify/fsnotify"),"        v1.4.9 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/gruntwork-io/terratest"),"   v0.32.8 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/hashicorp/go-multierror"),"  v1.0.0 -> v1.1.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"k8s.io/api"),"                          v0.20.2 -> v0.21.1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"k8s.io/apimachinery"),"                 v0.20.2 -> v0.21.1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"k8s.io/client-go"),"                    v0.20.2 -> v0.21.1")),(0,i.kt)("p",null,"Previous release can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/releases/tag/1.0.0"},"1.0.0")))}m.isMDXComponent=!0}}]);