<template>
  <h1>
    <router-link to="/">Deutschprüfungen</router-link>
  </h1>
  <Navigation></Navigation>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
