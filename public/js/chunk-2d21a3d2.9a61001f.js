(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home"},[t.currWorkout?o("Workout",{attrs:{workout:t.currWorkout}}):t._e(),t.isNoWorkouts?t._e():o("button",{on:{click:t.moveToNextWorkout}},[o("p",[t._v("→")])])],1)},s=[],n=o("1da1"),u=(o("96cf"),o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"workout"},[t.isNoWorkouts?o("h3",{staticClass:"no-workout"},[t._v(" You have no workouts. ")]):t._e(),o("router-link",{attrs:{to:"/workout/new"}},[t._v("Create your first one now!")]),t.workout&&!t.isNoWorkouts?o("section",{staticClass:"content"},[o("h2",[t._v(t._s(t.workout.name))]),o("table",[t._m(0),o("tbody",t._l(t.workout.exercises,(function(e){return o("tr",{key:e.name},[o("td",[t._v(t._s(e.name))]),o("td",[t._v(t._s(e.weight)+"kg")])])})),0)])]):t._e(),t.workout||t.isNoWorkout?t._e():o("section",{staticClass:"workout-loader"},[o("div",{staticClass:"title skeleton"}),o("table",[t._m(1),o("tbody",t._l(t.skeletons,(function(t){return o("tr",{key:t},[o("td",[o("div",{staticClass:"skeleton",style:{width:t+"px"}})]),o("td",[o("div",{staticClass:"skeleton",style:{width:t/2+"px"}})])])})),0)])])],1)}),c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Name")]),o("th",[t._v("Weight")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Name")]),o("th",[t._v("Weight")])])])}],a={props:{workout:Object},data:function(){return{skeletons:[120,138,119,147,189]}},computed:{isNoWorkouts:function(){var t=this.workout,e=t.name,o=t.exercises;return"No Workout"===e&&!o.length}}},i=a,l=o("2877"),k=Object(l["a"])(i,u,c,!1,null,null,null),h=k.exports,d={components:{Workout:h},computed:{currWorkout:function(){return this.$store.getters.currWorkout},isNoWorkouts:function(){if(this.currWorkout){var t=this.currWorkout,e=t.name,o=t.exercises;return"No Workout"===e&&!o.length}}},methods:{moveToNextWorkout:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("moveToNextWorkout");case 3:t.$store.dispatch("loadCurrWorkout"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},created:function(){this.$store.dispatch("loadCurrWorkout")}},_=d,v=Object(l["a"])(_,r,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.9a61001f.js.map