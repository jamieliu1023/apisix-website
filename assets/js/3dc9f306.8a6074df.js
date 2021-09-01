(self.webpackChunk=self.webpackChunk||[]).push([[38393],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return l},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(o),d=r,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return o?n.createElement(h,i(i({ref:t},l),{},{components:o})):n.createElement(h,i({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},59259:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),i={id:"2fa",title:"Two Factor Authentication",keywords:["API gateway","APISIX","Apache APISIX","two factor authentication"],description:"This article provides information of how to enable Two-factor authentication(2FA) on GitHub. It consists of 3 parts, what is Two-factor authentication(2FA), how to enable 2FA on GitHub, and how to submit codes."},c={unversionedId:"2fa",id:"2fa",isDocsHomePage:!1,title:"Two Factor Authentication",description:"This article provides information of how to enable Two-factor authentication(2FA) on GitHub. It consists of 3 parts, what is Two-factor authentication(2FA), how to enable 2FA on GitHub, and how to submit codes.",source:"@site/docs/general/2fa.md",sourceDirName:".",slug:"/2fa",permalink:"/docs/general/2fa",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/2fa.md",version:"current",lastUpdatedBy:"liuxiran",lastUpdatedAt:1630508327,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"2fa",title:"Two Factor Authentication",keywords:["API gateway","APISIX","Apache APISIX","two factor authentication"],description:"This article provides information of how to enable Two-factor authentication(2FA) on GitHub. It consists of 3 parts, what is Two-factor authentication(2FA), how to enable 2FA on GitHub, and how to submit codes."},sidebar:"docs",previous:{title:"Committer Guide",permalink:"/docs/general/committer-guide"},next:{title:"Release Guide",permalink:"/docs/general/release-guide"}},u=[{value:"Two-factor authentication(2FA)",id:"two-factor-authentication2fa",children:[]},{value:"Enable 2FA on GitHub",id:"enable-2fa-on-github",children:[]},{value:"How to Submit Codes",id:"how-to-submit-codes",children:[]}],s={toc:u};function l(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"two-factor-authentication2fa"},"Two-factor authentication(2FA)"),(0,a.kt)("p",null,"Two factor authentication (2FA) refers to the authentication method that combines both passport and an object (credit card, SMS phone, token or biomarkers as fingerprint) to identify a user. To ensure the security of the committer\u2019s account, we need you to enable 2FA to sign in and contribute codes on GitHub. More details, please refer to 2FA."),(0,a.kt)("p",null,"Note:If you do not enable 2FA, you will be removed from the project and unable to access our repositories and the fork from our private repository."),(0,a.kt)("h2",{id:"enable-2fa-on-github"},"Enable 2FA on GitHub"),(0,a.kt)("p",null,"For detailed operations, please refer to Enable Two Factor Authentication with TOTP."),(0,a.kt)("p",null,"After enabling 2FA, you need to sign in GitHub with the way of username/password + mobile phone authentication code."),(0,a.kt)("p",null,"Tips: If you cannot download the APP through the page link, you can search and download the Google Authenticator in APP Store."),(0,a.kt)("h2",{id:"how-to-submit-codes"},"How to Submit Codes"),(0,a.kt)("p",null,"After enabling 2FA, you need to generate a private access Token to perform operations such as git submit and so on. At this time, you will use username + private access Token in replace of username + password to submit codes."),(0,a.kt)("p",null,"For detailed operations, please refer to Create a Private Token."))}l.isMDXComponent=!0}}]);