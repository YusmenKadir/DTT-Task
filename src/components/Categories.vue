<template>
  <div class="categories">
    <div class="categories-heading">
      <h1>Have a look at our meal categories...</h1>
    </div>
    <div class="categories-content">
      <article
        class="categories-article"
        v-for="category in categories"
        :key="category.idCategory"
      >
        <img :src="category.strCategoryThumb" alt="#" />
        <h2>{{ category.strCategory }}</h2>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //return categories from the getter at the store
  computed: {
    categories() {
      return this.$store.getters.returnMealCategories;
    },
  },
  //before component is added to the DOM clear random page ingredients and trigger the action at the store
  created(): void {
    this.$store.state.ingredients = [];
    this.$store.dispatch("fetchCategories");
  },
});
</script>

<style lang="scss">
.categories {
  color: #fff;
  background: #000;
  height: auto;
  width: 100%;

  &-heading {
    text-align: center;
    margin: 0 auto;
    width: 50%;

    h1 {
      padding: 20px 0;
      background: rgba(lighten($color: #000000, $amount: 10), 0.8);
    }
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    row-gap: 15px;
    grid-gap: 15px;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;

    .categories-article {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      overflow: hidden;

      &:hover img {
        transform: scale(1.1);
      }
      &:hover h2 {
        color: #ffbc00;
      }

      h2 {
        transition: 0.5s ease-out;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-device-width: 450px) {
  .categories {
    &-heading {
      width: 100%;
      h1 {
        font-size: 18px;
        padding: 20px 0;
      }
    }

    &-content {
      grid-template-columns: 1fr;
      margin-top: 10px;

      .categories-article {
        h2 {
          font-size: 20px;
        }
        img {
          width: 80%;
        }
      }
    }
  }
}

@media (min-device-width: 450px) and (max-device-width: 769px) {
  .categories {
    &-heading {
      width: 100%;
      h1 {
        font-size: 18px;
        padding: 20px 0;
      }
    }

    &-content {
      grid-template-columns: 1fr;
      margin-top: 10px;

      .categories-article {
        h2 {
          font-size: 20px;
        }
        img {
          width: 80%;
        }
      }
    }
  }
}

@media (min-device-width: 770px) and (max-device-width: 992px) {
  .categories {
    &-heading {
      width: 100%;
      h1 {
        font-size: 18px;
        padding: 20px 0;
      }
    }

    &-content {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 10px;

      .categories-article {
        h2 {
          font-size: 20px;
        }
        img {
          width: 80%;
        }
      }
    }
  }
}
</style>
