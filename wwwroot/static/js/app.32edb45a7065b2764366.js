webpackJsonp([1],{"248q":function(e,t){},Gb2h:function(e,t){},I24J:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o=s("/ocq"),a=s("woOf"),r=s.n(a),i={name:"Login",data:function(){return{showLogin:!0,user:{email:"",password:""},newUser:{name:"",email:"",password:"",confirmPassword:""}}},methods:{login:function(){this.$store.dispatch("login",this.user)},createUser:function(){if(this.newUser.password!==this.newUser.confirmPassword)return this.resetFields(),void alert("Passwords do not match!");this.$store.dispatch("createUser",this.newUser),this.resetFields()},resetFields:function(){r()(this.$data,this.$options.data.call(this))}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[1==e.showLogin?s("form",{staticClass:"form-group",on:{submit:function(t){t.preventDefault(),e.login()}}},[s("h1",[e._v("LOGIN")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn submit",attrs:{type:"submit"}},[e._v("Submit")])]):e._e(),e._v(" "),0==e.showLogin?s("form",{staticClass:"form-group",on:{submit:function(t){t.preventDefault(),e.createUser()}}},[s("h1",[e._v("CREATE ACCOUNT")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.confirmPassword,expression:"newUser.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.newUser.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.newUser,"confirmPassword",t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn submit",attrs:{type:"submit"},on:{click:function(t){e.showLogin=!0}}},[e._v("Submit")])]):e._e(),e._v(" "),s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"bg-1"},[s("button",{staticClass:"btn btn-link",on:{click:function(t){e.showLogin=!1}}},[e._v("Create User")]),e._v(" "),s("button",{staticClass:"btn btn-link",on:{click:function(t){e.showLogin=!0}}},[e._v("Login")])])])])},staticRenderFns:[]};var l=s("VU/8")(i,c,!1,function(e){s("248q")},"data-v-09e74b3a",null).exports,u={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"home"})},staticRenderFns:[]};var m=s("VU/8")({name:"Home",data:function(){return{}}},u,!1,function(e){s("Gb2h")},"data-v-0ea04fba",null).exports;n.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"Login",component:l},{path:"/",name:"Home",component:m}]}),d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var v=s("VU/8")({name:"App"},d,!1,function(e){s("I24J")},null,null).exports,w=s("NYxO"),f=s("mtWM"),h=s.n(f),g=!window.location.host.includes("localhost")?"":"//localhost:5000/",U=h.a.create({baseURL:g+"account/",timeout:5e3});n.a.use(w.a);var _=new w.a.Store({state:{},mutations:{},actions:{createUser:function(e,t){e.commit,e.dispatch;U.post("register",t).then(function(e){p.push({name:"Home"})}).catch(function(e){console.log("Invalid username or password"),p.push({name:"Login"})})}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:p,store:_,components:{App:v},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.32edb45a7065b2764366.js.map