<template>
  <div>
    <p>{{ title }}</p>
    <button @click="showTest">Start</button>
  </div>
</template>

<script>
export default {
  name: 'TestHeader',
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    showTest() {
      this.testIsStarting = true;
      this.$emit('showTest');
    },
  },
};
</script>

<style scoped></style>
