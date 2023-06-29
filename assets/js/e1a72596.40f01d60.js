"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[7601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3,sidebar_label:"rclone",id:"rclone",description:"rclone is a free tool for manging files and folders on cloud storage.",slug:"/rclone",last_update:{author:"Fabian",date:"12/11/2022"},tags:["Tool","rclone","Linux","Backup"]},l="Rclone",s={unversionedId:"tools/rclone",id:"tools/rclone",title:"Rclone",description:"rclone is a free tool for manging files and folders on cloud storage.",source:"@site/docs/tools/rclone.md",sourceDirName:"tools",slug:"/rclone",permalink:"/docs/rclone",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/docs/tools/rclone.md",tags:[{label:"Tool",permalink:"/docs/tags/tool"},{label:"rclone",permalink:"/docs/tags/rclone"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Backup",permalink:"/docs/tags/backup"}],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1670716800,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"rclone",id:"rclone",description:"rclone is a free tool for manging files and folders on cloud storage.",slug:"/rclone",last_update:{author:"Fabian",date:"12/11/2022"},tags:["Tool","rclone","Linux","Backup"]},sidebar:"tutorialSidebar",previous:{title:"Cron - Cronjobs",permalink:"/docs/cron"},next:{title:"PuTTY",permalink:"/docs/putty"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Features",id:"features",level:2},{value:"Mentions, Credits and Sources",id:"mentions-credits-and-sources",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rclone"},"Rclone"),(0,r.kt)("p",null,"Rclone is a command-line tool that allows you to synchronize files and directories between different storage services, such as Google Drive, Amazon S3, and Dropbox. It is designed to be easy to use and supports a wide range of storage providers and protocols, including local files, Google Drive, Amazon S3, Dropbox, and many others."),(0,r.kt)("p",null,"Rclone is written in Go and is available for Linux, macOS, and Windows. It is open source and released under the MIT license."),(0,r.kt)("p",null,"Rclone can be used for tasks such as backing up data to the cloud, synchronizing files between different storage providers, and moving data between different storage services. It supports a variety of features, including file and directory synchronization, server-side encryption, and multiple concurrent transfers."),(0,r.kt)("p",null,"Rclone is a useful tool for managing data stored on cloud storage services and can be used in a variety of different scenarios, including personal use, small business, and enterprise environments"),(0,r.kt)("h2",{id:"installation"},"Installation",(0,r.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"In case of Debian / Ubuntu system please perform following action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -v ; curl https://rclone.org/install.sh | sudo bash\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since Rclone is compatible with many cloud storage solutions and this would go beyond the scope of this article, simply have a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://rclone.org/#providers"},(0,r.kt)("strong",{parentName:"a"},"Rclone website")),"."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backup (and encrypt) files to cloud storage"),(0,r.kt)("li",{parentName:"ul"},"Restore (and decrypt) files from cloud storage"),(0,r.kt)("li",{parentName:"ul"},"Mirror cloud data to other cloud services or locally"),(0,r.kt)("li",{parentName:"ul"},"Migrate data to the cloud, or between cloud storage vendors"),(0,r.kt)("li",{parentName:"ul"},"Mount multiple, encrypted, cached or diverse cloud storage as a disk"),(0,r.kt)("li",{parentName:"ul"},"Analyse and account for data held on cloud storage using lsf, ljson, size, ncdu"),(0,r.kt)("li",{parentName:"ul"},"Union file systems together to present multiple local and/or cloud file systems as one")),(0,r.kt)("h4",{id:"mentions-credits-and-sources"},"Mentions, Credits and Sources"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"From rclone download page - ",(0,r.kt)("a",{parentName:"li",href:"https://rclone.org/downloads/"},"Link"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);