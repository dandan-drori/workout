(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9f47"],{"34c3":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"signup-modal",on:{click:function(e){e.stopPropagation()}}},[e._m(0),o("div",{staticClass:"signup-input"},[e._m(1),o("form",{on:{submit:function(t){return t.preventDefault(),e.signUp.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.userCred.username,expression:"userCred.username"}],attrs:{type:"text",placeholder:"Enter email"},domProps:{value:e.userCred.username},on:{input:function(t){t.target.composing||e.$set(e.userCred,"username",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userCred.fullname,expression:"userCred.fullname"}],attrs:{type:"text",placeholder:"Enter full name",autocomplete:"off"},domProps:{value:e.userCred.fullname},on:{input:function(t){t.target.composing||e.$set(e.userCred,"fullname",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userCred.password,expression:"userCred.password"}],attrs:{type:"password",placeholder:"Enter password"},domProps:{value:e.userCred.password},on:{input:function(t){t.target.composing||e.$set(e.userCred,"password",t.target.value)}}}),o("button",{ref:"myBtn",staticClass:"checkout-btn"},[o("span",[e._v("Continue")])])]),o("div",{staticClass:"move-login-button"},[o("small",[e._v("Already have a user? click here to "),o("router-link",{attrs:{to:"/login"}},[e._v("login")])],1)])]),e._m(2),o("div",{staticClass:"signup-socials"},[o("button",{on:{click:function(t){return t.stopPropagation(),e.loginWithFacebook.apply(null,arguments)}}},[e._m(3),e._v("Continue with Facebook ")]),o("div",{staticClass:"fb-login-button",attrs:{"data-width":"","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false"}}),o("button",{on:{click:function(t){return t.stopPropagation(),e.loginWithGoogle.apply(null,arguments)}}},[o("img",{attrs:{src:n("bbbe"),alt:"google"}}),e._v(" Continue with Google ")])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup-header"},[n("h2",[e._v("Welcome to Workout")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-txt"},[n("h2",[e._v("Sign up")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup-divider"},[n("div",{staticClass:"border"}),n("small",[e._v("or")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"material-icons",staticStyle:{color:"#4267B2"}},[o("img",{attrs:{src:n("a138"),alt:"facebook"}})])}],a=n("1da1"),r=(n("96cf"),{data:function(){return{userCred:{username:"",fullname:"",password:""},isLoading:!1}},methods:{signUp:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch({type:"signup",userCred:e.userCred});case 4:e.isLoading=!1,e.$router.push("/"),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},loginWithGoogle:function(){this.$gAuth.signIn().then((function(e){e.getAuthResponse(),e.getBasicProfile().getName(),e.getBasicProfile().getEmail(),e.getBasicProfile().getImageUrl()})).catch((function(e){console.log("error",e)}))},loginWithFacebook:function(){var e=this;window.FB.login((function(t){if(t&&t.authResponse){console.log("response",t);var n={loginType:"fb",fb:{auth:t.authResponse}};e.$store.commit("setLoginUser",n),window.FB.api("/".concat(t.authResponse.userID),(function(n){if(n){console.log(n);var o={loginType:"fb",fb:{auth:t.authResponse,user:n}};e.$store.commit("setLoginUser",o)}}),e.params),router.push("/")}}),this.params)},moveToLogin:function(){this.$emit("moveToLogin",!0)}},mounted:function(){this.$refs.myBtn.onmousemove=function(e){var t=e.offsetX,n=e.offsetY;e.target.style.setProperty("--x","".concat(t,"px")),e.target.style.setProperty("--y","".concat(n,"px"))}}}),i=r,u=n("2877"),l=Object(u["a"])(i,o,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b9f47.869d74ec.js.map