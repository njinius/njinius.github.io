(window.webpackJsonp=window.webpackJsonp||[]).push([[14,29],{49:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),s=n.n(a),r=n(139),l=n(141),o=n(136),c=n(140),m=n(48),g=n.n(m),u=n(137),d=n(138),h=n.n(d),f=n(7),p=n.n(f);function E(e){var t=e.imageUrl,n=e.title,i=e.destination,a=e.height,l=e.width,o=Object(c.a)(t);return s.a.createElement("div",{className:Object(r.a)("col col--4",g.a.feature)},o&&s.a.createElement("div",{className:"text--center"},s.a.createElement(u.a,{to:i},s.a.createElement("img",{className:"{styles.featureImage}",src:o,alt:n,width:l,height:a}))),s.a.createElement("h3",{style:{textAlign:"center",alignItems:"center",justifyContent:"center"}},n),s.a.createElement("br",null),s.a.createElement("br",null))}function b(e){var t=e.title,n=e.subtitle,a=e.features;Object(o.a)();return s.a.createElement(l.a,{title:"Topics"},s.a.createElement("header",null,s.a.createElement("div",{style:{textAlign:"center",alignItems:"center",justifyContent:"center",backgroundColor:"#1ED1D4"}},s.a.createElement("h1",{className:"tilte"},t," "),s.a.createElement("div",{className:h()("row",g.a.responsiveCentered)},s.a.createElement("div",{className:"col col--6 col--offset-3"},s.a.createElement("p",{className:""},n))))),s.a.createElement("main",null,a&&a.length>0&&s.a.createElement("section",{className:g.a.features},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},a.map((function(e,t){return s.a.createElement(E,Object(i.a)({key:t},e))})))))))}b.propTypes={title:p.a.string.isRequired,subtitle:p.a.string.isRequired,features:p.a.array.isRequired},t.default=b},75:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(49),r=[{title:"Entrepreneurship",imageUrl:"img/business/entrepreneurship.jfif",destination:"/common/coming-soon",width:"150",height:"155"},{title:"Marketing",imageUrl:"img/business/marketing.jfif",destination:"/common/coming-soon",width:"150",height:"155"},{title:"Strategic Planning",imageUrl:"img/business/planning.jfif",destination:"/common/coming-soon",width:"150",height:"155"},{title:"Accounting and Finance ",imageUrl:"img/business/accounting.png",destination:"/common/coming-soon",width:"150",height:"155"},{title:"Technology",imageUrl:"img/business/technology.jfif",destination:"/common/coming-soon",width:"150",height:"155"},{title:"Operations",imageUrl:"img/business/operation.jpg",destination:"/common/coming-soon",width:"150",height:"155"},{title:"Human Resources",imageUrl:"img/business/hr.jfif",destination:"/common/coming-soon",width:"150",height:"155"}];t.default=function(){return a.a.createElement("div",null,a.a.createElement(s.default,{title:"Business Development",subtitle:"The world of business is extensive, we have tried to simplify this by\n                    categorising the recorded sessions. Click on a category to view all related videos",features:r}))}}}]);