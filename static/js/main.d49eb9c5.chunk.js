(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,t,a){e.exports={makerShadow:"rgba(217,217,217,1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",card:"card_card__1py-W",dark:"card_dark__1FdRe",light:"card_light__1Cc6G",colorful:"card_colorful__2zruV",avatar:"card_avatar__33lzN",info:"card_info__2Fslj",name:"card_name__31aE7",company:"card_company__3UM9t",title:"card_title__25_dG",email:"card_email__3uHYI",message:"card_message__2dRnZ"}},13:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__1mJeN",input:"card_add_form_input__1s9KG",textarea:"card_add_form_textarea__3OTfu",select:"card_add_form_select__2br_K",button:"card_add_form_button__3PkX4",fileInput:"card_add_form_fileInput__R7REj",fileinput:"card_add_form_fileinput__335gz"}},14:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2xQD4",input:"card_edit_form_input__uur0a",textarea:"card_edit_form_textarea__1-v1B",select:"card_edit_form_select__V3wH9",button:"card_edit_form_button__3Jpk4",fileInput:"card_edit_form_fileInput__3mXDK",fileinput:"card_edit_form_fileinput__3ZpKu"}},18:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__19aQM",list:"login_list__17HtO",item:"login_item__3A1Lj",button:"login_button__Fi6x4"}},19:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerPink:"pink",makerLightPink:"#ffeae8",container:"image_file_input_container__3Eqtx",input:"image_file_input_input__1K4NM",button:"image_file_input_button__3E8sw",grey:"image_file_input_grey__68AiQ",pink:"image_file_input_pink__1V0O7",loading:"image_file_input_loading__3OwEa",spin:"image_file_input_spin__1K71y"}},24:function(e,t,a){e.exports={makerBlue:"#1e73be",makerWhite:"white",makerBlack:"black",header:"header_header__v9FKw",logo:"header_logo__1X7aW",title:"header_title__1DXxp",logout:"header_logout__1MXam"}},28:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3lr-V",title:"preview_title__3zLS1",cards:"preview_cards__1KzyC"}},33:function(e,t,a){e.exports={makerWhite:"white",makerBlue:"#1e73be",footer:"footer_footer__1lZIc",title:"footer_title__pkoUs"}},36:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",editor:"editor_editor__1nHIK",title:"editor_title__21REx"}},37:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1Jsum",container:"maker_container__25Mis"}},41:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__cewju"}},42:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__3_GL1"}},48:function(e,t,a){e.exports={makerWhite:"white"}},60:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(1),c=a(2),i=a.n(c),o=a(39),s=a.n(o),l=(a(48),a(24)),u=a.n(l),d=Object(c.memo)((function(e){var t=e.onLogout;return Object(r.jsxs)("header",{className:u.a.header,children:[t&&Object(r.jsx)("button",{className:u.a.logout,onClick:t,children:"Logout"}),Object(r.jsx)("img",{className:u.a.logo,src:"./images/logo.png",alt:"logo"}),Object(r.jsx)("h1",{className:u.a.title,children:"Card Maker"})]})})),m=a(33),j=a.n(m),f=Object(c.memo)((function(){return Object(r.jsx)("footer",{className:j.a.footer,children:Object(r.jsx)("p",{className:j.a.title,children:"Let's make card!"})})})),_=a(18),p=a.n(_),b=a(5),h=function(e){var t=e.authService,a=Object(b.f)(),n=function(e){a.push({pathname:"/cardmaker/maker",state:{id:e}})},i=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.id)}))})),Object(r.jsxs)("section",{className:p.a.login,children:[Object(r.jsx)(d,{}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("ul",{className:p.a.list,children:[Object(r.jsx)("li",{className:p.a.item,children:Object(r.jsx)("button",{className:p.a.button,onClick:i,children:"Google"})}),Object(r.jsx)("li",{className:p.a.item,children:Object(r.jsx)("button",{className:p.a.button,onClick:i,children:"Github"})})]})]}),Object(r.jsx)(f,{})]})},O=a(41),x=a.n(O),g=a(25),v=a(15),k=a(13),N=a.n(k),y=a(42),C=a.n(y),w=Object(c.memo)((function(e){var t=e.name,a=e.onClick;return Object(r.jsx)("button",{className:C.a.button,onClick:a,children:t})})),R=Object(c.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(c.useRef)(),i=Object(c.useRef)(),o=Object(c.useRef)(),s=Object(c.useRef)(),l=Object(c.useRef)(),u=Object(c.useRef)(),d=Object(c.useRef)(),m=Object(c.useState)({fileName:null,fileURL:null}),j=Object(v.a)(m,2),f=j[0],_=j[1];return Object(r.jsxs)("form",{ref:n,className:N.a.form,children:[Object(r.jsx)("input",{ref:i,className:N.a.input,type:"text",name:"name",placeholder:"Name"}),Object(r.jsx)("input",{ref:o,className:N.a.input,type:"text",name:"company",placeholder:"Company"}),Object(r.jsxs)("select",{ref:s,className:N.a.select,name:"theme",placeholder:"Theme",children:[Object(r.jsx)("option",{placeholder:"light",children:"light"}),Object(r.jsx)("option",{placeholder:"dark",children:"dark"}),Object(r.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(r.jsx)("input",{ref:l,className:N.a.input,type:"text",name:"title",placeholder:"Title"}),Object(r.jsx)("input",{ref:u,className:N.a.input,type:"text",name:"email",placeholder:"Email"}),Object(r.jsx)("textarea",{ref:d,className:N.a.textarea,name:"message",placeholder:"Message"}),Object(r.jsx)("div",{className:N.a.fileinput,children:Object(r.jsx)(t,{name:f.fileName,onFileChange:function(e){console.log(e),_({fileName:e.name,fileURL:e.url})}})}),Object(r.jsx)(w,{name:"\ud655\uc778",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:i.current.value||"",company:o.current.value||"",theme:s.current.value,title:l.current.value||"",email:u.current.value||"",message:d.current.value||"",fileName:f.fileName||"",fileURL:f.fileURL||""};n.current.reset(),_({fileName:null,fileURL:null}),a(t)}})]})})),I=a(26),L=a(14),F=a.n(L),G=function(e){var t=e.FileInput,a=e.card,i=e.updateCard,o=e.deleteCard,s=Object(c.useRef)(),l=Object(c.useRef)(),u=Object(c.useRef)(),d=Object(c.useRef)(),m=Object(c.useRef)(),j=Object(c.useRef)(),f=a.name,_=a.company,p=a.title,b=a.email,h=a.message,O=a.theme,x=a.fileName,g=function(e){null!=e.currentTarget&&(e.preventDefault(),i(Object(n.a)(Object(n.a)({},a),{},Object(I.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(r.jsxs)("form",{className:F.a.form,children:[Object(r.jsx)("input",{className:F.a.input,type:"text",name:"name",ref:s,value:f,onChange:g}),Object(r.jsx)("input",{className:F.a.input,type:"text",name:"company",ref:l,value:_,onChange:g}),Object(r.jsxs)("select",{className:F.a.select,name:"theme",ref:u,value:O,onChange:g,children:[Object(r.jsx)("option",{value:"light",children:"light"}),Object(r.jsx)("option",{value:"dark",children:"dark"}),Object(r.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(r.jsx)("input",{className:F.a.input,type:"text",name:"title",ref:d,value:p,onChange:g}),Object(r.jsx)("input",{className:F.a.input,type:"text",name:"email",ref:m,value:b,onChange:g}),Object(r.jsx)("textarea",{className:F.a.textarea,name:"message",ref:j,value:h,onChange:g}),Object(r.jsx)("div",{className:F.a.fileinput,children:Object(r.jsx)(t,{name:x,onFileChange:function(e){i(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(r.jsx)(w,{name:"\uc0ad\uc81c",onClick:function(e){e.preventDefault(),o(a)}})]})},S=a(36),E=a.n(S),U=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,c=e.updateCard,i=e.deleteCard;return Object(r.jsxs)("section",{className:E.a.editor,children:[Object(r.jsx)("h1",{className:E.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(r.jsx)(G,{FileInput:t,card:a[e],updateCard:c,deleteCard:i},e)})),Object(r.jsx)(R,{FileInput:t,onAdd:n})]})},W=a(10),A=a.n(W);function K(e){switch(e){case"light":return A.a.light;case"dark":return A.a.dark;case"colorful":return A.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var P=Object(c.memo)((function(e){var t=e.card,a=t.name,n=t.company,c=t.title,i=t.email,o=t.message,s=t.theme,l=t.fileURL||"./images/default_logo.png";return Object(r.jsxs)("li",{className:"".concat(A.a.card," ").concat(K(s)),children:[Object(r.jsx)("img",{className:A.a.avatar,src:l,alt:"profile"}),Object(r.jsxs)("div",{className:A.a.info,children:[Object(r.jsx)("h1",{className:A.a.name,children:a}),Object(r.jsx)("p",{className:A.a.company,children:n}),Object(r.jsx)("p",{className:A.a.title,children:c}),Object(r.jsx)("p",{className:A.a.email,children:i}),Object(r.jsx)("p",{className:A.a.message,children:o})]})]})})),B=a(28),D=a.n(B),M=function(e){var t=e.cards;return Object(r.jsxs)("section",{className:D.a.preview,children:[Object(r.jsx)("h1",{className:D.a.title,children:"Card Preview"}),Object(r.jsx)("ul",{className:D.a.cards,children:Object.keys(t).map((function(e){return Object(r.jsx)(P,{card:t[e]},e)}))})]})},z=a(37),T=a.n(z),J=function(e){var t=e.FileInput,a=e.authService,i=e.cardRepository,o=Object(b.f)().state,s=Object(c.useState)({}),l=Object(v.a)(s,2),u=l[0],m=l[1],j=Object(c.useState)(o&&o.id),_=Object(v.a)(j,2),p=_[0],h=_[1],O=Object(b.f)(),x=Object(c.useCallback)((function(){a.logout()}),[a]);Object(c.useEffect)((function(){if(p){var e=i.syncCards(p,(function(e){m(e)}));return function(){e()}}}),[p,i]),Object(c.useEffect)((function(){a.onAuthChange((function(e){e?h(e.uid):O.push("/cardmaker")}))}),[a,p,O]);var g=function(e){m((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(p,e)};return Object(r.jsxs)("section",{className:T.a.maker,children:[Object(r.jsx)(d,{onLogout:x}),Object(r.jsxs)("div",{className:T.a.container,children:[Object(r.jsx)(U,{FileInput:t,cards:u,addCard:g,updateCard:g,deleteCard:function(e){m((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(p,e)}}),Object(r.jsx)(M,{cards:u})]}),Object(r.jsx)(f,{})]})};var X=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(r.jsx)("div",{className:x.a.app,children:Object(r.jsx)(g.a,{children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/cardmaker",children:Object(r.jsx)(h,{authService:a})}),Object(r.jsx)(b.a,{path:"/maker",children:Object(r.jsx)(J,{FileInput:t,authService:a,cardRepository:n})})]})})})},H=a(20),Q=a(21),V=a(29),Z=(a(53),a(55),V.a.initializeApp({apiKey:"AIzaSyBjpmtCa3uGoSBdYKdaTM8FR4LepIUfNJw",authDomain:"businesscard-39dca.firebaseapp.com",databaseURL:"https://businesscard-39dca-default-rtdb.firebaseio.com",projectId:"businesscard-39dca"})),q=Z.auth(),Y=Z.database(),$=new V.a.auth.GoogleAuthProvider,ee=new V.a.auth.GithubAuthProvider,te=function(){function e(){Object(H.a)(this,e)}return Object(Q.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return q.signInWithPopup(t)}},{key:"logout",value:function(){q.signOut()}},{key:"onAuthChange",value:function(e){q.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return $;case"Github":return ee;default:throw new Error("not supported provider ".concat(e))}}}]),e}(),ae=a(22),ne=a.n(ae),re=a(27),ce=function(){function e(){Object(H.a)(this,e)}return Object(Q.a)(e,[{key:"upload",value:function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","zk9qd3ea"),e.next=5,fetch("https://api.cloudinary.com/v1_1/isz01122/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ie=a(19),oe=a.n(ie),se=Object(c.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,i=Object(c.useState)(!1),o=Object(v.a)(i,2),s=o[0],l=o[1],u=Object(c.useRef)(),d=function(){var e=Object(re.a)(ne.a.mark((function e(a){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,l(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:oe.a.container,children:[Object(r.jsx)("input",{ref:u,className:oe.a.input,type:"file",accept:"image/*",name:"file",onChange:d}),!s&&Object(r.jsx)("button",{className:"".concat(oe.a.button," ").concat(a?oe.a.pink:oe.a.grey),onClick:function(e){e.preventDefault(),u.current.click()},children:a||"\uc0ac\uc9c4 \ub4f1\ub85d"}),s&&Object(r.jsx)("div",{className:oe.a.loading})]})})),le=function(){function e(){Object(H.a)(this,e)}return Object(Q.a)(e,[{key:"syncCards",value:function(e,t){var a=Y.ref("".concat(e,"/cards/"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){Y.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){Y.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),ue=new te,de=new ce,me=new le,je=Object(c.memo)((function(e){return Object(r.jsx)(se,Object(n.a)(Object(n.a)({},e),{},{imageUploader:de}))}));s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(X,{authService:ue,FileInput:je,cardRepository:me})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.d49eb9c5.chunk.js.map