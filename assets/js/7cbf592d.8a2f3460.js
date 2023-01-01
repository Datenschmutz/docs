"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[7282],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),u=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,d=m["".concat(i,".").concat(p)]||m[p]||f[p]||r;return a?s.createElement(d,o(o({ref:t},c),{},{components:a})):s.createElement(d,o({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},425:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(7294),n=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},4259:(e,t,a)=>{a.d(t,{Z:()=>p});var s=a(7462),n=a(7294),r=a(6010),o=a(1048),l=a(3609),i=a(1943),u=a(2957);const c="tabList__CuJ",f="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:p,groupId:d,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??h.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[N,S]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&S(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),s=k[a].value;s!==N&&(x(t),S(s),null!=d&&w(d,String(s)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},o,{className:(0,r.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,o.Z)();return n.createElement(m,(0,s.Z)({key:String(t)},e))}},4921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var s=a(7462),n=(a(7294),a(4137)),r=a(4259),o=a(425);const l={sidebar_position:1,sidebar_label:"s3fs-fuse",id:"s3fs-fuse",description:"s3fs allows Linux, macOS, and FreeBSD to mount an S3 bucket via FUSE. s3fs preserves the native object format for files, allowing use of other tools like AWS CLI.",slug:"/s3fs-fuse",last_update:{author:"Fabian",date:"12/20/2022"},tags:["Tool","s3fs","Linux"]},i="s3fs-fuse",u={unversionedId:"tools/s3fs-fuse",id:"tools/s3fs-fuse",title:"s3fs-fuse",description:"s3fs allows Linux, macOS, and FreeBSD to mount an S3 bucket via FUSE. s3fs preserves the native object format for files, allowing use of other tools like AWS CLI.",source:"@site/docs/tools/s3fs-fuse.mdx",sourceDirName:"tools",slug:"/s3fs-fuse",permalink:"/docs/s3fs-fuse",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/docs/tools/s3fs-fuse.mdx",tags:[{label:"Tool",permalink:"/docs/tags/tool"},{label:"s3fs",permalink:"/docs/tags/s-3-fs"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1671494400,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"s3fs-fuse",id:"s3fs-fuse",description:"s3fs allows Linux, macOS, and FreeBSD to mount an S3 bucket via FUSE. s3fs preserves the native object format for files, allowing use of other tools like AWS CLI.",slug:"/s3fs-fuse",last_update:{author:"Fabian",date:"12/20/2022"},tags:["Tool","s3fs","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/docs/category/tools"},next:{title:"Cron - Cronjobs",permalink:"/docs/cron"}},c={},f=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Limitations",id:"limitations",level:2}],m={toc:f};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"s3fs-fuse"},"s3fs-fuse"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse")," is a FUSE (File System in Userspace) filesystem that allows you to mount an S3 bucket as a local filesystem. It is written in C++ and uses the libfuse library to communicate with the Linux kernel and interact with the filesystem."),(0,n.kt)("p",null,"s3fs can be used to access S3 buckets in a way that is similar to how you would access a local filesystem. You can use standard Linux tools, such as ls, cp, mv, and rm, to manage the files in your S3 bucket. You can also use s3fs to mount an S3 bucket as a read-only filesystem or to create a new bucket."),(0,n.kt)("p",null,"s3fs is useful for a variety of use cases, including backup and recovery, data analysis, and media streaming. It is especially useful for accessing S3 buckets from servers or other environments where the AWS SDKs are not available or where it is not practical to use the AWS CLI."),(0,n.kt)("admonition",{title:"s3fs-fuse platform install guide",type:"tip"},(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"Check ",(0,n.kt)("a",{href:"#Installation"},(0,n.kt)("code",null,"installation"))," for instructions."),(0,n.kt)(o.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},"Please follow the installation instruction like described on ",(0,n.kt)("a",{href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse GitHub"),"."),(0,n.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},"Please follow the installation instruction like described on ",(0,n.kt)("a",{href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse GitHub"),"."))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"In case of Debian / Ubuntu system please perform following action:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install s3fs\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To access the actual guide how to mount a bucket with s3fs-fuse ",(0,n.kt)("a",{parentName:"p",href:"./mount-s3-storage"},(0,n.kt)("strong",{parentName:"a"},"click here")),"!")),(0,n.kt)("h2",{id:"features"},"Features",(0,n.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"large subset of POSIX including reading/writing files, directories, symlinks, mode, uid/gid, and extended attributes"),(0,n.kt)("li",{parentName:"ul"},"compatible with Amazon S3, and other S3-based object stores"),(0,n.kt)("li",{parentName:"ul"},"allows random writes and appends"),(0,n.kt)("li",{parentName:"ul"},"large files via multi-part upload"),(0,n.kt)("li",{parentName:"ul"},"renames via server-side copy"),(0,n.kt)("li",{parentName:"ul"},"optional server-side encryption"),(0,n.kt)("li",{parentName:"ul"},"data integrity via MD5 hashes"),(0,n.kt)("li",{parentName:"ul"},"in-memory metadata caching"),(0,n.kt)("li",{parentName:"ul"},"local disk data caching"),(0,n.kt)("li",{parentName:"ul"},"user-specified regions, including Amazon GovCloud"),(0,n.kt)("li",{parentName:"ul"},"authenticate via v2 or v4 signatures")),(0,n.kt)("h2",{id:"limitations"},"Limitations",(0,n.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,n.kt)("p",null,"*random writes or appends to files require rewriting the entire object, optimized with multi-part upload copy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"metadata operations such as listing directories have poor performance due to network latency"),(0,n.kt)("li",{parentName:"ul"},"non-AWS providers may have eventual consistency so reads can temporarily yield stale data (AWS offers read-after-write consistency since Dec 2020)"),(0,n.kt)("li",{parentName:"ul"},"no atomic renames of files or directories"),(0,n.kt)("li",{parentName:"ul"},"no coordination between multiple clients mounting the same bucket"),(0,n.kt)("li",{parentName:"ul"},"no hard link"),(0,n.kt)("li",{parentName:"ul"},"inotify detects only local modifications, not external ones by other clients or tools")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"From s3fs-fuse GitHub - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse#limitations"},"Link"),(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);