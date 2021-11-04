"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54632],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9576:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o={title:"APISIX"},c=void 0,p={unversionedId:"architecture-design/apisix",id:"version-2.5/architecture-design/apisix",isDocsHomePage:!1,title:"APISIX",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.5/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/zh/docs/apisix/2.5/architecture-design/apisix",editUrl:"https://github.com/apache/apisix/edit/release/2.5/docs/zh/latest/architecture-design/apisix.md",tags:[],version:"2.5",frontMatter:{title:"APISIX"},sidebar:"version-2.5/docs",next:{title:"Route",permalink:"/zh/docs/apisix/2.5/architecture-design/route"}},l=[{value:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b",id:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b",children:[]},{value:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784",id:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784",children:[]},{value:"\u914d\u7f6e APISIX",id:"\u914d\u7f6e-apisix",children:[]}],s={toc:l};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b"},"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.5/docs/assets/images/flow-load-plugin.png",alt:"\u63d2\u4ef6\u52a0\u8f7d\u6d41\u7a0b"})),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784"},"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.5/docs/assets/images/flow-plugin-internal.png",alt:"\u63d2\u4ef6\u5185\u90e8\u7ed3\u6784"})),(0,a.kt)("h2",{id:"\u914d\u7f6e-apisix"},"\u914d\u7f6e APISIX"),(0,a.kt)("p",null,"\u901a\u8fc7\u4fee\u6539\u672c\u5730 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\uff0c\u6216\u8005\u5728\u542f\u52a8 APISIX \u65f6\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," \u6dfb\u52a0\u6587\u4ef6\u8def\u5f84\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix start -c <path string>"),"\uff0c\u5b8c\u6210\u5bf9 APISIX \u670d\u52a1\u672c\u8eab\u7684\u57fa\u672c\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u4fee\u6539 APISIX \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a 8000\uff0c\u5176\u4ed6\u914d\u7f6e\u4fdd\u6301\u9ed8\u8ba4\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u53ea\u9700\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  node_listen: 8000 # APISIX listening port\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u6307\u5b9a APISIX \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a 8000\uff0c\u5e76\u4e14\u8bbe\u7f6e etcd \u5730\u5740\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"http://foo:2379"),"\uff0c\n\u5176\u4ed6\u914d\u7f6e\u4fdd\u6301\u9ed8\u8ba4\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u53ea\u9700\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  node_listen: 8000 # APISIX listening port\n\netcd:\n  host: "http://foo:2379" # etcd address\n')),(0,a.kt)("p",null,"\u5176\u4ed6\u9ed8\u8ba4\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u6587\u4ef6\u4e2d\u770b\u5230\uff0c\u8be5\u6587\u4ef6\u662f\u4e0e APISIX \u6e90\u7801\u5f3a\u7ed1\u5b9a\uff0c\n",(0,a.kt)("strong",{parentName:"p"},"\u6c38\u8fdc\u4e0d\u8981"),"\u624b\u5de5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u6587\u4ef6\u3002\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u4efb\u4f55\u914d\u7f6e\uff0c\u90fd\u5e94\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u4e2d\u5b8c\u6210\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ce8\u610f")," \u4e0d\u8981\u624b\u5de5\u4fee\u6539 APISIX \u81ea\u8eab\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," \u6587\u4ef6\uff0c\u5f53\u670d\u52a1\u6bcf\u6b21\u542f\u52a8\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"apisix"),"\n\u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u914d\u7f6e\u81ea\u52a8\u751f\u6210\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," \u5e76\u81ea\u52a8\u542f\u52a8\u670d\u52a1\u3002"))}u.isMDXComponent=!0}}]);