(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-121d90a2"],{"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),c=n("785a"),a=n("17c2"),i=n("9112"),u=function(t){if(t&&t.forEach!==a)try{i(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)u(r[s]&&r[s].prototype);u(c)},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),c=o("forEach");t.exports=c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"80c5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"edit-workout"},[t.workout?n("h2",[t._v(t._s(t.workout.name)+" - Edit Mode")]):t._e(),t.workout?n("ul",t._l(t.workout.exercises,(function(e){return n("li",{key:e._id},[n("span",[t._v(t._s(e.name))]),n("button",{on:{click:function(n){return t.changeWeight(e,-1.25)}}},[t._v("-1.25")]),n("button",{on:{click:function(n){return t.changeWeight(e,-1)}}},[t._v("-1")]),n("span",[t._v(t._s(e.weight)+"kg")]),n("button",{on:{click:function(n){return t.changeWeight(e,1)}}},[t._v("+1")]),n("button",{on:{click:function(n){return t.changeWeight(e,1.25)}}},[t._v("+1.25")])])})),0):t._e(),n("button",{attrs:{disabled:!t.isWorkoutChanged},on:{click:t.onSaveWorkout}},[t._v("Save")])])},o=[],c=n("1da1"),a=(n("96cf"),n("d81d"),n("b0c0"),n("159b"),n("40b5")),i={data:function(){return{workout:null,workoutCopy:null,isWorkoutChanged:!1}},methods:{changeWeight:function(t,e){var n=this;this.workout.exercises=this.workout.exercises.map((function(r){var o=r.name,c=r.weight;if(o===t.name){if(c+e<0)return{name:o,weight:0};var a=!1;return n.workoutCopy.exercises.forEach((function(r,o){r.name===t.name&&r.weight-e!==n.workout.exercises[o].weight&&(a=!0)})),n.isWorkoutChanged=a,{name:o,weight:c+e}}return{name:o,weight:c}}))},onSaveWorkout:function(){this.$store.dispatch("saveWorkout",{workout:this.workout})}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.prev=1,e.next=4,a["a"].getWorkoutById(n);case 4:r=e.sent,t.workout=r,t.workoutCopy=JSON.parse(JSON.stringify(r)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},u=i,s=n("2877"),f=Object(s["a"])(u,r,o,!1,null,null,null);e["default"]=f.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,n){var r=n("83ab"),o=n("5e77").EXISTS,c=n("9bf2").f,a=Function.prototype,i=a.toString,u=/^\s*function ([^ (]*)/,s="name";r&&!o&&c(a,s,{configurable:!0,get:function(){try{return i.call(this).match(u)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),c=n("7b0b"),a=n("50c4"),i=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,h=6==t,l=7==t,d=5==t||h;return function(v,k,w,g){for(var p,b,m=c(v),_=o(m),x=r(k,w,3),y=a(_.length),W=0,E=g||i,S=e?E(v,y):n||l?E(v,0):void 0;y>W;W++)if((d||W in _)&&(p=_[W],b=x(p,W,m),t))if(e)S[W]=b;else if(b)switch(t){case 3:return!0;case 5:return p;case 6:return W;case 2:u.call(S,p)}else switch(t){case 4:return!1;case 7:u.call(S,p)}return h?-1:s||f?f:S}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,c=n("1dde"),a=c("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-121d90a2.c2a3bc41.js.map