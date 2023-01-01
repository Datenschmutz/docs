"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[2006],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>c});var a=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),c=s,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||n;return t?a.createElement(k,o(o({ref:r},u),{},{components:t})):a.createElement(k,o({ref:r},u))}));function c(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,o=new Array(n);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5469:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=t(7462),s=(t(7294),t(4137));const n={sidebar_position:2,sidebar_label:"TeamSpeak Server-Query Reset",id:"teamspeak-qerver-query-reset",description:"This guide explains how to reset the TeamSpeak Server-Query login.",slug:"/teamspeak-qerver-query-reset",last_update:{author:"Fabian",date:"12/11/2022"},tags:["TeamSpeak","Server","Linux","Shell","Terminal","Server-Query"]},o="Reset TeamSpeak Server-Query login on Linux servers",i={unversionedId:"guides/teamspeak-qerver-query-reset",id:"guides/teamspeak-qerver-query-reset",title:"Reset TeamSpeak Server-Query login on Linux servers",description:"This guide explains how to reset the TeamSpeak Server-Query login.",source:"@site/docs/guides/teamspeak-qerver-query-reset.md",sourceDirName:"guides",slug:"/teamspeak-qerver-query-reset",permalink:"/docs/teamspeak-qerver-query-reset",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/docs/guides/teamspeak-qerver-query-reset.md",tags:[{label:"TeamSpeak",permalink:"/docs/tags/team-speak"},{label:"Server",permalink:"/docs/tags/server"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Shell",permalink:"/docs/tags/shell"},{label:"Terminal",permalink:"/docs/tags/terminal"},{label:"Server-Query",permalink:"/docs/tags/server-query"}],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1670716800,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"TeamSpeak Server-Query Reset",id:"teamspeak-qerver-query-reset",description:"This guide explains how to reset the TeamSpeak Server-Query login.",slug:"/teamspeak-qerver-query-reset",last_update:{author:"Fabian",date:"12/11/2022"},tags:["TeamSpeak","Server","Linux","Shell","Terminal","Server-Query"]},sidebar:"tutorialSidebar",previous:{title:"TeamSpeak Installation",permalink:"/docs/teamspeak-install"},next:{title:"Linux Time and Date",permalink:"/docs/linux-time-date"}},p={},l=[{value:"Preparations",id:"preparations",level:2},{value:"Switch to TeamSpeak user",id:"switch-to-teamspeak-user",level:3},{value:"Navigate to the TeamSpeak directory",id:"navigate-to-the-teamspeak-directory",level:3},{value:"Stop TeamSpeak server",id:"stop-teamspeak-server",level:3},{value:"Reset Server-Query Password",id:"reset-server-query-password",level:2}],u={toc:l};function m(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"reset-teamspeak-server-query-login-on-linux-servers"},"Reset TeamSpeak Server-Query login on Linux servers"),(0,s.kt)("p",null,"If you have forgotten the server query password issued at the first server start, or if you simply want to change it, you can do so as follows."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This guide assumes that TeamSpeak has been set up ",(0,s.kt)("strong",{parentName:"p"},"according")," to the instructions found ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"teamspeak-install"},"here")),". If the ",(0,s.kt)("strong",{parentName:"p"},"TeamSpeak server has been set up differently"),", some commands and/or variables such as the ",(0,s.kt)("a",{parentName:"p",href:"teamspeak-install#control-teamspeak-server"},"Teamspeak directory")," or the ",(0,s.kt)("a",{parentName:"p",href:"teamspeak-install#create-a-teamspeak-running-user"},"username of the running user")," ",(0,s.kt)("strong",{parentName:"p"},"may differ"),".")),(0,s.kt)("h2",{id:"preparations"},"Preparations"),(0,s.kt)("h3",{id:"switch-to-teamspeak-user"},"Switch to TeamSpeak user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"su teamspeak\n")),(0,s.kt)("h3",{id:"navigate-to-the-teamspeak-directory"},"Navigate to the TeamSpeak directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/teamspeak/teamspeak3-server_linux_amd64\n")),(0,s.kt)("h3",{id:"stop-teamspeak-server"},"Stop TeamSpeak server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Stop TeamSpeak server"',title:'"Stop',TeamSpeak:!0,'server"':!0},"./ts3server_startscript.sh stop\n")),(0,s.kt)("h2",{id:"reset-server-query-password"},"Reset Server-Query Password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Fill in Your Password!"',title:'"Fill',in:!0,Your:!0,'Password!"':!0},"./ts3server_minimal_runscript.sh serveradmin_password=Your_New_Password\n")),(0,s.kt)("admonition",{title:"And you're done!",type:"tip"}))}m.isMDXComponent=!0}}]);