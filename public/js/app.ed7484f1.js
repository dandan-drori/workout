(function(e){function t(t){for(var n,s,a=t[0],c=t[1],i=t[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function s(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-0a910844":"cf5cf460","chunk-7690a82e":"91d9dd33","chunk-f02708e4":"f450bc74"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(e);var i=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",i.name="ChunkLoadError",i.type=n,i.request=u,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3c61":function(e,t,r){},"40b5":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("1da1"),o=(r("96cf"),r("99af"),r("bc3a")),u=r.n(o),s="/api/",a=u.a.create({withCredentials:!0}),c={get:function(e,t){return i(e,"GET",t)},post:function(e,t){return i(e,"POST",t)},put:function(e,t){return i(e,"PUT",t)},delete:function(e,t){return i(e,"DELETE",t)}};function i(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,e.prev=2,e.next=5,a({url:"".concat(s).concat(t),method:r,data:n,params:"GET"===r?n:null});case 5:return o=e.sent,e.abrupt("return",o.data);case 9:throw e.prev=9,e.t0=e["catch"](2),console.log("Had Issues ".concat(r,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(n)),console.dir(e.t0),e.t0.response&&e.t0.response.status,e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),l.apply(this,arguments)}var p={getCurrentWorkout:d,moveToNextWorkout:h,getWorkoutById:k,saveWorkout:b,deleteWorkout:y,getAllWorkouts:g};function d(){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("workout");case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),f.apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("workout/move");case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),m.apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("workout/all");case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),v.apply(this,arguments)}function k(e){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("workout/"+t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),w.apply(this,arguments)}function b(e){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t._id){e.next=7;break}return e.next=4,c.put("workout",t);case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,c.post("workout",t);case 9:return e.abrupt("return",e.sent);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),x.apply(this,arguments)}function y(e){return W.apply(this,arguments)}function W(){return W=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.delete("workout/"+t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),W.apply(this,arguments)}},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"app"},[r("Header"),r("UserMsg"),r("PwaInstall"),r("router-view")],1)},u=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"header"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("Workout")]),r("section",{staticClass:"nav"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/edit"}},[e._v("Edit")]),r("router-link",{attrs:{to:"/add"}},[e._v("Add")])],1)],1)},a=[],c={},i=c,l=r("2877"),p=Object(l["a"])(i,s,a,!1,null,null,null),d=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{class:"user-msg "+e.userMsg.type},[r("p",[e._v(" "+e._s(e.userMsg.msg)+" "),r("span",[e._v(e._s(e.userMsg.highlight))])])])},h=[],m={computed:{userMsg:function(){return this.$store.getters.userMsg}}},g=m,v=Object(l["a"])(g,f,h,!1,null,null,null),k=v.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{on:{click:e.installPwa}})},b=[],x=r("1da1"),y=(r("96cf"),{computed:{deferredPrompt:function(){return this.$store.getters.deferredPrompt}},methods:{installPwa:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return hideInstallPromotion(),e.deferredPrompt.prompt(),t.prev=2,t.next=5,e.deferredPrompt.userChoice;case 5:r=t.sent,n=r.outcome,console.log("User response to the install prompt: ".concat(n)),e.$store.commit("setDeferredPrompt",null),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()}}}),W=y,_=Object(l["a"])(W,w,b,!1,null,null,null),j=_.exports;r("2ca0");function M(){var e=window.matchMedia("(display-mode: standalone)").matches;return document.referrer.startsWith("android-app://")?"pwa":navigator.standalone||e?"standalone":"browser"}var O=void 0,P={components:{Header:d,UserMsg:k,PwaInstall:j}};window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),O.$store.commit("setDeferredPrompt",e),showInstallPromotion()})),window.addEventListener("appinstalled",(function(){hideInstallPromotion(),O.$store.commit("setDeferredPrompt",null)})),"browser"!==M()&&hideInstallPromotion();var R=P,C=Object(l["a"])(R,o,u,!1,null,null,null),E=C.exports,T=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"home"},[r("Workout",{attrs:{workout:e.currWorkout}}),r("button",{on:{click:e.moveToNextWorkout}},[r("p",[e._v("→")])])],1)},$=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"workout"},[e.workout?r("section",{staticClass:"content"},[r("h2",[e._v(e._s(e.workout.name))]),r("table",[e._m(0),r("tbody",e._l(e.workout.exercises,(function(t){return r("tr",{key:t.name},[r("td",[e._v(e._s(t.name))]),r("td",[e._v(e._s(t.weight)+"kg")])])})),0)])]):r("section",{staticClass:"workout-loader"},[r("div",{staticClass:"title skeleton"}),r("table",[e._m(1),r("tbody",e._l(e.skeletons,(function(e){return r("tr",{key:e},[r("td",[r("div",{staticClass:"skeleton",style:{width:e+"px"}})]),r("td",[r("div",{staticClass:"skeleton",style:{width:e/2+"px"}})])])})),0)])])])},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("Weight")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("Weight")])])])}],D={props:{workout:Object},data:function(){return{skeletons:[120,138,119,147,189]}}},I=D,A=Object(l["a"])(I,S,N,!1,null,null,null),F=A.exports,L={components:{Workout:F},computed:{currWorkout:function(){return this.$store.getters.currWorkout}},methods:{moveToNextWorkout:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("moveToNextWorkout");case 3:e.$store.dispatch("loadCurrWorkout"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},created:function(){this.$store.dispatch("loadCurrWorkout")}},H=L,G=Object(l["a"])(H,U,$,!1,null,null,null),q=G.exports;n["a"].use(T["a"]);var B=[{path:"/edit/:id",component:function(){return r.e("chunk-0a910844").then(r.bind(null,"80c5"))}},{path:"/edit",component:function(){return r.e("chunk-f02708e4").then(r.bind(null,"1071"))}},{path:"/add",component:function(){return r.e("chunk-7690a82e").then(r.bind(null,"7e55"))}},{path:"/",component:q}],J=new T["a"]({routes:B}),z=J,K=r("2f62"),Q=r("40b5"),V={state:{currWorkout:null,workouts:[],savedWorkout:null},getters:{currWorkout:function(e){return e.currWorkout},workouts:function(e){return e.workouts},savedWorkout:function(e){return e.savedWorkout}},mutations:{setCurrentWorkout:function(e,t){e.currWorkout=t},setWorkouts:function(e,t){e.workouts=t},updateWorkout:function(e,t){e.savedWorkout=t},addWorkout:function(e,t){}},actions:{loadCurrWorkout:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,Q["a"].getCurrentWorkout();case 4:n=t.sent,r("setCurrentWorkout",n),t.next=12;break;case 8:throw t.prev=8,t.t0=t["catch"](1),console.log("Store - loadCurrWorkout",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},moveToNextWorkout:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.prev=1,t.next=4,Q["a"].moveToNextWorkout();case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t["catch"](1),console.log("Store - moveToNextWorkout",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},loadWorkouts:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,Q["a"].getAllWorkouts();case 4:n=t.sent,r("setWorkouts",n),t.next=12;break;case 8:throw t.prev=8,t.t0=t["catch"](1),console.log("Store - loadWorkouts",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},saveWorkout:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,o,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.workout,r.prev=2,u=o._id?"updateWorkout":"addWorkout",r.next=6,Q["a"].saveWorkout(o);case 6:return s=r.sent,n({type:u,workout:s}),r.abrupt("return",s);case 11:throw r.prev=11,r.t0=r["catch"](2),console.log("Store - saveWorkout",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[2,11]])})))()}}},X={state:{userMsg:{msg:"",highlight:"",type:"done"},deferredPrompt:null},getters:{userMsg:function(e){return e.userMsg}},mutations:{setUserMsg:function(e,t){e.userMsg=t},setDeferredPrompt:function(e,t){e.deferredPrompt=t}},actions:{setFetchUserMsg:function(e){var t=e.commit;t("setUserMsg",{msg:"Fetching",highlight:"...",type:"fetch"})},setSuccessUserMsg:function(e){var t=e.commit,r=e.dispatch;t("setUserMsg",{msg:"Workout updated",highlight:":)",type:"success"}),r("setDoneUserMsg")},setFailUserMsg:function(e){var t=e.commit,r=e.dispatch;t("setUserMsg",{msg:"Workout update failed",highlight:":(",type:"fail"}),r("setDoneUserMsg")},setDoneUserMsg:function(e){var t=e.commit;setTimeout((function(){t("setUserMsg",{msg:"",highlight:"",type:"done"})}),2e3)},setErrorUserMsg:function(e){var t=e.commit,r=e.dispatch;t("setUserMsg",{msg:"Connection error",highlight:"!",type:"error"}),r("setDoneUserMsg")}}};n["a"].use(K["a"]);var Y=new K["a"].Store({modules:{workoutModule:V,userMsgModule:X}}),Z=r("9483");Object(Z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("3c61");n["a"].config.productionTip=!1,new n["a"]({router:z,store:Y,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.ed7484f1.js.map