(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f9eeaf2"],{"159b":function(e,t,o){var r=o("da84"),n=o("fdbc"),a=o("785a"),s=o("17c2"),i=o("9112"),u=function(e){if(e&&e.forEach!==s)try{i(e,"forEach",s)}catch(t){e.forEach=s}};for(var c in n)u(r[c]&&r[c].prototype);u(a)},"17c2":function(e,t,o){"use strict";var r=o("b727").forEach,n=o("a640"),a=n("forEach");e.exports=a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"7e55":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"add"},[o("h2",[e._v("Add New Workout")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.onSaveWorkout.apply(null,arguments)}}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.workout.name,expression:"workout.name"}],attrs:{type:"text",name:"workout-name",autocomplete:"off"},domProps:{value:e.workout.name},on:{blur:e.onBlur,input:function(t){t.target.composing||e.$set(e.workout,"name",t.target.value)}}}),o("span",{staticClass:"placeholder",on:{click:e.onFocusPlaceholder}},[e._v("Workout name")])]),e._l(e.workout.exercises,(function(t,r){return o("section",{key:r},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.workout.exercises[r].name,expression:"workout.exercises[idx].name"}],attrs:{type:"text",name:"exercise-name",autocomplete:"off"},domProps:{value:e.workout.exercises[r].name},on:{blur:e.onBlur,input:function(t){t.target.composing||e.$set(e.workout.exercises[r],"name",t.target.value)}}}),o("span",{staticClass:"placeholder",on:{click:e.onFocusPlaceholder}},[e._v("Exercise name")])]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.workout.exercises[r].weight,expression:"workout.exercises[idx].weight"}],attrs:{type:"number",name:"exercise-weight",autocomplete:"off"},domProps:{value:e.workout.exercises[r].weight},on:{blur:e.onBlur,input:function(t){t.target.composing||e.$set(e.workout.exercises[r],"weight",t.target.value)}}}),o("span",{staticClass:"placeholder",on:{click:e.onFocusPlaceholder}},[e._v("Weight (kg)")])]),o("button",{on:{click:function(t){return e.onRemoveExercise(r)}}},[e._v("X")])])})),o("button",{attrs:{type:"button"},on:{click:e.onAddExercise}},[e._v("+")]),o("button",[e._v("Save Workout")])],2)])},n=[],a=o("1da1"),s=(o("96cf"),o("159b"),o("d81d"),o("b0c0"),o("a434"),{data:function(){return{workout:{name:"",exercises:[{name:"",weight:0}]}}},computed:{},methods:{onAddExercise:function(){this.workout.exercises.push({name:"",weight:0})},onSaveWorkout:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.workout.exercises.length){t.next=2;break}return t.abrupt("return");case 2:if(o=document.querySelectorAll("input"),r=!1,o.forEach((function(e){e.value||(r=!0)})),r){t.next=17;break}return e.workout.exercises=e.workout.exercises.map((function(e){var t=e.name,o=e.weight;return{name:t,weight:+o}})),t.prev=7,e.$store.dispatch("setFetchUserMsg"),t.next=11,e.$store.dispatch("saveWorkout",{workout:e.workout});case 11:e.$store.dispatch("setSuccessUserMsg"),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](7),e.$store.dispatch("setFailUserMsg");case 17:case"end":return t.stop()}}),t,null,[[7,14]])})))()},onFocusPlaceholder:function(e){e.target.previousSibling.focus(),e.target.style.animation="shrink 0.3s ease-in-out forwards"},onBlur:function(e){if(!e.target.value){var t=e.target.nextSibling;t.style.animation="expand 0.3s ease-in-out forwards"}},onRemoveExercise:function(e){this.workout.exercises.splice(e,1)}}}),i=s,u=o("2877"),c=Object(u["a"])(i,r,n,!1,null,null,null);t["default"]=c.exports},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},d81d:function(e,t,o){"use strict";var r=o("23e7"),n=o("b727").map,a=o("1dde"),s=a("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4f9eeaf2.84b2872e.js.map