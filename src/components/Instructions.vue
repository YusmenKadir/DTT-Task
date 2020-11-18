<template>
  <div class="instructions">
    <h2>Instructions</h2>
    <p>{{ instructions }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["instructions"],
});
</script>

<style lang="scss"></style>
