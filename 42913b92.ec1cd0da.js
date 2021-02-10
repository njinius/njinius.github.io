(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),h=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=h(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),m=o,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.a.createElement(g,l(l({ref:t},c),{},{components:n})):r.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var o=n(2),r=n(6),a=(n(0),n(135)),i={slug:"hello-world",title:"You Had Me at Hello World",author:"Banzi Kubheka",author_title:"Junior Software Developer",author_url:"https://github.com/kubzie17",author_image_url:"https://ca.slack-edge.com/THSA80FJA-UJY2VKKCL-4ab043f0486b-512",summary:"A story about my transition from a career in Electrical and Electronic Engineering to Software Development",tags:["programming","career change"]},l={permalink:"/blog/hello-world",source:"@site/blog/2020-10-24-hello wold.md",description:"From a very young age, it was clear that my mind was one of an inquisitive and naturally curious engineer. What kind of",date:"2020-10-24T00:00:00.000Z",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"career change",permalink:"/blog/tags/career-change"}],title:"You Had Me at Hello World",readingTime:3.455,truncated:!0,prevItem:{title:"Deploy Flask application(s) to Apache Web Server (Windows)",permalink:"/blog/flask-python-application-deploy-to-apache-web-server"},nextItem:{title:"New Boy in Town",permalink:"/blog/new-boy-in-town"}},s=[],c={rightToc:s};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"From a very young age, it was clear that my mind was one of an inquisitive and naturally curious engineer. What kind of\nengineer? It was yet to be seen.\nFrom building a doghouse from wood pallets, it looked to be Civil, to taking apart a radio and PS2 console, it looked to\nbe electronics and that seemed to be the theme throughout high school and college with my highest grades coming from the\nsubject Design Technology: Electronics."),Object(a.b)("p",null,'This theme carried on to university where I studied Electronics. For the longest of times, it seemed I had found my\npassion, what I\'m good at. That was until the Computer Modelling software module, where I had my first exposure to\nprogramming and wrote my first script, the well-known "Hello World", that this Electronic engineer "destiny" started to\nbe in doubt. The weeks and months following I felt myself falling more and more in love with software. I had always\nloved electronics, but with the possibilities in software, software just became that much more attractive to me.'),Object(a.b)("p",null,"I was, however, reluctant to just let go of electronics, there was history there and couldn't just turn my back on it. "),Object(a.b)("p",null,"I went down the route of integrating the two together, using software to control hardware components, and even\ncommunicate with such components with feedback loops and even sensors. In fact, my dissertation was a home security\nsystem which was programmed to control and communicate with REED switches, IR sensors, motors, magnetic door locks and\neven utilized RFID cards and sensors. So, to me at the time this was something amazing."),Object(a.b)("p",null,"However, this project seemed to be the nail in the coffin for my relationship with electronics, but a wedding ring for\nmy marriage with software. For all my experience with software, it had only been c++ and c# using Arduino Boards. For\nthe Home Security system, I used a Raspberry Pi board which uses Python language. I found python even easier than c++\nand c# which then sealed the deal for me and software."),Object(a.b)("p",null,"The love of electronics however doesn't die easy, not without a fight. I decided to go do a masters' degree in\nmechatronics, which not only did it mix electronics and software, it then included mechanics, which all in all is a\nniche engineering field. Yet again, the mistress, software, showed up again even more irresistible than ever.\nThe majority of projects seemed to still include a significant amount of software in it and my love and proficiency in\nit grew while the love for pure electronics faded away."),Object(a.b)("p",null,"Electronics though wasn't giving up just yet. Upon graduating, I secured a graduate job as Signalling Engineer in the\nrailways following which I then became a Project Engineer. All in all, it was about 4 years in the railway sector in\nsignalling, which is essentially electronics and electrical heavy in railways with no aspect of software or coding\nat all. So, for a while, it seemed the love affair with Software was over, professionally at least as I still had an\nArduino board and Raspberry Pi board which I still played with in my spare time."),Object(a.b)("p",null,"Nothing, however, could quell the burning desire for software and in 2019, it could not be contained anymore, and I\nleft a position where I was comfortable and industry I very knowledgeable. I took a shot in the dark and took on a role\nas a Junior Software Developer and ten months in, I regret nothing. Yes, it's tough, software as a hobby and software as\na job and career are two different things but I wouldn't trade it for the world. Each challenge I face, I always come\nout the other side wiser than before."),Object(a.b)("p",null,"Who knows what the future holds, maybe electronics is done yet. I will be honest and say I do miss it at times.\nI have hopes that I can bring my two loves together in the aerospace industry, programming the code for flight systems,\nwho knows, maybe mechanics might then join the picture and I can finally use my master's degree to the fullest\nand be a Mechatronic Engineer."))}h.isMDXComponent=!0}}]);