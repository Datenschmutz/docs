"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[1871],{4137:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>c});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(i),c=n,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||l;return i?a.createElement(k,r(r({ref:t},s),{},{components:i})):a.createElement(k,r({ref:t},s))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,r=new Array(l);r[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2103:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=i(7462),n=(i(7294),i(4137));const l={sidebar_position:3,sidebar_label:"Linux Cheat Sheet - Basic",id:"linux-cmd-basic",description:"Linux CMD Cheat Sheet",slug:"/linux-cmd-basic",tags:["Cheat Sheet","Linux","Commands","Shell","Bash"]},r="Linux CMD Cheat Sheet - Basic",o={unversionedId:"linux-cmd-basic",id:"linux-cmd-basic",title:"Linux CMD Cheat Sheet - Basic",description:"Linux CMD Cheat Sheet",source:"@site/cheat-sheets/linux-cmd-basic.md",sourceDirName:".",slug:"/linux-cmd-basic",permalink:"/cheat-sheets/linux-cmd-basic",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/cheat-sheets/linux-cmd-basic.md",tags:[{label:"Cheat Sheet",permalink:"/cheat-sheets/tags/cheat-sheet"},{label:"Linux",permalink:"/cheat-sheets/tags/linux"},{label:"Commands",permalink:"/cheat-sheets/tags/commands"},{label:"Shell",permalink:"/cheat-sheets/tags/shell"},{label:"Bash",permalink:"/cheat-sheets/tags/bash"}],version:"current",lastUpdatedBy:"Datenschmutz",lastUpdatedAt:1675370329,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Linux Cheat Sheet - Basic",id:"linux-cmd-basic",description:"Linux CMD Cheat Sheet",slug:"/linux-cmd-basic",tags:["Cheat Sheet","Linux","Commands","Shell","Bash"]},sidebar:"tutorialSidebar",previous:{title:"Markdown Cheat Sheet",permalink:"/cheat-sheets/markdown-cheat-sheet"},next:{title:"Bash Coloring",permalink:"/cheat-sheets/linux-bash-coloring"}},m={},p=[{value:"File Commands",id:"file-commands",level:2},{value:"Shortcuts",id:"shortcuts",level:2},{value:"File Permissions",id:"file-permissions",level:2},{value:"Network/Download",id:"networkdownload",level:2},{value:"Compression",id:"compression",level:2},{value:"Process Management",id:"process-management",level:2},{value:"Examples",id:"examples",level:3},{value:"Searching",id:"searching",level:2},{value:"System Info",id:"system-info",level:2},{value:"Installation",id:"installation",level:2},{value:"Install from source",id:"install-from-source",level:2}],s={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"linux-cmd-cheat-sheet---basic"},"Linux CMD Cheat Sheet - Basic"),(0,n.kt)("h2",{id:"file-commands"},"File Commands"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ls")," \u2013 directory listing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ls -al")," \u2013 formatted listing with hidden files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cd dir")," - change directory to dir"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cd")," \u2013 change to home"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pwd")," \u2013 show current directory"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mkdir dir")," \u2013 create a directory dir"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rm file")," \u2013 delete file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rm -r dir")," \u2013 delete directory dir"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rm -f file")," \u2013 force remove file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rm -rf dir")," \u2013 force remove directory dir *"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp file1 file2")," \u2013 copy file1 to file2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -r dir1 dir2")," \u2013 copy dir1 to dir2; create dir2 if it doesn't exist"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mv file1 file2")," \u2013 rename or move file1 to file2 if file2 is an existing directory, moves file1 into directory file2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ln -s file link")," \u2013 create symbolic link link to file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"touch file")," \u2013 create or update file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cat > file")," \u2013 places standard input into file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"more file")," \u2013 output the contents of file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"head file")," \u2013 output the first 10 lines of file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tail file")," \u2013 output the last 10 lines of file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tail -f file")," \u2013 output the contents of file as it grows, starting with the last 10 lines")),(0,n.kt)("h2",{id:"shortcuts"},"Shortcuts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ctrl+C")," \u2013 halts the current command"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ctrl+Z")," \u2013 stops the current command, resume with"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fg")," in the foreground or ",(0,n.kt)("inlineCode",{parentName:"li"},"bg")," in the background"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ctrl+D")," \u2013 log out of current session, similar to exit"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ctrl+W")," \u2013 erases one word in the current line"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ctrl+U")," \u2013 erases the whole line"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ctrl+R")," \u2013 type to bring up a recent command"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"!!")," - repeats the last command"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"exit")," \u2013 log out of current session")),(0,n.kt)("h2",{id:"file-permissions"},"File Permissions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chmod octal file")," \u2013 change the permissions of file to octal, which can be found separately for user, group, and world by adding:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"4 \u2013 read (r)"),(0,n.kt)("li",{parentName:"ul"},"2 \u2013 write (w)"),(0,n.kt)("li",{parentName:"ul"},"1 \u2013 execute (x)")))),(0,n.kt)("h2",{id:"networkdownload"},"Network/Download"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wget file")," \u2013 download file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wget -c file")," \u2013 continue a stopped download"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ping host")," \u2013 ping host and output results"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"whois domain")," \u2013 get whois information for domain"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dig domain")," \u2013 get DNS information for domain"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dig -x host")," \u2013 reverse lookup host")),(0,n.kt)("h2",{id:"compression"},"Compression"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tar cf file.tar files")," \u2013 create a tar named file.tar containing files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tar xf file.tar")," \u2013 extract the files from file.tar"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tar czf file.tar.gz files")," \u2013 create a tar with Gzip compression"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tar xzf file.tar.gz")," \u2013 extract a tar using Gzip"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tar cjf file.tar.bz2")," \u2013 create a tar with Bzip2 compression"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tar xjf file.tar.bz2")," \u2013 extract a tar using Bzip2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"gzip file")," \u2013 compresses file and renames it to file.gz"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"gzip -d file.gz")," \u2013 decompresses file.gz back to file")),(0,n.kt)("h2",{id:"process-management"},"Process Management"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ps")," \u2013 display your currently active processes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"top")," \u2013 display all running processes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kill pid")," \u2013 kill process id pid"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"killall proc")," \u2013 kill all processes named proc *"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bg")," \u2013 lists stopped or background jobs; resume a stopped job in the background"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fg")," \u2013 brings the most recent job to foreground"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fg n")," \u2013 brings job n to the foreground")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chmod 777")," \u2013 read, write, execute for all"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chmod 755")," \u2013 rwx for owner, rx for group and world")),(0,n.kt)("h2",{id:"searching"},"Searching"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grep pattern files")," \u2013 search for pattern in files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grep -r pattern dir")," \u2013 search recursively for pattern in dir"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"command | grep pattern")," \u2013 search for pattern in the output of command"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"locate file")," \u2013 find all instances of file")),(0,n.kt)("h2",{id:"system-info"},"System Info"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," \u2013 show the current date and time"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cal")," \u2013 show this month's calendar"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uptime")," \u2013 show current uptime"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"w")," \u2013 display who is online"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"whoami")," \u2013 who you are logged in as"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"finger user")," \u2013 display information about user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uname -a")," \u2013 show kernel information"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cat /proc/cpuinfo")," \u2013 cpu information"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cat /proc/meminfo")," \u2013 memory information"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"man command")," \u2013 show the manual for command"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"df")," \u2013 show disk usage"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"du")," \u2013 show directory space usage"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"free")," \u2013 show memory and swap usage"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"whereis app")," \u2013 show possible locations of app"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"which app")," \u2013 show which app will be run by default")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dpkg -i pkg.deb")," \u2013 install a package (Debian)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rpm -Uvh pkg.rpm")," \u2013 install a package (RPM)")),(0,n.kt)("h2",{id:"install-from-source"},"Install from source"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"./configure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"make")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"make install"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/riipandi/3097780"},"based on")))}d.isMDXComponent=!0}}]);