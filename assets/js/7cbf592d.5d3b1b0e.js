"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[7282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,p=d["".concat(i,".").concat(m)]||d[m]||f[m]||s;return a?n.createElement(p,o(o({ref:t},c),{},{components:a})):n.createElement(p,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),s=a(86010),o=a(72957),l=a(16550),i=a(75238),u=a(33609),c=a(92560);function f(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??f(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,u]=p({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),h=(()=>{const e=i??f;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var h=a(51048);const k="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(f(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},94921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var n=a(87462),r=(a(67294),a(3905)),s=a(73992),o=a(18679);const l={sidebar_position:1,sidebar_label:"s3fs-fuse",id:"s3fs-fuse",description:"s3fs allows Linux, macOS, and FreeBSD to mount an S3 bucket via FUSE. s3fs preserves the native object format for files, allowing use of other tools like AWS CLI.",slug:"/s3fs-fuse",last_update:{author:"Fabian",date:"12/20/2022"},tags:["Tool","s3fs","Linux"]},i="s3fs-fuse",u={unversionedId:"tools/s3fs-fuse",id:"tools/s3fs-fuse",title:"s3fs-fuse",description:"s3fs allows Linux, macOS, and FreeBSD to mount an S3 bucket via FUSE. s3fs preserves the native object format for files, allowing use of other tools like AWS CLI.",source:"@site/docs/tools/s3fs-fuse.mdx",sourceDirName:"tools",slug:"/s3fs-fuse",permalink:"/docs/s3fs-fuse",draft:!1,editUrl:"https://github.com/datenschmutz/docs/tree/main/docs/tools/s3fs-fuse.mdx",tags:[{label:"Tool",permalink:"/docs/tags/tool"},{label:"s3fs",permalink:"/docs/tags/s-3-fs"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1671494400,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"s3fs-fuse",id:"s3fs-fuse",description:"s3fs allows Linux, macOS, and FreeBSD to mount an S3 bucket via FUSE. s3fs preserves the native object format for files, allowing use of other tools like AWS CLI.",slug:"/s3fs-fuse",last_update:{author:"Fabian",date:"12/20/2022"},tags:["Tool","s3fs","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/docs/category/tools"},next:{title:"Cron - Cronjobs",permalink:"/docs/cron"}},c={},f=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Limitations",id:"limitations",level:2}],d={toc:f};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3fs-fuse"},"s3fs-fuse"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse")," is a FUSE (File System in Userspace) filesystem that allows you to mount an S3 bucket as a local filesystem. It is written in C++ and uses the libfuse library to communicate with the Linux kernel and interact with the filesystem."),(0,r.kt)("p",null,"s3fs can be used to access S3 buckets in a way that is similar to how you would access a local filesystem. You can use standard Linux tools, such as ls, cp, mv, and rm, to manage the files in your S3 bucket. You can also use s3fs to mount an S3 bucket as a read-only filesystem or to create a new bucket."),(0,r.kt)("p",null,"s3fs is useful for a variety of use cases, including backup and recovery, data analysis, and media streaming. It is especially useful for accessing S3 buckets from servers or other environments where the AWS SDKs are not available or where it is not practical to use the AWS CLI."),(0,r.kt)("admonition",{title:"s3fs-fuse platform install guide",type:"tip"},(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"Check ",(0,r.kt)("a",{href:"#Installation"},(0,r.kt)("code",null,"installation"))," for instructions."),(0,r.kt)(o.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},"Please follow the installation instruction like described on ",(0,r.kt)("a",{href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse GitHub"),"."),(0,r.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},"Please follow the installation instruction like described on ",(0,r.kt)("a",{href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse GitHub"),"."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In case of Debian / Ubuntu system please perform following action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install s3fs\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To access the actual guide how to mount a bucket with s3fs-fuse ",(0,r.kt)("a",{parentName:"p",href:"./mount-s3-storage"},(0,r.kt)("strong",{parentName:"a"},"click here")),"!")),(0,r.kt)("h2",{id:"features"},"Features",(0,r.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"large subset of POSIX including reading/writing files, directories, symlinks, mode, uid/gid, and extended attributes"),(0,r.kt)("li",{parentName:"ul"},"compatible with Amazon S3, and other S3-based object stores"),(0,r.kt)("li",{parentName:"ul"},"allows random writes and appends"),(0,r.kt)("li",{parentName:"ul"},"large files via multi-part upload"),(0,r.kt)("li",{parentName:"ul"},"renames via server-side copy"),(0,r.kt)("li",{parentName:"ul"},"optional server-side encryption"),(0,r.kt)("li",{parentName:"ul"},"data integrity via MD5 hashes"),(0,r.kt)("li",{parentName:"ul"},"in-memory metadata caching"),(0,r.kt)("li",{parentName:"ul"},"local disk data caching"),(0,r.kt)("li",{parentName:"ul"},"user-specified regions, including Amazon GovCloud"),(0,r.kt)("li",{parentName:"ul"},"authenticate via v2 or v4 signatures")),(0,r.kt)("h2",{id:"limitations"},"Limitations",(0,r.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"*random writes or appends to files require rewriting the entire object, optimized with multi-part upload copy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"metadata operations such as listing directories have poor performance due to network latency"),(0,r.kt)("li",{parentName:"ul"},"non-AWS providers may have eventual consistency so reads can temporarily yield stale data (AWS offers read-after-write consistency since Dec 2020)"),(0,r.kt)("li",{parentName:"ul"},"no atomic renames of files or directories"),(0,r.kt)("li",{parentName:"ul"},"no coordination between multiple clients mounting the same bucket"),(0,r.kt)("li",{parentName:"ul"},"no hard link"),(0,r.kt)("li",{parentName:"ul"},"inotify detects only local modifications, not external ones by other clients or tools")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"From s3fs-fuse GitHub - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse#limitations"},"Link"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);