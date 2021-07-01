(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=r.a.createContext({}),c=function(e){var t=r.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,g=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(g,l(l({ref:t},h),{},{components:n})):r.a.createElement(g,l({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var h=2;h<o;h++)i[h]=n[h];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),o=(n(0),n(145)),i={slug:"its-a-brand-new-world",title:"Its A Brand New World",author:"Banzi Kubheka",author_title:"Junior Software Development",author_url:"https://github.com/kubzie17",author_image_url:"https://ca.slack-edge.com/THSA80FJA-UJY2VKKCL-4ab043f0486b-512",summary:"My first few months as a Software Developer at Glasswall",tags:["programming","career change"]},l={permalink:"/blog/its-a-brand-new-world",source:"@site/blog/2020-10-24-Its a brand new world.md",description:"Having joined Glasswall Solutions in September, I have found it to be quite a relaxed environment, even with the pressure of the",date:"2020-10-24T00:00:00.000Z",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"career change",permalink:"/blog/tags/career-change"}],title:"Its A Brand New World",readingTime:4.74,truncated:!0,prevItem:{title:"Deploy Flask application(s) to Apache Web Server (Windows)",permalink:"/blog/flask-python-application-deploy-to-apache-web-server"},nextItem:{title:"You Had Me at Hello World",permalink:"/blog/hello-world"}},s=[],h={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Having joined Glasswall Solutions in September, I have found it to be quite a relaxed environment, even with the pressure of the\nbig November deadline. Before joining Glasswall, I was working in the railway industry as a Project Engineer for four\nand a half years, so goes without saying that I had no professional software experience although I have had exposure to a couple of\nprogramming languages. I was quite nervous but excited during my first couple of weeks. It is one thing playing\naround in my spare time with Arduino and VS at home, but it's another working with software as a profession. I was\nfirst introduced to TFS (version control and application lifecycle management system) and using the correct branching\nstrategy to create my branches correctly and safely."),Object(o.b)("p",null,"Following on from that, I learned about a Binary Data Definition Language (BDDL), I learned what it is, what it does and eventually\nhow to develop in the language. Once I got the hang of it I progressed to understanding and using our internally developed\nautomatic code generators, during which I got to learn about batch scripting and using the command line.\nUntil then, I had never even heard of the batch scripting, so to me, this was fascinating, given what you can get done\nwith a simple batch file."),Object(o.b)("p",null,"The biggest early challenge I faced was integrating code I had auto generated into our main codebase. With guidance from\nseveral team members, I managed to gather all the files I would have to edit in order to correctly integrate my\ncode. During this period, the company had a massive deadline looming which inevitably required all hands\non deck. It was at this point I feel my progress and development picked up."),Object(o.b)("p",null,"I was brought in and tasked with creating two SDK wrappers for our C++ library, the wrappers were to be written for C#,\nand Python. Given my experience and background, to me, this was like being chucked in the deep end. It was a challenge I\nrelished and felt I could learn and develop quicker in order to become a productive and contributory member of the team.\nAgain, I had no previous software experience, so the first thing I did was look into what wrappers are, which didn't take\nlong to find out. To make sure I grasped the idea behind it, I started creating small wrappers and test scripts.\nFor a guidance, I used SDK wrappers from earlier versions of our SDK, but it became quickly apparent that the SDKs were\nvastly different, particularly the API calls. As mentioned, I relished the challenge, so I was too eager to get stuck in,\nwhich turned out to be a hindrance."),Object(o.b)("p",null,"The first set of API calls I wrapped really showed my lack of understanding as they actually did nothing, they weren't\nreturning anything. That's when the skills of the previous role kicked in, to research and understand the goal, then\nwork backward creating a mind map. "),Object(o.b)("p",null,"I looked at the API documentation to understand exactly what each API call does,\nwhat parameters it takes and what it returns. Dealing with purely memory based C++ API calls was particularly challenging in Python.\nWhat I found was that the output files from the memory based API calls in my Python wrapper were producing corrupt files, although they looked\nfine i.e the file size was consistent with the output of the files produced by the other wrappers for the same API calls.\nLong story short, after some extensive investigation into it and help from a fellow junior, we found the cause of the\nproblem to be the use of an incorrect data type for one of the parameters, I was using c_char_p (character pointer)\ninstead of c_void_p (void pointer) as the arg type for the memory buffers. Once the correction was made both the wrappers\nwere tested on Windows and Linux, and they functioned as expected."),Object(o.b)("p",null,"The next task after implementing the wrappers was to create two installers for the SDK wrappers, one for Windows and one\nfor Linux. Honestly speaking, the one for windows was not challenging, using the NSIS utility made life simple. However, the same\ncannot be said about the Linux installer. Linux uses the RPM package manager which again, I had never heard so I was\nnot familiar with it. Fortunately, I had the installers from earlier versions of our product to use as a guideline\nwhich helped immensely, although it did take me a few attempts, i.e.; installing, checking if it installed correctly,\nthen un-installing until I got it right."),Object(o.b)("p",null,"In the short span of two months being here, I have learned quite a bit, especially given the fact that I had no previous\nexperience at all. I found that being thrown in and given tasks that were beneficial to the company (wrappers and\ninstallers all needed for the final release), also benefited me in terms of my personal development and\ngaining an understanding of our products and software development in general. But this is just the tip of the iceberg,\nI still have a lot of learning to do. "),Object(o.b)("p",null,"I feel I'm in the right company with the right people for that, as some have already helped me immensely and have made\nit easy for me ask questions. They have also provide me with answers that help me understand rather than just giving me\nthe solution, which if they did would be counter-productive. "),Object(o.b)("p",null,"The switch from Project engineering to Software development has been a big switch with a total change of pace, but it is\na switch I do not regret as, despite all the challenges, I'm really enjoying what I'm doing."))}c.isMDXComponent=!0}}]);