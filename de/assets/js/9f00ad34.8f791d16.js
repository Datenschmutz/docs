"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[1181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1,sidebar_label:"Voron S3 Backup",id:"S3-auto-backup",description:"Automatisches Sichern der Druckerkonfigurationsdateien mit rClone auf S3.",slug:"/S3-Auto-backup",last_update:{author:"Fabian",date:"12/19/2022"},tags:["Script","Voron","Backup","S3","s3fs","rclone","Object Storage","3D-Printing","Raspberry","German/Deutsch"]},o="Automatisiertes Drucker Backup per S3 Speicher",l={unversionedId:"scripts/voron-auto-backup/S3-auto-backup",id:"scripts/voron-auto-backup/S3-auto-backup",title:"Automatisiertes Drucker Backup per S3 Speicher",description:"Automatisches Sichern der Druckerkonfigurationsdateien mit rClone auf S3.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripts/voron-auto-backup/voron-auto-backup-s3.md",sourceDirName:"scripts/voron-auto-backup",slug:"/S3-Auto-backup",permalink:"/de/docs/S3-Auto-backup",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/i18n/de/docusaurus-plugin-content-docs/current/scripts/voron-auto-backup/voron-auto-backup-s3.md",tags:[{label:"Script",permalink:"/de/docs/tags/script"},{label:"Voron",permalink:"/de/docs/tags/voron"},{label:"Backup",permalink:"/de/docs/tags/backup"},{label:"S3",permalink:"/de/docs/tags/s-3"},{label:"s3fs",permalink:"/de/docs/tags/s-3-fs"},{label:"rclone",permalink:"/de/docs/tags/rclone"},{label:"Object Storage",permalink:"/de/docs/tags/object-storage"},{label:"3D-Printing",permalink:"/de/docs/tags/3-d-printing"},{label:"Raspberry",permalink:"/de/docs/tags/raspberry"},{label:"German/Deutsch",permalink:"/de/docs/tags/german-deutsch"}],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1671408e3,formattedLastUpdatedAt:"19. Dez. 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Voron S3 Backup",id:"S3-auto-backup",description:"Automatisches Sichern der Druckerkonfigurationsdateien mit rClone auf S3.",slug:"/S3-Auto-backup",last_update:{author:"Fabian",date:"12/19/2022"},tags:["Script","Voron","Backup","S3","s3fs","rclone","Object Storage","3D-Printing","Raspberry","German/Deutsch"]},sidebar:"tutorialSidebar",previous:{title:"Voron Backup Automation",permalink:"/de/docs/category/voron-backup-automation"},next:{title:"Voron Netzwerkfreigabe-Backup",permalink:"/de/docs/NAS-Auto-backup"}},s={},u=[{value:"Voraussetzungen",id:"voraussetzungen",level:2},{value:"Installation",id:"installation",level:2},{value:"Konfiguration",id:"konfiguration",level:2},{value:"rClone S3 Storage Einrichtung",id:"rclone-s3-storage-einrichtung",level:3},{value:"Zus\xe4tzliche Konfigurationsm\xf6glichkeiten",id:"zus\xe4tzliche-konfigurationsm\xf6glichkeiten",level:3},{value:"Erw\xe4hnungen, Danksagungen und Quellenangaben",id:"erw\xe4hnungen-danksagungen-und-quellenangaben",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automatisiertes-drucker-backup-per-s3-speicher"},"Automatisiertes Drucker Backup per S3 Speicher"),(0,r.kt)("admonition",{title:"Disclaimer",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Dieses Skript ist WORK IN PROGRESS. SICHERE DEINE DATEIEN MANUELL!!! Wir sind nicht verantwortlich f\xfcr nicht funktionierende Drucker oder verlorene Dateien!")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Entsprechendes  ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Datenschmutz/Voron-Backup-Script"},"GitHub")," Repository")," ")),(0,r.kt)("h2",{id:"voraussetzungen"},"Voraussetzungen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S3-Speicher"),(0,r.kt)("li",{parentName:"ul"},"Grundlegende Kenntnisse von rClone")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Installationsskript herunterladen"',title:'"Installationsskript','herunterladen"':!0},"wget https://raw.githubusercontent.com/datenschmutz/Voron-Backup-Script/main/install.sh\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Beachte, dass ",(0,r.kt)("strong",{parentName:"p"},"nach der Ausf\xfchrung des folgenden Befehls")," die rClone ",(0,r.kt)("strong",{parentName:"p"},"Konfiguration automatisch startet"),".\nSiehe ",(0,r.kt)("a",{parentName:"p",href:"#Konfiguration"},(0,r.kt)("strong",{parentName:"a"},"Konfiguration"))," f\xfcr Anweisungen.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Installationsskript ausf\xfchren"',title:'"Installationsskript','ausf\xfchren"':!0},"bash install.sh\n")),(0,r.kt)("h2",{id:"konfiguration"},"Konfiguration"),(0,r.kt)("p",null,"Folge den Anweisungen im Skript"),(0,r.kt)("h3",{id:"rclone-s3-storage-einrichtung"},"rClone S3 Storage Einrichtung"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ich verwende f\xfcr mein Tutorial S3-Speicher von ",(0,r.kt)("a",{parentName:"p",href:"https://contabo.com/object-storage/"},"Contabo")," auf Basis von Cleph, die Konfiguration kann bei anderen Anbietern abweichen.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," f\xfcr neuen entfernten Speicher"),(0,r.kt)("li",{parentName:"ul"},"Gib einen rClone Ziel ",(0,r.kt)("em",{parentName:"li"},"Namen")," an, z.B. ",(0,r.kt)("inlineCode",{parentName:"li"},"MyS3-Storage")),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"4")," f\xfcr ",(0,r.kt)("em",{parentName:"li"},"Amazon S3-kompatible Speicheranbieter wie AWS, Alibaba, ",(0,r.kt)("strong",{parentName:"em"},"Ceph"),", Digital Ocean, Dreamhost, IBM COS, Minio, SeaweedFS und Tencent COS")),(0,r.kt)("li",{parentName:"ul"},"W\xe4hle die S3-Speicherl\xf6sung, z. B. ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," ",(0,r.kt)("em",{parentName:"li"},"f\xfcr ",(0,r.kt)("strong",{parentName:"em"},"Ceph")," Object Storage"),"."),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," f\xfcr AWS-Anmeldedaten im n\xe4chsten Schritt eingeben."),(0,r.kt)("li",{parentName:"ul"},"Gib deinen ",(0,r.kt)("inlineCode",{parentName:"li"},"access_key")," an, ",(0,r.kt)("em",{parentName:"li"},"z.B. 82046e8110804a43bf29c1ae426a724d")," f\xfcr ",(0,r.kt)("em",{parentName:"li"},"access_key_id")),(0,r.kt)("li",{parentName:"ul"},"Gib deinen ",(0,r.kt)("inlineCode",{parentName:"li"},"secret_key")," an, ",(0,r.kt)("em",{parentName:"li"},"z.B. 82e69bd7a52076c527154297a76c2233")," f\xfcr ",(0,r.kt)("em",{parentName:"li"},"secret_access_key")),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),", um ",(0,r.kt)("em",{parentName:"li"},"Region")," zu \xfcberspringen."),(0,r.kt)("li",{parentName:"ul"},"Gib die S3-URL an, z. B. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://eu2.contabostorage.com")," f\xfcr ",(0,r.kt)("em",{parentName:"li"},"Endpunkt"),"."),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),", um ",(0,r.kt)("em",{parentName:"li"},"location_constraint")," zu \xfcberspringen."),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter")," zum \xdcberspringen von ",(0,r.kt)("em",{parentName:"li"},"acl")),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),", um ",(0,r.kt)("em",{parentName:"li"},"server_side_encryption")," zu \xfcberspringen"),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),", um ",(0,r.kt)("em",{parentName:"li"},"sse_kms_key_id")," zu \xfcberspringen"),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," f\xfcr ",(0,r.kt)("em",{parentName:"li"}," Edit advanced config")),(0,r.kt)("li",{parentName:"ul"},"Dr\xfccke ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," f\xfcr ",(0,r.kt)("em",{parentName:"li"},"Yes this is OK (Standard)")),(0,r.kt)("li",{parentName:"ul"},"Gib optional ",(0,r.kt)("inlineCode",{parentName:"li"},"q")," an, um ",(0,r.kt)("em",{parentName:"li"},"den Konfigurationsmodus zu verlassen"),".")),(0,r.kt)("h3",{id:"zus\xe4tzliche-konfigurationsm\xf6glichkeiten"},"Zus\xe4tzliche Konfigurationsm\xf6glichkeiten"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Backup-Skript verf\xfcgt \xfcber einige zus\xe4tzliche Konfigurationsoptionen. \xd6ffne es mit dem folgenden Befehl.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /home/$USER/backup.sh\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"erw\xe4hnungen-danksagungen-und-quellenangaben"},"Erw\xe4hnungen, Danksagungen und Quellenangaben"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vielen Dank an @T4KUUY4 f\xfcr die ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/T4KUUY4/Voron-Stuff/tree/main/Automatic%20Backup"},"Grundlage")," dieses Skripts!")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Variante der rCLone-Einrichtungsanleitung von Contabo - ",(0,r.kt)("a",{parentName:"li",href:"https://docs.contabo.com/docs/products/Object-Storage/Tools/rclone"},"Link"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);