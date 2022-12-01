"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[6],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>c});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=s,v=d["".concat(p,".").concat(c)]||d[c]||m[c]||n;return r?a.createElement(v,o(o({ref:t},l),{},{components:r})):a.createElement(v,o({ref:t},l))}));function c(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(7462),s=(r(7294),r(4137));const n={sidebar_position:2,sidebar_label:"TeamSpeak Server-Query Reset",id:"teamspeak-qerver-query-reset",description:"This guide explains how to reset the TeamSpeak Server-Query login.",slug:"/teamspeak-qerver-query-reset",last_update:{author:"Fabian",date:"11/29/2022"}},o="Reset TeamSpeak Server-Query login on Linux servers",i={unversionedId:"guides/teamspeak-qerver-query-reset",id:"guides/teamspeak-qerver-query-reset",title:"Reset TeamSpeak Server-Query login on Linux servers",description:"This guide explains how to reset the TeamSpeak Server-Query login.",source:"@site/docs/guides/teamspeak-qerver-query-reset.md",sourceDirName:"guides",slug:"/teamspeak-qerver-query-reset",permalink:"/docs/teamspeak-qerver-query-reset",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/docs/guides/teamspeak-qerver-query-reset.md",tags:[],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:166968e4,formattedLastUpdatedAt:"29 Nov 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"TeamSpeak Server-Query Reset",id:"teamspeak-qerver-query-reset",description:"This guide explains how to reset the TeamSpeak Server-Query login.",slug:"/teamspeak-qerver-query-reset",last_update:{author:"Fabian",date:"11/29/2022"}},sidebar:"tutorialSidebar",previous:{title:"TeamSpeak Installation",permalink:"/docs/teamspeak-install"}},p={},u=[{value:"Preparations",id:"preparations",level:2},{value:"Switch to TeamSpeak user",id:"switch-to-teamspeak-user",level:3},{value:"Navigate to the TeamSpeak directory",id:"navigate-to-the-teamspeak-directory",level:3},{value:"Stop TeamSpeak server",id:"stop-teamspeak-server",level:3},{value:"Reset Server-Query Password",id:"reset-server-query-password",level:2}],l={toc:u};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"reset-teamspeak-server-query-login-on-linux-servers"},"Reset TeamSpeak Server-Query login on Linux servers"),(0,s.kt)("p",null,"If you have forgotten the server query password issued at the first server start, or if you simply want to change it, you can do so as follows."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This guide assumes that TeamSpeak has been set up ",(0,s.kt)("strong",{parentName:"p"},"according")," to the instructions found ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"teamspeak-install"},"here")),". If the ",(0,s.kt)("strong",{parentName:"p"},"TeamSpeak server has been set up differently"),", some commands and/or variables such as the ",(0,s.kt)("a",{parentName:"p",href:"teamspeak-install#control-teamspeak-server"},"Teamspeak directory")," or the ",(0,s.kt)("a",{parentName:"p",href:"teamspeak-install#create-a-teamspeak-running-user"},"username of the running user")," ",(0,s.kt)("strong",{parentName:"p"},"may differ"),".")),(0,s.kt)("h2",{id:"preparations"},"Preparations"),(0,s.kt)("h3",{id:"switch-to-teamspeak-user"},"Switch to TeamSpeak user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"su teamspeak\n")),(0,s.kt)("h3",{id:"navigate-to-the-teamspeak-directory"},"Navigate to the TeamSpeak directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/teamspeak/teamspeak3-server_linux_amd64\n")),(0,s.kt)("h3",{id:"stop-teamspeak-server"},"Stop TeamSpeak server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Stop TeamSpeak server"',title:'"Stop',TeamSpeak:!0,'server"':!0},"./ts3server_startscript.sh stop\n")),(0,s.kt)("h2",{id:"reset-server-query-password"},"Reset Server-Query Password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Fill in Your Password!"',title:'"Fill',in:!0,Your:!0,'Password!"':!0},"./ts3server_minimal_runscript.sh serveradmin_password=Your_New_Password\n")),(0,s.kt)("admonition",{title:"And you're done!",type:"tip"}))}m.isMDXComponent=!0}}]);