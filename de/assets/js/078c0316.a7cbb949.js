"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[9999],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),m=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(u.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(t),k=a,c=s["".concat(u,".").concat(k)]||s[k]||o[k]||l;return t?i.createElement(c,r(r({ref:n},p),{},{components:t})):i.createElement(c,r({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=s;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var m=2;m<l;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var i=t(7462),a=(t(7294),t(4137));const l={sidebar_position:3,sidebar_label:"Linux Cheat Sheet - Standard",id:"linux-cmd-basic",description:"Linux CMD Cheat Sheet",slug:"/linux-cmd-basic"},r="Linux CMD Cheat Sheet - Standard",d={unversionedId:"linux-cmd-basic",id:"linux-cmd-basic",title:"Linux CMD Cheat Sheet - Standard",description:"Linux CMD Cheat Sheet",source:"@site/i18n/de/docusaurus-plugin-content-docs-cheat-sheets/current/linux-cmd-basic.md",sourceDirName:".",slug:"/linux-cmd-basic",permalink:"/de/cheat-sheets/linux-cmd-basic",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/i18n/de/docusaurus-plugin-content-docs-cheat-sheets/current/linux-cmd-basic.md",tags:[],version:"current",lastUpdatedBy:"Datenschmutz",lastUpdatedAt:1670766559,formattedLastUpdatedAt:"11. Dez. 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Linux Cheat Sheet - Standard",id:"linux-cmd-basic",description:"Linux CMD Cheat Sheet",slug:"/linux-cmd-basic"},sidebar:"tutorialSidebar",previous:{title:"Markdown Cheat Sheet",permalink:"/de/cheat-sheets/markdown-cheat-sheet"},next:{title:"Bash F\xe4rbung",permalink:"/de/cheat-sheets/linux-bash-coloring"}},u={},m=[{value:"Datei-Befehle",id:"datei-befehle",level:2},{value:"Shortcuts",id:"shortcuts",level:2},{value:"Dateiberechtigungen",id:"dateiberechtigungen",level:2},{value:"Netzwerk/Download",id:"netzwerkdownload",level:2},{value:"Komprimierung",id:"komprimierung",level:2},{value:"Prozess-Management",id:"prozess-management",level:2},{value:"Examples",id:"examples",level:3},{value:"Suchen",id:"suchen",level:2},{value:"System Info",id:"system-info",level:2},{value:"Installation",id:"installation",level:2},{value:"Von der Quelle installieren",id:"von-der-quelle-installieren",level:2}],p={toc:m};function o(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux-cmd-cheat-sheet---standard"},"Linux CMD Cheat Sheet - Standard"),(0,a.kt)("h2",{id:"datei-befehle"},"Datei-Befehle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ls")," \u2013 Verzeichnisauflistung"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ls -al")," \u2013 formatierte Auflistung mit versteckten Dateien"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd dir")," - Verzeichnis in dir \xe4ndern"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd")," \u2013 Wechsel ins Stammverzeichnis"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pwd")," \u2013 aktuelles Verzeichnis anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir dir")," \u2013 Verzeichnis erstellen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm file")," \u2013 Datei l\xf6schen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm -r dir")," \u2013 Verzeichnis dir l\xf6schen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm -f file")," \u2013 Datei entfernen erzwingen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm -rf dir")," \u2013 Verzeichnis entfernen erzwingen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cp file1 file2")," \u2013 Datei1 nach Datei2 kopieren"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cp -r dir1 dir2")," \u2013 Kopiere dir1 nach dir2; erstelle dir2, wenn es nicht existiert"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mv file1 file2")," \u2013 Datei1 nach Datei2 umbenennen oder verschieben, wenn Datei2 ein bestehendes Verzeichnis ist, verschiebt Datei1 in das Verzeichnis Datei2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ln -s file link")," \u2013 symbolischen Link zu einer Datei erstellen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"touch file")," \u2013 Datei erstellen oder aktualisieren"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cat > file")," \u2013 platziert Standardeingabe in Datei"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"more file")," \u2013 Ausgabe des Inhalts der Datei"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"head file")," \u2013 Ausgabe der ersten 10 Zeilen der Datei"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tail file")," \u2013 Ausgabe der letzten 10 Zeilen der Datei"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tail -f file")," \u2013 den Inhalt der Datei ausgeben, w\xe4hrend sie w\xe4chst, beginnend mit den letzten 10 Zeilen")),(0,a.kt)("h2",{id:"shortcuts"},"Shortcuts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ctrl+C")," \u2013 h\xe4lt den aktuellen Befehl an"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ctrl+Z")," \u2013 stoppt den aktuellen Befehl, fortfahren mit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fg")," in den vordergrung od. ",(0,a.kt)("inlineCode",{parentName:"li"},"bg")," in den hintergrund"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ctrl+D")," \u2013 Abmelden von der aktuellen Sitzung, \xe4hnlich wie bei exit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ctrl+W")," \u2013 l\xf6scht ein Wort in der aktuellen Zeile"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ctrl+U")," \u2013 l\xf6scht die gesamte Zeile"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ctrl+R")," \u2013 tippen, um einen aktuellen Befehl aufzurufen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!!")," - Wiederholt den letzten Befehl"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exit")," \u2013 aus der aktuellen Sitzung abmelden")),(0,a.kt)("h2",{id:"dateiberechtigungen"},"Dateiberechtigungen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chmod octal file")," \u2013 \xe4ndert die Dateiberechtigungen auf oktal, die f\xfcr Benutzer, Gruppe und Welt getrennt gefunden werden k\xf6nnen, indem sie hinzugef\xfcgt werden:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"4 \u2013 lesen (r)"),(0,a.kt)("li",{parentName:"ul"},"2 \u2013 schreiben (w)"),(0,a.kt)("li",{parentName:"ul"},"1 \u2013 ausf\xfchren (x)")))),(0,a.kt)("h2",{id:"netzwerkdownload"},"Netzwerk/Download"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wget file")," \u2013 download datei"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wget -c file")," \u2013 einen angehaltenen Download fortsetzen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ping host")," \u2013 host pingen und Ergebnisse Ausgeben"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whois domain")," \u2013 Whois-Informationen f\xfcr Domain abrufen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dig domain")," \u2013 DNS-Informationen f\xfcr die Dom\xe4ne abrufen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dig -x host")," \u2013 Reverse-Lookup-Host")),(0,a.kt)("h2",{id:"komprimierung"},"Komprimierung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar cf file.tar files")," \u2013 erstellt ein tar Archiv namens file.tar"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar xf file.tar")," \u2013 Entpacken der Dateien aus file.tar"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar czf file.tar.gz files")," \u2013 ein tar mit Gzip-Kompression erstellen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar xzf file.tar.gz")," \u2013 ein tar mit Gzip entpacken"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar cjf file.tar.bz2")," \u2013 ein tar mit Bzip2-Kompression erstellen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar xjf file.tar.bz2")," \u2013 ein tar mit Bzip2 entpacken"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip file")," \u2013 komprimiert die Datei und benennt sie in file.gz um"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gzip -d file.gz")," \u2013 dekomprimiert file.gz zur\xfcck zu file")),(0,a.kt)("h2",{id:"prozess-management"},"Prozess-Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ps")," \u2013 Ihre derzeit aktiven Prozesse anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"top")," \u2013 alle laufenden Prozesse anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kill pid")," \u2013 prozess mit pid beenden"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"killall proc")," \u2013 alle Prozesse mit dem Namen proc * beenden"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bg")," \u2013 listet angehaltene oder im Hintergrund laufende Auftr\xe4ge auf; nimmt einen angehaltenen Auftrag im Hintergrund wieder auf"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fg")," \u2013 bringt den letzten Job in den Vordergrund"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fg n")," \u2013 r\xfcckt den Job n in den Vordergrund")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chmod 777")," \u2013 lesen, schreiben, ausf\xfchren f\xfcr alle"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chmod 755")," \u2013 rwx f\xfcr besitzer, rx f\xfcr gruppen and welt")),(0,a.kt)("h2",{id:"suchen"},"Suchen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grep pattern files")," \u2013 Suche nach Mustern in Dateien"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grep -r pattern dir")," \u2013 rekursiv nach Mustern im Verzeichnis suchen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"command | grep pattern")," \u2013 Suche nach einem Muster in der Ausgabe des Befehls"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locate file")," \u2013 alle Instanzen der Datei finden")),(0,a.kt)("h2",{id:"system-info"},"System Info"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date")," \u2013 das aktuelle Datum und die Uhrzeit anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cal")," \u2013 den Kalender f\xfcr diesen Monat anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uptime")," \u2013 aktuelle Betriebszeit anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"w")," \u2013 anzeigen, wer online ist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whoami")," \u2013 als wer du eingeloggt bist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"finger user")," \u2013 Informationen \xfcber den Benutzer anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uname -a")," \u2013 Kernel-Informationen anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cat /proc/cpuinfo")," \u2013 cpu information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cat /proc/meminfo")," \u2013 RAM information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"man command")," \u2013 zeige das Benutzerhandbuch f\xfcr den Befehl"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"df")," \u2013 Festplattennutzung anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"du")," \u2013 Verzeichnisspeicherverbrauch anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"free")," \u2013 RAM- und Swap-Nutzung anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whereis app")," \u2013 m\xf6gliche Standorte der Anwendung anzeigen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"which app")," \u2013 anzeigen, welche Anwendung standardm\xe4\xdfig ausgef\xfchrt wird")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dpkg -i pkg.deb")," \u2013 ein Paket installieren (Debian)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rpm -Uvh pkg.rpm")," \u2013 ein Paket installieren (RPM)")),(0,a.kt)("h2",{id:"von-der-quelle-installieren"},"Von der Quelle installieren"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./configure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"make")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"make install"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/riipandi/3097780"},"Basierend auf")))}o.isMDXComponent=!0}}]);