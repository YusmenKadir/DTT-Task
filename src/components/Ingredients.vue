<template>
  <div class="ingredients">
    <h2>Ingredients</h2>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["ingredients"],
});
</script>

<style lang="scss"></style>
