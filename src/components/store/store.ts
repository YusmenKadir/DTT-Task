import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    mealCategories: [], // holds meal categories data received from API
    mealsArray: [], // holds homepage meals data received from API
    randomMeal: [], // holds random page meal data received from API
    ingredients: [], // holds random page ingredients data
    ingredients2: [], // holds detail page ingredients data
    mealId: "", // holds the id of a meal for which the user wants to see info in details page
  },
  getters: {
    //returns meal categories on categories page
    returnMealCategories: (state) => {
      return state.mealCategories;
    },
    // returns home page meals on homepage
    returnHomePageMeals: (state) => {
      return state.mealsArray;
    },
    // returns random meal on random page
    returnRandomPageMeal: (state) => {
      return state.randomMeal;
    },
    // returns random meal ingredients on random page
    returnRandomPageIngredients: (state) => {
      return state.ingredients;
    },
    // returns meal ingredients on detail page
    returnDetailPageIngredients: (state) => {
      return state.ingredients2;
    },
  },
  mutations: {
    //receive categories data and change state
    fetchCategories: (state, payload) => {
      state.mealCategories = payload;
    },
    //receive home page meals data and change state
    fetchHomePageMeals: (state, payload) => {
      state.mealsArray = payload;
    },
    //receive random meal data and change state
    fetchRandomPageMeal: (state, payload) => {
      state.randomMeal = payload;
    },
    //receive random page ingredients and change state
    addIngredients: (state, payload) => {
      state.ingredients.push(payload);
    },
    //receive detail page ingredients and change state
    addIngredientsDetailPage: (state, payload) => {
      state.ingredients2.push(payload);
    },

    //receive mealId and change state
    specifyMealId: (state, payload) => {
      state.mealId = payload;
    },
  },

  actions: {
    //fetch categories data from api and trigger fetchCategories mutation
    fetchCategories({ commit }): void {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => commit("fetchCategories", data.categories))
        .catch((err) => console.log(err));
    },
    // fetch homepage meals data from api then trigger addDetailPageIngredients action and trigger fetchHomePageMeals mutation
    fetchHomePageMeals({ dispatch, commit }): void {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=potato")
        .then((res) => res.json())
        .then((data) =>
          data.meals.forEach((meal) => {
            dispatch("addDetailPageIngredients", meal).then(() => {
              commit("fetchHomePageMeals", data.meals);
            });
          })
        )
        .catch((err) => console.log(err));
    },
    // fetch random meal data from api , trigger addIngredients action and trigger fetchRandomPageMeal mutation
    fetchRandomPageMeal({ dispatch, commit }): void {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) =>
          dispatch("addIngredients", data.meals[0]).then(() => {
            commit("fetchRandomPageMeal", data.meals);
          })
        )
        .catch((err) => console.log(err));
    },
    //receive the meal object as parameter ,loop from 1 to 20.If ingredients exist trigger addIngredients mutation and pass ingredients as parameter, if not exit from loop
    addIngredients({ commit }, meal): void {
      for (const i in Array.from(Array(20))) {
        if (meal[`strIngredient${+i + 1}`]) {
          commit(
            "addIngredients",
            `${meal[`strIngredient${+i + 1}`]} - ${meal[`strMeasure${+i + 1}`]}`
          );
        } else {
          break;
        }
      }
    },
    //receive the meal object as parameter ,loop from 1 to 20.If ingredients exist trigger mutation
    //by passing ingredients as parameter but only for a specific meal - the one for which the user wants to see details.
    addDetailPageIngredients({ commit }, meal): void {
      for (const i in Array.from(Array(20))) {
        if (meal.idMeal == this.state.mealId) {
          if (meal[`strIngredient${+i + 1}`]) {
            commit(
              "addIngredientsDetailPage",
              `${meal[`strIngredient${+i + 1}`]} - ${
                meal[`strMeasure${+i + 1}`]
              }`
            );
          } else {
            break;
          }
        }
      }
    },
    // this action will be triggered when user enters the detail page.It will receive the mealId and trigger the mutation
    specifyMealId({ commit }, payload: string): void {
      commit("specifyMealId", payload);
    },
  },
});
