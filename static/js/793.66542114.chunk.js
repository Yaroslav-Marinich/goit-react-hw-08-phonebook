"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[793],{8793:function(e,n,a){a.r(n),a.d(n,{default:function(){return N}});var s=a(9434),t=a(6052),o=a(5218),c=a(5705),r=a(6727),i=a(2286),l=a(184),m=r.Ry().shape({name:r.Z_().matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan").required("Required!"),number:r.Z_().matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required!")}),h=function(){var e=(0,s.I0)(),n=(0,s.v9)(i.Af);return(0,l.jsxs)("div",{className:"phonebookContainer",children:[(0,l.jsx)("h1",{className:"phonebookTitle",children:"Phonebook"}),(0,l.jsx)(c.J9,{initialValues:{name:"",number:""},validationSchema:m,onSubmit:function(a,s){n.find((function(e){return e.name===a.name}))?o.ZP.error("".concat(a.name," is already in contacts.")):(e((0,t.rE)(a,a.name)),s.resetForm())},children:(0,l.jsxs)(c.l0,{action:"",className:"phonebookForm",children:[(0,l.jsxs)("label",{htmlFor:"",className:"phonebookLabel",children:["Name",(0,l.jsx)(c.gN,{name:"name",placeholder:"Jane Doe",className:"phonebookInput"}),(0,l.jsx)(c.Bc,{name:"name",component:"span",className:"phonebookError"})]}),(0,l.jsxs)("label",{htmlFor:"",className:"phonebookLabel",children:["Number",(0,l.jsx)(c.gN,{name:"number",placeholder:"000-00-00",className:"phonebookInput"}),(0,l.jsx)(c.Bc,{name:"number",component:"span",className:"phonebookError"})]}),(0,l.jsx)("button",{type:"submit",className:"phonebookBtn",children:"Add contact"})]})})]})},d=a(3313),u=function(e){var n=e.contact,a=n.name,o=n.number,c=n.id,r=(0,s.I0)();return(0,l.jsxs)("div",{className:"contactCompContainer",children:[(0,l.jsxs)("p",{className:"contactCompText",children:[a," : ",o]}),(0,l.jsx)("button",{onClick:function(){return r((0,t.GK)(c))},className:"contactCompBtn",children:(0,l.jsx)(d.Ybf,{})})]})},p=a(2791),x=a(9134),b=function(){var e=(0,s.v9)(i.jj),n=(0,s.v9)(i.xU),a=(0,s.v9)(i.zh),o=(0,s.I0)();return(0,p.useEffect)((function(){o((0,t.K2)())}),[o]),(0,l.jsxs)("div",{className:"contactsContainer",children:[(0,l.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),n?(0,l.jsx)(x.Z,{}):(0,l.jsx)("ul",{className:"contactsList",children:e.map((function(e){return(0,l.jsx)("li",{className:"contactsItem",children:(0,l.jsx)(u,{contact:e})},e.id)}))}),!(null!==e&&void 0!==e&&e.length)&&!a&&!n&&(0,l.jsx)("div",{className:"noContactsText",children:"There are no contacts in your Phonebook."}),a&&(0,l.jsx)("div",{children:a})]})},j=a(1634),f=function(){var e=(0,s.I0)(),n=(0,s.v9)(i.AD);return(0,l.jsx)("div",{className:"filterContainer",children:(0,l.jsxs)("label",{className:"filterLabel",children:["Find contact by name",(0,l.jsx)("input",{type:"text",className:"filterInput",name:"filter",value:n,onChange:function(n){e((0,j.f)(n.currentTarget.value.toLowerCase()))}})]})})},N=function(){var e=(0,s.I0)(),n=(0,s.v9)(i.xU);return(0,p.useEffect)((function(){e((0,t.K2)())}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)("title",{children:"Your PhoneBook"}),(0,l.jsx)(h,{}),(0,l.jsx)(f,{}),(0,l.jsx)("div",{children:n&&"Request in progress..."}),(0,l.jsx)(b,{})]})}}}]);
//# sourceMappingURL=793.66542114.chunk.js.map