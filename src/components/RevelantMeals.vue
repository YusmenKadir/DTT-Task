<template>
  <div>
    <h2>See Also</h2>
    <div class="relevant-items">
      <div class="box">
        <img :src="mealsArr[2].strMealThumb" class="rel-item-img" alt="#" />
        <h3>{{ mealsArr[2].strMeal }}</h3>
      </div>
      <div class="box">
        <img :src="mealsArr[5].strMealThumb" class="rel-item-img" alt="#" />
        <h3>{{ mealsArr[5].strMeal }}</h3>
      </div>
      <div class="box">
        <img :src="mealsArr[9].strMealThumb" class="rel-item-img" alt="#" />
        <h3>{{ mealsArr[9].strMeal }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["mealsArr"],
});
</script>

<style lang="scss"></style>
