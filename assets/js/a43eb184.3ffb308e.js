"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34452],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95489:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"ApisixRoute/v2beta1 Reference"},p=void 0,o={unversionedId:"references/apisix_route_v2beta1",id:"references/apisix_route_v2beta1",isDocsHomePage:!1,title:"ApisixRoute/v2beta1 Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_route_v2beta1.md",sourceDirName:"references",slug:"/references/apisix_route_v2beta1",permalink:"/docs/ingress-controller/references/apisix_route_v2beta1",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/references/apisix_route_v2beta1.md",tags:[],version:"current",frontMatter:{title:"ApisixRoute/v2beta1 Reference"},sidebar:"docs",previous:{title:"ApisixRoute/v2alpha1 Reference",permalink:"/docs/ingress-controller/references/apisix_route_v2alpha1"},next:{title:"ApisixUpstream Reference",permalink:"/docs/ingress-controller/references/apisix_upstream"}},d=[{value:"Spec",id:"spec",children:[]},{value:"Expression Operators",id:"expression-operators",children:[]},{value:"Service Resolve Granularity",id:"service-resolve-granularity",children:[]}],s={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"spec"},"Spec"),(0,l.kt)("p",null,"Meaning of each field in the spec of ApisixRoute are followed, the top level fields (",(0,l.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata"),") are same as other Kubernetes Resources."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"ApisixRoute's HTTP route rules.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].name"),(0,l.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"The route rule name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].priority"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The route priority, it's used to determine which route will be hitted when multile routes contains the same URI. Large number means higher priority.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Route match conditions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.paths"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"A series of URI that should be matched (oneof) to use this route rule.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"A series of hosts that should be matched (oneof) to use this route rule.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.methods"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"A series of HTTP methods(",(0,l.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"PATCH"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"HEAD"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"OPTIONS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"CONNECT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"TRACE"),") that should be matched (oneof) to use this route rule.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.remoteAddrs"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"A series of IP address (CIDR format) that should be matched (oneof) to use this route rule.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"A series expressions that the results should be matched (oneof) to use this route rule.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression subject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify where to find the subject, values can be ",(0,l.kt)("inlineCode",{parentName:"td"},"Header"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Query"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Cookie")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"Path"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify subject name, when scope is ",(0,l.kt)("inlineCode",{parentName:"td"},"Path"),", this field can be absent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].op"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression operator, see ",(0,l.kt)("a",{parentName:"td",href:"#expression-operators"},"Expression Operators")," for the detail of enumerations.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Expected expression result, it's exclusive with ",(0,l.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].set"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].set"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Expected expression result set, only used when the operator is ",(0,l.kt)("inlineCode",{parentName:"td"},"In")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"NotIn"),", it's exclusive with ",(0,l.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].value"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backend"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service. Deprecated: use http[].backends instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backend.serviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backend.servicePort"),(0,l.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backend.resolveGranularity"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backends"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend services. When the number of backends more than one, weight based traffic split policy will be applied to shifting traffic between these backends.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backends[].serviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backends[].servicePort"),(0,l.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backends[].resolveGranularity"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].backends[].weight"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend weight, which is critical when shifting traffic between multiple backends, default is ",(0,l.kt)("inlineCode",{parentName:"td"},"100"),". Weight is ignored when there is only one backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"A series of APISIX plugins that will be executed once this route rule is matched")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].plugins[].name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The plugin name, see ",(0,l.kt)("a",{parentName:"td",href:"http://apisix.apache.org/docs/apisix/getting-started"},"docs")," for learning the available plugins.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].plugins[].enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the plugin is in use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].plugins[].config"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The plugin configuration, fields should be same as in APISIX.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http[].websocket"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether enable websocket proxy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"ApisixRoutes' stream route rules, which contains TCP or UDP rules.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"The protocol of rule. Support ",(0,l.kt)("inlineCode",{parentName:"td"},"TCP")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"UDP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].name"),(0,l.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"The Route rule name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].match"),(0,l.kt)("td",{parentName:"tr",align:null},"object (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"The Route match conditions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].match.ingressPort"),(0,l.kt)("td",{parentName:"tr",align:null},"integer (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"the Ingress proxy server listening port, note since APISIX doesn't support dynamic listening, this port should be defined in ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L101"},"apisix configuration"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].backend"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service. Deprecated: use http[].backends instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].backend.serviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].backend.servicePort"),(0,l.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,l.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream[].backend.resolveGranularity"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")))),(0,l.kt)("h2",{id:"expression-operators"},"Expression Operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equal"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should be equal to the ",(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NotEqual"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should not be equal to ",(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GreaterThan"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and it must larger then ",(0,l.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LessThan"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and it must less than ",(0,l.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should be inside the ",(0,l.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NotIn"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should not be inside the ",(0,l.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RegexMatch"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should be matched by the ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RegexNotMatch"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," should not be matched by the ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RegexMatchCaseInsensitive"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar with ",(0,l.kt)("inlineCode",{parentName:"td"},"RegexMatch")," but the match process is case insensitive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RegexNotMatchCaseInsensitive"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar with ",(0,l.kt)("inlineCode",{parentName:"td"},"RegexNotMatchCaseInsensitive")," but the match process is case insensitive.")))),(0,l.kt)("h2",{id:"service-resolve-granularity"},"Service Resolve Granularity"),(0,l.kt)("p",null,"The service resolve granularity determines whether the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Serivce ClusterIP")," or its endpoints should be filled in the target upstream of APISIX."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Granularity"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Filled upstream nodes by Pods' IP.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"Filled upstream nodes by Service ClusterIP, in such a case, loadbalacing are implemented by ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-proxy"},"kube-proxy"),".")))))}u.isMDXComponent=!0}}]);