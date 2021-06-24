(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?o.a.createElement(f,a(a({ref:t},s),{},{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(127)),c=["components"],a={title:"Subjects"},u={unversionedId:"API List v2.0/5",id:"API List v2.0/5",isDocsHomePage:!1,title:"Subjects",description:"Description",source:"@site/docs/API List v2.0/5.md",sourceDirName:"API List v2.0",slug:"/API List v2.0/5",permalink:"/docs/API List v2.0/5",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API List v2.0/5.md",version:"current",frontMatter:{title:"Subjects"},sidebar:"tutorialSidebar",previous:{title:"Delete Topic",permalink:"/docs/API List v2.0/4"},next:{title:"Add Subject",permalink:"/docs/API List v2.0/6"}},s=[{value:"Description",id:"description",children:[]},{value:"Request",id:"request",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Response",id:"response",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"Return list of subjects"),Object(i.b)("h3",{id:"request"},"Request"),Object(i.b)("h4",{id:"method"},"Method"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GET\n")),Object(i.b)("h4",{id:"endpoint"},"Endpoint"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"/subjects")),Object(i.b)("h4",{id:"header"},"Header"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(i.b)("h4",{id:"body"},"Body"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"filter by title\ntitle={title}")),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"Query result must not be null or greater than 0"),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("h4",{id:"success"},"Success"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," {\n sucess: true,\n content: [\n    {\n    id: int,\n    title: string,\n    description: string,\n    icon:string,\n    color: string,\n    createdtime: datetime, \n    modifiedtime: datetime\n    }\n    ]\n    }\n")),Object(i.b)("h4",{id:"fail"},"Fail"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{sucess: false}\n")))}b.isMDXComponent=!0}}]);