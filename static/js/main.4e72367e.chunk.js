(this.webpackJsonpmyprofile=this.webpackJsonpmyprofile||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,i){},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),a=i(9),n=i.n(a),r=i(3),l=(i(16),i(42)),o=i(43),j=i(44),d=i(45),h=i(0);function b(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(h.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("a",{href:"#intro",className:"logo",children:"Meilie"}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(l.a,{className:"icon"}),Object(h.jsx)("span",{children:"+1 208-757-1680"})]}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(o.a,{className:"icon"}),Object(h.jsx)("span",{children:"chloe.huangts@gmail.com"})]}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(j.a,{className:"icon"}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/chloe-huang-ts/",children:Object(h.jsx)("span",{children:"LinkedIn"})})]}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(d.a,{className:"icon"}),Object(h.jsx)("a",{href:"https://github.com/chloehuang18",children:Object(h.jsx)("span",{children:"Github"})})]})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)("div",{className:"hambuger",onClick:function(){return i(!t)},children:[Object(h.jsx)("span",{className:"line1"}),Object(h.jsx)("span",{className:"line2"}),Object(h.jsx)("span",{className:"line3"})]})})]})})}i(22);var u=i(8);function O(){var e=Object(c.useRef)(),t=Object(c.useRef)();return Object(c.useEffect)((function(){Object(u.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Engineer","Developer"]}),Object(u.a)(t.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Science","Analytics"]})}),[]),Object(h.jsxs)("div",{className:"intro",id:"intro",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("div",{className:"imgContainer",children:Object(h.jsx)("img",{src:"asset/me2.png",alt:""})})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h2",{children:"Hi There, I'm"}),Object(h.jsx)("h1",{children:"Chloe Huang"}),Object(h.jsxs)("h3",{children:["Software ",Object(h.jsx)("span",{ref:e})]}),Object(h.jsxs)("h3",{children:["Data ",Object(h.jsx)("span",{ref:t})]})]}),Object(h.jsx)("a",{href:"#portfolio",children:Object(h.jsx)("img",{src:"asset/down.png",alt:""})})]})]})}i(23);function g(e){var t=e.id,i=e.title,c=e.active,s=e.setSelected;return Object(h.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:i})}i(24);var m=[{id:1,title:"Web Design",img:"asset/web1.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:2,title:"Web Library",img:"asset/palette.png",url:"https://chloehuang18.github.io/color-palette/"},{id:3,title:"Data Structure",img:"asset/datastructure.png",url:"https://github.com/chloehuang18/Python-Data-Structure"},{id:4,title:"Data Visualization",img:"asset/r.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"}],f=[{id:1,title:"Print Certificate",img:"asset/web1.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:2,title:"Web Library",img:"asset/palette.png",url:"https://chloehuang18.github.io/color-palette/"},{id:3,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:4,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"}],p=[{id:1,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:2,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:3,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:4,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"}],x=[{id:1,title:"Data Visualization",img:"asset/r.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"},{id:2,title:"Data Structure",img:"asset/datastructure.png",url:"https://github.com/chloehuang18/Python-Data-Structure"},{id:3,title:"Web Design",img:"asset/design.png",url:"https://chloehuang18.github.io/DavidOMcKayLibraryProfessionalCertification/"}];function v(){var e=Object(c.useState)("featured"),t=Object(r.a)(e,2),i=t[0],s=t[1],a=Object(c.useState)([]),n=Object(r.a)(a,2),l=n[0],o=n[1];return Object(c.useEffect)((function(){switch(i){case"featured":o(m);break;case"web":o(f);break;case"mobile":o(p);break;case"data":o(x);break;default:o(m)}}),[i]),Object(h.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(h.jsx)("h1",{children:"Portfolio"}),Object(h.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"},{id:"data",title:"Data"}].map((function(e){return Object(h.jsx)(g,{title:e.title,active:i===e.id,setSelected:s,id:e.id})}))}),Object(h.jsx)("div",{className:"container",children:l.map((function(e){return Object(h.jsx)("div",{className:"item",children:Object(h.jsxs)("a",{href:e.url,children:[Object(h.jsx)("img",{src:e.img,alt:""}),Object(h.jsx)("h3",{children:e.title})]})})}))})]})}i(25);function N(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),i=t[0],s=t[1],a=[{id:1,title:"R Learning",description:"LinkedIn",img:"asset/certificate1.png"},{id:2,title:"Node.js",description:"LinkedIn",img:"asset/certificate2.png"},{id:1,title:"Google Data Analytics",description:"Google",img:"asset/certificate3.png"}],n=function(e){s("left"===e?i>0?i-1:2:i<a.length-1?i+1:0)};return Object(h.jsxs)("div",{className:"certificate",id:"certificate",children:[Object(h.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:a.map((function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsxs)("div",{className:"leftContainer",children:[Object(h.jsx)("div",{className:"imgContainer",children:Object(h.jsx)("img",{src:"asset/award.png",alt:""})}),Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("p",{children:e.description}),Object(h.jsx)("span",{children:"Project"})]})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(h.jsx)("img",{src:"asset/arrow.png",className:"arrow left",alt:"",onClick:function(){return n("left")}}),Object(h.jsx)("img",{src:"asset/arrow.png",className:"arrow right",alt:"",onClick:function(){return n("right")}})]})}i(26);function y(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(h.jsxs)("div",{className:"contact",id:"contact",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("img",{src:"asset/shake.svg",alt:""})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("h2",{children:"Contact Me"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Email"}),Object(h.jsx)("textarea",{placeholder:"Message"}),Object(h.jsx)("button",{type:!0,children:"Send"}),i&&Object(h.jsx)("span",{children:"Thank you! I will reply ASAP.  "})]})]})]})}i(27),i(28);function C(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(h.jsx)("div",{className:"menu "+(t&&"active"),children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#intro",children:"Home"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#certificate",children:"Certificates"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var D=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(b,{menuOpen:i,setMenuOpen:s}),Object(h.jsx)(C,{menuOpen:i,setMenuOpen:s}),Object(h.jsxs)("div",{className:"sections",children:[Object(h.jsx)(O,{}),Object(h.jsx)(v,{}),Object(h.jsx)(N,{}),Object(h.jsx)(y,{})]})]})};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.4e72367e.chunk.js.map