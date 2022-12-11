"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[8200],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=o(a),u=l,h=p["".concat(d,".").concat(u)]||p[u]||k[u]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(7462),l=(a(7294),a(4137));const r={sidebar_position:2,sidebar_label:"Markdown Cheat Sheet",id:"markdown-cheat-sheet",description:"Markdown Cheat Sheet",slug:"/markdown-cheat-sheet"},i="Markdown Cheat Sheet",s={unversionedId:"markdown-cheat-sheet",id:"markdown-cheat-sheet",title:"Markdown Cheat Sheet",description:"Markdown Cheat Sheet",source:"@site/cheat-sheets/markdown.md",sourceDirName:".",slug:"/markdown-cheat-sheet",permalink:"/cheat-sheets/markdown-cheat-sheet",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/cheat-sheets/markdown.md",tags:[],version:"current",lastUpdatedBy:"Datenschmutz",lastUpdatedAt:1670766559,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Markdown Cheat Sheet",id:"markdown-cheat-sheet",description:"Markdown Cheat Sheet",slug:"/markdown-cheat-sheet"},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/cheat-sheets/intro"},next:{title:"Linux Cheat Sheet - Basic",permalink:"/cheat-sheets/linux-cmd-basic"}},d={},o=[{value:"Headers",id:"headers",level:2},{value:"This is an &lt;h2&gt; tag",id:"this-is-an-h2-tag",level:2},{value:"This is an &lt;h3&gt; tag",id:"this-is-an-h3-tag",level:3},{value:"This is an &lt;h4&gt; tag",id:"this-is-an-h4-tag",level:4},{value:"This is an &lt;h5&gt; tag",id:"this-is-an-h5-tag",level:5},{value:"This is an &lt;h6&gt; tag",id:"this-is-an-h6-tag",level:6},{value:"Comment",id:"comment",level:2},{value:"Emphasis",id:"emphasis",level:2},{value:"Lists",id:"lists",level:2},{value:"Unordered",id:"unordered",level:3},{value:"Ordered",id:"ordered",level:3},{value:"Images",id:"images",level:2},{value:"Links",id:"links",level:2},{value:"Blockquotes",id:"blockquotes",level:2},{value:"Horizontal Rules",id:"horizontal-rules",level:2},{value:"Inline code",id:"inline-code",level:2},{value:"Fenced Code Blocks",id:"fenced-code-blocks",level:2},{value:"No highlighting",id:"no-highlighting",level:3},{value:"Highlighting",id:"highlighting",level:3},{value:"Tabels",id:"tabels",level:2},{value:"Blackslash escape",id:"blackslash-escape",level:2},{value:"Task Lists",id:"task-lists",level:2},{value:"Inline HTML",id:"inline-html",level:2},{value:"Emoji",id:"emoji",level:2}],m={toc:o};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"markdown-cheat-sheet"},"Markdown Cheat Sheet"),(0,l.kt)("p",null,"To learn more about markdown visit ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/getting-started/#whats-markdown"},"www.markdownguide.org")),(0,l.kt)("h2",{id:"headers"},"Headers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"# This is an <h1> tag\n  \n## This is an <h2> tag \n\n### This is an <h3> tag   \n  \n#### This is an <h4> tag \n  \n##### This is an <h5> tag\n  \n###### This is an <h6> tag\n")),(0,l.kt)("h1",{id:"this-is-an-h1-tag"},"This is an \\<h1",">"," tag"),(0,l.kt)("h2",{id:"this-is-an-h2-tag"},"This is an \\<h2",">"," tag"),(0,l.kt)("h3",{id:"this-is-an-h3-tag"},"This is an \\<h3",">"," tag"),(0,l.kt)("h4",{id:"this-is-an-h4-tag"},"This is an \\<h4",">"," tag"),(0,l.kt)("h5",{id:"this-is-an-h5-tag"},"This is an \\<h5",">"," tag"),(0,l.kt)("h6",{id:"this-is-an-h6-tag"},"This is an \\<h6",">"," tag"),(0,l.kt)("h2",{id:"comment"},"Comment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"[//]: # (This is a non-visible comment)\n")),(0,l.kt)("h2",{id:"emphasis"},"Emphasis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"*This text will be italic*\n_This will also be italic_\n\n**This text will be bold**\n__This will also be bold__\n\n~~This text will be crossed out (strikethrough)~~ \n\n_You **can** combine them_\n\n***All this text is bold and italic***\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This text will be italic"),"\n",(0,l.kt)("em",{parentName:"p"},"This will also be italic")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This text will be bold"),"\n",(0,l.kt)("strong",{parentName:"p"},"This will also be bold")),(0,l.kt)("p",null,(0,l.kt)("del",{parentName:"p"},"This text will be crossed out (strikethrough)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"You ",(0,l.kt)("strong",{parentName:"em"},"can")," combine them")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"All this text is bold and italic"))),(0,l.kt)("h2",{id:"lists"},"Lists"),(0,l.kt)("h3",{id:"unordered"},"Unordered"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"* Item 1\n* Item 2\n  * Item 2a\n  * Item 2b\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Item 1"),(0,l.kt)("li",{parentName:"ul"},"Item 2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Item 2a"),(0,l.kt)("li",{parentName:"ul"},"Item 2b")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"- Item 1\n- Item 2\n  - Item 2a\n  - Item 2b\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Item 1"),(0,l.kt)("li",{parentName:"ul"},"Item 2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Item 2a"),(0,l.kt)("li",{parentName:"ul"},"Item 2b")))),(0,l.kt)("h3",{id:"ordered"},"Ordered"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"1. Item 1\n1. Item 2\n1. Item 3\n   1. Item 3a\n   1. Item 3b\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Item 1"),(0,l.kt)("li",{parentName:"ol"},"Item 2"),(0,l.kt)("li",{parentName:"ol"},"Item 3",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Item 3a"),(0,l.kt)("li",{parentName:"ol"},"Item 3b")))),(0,l.kt)("h2",{id:"images"},"Images"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"Format:  ![Alt Text](url)\nExample: ![Datenschmutz Logo](@site/static/img/dmz-logo-main-350x-border.png)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Datenschmutz Logo",src:a(8451).Z,width:"400",height:"100"})),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"https://docsdatenschmutz.dev - automatic!\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.datenschmutz.dev"},"https://docs.datenschmutz.dev")," - automatic!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"Format:  [Text](url)\nExample: [Docs](https://docs.datenschmutz.dev)\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.datenschmutz.dev"},"Docs")),(0,l.kt)("h2",{id:"blockquotes"},"Blockquotes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"> Life is like riding a bicycle.\n> To keep your balance, you must keep moving.\n\nAlbert Einstein\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Life is like riding a bicycle.\nTo keep your balance, you must keep moving.")),(0,l.kt)("p",null,"Albert Einstein"),(0,l.kt)("p",null,"Blockquotes can be nested."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"> Dorothy followed her through many of the beautiful rooms in her castle.\n>\n>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Dorothy followed her through many of the beautiful rooms in her castle."),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood."))),(0,l.kt)("h2",{id:"horizontal-rules"},"Horizontal Rules"),(0,l.kt)("p",null,"Horizontal rules can be created using three or more asterisks (","*","*","*","), dashes (","-","-","-","), or underscores (","_","_","_",") on a line by themselves."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"*** \n----\n______\n")),(0,l.kt)("hr",null),(0,l.kt)("hr",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"inline-code"},"Inline code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"I think you should use an `<addr>` element here instead.\n")),(0,l.kt)("p",null,"I think you should use an ",(0,l.kt)("inlineCode",{parentName:"p"},"<addr>")," element here instead."),(0,l.kt)("h2",{id:"fenced-code-blocks"},"Fenced Code Blocks"),(0,l.kt)("h3",{id:"no-highlighting"},"No highlighting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"```\nif (isAwesome){\n  return true\n}\n```\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"if (isAwesome) {\n  return true\n}\n")),(0,l.kt)("h3",{id:"highlighting"},"Highlighting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"```javascript \nif (isAwesome){\n  return true\n}\n```\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"if (isAwesome) {\n  return true\n}\n")),(0,l.kt)("h2",{id:"tabels"},"Tabels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"| First Header  | Second Header |\n| ------------- | ------------- |\n| Content Cell  | Content Cell  |\n| Content Cell  | Content Cell  |\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"First Header"),(0,l.kt)("th",{parentName:"tr",align:null},"Second Header"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"Content Cell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"Content Cell")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"| Left-aligned | Center-aligned | Right-aligned |\n| :---         |     :---:      |          ---: |\n| git status   | git status     | git status    |\n| git diff     | git diff       | git diff      |\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Left-aligned"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Center-aligned"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Right-aligned"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"git status"),(0,l.kt)("td",{parentName:"tr",align:"center"},"git status"),(0,l.kt)("td",{parentName:"tr",align:"right"},"git status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"git diff"),(0,l.kt)("td",{parentName:"tr",align:"center"},"git diff"),(0,l.kt)("td",{parentName:"tr",align:"right"},"git diff")))),(0,l.kt)("p",null,"Your Markdown does't have to be pretty. "),(0,l.kt)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (",(0,l.kt)("inlineCode",{parentName:"p"},"|"),") are optional, and you don't need to make the table columns line up prettily."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"Less | Pretty | Markdown \n--- | --- | ---\n1 | 2 | 3 \n*Still* | `renders` | **as expected**\n4 | 5 | 6\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Less"),(0,l.kt)("th",{parentName:"tr",align:null},"Pretty"),(0,l.kt)("th",{parentName:"tr",align:null},"Markdown"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Still")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"renders")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"as expected"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"6")))),(0,l.kt)("h2",{id:"blackslash-escape"},"Blackslash escape"),(0,l.kt)("p",null,"Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown\u2019s formating syntax."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backslash"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\\\")),(0,l.kt)("td",{parentName:"tr",align:null},"\\")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backtick"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\`")),(0,l.kt)("td",{parentName:"tr",align:null},"`")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"asterisk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\*")),(0,l.kt)("td",{parentName:"tr",align:null},"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"underscore"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\_")),(0,l.kt)("td",{parentName:"tr",align:null},"_")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"curly braces"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\{\\}")),(0,l.kt)("td",{parentName:"tr",align:null},"{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"square brackets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\[\\]")),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parentheses"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\(\\)")),(0,l.kt)("td",{parentName:"tr",align:null},"(",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash mark"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\#")),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plus sign"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\+")),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minus sign (hyphen)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\-")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dot"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\.")),(0,l.kt)("td",{parentName:"tr",align:null},".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclamation mark"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\!")),(0,l.kt)("td",{parentName:"tr",align:null},"!")))),(0,l.kt)("h2",{id:"task-lists"},"Task Lists"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- [x] this is a complete item \n- [ ] this is an incomplete it\n")),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","this is a complete item "),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","this is an incomplete it")),(0,l.kt)("h2",{id:"inline-html"},"Inline HTML"),(0,l.kt)("p",null,"Markdown also supports raw HTML."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<dl>\n  <dt>First Term</dt>\n  <dd>This is the definition of the first term.</dd>\n  <dt>Second Term</dt>\n  <dd>This is one definition of the second term. </dd>\n  <dd>This is another definition of the second term.</dd>\n</dl>\n")),(0,l.kt)("dl",null,(0,l.kt)("dt",null,"First Term"),(0,l.kt)("dd",null,"This is the definition of the first term."),(0,l.kt)("dt",null,"Second Term"),(0,l.kt)("dd",null,"This is one definition of the second term. "),(0,l.kt)("dd",null,"This is another definition of the second term.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>Markdown and HTML does *not* work **well**. Use <i>HTML</i> <b>tags</b> instead.</p>\n")),(0,l.kt)("p",null,"Markdown in HTML does *not* work **well**. Use ",(0,l.kt)("i",null,"HTML")," ",(0,l.kt)("b",null,"tags")," instead."),(0,l.kt)("h2",{id:"emoji"},"Emoji"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},":+1: :sparkles: :camel: :tada: :rocket:\n")),(0,l.kt)("p",null,"\ud83d\udc4d \u2728 \ud83d\udc2b \ud83c\udf89 \ud83d\ude80"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/Robert-96/048fddefc20e6860aeca6949a2443adf"},"Source")))}k.isMDXComponent=!0},8451:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dmz-logo-main-350x-border-69d264272527724a837edc73005fc849.png"}}]);