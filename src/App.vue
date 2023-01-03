<template>
  <h1>Deutschprüfungen</h1>
  <div v-if="!testIsStarting">
    <p>Perfekt</p>
    <button @click="showTest">Start</button>
  </div>
  <Perfect v-else />
</template>

<script>
import Perfect from './components/Perfect.vue';

export default {
  name: 'App',
  components: {
    Perfect,
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
