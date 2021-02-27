(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{104:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(140)),i={id:"github-actions-3",slug:"github-actions-basics-3",title:"GitHub Actions - Part 3",description:"GitHub Actions - Basics Part 3"},c={unversionedId:"tutorials/text-tutorials/software/github/github-actions-3",id:"tutorials/text-tutorials/software/github/github-actions-3",isDocsHomePage:!1,title:"GitHub Actions - Part 3",description:"GitHub Actions - Basics Part 3",source:"@site/docs/tutorials/text-tutorials/software/github/github-actions-3.md",slug:"/tutorials/text-tutorials/software/github/github-actions-basics-3",permalink:"/docs/tutorials/text-tutorials/software/github/github-actions-basics-3",version:"current",sidebar:"textTutorialItems",previous:{title:"GitHub Actions - Part 2",permalink:"/docs/tutorials/text-tutorials/software/github/github-actions-basics-2"},next:{title:"Syntax",permalink:"/docs/tutorials/text-tutorials/software/yaml/yaml-basics"}},s=[{value:"Creating a workflow",id:"creating-a-workflow",children:[]},{value:"Viewing results and logs",id:"viewing-results-and-logs",children:[]}],l={rightToc:s};function u(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"creating-a-workflow"},"Creating a workflow"),Object(a.b)("p",null,"Create a YAML file within a '.github/workflows' directory. In this example, we create a YAML file called deploy.yml"),Object(a.b)("h2",{id:"viewing-results-and-logs"},"Viewing results and logs"),Object(a.b)("p",null,"To view the results, click on the Actions tab"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PUT IMAGE HERE\n")),Object(a.b)("p",null,"By default, all workflow runs are displayed. Click on the workflow run you wish to view logs or results for."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PUT IMAGE HERE\n")),Object(a.b)("p",null,"All Jobs and statuses for each job can be viewed on the left-hand side. Select the job you wish to inspect closer.\nA window displaying all the log information for the job appears. You can also use the log search to search\nthrough the logs."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PUT IMAGE HERE\n")))}u.isMDXComponent=!0},140:function(t,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=o.a.createContext({}),u=function(t){var e=o.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},b=function(t){var e=u(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return r?o.a.createElement(d,c(c({ref:e},l),{},{components:r})):o.a.createElement(d,c({ref:e},l))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);