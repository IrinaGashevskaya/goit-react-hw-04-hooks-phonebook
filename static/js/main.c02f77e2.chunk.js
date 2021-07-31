(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),o=(n(12),n(7)),i=n(2),l=n(21),u=(n(13),n(0)),b=function(e){var t=e.addContact,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),b=l[0],d=l[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}};return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r,b),s(""),d("")},children:[Object(u.jsxs)("label",{className:"label-form",children:["Name",Object(u.jsx)("input",{className:"input",type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m})]}),Object(u.jsxs)("label",{className:"label-form",children:["Number",Object(u.jsx)("input",{className:"input",type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m})]}),Object(u.jsx)("button",{className:"button-form",type:"submit",children:"Add contact"})]})},d=(n(15),function(e){var t=e.contacts,n=e.onDelete;return Object(u.jsx)("ul",{className:"list",children:t.map((function(e){return Object(u.jsxs)("li",{className:"item",children:[Object(u.jsxs)("p",{className:"name",children:[e.name,": ",e.number]}),Object(u.jsx)("button",{className:"button","data-key":e.id,type:"button",name:"delete",onClick:n,children:"Delete"})]},e.id)}))})}),m=(n(16),function(e){var t=e.value,n=e.handleChange;return Object(u.jsxs)("label",{className:"label",children:["Find contacts by name",Object(u.jsx)("input",{className:"input-filter",type:"text",value:t,onChange:n})]})});n(17),n(18);function j(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),j=s[0],h=s[1],f=(console.log(j),n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"header",children:"Phonebook"}),Object(u.jsx)(b,{addContact:function(e,t){n.map((function(e){return e.name.toLowerCase()})).includes(e.toLowerCase().trim())&&alert("".concat(e," is already in contacts "));var a={name:e,number:t,id:Object(l.a)()};c((function(e){return[].concat(Object(o.a)(e),[a])}))}}),Object(u.jsx)("h2",{className:"title",children:"Contacts"}),Object(u.jsx)(m,{value:j,handleChange:function(e){console.log(e),h(e.target.value)}}),Object(u.jsx)(d,{contacts:f,onDelete:function(e){var t=e.target.getAttribute("data-key");c((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))}})]})}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),h()}],[[19,1,2]]]);
//# sourceMappingURL=main.c02f77e2.chunk.js.map