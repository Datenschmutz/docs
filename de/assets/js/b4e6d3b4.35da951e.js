"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[9375],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||o[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:4,sidebar_label:"Bash F\xe4rbung",id:"linux-bash-coloring",description:"Linux Bash F\xe4rbung",slug:"/linux-bash-coloring",tags:["Cheat Sheet","Linux","Bash","Shell","Terminal","Color","German/Deutsch"]},i="Linux Bash/Shell F\xe4rbung",d={unversionedId:"linux-bash-coloring",id:"linux-bash-coloring",title:"Linux Bash/Shell F\xe4rbung",description:"Linux Bash F\xe4rbung",source:"@site/i18n/de/docusaurus-plugin-content-docs-cheat-sheets/current/bash-coloring.md",sourceDirName:".",slug:"/linux-bash-coloring",permalink:"/de/cheat-sheets/linux-bash-coloring",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/i18n/de/docusaurus-plugin-content-docs-cheat-sheets/current/bash-coloring.md",tags:[{label:"Cheat Sheet",permalink:"/de/cheat-sheets/tags/cheat-sheet"},{label:"Linux",permalink:"/de/cheat-sheets/tags/linux"},{label:"Bash",permalink:"/de/cheat-sheets/tags/bash"},{label:"Shell",permalink:"/de/cheat-sheets/tags/shell"},{label:"Terminal",permalink:"/de/cheat-sheets/tags/terminal"},{label:"Color",permalink:"/de/cheat-sheets/tags/color"},{label:"German/Deutsch",permalink:"/de/cheat-sheets/tags/german-deutsch"}],version:"current",lastUpdatedBy:"Datenschmutz",lastUpdatedAt:1671445671,formattedLastUpdatedAt:"19. Dez. 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Bash F\xe4rbung",id:"linux-bash-coloring",description:"Linux Bash F\xe4rbung",slug:"/linux-bash-coloring",tags:["Cheat Sheet","Linux","Bash","Shell","Terminal","Color","German/Deutsch"]},sidebar:"tutorialSidebar",previous:{title:"Linux Cheat Sheet - Standard",permalink:"/de/cheat-sheets/linux-cmd-basic"},next:{title:"TeamSpeak",permalink:"/de/cheat-sheets/category/teamspeak"}},p={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Beispiel",id:"beispiel",level:3},{value:"ANSI - Farb Codes",id:"ansi---farb-codes",level:2},{value:"Beispiel",id:"beispiel-1",level:3},{value:"ANSI - Formatierungs Codes",id:"ansi---formatierungs-codes",level:2},{value:"Beispiele",id:"beispiele",level:3}],s={toc:m};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-bashshell-f\xe4rbung"},"Linux Bash/Shell F\xe4rbung"),(0,r.kt)("p",null,"Man kann sein BASH-Skript versch\xf6nern, indem man seine Ausgabe einf\xe4rbt. Verwende ANSI-Escape-Sequenzen, um Texteigenschaften wie Vorder- und Hintergrundfarben festzulegen."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[COLORmBeispiel Text\\e[0m"\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-e"),(0,r.kt)("td",{parentName:"tr",align:null},"Aktivierung der Interpretation von Backslash-Escapes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\e["),(0,r.kt)("td",{parentName:"tr",align:null},"Start der Farbwechsel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLORm"),(0,r.kt)("td",{parentName:"tr",align:null},"Farbcode + 'm' am Ende")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\e[0m"),(0,r.kt)("td",{parentName:"tr",align:null},"Ende der Farbwechsel")))),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash",metastring:'title="Gr\xfcner Text"',title:'"Gr\xfcner','Text"':!0},'echo -e "\\e[32mGr\xfcner Text\\e[0m"\n')),(0,r.kt)("h2",{id:"ansi---farb-codes"},"ANSI - Farb Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Farbe"),(0,r.kt)("th",{parentName:"tr",align:null},"Vordergrund Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Hintergrund Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schwarz"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rot"),(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"41")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gr\xfcn"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Braun"),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blau"),(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lila"),(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyan"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hell Grau"),(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"47")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Es gibt einige Unterschiede zwischen den Farben, wenn man Farben mit dem Fett Formatierungs Code kombiniert")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Farbe"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Vordergrund Code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Hintergrund Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Dunkelgrau"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;30"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hellrot"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;31"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;41")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hellgr\xfcn"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Gelb"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;33"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hellblau"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;34"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hell Lila"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;35"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hell Cyan"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;36"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Wei\xdf"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;37"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1;47")))),(0,r.kt)("h3",{id:"beispiel-1"},"Beispiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[1;34mHellblauer Text\\e[0m"\n')),(0,r.kt)("h2",{id:"ansi---formatierungs-codes"},"ANSI - Formatierungs Codes"),(0,r.kt)("p",null,"The ANSI codes also lets you control the way characters are displayed on the screen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ANSI Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Normal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Fett"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("em",{parentName:"em"},"Unterstrichen")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Blinkend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Reverse darstellung")))),(0,r.kt)("h3",{id:"beispiele"},"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[1mBold Text\\e[0m"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'echo -e "\\e[3mUnterstrichener Text\\e[0m"\n')))}o.isMDXComponent=!0}}]);