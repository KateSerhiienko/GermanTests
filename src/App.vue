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
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  color: #080100;
  font-family: 'Open Sans', sans-serif;
}

.main-container {
  max-width: 1500px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  a {
    color: #333333;
    text-decoration: none;
  }
}

h2 {
  text-align: center;
}
</style>
