(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{155:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,d=b["".concat(i,".").concat(u)]||b[u]||h[u]||r;return a?o.a.createElement(d,l(l({ref:t},p),{},{components:a})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),o=a(6),r=(a(0),a(155)),i={slug:"flask-python-application-deploy-to-apache-web-server",title:"Deploy Flask application(s) to Apache Web Server (Windows)",author:"Elvin White",author_title:"Head of Core Engineering",author_url:"https://github.com/bwelvin",author_image_url:"https://ca.slack-edge.com/THSA80FJA-UHT78THHD-e3992d5ddf2d-512",summary:"I have created a simple guide describing how to set up and configure Apache 2.4 to serve Flask web applications on Windows.",tags:["flask","python","apache","windows","wsgi"]},l={permalink:"/blog/flask-python-application-deploy-to-apache-web-server",source:"@site/blog/2020-11-23-deploy flask python app(s) to apache web server (windows).md",description:"I have created a simple guide describing how to set up and configure Apache 2.4 to serve Flask web applications on Windows.",date:"2020-11-23T00:00:00.000Z",tags:[{label:"flask",permalink:"/blog/tags/flask"},{label:"python",permalink:"/blog/tags/python"},{label:"apache",permalink:"/blog/tags/apache"},{label:"windows",permalink:"/blog/tags/windows"},{label:"wsgi",permalink:"/blog/tags/wsgi"}],title:"Deploy Flask application(s) to Apache Web Server (Windows)",readingTime:3.535,truncated:!1,prevItem:{title:"Why haven't you written a blog yet?",permalink:"/blog/why-havent-you-written-a-blog-yet"},nextItem:{title:"You Had Me at Hello World",permalink:"/blog/hello-world"}},c=[{value:"Why?",id:"why",children:[]},{value:"Installation",id:"installation",children:[{value:"Install Apache",id:"install-apache",children:[]},{value:"Install the mod_wsgi module",id:"install-the-mod_wsgi-module",children:[]}]},{value:"Configure Apache to run the Python application",id:"configure-apache-to-run-the-python-application",children:[{value:"Flask Application",id:"flask-application",children:[]},{value:"Creating WSGI File",id:"creating-wsgi-file",children:[]}]},{value:"Other References",id:"other-references",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I have created a simple guide describing how to set up and configure Apache 2.4 to serve Flask web applications on Windows."),Object(r.b)("h2",{id:"why"},"Why?"),Object(r.b)("p",null,"I have been working on a small project, building a concept prototype for a web application written in Python using Flask,\nand one of the requirements was to deploy the app on windows (Don't ask why).\nIt was my first time deploying a python web application and using Apache, for that matter. I found a few sources online\nexplaining how to achieve the objective, and this is my attempt at bringing that all together into a guide for future\nreference. Still, hopefully, others may also find it useful."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"I chose to use the Apache HTTP server as it seems to be the most recommended."),Object(r.b)("h3",{id:"install-apache"},"Install Apache"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Visit ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.apachelounge.com/download/VC10"}),"https://www.apachelounge.com/download/VC10")," and download Apache 2.4 ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Make sure you have the correct version of Visual C++ Redistributable for Visual Studio installed."))),Object(r.b)("li",{parentName:"ul"},"Extract the files; I recommend extracting or copying into the C drive, e.g. ",Object(r.b)("strong",{parentName:"li"},"'C:\\Apache24'")),Object(r.b)("li",{parentName:"ul"},"If you wish to run Apache HTTP Server as a windows service, open up a command prompt in the ",Object(r.b)("strong",{parentName:"li"},"'C: \\Apache24\\bin'")," directory\nand run the following command ",Object(r.b)("strong",{parentName:"li"},"'httpd.exe \u2013k install'"))),Object(r.b)("h3",{id:"install-the-mod_wsgi-module"},"Install the mod_wsgi module"),Object(r.b)("p",null,"Mod_wsgi is an Apache module that can host any Python web application. There are several ways to install the module,\nincluding the use of Pythons package installer (PIP), that said; in this guide, we will download the precompiled\nbinary and copy it to the required location."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download the archive via the following link\n",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/GrahamDumpleton/mod_wsgi/releases/download/4.4.12/mod_wsgi-windows-4.4.12.tar.gz"}),"https://github.com/GrahamDumpleton/mod_wsgi/releases/download/4.4.12/mod_wsgi-windows-4.4.12.tar.gz")),Object(r.b)("li",{parentName:"ul"},"Extract the files to a directory"),Object(r.b)("li",{parentName:"ul"},"Within the extracted folder, locate the .so file corresponding to the version of Apache and Python that you have installed;\nthe folders and binaries are labelled to reflect this.")),Object(r.b)("p",null,"For example, if you have the 64-bit version of Apache 2.4 and Python 2.7, you will find a file called ",Object(r.b)("strong",{parentName:"p"},"'mod_wsgi-py27-VC9.so'"),"\nin a folder labelled ",Object(r.b)("strong",{parentName:"p"},"'Apache24-win64-VC10'"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the ",Object(r.b)("strong",{parentName:"li"},"'mod_wsgi-py27-VC9.so'")," to ",Object(r.b)("strong",{parentName:"li"},"'C:\\Apache24\\modules'")),Object(r.b)("li",{parentName:"ul"},"Within the ",Object(r.b)("strong",{parentName:"li"},"'C:\\Apache24\\modules'")," rename the ",Object(r.b)("strong",{parentName:"li"},"'mod_wsgi-py27-VC9.so'")," file to 'mod_wsgi.so'")),Object(r.b)("h2",{id:"configure-apache-to-run-the-python-application"},"Configure Apache to run the Python application"),Object(r.b)("h3",{id:"flask-application"},"Flask Application"),Object(r.b)("p",null,"If you don't already have a Flask application that runs using Flask's built-in web server, you can use the sample code\nbelow."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"\n    from flask import Flask, request\n    APP = Flask(__name__)\n    \n    @APP.route('/hello_world')\n    def hello_world(): \n        return 'Hello World!!'\n\n    if __name__ == '__main__':\n        APP.run()\n\n")),Object(r.b)("p",null,"Create the following directories ",Object(r.b)("strong",{parentName:"p"},"'C:\\flask\\webapp'")," and save the code above in a file named ",Object(r.b)("strong",{parentName:"p"},"'hellofromflask.py'")," within the\n",Object(r.b)("strong",{parentName:"p"},"'webapp'")," directory. (This can be stored wherever you please as long as you refer to the correct file path where necessary)."),Object(r.b)("h3",{id:"creating-wsgi-file"},"Creating WSGI File"),Object(r.b)("p",null,"Apache uses the ",Object(r.b)("strong",{parentName:"p"},".wsgi")," file to serve the Flask applications, so we need to create a ",Object(r.b)("strong",{parentName:"p"},".wsgi")," file that invokes our application."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open a text editor, insert the following snippet of code."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'    Require all granted\n    </Directory>\n        WSGIScriptAlias / "C:\\flask\\webapp\\myflaskapp.wsgi"\n    </VirtualHost>\n\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Save the file. I have saved the file at ",Object(r.b)("strong",{parentName:"p"},"'C:/flask/webapp/config/my-vhosts.conf'")))),Object(r.b)("p",null,"In the configuration above, ",Object(r.b)("strong",{parentName:"p"},"ServerName")," is the domain name for the application. ",Object(r.b)("strong",{parentName:"p"},"WSGIScriptAlias")," specifies the script that\nwill run when the Apache Server gets a request. ",Object(r.b)("strong",{parentName:"p"},"Directory < directory path>")," enables us to apply directory access\npermissions for the WSGI script.\nTo configure the application,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the default configuration file (",Object(r.b)("strong",{parentName:"li"},"httpd.conf"),") in a text editor."),Object(r.b)("li",{parentName:"ul"},"Enable the WSGI module by adding the following line to the config file (ideally in the region where other modules are\nloaded, search ",Object(r.b)("strong",{parentName:"li"},"'# Dynamic Shared Object (DSO) Support'")," to find the section)",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"```\n    LoadModule wsgi_module modules/mod_wsgi.so\n```\n"))),Object(r.b)("li",{parentName:"ul"},"Include your virtual host configuration by adding the following line to the ",Object(r.b)("strong",{parentName:"li"},"httpd.conf")," file (ideally under the Virtual\nhosts' section, search for ",Object(r.b)("strong",{parentName:"li"},"'# Virtual hosts'")," to find that section)",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"```\n    Include C:/flask/webapp/config/my-vhosts.conf\n```\n"))),Object(r.b)("li",{parentName:"ul"},"Save the file.")),Object(r.b)("p",null,"If you are using the existing vhost config file, instead of the steps above, search for the line,\n",Object(r.b)("strong",{parentName:"p"},'"Include conf/extra/httpd-vhosts.conf"'),", make sure it exists and is not commented out (a comment contains\nthe '#' character prefix)."),Object(r.b)("p",null,"Start apache (or restart if already running), point your web browser to ",Object(r.b)("strong",{parentName:"p"},"'localhost/hello_world'"),"\n(or whichever URL you are using for your app), and you should see the web app's content displayed."),Object(r.b)("p",null,"There you have it. That's pretty much it! Adios."),Object(r.b)("h2",{id:"other-references"},"Other References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://modwsgi.readthedocs.io/en/develop/user-guides/quick-configuration-guide.html"}),"https://modwsgi.readthedocs.io/en/develop/user-guides/quick-configuration-guide.html")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps"}),"https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps"))))}s.isMDXComponent=!0}}]);