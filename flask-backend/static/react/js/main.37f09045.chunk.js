(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{38:function(e,a,t){},66:function(e,a,t){e.exports=t(96)},71:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(71),t(38),t(128)),o=t(131),s=t(133),m=t(135),d=t(136),u=t(134),h=t(55),b=t.n(h),E=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function p(){var e=E();return l.a.createElement("div",{className:e.root},l.a.createElement(o.a,{position:"static"},l.a.createElement(s.a,null,l.a.createElement(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(b.a,null)),l.a.createElement(m.a,{variant:"h6",className:e.title},"News"),l.a.createElement(d.a,{color:"inherit"},"Login"))))}var v=t(6),g=t(26),F=t(19),j=t(14),O=t(35),f=t(37),N=t(27),w=t(137),_=t(56),C=t.n(_),y=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){var e;return Object(g.a)(this,t),(e=a.call(this)).state={email:"",password:"",name:"",hasAgreed:!1},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(F.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(v.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state),C.a.post("http://127.0.0.1:5000/",this.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t;return l.a.createElement("div",{className:"FormCenter"},l.a.createElement("h2",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},l.a.createElement("div",{className:"FormField"},l.a.createElement(w.a,(e={id:"outlined-basic",label:"Full Name",variant:"outlined",type:"text"},Object(v.a)(e,"id","name"),Object(v.a)(e,"className","FormField__Input"),Object(v.a)(e,"placeholder","Enter your full name"),Object(v.a)(e,"name","name"),Object(v.a)(e,"value",this.state.name),Object(v.a)(e,"onChange",this.handleChange),e))),l.a.createElement("br",null),l.a.createElement("div",{className:"FormField"},l.a.createElement(w.a,(a={id:"outlined-basic",label:"Password",variant:"outlined",type:"password"},Object(v.a)(a,"id","password"),Object(v.a)(a,"className","FormField__Input"),Object(v.a)(a,"placeholder","Enter your password"),Object(v.a)(a,"name","password"),Object(v.a)(a,"value",this.state.password),Object(v.a)(a,"onChange",this.handleChange),a))),l.a.createElement("br",null),l.a.createElement("div",{className:"FormField"},l.a.createElement(w.a,(t={id:"outlined-basic",label:"E-Mail Address",variant:"outlined",type:"email"},Object(v.a)(t,"id","email"),Object(v.a)(t,"className","FormField__Input"),Object(v.a)(t,"placeholder","Enter your email"),Object(v.a)(t,"name","email"),Object(v.a)(t,"value",this.state.email),Object(v.a)(t,"onChange",this.handleChange),t))),l.a.createElement("br",null),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__CheckboxLabel"},l.a.createElement("input",{className:"FormField__Checkbox",type:"checkbox",name:"hasAgreed",value:this.state.hasAgreed,onChange:this.handleChange})," I agree all statements in ",l.a.createElement("a",{href:"",className:"FormField__TermsLink"},"terms of service"))),l.a.createElement("br",null),l.a.createElement(N.b,{to:"/",className:"FormField__Link"},"I'm already member"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button"},"Sign Up"))))}}]),t}(n.Component),k=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){var e;return Object(g.a)(this,t),(e=a.call(this)).state={email:"",password:""},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(F.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(v.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"render",value:function(){var e,a;return l.a.createElement("div",{className:"FormCenter"},l.a.createElement("h2",null,"Sign In"),l.a.createElement("form",Object(v.a)({onSubmit:this.handleSubmit,className:"FormFields"},"onSubmit",this.handleSubmit),l.a.createElement("div",{className:"FormField"},l.a.createElement(w.a,(e={id:"outlined-basic",label:"E-Mail Address",variant:"outlined",type:"email"},Object(v.a)(e,"id","email"),Object(v.a)(e,"className","FormField__Input"),Object(v.a)(e,"placeholder","Enter your email"),Object(v.a)(e,"name","email"),Object(v.a)(e,"value",this.state.email),Object(v.a)(e,"onChange",this.handleChange),e))),l.a.createElement("br",null),l.a.createElement("div",{className:"FormField"},l.a.createElement(w.a,(a={id:"outlined-basic",label:"Password",variant:"outlined",type:"password"},Object(v.a)(a,"id","password"),Object(v.a)(a,"className","FormField__Input"),Object(v.a)(a,"placeholder","Enter your password"),Object(v.a)(a,"name","password"),Object(v.a)(a,"value",this.state.password),Object(v.a)(a,"onChange",this.handleChange),a))),l.a.createElement("br",null),l.a.createElement(N.b,{to:"/sign-up",className:"FormField__Link"},"Create an account"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button"},"Sign In"))))}}]),t}(n.Component),S=t(24);var x=function(){return l.a.createElement(N.a,{basename:"/"},l.a.createElement(p,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App__Aside"}),l.a.createElement("div",{className:"App__Form"},l.a.createElement(S.a,{exact:!0,path:"/",component:k}),l.a.createElement(S.a,{path:"/sign-up",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.37f09045.chunk.js.map