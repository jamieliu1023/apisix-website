"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71465],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(t),g=a,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||s;return t?r.createElement(h,p(p({ref:n},c),{},{components:t})):r.createElement(h,p({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,p=new Array(s);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<s;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21993:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return o},toc:function(){return c},default:function(){return u}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),p={title:"\u6559\u7a0b\u7bc7\uff1a\u5982\u4f55\u5728 Apache APISIX Ingress Controller \u4e2d\u4f7f\u7528 Cert Manager \u7ba1\u7406\u8bc1\u4e66",author:"\u5f20\u8d85",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4",keywords:["Apache APISIX Ingress Controller","Apache APISIX","Cert Manager","Kubernetes"],description:"\u672c\u6587\u5c06\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u5728 Apache APISIX Ingress Controller \u91cc\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406\u3002",tags:["technology"]},i=void 0,l={permalink:"/zh/blog/2021/10/22/cert-manager-in-ingress",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/10/22/cert-manager-in-ingress.md",title:"\u6559\u7a0b\u7bc7\uff1a\u5982\u4f55\u5728 Apache APISIX Ingress Controller \u4e2d\u4f7f\u7528 Cert Manager \u7ba1\u7406\u8bc1\u4e66",description:"\u672c\u6587\u5c06\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u5728 Apache APISIX Ingress Controller \u91cc\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406\u3002",date:"2021-10-22T00:00:00.000Z",formattedDate:"2021\u5e7410\u670822\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:3.275,truncated:!0,authors:[{name:"\u5f20\u8d85",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"}],prevItem:{title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",permalink:"/zh/blog/2021/10/26/APISIX-Ingress"},nextItem:{title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache SkyWalking \u7ebf\u4e0a\u5206\u4eab",permalink:"/zh/blog/2021/10/18/meetup"}},o={authorsImageUrls:[void 0]},c=[{value:"\u6b65\u9aa4\u4e00\uff1a\u73af\u5883\u51c6\u5907",id:"\u6b65\u9aa4\u4e00\uff1a\u73af\u5883\u51c6\u5907",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u5b89\u88c5 Apache APISIX Ingress Controller",id:"\u6b65\u9aa4\u4e8c\uff1a\u5b89\u88c5-apache-apisix-ingress-controller",children:[]},{value:"\u6b65\u9aa4\u4e09\uff1a\u5b89\u88c5 Cert Manager",id:"\u6b65\u9aa4\u4e09\uff1a\u5b89\u88c5-cert-manager",children:[]},{value:"\u6b65\u9aa4\u56db\uff1a\u7533\u8bf7\u8bc1\u4e66\u5e76\u6d4b\u8bd5",id:"\u6b65\u9aa4\u56db\uff1a\u7533\u8bf7\u8bc1\u4e66\u5e76\u6d4b\u8bd5",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],m={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u5728 Apache APISIX Ingress Controller \u91cc\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406\u3002")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"Apache APISIX Ingress Controller")," \u662f\u4e00\u6b3e\u4ee5 ",(0,s.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," \u4f5c\u4e3a\u6570\u636e\u9762\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Kubernetes Ingress Controller")," \u5f00\u6e90\u5de5\u5177\uff0c\u76ee\u524d\u5df2\u7ecf\u66f4\u65b0\u5230 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/CHANGELOG.md#130"},"v1.3")," \u7248\u672c\uff0c\u5b9e\u73b0\u4e86\u5982\u8bc1\u4e66\u7ba1\u7406\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u91d1\u4e1d\u96c0\u53d1\u5e03\u7b49\u529f\u80fd\u3002"),(0,s.kt)("p",null,"\u957f\u4e45\u4ee5\u6765\uff0c\u8bc1\u4e66\u7ba1\u7406\u90fd\u4e0d\u662f\u4e00\u4ef6\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u867d\u7136 Apache APISIX Ingress Controller \u652f\u6301\u4ece Kubernetes Secrets \u8d44\u6e90\u4e2d\u63d0\u53d6\u8bc1\u4e66\u548c\u79c1\u94a5\uff0c\u5e76\u8f6c\u6362\u4e3a Apache APISIX \u53ef\u8bc6\u522b\u7684 SSL \u5bf9\u8c61\uff0c\u4f46\u8fd9\u53ea\u662f\u6574\u4e2a\u8bc1\u4e66\u7ba1\u7406\u94fe\u4e2d\u7684\u4e00\u90e8\u5206\uff0c\u8bc1\u4e66\u7684\u9881\u53d1\u3001\u8f6e\u8f6c\u3001\u540a\u9500\u903b\u8f91\u4f9d\u7136\u9700\u8981\u7ba1\u7406\u5458\u6267\u884c\uff0c\u5c24\u5176\u5f53\u8bc1\u4e66\u6570\u91cf\u6bd4\u8f83\u591a\u65f6\uff0c\u5de5\u4f5c\u91cf\u5f80\u5f80\u5e76\u4e0d\u5c0f\uff0c\u56e0\u800c\u4f1a\u5360\u7528\u7ba1\u7406\u5458\u4e0d\u5c11\u7684\u65f6\u95f4\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},"Cert Manager")," \u662f\u4e00\u6b3e\u81f4\u529b\u4e8e\u5728 Kubernetes \u5e73\u53f0\u4e0a\u7b80\u5316\u8bc1\u4e66\u7ba1\u7406\u7684\u8f6f\u4ef6\uff0c\u5b83\u652f\u6301\u5bf9\u63a5\u8bb8\u591a\u4e0d\u540c\u7684\u8bc1\u4e66\u6e90\uff0c\u5982 ",(0,s.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let\u2019s Encrypt")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"HashiCorp Vault"),"\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528 Apache APISIX Ingress Controller \u65f6\uff0c\u9047\u5230\u4e86\u8bc1\u4e66\u7ba1\u7406\u7684\u9ebb\u70e6\uff0c\u90a3\u4e48\u4f7f\u7528 Cert Manager \u5c06\u4f1a\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u6765\u521b\u5efa\u8bc1\u4e66\u5e76\u5bf9\u63a5\u5230 Apache APISIX Ingress Controller\u3002"),(0,s.kt)("h2",{id:"\u6b65\u9aa4\u4e00\uff1a\u73af\u5883\u51c6\u5907"},"\u6b65\u9aa4\u4e00\uff1a\u73af\u5883\u51c6\u5907"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u6309\u7167\u672c\u6587\u7684\u6307\u5bfc\u8fdb\u884c\u5b9e\u9645\u7684\u64cd\u4f5c\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u73af\u5883\u548c\u5de5\u5177\u5df2\u51c6\u5907\u5c31\u7eea\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u51c6\u5907\u4e00\u4e2a\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")," \u548c ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/hello-minikube/"},"Minikube")),(0,s.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/hello-minikube/"},"kubectl")),(0,s.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,s.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm v3"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u4e0b\u6587\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u5c06\u5728 ingress-apisix \u547d\u540d\u7a7a\u95f4\u4e2d\u6267\u884c\uff0c\u56e0\u6b64\u9700\u8981\u5148\u521b\u5efa\u8be5\u547d\u540d\u7a7a\u95f4\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl create namespace ingress-apisix"))),(0,s.kt)("h2",{id:"\u6b65\u9aa4\u4e8c\uff1a\u5b89\u88c5-apache-apisix-ingress-controller"},"\u6b65\u9aa4\u4e8c\uff1a\u5b89\u88c5 Apache APISIX Ingress Controller"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Helm \u6765\u5b89\u88c5 Apache APISIX Ingress Controller\uff0c\u5305\u62ec\u6570\u636e\u9762\u7684 Apache APISIX \u548c etcd \u96c6\u7fa4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nhelm install apisix apisix/apisix --set gateway.tls.enabled=true --set ingress-controller.enabled=true --namespace ingress-apisix\n")),(0,s.kt)("p",null,"\u70b9\u51fb\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/master/charts/apisix/README.md"},"\u8be6\u7ec6\u5b89\u88c5\u4ecb\u7ecd"),"\u3002"),(0,s.kt)("h2",{id:"\u6b65\u9aa4\u4e09\uff1a\u5b89\u88c5-cert-manager"},"\u6b65\u9aa4\u4e09\uff1a\u5b89\u88c5 Cert Manager"),(0,s.kt)("p",null,"\u901a\u8fc7 Helm \u6765\u5b89\u88c5 Cert Manager\uff0c\u70b9\u51fb\u53ef\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},"\u8be6\u7ec6\u5b89\u88c5\u4ecb\u7ecd"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"helm install cert-manager jetstack/cert-manager --namespace ingress-apisix  --set prometheus.enabled=false --set installCRDs=true\n")),(0,s.kt)("p",null,"\u5b89\u88c5\u5b8c\u6bd5\u540e\u8bf7\u7b49\u5f85\u4e00\u4f1a\u540e\u67e5\u770b\u7ec4\u4ef6\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u786e\u4fdd\u6240\u6709\u7ec4\u4ef6\u90fd\u5df2\u6b63\u5e38\u8fd0\u884c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u67e5\u770b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get all -n ingress-apisix\n")),(0,s.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff0c\u8868\u793a\u6240\u6709\u7ec4\u4ef6\u90fd\u5df2\u6b63\u5e38\u8fd0\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Apache"},"NAME                                             READY   STATUS        RESTARTS   AGE\npod/apisix-5d99956d88-j68sj                      1/1     Running       0          63s\npod/apisix-69459554d4-btnwn                      0/1     Terminating   0          57m\npod/apisix-etcd-0                                1/1     Running       0          57m\npod/apisix-etcd-1                                1/1     Running       0          57m\npod/apisix-etcd-2                                0/1     Running       0          50s\npod/apisix-ingress-controller-7b5c767cc7-j62hb   1/1     Running       0          55m\npod/cert-manager-5ffd4f6c89-q9f7m                1/1     Running       0          45m\npod/cert-manager-cainjector-748dc889c5-nrvkh     1/1     Running       0          45m\npod/cert-manager-startupapicheck-kmgxf           0/1     Completed     0          45m\npod/cert-manager-webhook-bc964d98b-mkjj7         1/1     Running       0          45m\n\nNAME                                TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE\nservice/apisix-admin                ClusterIP   10.96.16.25     <none>        9180/TCP                     57m\nservice/apisix-etcd                 ClusterIP   10.96.232.251   <none>        2379/TCP,2380/TCP            57m\nservice/apisix-etcd-headless        ClusterIP   None            <none>        2379/TCP,2380/TCP            57m\nservice/apisix-gateway              NodePort    10.96.118.75    <none>        80:32039/TCP,443:30107/TCP   57m\nservice/apisix-ingress-controller   ClusterIP   10.96.13.76     <none>        80/TCP                       57m\nservice/cert-manager-webhook        ClusterIP   10.96.182.188   <none>        443/TCP                      45m\n\nNAME                                        READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/apisix                      1/1     1            1           57m\ndeployment.apps/apisix-ingress-controller   1/1     1            1           57m\ndeployment.apps/cert-manager                1/1     1            1           45m\ndeployment.apps/cert-manager-cainjector     1/1     1            1           45m\ndeployment.apps/cert-manager-webhook        1/1     1            1           45m\n\nNAME                                                   DESIRED   CURRENT   READY   AGE\nreplicaset.apps/apisix-5d99956d88                      1         1         1       63s\nreplicaset.apps/apisix-69459554d4                      0         0         0       57m\nreplicaset.apps/apisix-ingress-controller-74c6b5fbdd   0         0         0       57m\nreplicaset.apps/apisix-ingress-controller-7b5c767cc7   1         1         1       55m\nreplicaset.apps/apisix-ingress-controller-7d58db957c   0         0         0       55m\nreplicaset.apps/cert-manager-5ffd4f6c89                1         1         1       45m\nreplicaset.apps/cert-manager-cainjector-748dc889c5     1         1         1       45m\nreplicaset.apps/cert-manager-webhook-bc964d98b         1         1         1       45m\n\nNAME                           READY   AGE\nstatefulset.apps/apisix-etcd   2/3     57m\n\nNAME                                     COMPLETIONS   DURATION   AGE\njob.batch/cert-manager-startupapicheck   1/1           6m24s      45m\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"Kubernetes Controller Manager")," \u7684\u673a\u5236\u51b3\u5b9a\u4e86 Pod \u540d\u79f0\u4f1a\u6709\u6240\u4e0d\u540c\u3002")),(0,s.kt)("h2",{id:"\u6b65\u9aa4\u56db\uff1a\u7533\u8bf7\u8bc1\u4e66\u5e76\u6d4b\u8bd5"},"\u6b65\u9aa4\u56db\uff1a\u7533\u8bf7\u8bc1\u4e66\u5e76\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u914d\u7f6e\u8bc1\u4e66\u9881\u53d1\u5bf9\u8c61\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# issuer.yaml\napiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: issuer\n  namespace: ingress-apisix\nspec:\n  selfSigned: {}\n")),(0,s.kt)("p",null,"\u5e76\u521b\u5efa\u81ea\u7b7e\u540d\u8bc1\u4e66\u9881\u53d1\u8005\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f issuer.yaml\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u81ea\u7b7e\u540d\u9881\u53d1\u5bf9\u8c61\u4e0d\u63a8\u8350\u4f7f\u7528\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff01\u66f4\u591a\u8bc1\u4e66\u9881\u53d1\u5bf9\u8c61\u7684\u914d\u7f6e\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/"},"\u8fd9\u91cc"),"\u3002")),(0,s.kt)("p",null,"\u7136\u540e\u4e3a\u57df\u540d ",(0,s.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u521b\u5efa\u4e00\u5f20\u8bc1\u4e66\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# httpbin-cert.yaml\napiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: httpbin\n  namespace: ingress-apisix\nspec:\n  secretName: httpbin\n  duration: 2160h # 90d\n  renewBefore: 360h # 15d\n  subject:\n    organizations:\n      - foo\n  commonName: httpbin.org\n  isCA: false\n  privateKey:\n    algorithm: RSA\n    encoding: PKCS1\n    size: 2048\n  usages:\n    - server auth\n  dnsNames:\n    - "httpbin.org"\n    - "*.httpbin.org"\n  issuerRef:\n    name: issuer\n    kind: Issuer\n    group: cert-manager.io\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f httpbin-cert.yaml\n")),(0,s.kt)("p",null,"\u6b64\u65f6\u9700\u8981\u67e5\u770b\u5bf9\u5e94 Secrets \u662f\u5426\u5df2\u7ecf\u88ab\u521b\u5efa\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secrets -n ingress-apisix httpbin\nNAME      TYPE                DATA   AGE\nhttpbin   kubernetes.io/tls   3      2m5s\n")),(0,s.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u9a8c\u8bc1\uff0c\u8be5 Secrets \u5bf9\u8c61\u7684\u521b\u5efa\u4e8b\u4ef6\u5df2\u7ecf\u88ab Apache APISIX Ingress Controller \u6355\u83b7\u5230\uff0c\u6211\u4eec\u5c1d\u8bd5\u8bbf\u95ee Apache APISIX Ingress Controller \u6765\u9a8c\u8bc1\u8bc1\u4e66\u662f\u5426\u751f\u6548\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u521b\u5efa\u989d\u5916\u7684\u8def\u7531\u5bf9\u8c61\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u540e\u7aef\nkubectl run httpbin --image kennethreitz/httpbin --namespace ingress-apisix\nkubectl expose pod httpbin -n ingress-apisix --port 80\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5b9a\u4e49 ApisixTls \u5bf9\u8c61\napiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: httpbin\n  namespace: ingress-apisix\nspec:\n  hosts:\n  - httpbin.org\n  secret:\n    name: httpbin\n    namespace: ingress-apisix\n---\n# \u5b9a\u4e49\u8bbf\u95ee\u540e\u7aef\u7684\u8def\u7531\napiVersion: apisix.apache.org/v2beta1\nkind: ApisixRoute\nmetadata:\n  name: httpbin\n  namespace: ingress-apisix\nspec:\n  http:\n  - name: httpbin\n    match:\n      paths:\n      - /*\n      hosts:\n      - httpbin.org\n    backends:\n    - serviceName: httpbin\n      servicePort: 80\n")),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u8bbf\u95ee\u670d\u52a1 ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),"\u3002\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8be5\u670d\u52a1\u7684\u7c7b\u578b\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"NodePort"),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4fee\u6539\u5176\u7c7b\u578b\uff0c\u6bd4\u5982\u4f60\u7684 Kubernetes \u96c6\u7fa4\u662f\u4e91\u5382\u5546\u6258\u7ba1\u7684\uff0c\u5219\u53ef\u4ee5\u8003\u8651\u5c06\u5176\u4fee\u6539\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u7c7b\u578b\uff0c\u4ee5\u83b7\u53d6\u4e00\u4e2a\u5916\u90e8\u53ef\u8fbe\u7684 IP\u3002"),(0,s.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7\u7aef\u53e3\u8f6c\u53d1\u7684\u65b9\u5f0f\u5c06\u670d\u52a1\u6620\u5c04\u5230\u672c\u5730\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ingress-apisix svc/apisix-gateway 8443:443\n")),(0,s.kt)("p",null,"\u7136\u540e\u5f00\u59cb\u914d\u7f6e\u8bbf\u95ee\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://httpbin.org:8443/json --resolve \'httpbin.org:8443:127.0.0.1\' -sk\n{\n  "slideshow": {\n    "author": "Yours Truly",\n    "date": "date of publication",\n    "slides": [\n      {\n        "title": "Wake up to WonderWidgets!",\n        "type": "all"\n      },\n      {\n        "items": [\n          "Why <em>WonderWidgets</em> are great",\n          "Who <em>buys</em> WonderWidgets"\n        ],\n        "title": "Overview",\n        "type": "all"\n      }\n    ],\n    "title": "Sample Slide Show"\n  }\n}\n')),(0,s.kt)("p",null,"\u7ecf\u8fc7\u4e0a\u8ff0\u64cd\u4f5c\uff0c\u53ef\u4ee5\u770b\u5230\u8bbf\u95ee\u6210\u529f\uff0c\u8bf4\u660e\u8bc1\u4e66\u5df2\u7ecf\u751f\u6548\u3002\u6ce8\u610f\uff0c\u7531\u4e8e\u8bc1\u4e66\u662f\u81ea\u7b7e\u540d\u7684\uff0c\u8fd9\u91cc\u9700\u8981\u52a0\u4e0a ",(0,s.kt)("inlineCode",{parentName:"p"},"-k")," \u9009\u9879\u6765\u5ffd\u7565\u8bc1\u4e66\u7684\u6821\u9a8c\u3002"),(0,s.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u4f60\u60f3\u8981\u8f6e\u8f6c\u8bc1\u4e66\uff0c\u5220\u9664 ",(0,s.kt)("inlineCode",{parentName:"p"},"httpbin")," \u8fd9\u4e00 Secret \u5bf9\u8c61\u5373\u53ef\uff0cCert Manager \u4f1a\u7acb\u523b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 httpbin  Secret \u5bf9\u8c61\uff0c\u5e76\u4e14\u5305\u542b\u65b0\u7684\u8bc1\u4e66\u3002"),(0,s.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,s.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u8bb2\u89e3\u4e86\u5982\u4f55\u5229\u7528 Cert Manager \u5728 Apache APISIX Ingress Controller \u4e2d\u8fdb\u884c\u8bc1\u4e66\u7684\u521b\u5efa\u548c\u7ba1\u7406\u3002\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Apache APISIX Ingress \u7684\u4ecb\u7ecd\u4e0e\u5185\u5bb9\uff0c\u53ef\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/10/09/apisix-ingress-techblog/"},"\u672c\u7bc7\u6587\u7ae0"),"\u3002"),(0,s.kt)("p",null,"\u6216\u8005\u53c2\u4e0e Apache APISIX  Ingress \u9879\u76ee\u6bcf\u4e24\u5468\u4e3e\u884c\u7684\u7ebf\u4e0a\u8ba8\u8bba\uff0c\u5206\u4eab\u5f53\u4e0b\u9879\u76ee\u8fdb\u5ea6\u3001\u6700\u4f73\u5b9e\u8df5\u53ca\u8bbe\u8ba1\u601d\u8def\u7b49\u591a\u4e2a\u8bdd\u9898\uff0c\u53ef\u67e5\u770b\u5177\u4f53 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"issue")," \u4e86\u89e3\u66f4\u591a\u3002"))}u.isMDXComponent=!0}}]);