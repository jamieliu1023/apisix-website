"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48610],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(p,i(i({ref:t},m),{},{components:r})):n.createElement(p,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28408:function(e,t,r){r.d(t,{N:function(){return u},Z:function(){return d}});var n=r(63366),a=r(87462),l=r(67294),i=r(86010),o=r(24973),c=r(941),s="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},d=function(e){return"h1"===e?u:(t=e,function(e){var r,a=e.id,u=(0,n.Z)(e,["id"]),d=(0,c.LU)().navbar.hideOnScroll;return a?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(r={},r[m]=d,r[s]=!d,r)),id:a}),u.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},82238:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(87462),a=r(63366),l=r(67294),i=r(99105),o=r(36742),c=r(16213),s=r(28408),m=r(86010),u=r(941),d="details_1VDD";function f(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,n.Z)({},t,{className:(0,m.Z)("alert alert--info",d,t.className)}))}var p={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,r;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(r=e.props)&&r.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,a.Z)(n,["mdxType","originalType"]));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t,r=e.children;return(0,l.isValidElement)(r)&&(0,l.isValidElement)(null==r||null==(t=r.props)?void 0:t.children)?r.props.children:l.createElement(c.Z,(0,l.isValidElement)(r)?null==r?void 0:r.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),r=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((function(e){return e!==r})));return l.createElement(f,(0,n.Z)({},e,{summary:r}),a)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},39827:function(e,t,r){r.d(t,{Z:function(){return I}});var n=r(67294),a=r(86010),l=r(3905),i=r(24973),o=r(36742),c=r(82238),s=r(41217),m="blogPostTitle_nmLu",u="headerDate_67br",d="marginLeft_rCVv",f="blogPostDate_3tMv",p="postHeader_qYPS",h="authorName_3Neb",g="headerTags_2Lqv",v="line_1rJo",b=r(941);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var O=n.createElement("path",{fill:"#fff",fillOpacity:.01,d:"M0 0h48v48H0z"}),k=n.createElement("path",{d:"M42.17 29.245L29.262 42.151a3.6 3.6 0 01-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 010 5.075z",stroke:"#333",strokeWidth:4,strokeLinejoin:"round"}),w=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#333"});var N=function(e){var t=e.title,r=e.titleId,a=y(e,["title","titleId"]);return n.createElement("svg",E({width:16,height:16,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},a),t?n.createElement("title",{id:r},t):null,O,k,w)};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var T=n.createElement("path",{fill:"#fff",fillOpacity:.01,d:"M0 0h48v48H0z"}),P=n.createElement("path",{d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z",stroke:"#333",strokeWidth:4,strokeLinejoin:"round"}),_=n.createElement("path",{d:"M24.008 12v12.009l8.479 8.48",stroke:"#333",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"});var x=function(e){var t=e.title,r=e.titleId,a=Z(e,["title","titleId"]);return n.createElement("svg",j({width:16,height:16,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},a),t?n.createElement("title",{id:r},t):null,T,P,_)};var I=function(e){var t,r,E=(t=(0,b.c2)().selectMessage,function(e){var r=Math.ceil(e);return t(r,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}),y=e.children,O=e.frontMatter,k=e.metadata,w=e.truncated,j=e.isBlogPostPage,Z=void 0!==j&&j,T=k.date,P=k.formattedDate,_=k.permalink,I=k.tags,L=k.readingTime,M=O.author,S=O.title,C=O.image,D=O.keywords,A=O.author_url||O.authorURL;return O.author_title||O.authorTitle,O.author_image_url||O.authorImageURL,n.createElement(n.Fragment,null,n.createElement(s.Z,{keywords:D,image:C}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(r=Z?"h1":"h2",n.createElement("header",null,n.createElement(r,{className:(0,a.Z)("margin-bottom--sm",m)},Z?S:n.createElement(o.Z,{to:_},S)),n.createElement("div",{className:p},n.createElement("div",{className:"avatar margin-bottom--md"},n.createElement("div",{className:"avatar__intro"},M&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},n.createElement(o.Z,{href:A,className:h},"Author: "+M))))),M&&n.createElement("div",{className:"margin-bottom--md "+v},n.createElement("div",null)),n.createElement("div",{className:"margin-bottom--md "+u+" "+(M&&d)},n.createElement(x,null),n.createElement("time",{dateTime:T,className:f},P,L&&n.createElement(n.Fragment,null," \xb7 ",E(L)))),I.length>0&&n.createElement("div",{className:"margin-bottom--md "+v},n.createElement("div",null)),n.createElement("div",{className:"margin-bottom--md"},I.length>0&&n.createElement("div",{className:"col "+g},n.createElement(N,null),I.map((function(e){var t=e.label,r=e.permalink;return n.createElement(o.Z,{key:r,className:"margin-horiz--sm",to:r},t)}))))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},y)),(I.length>0||w)&&n.createElement("footer",{className:"row margin-vert--lg"},w&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:k.permalink,"aria-label":"Read more about "+S},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},88014:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),a=r(86010),l=(r(36742),{sidebar:"sidebar_3-2F",sidebarItemTitle:"sidebarItemTitle_10M-",sidebarItemList:"sidebarItemList_3L1d",sidebarItem:"sidebarItem_3stU",selected:"selected_3rFQ",sidebarItemLinkActive:"sidebarItemLinkActive_1XEC"}),i=r(5977);function o(e){var t=e.count,r=(0,n.useState)(),o=r[0],c=r[1],s=(0,i.k6)(),m=s.location.pathname.split("/");if((0,n.useEffect)((function(){2===m.length?c("All"):4===m.length?-1!==m[3].indexOf("-")?c(m[3].replace(/-/g," ")):c(m[3]):c("All")}),[m]),!t)return null;return n.createElement("div",{className:(0,a.Z)(l.sidebar,"thin-scrollbar")},n.createElement("h3",{className:l.sidebarItemTitle},"Tags"),n.createElement("div",{className:l.sidebarItemList},Object.entries(t).map((function(e){var t=e[0],r=e[1];return n.createElement("div",{key:t,className:l.sidebarItem+" "+(o===t?l.selected:""),onClick:function(){return function(e){"All"===e?s.push("/"+(m[1]||"/")):(-1!==e.indexOf(" ")&&(e=e.replace(/ /g,"-")),s.push("/"+m[1]+"/tags/"+e))}(t)}},n.createElement("div",{className:l.sidebarItemLink},t),n.createElement("p",null,r))}))))}},59551:function(e,t,r){r.r(t);var n=r(67294),a=r(46254),l=r(39827),i=(r(36742),r(88014)),o=(r(24973),r(941));t.default=function(e){var t=e.metadata,r=e.items,c=(e.sidebar,t.allTagsPath,t.name),s=(t.count,(0,n.useState)()),m=s[0],u=s[1];return(0,n.useEffect)((function(){var e=[];r.forEach((function(t){var r=t.content.frontMatter.tags;r&&(e=e.concat(r))}));var t={All:r.length};e.forEach((function(e){t[e]=(t[e]||0)+1})),u(t)}),[]),n.createElement(a.Z,{title:'Posts tagged "'+c+'"',description:'Blog | Tagged "'+c+'"',wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(i.Z,{count:m})),n.createElement("main",{className:"col col--9"},r.map((function(e){var t=e.content;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},n.createElement(t,null))}))))))}}}]);