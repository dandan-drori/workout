(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27cd1072"],{1071:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"edit"},[t.workout?r("h2",[t._v(t._s(t.workout.name)+" - Edit Mode")]):t._e(),t.workout?r("ul",t._l(t.workout.exercises,(function(e){return r("li",{key:e._id},[r("span",[t._v(t._s(e.name))]),r("button",{on:{click:function(r){return t.changeWeight(e,-1.25)}}},[t._v("-1.25")]),r("button",{on:{click:function(r){return t.changeWeight(e,-1)}}},[t._v("-1")]),r("span",[t._v(t._s(e.weight)+"kg")]),r("button",{on:{click:function(r){return t.changeWeight(e,1)}}},[t._v("+1")]),r("button",{on:{click:function(r){return t.changeWeight(e,1.25)}}},[t._v("+1.25")])])})),0):t._e(),r("button",{attrs:{disabled:!t.isWorkoutChanged},on:{click:t.onSaveWorkout}},[t._v("Save")])])},o=[],u=r("1da1"),a=(r("96cf"),r("d81d"),r("b0c0"),r("159b"),r("7db0"),r("b64b"),r("40b5")),i={data:function(){return{workout:null,workoutCopy:null,isWorkoutChanged:!1}},computed:{workouts:function(){return this.$store.getters.workouts},savedWorkout:function(){return this.$store.getters.savedWorkout}},methods:{changeWeight:function(t,e){var r=this;this.workout.exercises=this.workout.exercises.map((function(n){var o=n.name,u=n.weight;if(o===t.name){if(u+e<0)return{name:o,weight:0};var a=!1;return r.workoutCopy.exercises.forEach((function(n,o){n.name===t.name&&n.weight-e!==r.workout.exercises[o].weight&&(a=!0)})),r.isWorkoutChanged=a,{name:o,weight:u+e}}return{name:o,weight:u}}))},onSaveWorkout:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,navigator.onLine){e.next=4;break}return t.$store.dispatch("setErrorUserMsg"),e.abrupt("return");case 4:return e.next=6,t.$store.dispatch("saveWorkout",{workout:t.workout});case 6:t.workout=t.savedWorkout,t.workoutCopy=JSON.parse(JSON.stringify(t.savedWorkout)),t.isWorkoutChanged=!1,t.$store.dispatch("setSuccessUserMsg"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),t.$store.dispatch("setFailUserMsg");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$route.params.id,e.prev=1,n=t.workouts.find((function(t){var e=t._id;return e===r})),n&&Object.keys(t.workouts).length){e.next=7;break}return e.next=6,a["a"].getWorkoutById(r);case 6:n=e.sent;case 7:t.workout=n,t.workoutCopy=JSON.parse(JSON.stringify(n)),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()}},c=i,s=r("2877"),f=Object(s["a"])(c,n,o,!1,null,null,null);e["default"]=f.exports},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),u=r("785a"),a=r("17c2"),i=r("9112"),c=function(t){if(t&&t.forEach!==a)try{i(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)c(n[s]&&n[s].prototype);c(u)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),u=o("forEach");t.exports=u?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").find,u=r("44d2"),a="find",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u(a)},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),u=r("df75"),a=r("d039"),i=a((function(){u(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return u(o(t))}})},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,u=r("1dde"),a=u("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-27cd1072.fee4ba06.js.map