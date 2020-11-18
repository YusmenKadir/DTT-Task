<template>
  <div class="details">
    <div
      class="item-details"
      v-for="item in returnHomePageMeals"
      :key="item.idMeal"
    >
      <div class="item-image" v-if="mealId == item.idMeal">
        <MealThumb
          :mealImage="item.strMealThumb"
          :mealName="item.strMeal"
          :mealArea="item.strArea"
          :mealVideo="item.strYoutube"
        >
        </MealThumb>
      </div>
      <div class="item-info" v-if="mealId == item.idMeal">
        <Instructions :instructions="item.strInstructions"> </Instructions>

        <Ingredients :ingredients="returnDetailPageIngredients"> </Ingredients>

        <div class="other-items">
          <RelevantMeals :mealsArr="returnHomePageMeals"> </RelevantMeals>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Instructions from "./Instructions.vue";
import Ingredients from "./Ingredients.vue";
import MealThumb from "./MealThumb.vue";
import RelevantMeals from "./RevelantMeals.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {
    Instructions,
    Ingredients,
    MealThumb,
    RelevantMeals,
  },
  data() {
    return {
      mealId: this.$route.params.productId as string,
    };
  },
  // map the result of the getters to a computed attribute
  computed: {
    ...mapGetters(["returnHomePageMeals", "returnDetailPageIngredients"]),
  },
 //when the component is added to the DOM trigger actions at the store
  mounted(): void {
    this.$store.dispatch("specifyMealId", this.mealId);
    this.$store.dispatch("fetchHomePageMeals");
  },
// after the vue instance has been destroyed clear detail page ingredients
  destroyed(): void {
    this.$store.state.ingredients2 = [];
  },
});
</script>

<style lang="scss">
.details {
  background: #000;
  color: #fff;
  height: auto;
  width: 100%;

  .item-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding-top: 10px;

    .item-image {
      text-align: center;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        margin: 15px 0;
      }
      h3 {
        margin: 20px 0;
      }

      .btn-view-onYoutube {
        font-size: 18px;
        padding: 10px;
        border: 1px solid rgba(#ccc, 0.8);
        border-radius: 5px;
        transition: all 0.3s ease-in;
        margin: 10px 0px;

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

      .relevant-items {
        .box {
          .rel-item-img {
            width: 150px;
            height: 150px;
          }
        }
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

  .other-items {
    width: 100%;
    height: auto;
    text-align: center;

    .relevant-items {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .box {
        width: 250px;
        height: 250px;

        .rel-item-img {
          width: 150px;
          transition: scale 0.2s ease-in;
          cursor: pointer;
          border: 1px solid rgba(#ccc, 0.8);

          &:hover {
            transform: scale(1.1);
            border-color: #ffbc00;
          }
        }
      }
    }
  }
}

//small devices
@media (max-device-width: 450px) {
  .details {
    .item-details {
      flex-wrap: wrap;

      .item-image {
        img {
          width: 275px;
          height: 275px;
        }
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
    .other-items {
      .relevant-items {
        flex-direction: column;
      }
    }
  }
}

@media (min-device-width: 450px) and (max-device-width: 769px) {
  .details {
    .item-details {
      display: grid;
      grid-template-columns: 1fr;

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
    .other-items {
      .relevant-items {
        flex-direction: column;
      }
    }
  }
}
</style>
