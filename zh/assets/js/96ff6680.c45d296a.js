"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52108],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6060:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return c},toc:function(){return s},default:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i={title:"Install Apache APISIX from Helm Charts",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?s=400&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4",tags:["technology","practical case"]},p=void 0,l={permalink:"/zh/blog/2021/02/26/install-apache-apisix-from-helm-charts",source:"@site/blog/2021-02-26-install-apache-apisix-from-helm-charts.md",title:"Install Apache APISIX from Helm Charts",description:"@tokers, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-02-26T00:00:00.000Z",formattedDate:"2021\u5e742\u670826\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:.975,truncated:!0,authors:[{name:"Chao Zhang",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?s=400&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4"}],prevItem:{title:"Get Front-End Test Coverage with Cypress",permalink:"/zh/blog/2021/03/02/get-front-end-test-coverage-with-cypress"},nextItem:{title:"Stable Product Delivery with Cypress",permalink:"/zh/blog/2021/02/08/stable-product-delivery-with-cypress"}},c={authorsImageUrls:[void 0]},s=[{value:"How To Use",id:"how-to-use",children:[]},{value:"See Also",id:"see-also",children:[]}],h={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@tokers"),", Apache APISIX Committer from ",(0,o.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart")))),(0,o.kt)("p",null,"A few days ago, ",(0,o.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Zhiliu Inc")," released an online Helm Charts repository. Users can easily install Apache APISIX, Apache apisix-dashboard and Apache apisix-ingress-controller from it (rather than cloning the corresponding project in advance)."),(0,o.kt)("h2",{id:"how-to-use"},"How To Use"),(0,o.kt)("p",null,"Just a few steps to install Apache APISIX"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the repository and fetch the update"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ helm repo add apisix https://charts.apiseven.com\n$ helm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the available charts in repository"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ helm search repo apisix\n\nNAME                    CHART VERSION   APP VERSION     DESCRIPTION\napisix/apisix           0.1.2           2.1.0           A Helm chart for Apache APISIX\napisix/apisix-dashboard 0.1.0           2.3.0           A Helm chart for Apache APISIX Dashboard\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Apache APISIX to your Kubernetes cluster"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'$ helm install apisix-gw apisix/apisix --namespace default\n\nNAME: apisix-gw\nLAST DEPLOYED: Fri Feb 19 11:34:14 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n1. Get the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services apisix-gw-gateway)\n  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart"))))}u.isMDXComponent=!0}}]);