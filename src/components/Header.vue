<template>
  <div class="header">
    <div class="background">
      <div class="shadow"></div>
    </div>
    <div class="content">
      <Navigation></Navigation>
      <h1>
        <router-link to="/">Deutschprüfungen</router-link>
      </h1>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 766px;
}

.background {
  width: 100%;
  height: 100%;
  background-image: url(../images/wallpaper-header.jpeg);
  background-position: center;
  background-size: cover;

  .shadow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(#fff, 0) 40%, rgba(#fff, 1));
  }
}

.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

h1 {
  font-family: 'Barlow', sans-serif;
}
</style>
