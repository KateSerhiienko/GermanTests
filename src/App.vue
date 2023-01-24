<template>
  <div class="main-container">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>

<style lang="scss">
#app {
  color: project-color('foreground');
  font-family: 'Open Sans', sans-serif;
}

.main-container {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
