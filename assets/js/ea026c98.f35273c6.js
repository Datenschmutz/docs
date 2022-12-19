"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[611],{4137:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(a),u=r,g=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:4,sidebar_label:"Bash Coloring",id:"linux-bash-coloring",description:"Linux Bash Coloring",slug:"/linux-bash-coloring",tags:["Cheat Sheet","Linux","Bash","Shell","Terminal","Color"]},i="Linux Bash/Shell Coloring",o={unversionedId:"linux-bash-coloring",id:"linux-bash-coloring",title:"Linux Bash/Shell Coloring",description:"Linux Bash Coloring",source:"@site/cheat-sheets/bash-coloring.md",sourceDirName:".",slug:"/linux-bash-coloring",permalink:"/cheat-sheets/linux-bash-coloring",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/cheat-sheets/bash-coloring.md",tags:[{label:"Cheat Sheet",permalink:"/cheat-sheets/tags/cheat-sheet"},{label:"Linux",permalink:"/cheat-sheets/tags/linux"},{label:"Bash",permalink:"/cheat-sheets/tags/bash"},{label:"Shell",permalink:"/cheat-sheets/tags/shell"},{label:"Terminal",permalink:"/cheat-sheets/tags/terminal"},{label:"Color",permalink:"/cheat-sheets/tags/color"}],version:"current",lastUpdatedBy:"Datenschmutz",lastUpdatedAt:1671445671,formattedLastUpdatedAt:"Dec 19, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Bash Coloring",id:"linux-bash-coloring",description:"Linux Bash Coloring",slug:"/linux-bash-coloring",tags:["Cheat Sheet","Linux","Bash","Shell","Terminal","Color"]},sidebar:"tutorialSidebar",previous:{title:"Linux Cheat Sheet - Basic",permalink:"/cheat-sheets/linux-cmd-basic"},next:{title:"TeamSpeak",permalink:"/cheat-sheets/category/teamspeak"}},p={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"ANSI \u2014 Color Codes",id:"ansi--color-codes",level:2},{value:"Example",id:"example-1",level:3},{value:"ANSI - Formating Codes",id:"ansi---formating-codes",level:2},{value:"Examples",id:"examples",level:3}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-bashshell-coloring"},"Linux Bash/Shell Coloring"),(0,r.kt)("p",null,"You can beautify your BASH script by coloring its output. Use ANSI escape sequences to set text properties such as foreground and background colors."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[COLORmSample Text\\e[0m"\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-e"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling the interpretation of backslash escapes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\e["),(0,r.kt)("td",{parentName:"tr",align:null},"Start of color changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLORm"),(0,r.kt)("td",{parentName:"tr",align:null},"Color code + 'm' at the end")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\e[0m"),(0,r.kt)("td",{parentName:"tr",align:null},"End of color changes")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash",metastring:'title="Green Text"',title:'"Green','Text"':!0},'echo -e "\\e[32mGreen Text\\e[0m"\n')),(0,r.kt)("h2",{id:"ansi--color-codes"},"ANSI \u2014 Color Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Foreground Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Background Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Black"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Red"),(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"41")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Brown"),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blue"),(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Purple"),(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyan"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Light Gray"),(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"47")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There are some differences between colors when combining colors with the Bold Formating Code")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Color"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Foreground Code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Background Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Dark Gray"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;30"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Light Red"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;31"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;41")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Light Green"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Yellow"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;33"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Light Blue"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;34"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Light Purple"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;35"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Light Cyan"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;36"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"White"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;37"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;47")))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[1;34mLight Blue Text\\e[0m"\n')),(0,r.kt)("h2",{id:"ansi---formating-codes"},"ANSI - Formating Codes"),(0,r.kt)("p",null,"The ANSI codes also lets you control the way characters are displayed on the screen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ANSI Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Normal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Bold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Underlined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Blinking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Reverse video")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[1mBold Text\\e[0m"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[3mUnderlined Text\\e[0m"\n')))}s.isMDXComponent=!0}}]);