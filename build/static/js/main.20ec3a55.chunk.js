(this["webpackJsonpchatting-app"]=this["webpackJsonpchatting-app"]||[]).push([[0],{127:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),j=n.n(r),i=(n(127),n(11)),s=n(23),o=n(214),b=n(227),O=n(219),l=n(175),u=n(31),x=n(3);var d=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),j=Object(s.a)(r,2);return j[0],j[1],Object(x.jsx)(o.a,{container:!0,justifyContent:"center",style:{padding:"1em",marginTop:"10px"},children:Object(x.jsx)(o.a,{item:!0,xs:6,children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",spacing:3,children:[Object(x.jsx)(o.a,{item:!0,children:"\uc774\ub984\uc744 \uc785\ub825\ud558\uace0 \uc785\uc7a5\uc744 \ud558\uc2dc\uc624."}),Object(x.jsx)(o.a,{item:!0,children:Object(x.jsx)(b.a,{name:"userName",onChange:function(e){a(e.target.value)},variant:"outlined"})}),Object(x.jsx)(o.a,{item:!0,children:Object(x.jsx)(O.a,{variant:"contained",component:u.b,to:"/room?name=".concat(n),children:"\uc785\uc7a5"})})]})})})})},h=n(114),m=n(110),f=n.n(m),p=n(111),v=n.n(p),g=n(218),y=n(220),S=n(221),C=n(222),F=n(223),k=n(112),I=n.n(k);var w=function(e){var t=e.ListData;return Object(x.jsx)(g.a,{subheader:Object(x.jsx)(y.a,{children:"\uc811\uc18d\uc790 \ubaa9\ub85d"}),style:{height:"150px",overflow:"auto"},children:t.map((function(e,t){var n=e.name;return Object(x.jsxs)(S.a,{dense:!0,children:[Object(x.jsx)(C.a,{children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(F.a,{children:n})]},t)}))})},D=n(66);var E,L=function(e){var t=e.name,n=e.text,c=e.user;console.log(c,t);var a=c===t?"flex-end":"flex-start";return Object(x.jsxs)(o.a,{container:!0,direction:"column",alignItems:a,spacing:1,style:{padding:"10px 10px"},children:[Object(x.jsx)(o.a,{item:!0,children:Object(x.jsx)(D.a,{children:t})}),Object(x.jsx)(o.a,{item:!0,children:Object(x.jsx)(l.a,{elevation:3,style:{display:"inline",padding:"10px 20px"},children:n})})]})};var M=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],j=a[1];console.log(r);var i=Object(c.useState)(""),u=Object(s.a)(i,2),d=(u[0],u[1]),m=Object(c.useState)(""),p=Object(s.a)(m,2),g=p[0],y=p[1],S=Object(c.useState)([]),C=Object(s.a)(S,2),F=C[0],k=C[1];console.log(F);var I=Object(c.useState)([]),D=Object(s.a)(I,2),M=D[0],P=D[1];return Object(c.useEffect)((function(){E=v()("/");var e=f.a.parse(t.search),n=e.name,c=e.room;return j(n),d(c),E.emit("join",{name:n,room:c}),E.on("usersInfo",(function(e){P(e)})),function(){E.disconnect()}}),["/",t.search]),Object(c.useEffect)((function(){E.on("message",(function(e){k((function(t){return[].concat(Object(h.a)(t),[e])}))}))}),[]),Object(x.jsxs)(o.a,{container:!0,justifyContent:"center",style:{padding:"1em"},children:[Object(x.jsx)(o.a,{item:!0,xs:12,sm:9,md:7,children:Object(x.jsx)(l.a,{children:Object(x.jsx)(w,{ListData:M})})}),Object(x.jsx)(o.a,{item:!0,xs:12,sm:9,md:7,children:Object(x.jsxs)(l.a,{children:[F.map((function(e,t){return Object(x.jsx)(L,{name:e.name,text:e.message,user:r},t)})),Object(x.jsxs)(o.a,{container:!0,justifyContent:"center",children:[Object(x.jsx)(b.a,{variant:"outlined",value:g,onChange:function(e){y(e.target.value)},onKeyPress:function(e){!function(e){g&&"Enter"===e.key&&E.emit("sendMessage",r,g,(function(){y("")}))}(e)}}),Object(x.jsx)(O.a,{variant:"contained",onClick:function(){E.emit("sendMessage",r,g,(function(){y("")}))},children:"\uc804\uc1a1"})]})]})})]})},P=n(224),T=n(225),B=n(226),J=n(113),U=n.n(J),K=n(229);var N=function(e){var t=e.menuOpen;return Object(x.jsx)(P.a,{position:"static",children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(K.a,{mdUp:!0,children:Object(x.jsx)(B.a,{onClick:function(){t((function(e){return!e}))},edge:"start",color:"inherit","aria-label":"menu",children:Object(x.jsx)(U.a,{})})}),Object(x.jsx)(D.a,{variant:"h6",children:"\ucc44\ud305 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158"})]})})},q=n(230);var z=function(e){return e.menuStatus,Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(K.a,{smUp:!0,children:Object(x.jsx)(q.a,{variant:"temporary",anchor:"left",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(u.b,{to:"/",children:"\ud648"}),Object(x.jsx)("br",{}),Object(x.jsx)(u.b,{to:"/join",children:"\uc785\uc7a5\ud558\uae30"}),Object(x.jsx)("br",{})]})})}),Object(x.jsx)(K.a,{xsDown:!0,children:Object(x.jsx)(q.a,{variant:"permanent",anchor:"left",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(u.b,{to:"/",children:"\ud648"}),Object(x.jsx)("br",{}),Object(x.jsx)(u.b,{to:"/join",children:"\uc785\uc7a5\ud558\uae30"}),Object(x.jsx)("br",{})]})})})]})};var A=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{menuOpen:a}),Object(x.jsx)(z,{menuStatus:n})]})};var G=function(){return Object(x.jsx)(A,{})};var H=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(x.jsx)(i.a,{path:"/room",component:M}),Object(x.jsx)(i.a,{path:"/test",component:G})]})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,j=t.getTTFB;n(e),c(e),a(e),r(e),j(e)}))};j.a.render(Object(x.jsx)(u.a,{children:Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(H,{})})}),document.getElementById("root")),Q()}},[[173,1,2]]]);
//# sourceMappingURL=main.20ec3a55.chunk.js.map