(this.webpackJsonpmyprofile=this.webpackJsonpmyprofile||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,i){},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(1),c=i.n(s),n=i(7),a=i.n(n),r=i(3),l=(i(16),i(42)),j=i(43),d=i(0);function b(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"Meilie"}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:"+1 208-757-1680"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{children:"chloe.huangts@gmail.com"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hambuger",onClick:function(){return i(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}i(22);var o=i(6);function O(){var e=Object(s.useRef)(),t=Object(s.useRef)();return Object(s.useEffect)((function(){Object(o.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Engineer","Developer"]}),Object(o.a)(t.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Science","Analytics"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"asset/me2.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hi There, I'm"}),Object(d.jsx)("h1",{children:"Chloe Huang"}),Object(d.jsxs)("h3",{children:["Software ",Object(d.jsx)("span",{ref:e})]}),Object(d.jsxs)("h3",{children:["Data ",Object(d.jsx)("span",{ref:t})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{src:"asset/down.png",alt:""})})]})]})}i(23);function g(e){var t=e.id,i=e.title,s=e.active,c=e.setSelected;return Object(d.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:i})}i(24);var m=[{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"},{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"}],h=[{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"},{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"}],u=[{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"},{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"}],x=[{id:1,title:"Web Design",img:"asset/design.png"},{id:2,title:"Web Design",img:"asset/design.png"},{id:1,title:"Web Design",img:"asset/design.png"}];function p(){var e=Object(s.useState)("featured"),t=Object(r.a)(e,2),i=t[0],c=t[1],n=Object(s.useState)([]),a=Object(r.a)(n,2),l=a[0],j=a[1];return Object(s.useEffect)((function(){switch(i){case"featured":j(m);break;case"web":j(h);break;case"mobile":j(u);break;case"data":j(x);break;default:j(m)}}),[i]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"},{id:"data",title:"Data"}].map((function(e){return Object(d.jsx)(g,{title:e.title,active:i===e.id,setSelected:c,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})}))})]})}i(25);function f(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),i=t[0],c=t[1],n=[{id:1,title:"R Learning",description:"LinkedIn",img:"asset/certificate1.png"},{id:2,title:"Node.js",description:"LinkedIn",img:"asset/certificate2.png"},{id:1,title:"Google Data Analytics",description:"Google",img:"asset/certificate3.png"}],a=function(e){c("left"===e?i>0?i-1:2:i<n.length-1?i+1:0)};return Object(d.jsxs)("div",{className:"certificate",id:"certificate",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:n.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"asset/award.png",alt:""})}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("span",{children:"Project"})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(d.jsx)("img",{src:"asset/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(d.jsx)("img",{src:"asset/arrow.png",className:"arrow right",alt:"",onClick:function(){return a("right")}})]})}i(26);function v(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],c=t[1];return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"asset/shake.svg",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact Me"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("textarea",{placeholder:"Message"}),Object(d.jsx)("button",{type:!0,children:"Send"}),i&&Object(d.jsx)("span",{children:"Thank you! I will reply ASAP.  "})]})]})]})}i(27),i(28);function N(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return i(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return i(!1)},children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{onClick:function(){return i(!1)},children:Object(d.jsx)("a",{href:"#certificate",children:"Certificates"})}),Object(d.jsx)("li",{onClick:function(){return i(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var k=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],c=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(b,{menuOpen:i,setMenuOpen:c}),Object(d.jsx)(N,{menuOpen:i,setMenuOpen:c}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(O,{}),Object(d.jsx)(p,{}),Object(d.jsx)(f,{}),Object(d.jsx)(v,{})]})]})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.0b3f88fd.chunk.js.map