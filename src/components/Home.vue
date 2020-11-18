<template>
  <div class="home">
    <div class="home-heading">
      <h1>Have a look at some of our meals...</h1>
      <button class="btn btn-sort" @click="sortMeals">
        Sort Meals By Name
      </button>
    </div>

    <div class="meals">
      <article class="parent" v-for="item in HomeMeals" :key="item.strMeal">
        <article class="article-child">
          <h2>{{ item.strMeal }}</h2>
        </article>
        <img :src="item.strMealThumb" alt="#" />
        <button class="info" @click="goToDetailPage(item.idMeal)">
          View Full Info
        </button>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //after clicking on the button push the mealId to the end of the url path
  methods: {
    goToDetailPage(id: string): void {
      this.$router.push({ name: "details", params: { productId: id } });
    },
    // sort meals by name ,if names are the same sort by mealId as well
    sortMeals(): void {
      this.$store.state.mealsArray.sort((a, b) =>
        a.strMeal > b.strMeal
          ? 1
          : a.strMeal === b.strMeal
          ? a.idMeal > b.idMeal
            ? 1
            : -1
          : -1
      );
    },
  },
  // return homepage meals from the getter in the store
  computed: {
    HomeMeals() {
      return this.$store.getters.returnHomePageMeals;
    },
  },
  // before component is added to the DOM trigger action at the store and clear random page ingredients
  created(): void {
    this.$store.state.ingredients = [];
    this.$store.dispatch("fetchHomePageMeals");
  },
  //after the vue instance has been destroyed clear detail page ingredients
  destroyed() {
    this.$store.state.ingredients2 = [];
  },
});
</script>

<style lang="scss">
.home {
  background: #000;
  position: relative;
  height: auto;

  &-heading {
    text-align: center;
    margin: 0 auto;
    width: 50%;

    h1 {
      padding: 20px 0;
      background: rgba(lighten($color: #000000, $amount: 10), 0.8);
    }
  }

  .btn-sort {
    padding: 10px;
    font-size: 18px;
    background: #ffbc00;
    color: #fff;
    outline: none;
    border: 1px solid rgba(#ccc, 0.9);
    border-radius: 2px;
    cursor: pointer;
    transition: padding 0.3s ease-in;

    &:hover {
      padding: 15px;
    }
  }

  .meals {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: 75px;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    padding-bottom: 100px;

    .parent {
      width: 300px;
      height: 250px;
      position: relative;
      border: 1px solid rgba(#ccc, 0.8);
      cursor: pointer;

      .article-child {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        transition: all 0.3s ease-in;

        &:hover {
          background: rgba(darken(#333, 10), 0.6);
          h2 {
            opacity: 1;
          }
        }
        h2 {
          opacity: 0;
          transition: all 0.3s ease-in;
        }
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 2px;
      }

      .info {
        width: 100%;
        padding: 10px;
        font-size: 18px;
        background: #000;
        color: #fff;
        outline: none;
        border: 1px solid #ccc;
        text-align: center;
        transition: background-color 0.3s ease-in;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: #ffbc00;
        }
      }
    }
  }
}

@media (max-device-width: 450px) {
  .home {
    &-heading {
      width: 100%;
      h1 {
        padding: 10px 0;
        margin-bottom: 10px;
        font-size: 20px;
      }
    }

    .meals {
      grid-template-columns: 1fr;
      margin-top: 50px;

      .parent {
        width: 275px;
        height: 275px;
      }
    }
  }
}

@media (min-device-width: 450px) and (max-device-width: 769px) {
  .home {
    &-heading {
      width: 100%;

      h1 {
        padding: 10px 0;
        margin-bottom: 10px;
        font-size: 22px;
      }
    }

    .meals {
      grid-template-columns: 1fr;
      margin-top: 50px;
    }
  }
}

@media (min-device-width: 770px) and (max-device-width: 1024px) {
  .home {
    &-heading {
      width: 100%;

      h1 {
        padding: 10px 0;
        margin-bottom: 10px;
        font-size: 22px;
      }
    }

    .meals {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 50px;
    }
  }
}
//LARGE DESKTOP SCREENS
@media screen and (min-width: 2000px) {
  .home {
    height: 100vh;
  }
}
</style>
