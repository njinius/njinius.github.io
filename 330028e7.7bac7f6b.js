(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(138)),o={id:"yaml-1",slug:"yaml-basics",title:"Syntax",description:"YAML Tutorial - Basics"},s={unversionedId:"tutorials/text-tutorials/software/yaml/yaml-1",id:"tutorials/text-tutorials/software/yaml/yaml-1",isDocsHomePage:!1,title:"Syntax",description:"YAML Tutorial - Basics",source:"@site/docs/tutorials/text-tutorials/software/yaml/yaml-1.md",slug:"/tutorials/text-tutorials/software/yaml/yaml-basics",permalink:"/docs/tutorials/text-tutorials/software/yaml/yaml-basics",version:"current",sidebar:"textTutorialItems",previous:{title:"Introduction",permalink:"/docs/tutorials/text-tutorials/software/github/github-actions-basics"},next:{title:"Data Types",permalink:"/docs/tutorials/text-tutorials/software/yaml/yaml-data-types"}},c=[{value:"Basic Syntax",id:"basic-syntax",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"basic-syntax"},"Basic Syntax"),Object(i.b)("p",null,"This section covers the syntax of a YAML file. Let us take a look and dissect the following YAML file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"    ---\n    name: \u201cJohn Doe\u201d\n    age: 39\n    active: true\n    friends:\n        - Bob\n        - Jim\n        - Tim\n    shopping-list:\n        beers: 5\n        fruits:\n            apples: 3\n            oranges: 2\n")),Object(i.b)("p",null,"The three dashes at the start of the code snippet above indicate the start of a new file. Parsers generally\nrecognise the dashes as the beginning of a new file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\n")),Object(i.b)("p",null,"Next, we see a common YAML construct, a key-value pair where name is the key, and John Doe is the associated value."),Object(i.b)("p",null,"YAML can support several data types. In this example, the first three key-value pairs have different data types. The\nname key has a string for a value. The age key has an integer for the value, and the active key has an associated\nBoolean value."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": Strings can be enclosed in single or double quotes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"    name: \u201cJohn Doe\u201d\n    age: 39\n    active: true\n")),Object(i.b)("p",null,"The next item, friends, is an array containing three elements, each indented and denoted by a dash. Indentations are how\nYAML denotes nesting. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": Indentations must be made up of even spaces."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"    friends:\n        - Bob\n        - Jim\n        - Tim\n")),Object(i.b)("p",null,"Next, we see another item, shopping-list, containing additional items within it, indicated by the indentations.\nThis item can be viewed as a dictionary containing an integer and another dictionary."),Object(i.b)("p",null,"The dictionary named fruits within the shopping-list item contains two integer key-value pairs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"    shopping-list:\n        beers: 5\n        fruits:\n            apples: 3\n            oranges: 2\n")))}u.isMDXComponent=!0}}]);