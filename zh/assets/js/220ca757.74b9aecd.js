"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15759],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,g=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44525:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o={title:"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication",author:"Peter Zhu",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["API gateway","APISIX","Apache APISIX","Okta","Centralized Authentication"],description:"This blog shows the procedures of using Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication.  This blog contains conceptual introductions of Apache APISIX and Okta Centralized Authentication, and detailed step-by-step instructions.",tags:["technology","practical case"]},l=void 0,s={permalink:"/zh/blog/2021/08/16/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication",source:"@site/blog/2021-08-16-Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication.md",title:"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication",description:"This blog shows the procedures of using Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication.  This blog contains conceptual introductions of Apache APISIX and Okta Centralized Authentication, and detailed step-by-step instructions.",date:"2021-08-16T00:00:00.000Z",formattedDate:"2021\u5e748\u670816\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:9.675,truncated:!0,authors:[{name:"Peter Zhu",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528 | \u4e13\u8bbf Airwallex \u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768",permalink:"/zh/blog/2021/08/17/interview-airwallex"},nextItem:{title:"Contributors \u2014 The Golden Metric of OpenSource Projects",permalink:"/zh/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects-en"}},c={authorsImageUrls:[void 0]},p=[{value:"Introducing Apache APISIX",id:"introducing-apache-apisix",children:[]},{value:"Introducing Okta",id:"introducing-okta",children:[]},{value:"What Is Identity Authentication",id:"what-is-identity-authentication",children:[]},{value:"Identity Authentication Modes",id:"identity-authentication-modes",children:[{value:"Traditional Authentication Mode",id:"traditional-authentication-mode",children:[]},{value:"Centralized Identity Authentication Mode",id:"centralized-identity-authentication-mode",children:[]}]},{value:"What is OpenID Connect",id:"what-is-openid-connect",children:[{value:"OpenID Authentication Process",id:"openid-authentication-process",children:[]}]},{value:"How to Configure Okta Authentication Using the Apache APISIX OpenID Connect Plug-in",id:"how-to-configure-okta-authentication-using-the-apache-apisix-openid-connect-plug-in",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Configuring Okta",id:"step-1-configuring-okta",children:[]},{value:"Step 2: Install Apache APISIX",id:"step-2-install-apache-apisix",children:[]},{value:"Step 3: Start Apache APISIX and Configure the Corresponding Route",id:"step-3-start-apache-apisix-and-configure-the-corresponding-route",children:[]},{value:"Step 4: Access Apache APISIX",id:"step-4-access-apache-apisix",children:[]}]},{value:"About Okta",id:"about-okta",children:[]},{value:"About Apache APISIX",id:"about-apache-apisix",children:[]}],d={toc:p};function h(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This blog shows the procedures of using Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication.  This blog contains conceptual introductions of Apache APISIX and Okta Centralized Authentication, and detailed step-by-step instructions.")),(0,r.kt)("h2",{id:"introducing-apache-apisix"},"Introducing Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a dynamic, real-time, high-performance API gateway, providing rich traffic management. The project offers load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and many useful plugins. In addition, the gateway supports dynamic plugin changes along with hot-plugging. The OpenID Connect plugin for Apache APISIX allows users to replace traditional authentication mode with centralized identity authentication mode via OpenID Connect."),(0,r.kt)("h2",{id:"introducing-okta"},"Introducing Okta"),(0,r.kt)("p",null,"Okta is a trusted platform to secure every identity. It is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications. More than 10,650 organizations trust Okta\u2019s software and APIs to sign in, authorize and manage users."),(0,r.kt)("h2",{id:"what-is-identity-authentication"},"What Is Identity Authentication"),(0,r.kt)("p",null,"Identity Authentication verifies a user's identity by specific means. We obtain detailed user metadata from the Identity Provider (IdP) to determine whether a user has access to particular resources."),(0,r.kt)("h2",{id:"identity-authentication-modes"},"Identity Authentication Modes"),(0,r.kt)("p",null,"There are two main categories of identity authentication: ",(0,r.kt)("em",{parentName:"p"},"traditional mode")," and ",(0,r.kt)("em",{parentName:"p"},"centralized mode"),"."),(0,r.kt)("h3",{id:"traditional-authentication-mode"},"Traditional Authentication Mode"),(0,r.kt)("p",null,"In the traditional authentication mode, each application service needs to support authentication separately, such as accessing the login interface when the user is not logged in. The interface returns a 301 jump page. All application services need to develop the logic to maintain the session and interact with the identity provider for authentication."),(0,r.kt)("p",null,"You can see the flow of traditional authentication in the figure below."),(0,r.kt)("p",null,"First, the user initiates a request, then the gateway receives the request and forwards it to the corresponding application services, and finally, the application services interact with the identity provider to complete the authorization."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"traditional authentication work flow",src:n(74937).Z})),(0,r.kt)("h3",{id:"centralized-identity-authentication-mode"},"Centralized Identity Authentication Mode"),(0,r.kt)("p",null,"Unlike traditional authentication, the centralized identity mode removes user authentication from the application services. Take Apache APISIX as an example; you can see the centralized identity authentication process in the figure below."),(0,r.kt)("p",null,"First, the user initiates a request, then the gateway itself takes charge of the user authentication process, interacting with the identity provider and sending them an authorization request. The identity provider returns user identity information (user info). After the gateway identifies the user, it forwards the user identity information (user info) to the services in a request header."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Centralized Identity Authentication work flow",src:n(53726).Z})),(0,r.kt)("p",null,"Compared with the traditional authentication mode, centralized identity mode has the following advantages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Centralized auth simplifies the application development process, and reduces the development application workload and maintenance costs by avoiding the need to repeat the development of authentication code for each application."),(0,r.kt)("li",{parentName:"ol"},"Centralized authentication mode improves business security. At the gateway level, it can intercept unauthenticated requests in time to protect back-end applications.")),(0,r.kt)("h2",{id:"what-is-openid-connect"},"What is OpenID Connect"),(0,r.kt)("p",null,"OpenID Connect (OIDC) is a centralized identity authentication mode. The benefit of using OpenID Connect is that users only need to register and log in with one OpenID Connect identity provider's website and use one account\u2019s password information to access different applications. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.okta.com/"},"Okta")," is a common OpenID Connect identity provider, and the Apache APISIX OpenID Connect plugin supports OpenID.  As a result, the plugin can replace traditional authentication mode with centralized identity authentication.  In this case, we\u2019re using Okta."),(0,r.kt)("h3",{id:"openid-authentication-process"},"OpenID Authentication Process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenID Authentication Process",src:n(6896).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"APISIX initiates an authentication request to the Identity Provider."),(0,r.kt)("li",{parentName:"ol"},"The user logs in and authenticates on the Identity Provider."),(0,r.kt)("li",{parentName:"ol"},"The Identity Provider returns to APISIX with the Authorization Code."),(0,r.kt)("li",{parentName:"ol"},"APISIX requests the Identity Provider with the Code extracted from the request parameters."),(0,r.kt)("li",{parentName:"ol"},"The Identity Provider sends an answer message to APISIX with the ID Token and Access Token."),(0,r.kt)("li",{parentName:"ol"},"APISIX sends the Access Token to the Identity Provider's User Endpoint for authentication."),(0,r.kt)("li",{parentName:"ol"},"After passing the authentication, the User Endpoint sends the User Info to APISIX to complete  authentication.")),(0,r.kt)("h2",{id:"how-to-configure-okta-authentication-using-the-apache-apisix-openid-connect-plug-in"},"How to Configure Okta Authentication Using the Apache APISIX OpenID Connect Plug-in"),(0,r.kt)("p",null,"Configuring Okta authentication using the Apache APISIX OpenID Connect plugin is a simple three-step process that allows you to switch from traditional authentication to centralized identity authentication mode. The following sections describe the steps to configure Okta authentication using the OpenID Connect plug-in for Apache APISIX."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Have an Okta account ready for use."),(0,r.kt)("h3",{id:"step-1-configuring-okta"},"Step 1: Configuring Okta"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Log in to your Okta account and click "Create App Integration" to create an Okta application.\n',(0,r.kt)("img",{alt:"Create App Integration",src:n(17054).Z})),(0,r.kt)("li",{parentName:"ol"},'Select "OIDC-OpenID Connect" for the Sign-in method, and select "Web Application" for the  Application type.\n',(0,r.kt)("img",{alt:"Create a new App Integration",src:n(54109).Z})),(0,r.kt)("li",{parentName:"ol"},'Set the redirect URL for login and logout. The "Sign-in redirect URIs" are links a user can go to after a successful login, and the "Sign-out redirect URIs" are links a user goes to after a successful logout. In this example, we set both sign-in and sign-out redirect URIs to ',(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:9080/"),".\n",(0,r.kt)("img",{alt:"Set the redirect URL for login and logout",src:n(36090).Z})),(0,r.kt)("li",{parentName:"ol"},'After finishing the settings, click "Save" to save the changes.\n',(0,r.kt)("img",{alt:"save the changes",src:n(87033).Z})),(0,r.kt)("li",{parentName:"ol"},"Visit the General page of the application to obtain the following configuration, which is required to configure Apache APISIX OpenID Connect.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client ID: OAuth client ID, the application ID, which corresponds to client_id and {YOUR_CLIENT_ID} below."),(0,r.kt)("li",{parentName:"ul"},"Client secret: OAuth client secret, the application key, which corresponds to client_secret and {YOUR_CLIENT_SECRET} below."),(0,r.kt)("li",{parentName:"ul"},"Okta domain: The domain name used by the application, corresponding to {YOUR_ISSUER} below.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"obtain configuration",src:n(46719).Z})),(0,r.kt)("h3",{id:"step-2-install-apache-apisix"},"Step 2: Install Apache APISIX"),(0,r.kt)("h4",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"The Apache APISIX runtime environment requires dependencies on NGINX and etcd."),(0,r.kt)("p",null,"Before installing Apache APISIX, please install dependencies according to the operating system you are using. We provide the dependencies installation instructions for CentOS7, Fedora 31 and 32, Ubuntu 16.04 and 18.04, Debian 9 and 10, and macOS. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/install-dependencies/"},"Install Dependencies")," for more details."),(0,r.kt)("h4",{id:"installation-via-rpm-package-centos-7"},"Installation via RPM Package (CentOS 7)"),(0,r.kt)("p",null,"This installation method is suitable for CentOS 7; please run the following command to install Apache APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.7/apisix-2.7-0.x86_64.rpm\n")),(0,r.kt)("h4",{id:"installation-via-docker"},"Installation via Docker"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"Installing Apache APISIX with Docker"),"."),(0,r.kt)("h4",{id:"installation-via-helm-chart"},"Installation via Helm Chart"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Installing Apache APISIX with Helm Chart"),"."),(0,r.kt)("h4",{id:"installation-via-source-release"},"Installation via source release"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a directory named ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-2.7"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir apisix-2.7\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download Apache APISIX Release source package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/2.7/apache-apisix-2.7-src.tgz\n")),(0,r.kt)("p",null,"  You can also download the Apache APISIX release source package from the Apache APISIX website. The ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX Official Website - Download Page")," also provides source packages for Apache APISIX, APISIX Dashboard, and APISIX Ingress Controller."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Unzip the Apache APISIX Release source package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-2.7-src.tgz -C apisix-2.7\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Install the runtime-dependent Lua libraries.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Switch to the apisix-2.7 directory\ncd apisix-2.7\n# Create dependencies\nmake deps\n")),(0,r.kt)("h4",{id:"initializing-dependencies"},"Initializing Dependencies"),(0,r.kt)("p",null,"Run the following command to initialize the NGINX configuration file and etcd."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize NGINX config file and etcd\nmake init\n")),(0,r.kt)("h3",{id:"step-3-start-apache-apisix-and-configure-the-corresponding-route"},"Step 3: Start Apache APISIX and Configure the Corresponding Route"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command to start Apache APISIX.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a route and configure the OpenID Connect plugin. The following code example creates a route through the Apache APISIX Admin API, setting the upstream path to httpbin.org, a simple backend service for receiving and responding to requests. The following will use the get page of httpbin.org. Please refer to ",(0,r.kt)("a",{parentName:"li",href:"http://httpbin.org/#/HTTP_Methods/get_get"},"http bin get")," for more information. For specific configuration items, please refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/openid-connect/"},"Apache APISIX OpenID Connect Plugin"),".")),(0,r.kt)("p",null,"The OpenID Connect configuration fields are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"OAuth client ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"OAuth client secret.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"discovery"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Service discovery endpoints for identity providers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,r.kt)("td",{parentName:"tr",align:"left"},"openid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Scope of resources to be accessed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"relm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"apisix"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the WWW-Authenticate response header authentication information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bearer_only"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to check the token in the request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logout_path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/logout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log out URI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"request_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URI that the identity provider redirects back to, defaulting to the request address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Request timeout time, the unit is defined in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Verify the identity provider's SSL certificate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"introspection_endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL of the identity provider's token authentication endpoint, which will be extracted from the discovery, response if left blank.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"introspection_endpoint_auth_method"),(0,r.kt)("td",{parentName:"tr",align:"left"},"client_secret_basic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the authentication method for token introspection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"public_key"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public key for an authentication token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token_signing_alg_values_expected"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Algorithm for authentication tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set_access_token_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to carry the access token in the request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"access_token_in_authorization_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to put an access token in the Authorization header. The access token is placed in the Authorization header when this value is set to true and in the X-Access-Token header when it is set to false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set_id_token_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to carry the ID token in the X-ID-Token request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set_userinfo_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to carry user information in the X-Userinfo request header.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl  -XPOST 127.0.0.1:9080/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d \'{\n    "uri":"/*",\n    "plugins":{\n        "openid-connect":{\n            "client_id":"{YOUR_CLIENT_ID}",\n            "client_secret":"{YOUR_CLIENT_SECRET}",\n            "discovery":"https://{YOUR_ISSUER}/.well-known/openid-configuration",\n            "scope":"openid profile",\n            "bearer_only":false,\n            "realm":"master",\n            "introspection_endpoint_auth_method":"client_secret_post",\n            "redirect_uri":"http://127.0.0.1:9080/"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "httpbin.org:80":1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"step-4-access-apache-apisix"},"Step 4: Access Apache APISIX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Visit "',(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9080/get%22"},'http://127.0.0.1:9080/get"')," and the page is redirected to the Okta login page because the OpenID Connect plugin is enabled.\n",(0,r.kt)("img",{alt:"visit Okta login page",src:n(62887).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Enter the username and password for the user\'s Okta account and click "Sign In" to log in to your Okta account.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'After successful login, you can access the get page in "httpbin.org". The "httpbin.org/get" page will return the requested data with X-Access-Token,X-Id-Token, and X-Userinfo as follows.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"X-Access-Token": "******Y0RPcXRtc0FtWWVuX2JQaFo1ZVBvSlBNdlFHejN1dXY5elV3IiwiYWxnIjoiUlMyNTYifQ.***TVER3QUlPbWZYSVRzWHRxRWh2QUtQMWRzVDVGZHZnZzAiLCJpc3MiOiJodHRwczovL3FxdGVzdG1hbi5va3RhLmNvbSIsImF1ZCI6Imh0dHBzOi8vcXF0ZXN0bWFuLm9rdGEuY29tIiwic3ViIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImlhdCI6MTYyODEyNjIyNSwiZXhwIjoxNjI4MTI5ODI1LCJjaWQiOiIwb2ExMWc4ZDg3TzBGQ0dYZzY5NiIsInVpZCI6IjAwdWEwNWVjZEZmV0tMS3VvNjk1Iiwic2NwIjpbIm9wZW5pZCIsInByb2Zpb***.****iBshIcJhy8QNvzAFD0fV4gh7OAdTXFMu5k0hk0JeIU6Tfg_Mh-josfap38nxRN5hSWAvWSk8VNxokWTf1qlaRbypJrKI4ntadl1PrvG-HgUSFD0JpyqSQcv10TzVeSgBfOVD-czprG2Azhck-SvcjCNDV-qc3P9KoPQz0SRFX0wuAHWUbj1FRBq79YnoJfjkJKUHz3uu7qpTK89mxco8iyuIwB8fAxPMoXjIuU6-6Bw8kfZ4S2FFg3GeFtN-vE9bE5vFbP-JFQuwFLZNgqI0XO2S7l7Moa4mWm51r2fmV7p7rdpoNXYNerXOeZIYysQwe2_L****",\n"X-Id-Token": "******aTdDRDJnczF5RnlXMUtPZUtuSUpQdyIsImFtciI6WyJwd2QiXSwic3ViIjoiMDB1YTA1ZWNkRmZXS0xLdW82OTUiLCJpc3MiOiJodHRwczpcL1wvcXF0ZXN0bWFuLm9rdGEuY29tIiwiYXVkIjoiMG9hMTFnOGQ4N08wRkNHWGc2OTYiLCJuYW1lIjoiUGV0ZXIgWmh1IiwianRpIjoiSUQuNGdvZWo4OGUyX2RuWUI1VmFMeUt2djNTdVJTQWhGNS0tM2l3Z0p5TTcxTSIsInZlciI6MSwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImV4cCI6MTYyODEyOTgyNSwiaWRwIjoiMDBvYTA1OTFndHAzMDhFbm02OTUiLCJub25jZSI6ImY3MjhkZDMxMWRjNGY3MTI4YzlmNjViOGYzYjJkMDgyIiwiaWF0IjoxNjI4MTI2MjI1LCJhdXRoX3RpbWUi*****",\n"X-Userinfo": "*****lfbmFtZSI6IlpodSIsImxvY2FsZSI6ImVuLVVTIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsInVwZGF0ZWRfYXQiOjE2MjgwNzA1ODEsInpvbmVpbmZvIjoiQW1lcmljYVwvTG9zX0FuZ2VsZXMiLCJzdWIiOiIwMHVhMDVlY2RGZldLTEt1bzY5NSIsImdpdmVuX25hbWUiOiJQZXRlciIsIm5hbWUiOiJQZXRl****"\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-Access-Token"),": Apache APISIX puts the access token obtained from the user provider into the X-Access-Token request header, optionally via the access_token_in_authorization_header in the plugin configuration Authorization request header."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"X-Access-Token",src:n(19379).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-Id-Token"),": Apache APISIX will get the Id token from the user provider through the base64 encoding into the X-Id-Token request header, you can choose whether to enable this function through the set_id_token_header in the plugin configuration, the default is enabled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"X-Id-Token",src:n(56561).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-Userinfo"),": Apache APISIX will get the user information from the user provider and put it into X-Userinfo after encoding it with Base64, you can choose whether to enable this feature through set_userinfo_header in the plugin configuration, it is set to be on by default."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"X-Userinfo",src:n(79318).Z})),(0,r.kt)("p",null,"As you can see, Apache APISIX will carry the X-Access-Token, X-Id-Token, and X-Userinfo request headers to the upstream. The upstream can parse these headers to get the user IDid information and user metadata."),(0,r.kt)("p",null,"We have shown the process of building centralized identity authentication from Okta directly into the Apache APISIX Gateway. It is easy to sign up for a free Okta Developer Account to get started. Our approach reduces developer overhead and enables a safe and streamlined experience."),(0,r.kt)("h2",{id:"about-okta"},"About Okta"),(0,r.kt)("p",null,"Okta is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications. Get scalable authentication built right into your application without the development overhead, security risks, and maintenance that come from coding it yourself. You can connect any application in any language or on any stack to Okta and define how you want your users to sign in. Each time a user tries to authenticate, Okta will verify their identity and send the required information back to your app."),(0,r.kt)("h2",{id:"about-apache-apisix"},"About Apache APISIX"),(0,r.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway. Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more. You can use Apache APISIX to handle traditional north-south traffic, as well as east-west traffic between services. It can also be used as a k8s ingress controller."),(0,r.kt)("p",null,"Hundreds of companies worldwide have used Apache APISIX, covering finance, internet, manufacturing, retail, operators, such as NASA, the European Union\u2019s Digital Factory, TravelSky, Tencent, Huawei, Weibo,  China Mobile, Taikang, 360 , etc."),(0,r.kt)("p",null,"Github:  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,r.kt)("p",null,"Website: ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"https://apisix.apache.org")))}h.isMDXComponent=!0},74937:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-1-6b6bfd5a6ac99bafa8ba33555499d2c9.png"},19379:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-10-4cf579f111e40baad9180625798ae68c.png"},56561:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-11-55634bfb527367e0fc0a4882cc9c0a23.png"},79318:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-12-ca8f94d3f7463d7d21eb0c327ff6f782.png"},53726:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-2-b929bda58f8f6facbd5ab27e9d401742.png"},6896:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-3-08fa96f4a7e30f486efde0ddce85f194.png"},17054:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-4-56246ab773e8514b6d7ff6e88a1ba575.png"},54109:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-5-27949e296923f482ca03e52147040e5b.png"},36090:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-6-f282419b7f52ab87487580f15b7789f3.png"},87033:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-7-b7ceb94a0cbdac698adcdd78dd290bbe.png"},46719:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-8-81d934986b33acd9cc80dbb6329c38e3.png"},62887:function(e,t,n){t.Z=n.p+"assets/images/2021-08-16-9-9752a521c7717adfb0fe94f20bb28c8d.png"}}]);