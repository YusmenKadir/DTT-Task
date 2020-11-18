<template>
  <div>
    <img :src="mealImage" alt="#" />
    <h2>{{ mealName }}</h2>
    <h3>{{ mealArea }}</h3>
    <a class="btn btn-view-onYoutube" :href="mealVideo" target="_blank"
      >View How to Cook on Youtube</a
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["mealImage", "mealName", "mealArea", "mealVideo"],
});
</script>

<style lang="scss"></style>
