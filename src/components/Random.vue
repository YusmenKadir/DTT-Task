<template>
  <div class="random">
    <div class="random-heading">
      <h1>Have a look at this random meal...</h1>
    </div>

    <div
      class="random-item"
      v-for="item in returnRandomPageMeal"
      :key="item.idMeal"
    >
      <div class="item-img">
        <MealThumb
          :mealImage="item.strMealThumb"
          :mealName="item.strMeal"
          :mealArea="item.strArea"
          :mealVideo="item.strYoutube"
        >
        </MealThumb>
        <button class="random-btn" @click="fetchRandomPageMeal">
          Generate Another Meal
        </button>
      </div>
      <div class="item-info">
        <Instructions :instructions="item.strInstructions"> </Instructions>
        <Ingredients :ingredients="returnRandomPageIngredients"> </Ingredients>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Ingredients from "./Ingredients.vue";
import Instructions from "./Instructions.vue";
import MealThumb from "./MealThumb.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {
    Ingredients,
    Instructions,
    MealThumb,
  },

  methods: {
    fetchRandomPageMeal() {
      this.$store.state.ingredients = []; // clear random page ingredients
      this.$store.dispatch("fetchRandomPageMeal"); // trigger action again
    },
  },

  // map the result of the getters to a computed attribute
  computed: {
    ...mapGetters(["returnRandomPageIngredients", "returnRandomPageMeal"]),
  },

  // before component is added to the DOM trigger action at the store
  created(): void {
    this.$store.dispatch("fetchRandomPageMeal");
  },
});
</script>

<style lang="scss">
.random {
  background: #000;
  color: #fff;
  height: auto;
  width: 100%;
  position: relative;

  &-heading {
    text-align: center;
    margin: 0 auto;
    width: 50%;

    h1 {
      padding: 20px 0;
      background: rgba(lighten($color: #000000, $amount: 10), 0.8);
    }
  }

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 50px;

    .item-img {
      text-align: center;
      flex: 1;
      flex-direction: column;
      height: auto;

      h2 {
        margin: 10px 0;
      }

      h3 {
        margin: 20px 0;
      }
      .random-btn {
        padding: 10px;
        background: #000;
        color: #fff;
        outline: none;
        font-size: 18px;
        border: 1px solid rgba(#ccc, 0.8);
        transition: all 0.3s ease-in;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        margin: 10px auto;

        &:hover {
          border: 1px solid rgba(#ffbc00, 0.8);
        }
      }

      .btn-view-onYoutube {
        font-size: 18px;
        padding: 10px;
        border: 1px solid rgba(#ccc, 0.8);
        border-radius: 5px;
        transition: all 0.3s ease-in;
        display: inline-block;

        &:hover {
          border-color: #ffbc00;
        }
      }

      img {
        width: 300px;
        height: 300px;
        border: 1px solid rgba(#ccc, 0.8);
        transition: border-color 0.3s ease-in;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          border-color: #ffbc00;
        }
      }
    }

    .item-info {
      display: flex;
      flex-direction: column;
      flex: 1;

      .instructions {
        padding: 10px;
        h2 {
          text-align: center;
          padding: 10px 0px;
        }
      }

      .ingredients {
        h2 {
          text-align: center;
          padding: 10px 0px;
        }
        ul {
          list-style: none;
        }

        ul li {
          background-color: rgba(lighten($color: #000000, $amount: 10), 0.3);
          border: 1px solid rgba(#ccc, 0.3);
          margin: 5px auto;
          padding: 5px;
          text-align: center;
          width: 50%;
        }
      }
    }
  }
}
@media (max-device-width: 450px) {
  .random {
    &-item {
      .item-img {
        img {
          width: 275px;
          height: 275px;
        }
      }
    }
  }
}
@media (min-device-width: 450px) and (max-device-width: 769px) {
  .random {
    &-heading {
      width: 100%;
      h1 {
        font-size: 20px;
      }
    }

    &-item {
      display: grid;
      grid-template-columns: 1fr;
      .item-img {
        font-size: 18px;
      }

      .item-info {
        .instructions {
          text-align: center;
        }

        .ingredients {
          ul li {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
