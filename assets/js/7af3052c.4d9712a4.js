"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25032],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(t),u=i,g=h["".concat(l,".").concat(u)]||h[u]||c[u]||r;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},38624:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),s={id:"release-guide",title:"Release Guide",keywords:["API gateway","APISIX","Apache APISIX","Release Guide"],description:"This article explains Apache APISIX's release flow and GPG Settings."},o=void 0,l={unversionedId:"release-guide",id:"release-guide",isDocsHomePage:!1,title:"Release Guide",description:"This article explains Apache APISIX's release flow and GPG Settings.",source:"@site/docs/general/release-guide.md",sourceDirName:".",slug:"/release-guide",permalink:"/docs/general/release-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/release-guide.md",tags:[],version:"current",lastUpdatedBy:"yilinzeng",lastUpdatedAt:1635495826,formattedLastUpdatedAt:"10/29/2021",frontMatter:{id:"release-guide",title:"Release Guide",keywords:["API gateway","APISIX","Apache APISIX","Release Guide"],description:"This article explains Apache APISIX's release flow and GPG Settings."},sidebar:"docs",previous:{title:"Committer Guide",permalink:"/docs/general/committer-guide"},next:{title:"Community",permalink:"/docs/general/community"}},p=[{value:"Release Flow",id:"release-flow",children:[{value:"Planning Phase",id:"planning-phase",children:[]},{value:"Development Phase",id:"development-phase",children:[]},{value:"Release Phase",id:"release-phase",children:[]},{value:"Maintenance Phase",id:"maintenance-phase",children:[]}]},{value:"GPG Settings",id:"gpg-settings",children:[{value:"Install GPG",id:"install-gpg",children:[]},{value:"Create Key",id:"create-key",children:[]},{value:"View the generated key:",id:"view-the-generated-key",children:[]},{value:"Synchronizing the public key to the server",id:"synchronizing-the-public-key-to-the-server",children:[]},{value:"Add <code>Key Fingerprint</code> to id.apache.org",id:"add-key-fingerprint-to-idapacheorg",children:[]},{value:"Login id.apache.org and submit Key Fingerprint",id:"login-idapacheorg-and-submit-key-fingerprint",children:[]},{value:"Add your GPG key to Apache svn",id:"add-your-gpg-key-to-apache-svn",children:[]},{value:"Make source code package and upload to Apache SVN",id:"make-source-code-package-and-upload-to-apache-svn",children:[]},{value:"Send VOTE thread to the dev mailing list",id:"send-vote-thread-to-the-dev-mailing-list",children:[]},{value:"Send VOTE RESULT thread to the dev mailing list",id:"send-vote-result-thread-to-the-dev-mailing-list",children:[]},{value:"Move package from dev to dist",id:"move-package-from-dev-to-dist",children:[]},{value:"Update Download page",id:"update-download-page",children:[]},{value:"Send ANNOUNCE",id:"send-announce",children:[]}]}],d={toc:p};function c(e){var a=e.components,s=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"release-flow"},"Release Flow"),(0,r.kt)("p",null,"The release flow of Apache APISIX follows ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html"},"GitLab flow"),", instead of Git flow or Github flow. Furthermore, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#release-branches-with-gitlab-flow"},"Release branches with GitLab flow")," is the preferred way. The chart below will take the release ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.3")," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"apache/apisix-dashboard")," as an example to illustrate the details."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Release Flow",src:t(34853).Z})),(0,r.kt)("p",null,"The entire flow is comprised of the following four phases."),(0,r.kt)("h3",{id:"planning-phase"},"Planning Phase"),(0,r.kt)("p",null,"This phase will decide if a feature is ready to be released as well as the release time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new target milestone will be created in Github. (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/milestone/6"},(0,r.kt)("inlineCode",{parentName:"a"},"2.3")),")."),(0,r.kt)("li",{parentName:"ul"},"A discussion will be started on dev mailing list ",(0,r.kt)("a",{parentName:"li",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org")," for gathering ideas for the next release."),(0,r.kt)("li",{parentName:"ul"},"Maintainer team will then mark the issues and pull requests with the target milestone.")),(0,r.kt)("h3",{id:"development-phase"},"Development Phase"),(0,r.kt)("p",null,"This phase is for developing new features and fixing bugs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maintainer team and contributors will work on the issues targeted to release milestone."),(0,r.kt)("li",{parentName:"ul"},"Every single new issue is required to be recognized if it should be included in the next release. If yes, the milestone needs to be set for the issue.")),(0,r.kt)("h3",{id:"release-phase"},"Release Phase"),(0,r.kt)("p",null,"This phase will be throughout the entire Release Time Window."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new branch (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/tree/v2.3"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.3")),") for release is created from the ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch, which is also considered as the start of the Release Time Window."),(0,r.kt)("li",{parentName:"ul"},"Set corresponding configurations for the new release branch, please see the chart above for details."),(0,r.kt)("li",{parentName:"ul"},"As complying with ",(0,r.kt)("strong",{parentName:"li"},"Upstream first"),", each commit needs to be merged into the ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch first. Afterward, it will be backported to the new release branch if the relevant pull request is with the ",(0,r.kt)("inlineCode",{parentName:"li"},"need backport")," label attached."),(0,r.kt)("li",{parentName:"ul"},"At the end of the Release Time Window, the ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG")," for the new release will be added."),(0,r.kt)("li",{parentName:"ul"},"Tag the last commit and release the assets via the following section ",(0,r.kt)("a",{parentName:"li",href:"#gpg-settings"},"GPG Settings"),".")),(0,r.kt)("h3",{id:"maintenance-phase"},"Maintenance Phase"),(0,r.kt)("p",null,"Once a version is released, it will enter the maintenance mode and will only accept the security and critical bug patches backported from the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. A new version will be released soon after significant bugs got fixed, with patch version increment (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"2.3.1"),"). In this case, all users are recommended to upgrade to the latest release to avoid potential risk to the stability."),(0,r.kt)("h2",{id:"gpg-settings"},"GPG Settings"),(0,r.kt)("h3",{id:"install-gpg"},"Install GPG"),(0,r.kt)("p",null,"Download GnuPG from ",(0,r.kt)("a",{parentName:"p",href:"https://gnupg.org/download/index.html"},"https://gnupg.org/download/index.html"),". There are differences between the 1.x and 2.x versions of the GnuPG commands, and the following descriptions are based on the GnuPG 2.x versions."),(0,r.kt)("p",null,"After the installation is complete, execute the following command to check the version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gpg --version\n")),(0,r.kt)("h3",{id:"create-key"},"Create Key"),(0,r.kt)("p",null,"Execute the following command to create the key:"),(0,r.kt)("h4",{id:"gnupg-2x\uff1a"},"GnuPG-2.x\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gpg --full-gen-key\n")),(0,r.kt)("h4",{id:"gnupg-1x\uff1a"},"GnuPG-1.x\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg --gen-key\n")),(0,r.kt)("p",null,"Follow the instructions to generate key\uff1a"),(0,r.kt)("p",null,"Note: Please use the Apache email address to generate the GPG Key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'gpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n(1) RSA and RSA (default)\n(2) DSA and Elgamal\n(3) DSA (sign only)\n(4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n0 = key does not expire\n<n> = key expires in n days\n<n>w = key expires in n weeks\n<n>m = key expires in n months\n<n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: ${Enter your username}\nEmail address: ${Enter your email address}\nComment: ${Enter comments}\nYou selected this USER-ID:\n  "${Entered username} (${Entered comments}) &lt;${Entered email address}>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. # Enter passphrase\n')),(0,r.kt)("h3",{id:"view-the-generated-key"},"View the generated key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg --list-keys\n")),(0,r.kt)("p",null,"The example result\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gpg --list-keys\n\n/home/resty/.gnupg/pubring.gpg\n------------------------------\npub 4096R/30B5FD72 2020-01-02\nuid Yuansheng Wang <membphis@apache.org>\nsub 4096R/3D2F913D 2020-01-02\n")),(0,r.kt)("p",null,"And ",(0,r.kt)("inlineCode",{parentName:"p"},"30B5FD72")," is the ID of pub key"),(0,r.kt)("h3",{id:"synchronizing-the-public-key-to-the-server"},"Synchronizing the public key to the server"),(0,r.kt)("p",null,"The steps are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# The last parameter is the public key ID generated above\n$ gpg --keyserver hkp://pool.sks-keyservers.net --send-key 30B5FD72\n\ngpg: sending key 30B5FD72 to hkp server pool.sks-keyservers.net\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pool.sks-keyservers.net")," is one of the pub key servers, the pub key will be automatically synchronized between each server, just choose anyone."),(0,r.kt)("h3",{id:"add-key-fingerprint-to-idapacheorg"},"Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"Key Fingerprint")," to id.apache.org"),(0,r.kt)("p",null,"get Key Fingerprint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Note the `Key fingerprint` section below.\n$ gpg --list-keys --fingerprint\n\n/home/resty/.gnupg/pubring.gpg\n------------------------------\npub 4096R/30B5FD72 2020-01-02\nKey fingerprint = 0F91 BE0A 55A7 B22F DE1A CEEC 3352 48FD 30B5 FD72\nuid Yuansheng Wang <membphis@apache.org>\nsub 4096R/3D2F913D 2020-01-02\n")),(0,r.kt)("h3",{id:"login-idapacheorg-and-submit-key-fingerprint"},"Login id.apache.org and submit Key Fingerprint"),(0,r.kt)("h3",{id:"add-your-gpg-key-to-apache-svn"},"Add your GPG key to Apache svn"),(0,r.kt)("p",null,"download APISIX svn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ svn --username=${Apache username} co https://dist.apache.org/repos/dist/dev/apisix\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix\n\n$ ls\n\nKEYS\n")),(0,r.kt)("p",null,"Export the public key and append it to the KEYS file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gpg -a --export ${GPG username} >> KEYS\n")),(0,r.kt)("p",null,"Commit the modified KEYS file, saving the public key to the svn server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ svn --username=${Apache username} commit -m \"added \\${Apache email} gpg pub key\"\nAuthentication realm: <https://dist.apache.org:443> ASF Committers\nPassword for 'membphis': # input password\nStore password unencrypted (yes/no)? yes\nSending KEYS\nTransmitting file data.\nCommitted revision 37434.\n")),(0,r.kt)("h3",{id:"make-source-code-package-and-upload-to-apache-svn"},"Make source code package and upload to Apache SVN"),(0,r.kt)("p",null,"Here's an example of preparing a 1.0 version. Before you make the package, make sure you have branch v1.0 ready on GitHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Create a new version number directory and enter, for example: 1.0\n$ export APISIX_VERSION=1.0\n$ mkdir $APISIX_VERSION && cd $APISIX_VERSION\n\n# download repo\ngit clone -b v$APISIX_VERSION git@github.com:apache/apisix.git apache-apisix-$APISIX_VERSION\n\n# check version\n$ cd apache-apisix-$APISIX_VERSION && ./utils/check-version.sh $APISIX_VERSION && cd ..\n\n# make tar package / asc / sha512\n$ cd apache-apisix-$APISIX_VERSION && make release-src VERSION=$APISIX_VERSION\n$ mv ./release/* ../ && cd ..\n\n# remove apache-apisix-1.0\n$ rm -rf apache-apisix-$APISIX_VERSION\n\n# check files\n$ cd .. && tree\n.\n\u251c\u2500\u2500 1.0\n\u2502   \u251c\u2500\u2500 apache-apisix-1.0-src.tar.gz\n\u2502   \u251c\u2500\u2500 apache-apisix-1.0-src.tar.gz.asc\n\u2502   \u2514\u2500\u2500 apache-apisix-1.0-src.tar.gz.sha512\n\u2514\u2500\u2500 KEYS\n\n1 directory, 4 files\n\n# add files to SVN\n$ svn add *\nA         1.0\nA  (bin)  1.0/apache-apisix-1.0-src.tar.gz.asc\nA  (bin)  1.0/apache-apisix-1.0-src.tar.gz\nA         1.0/apache-apisix-1.0-src.tar.gz.sha512\nsvn: warning: W150002: '/home/resty/git/apache_svn/apisix/KEYS' is already under version control\nsvn: E200009: Could not add all targets because some targets are already versioned\nsvn: E200009: Illegal target for the requested operation\n\n# commit to Apache SVN\n$ svn --username=${Apache username} commit -m \"release 1.0\"\nAdding         1.0\nAdding  (bin)  1.0/apache-apisix-1.0-src.tar.gz\nAdding  (bin)  1.0/apache-apisix-1.0-src.tar.gz.asc\nAdding         1.0/apache-apisix-1.0-src.tar.gz.sha512\nTransmitting file data ...\nCommitted revision 37435.\n")),(0,r.kt)("h3",{id:"send-vote-thread-to-the-dev-mailing-list"},"Send VOTE thread to the dev mailing list"),(0,r.kt)("p",null,"There is a minimum wait of 72 hours before statistical voting results. If you get -1 vote, you need to solve the problem before you can continue. An email example is as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello, Community,\nThis is a call for the vote to release Apache APISIX version 2.0.\n\nRelease notes:\n\nhttps://github.com/apache/apisix/blob/2.4/CHANGELOG.md#240\n\nThe release candidates:\n\nhttps://dist.apache.org/repos/dist/dev/apisix/2.4/\n\nGit tag for the release:\n\nhttps://github.com/apache/apisix/tree/2.4\n\nRelease Commit ID:\n\nhttps://github.com/apache/apisix/commit/b94d3fc3b298df593ba6fe5c7b285768b567991e\n\nKeys to verify the Release Candidate:\n\nhttps://dist.apache.org/repos/dist/dev/apisix/KEYS\n\nSteps to validating the release:\n\n1. Download the release\n\nwget https://dist.apache.org/repos/dist/dev/apisix/2.4/apache-apisix-2.4-src.tgz\n\n\n2. Checksums and signatures\n\nwget https://dist.apache.org/repos/dist/dev/apisix/KEYS\n\nwget https://dist.apache.org/repos/dist/dev/apisix/2.4/apache-apisix-2.4-src.tgz.asc\n\nwget https://dist.apache.org/repos/dist/dev/apisix/2.4/apache-apisix-2.4-src.tgz.sha512\n\ngpg --import KEYS\n\nshasum -c apache-apisix-2.4-src.tgz.sha512\n\ngpg --verify apache-apisix-2.4-src.tgz.asc apache-apisix-2.4-src.tgz\n\n3. Unzip and Check files\n\ntar zxvf apache-apisix-2.4-src.tgz\n\n4. Build Apache APISIX:\n\nhttps://github.com/apache/apisix/blob/release/2.4/docs/en/latest/how-to-build.md#installation-via-source-release\n\nThe vote will be open for at least 72 hours or until necessary number of\nvotes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n")),(0,r.kt)("h3",{id:"send-vote-result-thread-to-the-dev-mailing-list"},"Send VOTE RESULT thread to the dev mailing list"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread.html/r9153da737a4590dbbba7272acc004cf4bc7abefa488069810d790643%40%3Cdev.apisix.apache.org%3E"},"here")," to view the reference email at least 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"+1")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/voting.html#binding-votes"},"binding votes")," is required, then send the vote result to ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org"),"."),(0,r.kt)("h3",{id:"move-package-from-dev-to-dist"},"Move package from dev to dist"),(0,r.kt)("p",null,"Invite ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/team/"},"PMCs")," to move KEYS and package under the ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/apisix/"},(0,r.kt)("inlineCode",{parentName:"a"},"release"))," directory."),(0,r.kt)("h3",{id:"update-download-page"},"Update Download page"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads"},"Download")," page contains links for Apache APISIX, Apache APISIX Dashboard, and other sources, and we need to update its contents ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/blob/master/website/docusaurus.config.js"},"here"),"."),(0,r.kt)("h3",{id:"send-announce"},"Send ANNOUNCE"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread.html/r6e90ffb7964314605c082ac3ae204303ad94f0f71087542c33fcd7bf%40%3Cdev.apisix.apache.org%3E"},"here")," to view the reference email send announce email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org")," and ",(0,r.kt)("a",{parentName:"p",href:"mailto:announce@apache.org"},"announce@apache.org")))}c.isMDXComponent=!0},34853:function(e,a,t){a.Z=t.p+"assets/images/release_flow-7cedd869bc884c40bf9f9f1ce8dded9e.png"}}]);