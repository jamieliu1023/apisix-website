"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36790],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"Get Front-End Test Coverage with Cypress",author:"Yi Sun",authorURL:"https://github.com/LiteSun",authorImageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4",tags:["technology"]},c=void 0,s={permalink:"/zh/blog/2021/03/02/get-front-end-test-coverage-with-cypress",source:"@site/blog/2021-03-02-get-front-end-test-coverage-with-cypress.md",title:"Get Front-End Test Coverage with Cypress",description:'In the article "Stable Product Delivery with Cypress", we discussed why we chose Cypress as our E2E testing framework. After spending nearly two months refining the test cases, we needed test coverage to quantify whether the test coverage was sufficient.This article will describe how to get APISIX Dashboard front-end E2E coverage using Cypress.',date:"2021-03-02T00:00:00.000Z",formattedDate:"2021\u5e743\u67082\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:2.165,truncated:!0,authors:[{name:"Yi Sun",url:"https://github.com/LiteSun",imageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4"}],prevItem:{title:"Traffic Split in Apache APISIX Ingress Controller",permalink:"/zh/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller"},nextItem:{title:"Install Apache APISIX from Helm Charts",permalink:"/zh/blog/2021/02/26/install-apache-apisix-from-helm-charts"}},l={authorsImageUrls:[void 0]},p=[{value:"What is code coverage?",id:"what-is-code-coverage",children:[]},{value:"Installation Dependencies &amp; Configuration",id:"installation-dependencies--configuration",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the article ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/02/08/stable-product-delivery-with-cypress"},'"Stable Product Delivery with Cypress"'),", we discussed why we chose Cypress as our E2E testing framework. After spending nearly two months refining the test cases, we needed test coverage to quantify whether the test coverage was sufficient.This article will describe how to get APISIX Dashboard front-end E2E coverage using Cypress.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard"},"https://github.com/apache/apisix-dashboard")))),(0,o.kt)("h2",{id:"what-is-code-coverage"},"What is code coverage?"),(0,o.kt)("p",null,"Code coverage is a metric in software testing that describes the proportion and extent to which the source code in a program is tested, and the resulting proportion is called code coverage. Test code coverage reflects the health of the code to a certain extent."),(0,o.kt)("h2",{id:"installation-dependencies--configuration"},"Installation Dependencies & Configuration"),(0,o.kt)("p",null,"To collect test coverage data, we need to put some probes in the original business code for Cypress to collect the data."),(0,o.kt)("p",null,"Cypress officially recommends two approaches, the first is to generate a temporary directory via ",(0,o.kt)("inlineCode",{parentName:"p"},"nyc")," and run the code that has been written to the probe to collect test coverage data. The second way is to do the code conversion in real time through the code conversion pipeline, which eliminates the hassle of temporary folders and makes collecting test coverage data relatively refreshing. We choose the second way to collect front-end E2E coverage."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Installing Dependencies")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add  babel-plugin-istanbul --dev\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the cypress plug-in")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add  @cypress/code-coverage --dev\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Configuring babel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// web/config/config.ts\nextraBabelPlugins: [\n    [\'babel-plugin-istanbul\',  {\n      "exclude": ["**/.umi", "**/locales"]\n    }],\n  ],\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Configuring Cypress code coverage plugin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javaScript"},"// web/cypress/plugins/index.js\nmodule.exports = (on, config) => {\n  require('@cypress/code-coverage/task')(on, config);\n  return config;\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javaScript"},"// web/cypress/support/index.js\nimport '@cypress/code-coverage/support';\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Get Test Coverage")),(0,o.kt)("p",null,"After the configuration is done, we need to run the test case. After the test case is run, Cypress will generate ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".nyc_output")," folders, which contain the test coverage reports."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/o-tyQagmCjprpNkuTjMFLaALZKtW4pyC9nj-GcPx4MM3xK0zrMED9Nndk5ZmZkZsQ5SIJPEovcrHyjWP2YXtEcYYDpLL49aV_97N83doTkOuMXlFsVjGu53A9FdlxOCr6i3aIDTA",alt:"1.png"})),(0,o.kt)("p",null,"The test coverage information will appear in the console after executing the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx nyc report --reporter=text-summary\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/n0CON1WF64wEnh3IYEc3wwwOJ2Ft_WmMLfkhOPKIKxoW0NP6Eq8VplJ87EepL5zIWOeyfJhlDmhc3ImE0ivgRlXWe1RuW2x7vL_JEri7Mz6b3tOY0it8bVvUe83CAHNgeoyXZnsy",alt:"2.png"})),(0,o.kt)("p",null,"Under the coverage directory, a more detailed report page will be available, as shown here."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/skjR9YUcbmeytfoYnR0it7Vfc7mheCJDt7PSUsp549IbOdfqskTrIOqUXw01e0fnuNwpGoo3GtqAER3eQjNoTIdmU7HY6hc_sZ5NYc3h-MyxqmVz_NaC3AM-J4rWJFy-9IoTWjpn",alt:"3.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Statements indicates whether each statement was executed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Branches indicates whether each if block was executed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Functions indicates whether each function is called")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lines indicates whether each line was executed"))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The test coverage rate reflects the quality of the project to a certain extent. At present, APISIX Dashboard front-end E2E coverage rate has reached 71.57%. We will continue to work with the community to enhance the test coverage rate and provide more reliable and stable products for users."))}h.isMDXComponent=!0}}]);