(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{114:function(n,a,e){"use strict";e.r(a);var s,t,o,p,i,r,l,c,d,m,u,h,g,b,j,x=e(2),f=e.n(x),v=e(20),w=e.n(v),y=e(13),O=e(4),k=e(5),C=(e(58),"#252525"),S="#f7f7f7",I="#af1d57",z="#e62773",P="#6e1337",D="991px",q=f.a.createContext(),J=q.Provider,T=(q.Consumer,q),A=e(115),L=e(116),N=e(117),R=e(118),W=e(119),M=e(120),E=e(6),G=e(1),B=Object(k.a)(A.a)(s||(s=Object(O.a)(["\n  font-family: 'Quicksand', sans-serif;\n  .navbar {\n    background-color: ",";\n    padding: 0;\n\n    .nav-item {\n      a {\n        transition: all .2s;\n        padding: 15px 20px;\n        color: ","; \n        font-size: 14pt;\n      }\n      \n      &:hover:not(.mobile-language-button) {\n        background-color: ",";\n        a {\n          color: ",";\n          font-size: 16pt;\n          padding: 20px 25px;\n        }\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    .mobile-language-button {\n      position: absolute;\n      right: 5px;\n      top: 5px;\n      list-style: none;\n    }\n  }\n\n  .navbar {\n    border-bottom: 2px solid ",";\n  }\n"])),C,I,I,S,I),H=k.a.div(t||(t=Object(O.a)(["\n  @media (max-width: ",") {\n    margin: 20px;\n    padding-top: 5px;\n    cursor: pointer;\n\n    div {\n      transition: all 0.3s;\n      background-color: ",";\n    }\n\n    .bar1, .bar2, .bar3 {\n      width: 30px;\n      height: 2px;\n      margin-bottom: 8px;\n    }\n\n    .animation1, .animation3 {\n      width: 30px;\n      height: 2px;\n    }\n\n    .animation1 {\n      margin-top: 5px;\n      margin-bottom: 10px;\n      transform: rotate(45deg);\n    }\n\n    .animation3 {\n      margin-top: -12px;\n      margin-bottom: 4px;\n      transform: rotate(-45deg);\n    }\n  }\n"])),D,I),F=function(){var n=Object(x.useContext)(T),a=n.language,e=n.toggleLanguage,s=n.mobile,t=Object(x.useState)(!1),o=Object(y.a)(t,2),p=o[0],i=o[1],r=function(){return!!s&&i(!p)};return Object(G.jsx)(B,{fluid:!0,children:Object(G.jsx)(L.a,{color:C,expand:"lg",fixed:"top",children:Object(G.jsxs)(A.a,{children:[Object(G.jsxs)(H,{onClick:r,children:[Object(G.jsx)("div",{className:p?"animation1":"bar1"}),Object(G.jsx)("div",{className:p?"":"bar2"}),Object(G.jsx)("div",{className:p?"animation3":"bar3"})]}),Object(G.jsx)(N.a,{isOpen:p,navbar:!0,children:Object(G.jsxs)(R.a,{className:"w-100 justify-content-between",navbar:!0,children:[E[a].header.map((function(n,a){return Object(G.jsx)(W.a,{children:Object(G.jsx)(M.a,{href:n.link,onClick:r,children:n.text})},a)})),Object(G.jsx)(W.a,{className:"d-none d-md-block",onClick:function(){return e()},children:Object(G.jsx)(M.a,{href:"#",children:"en"===a?"PT":"EN"})})]})}),Object(G.jsx)(W.a,{className:"d-md-none mobile-language-button",onClick:function(){return e()},children:Object(G.jsx)(M.a,{href:"#",children:"en"===a?"PT":"EN"})})]})})})},U=e(12),Q=e.n(U),V=e(10),Y=e(11),_="all ".concat(".3s"," cubic-bezier(0.310, -0.105, 0.430, 1.400)"),X=k.a.a(o||(o=Object(O.a)(["\n\tdisplay: block;\n\tbackground-color: ",";\n\twidth: 300px;\n\theight: 70px;\n\tline-height: 70px;\n\tmargin: 75px auto;\n\tcolor: ",";\n\tposition: relative;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tcursor: pointer;\n\toverflow: hidden;\n\t/* box-shadow: 0 0 20px 0 rgba(0,0,0,.3); */\n\ttransition: ",";\n\t\n\tspan,\n\t.icon {\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t}\n\t\n\tspan {\n\t\twidth: 72%;\n\t\tline-height: inherit;\n\t\tfont-size: 22px;\n\t\ttext-transform: uppercase;\n\t\tleft: 0;\n\t\ttransition: ",";\n\t\t\n\t\t&:after {\n\t\t\tcontent: '';\n\t\t\tbackground-color: ",";\n\t\t\twidth: 2px;\n\t\t\theight: 70%;\n\t\t\tposition: absolute;\n\t\t\ttop: 15%;\n\t\t\tright: -1px;\n\t\t}\n\t}\n\t\n\t.icon {\n\t\twidth: 28%;\n\t\tright: 0;\n\t\ttransition: ",";\n\t\t\n\t\t.svg-inline--fa {\n\t\t\tfont-size: 30px;\n\t\t\tvertical-align: middle;\n\t\t\ttransition: ",", height "," ease;\n\t\t}\n\t\t\n\t\t.fa-long-arrow-alt-right {\n\t\t\theight: 36px;\n\t\t}\n\t}\n\t\n\t&:hover {\n\t\t\n\t\tspan {\n\t\t\tleft: -72%;\n\t\t\topacity: 0;\n\t\t}\n\t\t\n\t\t.icon {\n\t\t\twidth: 100%;\n\t\t\t\n\t\t\t.svg-inline--fa {\n\t\t\t\tfont-size: 45px;\n\t\t\t}\n\t\t}\n\t}\n\t\n\t&:hover {\n\tbox-shadow: 0 0 20px 0 rgba(0,0,0,.3);\n\t\t/* opacity: .7; */\n        color: ",";\n        background-color: ",";\n        \n\t\t.icon .fa-long-arrow-alt-right {\n\t\t\theight: 46px;\n\t\t}\n\t}\n\t\n\t&:active {\n\t\topacity: 1;\n\t}\n"])),P,S,_,_,I,_,_,".3s",S,I),Z=function(n){return Object(G.jsxs)(X,{href:"#who",role:"button",children:[Object(G.jsx)("span",{children:n.text}),Object(G.jsx)("div",{className:"icon",children:Object(G.jsx)(V.a,{icon:Y.g})})]})},$=Object(k.a)(A.a)(p||(p=Object(O.a)(["\n    text-align: center;\n    color: ",";\n"])),S),K=k.a.div(i||(i=Object(O.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 150px;\n\n    div {\n        transition: all .2s;\n        position: absolute;\n        height: 260px;\n        width: 500px;\n        background-color: ",";\n\n        &:hover {\n            width: 600px;\n        }\n    }\n\n    img {\n        transition: all .2s;\n        position: relative;\n        width: 300px;\n        border: 5px solid ",";\n        border-radius: 4px;\n\n        &:hover {\n            width: 350px;\n        }\n    }\n\n    @media (max-width: ",") {\n        div, div:hover {\n            top: 0;\n            width: 100%;\n            height: 320px;\n        }\n\n        img:hover {\n            width: 300px;\n        }\n    }\n"])),I,I,D),nn=k.a.div(r||(r=Object(O.a)(["\n    margin-top: 70px;\n\n    p {\n        font-size: 20pt!important;\n        margin: 0;\n    }\n"]))),an=function(){var n=Object(x.useContext)(T).language;return Object(G.jsxs)($,{id:"home",children:[Object(G.jsxs)(K,{children:[Object(G.jsx)("div",{}),Object(G.jsx)("img",{title:E[n].home.imgTitle,alt:E[n].home.imgTitle,src:"/portfolio/img/profile.jpg"})]}),Object(G.jsx)(nn,{children:E[n].home.text.map((function(n,a){return Object(G.jsx)("p",{children:Q()(n)},a)}))}),Object(G.jsx)(Z,{text:E[n].home.button})]})},en=Object(k.a)(A.a)(l||(l=Object(O.a)(["\n    color: ",";\n    text-align: justify;\n    padding-top: 90px;\n"])),S),sn=k.a.div(c||(c=Object(O.a)(["\n    border-left: 3px solid ",";\n    padding-left: 20px;\n    margin-top: 30px;\n\n    p {\n        margin-bottom: 25px;\n        font-size: 16pt;\n    }\n"])),I),tn=function(){var n=Object(x.useContext)(T).language;return Object(G.jsxs)(en,{id:"who",children:[Object(G.jsxs)("h1",{children:[Object(G.jsx)(V.a,{icon:Y.f}),E[n].who.title]}),Object(G.jsx)(sn,{children:E[n].who.text.map((function(n,a){return Object(G.jsx)("p",{children:Q()(n)},a)}))})]})},on=e(26),pn=e(121),rn=Object(k.a)(A.a)(d||(d=Object(O.a)(["\n    padding-top: 90px;\n\n    p {\n        margin-top: 30px;\n        color: ",";\n        text-align: center;\n    }\n"])),S),ln=k.a.div(m||(m=Object(O.a)(["\n    .opacity-0 {\n        opacity: 0;\n    }\n\n    .strength {\n        font-size: 18pt;\n        color: ",";\n        margin-bottom: 20px;\n\n        .progress-container {\n            margin-top: 5px;\n            border: 3px solid ",";\n            position: relative;\n\n            /* padding: 3px; */\n            \n            .progress-bar {\n                /* border: 2px solid ","; */\n                height: 35px;\n                background-color: ",";\n                transition: all 1.5s;\n            }\n\n            .progress-bar-animated {\n                animation-duration: 2s;\n            }\n            .progress-bar-striped {\n                background-size: 32px 1px\n            }\n        }\n        \n        sup {\n            top: 0;\n            font-size: 9pt;\n        }\n    }\n"])),S,I,I,I),cn=function(){var n=Object(x.useContext)(T),a=n.language,e=n.mobile,s=Object(x.useRef)(),t=Object(x.useState)(void 0),o=Object(y.a)(t,2),p=o[0],i=o[1],r=Object(x.useState)(window.scrollY),l=Object(y.a)(r,2),c=l[0],d=l[1],m=[];for(var u in E)m[u]=E[u].skills.strengths.map((function(n){return Object(on.a)(Object(on.a)({},n),{},{checked:!1})}));var h=Object(x.useState)(m),g=Object(y.a)(h,2),b=g[0],j=g[1],f=Object(x.useCallback)((function(n){var a=0;for(var e in E)b[e][n].checked||(b[e][n].checked=!0,a++);a>0&&j(Object(on.a)({},b))}),[b]),v=function(){d(window.scrollY)};return Object(x.useEffect)((function(){return c>p&&b[a].map((function(n,a){return f(a)})),window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[e,a,c,p,b,f]),Object(x.useEffect)((function(){s.current&&i(s.current.offsetTop)}),[s]),Object(G.jsxs)(rn,{id:"skills",children:[Object(G.jsxs)("h1",{children:[Object(G.jsx)(V.a,{icon:Y.h}),E[a].skills.title]}),Object(G.jsx)("p",{ref:s,children:Q()(E[a].skills.text)}),Object(G.jsx)(ln,{children:b[a].map((function(n,a){return Object(G.jsxs)("div",{className:"strength",children:[Q()(n.name),Object(G.jsx)("div",{className:"progress-container",children:Object(G.jsx)(pn.a,{bar:!0,animated:!0,value:n.checked?n.value:0})})]},a)}))})]})},dn=e(122),mn=e(123),un=Object(k.a)(dn.a)(u||(u=Object(O.a)(["\n    margin-bottom: 50px;\n\n    .order-1 {\n        order: 1;\n    }\n\n    .order-2 {\n        order: 2;\n    }\n\n    h3 {\n        color: ",";\n    }\n\n    .opacity-0 {\n        opacity: 0;\n    }\n\n    div p {\n        text-align: justify;\n        span {\n            font-size: 16pt;\n        }\n    }\n\n    .img-container {\n        background-color: ",";\n        border: 2px solid ",";\n        position: relative;\n        transition: all 1.1s;\n\n        a {\n            text-decoration: none;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n        }\n\n        img {\n            width: 100%;\n            transition: all 0.7s;\n            z-index: 1;\n            align-self: center;\n        \n            &.border-right-rd {\n                border-bottom-right-radius: 90px;  \n            }\n\n            &.border-left-rd {\n                border-bottom-left-radius: 90px;\n            }\n        }\n\n        img + svg {\n            position: absolute;\n            color: ",";\n            bottom: 10px;\n            transition: all .7s;\n\n            &.right {\n                right: 10px;\n            }\n\n            &.left {\n                left: 10px;\n            }\n        }\n        span {\n            position: absolute;\n            font-size: 100%;\n            color: ",";\n            align-self: center;\n            transform: rotateX(-180deg);\n        }\n\n        &:hover {\n            transform: rotateX(-180deg);\n\n            img, img + svg {\n                opacity: 0.1;\n            }\n        }\n    }\n\n    @media(max-width: ",") {\n        span {\n            font-size: 12pt;\n        }\n\n        .img-container {\n            margin-bottom: 30px;\n        }\n    }\n"])),z,I,I,S,S,D),hn=function(n){var a=n.project,e=n.index,s=Object(x.useContext)(T).mobile;return Object(G.jsxs)(un,{children:[Object(G.jsx)(mn.a,{className:s||e%2===0?"order-1":"order-2",xs:12,lg:5,children:Object(G.jsx)("div",{className:"img-container",children:Object(G.jsxs)("a",{href:a.link,target:"__blank",children:[Object(G.jsx)("span",{children:a.link}),Object(G.jsx)("img",{alt:a.link,className:s||e%2===0?"border-right-rd":"border-left-rd",src:"/portfolio"+a.img}),Object(G.jsx)(V.a,{size:"xs",className:s||e%2===0?"right":"left",icon:Y.e})]})})}),Object(G.jsxs)(mn.a,{className:s||e%2===0?"order-2":"order-1 text-right",xs:12,lg:7,children:[Object(G.jsx)("h3",{children:a.name}),Object(G.jsx)("p",{children:Q()(a.text)})]})]})},gn=Object(k.a)(A.a)(h||(h=Object(O.a)(["\n    padding-top: 90px;\n\n    p {\n        margin-bottom: 50px;\n        text-align: center;\n        color: ",";\n    }\n\n"])),S),bn=function(){var n=Object(x.useContext)(T).language;return Object(G.jsxs)(gn,{id:"projects",children:[Object(G.jsxs)("h1",{children:[Object(G.jsx)(V.a,{icon:Y.b}),E[n].projects.title]}),Object(G.jsx)("p",{children:Q()(E[n].projects.text)}),E[n].projects.works.map((function(n,a){return Object(G.jsx)(hn,{project:n,index:a},a)}))]})},jn=e(53),xn=Object(k.a)(A.a)(g||(g=Object(O.a)(["\n    padding-top: 90px;\n    padding-bottom: 90px;\n\n    p {\n        margin-top: 20px;\n        color: ",";\n        text-align: center;\n    }\n\n    .row {\n        text-align: center;\n\n        a {\n            padding: 40px 20px 10px;\n            margin-right: 25px;\n            margin-left: 25px;\n            transition: all .5s;\n\n            &:hover {\n                border-radius: 10px;\n                background-color: ",";\n                padding: 50px 30px 20px;\n\n                svg {\n                    color: ","\n                }\n            }\n        }\n\n        svg {\n            transition: all .5s;\n            color: ",";\n            width: 50px;\n            height: 50px;\n        }\n    }\n"])),S,I,S,z),fn=function(){var n=Object(x.useContext)(T).language;return Object(G.jsxs)(xn,{id:"contact",children:[Object(G.jsxs)("h1",{children:[Object(G.jsx)(V.a,{icon:Y.c}),E[n].contact.title]}),Object(G.jsx)("p",{children:Q()(E[n].contact.text)}),Object(G.jsx)(dn.a,{children:Object(G.jsx)(mn.a,{xs:12,children:Object(G.jsxs)("p",{children:[Object(G.jsx)("a",{href:"https://www.linkedin.com/in/joao-pedro-barberino-silva/",target:"__blank",children:Object(G.jsx)(V.a,{icon:jn.a})}),Object(G.jsx)("a",{href:"mailto:joao.p.barberino@gmail.com",children:Object(G.jsx)(V.a,{icon:Y.d})})]})})})]})},vn=Object(k.a)(A.a)(b||(b=Object(O.a)(["\n    background-color: ",";\n    text-align: center;\n    padding: 12px 0 3px;\n\n    h5 {\n        font-size: 12pt;\n        color: ",";\n    }\n\n    .container {\n        position: relative;\n\n        button {\n            transition: all .5s;\n            padding: 5px 10px;\n            position: absolute;\n            right: 2px;\n            top: -9px;\n            background-color: ",";\n            border: 1px solid ",";\n            border-radius: 5px;\n\n            svg {\n                color: ","\n            }\n\n            &:focus {\n                outline: none;\n            }\n\n            &:hover {\n                top: -20px;\n            }\n        }\n    }\n"])),P,z,z,P,S),wn=function(){return Object(G.jsx)(vn,{fluid:!0,children:Object(G.jsxs)(A.a,{children:[Object(G.jsxs)("h5",{children:[Object(G.jsx)("span",{children:"Jo\xe3o Pedro Barberino"})," \xa9\u200e ",(new Date).getFullYear()]}),Object(G.jsx)("button",{onClick:function(){return window.scrollTo(0,0)},children:Object(G.jsx)(V.a,{icon:Y.a})})]})})},yn=k.a.div(j||(j=Object(O.a)(["\n  background-color: ",";\n  color: ",";\n  height: 200vh;\n  font-family: 'Quicksand', sans-serif;\n\n  p {\n    font-size: 16pt;\n    \n    span {\n      color: ",";\n    }\n  }\n\n  h1 {\n    color: ",";\n\n    svg {\n      margin-right: 20px;\n    }\n}\n"])),C,S,z,z);var On=function(){var n=Object(x.useState)("en"),a=Object(y.a)(n,2),e=a[0],s=a[1],t=Object(x.useState)(void 0),o=Object(y.a)(t,2),p=o[0],i=o[1],r=function(){var n=window.innerWidth<=parseInt(D);p!==n&&i(n)};return Object(x.useEffect)((function(){return r(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}})),Object(G.jsx)(J,{value:{language:e,toggleLanguage:function(){s((function(n){return"en"===n?"pt":"en"}))},mobile:p},children:Object(G.jsxs)(yn,{children:[Object(G.jsx)(F,{}),Object(G.jsx)(an,{}),Object(G.jsx)(tn,{}),Object(G.jsx)(cn,{}),Object(G.jsx)(bn,{}),Object(G.jsx)(fn,{}),Object(G.jsx)(wn,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(Object(G.jsx)(f.a.StrictMode,{children:Object(G.jsx)(On,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},58:function(n,a,e){},6:function(n){n.exports=JSON.parse('{"en":{"header":[{"text":"Home","link":"#home"},{"text":"Who am I?","link":"#who"},{"text":"Skills","link":"#skills"},{"text":"Projects","link":"#projects"},{"text":"Contact","link":"#contact"}],"home":{"imgTitle":"My picture!","text":["Hello! I\'m <span>Jo\xe3o</span>, Fullstack Web Developer and a wannabe Game Designer.","Learn more about me and my work here."],"button":"Let\'s go!"},"who":{"title":"Who am I?","text":["My name is <span>Jo\xe3o Pedro Barberino</span>, <span>20</span> years old, living in <span>S\xe3o Paulo - Brazil</span> and have been coding for about <span>5</span> years.","From <span>2015</span> to <span>2017</span> I took a Technical High School on <span>Industrial Automation</span> where I had my first contacts with coding: studying <span>Ladder</span>, <span>Assembly</span> and <span>C</span>, which gave me a lot of <span>logical thinking</span>.","From <span>2018</span> to <span>2020</span> I took an Applied Sciences in <span>Digital Games</span> course on Senac-SP, where I learned <span>Java</span>, <span>Python</span> and <span>C#</span> (with <span>Unity3D</span>).","In <span>2019</span>, aside from college, I entered on <span>Facebook\'s Esta\xe7\xe3o Hack</span> project, where I learned the basics and essentials for web development: <span>HTML5</span>, <span>CSS3</span>, <span>Javascript</span> and <span>Python</span> with <span>Django</span>, my first framework.","Thereafter, I was admitted at <span>JP7</span> as <span>Fullstack Web Developer</span>, where I started to work on <span>big player\'s</span> projects. I\'ve learned and acquired proficiency on <span>Javascript</span>, <span>PHP</span>, <span>modern CSS</span> and a bunch of cutting edgy technologies to build web apps, such as <span>Node</span>, <span>Express</span>, <span>React</span>, <span>Redux</span>, <span>Next.js</span>, <span>Laravel</span>, <span>Sass</span>, <span>Bootstrap</span>, <span>GitHub</span>, among others.","In <span>JP7</span>, I constantly take some <span>Udemy</span> courses as part of my training. I\'ve already done some, such as <span>The Web Developer Bootcamp</span> by <span>Colt Steele</span>, <span>Modern React with Redux</span>, <span>The Coding Interview Bootcamp: Algorithms + Data Structures</span> and <span>TypeScript The Complete Developers Guide</span>, which I\'m currently doing, by <span>Stephen Grider</span>.","The great goal of my <span>career</span> is to work with <span>game development</span>, but until there, I\'ll keep giving my total <span>dedication</span> to provide the <span>best solutions</span> to our <span>clients</span> and to learn the new <span>high-end technologies</span>."]},"skills":{"title":"Skills","text":"In a more illustrated way, these are my <span>strengths</span>: how much I <span>know</span> about each topic and how much I feel <span>comfortable applying</span> it daily.","strengths":[{"name":"Communication/ Team Work","value":90},{"name":"Agile Methodologies","value":100},{"name":"React <sup>(my favorite)</sup>","value":80},{"name":"GraphQL","value":55},{"name":"Laravel","value":80},{"name":"Bootstrap","value":80},{"name":"JavaScript","value":85},{"name":"Python","value":40},{"name":"PHP","value":45},{"name":"Java","value":60},{"name":"CSS","value":70}]},"projects":{"title":"Projects","text":"And here some about the projects I\'ve already worked on, <span>professionally or not</span>.","works":[{"name":"CI - Central de Interc\xe2mbio","link":"https://www.ci.com.br","img":"/img/ci.png","text":"One of our <span>biggest clients</span> at JP7, <span>CI is the biggest name on exchange programs in Brazil</span> and even has some units in other countries. We\u2019ve been <span>responsible for their sites for years</span>. There, I\u2019ve been providing <span>maintenance</span> since I entered, taking <span>requests from the client</span>, such as add new pages, edit old ones and even delete or change their locations \u2013 following the system which was already established. It\'s made mainly on <span>Laravel</span>, <span>Bootstrap</span> and <span>Javascript</span>, using an <span>intern CMS</span> to edit data. I\u2019ve been also involved in the environment configuration to <span>test</span> some functionalities on <span>React</span>."},{"name":"CI - Feira Trabalhar e Estudar","link":"https://feiratrabalhar.ci.com.br","img":"/img/ci-feira.png","text":"It\u2019s a <span>hotsite</span> developed some time ago to publicize the company\u2019s <span>annual event</span>. By the end of <span>2019</span>, I was <span>responsible to update the whole website structure</span>, mainly the styles, to the new layout. Uses the <span>very same technologies</span> of the main website."},{"name":"CI - Interc\xe2mbio Zion","link":"https://intercambiozion.com.br","img":"/img/ci-zion.png","text":"The client has <span>requested another provider</span> a simple <span>Wordpress</span> hotsite to test this <span>new product</span>. Sometime later <span>2019</span>, they <span>asked us</span> to control it by the <span>CMS already provided and integrated to the other company\u2019s websites</span>. As we <span>avoid</span> work with <span>Wordpress</span>, I was <span>responsible to redo the website on React</span>, using <span>Styled Components</span>, <span>Redux-form</span>, <span>Apollo</span>, <span>GraphQL</span> and <span>Next.js for SSR</span> as well."},{"name":"Abipe","link":"https://www.abipe.org.br","img":"/img/abipe.png","text":"A <span>no-profit company of CI Group</span>, their website counts with an exclusive area to its users, where they realize some <span>financial transactions</span>. By the start of <span>2020</span>, I was <span>responsible to change the PagSeguro</span> (a kind of Brazillian PayPal, responsible for the payments) <span>PHP library</span> of the <span>old version</span> to the <span>new one</span>, which resulted on an <span>extensive review and adaptation of the already established payment flux</span>."},{"name":"Multicarepharma","link":"https://www.multicarepharma.com","img":"/img/multicare.png","text":"A subsidiary of Expressa Group, Multicare is <span>responsible to provide medicines</span> (normally imported) to <span>patients with rare diseases</span>. It was my first <span>big project</span>, I made it in <span>2019</span> July. Uses <span>React</span>, <span>Redux-form</span>, <span>Styled Components</span>, <span>Apollo</span>, <span>GraphQL</span> and an <span>intern CMS</span> to edit data."},{"name":"JP7","link":"https://www.jp7.com.br","img":"/img/jp7.png","text":"As part of my <span>role</span> in the company, by the start of <span>2020</span>, I was <span>responsible to update the PHP and Node of all our projects</span>, which resulted in <span>various packages and unit tests updates and reviews and errors solutions</span>. You can learn more about them on the company website!"},{"name":"Fight, Lord Willow!","link":"https://github.com/joaopbarberino/Fight-Lord-Willow-","img":"/img/fight-lord.png","text":"Developed in a <span>group</span> to a <span>college semesterly project</span> in <span>2019</span>, it\'s a <span>Tower Defense game</span>, for <span>Windows</span>. Although it\u2019s a little <span>imbalanced</span>, (monsters\u2019 life, towers damage, rewards etc.), I\u2019m very proud of it because it was <span>made completely on Java</span>. The <span>path</span> that the monsters choose is <span>decided by artificial intelligence</span>, what would make the game <span>expansion</span>, or just the map alteration, very simple on that topic. I was <span>responsible for the project management</span>, <span>part of game design</span> and <span>core game mechanics implementations</span>, which are also <span>scalable</span>. You can <span>play it for free</span> by <span>downloading</span> the repository and <span>executing the .exe</span> file."},{"name":"Meteor Hunt","link":"https://github.com/waffliors/meteor-hunt","img":"/img/meteor-hunt.png","text":"Developed in a <span>group</span> to a <span>college semesterly project</span> in <span>2018</span>, it\'s a <span>Shooter game</span> based on Atari\u2019s Asteroids, for <span>Windows</span>. <span>Made completely in Python</span>, using the <span>pygame library</span>. We weren\u2019t capable of achieving all that we planned, but the game is <span>fully functional</span> and <span>fun</span>. Besides <span>taking part in planning</span>, <span>game design and other things</span>, my <span>bigger triumph</span> here was the <span>save system</span>: the highscores are saved locally on the user\u2019s computer. You can <span>play it for free</span> by <span>downloading</span> the repository and <span>executing the .exe</span> file."},{"name":"Cold Runner","link":"https://garahorn.itch.io/cold-runner","img":"/img/cold-runner.png","text":"Developed in a <span>group</span> to a <span>Game Jam</span> in <span>2020</span>, it\'s an <span>Endless Runner/ Platformer game</span>, about the \u201cCold\u201d theme, for <span>Android</span>. <span>Made in C# with Unity 3D engine</span>. We got to implement all that we planned. I didn\u2019t actively participate in the programming of this one, but I was <span>responsible for part of the game design</span> and for the <span>initial implementation</span> of the <span>score system</span>, besides being present from the start to the end of the project. You can <span>play it for free</span> by <span>downloading</span> and <span>installing the .apk</span> file."},{"name":"A Jornada de Vidar","link":"https://bit.ly/VidarGame","img":"/img/vidar.png","text":"Developed in a <span>group</span> as a <span>college final project</span> from <span>2019</span> to <span>2020</span>, is a <span>3D puzzle</span> with <span>adventure</span> elements and norse mythology story game. By the game, you <span>collect runes</span>, which gives you <span>powers</span>, needed to solve the <span>puzzles</span> and <span>clear the levels</span>. A boy who gets his life turned upside down from day to night can do nothing but move on. With the help of the gods he will <span>surpass</span> any <span>challenge</span> to restore his world. I participated actively of all the <span>game design</span>, <span>elaboration</span> and <span>project development</span>, being <span>responsible for part of its management</span>, <span>system developments</span>, like <span>dialogues</span> and <span>tutorial</span>, and <span>game mechanics in general</span>. Currently in <span>alpha version</span> you can <span>play it for free</span> and know more about the project (only in portuguese), as give us your feedback (english or portuguese), on the <span>link beside</span>."},{"name":"This website!","link":"https://github.com/joaopbarberino","img":"/img/github.png","text":"<span>Completely developed by me</span>, this time I even took the risk to make the layout! Made with <span>React</span> and <span>Styled Components</span>, which are <span>my favorite technologies at this moment</span>. You can see the source code, as well as of <span>other projects and studies</span> of mine that are not mentioned here, at my <span>GitHub</span>."}]},"contact":{"title":"Contact","text":"If you want to <span>talk</span>, you can find me on <span>LinkedIn</span> or send me an <span>email</span>:"}},"pt":{"header":[{"text":"Home","link":"#home"},{"text":"Quem sou eu?","link":"#who"},{"text":"Habilidades","link":"#skills"},{"text":"Projetos","link":"#projects"},{"text":"Contato","link":"#contato"}],"home":{"imgTitle":"Minha foto!","text":["Ol\xe1! Eu sou o <span>Jo\xe3o</span>, Fullstack Web Developer e futuro Game Designer.","Conhe\xe7a mais de mim e do meu trabalho aqui."],"button":"Vamos!"},"who":{"title":"Quem sou eu?","text":["Meu nome \xe9 <span>Jo\xe3o Pedro Barberino</span>, tenho <span>20</span> anos, vivo em <span>S\xe3o Paulo - Brasil</span> e programo h\xe1 mais ou menos <span>5</span> anos.","De <span>2015</span> a <span>2017</span> fiz um Ensino M\xe9dio e T\xe9cnico em <span>Automa\xe7\xe3o Industrial</span> e n\xe3o quis seguir na carreira, mas tive meus primeiros contatos com programa\xe7\xe3o: estudando <span>Ladder</span>, <span>Assembly</span> e <span>C</span>, o que me deu muito conhecimento l\xf3gico.","De <span>2018</span> a <span>2020</span> fiz um curso superior de Tecnologia em <span>Jogos Digitais</span> no Senac-SP, onde aprendi <span>Java</span>, <span>Python</span> e <span>C#</span> (com <span>Unity3D</span>).","Em <span>2019</span>, paralelamente \xe0 faculdade, entrei no projeto <span>Esta\xe7\xe3o Hack</span>, do <span>Facebook</span>, onde aprendi o b\xe1sico e essencial da programa\xe7\xe3o para web: <span>HTML5</span>, <span>CSS3</span>, <span>Javascript</span> e <span>Python</span> com <span>Django</span>, meu primeiro framework.","Logo em seguida, fui admitido na <span>JP7</span> como est\xe1giario em <span>Desenvolvimento Fullstack pra Web</span>, onde comecei a trabalhar em projetos de <span>grandes clientes</span> e aprendi e adquiri profici\xeancia sobre <span>Javascript</span>, <span>PHP</span>, <span>CSS moderno</span> e v\xe1rias de suas tecnologias de ponta para se construir um site, como: <span>Node</span>, <span>Express</span>, <span>React</span>, <span>Redux</span>, <span>Next.js</span>, <span>Laravel</span>, <span>Sass</span>, <span>Bootstrap</span>, <span>GitHub</span>, entre outros.","Na <span>JP7</span>, eu constantemente fa\xe7o alguns cursos na <span>Udemy</span> como parte do meu treinamento. J\xe1 fiz alguns: <span>The Web Developer Bootcamp</span> por <span>Colt Steele</span>, <span>Modern React with Redux</span>, <span>The Coding Interview Bootcamp: Algorithms + Data Structures</span> e <span>TypeScript The Complete Developers Guide</span>, o qual estou fazendo atualmente, por <span>Stephen Grider</span>.","O grande foco da minha <span>carreira</span> \xe9 trabalhar com <span>desenvolvimento de jogos</span>, mas at\xe9 l\xe1, continuarei dando minha total <span>dedica\xe7\xe3o</span> para proporcionar as <span>melhores solu\xe7\xf5es</span> para nossos <span>clientes</span> e aprender as mais <span>recentes tecnologias</span>."]},"skills":{"title":"Habilidades","text":"De uma forma mais ilustrada, esses s\xe3o meus <span>pontos fortes</span>: o quanto eu <span>conhe\xe7o</span> sobre cada tema e o qu\xe3o <span>confort\xe1vel</span> eu me sinto em <span>aplic\xe1-lo</span> diariamente.","strengths":[{"name":"Comunica\xe7\xe3o/ Trabalho em Equipe","value":90},{"name":"Metodologias \xc1geis","value":100},{"name":"React <sup>(meu favorito)</sup>","value":80},{"name":"GraphQL","value":55},{"name":"Laravel","value":80},{"name":"Bootstrap","value":80},{"name":"JavaScript","value":85},{"name":"Python","value":40},{"name":"PHP","value":45},{"name":"Java","value":60},{"name":"CSS","value":70}]},"projects":{"title":"Projetos","text":"E aqui alguns dos projetos em que j\xe1 trabalhei, <span>profissionalmente ou n\xe3o</span>.","works":[{"name":"CI - Central de Interc\xe2mbio","link":"https://www.ci.com.br","img":"/img/ci.png","text":"Um dos nossos <span>maiores clientes</span> na JP7, a <span>CI \xe9 a maior empresa de interc\xe2mbio no Brasil</span> e possui algumas lojas em outros pa\xedses. Somos <span>respons\xe1veis pelos seus sites h\xe1 anos</span>. L\xe1, venho fornecendo <span>manuten\xe7\xe3o</span> desde que entrei, atendendo <span>requisi\xe7\xf5es do cliente</span>, como: adicionar novas p\xe1ginas, editar antigas e at\xe9 mesmo deletar ou mudar de lugar \u2013 seguindo o sistema que j\xe1 estava l\xe1 estabelecido. \xc9 feito principalmente em <span>Laravel</span>, <span>Bootstrap</span> e <span>JavaScript</span>, usando um <span>CMS interno</span> para edi\xe7\xe3o de dados. Tamb\xe9m estive envolvido na prepara\xe7\xe3o do ambiente para <span>testar</span> algumas funcionalidades em <span>React</span>."},{"name":"CI - Feira Trabalhar e Estudar","link":"https://feiratrabalhar.ci.com.br","img":"/img/ci-feira.png","text":"Trata-se de um <span>hotsite</span> desenvolvido h\xe1 algum tempo para divulgar um <span>evento anual</span> da empresa. Ao final de <span>2019</span>, fui <span>respons\xe1vel por atualizar toda a estrutura do site</span>, principalmente os estilos, para o novo layout. Utiliza as <span>mesmas tecnologias</span> do site principal. "},{"name":"CI - Interc\xe2mbio Zion","link":"https://intercambiozion.com.br","img":"/img/ci-zion.png","text":"O cliente havia <span>solicitado a outro fornecedor</span> um hotsite simples em <span>Wordpress</span> para testar o <span>novo produto</span>. Ap\xf3s um tempo, em 2019, <span>pediram para gente</span> que o control\xe1ssemos pelo <span>CMS j\xe1 fornecido e integrado aos outros sites da empresa</span>. Como <span>evitamos</span> trabalhar com <span>Wordpress</span>, fui <span>respons\xe1vel por refazer o site em React</span>, utilizando tamb\xe9m <span>Styled Components</span>, <span>Redux-form</span>, <span>Apollo</span>, <span>GraphQL</span> e <span>Next.js para SSR</span>."},{"name":"Abipe","link":"https://www.abipe.org.br","img":"/img/abipe.png","text":"Uma <span>empresa sem fins lucrativos do Grupo CI</span>, seu site conta com uma \xe1rea exclusiva para seus usu\xe1rios, onde eles realizam algumas <span>transa\xe7\xf5es financeiras</span>. No in\xedcio de <span>2020</span>, fui <span>respons\xe1vel por trocar a biblioteca PHP do PagSeguro</span> (respons\xe1vel pelos pagamentos) da <span>vers\xe3o antiga</span> para a <span>nova</span>. O que resultou numa <span>extensiva revis\xe3o e adapta\xe7\xe3o do fluxo de pagamento j\xe1 estabelecido</span>."},{"name":"Multicarepharma","link":"https://www.multicarepharma.com","img":"/img/multicare.png","text":"Uma subsidi\xe1ria da <span>Expressa Group</span>, a Multicare \xe9 <span>respons\xe1vel por fornecer medicamentos</span> (normalmente importados) para <span>pacientes com doen\xe7as raras</span>. Foi meu primeiro <span>projeto grande</span>, o fiz em julho de <span>2019</span>. Utiliza <span>React</span>, <span>Redux-form</span>, <span>Styled Components</span>, <span>Apollo</span>, <span>GraphQL</span> e um <span>CMS interno</span> para edi\xe7\xe3o de dados."},{"name":"JP7","link":"https://www.jp7.com.br","img":"/img/jp7.png","text":"Como parte da minha <span>fun\xe7\xe3o</span> na empresa, no in\xedcio de <span>2020</span> fui <span>respons\xe1vel por atualizar o PHP e o Node de todos os nossos projetos</span>, o que resultou em <span>atualiza\xe7\xf5es e revis\xf5es de v\xe1rios pacotes e testes unit\xe1rios e resolu\xe7\xf5es de erros</span>. Voc\xea pode ver mais sobre eles no site da empresa!"},{"name":"Fight, Lord Willow!","link":"https://github.com/joaopbarberino/Fight-Lord-Willow-","img":"/img/fight-lord.png","text":"Desenvolvido em <span>grupo</span> como <span>projeto semestral pela faculdade</span> em <span>2019</span>, \xe9 um <span>jogo estilo Tower Defense</span>, para <span>Windows</span>. Apesar de estar um pouco <span>imbalanced</span> nos n\xfameros (vida dos monstros, dano das torres, recompensas etc.), tenho bastante <span>orgulho</span> dele por ter sido <span>feito completamente em Java</span>. O <span>caminho</span> que os monstros tomam \xe9 <span>decidido com intelig\xeancia artificial</span>, o que tornaria a <span>expans\xe3o do jogo</span>, ou apenas a altera\xe7\xe3o do mapa, bem simples nesse quesito. Fui <span>respons\xe1vel pela ger\xeancia do projeto</span>, <span>parte do game design</span> e <span>implementa\xe7\xe3o de diversas mec\xe2nicas essenciais</span> do jogo, que tamb\xe9m s\xe3o <span>escal\xe1veis</span>. Voc\xea pode <span>jog\xe1-lo de gra\xe7a</span> ao <span>baixar</span> o reposit\xf3rio e <span>executar o arquivo .exe</span>."},{"name":"Meteor Hunt","link":"https://github.com/waffliors/meteor-hunt","img":"/img/meteor-hunt.png","text":"Desenvolvido em <span>grupo</span> como <span>projeto semestral pela faculdade</span> em <span>2018</span>, \xe9 um <span>jogo estilo Shooter</span> baseado em Asteroids do Atari, para <span>Windows</span>. <span>Feito completamente em Python</span>, utilizando a <span>biblioteca pygame</span>. N\xe3o conseguimos implementar todo o planejado, mas o jogo est\xe1 <span>completamente funcional</span> e <span>divertido</span>. Al\xe9m de <span>tomar parte no planejamento</span>, <span>game design e em outras coisas</span>, meu <span>maior triunfo</span> aqui foi o <span>sistema de save</span>: os highscores s\xe3o salvos localmente no computador do usu\xe1rio. Voc\xea pode <span>jog\xe1-lo de gra\xe7a</span> ao <span>baixar</span> o reposit\xf3rio e <span>executar o arquivo .exe</span>."},{"name":"Cold Runner","link":"https://garahorn.itch.io/cold-runner","img":"/img/cold-runner.png","text":"Desenvolvido em <span>grupo</span> para uma <span>Game Jam</span> em <span>2020</span>, \xe9 um jogo estilo <span>Endless Runner/ de Plataforma</span>, sob o tema \u201cFrio\u201d, para <span>Android</span>. <span>Feito com C# na engine Unity3D</span>. <span>Conseguimos implementar todo o planejado</span>. <span>N\xe3o participei ativamente da programa\xe7\xe3o</span> deste aqui, mas fui <span>respons\xe1vel por parte do game design</span> e pela <span>implementa\xe7\xe3o inicial</span> do <span>sistema de pontua\xe7\xe3o</span>, al\xe9m de estar <span>presente do come\xe7o ao fim do projeto</span>. Voc\xea pode <span>jog\xe1-lo de gra\xe7a</span> ao baixar e <span>instalar o .apk</span>."},{"name":"A Jornada de Vidar","link":"https://bit.ly/VidarGame","img":"/img/vidar.png","text":"Desenvolvido em <span>grupo</span> como <span>projeto final pela faculdade</span> de <span>2019</span> a <span>2020</span>, \xe9 um jogo de <span>puzzle 3D</span> com elementos de <span>aventura</span> e narrativa baseada na mitologia n\xf3rdica. Durante o jogo, voc\xea <span>coleta runas</span>, que o concedem <span>poderes</span> necess\xe1rios para resolver os <span>puzzles e passar de fases</span>. Um garoto que tem a vida mudada do dia pra noite n\xe3o pode fazer nada al\xe9m de seguir em frente. Com a ajuda dos deuses ele ir\xe1 <span>superar</span> qualquer <span>desafio</span> para restaurar seu mundo. Participei ativamente de todo o <span>game design</span>, <span>elabora\xe7\xe3o</span> e <span>desenvolvimento do projeto</span>, sendo <span>respons\xe1vel por parte de seu gerenciamento</span>, <span>desenvolvimento de sistemas</span>, como <span>di\xe1logos</span> e <span>tutorial</span>, e <span>mec\xe2nica de jogo no geral</span>. Atualmente em <span>vers\xe3o alfa</span> voc\xea pode <span>jog\xe1-lo de gra\xe7a</span> e saber mais sobre o projeto, assim como nos dar seu feedback, no <span>link ao lado</span>."},{"name":"Esse site!","link":"https://github.com/joaopbarberino","img":"/img/github.png","text":"Desenvolvido <span>completamente por mim</span>, dessa vez arrisquei at\xe9 no layout! Feito com <span>React</span> e <span>Styled Components</span>, que s\xe3o as <span>tecnologias que mais gosto de usar no momento</span>. Voc\xea pode ver o c\xf3digo fonte, assim como <span>outros projetos e estudos</span> meus que n\xe3o est\xe3o citados aqui, no meu <span>GitHub</span>."}]},"contact":{"title":"Contato","text":"Caso queira <span>conversar</span>, voc\xea pode me encontrar no <span>LinkedIn</span> ou me mandar um <span>email</span>:"}}}')},94:function(n,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.edbb2e22.chunk.js.map