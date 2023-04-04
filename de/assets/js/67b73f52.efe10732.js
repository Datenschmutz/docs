"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[2850],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,p=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return t?r.createElement(p,i(i({ref:n},d),{},{components:t})):r.createElement(p,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},89734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const l={sidebar_position:2,sidebar_label:"Cron - Cronjobs",id:"cron",description:"Automatische Ausf\xfchrung von Aufgaben zu von dir festgelegten (wiederkehrenden) Zeiten.",slug:"/cron",last_update:{author:"Fabian",date:"12/19/2022"},tags:["Tool","Cron","Cronjobs","Linux","Shell","Terminal","German/Deutsch"]},i="Cron - Cronjobs",o={unversionedId:"tools/cron",id:"tools/cron",title:"Cron - Cronjobs",description:"Automatische Ausf\xfchrung von Aufgaben zu von dir festgelegten (wiederkehrenden) Zeiten.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tools/cron.md",sourceDirName:"tools",slug:"/cron",permalink:"/de/docs/cron",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/i18n/de/docusaurus-plugin-content-docs/current/tools/cron.md",tags:[{label:"Tool",permalink:"/de/docs/tags/tool"},{label:"Cron",permalink:"/de/docs/tags/cron"},{label:"Cronjobs",permalink:"/de/docs/tags/cronjobs"},{label:"Linux",permalink:"/de/docs/tags/linux"},{label:"Shell",permalink:"/de/docs/tags/shell"},{label:"Terminal",permalink:"/de/docs/tags/terminal"},{label:"German/Deutsch",permalink:"/de/docs/tags/german-deutsch"}],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1671408e3,formattedLastUpdatedAt:"19. Dez. 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Cron - Cronjobs",id:"cron",description:"Automatische Ausf\xfchrung von Aufgaben zu von dir festgelegten (wiederkehrenden) Zeiten.",slug:"/cron",last_update:{author:"Fabian",date:"12/19/2022"},tags:["Tool","Cron","Cronjobs","Linux","Shell","Terminal","German/Deutsch"]},sidebar:"tutorialSidebar",previous:{title:"s3fs-fuse",permalink:"/de/docs/s3fs-fuse"},next:{title:"rclone",permalink:"/de/docs/rclone"}},s={},u=[{value:"Crontab",id:"crontab",level:2},{value:"Cronjobs Erstellen",id:"cronjobs-erstellen",level:2},{value:"Crontab-Zeilen Syntax",id:"crontab-zeilen-syntax",level:3},{value:"Es ist m\xf6glich, mehr als einen Wert pro Zeiteintrag zu definieren, indem man sie mit einem <code>,</code> trennt.",id:"es-ist-m\xf6glich-mehr-als-einen-wert-pro-zeiteintrag-zu-definieren-indem-man-sie-mit-einem--trennt",level:4},{value:"Neben der Verwendung fester Zeiten ist es auch m\xf6glich, ein Intervall durch die Verwendung eines <code>/</code> anzugeben.",id:"neben-der-verwendung-fester-zeiten-ist-es-auch-m\xf6glich-ein-intervall-durch-die-verwendung-eines--anzugeben",level:4},{value:"Zu guter Letzt ist es auch m\xf6glich, einen Befehl automatisch beim Neustart auszuf\xfchren.",id:"zu-guter-letzt-ist-es-auch-m\xf6glich-einen-befehl-automatisch-beim-neustart-auszuf\xfchren",level:4},{value:"Cronjob ausgabe",id:"cronjob-ausgabe",level:2},{value:"Cronjob Log ausgabe",id:"cronjob-log-ausgabe",level:3},{value:"Cronjob-Ausgabe deaktivieren",id:"cronjob-ausgabe-deaktivieren",level:3},{value:"Vollst\xe4ndige Aufschl\xfcsselung der Crontab-Zeilen",id:"vollst\xe4ndige-aufschl\xfcsselung-der-crontab-zeilen",level:2},{value:"Cronjob ordner",id:"cronjob-ordner",level:2}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cron---cronjobs"},"Cron - Cronjobs"),(0,a.kt)("p",null,'Der "Cron"-Dienst ist unter Linux als gleichnamiges Paket bereits vorinstalliert. Mit Hilfe von Cron-Jobs kannst du bestimmte Aufgaben zu von dir festgelegten (wiederkehrenden) Zeiten automatisch ausf\xfchren lassen. Cron-Jobs sind daher z.B. f\xfcr automatische Backups n\xfctzlich.'),(0,a.kt)("admonition",{title:"Serverzeit pr\xfcfen",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"F\xfcr die automatische Ausf\xfchrung verwendet cron die lokal eingestellte Zeit. Du kannst sie mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"timedatectl")," \xfcberpr\xfcfen.\nWenn die Zeit nicht korrekt ist, kannst du sie mit ",(0,a.kt)("a",{parentName:"p",href:"./linux-time-date"},"dieser Anleitung")," anpassen")),(0,a.kt)("h2",{id:"crontab"},"Crontab"),(0,a.kt)("p",null,'Die einzelnen Cronjobs werden in einer Tabelle, der sogenannten "Crontab", gespeichert. In dieser Tabelle wird pro Zeile ein Cronjob definiert. Jede Zeile enth\xe4lt den Zeitpunkt, zu dem der Befehl ausgef\xfchrt werden soll, und den Befehl selbst. Die Syntax einer Crontab-Zeile sieht wie folgt aus:'),(0,a.kt)("h2",{id:"cronjobs-erstellen"},"Cronjobs Erstellen"),(0,a.kt)("p",null,"Um die crontab des aktuell angemeldeten Benutzers zu bearbeiten, verwende den Befehl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crontab -e.\n")),(0,a.kt)("h3",{id:"crontab-zeilen-syntax"},"Crontab-Zeilen Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0 12 * * * Command\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"0"),(0,a.kt)("th",{parentName:"tr",align:null},"12"),(0,a.kt)("th",{parentName:"tr",align:null},"*"),(0,a.kt)("th",{parentName:"tr",align:null},"*"),(0,a.kt)("th",{parentName:"tr",align:null},"*"),(0,a.kt)("th",{parentName:"tr",align:null},"Command"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Minute (0-59)"),(0,a.kt)("td",{parentName:"tr",align:null},"Stunde (0-23)"),(0,a.kt)("td",{parentName:"tr",align:null},"Tag (1-31)"),(0,a.kt)("td",{parentName:"tr",align:null},"Monat (1-12)"),(0,a.kt)("td",{parentName:"tr",align:null},"Wochentag (1-7)"),(0,a.kt)("td",{parentName:"tr",align:null},"Auszuf\xfchrender Befehl")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Bei allen Zeitangaben kann auch ein ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," verwendet werden, um anzugeben, dass die Ausf\xfchrung zu einer beliebigen Minute, Stunde usw. erfolgen soll.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Im obigen Beispiel wird der Befehl jeden Tag um 12:00 Uhr ausgef\xfchrt.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Die Erstellung eines Cronjobs mit den unten aufgef\xfchrten Erg\xe4nzungen kann sehr m\xfchsam sein, daher wird die Verwendung eines ","[Online-Cronjob-Generators]"," (",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=crontab+generator"},"https://www.google.com/search?q=crontab+generator"),") dringend empfohlen.")),(0,a.kt)("h4",{id:"es-ist-m\xf6glich-mehr-als-einen-wert-pro-zeiteintrag-zu-definieren-indem-man-sie-mit-einem--trennt"},"Es ist m\xf6glich, mehr als einen Wert pro Zeiteintrag zu definieren, indem man sie mit einem ",(0,a.kt)("inlineCode",{parentName:"h4"},",")," trennt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0 6,18 1,28 1,6,12 * Command\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Der obige Cronjob wird am 1. und 28. Tag im Januar, Juni und Dezember jeweils um 06:00 und 18:00 Uhr ausgef\xfchrt")),(0,a.kt)("h4",{id:"neben-der-verwendung-fester-zeiten-ist-es-auch-m\xf6glich-ein-intervall-durch-die-verwendung-eines--anzugeben"},"Neben der Verwendung fester Zeiten ist es auch m\xf6glich, ein Intervall durch die Verwendung eines ",(0,a.kt)("inlineCode",{parentName:"h4"},"/")," anzugeben."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"*/5 * * * * Command\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Der obige Befehl wird alle 5 Minuten ausgef\xfchrt")),(0,a.kt)("h4",{id:"zu-guter-letzt-ist-es-auch-m\xf6glich-einen-befehl-automatisch-beim-neustart-auszuf\xfchren"},"Zu guter Letzt ist es auch m\xf6glich, einen Befehl automatisch beim Neustart auszuf\xfchren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"@reboot Command\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Der obige Befehl wird beim Neustart ausgef\xfchrt")),(0,a.kt)("h2",{id:"cronjob-ausgabe"},"Cronjob ausgabe"),(0,a.kt)("p",null,"Standardm\xe4\xdfig werden alle Ausgaben von Befehlen oder Skripten, die \xfcber Cronjobs ausgef\xfchrt werden, per E-Mail an den jeweiligen Benutzer auf dem Server gesendet, der den Cronjob in seiner Crontab gespeichert hat."),(0,a.kt)("p",null,"Es ist jedoch m\xf6glich, diese Ausgabe in eine (Log-)Datei umzuleiten oder ganz zu deaktivieren, falls gew\xfcnscht."),(0,a.kt)("h3",{id:"cronjob-log-ausgabe"},"Cronjob Log ausgabe"),(0,a.kt)("p",null,"Um die Ausgabe eines Befehls oder Skripts in eine Logdatei umzuleiten, musst du in deiner Crontab-Zeile nach dem Befehl oder Skript ",(0,a.kt)("inlineCode",{parentName:"p"},">>")," schreiben, gefolgt von dem Pfad der Datei, in die diese Ausgabe umgeleitet werden soll."),(0,a.kt)("p",null,"Nach dem Pfad der Datei muss auch ",(0,a.kt)("inlineCode",{parentName:"p"},"2>&1")," stehen, damit nicht nur die normale Ausgabe, sondern auch Fehler in diese Datei umgeleitet werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"Beispiel f\xfcr einen vollst\xe4ndigen Cronjob mit Log",Beispiel:!0,"f\xfcr":!0,einen:!0,"vollst\xe4ndigen":!0,Cronjob:!0,mit:!0,Log:!0},"0 12 * * * /usr/bin/script.sh >> /var/log/script.log 2>&1\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Der obige Befehl f\xfchrt das Skript alle 12 Stunden aus und sendet die Ergebnisse des Befehls in eine Logdatei")),(0,a.kt)("h3",{id:"cronjob-ausgabe-deaktivieren"},"Cronjob-Ausgabe deaktivieren"),(0,a.kt)("p",null,"Um die Ausgabe zu deaktivieren, verwende ",(0,a.kt)("inlineCode",{parentName:"p"},"> /dev/null")," anstelle des doppelten Gr\xf6\xdfer-als-Zeichens und den Pfad der Ausgabedatei nach dem Befehl oder Skript. Dies ist das sogenannte ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_device"},"Null Device")," unter Linux."),(0,a.kt)("p",null,"Nach den Pfad der Datei muss auch ",(0,a.kt)("inlineCode",{parentName:"p"},'"2>&1"')," sein, dies stellt sicher, dass nicht nur die normale Ausgabe, sondern auch Fehler auf das Null Device umgeleitet werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"Beispiel f\xfcr einen vollst\xe4ndigen Cronjob mit deaktiviertem Log",Beispiel:!0,"f\xfcr":!0,einen:!0,"vollst\xe4ndigen":!0,Cronjob:!0,mit:!0,deaktiviertem:!0,Log:!0},"0 12 * * * /usr/bin/script.sh > /dev/null 2>&1\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Der obige Befehl f\xfchrt das Skript alle 12 Stunden aus und sendet die Befehlsergebnisse an das Null-Device (l\xf6scht sie)")),(0,a.kt)("h2",{id:"vollst\xe4ndige-aufschl\xfcsselung-der-crontab-zeilen"},"Vollst\xe4ndige Aufschl\xfcsselung der Crontab-Zeilen"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Minute (0-59)"),(0,a.kt)("th",{parentName:"tr",align:null},"Stunde (0-23)"),(0,a.kt)("th",{parentName:"tr",align:null},"Tag (1-31)"),(0,a.kt)("th",{parentName:"tr",align:null},"Monat (1-12)"),(0,a.kt)("th",{parentName:"tr",align:null},"Wochentag (1-7)"),(0,a.kt)("th",{parentName:"tr",align:null},"Befehl"),(0,a.kt)("th",{parentName:"tr",align:null},"> Sendet ausgabe",(0,a.kt)("br",null)," >> Sendet ausgabe ohne ziel zu \xfcberschreiben"),(0,a.kt)("th",{parentName:"tr",align:null},"Ausgabe Ziel"),(0,a.kt)("th",{parentName:"tr",align:null},"Sendet auch fehler ans ziel"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"/usr/bin/script.sh"),(0,a.kt)("td",{parentName:"tr",align:null},">>"),(0,a.kt)("td",{parentName:"tr",align:null},"/var/log/script.log"),(0,a.kt)("td",{parentName:"tr",align:null},"2>&1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"/usr/bin/script.sh"),(0,a.kt)("td",{parentName:"tr",align:null},">"),(0,a.kt)("td",{parentName:"tr",align:null},"/dev/null"),(0,a.kt)("td",{parentName:"tr",align:null},"2>&1")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"Beispiel f\xfcr einen vollst\xe4ndigen Cronjob mit Protokoll",Beispiel:!0,"f\xfcr":!0,einen:!0,"vollst\xe4ndigen":!0,Cronjob:!0,mit:!0,Protokoll:!0},"0 12 * * * /usr/bin/script.sh >> /var/log/script.log 2>&1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"Beispiel f\xfcr einen vollst\xe4ndigen Cronjob mit deaktiviertem Log",Beispiel:!0,"f\xfcr":!0,einen:!0,"vollst\xe4ndigen":!0,Cronjob:!0,mit:!0,deaktiviertem:!0,Log:!0},"0 12 * * * /usr/bin/script.sh > /dev/null 2>&1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"> /dev/null"),": Dies ist das so genannte ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Null_device"},"Null Device"),", an das alles gesendet wird, was gel\xf6scht wird."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2>&1"),": stellt sicher, dass nicht nur normale Ausgaben, sondern auch Fehler in die L\xf6schung umgeleitet werden.")),(0,a.kt)("h2",{id:"cronjob-ordner"},"Cronjob ordner"),(0,a.kt)("p",null,"Zus\xe4tzlich zu crontab gibt es auch vordefinierte Ordner f\xfcr bestimmte Zeitintervalle."),(0,a.kt)("p",null,"Es gibt die folgenden Ordner:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/cron.daily/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/cron.hourly/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/cron.weekly/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/cron.monthly/"))),(0,a.kt)("p",null,"Ziemlich selbsterkl\xe4rend werden alle ausf\xfchrbaren Dateien (z. B. Skripte) mit der im Ordnernamen angegebenen Interwall ausgef\xfchrt."))}m.isMDXComponent=!0}}]);