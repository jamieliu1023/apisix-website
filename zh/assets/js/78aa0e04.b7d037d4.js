(self.webpackChunk=self.webpackChunk||[]).push([[52783],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return v}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),v=o,h=u["".concat(c,".").concat(v)]||u[v]||d[v]||i;return t?n.createElement(h,s(s({ref:r},p),{},{components:t})):n.createElement(h,s({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2074:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c},default:function(){return p}});var n=t(22122),o=t(19756),i=(t(67294),t(3905)),s={title:"DNS"},a={unversionedId:"discovery/dns",id:"version-2.8/discovery/dns",isDocsHomePage:!1,title:"DNS",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/discovery/dns.md",sourceDirName:"discovery",slug:"/discovery/dns",permalink:"/zh/docs/apisix/2.8/discovery/dns",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/discovery/dns.md",version:"2.8",frontMatter:{title:"DNS"},sidebar:"version-2.8/docs",previous:{title:"\u96c6\u6210\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh/docs/apisix/2.8/discovery"},next:{title:"consul_kv",permalink:"/zh/docs/apisix/2.8/discovery/consul_kv"}},c=[{value:"service discovery via DNS",id:"service-discovery-via-dns",children:[{value:"SRV record",id:"srv-record",children:[]}]}],l={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service-discovery-via-dns"},"service discovery via DNS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#srv-record"},"SRV record"))))),(0,i.kt)("h2",{id:"service-discovery-via-dns"},"service discovery via DNS"),(0,i.kt)("p",null,"Some service discovery system, like Consul, support exposing service information\nvia DNS. Therefore we can use this way to discover service directly."),(0,i.kt)("p",null,"First of all, we need to configure the address of DNS servers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# add this to config.yaml\ndiscovery:\n   dns:\n     servers:\n       - "127.0.0.1:8600"          # use the real address of your dns server\n')),(0,i.kt)("p",null,"Unlike configuring the domain in the Upstream's ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," field, service discovery via\nDNS will return all records. For example, with upstream configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," be resolved as ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.2"),", this result will be the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "weight": 1},\n        {"host": "1.1.1.2", "weight": 1}\n    ]\n}\n')),(0,i.kt)("p",null,"Note that all the IPs from ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," share the same weight."),(0,i.kt)("p",null,"If a service has both A and AAAA records, A record is preferred."),(0,i.kt)("p",null,"If you want to specify the port for the upstream server, you can add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_name"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service:1980",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"Another way to do it is via the SRV record, see below."),(0,i.kt)("h3",{id:"srv-record"},"SRV record"),(0,i.kt)("p",null,"By using SRV record you can specify the port and the weight of a service."),(0,i.kt)("p",null,"Assumed you have the SRV record like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"; under the section of blah.service\nA       300 IN      A     1.1.1.1\nB       300 IN      A     1.1.1.2\nB       300 IN      A     1.1.1.3\n\n; name  TTL         type    priority    weight  port\nsrv     86400 IN    SRV     10          60      1980 A\nsrv     86400 IN    SRV     20          20      1981 B\n")),(0,i.kt)("p",null,"Upstream configuration like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "srv.blah.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"is the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "port": 1980, "weight": 60, "priority": -10},\n        {"host": "1.1.1.2", "port": 1981, "weight": 10, "priority": -20},\n        {"host": "1.1.1.3", "port": 1981, "weight": 10, "priority": -20}\n    ]\n}\n')),(0,i.kt)("p",null,"Note that two records of domain B split the weight evenly.\nFor SRV record, nodes with lower priority are chosen first, so the final priority is negative."),(0,i.kt)("p",null,"As for 0 weight SRV record, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2782.txt"},"RFC 2782")," says:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Domain administrators SHOULD use Weight 0 when there isn't any server\nselection to do, to make the RR easier to read for humans (less\nnoisy).  In the presence of records containing weights greater\nthan 0, records with weight 0 should have a very small chance of\nbeing selected.")),(0,i.kt)("p",null,'We treat weight 0 record has a weight of 1 so the node "have a very small chance of\nbeing selected", which is also the common way to treat this type of record.'))}p.isMDXComponent=!0}}]);