<template>
  <h1>Deutschprüfungen</h1>
  <div v-if="!testIsStarting">
    <p>Perfekt</p>
    <button @click="showTest">Start</button>
  </div>
  <Perfekt v-else />
</template>

<script>
import Perfekt from './components/Perfekt.vue';

export default {
  name: 'App',
  components: {
    Perfekt,
  },
  data() {
    return {
      testIsStarting: false,
    };
  },
  methods: {
    showTest() {
      this.testIsStarting = !this.testIsStarting;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}

h1 {
  text-align: center;
}
</style>
