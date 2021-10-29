"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20788],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),I=i(n),h=a,g=I["".concat(c,".").concat(h)]||I[h]||u[h]||s;return n?r.createElement(g,l(l({ref:t},o),{},{components:n})):r.createElement(g,l({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=I;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<s;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},61755:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return i},toc:function(){return o},default:function(){return I}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l={title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",author:"\u91d1\u536b",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["Apache APISIX","APISIX Ingress Controller","Kubernetes","Apache"],description:"\u672c\u6587\u901a\u8fc7\u4ece\u4ee3\u7801\u521b\u59cb\u4eba\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 APISIX Ingress \u7684\u6210\u957f\u5386\u7a0b\uff0c\u4ee5\u53ca\u52a0\u5165\u793e\u533a\u540e\u7684\u529f\u80fd\u63d0\u5347\u4e0e\u793e\u533a\u5e2e\u52a9\u7b49\u591a\u65b9\u9762\u7ec6\u8282\u6536\u83b7\u3002",tags:["technology"]},p=void 0,c={permalink:"/zh/blog/2021/10/27/APISIX Ingress",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/10/27/APISIX Ingress.md",title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",description:"\u672c\u6587\u901a\u8fc7\u4ece\u4ee3\u7801\u521b\u59cb\u4eba\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 APISIX Ingress \u7684\u6210\u957f\u5386\u7a0b\uff0c\u4ee5\u53ca\u52a0\u5165\u793e\u533a\u540e\u7684\u529f\u80fd\u63d0\u5347\u4e0e\u793e\u533a\u5e2e\u52a9\u7b49\u591a\u65b9\u9762\u7ec6\u8282\u6536\u83b7\u3002",date:"2021-10-27T00:00:00.000Z",formattedDate:"2021\u5e7410\u670827\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:2.265,truncated:!0,authors:[{name:"\u91d1\u536b",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],nextItem:{title:"\u6559\u7a0b\u7bc7\uff1a\u5982\u4f55\u5728 Apache APISIX Ingress Controller \u4e2d\u4f7f\u7528 Cert Manager \u7ba1\u7406\u8bc1\u4e66",permalink:"/zh/blog/2021/10/22/cert-manager-in-ingress"}},i={authorsImageUrls:[void 0]},o=[{value:"\u6982\u5ff5\u7bc7",id:"\u6982\u5ff5\u7bc7",children:[{value:"APISIX Ingress \u6982\u8ff0",id:"apisix-ingress-\u6982\u8ff0",children:[]},{value:"\u4ec0\u4e48\u662f Apache APISIX",id:"\u4ec0\u4e48\u662f-apache-apisix",children:[]}]},{value:"\u6210\u957f\u7bc7",id:"\u6210\u957f\u7bc7",children:[{value:"\u52a0\u5165 Apache \u793e\u533a",id:"\u52a0\u5165-apache-\u793e\u533a",children:[]},{value:"\u5728\u793e\u533a\u4e2d\u6210\u957f",id:"\u5728\u793e\u533a\u4e2d\u6210\u957f",children:[]}]},{value:"\u6536\u83b7\u7bc7",id:"\u6536\u83b7\u7bc7",children:[{value:"\u5b8c\u5584\u4e86\u66f4\u591a\u7ec6\u8282\u529f\u80fd",id:"\u5b8c\u5584\u4e86\u66f4\u591a\u7ec6\u8282\u529f\u80fd",children:[]},{value:"\u4e30\u5bcc\u4e86\u4f7f\u7528\u573a\u666f\u5e93",id:"\u4e30\u5bcc\u4e86\u4f7f\u7528\u573a\u666f\u5e93",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}]},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[{value:"\u540e\u7eed\u652f\u6301 Kubernetes gateway API",id:"\u540e\u7eed\u652f\u6301-kubernetes-gateway-api",children:[]},{value:"\u540e\u7eed\u652f\u6301 Ingress Controller \u5355\u4f53\u67b6\u6784",id:"\u540e\u7eed\u652f\u6301-ingress-controller-\u5355\u4f53\u67b6\u6784",children:[]}]}],u={toc:o};function I(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u901a\u8fc7\u4ece\u4ee3\u7801\u521b\u59cb\u4eba\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 APISIX Ingress \u7684\u6210\u957f\u5386\u7a0b\uff0c\u4ee5\u53ca\u52a0\u5165\u793e\u533a\u540e\u7684\u529f\u80fd\u63d0\u5347\u4e0e\u793e\u533a\u5e2e\u52a9\u7b49\u591a\u65b9\u9762\u7ec6\u8282\u6536\u83b7\u3002")),(0,s.kt)("h2",{id:"\u6982\u5ff5\u7bc7"},"\u6982\u5ff5\u7bc7"),(0,s.kt)("h3",{id:"apisix-ingress-\u6982\u8ff0"},"APISIX Ingress \u6982\u8ff0"),(0,s.kt)("p",null,"\u5728 K8s \u751f\u6001\u4e2d\uff0cIngress \u4f5c\u4e3a\u8868\u793a K8s \u6d41\u91cf\u5165\u53e3\u7684\u4e00\u79cd\u8d44\u6e90\uff0c\u60f3\u8981\u8ba9\u5176\u751f\u6548\uff0c\u5c31\u9700\u8981\u6709\u4e00\u4e2a Ingress Controller \u53bb\u76d1\u542c K8s \u4e2d\u7684 Ingress \u8d44\u6e90\uff0c\u5e76\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u8fdb\u884c\u76f8\u5e94\u89c4\u5219\u7684\u89e3\u6790\u548c\u5b9e\u9645\u627f\u8f7d\u6d41\u91cf\u3002"),(0,s.kt)("p",null,"APISIX Ingress \u5219\u662f\u57fa\u4e8e Apache APISIX \u7684 Ingress Controller \u5b9e\u73b0\uff0c\u5b9e\u73b0\u4e86\u5bf9 Kubernetes \u7684\u6269\u5c55\uff0c\u540c\u65f6\u4e5f\u652f\u6301 Ingress resource \u7684\u539f\u751f\u8d44\u6e90\u5b9a\u4e49\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156040-50b7a2ae-ed0c-42ac-8517-edd0715e0082.png",alt:"APISIX Ingress \u67b6\u6784"})),(0,s.kt)("p",null,"\u901a\u8fc7\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\uff0cAPISIX Ingress \u662f\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72\uff0c\u5e76\u4ee3\u7406 Kubernetes \u5916\u90e8\u96c6\u7fa4\u7684\u8bf7\u6c42\u3002\u7136\u540e\u5c06\u8fd9\u4e9b\u8bf7\u6c42\u53cd\u5411\u4ee3\u7406\u5230 Kubernetes \u96c6\u7fa4 Service\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u76f4\u63a5\u5c06\u670d\u52a1\u63a8\u9001\u5230 Service Pod\u3002"),(0,s.kt)("h3",{id:"\u4ec0\u4e48\u662f-apache-apisix"},"\u4ec0\u4e48\u662f Apache APISIX"),(0,s.kt)("p",null,"\u524d\u8fb9\u6211\u4eec\u63d0\u5230\u4e86 APISIX Ingress \u662f\u91c7\u7528 Apache APISIX \u4f5c\u4e3a\u5b9e\u9645\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u7684\u6570\u636e\u9762\uff0c\u90a3\u4e48 Apache APISIX \u9879\u76ee\u53c8\u662f\u505a\u4ec0\u4e48\u7684\u5462\uff1f"),(0,s.kt)("p",null,"Apache APISIX \u662f Apache \u57fa\u91d1\u4f1a\u65d7\u4e0b\u7684\u9876\u7ea7\u5f00\u6e90\u9879\u76ee\uff0c\u4e5f\u662f\u5f53\u524d\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90\u7f51\u5173\u9879\u76ee\uff0c\u76ee\u524d\u4e5f\u901a\u8fc7\u4e2d\u56fd\u4fe1\u901a\u9662\u7684\u53ef\u4fe1\u5f00\u6e90\u9879\u76ee\u8ba4\u8bc1\u3002\u4f5c\u4e3a\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u5f00\u6e90 API \u7f51\u5173\uff0cApache APISIX \u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156053-68751f2e-40e7-4932-99a4-5b9cc8f60628.png",alt:"Apache APISIX \u67b6\u6784"})),(0,s.kt)("p",null,"\u4ece\u4e0a\u56fe\u6846\u67b6\u53ef\u4ee5\u770b\u5230\uff0cApache APISIX \u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u5de6\u4fa7\u6570\u636e\u9762\u7528\u6765\u5904\u7406\u6d41\u91cf\u7684\u53cd\u5411\u4ee3\u7406\uff0c\u53f3\u4fa7\u63a7\u5236\u9762\u8d1f\u8d23\u914d\u7f6e\u7684\u5206\u53d1\u3002"),(0,s.kt)("p",null,"Apache APISIX Ingress Controller \u91c7\u7528\u58f0\u660e\u5f0f\u7684\u914d\u7f6e\uff0c\u7ecf\u8fc7\u5185\u90e8\u5904\u7406\u540e\uff0c\u6700\u7ec8\u4f1a\u901a\u8fc7\u63a7\u5236\u9762\u7684 Admin API \u5c06\u6570\u636e\u540c\u6b65\u5230 etcd \u4e2d\u5e76\u4f20\u8f93\u7ed9 Apache APISIX\uff0c\u5b9e\u73b0 Apache APISIX \u96c6\u7fa4\u7684\u914d\u7f6e\u540c\u6b65\u3002"),(0,s.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Apache APISIX Ingress Controller \u7279\u6027\u8bb2\u89e3",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"\u70b9\u6b64\u67e5\u9605"),"\u3002"),(0,s.kt)("h2",{id:"\u6210\u957f\u7bc7"},"\u6210\u957f\u7bc7"),(0,s.kt)("p",null,"\u5173\u4e8e Apache APISIX Ingress \u7684\u4f7f\u7528\u573a\u666f\u6216\u8005\u4ea7\u54c1\u5bf9\u6bd4\u4f18\u52bf\u7b49\uff0c\u5728\u5f80\u671f\u7684\u5206\u4eab\u4e2d\u5927\u90fd\u63d0\u53ca\u4e86\u5f88\u591a\u3002\u8fd9\u6b21\u6211\u4eec\u6362\u4e2a\u89d2\u5ea6\uff0c\u4ece Apache APISIX Ingress \u7684\u8bde\u751f\u53ca\u53d1\u5c55\u89d2\u5ea6\u8fdb\u884c\u89e3\u6790\u3002"),(0,s.kt)("h3",{id:"\u52a0\u5165-apache-\u793e\u533a"},"\u52a0\u5165 Apache \u793e\u533a"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156115-9d5e41d0-a8e9-4a6e-8a1a-757f3107a49a.png",alt:"\u53d1\u5c55\u5386\u7a0b"})),(0,s.kt)("p",null,"2019 \u5e74\u6211\u7ed9 APISIX Ingress Controller \u9879\u76ee\u63d0\u4f9b\u4e86\u7b2c\u4e00\u884c\u4ee3\u7801\uff0c2020 \u5e74 12 \u6708\u4efd\u8be5\u9879\u76ee\u88ab\u6b63\u5f0f\u52a0\u5165\u5230 Apache \u793e\u533a\u3002\u5728\u4ea7\u54c1\u66f4\u65b0\u4e0a\uff0c\u4eca\u5e74 6 \u6708\u4efd\u6211\u4eec\u53d1\u5e03\u4e86\u7b2c\u4e00\u4e2a GA \u7248\u672c\uff0c\u540c\u65f6\u5728\u521a\u521a\u8fc7\u53bb\u7684 10 \u6708\u4efd\u4e2d\u4e5f\u53d1\u5e03\u4e86 1.3 \u7248\u672c\uff0c\u9884\u8ba1\u5728\u4eca\u5e74 11 \u6708\u4efd\u5c06\u4f1a\u53d1\u5e03 1.4 \u7248\u672c\uff0c\u4fdd\u8bc1\u9879\u76ee\u7684\u6b63\u5e38\u66f4\u65b0\u8fed\u4ee3\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156111-d0b82a61-b304-42ce-8d3a-2b959d3cb271.png",alt:"\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\u56fe"})),(0,s.kt)("p",null,"\u4e0a\u56fe\u662f Apache APISIX Ingress Controller \u7684\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\u56fe\u3002\u7ed3\u5408\u65f6\u95f4\u8f74\u53ef\u4ee5\u770b\u5230\uff0c\u4ece 2020 \u5e74 12 \u6708\u52a0\u5165 Apache \u793e\u533a\u540e\uff0c\u8d21\u732e\u8005\u7684\u4eba\u6570\u589e\u52a0\u901f\u5ea6\u5448\u73b0\u51fa\u9ad8\u901f\u7a33\u5b9a\u589e\u957f\u7684\u6001\u52bf\u3002\u4fa7\u9762\u53cd\u6620\u51fa Apache APISIX Ingress \u5f97\u5230\u4e86\u8d8a\u6765\u8d8a\u591a\u5c0f\u4f19\u4f34\u7684\u5173\u6ce8\uff0c\u5e76\u5f00\u59cb\u9010\u6b65\u5e94\u7528\u5230\u4f01\u4e1a\u751f\u4ea7\u73af\u5883\u4e2d\u3002"),(0,s.kt)("h3",{id:"\u5728\u793e\u533a\u4e2d\u6210\u957f"},"\u5728\u793e\u533a\u4e2d\u6210\u957f"),(0,s.kt)("p",null,"\u4ece\u4e2a\u4eba\u9879\u76ee\u6216\u4f01\u4e1a\u5185\u90e8\u5b75\u5316\u51fa\u7684\u9879\u76ee\u5f00\u59cb\u5230\u52a0\u5165\u793e\u533a\uff0c\u524d\u540e\u73af\u5883\u7684\u8f6c\u6362\u5fc5\u7136\u4f1a\u5bfc\u81f4\u9879\u76ee\u5de5\u4f5c\u65b9\u5f0f\u7684\u53d8\u5316\u3002\u52a0\u5165\u793e\u533a\u540e\uff0cApache APISIX Ingress \u5728\u529f\u80fd\u548c\u9879\u76ee\u6574\u4f53\u5ea6\u4e0a\u5f97\u5230\u4e86\u66f4\u591a\u7684\u652f\u6301\u4e0e\u5e2e\u52a9\u3002"),(0,s.kt)("h4",{id:"\u5f00\u542f\u5f02\u6b65\u5316\u8ba8\u8bba"},"\u5f00\u542f\u5f02\u6b65\u5316\u8ba8\u8bba"),(0,s.kt)("p",null,"\u6210\u4e3a Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u9879\u76ee\u540e\uff0cApache APISIX Ingress Controller \u9879\u76ee\u53d8\u5f97\u66f4\u52a0\u5f00\u653e\u3002\u6bd4\u5982\u5173\u4e8e\u4ea7\u54c1\u6bcf\u4e00\u4e2a\u7279\u6027\u7684\u65b0\u589e\u6216\u8005\u4fee\u6539\u90fd\u5fc5\u987b\u7ecf\u8fc7\u4e00\u4e9b\u516c\u5f00\u7684\u8ba8\u8bba\uff0c\u8ba8\u8bba\u7684\u65b9\u5f0f\u4e00\u822c\u5206\u4e3a\u90ae\u4ef6\u5217\u8868\u8ba8\u8bba\u548c GitHub Issue \u8ba8\u8bba\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156102-8877f3da-a43d-4b94-9a84-a95743546112.png",alt:"\u90ae\u4ef6\u5217\u8868"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156096-c0eeb189-54f8-4ebe-b019-f41001869186.png",alt:"GitHub Issue"})),(0,s.kt)("p",null,"\u76ee\u524d\u662f\u4e0a\u8ff0\u4e24\u79cd\u8ba8\u8bba\u540c\u65f6\u53d1\u8d77\uff0c\u5c3d\u53ef\u80fd\u591a\u5730\u8ba9\u5927\u5bb6\u7ad9\u5728\u5404\u81ea\u7684\u4f7f\u7528\u573a\u666f\u4ee5\u53ca\u4f7f\u7528\u89d2\u5ea6\u53bb\u8bc4\u5224\u7279\u6027\u7684\u5408\u7406\u6027\u3002\u56e0\u4e3a\u8fd9\u5df2\u4e0d\u518d\u662f\u4e00\u4e2a\u4e2a\u4eba\u9879\u76ee\uff0c\u800c\u662f\u4e00\u4e2a\u793e\u533a\u9879\u76ee\uff0c\u662f\u591a\u4eba\u53c2\u4e0e\u7684\u5408\u4f5c\u4ea7\u51fa\u3002"),(0,s.kt)("p",null,"\u540c\u65f6\uff0c\u901a\u8fc7\u90ae\u4ef6\u5217\u8868\u548c GitHub Issue \u7684\u5f02\u6b65\u5f0f\u8ba8\u8bba\uff0c\u53ef\u4ee5\u66f4\u5168\u9762\u5730\u6536\u96c6\u5230\u793e\u533a\u7684\u53cd\u9988\uff08\u4e0d\u7ba1\u662f\u63d0\u95ee\u8fd8\u662f\u56de\u7b54\uff09\uff0c\u5728\u516c\u5f00\u5316\u7684\u57fa\u7840\u4e0a\u4e3a\u540e\u7eed\u95ee\u9898\u7684\u641c\u7d22\u548c\u6574\u7406\u63d0\u4f9b\u4e86\u4fbf\u5229\u3002"),(0,s.kt)("h4",{id:"\u589e\u8bbe\u793e\u533a\u4f8b\u4f1a"},"\u589e\u8bbe\u793e\u533a\u4f8b\u4f1a"),(0,s.kt)("p",null,"\u5728\u4e92\u52a8\u65b9\u9762\uff0cApache APISIX Ingress \u5438\u53d6\u4e86\u4e00\u4e9b\u5176\u4ed6\u793e\u533a\u7684\u7ecf\u9a8c\uff0c\u5f00\u653e\u4e86\u4e00\u4e2a\u6bcf\u4e24\u5468\u8fdb\u884c\u7684\u793e\u533a\u4f8b\u4f1a\u6d3b\u52a8\u3002"),(0,s.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u65b0\u7684\u6e20\u9053\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u9879\u76ee\u900f\u660e\u5316\u7684\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u793e\u533a\u5c0f\u4f19\u4f34\u63d0\u4f9b\u4e00\u4e2a\u66f4\u751f\u6d3b\u5316\u7684\u6e20\u9053\u6765\u4e00\u8d77\u8ba8\u8bba\u95ee\u9898\u3002"),(0,s.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u53cc\u5468\u4f8b\u4f1a\uff0c\u6211\u4eec\u4f1a\u7ed9\u5927\u5bb6\u8be6\u7ec6\u4ecb\u7ecd\u6700\u8fd1\u4e24\u5468\u9879\u76ee\u53d1\u751f\u4e86\u54ea\u4e9b\u53d8\u5316\uff0c\u6709\u54ea\u4e9b\u65b0\u7684 issue \u88ab\u63d0\u51fa\u4ee5\u53ca\u54ea\u4e9b PR \u6b63\u5728\u7b49\u5f85\u5408\u5e76\u3002\u5f53\u7136\u4e5f\u4f1a\u8ddf\u5927\u5bb6\u4e00\u8d77\u8ba8\u8bba\u5f53\u524d\u9879\u76ee\u7684\u4e00\u4e9b\u95ee\u9898\u6216\u5efa\u8bae\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u8fd9\u4e0d\u4ec5\u662f\u4e00\u4e2a\u5373\u65f6\u8ba8\u8bba\u7684\u8fc7\u7a0b\uff0c\u66f4\u662f\u4e00\u4e2a\u5206\u4eab\u548c\u4ea4\u6d41\u591a\u89d2\u5ea6\u4e8b\u7269\u89c2\u5bdf\u7684\u4e92\u52a8\u3002"),(0,s.kt)("p",null,"\u5177\u4f53\u5173\u4e8e\u53cc\u5468\u4f8b\u4f1a\u7684\u4f1a\u8bae\u5185\u5bb9",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"\u70b9\u6b64\u67e5\u9605"),"\uff0c\u4e5f\u53ef\u4ee5\u70b9\u6b64\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"https://space.bilibili.com/551921247"},"\u5f80\u671f\u4f8b\u4f1a\u56de\u653e"),"\u3002"),(0,s.kt)("h4",{id:"\u9879\u76ee\u7ec6\u8282\u66f4\u5408\u89c4"},"\u9879\u76ee\u7ec6\u8282\u66f4\u5408\u89c4"),(0,s.kt)("p",null,"\u8fdb\u5165 Apache \u793e\u533a\u540e\uff0c\u53e6\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684\u53d8\u5316\u662f\u9879\u76ee\u89c4\u5212\u4e0a\u53d8\u5f97\u66f4\u52a0\u89c4\u8303\uff0c\u4e0d\u7ba1\u662f\u4ee3\u7801\u3001\u6d4b\u8bd5\u8fd8\u662f\u7248\u672c\u53d1\u5e03\u3002"),(0,s.kt)("p",null,"\u5728\u4ee3\u7801\u5c42\u9762\uff0c\u76ee\u524d\u793e\u533a\u91c7\u7528\u7684\u662f ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/uber-go/guide"},"Golang \u4ee3\u7801\u89c4\u8303"),"\uff0c\u901a\u8fc7 Action CI \u8fdb\u884c\u4e00\u4e9b\u81ea\u52a8\u5316\u68c0\u67e5\u3002"),(0,s.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u9879\u76ee\u7279\u6027\u80fd\u591f\u5feb\u901f\u5408\u5e76\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5f15\u5165\u65b0\u7684 bug\uff0c\u5728\u6d4b\u8bd5\u89c4\u8303\u4e0a\u6211\u4eec\u4e5f\u8fdb\u884c\u4e86\u76f8\u5173\u8981\u6c42\u3002\u6bd4\u5982\u5728\u7279\u6027\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u5b9a\u8981\u5305\u542b\u5355\u5143\u6d4b\u8bd5\u6216\u8005 e2e \u6d4b\u8bd5\uff0c\u5176\u4e2d e2e \u6d4b\u8bd5\u96c6\u6210\u4e86 gruntwork-io/terratest \u4ee5\u53ca kubernetes-sigs/kind\uff0c\u7528\u6765\u6784\u5efa Kubernetes \u6d4b\u8bd5\u73af\u5883\u3002"),(0,s.kt)("p",null,"\u540c\u65f6\u6d4b\u8bd5\u6846\u67b6\u91c7\u7528\u7684\u662f\u793e\u533a\u4e2d\u5e7f\u4e3a\u63a5\u7eb3\u7684 Ginkgo\uff0c\u6d4b\u8bd5\u7528\u4f8b\u7684\u5b8c\u5584\u6781\u5927\u5730\u4fdd\u8bc1\u4e86\u9879\u76ee\u7a33\u5b9a\u6027\uff0c\u540c\u65f6\u4e5f\u964d\u4f4e\u4e86\u9879\u76ee\u7684\u7ef4\u62a4\u6210\u672c\u3002"),(0,s.kt)("p",null,"\u5728\u7248\u672c\u53d1\u5e03\u65b9\u9762\uff0c\u76ee\u524d\u4e5f\u662f\u4e25\u683c\u9075\u5faa\u4e86 Apache \u793e\u533a\u7684\u53d1\u7248\u89c4\u8303\u3002\u540c\u65f6\u7531\u4e8e APISIX Ingress Controller \u4e5f\u662f\u5c5e\u4e8e Kubernetes \u7684\u4e00\u4e2a\u6269\u5c55\uff0c\u6240\u4ee5\u5728\u6d89\u53ca CRD \u7684\u8fed\u4ee3\u90e8\u5206\u4e5f\u662f\u6309\u7167 Kubernetes \u7684\u53d1\u7248\u89c4\u5219\u8fdb\u884c\u3002"),(0,s.kt)("h2",{id:"\u6536\u83b7\u7bc7"},"\u6536\u83b7\u7bc7"),(0,s.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u7684\u5173\u4e8e\u9879\u76ee\u5236\u5ea6\u4e0a\u7684\u4e00\u4e9b\u89c4\u8303\uff0c\u8d70\u5411\u793e\u533a\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u6536\u83b7\u4e86\u5f88\u591a\u5c0f\u4f19\u4f34\u4eec\u7684\u300c\u6280\u672f\u56de\u9988\u300d\u3002"),(0,s.kt)("h3",{id:"\u5b8c\u5584\u4e86\u66f4\u591a\u7ec6\u8282\u529f\u80fd"},"\u5b8c\u5584\u4e86\u66f4\u591a\u7ec6\u8282\u529f\u80fd"),(0,s.kt)("p",null,"\u8fd9\u4e9b\u8d21\u732e\u5927\u90fd\u6765\u6e90\u4e8e\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u5e73\u65f6\u5728\u4f7f\u7528 APISIX Ingress \u5f53\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u6216\u8005\u573a\u666f\u4e0a\u7684\u4e00\u4e9b\u5b8c\u5584\uff0c\u6bd4\u5982\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Admission Hook"),(0,s.kt)("li",{parentName:"ul"},"Ingress \u672c\u8eab\u7684 Prometheus Metrics"),(0,s.kt)("li",{parentName:"ul"},"mTLs"),(0,s.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u529f\u80fd\u7684\u5b8c\u5584"),(0,s.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u4f7f\u7528\u6587\u6863\u7684\u8865\u5145")),(0,s.kt)("p",null,"\u66f4\u591a\u7279\u6027",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pulls?q=is%253Apr"},"\u70b9\u6b64\u67e5\u770b"),"\u3002"),(0,s.kt)("p",null,"\u540c\u65f6\u501f\u52a9\u793e\u533a\u7684\u53cd\u9988\uff0c\u6211\u4eec\u4e5f\u987a\u5e94\u5927\u5bb6\u7684\u9700\u6c42\u652f\u6301\u4e86",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md#installation"},"\u591a\u5e73\u53f0\u96c6\u6210\u529f\u80fd"),"\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156088-035cb0b0-8138-4e93-af5c-8e6ee8371f81.png",alt:"\u591a\u5e73\u53f0\u96c6\u6210"})),(0,s.kt)("h3",{id:"\u4e30\u5bcc\u4e86\u4f7f\u7528\u573a\u666f\u5e93"},"\u4e30\u5bcc\u4e86\u4f7f\u7528\u573a\u666f\u5e93"),(0,s.kt)("p",null,"\u5728\u793e\u533a\u91cc\u5f97\u5230\u529f\u80fd\u52a0\u6301\u7684\u540c\u65f6\uff0c\u4e5f\u6536\u83b7\u4e86\u5173\u4e8e Apache APISIX Ingress \u7684\u4f7f\u7528\u573a\u666f\u4e0a\u7684\u4e30\u5bcc\u3002"),(0,s.kt)("h4",{id:"\u573a\u666f\u4e00\uff1akubernetes-\u96c6\u7fa4\u5185\u90e8"},"\u573a\u666f\u4e00\uff1aKubernetes \u96c6\u7fa4\u5185\u90e8"),(0,s.kt)("p",null,"\u6700\u5178\u578b\u7684\u4e00\u79cd\u65b9\u5f0f\u662f\u5728 Kubernetes \u96c6\u7fa4\u5185\u90e8\u8fdb\u884c\u90e8\u7f72\uff0c\u5982\u4e0b\u56fe\u5c31\u662f\u4e00\u4e2a\u5178\u578b\u7684\u4f7f\u7528\u573a\u666f\u793a\u610f\u56fe\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156077-ced688eb-9dbf-4895-b7a2-acb2f4a288b2.png",alt:"\u4f7f\u7528\u573a\u666f1"})),(0,s.kt)("p",null,"\u5ba2\u6237\u7aef\u7ecf\u8fc7\u5916\u90e8 LB \u540e\uff0c\u7ecf\u8fc7 Apache APISIX \u8fdb\u884c\u627f\u63a5\u5904\u7406\u3002Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u4e5f\u662f\u4e00\u4e2a\u53cd\u5411\u4ee3\u7406\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u5185\u5916\u3002"),(0,s.kt)("p",null,"\u4e0a\u56fe\u7684\u90e8\u7f72\u573a\u666f\u5c31\u662f\u5728 Kubernetes \u5185\u90e8\u96c6\u6210 APISIX Ingress Controller\uff0c\u901a\u8fc7 APISIX Ingress Controller \u5c06 Kubernetes \u7684\u58f0\u660e\u5f0f\u914d\u7f6e\u540c\u6b65\u5230 Apache APISIX\u3002\u8fd9\u6837\u5916\u90e8\u7684\u8bf7\u6c42\u5c31\u53ef\u4ee5\u901a\u8fc7 Apache APISIX \u96c6\u7fa4\u6570\u636e\u9762\u53bb\u76f4\u63a5\u4ee3\u7406\u540e\u7eed Upstream \u7684\u4e1a\u52a1\u670d\u52a1\u3002"),(0,s.kt)("h4",{id:"\u573a\u666f\u4e8c\uff1a\u8de8\u96c6\u7fa4\u90e8\u7f72"},"\u573a\u666f\u4e8c\uff1a\u8de8\u96c6\u7fa4\u90e8\u7f72"),(0,s.kt)("p",null,"\u82cf\u5dde\u601d\u5fc5\u9a70\u516c\u53f8\u7684\u7528\u6237\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5173\u4e8e\u8de8\u96c6\u7fa4\u4f7f\u7528\u573a\u666f\uff0c\u5927\u4f53\u6d41\u7a0b\u5982\u4e0b\u6240\u793a\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156072-ae9a3943-e686-4629-a5b7-0b5c38301139.png",alt:"\u8de8\u96c6\u7fa4\u90e8\u7f72"})),(0,s.kt)("p",null,"\u5728\u4e0a\u56fe\u67b6\u6784\u4e2d\u6709\u4e24\u4e2a\u96c6\u7fa4\uff0c\u5373\u4e91\u4e3b\u673a\u6b63\u5f0f\u96c6\u7fa4\u548c\u7269\u7406\u673a\u96c6\u7fa4\u3002Apache APISIX Ingress Controller \u5728\u6bcf\u4e00\u4e2a\u96c6\u7fa4\u5185\u90fd\u6709\u90e8\u7f72\uff0c\u5728\u4e0e Kubernetes API server \u4ea4\u4e92\u7684\u540c\u65f6\uff0c\u901a\u8fc7 Apache APISIX Admin API \u5c06\u914d\u7f6e\u540c\u6b65\u5230 Apache APISIX \u96c6\u7fa4\u3002"),(0,s.kt)("p",null,"\u5728\u8de8\u96c6\u7fa4\u573a\u666f\u65f6\uff0c\u4e3b\u8981\u662f\u901a\u8fc7 Apache APISIX \u6765\u6253\u901a\u96c6\u7fa4\u4e4b\u95f4\u7684\u4e92\u76f8\u8bbf\u95ee\u3002\u901a\u5e38\u96c6\u7fa4\u4e4b\u95f4\u7684\u8bbf\u95ee\u5206\u4e3a\u4e13\u7ebf\u548c\u516c\u7f51\uff0c\u501f\u52a9 Apache APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\uff0c\u53ef\u4ee5\u505a\u5230\u5f53\u4e13\u7ebf\u6216\u516c\u7f51\u4f20\u8f93\u5931\u8d25\u65f6\u81ea\u52a8\u5c06\u6d41\u91cf\u5207\u6362\u5230\u5176\u4ed6\u6b63\u5e38\u901a\u9053\u4e0a\uff0c\u4fdd\u8bc1\u4e86\u4e1a\u52a1\u7684\u7a33\u5b9a\u4e0e\u9ad8\u53ef\u7528\u3002"),(0,s.kt)("h4",{id:"\u573a\u666f\u4e09\uff1a\u4e00\u4e2a-apache-apisix-\u96c6\u7fa4\u7ba1\u7406\u591a\u4e2a-kubernetes-\u96c6\u7fa4"},"\u573a\u666f\u4e09\uff1a\u4e00\u4e2a Apache APISIX \u96c6\u7fa4\u7ba1\u7406\u591a\u4e2a Kubernetes \u96c6\u7fa4"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156063-c7d879c6-8dfb-4ead-a88d-b5bdc9e453d6.png",alt:"\u591a Kubernetes \u96c6\u7fa4"})),(0,s.kt)("p",null,"\u8be5\u4f7f\u7528\u573a\u666f\u662f\u5c06 APISIX Ingress Controller \u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u5185\u90e8\uff0c\u4e0e\u573a\u666f\u4e00\u4e0d\u540c\u7684\u662f\u8fd9\u91cc\u6709\u591a\u4e2a Kubernetes \u96c6\u7fa4\u3002\u4f46\u76f8\u5e94\u7684 Apache APISIX \u5b9e\u9645\u4e0a\u662f\u90e8\u7f72\u5728\u6240\u6709 Kubernetes \u96c6\u7fa4\u5916\u90e8\uff0c\u7136\u540e\u901a\u8fc7 Apache APISIX Ingress Controller \u5c06\u5404\u81ea\u96c6\u7fa4\u7684\u914d\u7f6e\u540c\u6b65\u5230\u603b\u7684 Apache APISIX \u96c6\u7fa4\u4e2d\u3002"),(0,s.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u4f18\u52bf\u662f\u53ef\u4ee5\u901a\u8fc7\u4e00\u5957 SLB Cluster \u53bb\u5b8c\u5168\u63a7\u5236\u5404\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u6ee1\u8db3\u4e00\u4e9b\u4f01\u4e1a\u67b6\u6784\u4e3a\u591a\u96c6\u7fa4\u6216\u8de8\u673a\u623f\u7684\u4f7f\u7528\u573a\u666f\uff0c\u51cf\u5c11\u4e1a\u52a1\u6d41\u91cf\u4e0a\u7684\u8f6c\u53d1\u6b21\u6570\u3002"),(0,s.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,s.kt)("p",null,"\u5f97\u76ca\u4e8e\u4ee5\u4e0a\u6536\u83b7\u6210\u679c\uff0cApache APISIX Ingress \u4e5f\u5f97\u5230\u4e86\u8d8a\u6765\u8d8a\u591a\u7684\u5173\u6ce8\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4f01\u4e1a\u4e5f\u5f00\u59cb\u5c06 APISIX Ingress Controller \u5e94\u7528\u5230\u81ea\u5bb6\u4ea7\u54c1\u4e2d\uff0c\u6bd4\u5982\u4e2d\u56fd\u79fb\u52a8\u3001\u53c8\u62cd\u4e91\u3001\u6709\u8d5e\u3001\u89c2\u4e3a\u667a\u6167\u7b49\u591a\u5bb6\u4f01\u4e1a\u3002\u672a\u6765\u671f\u5f85\u66f4\u591a\u4f01\u4e1a\u9009\u62e9 Apache APISIX Ingress\u3002"),(0,s.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,s.kt)("p",null,"Apache APISIX Ingress \u5728\u4e0d\u65ad\u8fed\u4ee3\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u6536\u5230\u4e86\u5f88\u591a\u793e\u533a\u5c0f\u4f19\u4f34\u7684\u4e00\u4e9b\u5efa\u8bae\uff0c\u6bd4\u5982\u5bf9\u672a\u6765\u4ea7\u54c1\u7684\u4e00\u4e9b\u529f\u80fd\u89c4\u5212\uff1a"),(0,s.kt)("h3",{id:"\u540e\u7eed\u652f\u6301-kubernetes-gateway-api"},"\u540e\u7eed\u652f\u6301 Kubernetes gateway API"),(0,s.kt)("p",null,"\u76ee\u524d Kubernetes \u793e\u533a\u91cc\u4e5f\u6709\u5f88\u591a\u4f01\u4e1a\u5728\u505a\u81ea\u5df1\u7684 Ingress \u9879\u76ee\u652f\u6301\uff0cKubernetes \u793e\u533a\u4e3a\u4e86\u80fd\u7edf\u4e00 Ingress \u7684\u8bbe\u8ba1\uff0c\u7ed9\u51fa\u4e86 gateway API \u7684\u5b9e\u73b0\u6807\u51c6\u3002\u4e00\u65e6\u5b9e\u73b0\u4e86\u8fd9\u79cd\u6807\u51c6\uff0c\u540e\u7eed\u7528\u6237\u518d\u4f7f\u7528 APISIX Ingress \u65f6\uff0c\u5c31\u53ef\u4ee5\u505a\u5230\u540c\u4e00\u4efd\u914d\u7f6e\u5728\u4e0d\u540c\u7684 Ingress \u91cc\u53bb\u4f7f\u7528\uff0c\u5b8c\u7f8e\u9002\u914d\u591a\u65b9\u90e8\u7f72\u3002"),(0,s.kt)("h3",{id:"\u540e\u7eed\u652f\u6301-ingress-controller-\u5355\u4f53\u67b6\u6784"},"\u540e\u7eed\u652f\u6301 Ingress Controller \u5355\u4f53\u67b6\u6784"),(0,s.kt)("p",null,"\u76ee\u524d\u793e\u533a\u91cc\u6709\u4e00\u4e9b\u58f0\u97f3\u4f1a\u8ba4\u4e3a Apache APISIX \u6240\u4f9d\u8d56\u7684 etcd \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u6709\u72b6\u6001\u7684\u670d\u52a1\uff0c\u4e00\u65e6\u6d89\u53ca\u5230\u6709\u72b6\u6001\u7684\u670d\u52a1\uff0c\u5c31\u9700\u8981\u989d\u5916\u53bb\u5173\u6ce8\u5b58\u50a8\u548c\u8fc1\u79fb\u76f8\u5173\u7684\u5de5\u4f5c\u3002"),(0,s.kt)("p",null,"\u5927\u5bb6\u5e0c\u671b\u5728\u5bb9\u5668\u5316\u7684\u4e91\u539f\u751f\u573a\u666f\u4e0b\uff0c\u8ba9 Apache APISIX \u53ef\u4ee5\u65e0\u7f1d\u6269\u5bb9\uff0c\u6240\u4ee5\u540e\u7eed\u4e5f\u4f1a\u53bb\u8fdb\u884c Ingress Controller \u5355\u4f53\u67b6\u6784\u7684\u90e8\u7f72\u89c4\u5212\u3002\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0cApache APISIX \u53ef\u4ee5\u8131\u79bb etcd \u5355\u72ec\u90e8\u7f72\uff0c\u58f0\u660e\u5f0f\u914d\u7f6e\u53ef\u4ee5\u88ab Apache APISIX Ingress Controller \u76d1\u542c\u5e76\u540c\u6b65\u5230 Apache APISIX\u3002"),(0,s.kt)("p",null,"\u66f4\u591a\u672a\u6765\u89c4\u5212\u4ee5\u53ca\u7279\u6027\u76f8\u5173\u5185\u5bb9",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/milestones"},"\u70b9\u6b64\u67e5\u9605"),"\u3002"),(0,s.kt)("p",null,"\u793e\u533a\u7684\u53d1\u5c55\u662f\u6c38\u65e0\u6b62\u5883\u7684\uff0c\u5f88\u611f\u8c22\u4e00\u8def\u4ee5\u6765\u5404\u4f4d\u7528\u6237\u5bf9 Apache APISIX Ingress Controller \u7684\u652f\u6301\u3002\u5e0c\u671b\u5927\u5bb6\u5728\u540e\u7eed\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u79ef\u6781\u5730\u53c2\u4e0e\u548c\u53cd\u9988\u5173\u4e8e Apache APISIX Ingress Controller \u9879\u76ee\u7684\u4efb\u4f55\u95ee\u9898\uff0c\u8ba9\u4ea7\u54c1\u53d8\u5f97\u66f4\u4f18\u79c0\u3002"))}I.isMDXComponent=!0}}]);