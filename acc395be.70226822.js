(window.webpackJsonp=window.webpackJsonp||[]).push([[54,19],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var s=n(2),o=n(6),a=(n(0),n(145)),i=n(50),r={id:"latest",slug:"latest-news",title:"Recent Posts",description:"News headlines"},c={unversionedId:"news/latest",id:"news/latest",isDocsHomePage:!1,title:"Recent Posts",description:"News headlines",source:"@site/docs/news/recent_news.mdx",slug:"/news/latest-news",permalink:"/docs/news/latest-news",version:"current",sidebar:"newsItems",next:{title:"Previous Posts",permalink:"/docs/news/previous-news"}},d=[{value:"Top Post",id:"top-post",children:[]},{value:"Latest",id:"latest",children:[]}],u={rightToc:d};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"top-post"},"Top Post"),Object(a.b)(i.NewsCard,{image:"/img/news/launch.jpg",date:"01-07-2021",heading:"NJinius Launch",synopsis:"The Njinius website will be launched on 15/07/2021. Read about the reason behind the existence of NJinius and what it can offer you.",article_url:"/docs/news/articles/njinius-launch",mdxType:"NewsCard"}),Object(a.b)("h3",{id:"latest"},"Latest"),Object(a.b)(i.NewsGrid,{newsCardsInfo:[{img:"/img/news/docusaurus.png",date:"01-06-2021",heading:"Using Docusaurus",synopsis:"How to get up and running with Docusaurus.",article_url:"/docs/tutorials/video-tutorials/software/docusaurus/docusaurus-ep1"},{img:"/img/news/github-actions.png",date:"05-05-2021",heading:"GitHub Actions",synopsis:"Automate tasks in your build and release pipelines.",article_url:"/docs/tutorials/text-tutorials/software/github/github-actions-basics"},{img:"/img/news/yaml-snippet.png",date:"05-05-2021",heading:"Working with YAML",synopsis:"Get a handle on the basics of using YAML.",article_url:"/docs/tutorials/text-tutorials/software/yaml/yaml-basics"}],mdxType:"NewsGrid"}))}p.isMDXComponent=!0},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return w})),n.d(t,"rightToc",(function(){return g})),n.d(t,"NewsCard",(function(){return h})),n.d(t,"NewsGrid",(function(){return y})),n.d(t,"default",(function(){return x}));var s=n(2),o=n(6),a=(n(0),n(145)),i=n(13),r=n(298),c=n(160),d=n(293),u=n(291),p=n(297),m=n(292),l=n(294),b={},w={unversionedId:"mdx-react-components/news-components",id:"mdx-react-components/news-components",isDocsHomePage:!1,title:"news-components",description:"export const NewsCard = ({image, date, heading, synopsis, article_url}) => (",source:"@site/docs/mdx-react-components/news-components.mdx",slug:"/mdx-react-components/news-components",permalink:"/docs/mdx-react-components/news-components",version:"current"},g=[],h=function(e){var t=e.image,n=e.date,s=e.heading,o=e.synopsis,l=e.article_url;return Object(a.b)(r.a,{mdxType:"Card"},Object(a.b)(c.a,{top:!0,width:"100%",src:t,mdxType:"CardImg"}),Object(a.b)(u.a,{mdxType:"CardContent"},Object(a.b)(m.a,{className:"date",color:"textSecondary",gutterBottom:!0,mdxType:"Typography"},n),Object(a.b)(m.a,{variant:"h6",component:"h2",mdxType:"Typography"},s),Object(a.b)(m.a,{className:"Test",color:"textSecondary",mdxType:"Typography"},"Overview"),Object(a.b)(m.a,{variant:"body2",component:"p",mdxType:"Typography"},o)),Object(a.b)(d.a,{mdxType:"CardActions"},Object(a.b)(p.a,{component:i.c,to:l,size:"small",mdxType:"Button"},"Read More")))},y=function(e){var t=e.newsCardsInfo;return Object(a.b)(l.a,{container:!0,spacing:4,mdxType:"Grid"},t.map((function(e){return Object(a.b)(l.a,{item:!0,md:3,mdxType:"Grid"},Object(a.b)(h,{image:e.img,date:e.date,heading:e.heading,synopsis:e.synopsis,article_url:e.article_url,mdxType:"NewsCard"}))})))},f={rightToc:g,NewsCard:h,NewsGrid:y};function x(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},f,n,{components:t,mdxType:"MDXLayout"}))}x.isMDXComponent=!0}}]);