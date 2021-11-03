"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55067],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a={id:"integrate-with-project-docs",title:"Integrate with Project documentations",keywords:["API gateway","APISIX","Apache APISIX","project documentations"],description:"This article explains Apache APISIX documents' directory structure, the configuration file, and markdown formatting restrictions."},c=void 0,s={unversionedId:"integrate-with-project-docs",id:"integrate-with-project-docs",isDocsHomePage:!1,title:"Integrate with Project documentations",description:"This article explains Apache APISIX documents' directory structure, the configuration file, and markdown formatting restrictions.",source:"@site/docs/general/integrate-with-project-docs.md",sourceDirName:".",slug:"/integrate-with-project-docs",permalink:"/zh/docs/general/integrate-with-project-docs",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/integrate-with-project-docs.md",tags:[],version:"current",lastUpdatedBy:"yilinzeng",lastUpdatedAt:1635930944,formattedLastUpdatedAt:"2021/11/3",frontMatter:{id:"integrate-with-project-docs",title:"Integrate with Project documentations",keywords:["API gateway","APISIX","Apache APISIX","project documentations"],description:"This article explains Apache APISIX documents' directory structure, the configuration file, and markdown formatting restrictions."},sidebar:"docs",previous:{title:"Community",permalink:"/zh/docs/general/community"}},l=[{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Markdown formatting restrictions",id:"markdown-formatting-restrictions",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,i.kt)("p",null,"Put all Markdown files into the latest directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/docs\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u251c\u2500\u2500 xxxxx.png\n\u2502   \u2514\u2500\u2500 other\n\u2502       \u2514\u2500\u2500 xxxxx.xxx\n\u251c\u2500\u2500 en\n\u2502   \u2514\u2500\u2500 latest\n\u2502       \u251c\u2500\u2500 doc1.md\n\u2502       \u251c\u2500\u2500 folder\n\u2502       \u2502   \u2514\u2500\u2500 doc2.md\n\u2502       \u2502       \u2514\u2500\u2500 folder2\n\u2502       \u2502           \u2514\u2500\u2500 doc3.md\n\u2502       \u2514\u2500\u2500 config.json\n\u251c\u2500\u2500 es\n\u2502   \u2514\u2500\u2500 latest\n\u2502       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 zh\n    \u2514\u2500\u2500 latest\n        \u2514\u2500\u2500 ...\n")),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"This file is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/<locale>/latest/config.json"),", where locale is locale codes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.science.co.il/language/Locale-codes.php"},"https://www.science.co.il/language/Locale-codes.php"),", locale is all lowercase. Don't forget to remove the comment after copying JSON."),(0,i.kt)("p",null,"More information about sidebar can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/next/sidebar"},"https://v2.docusaurus.io/docs/next/sidebar")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "version": 2.3,\n  "sidebar": [\n    // The left sidebar of the APISIX website\n    {\n      "type": "doc",\n      "id": "doc2" // id is the filename of the md file\n    },\n    {\n      "type": "category", // category is a collapsed column, nestable\n      "label": "folder",\n      "items": [\n        {\n          "type": "doc",\n          "id": "folder/doc2"\n        },\n        {\n          "type": "category",\n          "label": "folder2",\n          "items": [\n            "folder2/doc3"\n          ]\n        }\n      ]\n    },\n    {\n      "type": "link",\n      "label": "CHANGELOG",\n      "href": "https://github.com/apache/apisix/blob/master/CHANGELOG"\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"markdown-formatting-restrictions"},"Markdown formatting restrictions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use relative paths within Markdown files ",(0,i.kt)("inlineCode",{parentName:"p"},"../xxx/xxx"),", not absolute paths ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/en/xxx/xxx"),". If you want to refer to files outside the docs directory, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/apache/apisix-xxx/blob/master/xxx/xxx.xxx"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You need to use Markdown syntax when introducing images, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"![image name](./assets/xxxx.png)"),". Images cannot be introduced using HTML tags, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},'<img src=". /assets/xxxx.png" />'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the Markdown file contains HTML tags within it, be sure to make sure the tags are closed. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"<br>")," must be written as ",(0,i.kt)("inlineCode",{parentName:"p"},"<br/>")))))}d.isMDXComponent=!0}}]);