(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f02708e4"],{"07d3":function(t,e,n){t.exports=n.p+"img/Legs and Shoulders.74ad935a.jpg"},1071:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"edit"},[o("h2",[t._v("Choose a workout to edit:")]),o("section",{staticClass:"links"},t._l(t.workouts,(function(e){return o("router-link",{key:e._id,attrs:{to:"edit/"+e._id}},[o("section",[t.workoutsImages.includes(e.name)?o("img",{attrs:{src:n("710a")("./"+e.name+".jpg"),alt:"workout"}}):o("img",{attrs:{src:n("7d0f"),alt:"workout"}}),o("p",[t._v(t._s(e.name))])])])})),1)])},s=[],r={data:function(){return{workoutsImages:["Back and Biceps","Chest and Triceps","Legs and Shoulders"]}},computed:{workouts:function(){return this.$store.getters.workouts}},created:function(){this.$store.dispatch("loadWorkouts")}},a=r,i=n("2877"),u=Object(i["a"])(a,o,s,!1,null,null,null);e["default"]=u.exports},"26a5":function(t,e,n){t.exports=n.p+"img/Chest and Triceps.c3fb7053.jpg"},"710a":function(t,e,n){var o={"./Back and Biceps.jpg":"b466","./Chest and Triceps.jpg":"26a5","./Default.jpg":"7d0f","./Legs and Shoulders.jpg":"07d3"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="710a"},"7d0f":function(t,e,n){t.exports=n.p+"img/Default.22bddcf5.jpg"},b466:function(t,e,n){t.exports=n.p+"img/Back and Biceps.ad187551.jpg"}}]);
//# sourceMappingURL=chunk-f02708e4.f450bc74.js.map