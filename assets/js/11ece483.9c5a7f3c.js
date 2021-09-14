"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74034],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2837:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i={title:"FAQ"},l=void 0,s={unversionedId:"FAQ",id:"version-2.8/FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.8/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/dashboard/FAQ",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/FAQ.md",tags:[],version:"2.8",frontMatter:{title:"FAQ"},sidebar:"version-2.8/docs",previous:{title:"Backend Tests",permalink:"/docs/dashboard/back-end-tests"}},c=[{value:"1. Vue.js version of the Dashboard",id:"1-vuejs-version-of-the-dashboard",children:[]},{value:"2. What are the differences between Dashboard version 2.0 and version 1.5?",id:"2-what-are-the-differences-between-dashboard-version-20-and-version-15",children:[]},{value:"3. Etcd compatibility issues",id:"3-etcd-compatibility-issues",children:[]},{value:"4. After modifying the plugin schema or creating a custom plugin in Apache APISIX, why can&#39;t I find it on the dashboard?",id:"4-after-modifying-the-plugin-schema-or-creating-a-custom-plugin-in-apache-apisix-why-cant-i-find-it-on-the-dashboard",children:[]},{value:"5. How to write API documentation",id:"5-how-to-write-api-documentation",children:[]},{value:"6. How to allow all IPs to access APISIX Dashboard",id:"6-how-to-allow-all-ips-to-access-apisix-dashboard",children:[]},{value:"7. What is the default strategy when import a duplicate route?",id:"7-what-is-the-default-strategy-when-import-a-duplicate-route",children:[]},{value:"8. APISIX dashboard add grafana cross-domain problem",id:"8-apisix-dashboard-add-grafana-cross-domain-problem",children:[]}],p={toc:c};function d(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-vuejs-version-of-the-dashboard"},"1. Vue.js version of the Dashboard"),(0,r.kt)("p",null,"If you need a Vue.js build of the Apache APISIX Dashboard 1.0, use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/master-vue"},"master-vue branch"),"."),(0,r.kt)("h3",{id:"2-what-are-the-differences-between-dashboard-version-20-and-version-15"},"2. What are the differences between Dashboard version 2.0 and version 1.5?"),(0,r.kt)("p",null,"The 2.0 version of the dashboard removed MySQL from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/backup-1.5-latest"},"version 1.5")," and will operate directly on etcd."),(0,r.kt)("h3",{id:"3-etcd-compatibility-issues"},"3. Etcd compatibility issues"),(0,r.kt)("p",null,"If you are using Apache APISIX below v2.0, be aware that the data from the etcd v2 API is ",(0,r.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/v2-migration/"},"not compatible")," with the data from the v3 API. Apache APISIX Dashboard v2.0 and above uses the etcd v3 API, and apisix 1.5 and below uses the etcd v2 API."),(0,r.kt)("h3",{id:"4-after-modifying-the-plugin-schema-or-creating-a-custom-plugin-in-apache-apisix-why-cant-i-find-it-on-the-dashboard"},"4. After modifying the plugin schema or creating a custom plugin in Apache APISIX, why can't I find it on the dashboard?"),(0,r.kt)("p",null,"Since the Dashboard caches the jsonschema data of the plugins in Apache APISIX, you need to synchronize the data in the Dashboard after you create your custom plugins in Apache APISIX, which currently ",(0,r.kt)("strong",{parentName:"p"},"only supports manual operation"),". Please follow the following guide."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that your APISIX is running and has enabled control API (enabled by default and only runs local access)\nRefer to the beginning in:\n",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api"},"https://apisix.apache.org/docs/apisix/control-api"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following commands to export jsonchema on your APISIX server (if it is configured for non-local access, it does not need to be executed on your APISIX server, and the access IP and port should be modified accordingly)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl 127.0.0.1:9090/v1/schema > schema.json\n")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api#get-v1schema"},"https://apisix.apache.org/docs/apisix/control-api#get-v1schema")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the exported ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.json")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf")," directory in the Dashboard working directory (About working directory, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/docs/en/latest/deploy.md#working-directory"},"https://github.com/apache/apisix-dashboard/blob/master/docs/en/latest/deploy.md#working-directory"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the Manager API"))),(0,r.kt)("h3",{id:"5-how-to-write-api-documentation"},"5. How to write API documentation"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-swagger/go-swagger"},"go-swagger")," to generate Swagger 2.0 documents, and then convert them to markdown format so that they can be viewed directly in the github repository. Specific steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write comments according to ",(0,r.kt)("a",{parentName:"p",href:"https://goswagger.io/use/spec.html"},"Specification"),". For details, please refer to the existing example ",(0,r.kt)("inlineCode",{parentName:"p"},"api/internal/handler/route/route.go")," in this project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"go-swagger")," tool to generate Swagger 2.0 documents."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ swagger generate spec -o ./docs/en/latest/api/api.yaml --scan-models\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"swagger-markdown")," tool to convert Swagger 2.0 documents into markdown documents.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ swagger-markdown -i ./docs/en/latest/api/api.yaml\n")),(0,r.kt)("h3",{id:"6-how-to-allow-all-ips-to-access-apisix-dashboard"},"6. How to allow all IPs to access APISIX Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allow all IPv4 access")),(0,r.kt)("p",null,"By default, the IPv4 range of ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.0/24")," is allowed to access ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),". If you want to allow all IPv4 access, then just configure ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.allow_list")," in the configuration file of ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/conf.yaml")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"conf:\n  allow_list:\n    - 0.0.0.0/0\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Allow all IPv6 access")),(0,r.kt)("p",null,"By default, the IPv6 range of ",(0,r.kt)("inlineCode",{parentName:"p"},"::1")," is allowed to access ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),". If you want to allow all IPv6 access, then just configure ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.allow_list")," in the configuration file of ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/conf.yaml")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"conf:\n  allow_list:\n    - ::/0\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Allow all IP access")),(0,r.kt)("p",null,"If you want to allow all IPs to access ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),", you only need to do the following configuration in the configuration file of ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/conf.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"conf:\n  allow_list:\n")),(0,r.kt)("p",null,"Restart ",(0,r.kt)("inlineCode",{parentName:"p"},"manager-api"),", all IPs can access ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),"."),(0,r.kt)("p",null,"Note: You can use this method in development and test environment to allow all IPs to access your ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard")," instance, but it is not safe to use it in a production environment. In production environment, please only authorize specific IP addresses or address ranges to access your instance."),(0,r.kt)("h3",{id:"7-what-is-the-default-strategy-when-import-a-duplicate-route"},"7. What is the default strategy when import a duplicate route?"),(0,r.kt)("p",null,"Currently we reject import duplicate route, that is to say when you import a route which has the same attributes, all of the ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," ",(0,r.kt)("inlineCode",{parentName:"p"},"uris")," ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," ",(0,r.kt)("inlineCode",{parentName:"p"},"remote_addr")," ",(0,r.kt)("inlineCode",{parentName:"p"},"remote_addrs")," ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filter_func"),", as the existing route, you will get an error while importing a route from OAS3.0."),(0,r.kt)("h3",{id:"8-apisix-dashboard-add-grafana-cross-domain-problem"},"8. APISIX dashboard add grafana cross-domain problem"),(0,r.kt)("p",null,"Modifying the Grafana configuration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enable anonymous access:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# grep 'auth.anonymous' -A 3 defaults.ini\n[auth.anonymous]\n# enable anonymous access\nenabled = true\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Allow access via iframe")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# grep 'allow_embedding' defaults.ini\nallow_embedding = true\n\xb7\xb7\xb7\n")))}d.isMDXComponent=!0}}]);