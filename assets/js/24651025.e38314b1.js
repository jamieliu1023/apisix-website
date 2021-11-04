"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61991],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l={title:"How to build Apache APISIX"},o=void 0,s={unversionedId:"how-to-build",id:"version-2.6/how-to-build",isDocsHomePage:!1,title:"How to build Apache APISIX",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/docs/apisix/2.6/how-to-build",editUrl:"https://github.com/apache/apisix/edit/release/2.6/docs/en/latest/how-to-build.md",tags:[],version:"2.6",frontMatter:{title:"How to build Apache APISIX"},sidebar:"version-2.6/docs",previous:{title:"Getting Started",permalink:"/docs/apisix/2.6/getting-started"},next:{title:"batch-requests",permalink:"/docs/apisix/2.6/plugins/batch-requests"}},p=[{value:"1. Install dependencies",id:"1-install-dependencies",children:[]},{value:"2. Install Apache APISIX",id:"2-install-apache-apisix",children:[{value:"Installation via RPM package (CentOS 7)",id:"installation-via-rpm-package-centos-7",children:[]},{value:"Installation via Docker",id:"installation-via-docker",children:[]},{value:"Installation via Helm Chart",id:"installation-via-helm-chart",children:[]},{value:"Installation via source release",id:"installation-via-source-release",children:[]}]},{value:"3. Manage (start/stop) APISIX Server",id:"3-manage-startstop-apisix-server",children:[]},{value:"4. Test",id:"4-test",children:[{value:"Troubleshoot Testing",id:"troubleshoot-testing",children:[]}]},{value:"5. Update Admin API token to protect Apache APISIX",id:"5-update-admin-api-token-to-protect-apache-apisix",children:[]},{value:"6. Build OpenResty for APISIX",id:"6-build-openresty-for-apisix",children:[]},{value:"7. Add systemd unit file for APISIX",id:"7-add-systemd-unit-file-for-apisix",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-install-dependencies"},"1. Install dependencies"),(0,r.kt)("p",null,"The runtime environment for Apache APISIX requires Nginx and etcd."),(0,r.kt)("p",null,"So before installation, please follow the different operating systems ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.6/install-dependencies"},"install Dependencies"),"."),(0,r.kt)("h2",{id:"2-install-apache-apisix"},"2. Install Apache APISIX"),(0,r.kt)("p",null,"You can install Apache APISIX in a variety of ways, including source code packages, Docker, and Luarocks."),(0,r.kt)("h3",{id:"installation-via-rpm-package-centos-7"},"Installation via RPM package (CentOS 7)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.6/apisix-2.6-0.x86_64.rpm\n")),(0,r.kt)("h3",{id:"installation-via-docker"},"Installation via Docker"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"https://hub.docker.com/r/apache/apisix")),(0,r.kt)("h3",{id:"installation-via-helm-chart"},"Installation via Helm Chart"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart")),(0,r.kt)("h3",{id:"installation-via-source-release"},"Installation via source release"),(0,r.kt)("p",null,"You need to download the Apache source release first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir apisix-2.6\n$ wget https://downloads.apache.org/apisix/2.6/apache-apisix-2.6-src.tgz\n$ tar zxvf apache-apisix-2.6-src.tgz -C apisix-2.6\n")),(0,r.kt)("p",null,"Install the Lua libraries that the runtime depends on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd apisix-2.6\nmake deps\n")),(0,r.kt)("h2",{id:"3-manage-startstop-apisix-server"},"3. Manage (start/stop) APISIX Server"),(0,r.kt)("p",null,"We can start the APISIX server by command ",(0,r.kt)("inlineCode",{parentName:"p"},"make run")," in APISIX home folder,\nor we can stop APISIX server by command ",(0,r.kt)("inlineCode",{parentName:"p"},"make stop"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# init nginx config file and etcd\n$ make init\n\n# start APISIX server\n$ make run\n\n# stop APISIX server\n$ make stop\n\n# more actions find by `help`\n$ make help\nMakefile rules:\n\n    help:             Show Makefile rules\n    deps:             Installation dependencies\n    utils:            Installation tools\n    lint:             Lint Lua source code\n    init:             Initialize the runtime environment\n    run:              Start the apisix server\n    stop:             Stop the apisix server\n    verify:           Verify the configuration of apisix server\n    clean:            Remove generated files\n    reload:           Reload the apisix server\n    install:          Install the apisix (only for luarocks)\n    test:             Run the test case\n    license-check:    Check Lua source code for Apache License\n")),(0,r.kt)("p",null,"Environment variable can be used to configure APISIX. Please take a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," to\nsee how to do it."),(0,r.kt)("h2",{id:"4-test"},"4. Test"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install perl's package manager ",(0,r.kt)("inlineCode",{parentName:"li"},"cpanminus")," first"),(0,r.kt)("li",{parentName:"ol"},"Then install ",(0,r.kt)("inlineCode",{parentName:"li"},"test-nginx"),"'s dependencies via ",(0,r.kt)("inlineCode",{parentName:"li"},"cpanm"),":\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)")),(0,r.kt)("li",{parentName:"ol"},"Clone source code\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/iresty/test-nginx.git"),". Note that we should use our fork."),(0,r.kt)("li",{parentName:"ol"},"Load the ",(0,r.kt)("inlineCode",{parentName:"li"},"test-nginx")," library with perl's ",(0,r.kt)("inlineCode",{parentName:"li"},"prove")," command and run the test cases in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/t")," directory:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set PERL5LIB for perl module: ",(0,r.kt)("inlineCode",{parentName:"li"},"export PERL5LIB=.:$PERL5LIB")),(0,r.kt)("li",{parentName:"ul"},"Run the test cases: ",(0,r.kt)("inlineCode",{parentName:"li"},"make test")),(0,r.kt)("li",{parentName:"ul"},"To set the path of nginx to run the test cases: ",(0,r.kt)("inlineCode",{parentName:"li"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t")),(0,r.kt)("li",{parentName:"ul"},"Some tests depend on external services and modified system configuration. If you want to setup a local CI environment,\nyou can refer to ",(0,r.kt)("inlineCode",{parentName:"li"},"ci/linux_openresty_common_runner.sh"),".")))),(0,r.kt)("h3",{id:"troubleshoot-testing"},"Troubleshoot Testing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set Nginx Path")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you run in to an issue ",(0,r.kt)("inlineCode",{parentName:"li"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf'),"\nmake sure to set openresty as default nginx. And export the path as below.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux default installation path:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH"))),(0,r.kt)("li",{parentName:"ul"},"OSx default installation path via homebrew:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run Individual Test Cases")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the following command to run test cases constrained to a file:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t")))),(0,r.kt)("h2",{id:"5-update-admin-api-token-to-protect-apache-apisix"},"5. Update Admin API token to protect Apache APISIX"),(0,r.kt)("p",null,"Changes the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," and restart the service.\nHere is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  # ... ...\n  admin_key\n    -\n      name: "admin"\n      key: abcdefghabcdefgh\n      role: admin\n')),(0,r.kt)("p",null,"When calling the Admin API, ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," can be used as a token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh -i\nHTTP/1.1 200 OK\nDate: Fri, 28 Feb 2020 07:48:04 GMT\nContent-Type: text/plain\n... ...\n{"node":{...},"action":"get"}\n\n$ curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh-invalid -i\nHTTP/1.1 401 Unauthorized\nDate: Fri, 28 Feb 2020 08:17:58 GMT\nContent-Type: text/html\n... ...\n{"node":{...},"action":"get"}\n')),(0,r.kt)("h2",{id:"6-build-openresty-for-apisix"},"6. Build OpenResty for APISIX"),(0,r.kt)("p",null,"Some features require you to build OpenResty with extra Nginx modules.\nIf you need those features, you can build OpenResty with\n",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/api7/apisix-build-tools/master/build-apisix-openresty.sh"},"this build script"),"."),(0,r.kt)("h2",{id:"7-add-systemd-unit-file-for-apisix"},"7. Add systemd unit file for APISIX"),(0,r.kt)("p",null,"If you install APISIX with rpm package, the unit file is installed automatically, and you could directly do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ systemctl start apisix\n$ systemctl stop apisix\n$ systemctl enable apisix\n")),(0,r.kt)("p",null,"If installed in other methods, you could refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools/blob/master/usr/lib/systemd/system/apisix.service"},"the unit file template"),", modify if needed, and place it as ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/apisix.service"),"."))}u.isMDXComponent=!0}}]);