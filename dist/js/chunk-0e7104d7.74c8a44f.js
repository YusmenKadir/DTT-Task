(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e7104d7"],{4251:function(t,e,s){},"57da":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"home-heading"},[s("h1",[t._v("Have a look at some of our meals...")]),s("button",{staticClass:"btn btn-sort",on:{click:t.sortMeals}},[t._v(" Sort Meals By Name ")])]),s("div",{staticClass:"meals"},t._l(t.HomeMeals,(function(e){return s("article",{key:e.strMeal,staticClass:"parent"},[s("article",{staticClass:"article-child"},[s("h2",[t._v(t._s(e.strMeal))])]),s("img",{attrs:{src:e.strMealThumb,alt:"#"}}),s("button",{staticClass:"info",on:{click:function(s){return t.goToDetailPage(e.idMeal)}}},[t._v(" View Full Info ")])])})),0)])},n=[],r=s("2b0e"),i=r["a"].extend({methods:{goToDetailPage:function(t){this.$router.push({name:"details",params:{productId:t}})},sortMeals:function(){this.$store.state.mealsArray.sort((function(t,e){return t.strMeal>e.strMeal||t.strMeal===e.strMeal&&t.idMeal>e.idMeal?1:-1}))}},computed:{HomeMeals:function(){return this.$store.getters.returnHomePageMeals}},created:function(){this.$store.state.ingredients=[],this.$store.dispatch("fetchHomePageMeals")},destroyed:function(){this.$store.state.ingredients2=[]}}),o=i,l=(s("dbc2"),s("2877")),c=Object(l["a"])(o,a,n,!1,null,null,null);e["default"]=c.exports},dbc2:function(t,e,s){"use strict";var a=s("4251"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-0e7104d7.74c8a44f.js.map