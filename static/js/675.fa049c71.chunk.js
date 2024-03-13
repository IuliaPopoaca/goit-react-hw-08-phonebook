"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{675:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r,a,i,o,c,l,s,d,u,h=t(3050),p=t(9439),x=t(2791),m=t(9531),f=t(4420),g=t(5036),b=t(3553),Z=function(n){return n.contacts.items},j=function(n){return n.filter},v=function(n){return n.contacts.error},C=function(n){return n.contacts.isLoading},P=(0,b.P1)([Z,j],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=t(168),k=t(5685),w=k.ZP.form(r||(r=(0,y.Z)(["\n  align-items: center;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 2rem;\n"]))),A=k.ZP.label(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),N=k.ZP.input(i||(i=(0,y.Z)(["\n  border: none;\n  outline: none;\n"]))),S=(k.ZP.button(o||(o=(0,y.Z)(["\n  align-self: center;\n"]))),function(n,e){e(n.target.value.replace(/[^a-zA-Z\s'-]/g,""))}),z=function(n,e){e(n.target.value.replace(/[^+\d\s().-]|^[\s().-]+|(?<=\d)[+]|\b[+]\b/g,""))},F=t(184),q=function(){var n=(0,x.useState)(""),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),i=(0,p.Z)(a,2),o=i[0],c=i[1],l=(0,f.I0)(),s=(0,f.v9)(Z);return(0,F.jsxs)(w,{children:[(0,F.jsxs)(A,{children:["Name:",(0,F.jsx)(N,{type:"text",name:"name",placeholder:"Name and surname",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){return S(n,r)}})]}),(0,F.jsxs)(A,{children:["Number:",(0,F.jsx)(N,{type:"tel",name:"number",placeholder:"Telephone number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:function(n){return z(n,c)}})]}),(0,F.jsx)(m.Z,{type:"button",action:function(){var n=s.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})),e=s.some((function(n){return n.number===o}));n?alert("".concat(t," is already in contacts!")):e?alert("".concat(o," is already in contacts!")):""!==t.trim()&&""!==o.trim()&&(l((0,g.uK)({name:t,number:o})),r(""),c(""))},children:"Add contact"})]})},L=t(5820),E=t(3832),I=t(6249),T=t(2556),_=t(7328),B=k.ZP.li(c||(c=(0,y.Z)(["\n  align-items: center;\n  background-color: transparent;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 3px;\n  gap: 10px;\n"]))),D=k.ZP.span(l||(l=(0,y.Z)(["\n  color: black;\n  font-weight: bold;\n"]))),K=k.ZP.a(s||(s=(0,y.Z)(["\n  color: black;\n  font-weight: bold;\n  cursor: pointer;\n\n  &&:hover {\n    text-decoration: underline;\n  }\n"]))),G=k.ZP.button(d||(d=(0,y.Z)(["\n  background: linear-gradient(271deg,#90c9ad,#316d80,#25caaf,#5a847d);\n  border-radius: 4px;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  outline: none;\n  padding: 8px 16px;\n  text-align: center;\n  &&:hover {\n    background: linear-gradient(271deg,#90c9ad,#316d80,#25caaf,#5a847d);\n  }\n  margin-right: 10px;\n"]))),J=k.ZP.button(u||(u=(0,y.Z)(["\n  @media only screen and (max-width: 600px) {\n    margin-right: 10px;\n  }\n  background: linear-gradient(271deg,#90c9ad,#316d80,#363a3c);\n  border-radius: 4px;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  outline: none;\n  padding: 8px 16px;\n  text-align: center;\n  &&:hover {\n    background: linear-gradient(271deg,#90c9ad,#316d80,#363a3c);\n  }\n"])));var M,Y,H,O,Q,R,U,V,W=function(n){var e=n.contact,t=(0,f.I0)(),r=(0,x.useState)(!1),a=(0,p.Z)(r,2),i=a[0],o=a[1],c=(0,x.useState)(e.name),l=(0,p.Z)(c,2),s=l[0],d=l[1],u=(0,x.useState)(e.number),h=(0,p.Z)(u,2),m=h[0],b=h[1],Z=function(){o(!1)};return(0,F.jsxs)(B,{children:[(0,F.jsxs)(D,{children:[e.name,": "]}),(0,F.jsxs)(K,{href:"tel:".concat(e.number),children:["tel: ",e.number]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(G,{onClick:function(){o(!0)},children:"Edit"}),(0,F.jsx)(L.Z,{title:"Delete the contact",description:"Are you sure to delete this contact?",onConfirm:function(){t((0,g.GK)(e.id))},onCancel:function(){return E.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,F.jsx)(J,{children:"Delete"})})]}),(0,F.jsx)(I.Z,{open:i,onClose:Z,footer:[(0,F.jsx)(T.ZP,{onClick:Z,children:"Cancel"},"cancel"),(0,F.jsx)(T.ZP,{onClick:function(){o(!1),t((0,g.mP)({id:e.id,name:s,number:m}))},children:"Save"},"save")],children:(0,F.jsxs)("div",{className:"modal-content",children:[(0,F.jsx)("label",{children:"Edit name:"}),(0,F.jsx)(_.Z,{type:"text",value:s,onChange:function(n){return S(n,d)},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,F.jsx)("label",{children:"Edit phone number:"}),(0,F.jsx)(_.Z,{type:"text",value:m,onChange:function(n){return z(n,b)},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})})]})},X=k.ZP.div(M||(M=(0,y.Z)(["\n  color: black;\n  font-size: 16px;\n"]))),$=k.ZP.ul(Y||(Y=(0,y.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),nn=k.ZP.div(H||(H=(0,y.Z)(["\n  padding: 10px;\n"]))),en=k.ZP.p(O||(O=(0,y.Z)(["\n  color: red;\n"]))),tn=t(1314),rn=function(){var n=(0,f.I0)(),e=(0,f.v9)(P),t=(0,f.v9)(v),r=(0,f.v9)(C),a=function(e){n((0,g.GK)(e))};return(0,x.useEffect)((function(){n((0,g.yF)())}),[n]),(0,F.jsxs)(X,{children:[r&&(0,F.jsx)(tn.a,{})," ",!r&&!t&&(0,F.jsx)($,{children:e&&e.length>0?e.map((function(n){return(0,F.jsx)(nn,{children:(0,F.jsx)(W,{contact:n,onDeleteContact:a})},n.id)})):(0,F.jsx)("p",{children:"No contacts available."})}),t&&(0,F.jsx)(en,{children:"An error occurred while fetching contacts."})]})},an=t(5653),on=k.ZP.form(Q||(Q=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),cn=k.ZP.label(R||(R=(0,y.Z)(["\n  color: black;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),ln=k.ZP.input(U||(U=(0,y.Z)(["\n  /* Adaug\u0103 aici orice stil specific pentru input */\n"]))),sn=k.ZP.div(V||(V=(0,y.Z)(["\n  /* Adaug\u0103 aici orice stiluri generale pentru SearchFilter */\n"]))),dn=function(){var n=(0,f.I0)(),e=(0,f.v9)(j);return(0,F.jsx)(sn,{children:(0,F.jsx)(on,{children:(0,F.jsxs)(cn,{children:["Find contact by name:",(0,F.jsx)(ln,{type:"text",name:"filter",value:e,onChange:function(e){n((0,an.T)(e.target.value.trim()))}})]})})})};var un=function(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(h.B6,{children:[(0,F.jsx)(h.ql,{children:(0,F.jsx)("title",{children:"Phonebook"})}),(0,F.jsx)(q,{}),(0,F.jsx)("h2",{children:"Contacts:"}),(0,F.jsx)(dn,{}),(0,F.jsx)(rn,{})]})})}}}]);
//# sourceMappingURL=675.fa049c71.chunk.js.map