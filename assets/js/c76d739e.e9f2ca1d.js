"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77464],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19612:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={title:"Script"},c=void 0,p={unversionedId:"architecture-design/script",id:"version-2.6/architecture-design/script",isDocsHomePage:!1,title:"Script",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/architecture-design/script.md",sourceDirName:"architecture-design",slug:"/architecture-design/script",permalink:"/docs/apisix/2.6/architecture-design/script",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/script.md",tags:[],version:"2.6",frontMatter:{title:"Script"},sidebar:"version-2.6/docs",previous:{title:"Plugin",permalink:"/docs/apisix/2.6/architecture-design/plugin"},next:{title:"Service",permalink:"/docs/apisix/2.6/architecture-design/service"}},l=[],s={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Script")," represents a script that will be executed during the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," request/response life cycle."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," configuration can be directly bound to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Route"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Script")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," are mutually exclusive, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," is executed first. This means that after configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"Script"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," configured on ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," will not be executed."),(0,a.kt)("p",null,"In theory, you can write arbitrary Lua code in ",(0,a.kt)("inlineCode",{parentName:"p"},"Script"),", or you can directly call existing plugins to reuse existing code."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Script")," also has the concept of execution phase, supporting ",(0,a.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," phase. The system will automatically execute the code of the corresponding phase in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," script in the corresponding phase."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}u.isMDXComponent=!0}}]);