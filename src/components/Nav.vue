<template>
  <!-- Navbar -->
  <nav class="main-nav">
    <div class="nav-heading">
      <h1>Meals <span class="txt-primary">Application</span></h1>
    </div>
    <div class="nav-links">
      <router-link
        to="/"
        class="link-item link-item-home"
        active-class="active"
        exact
        >Home</router-link
      >
      <router-link
        to="/categories"
        class="link-item link-item-categories"
        active-class="active"
        exact
        >Categories</router-link
      >
      <router-link
        to="/random"
        class="link-item link-item-random"
        active-class="active"
        exact
        >Random</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
