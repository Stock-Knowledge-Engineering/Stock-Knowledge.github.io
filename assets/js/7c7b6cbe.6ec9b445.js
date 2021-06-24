(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=d(r),u=n,s=l["".concat(i,".").concat(u)]||l[u]||O[u]||c;return r?a.a.createElement(s,b(b({ref:t},p),{},{components:r})):a.a.createElement(s,b({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),c=(r(0),r(127)),i={title:"Edit Topic"},b={unversionedId:"API List v2.0/3",id:"API List v2.0/3",isDocsHomePage:!1,title:"Edit Topic",description:"Description",source:"@site/docs/API List v2.0/3.md",sourceDirName:"API List v2.0",slug:"/API List v2.0/3",permalink:"/docs/API List v2.0/3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API List v2.0/3.md",version:"current",frontMatter:{title:"Edit Topic"},sidebar:"tutorialSidebar",previous:{title:"Add Topic",permalink:"/docs/API List v2.0/2"},next:{title:"Delete Topic",permalink:"/docs/API List v2.0/4"}},o=[{value:"Description",id:"description",children:[]},{value:"Request",id:"request",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Response",id:"response",children:[]}],p={toc:o};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"Edit topic"),Object(c.b)("h3",{id:"request"},"Request"),Object(c.b)("h4",{id:"method"},"Method"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"POST\n")),Object(c.b)("h4",{id:"endpoint"},"Endpoint"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"/topics/edit")),Object(c.b)("h4",{id:"header"},"Header"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Content-Type: multipart/form-data")),Object(c.b)("h4",{id:"body"},"Body"),Object(c.b)("h5",{id:"form-data"},"Form Data"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Key"),Object(c.b)("th",{parentName:"tr",align:"center"},"Value"),Object(c.b)("th",{parentName:"tr",align:"center"},"Nullable"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ID"),Object(c.b)("td",{parentName:"tr",align:"center"},"int"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"title"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"color"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"description"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"icon"),Object(c.b)("td",{parentName:"tr",align:"center"},"file"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"subject"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"type"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"mode"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"userid"),Object(c.b)("td",{parentName:"tr",align:"center"},"int"),Object(c.b)("td",{parentName:"tr",align:"center"},"NO")))),Object(c.b)("h3",{id:"condition"},"Condition"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"N/A\n")),Object(c.b)("h3",{id:"response"},"Response"),Object(c.b)("h4",{id:"success"},"Success"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"TRUE\n")),Object(c.b)("h4",{id:"fail"},"Fail"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"N/A\n")))}d.isMDXComponent=!0}}]);