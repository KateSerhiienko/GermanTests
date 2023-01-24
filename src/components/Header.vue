<template>
  <div class="header">
    <div class="background">
      <div class="shadow"></div>
    </div>
    <div class="content">
      <h1>
        <router-link to="/">Deutschprüfungen</router-link>
      </h1>
      <Navigation></Navigation>
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
  background-image: url(../images/background-header.jpeg);
  background-position: center;
  background-size: cover;

  .shadow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(project-color('background'), 0) 40%,
      rgba(project-color('background'), 1)
    );
  }
}

.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

h1 {
  text-align: center;
  font-family: 'Barlow', sans-serif;
  a {
    color: project-color('foreground');
  }
}
</style>
