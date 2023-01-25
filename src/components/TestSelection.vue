<template>
  <ul v-for="test in tests" :key="test.id">
    <li @click="setActiveTestId(test.id)">{{ test.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'TestSelection',
  emits: { activeTestId: null },
  props: {
    tests: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    setActiveTestId(id) {
      this.$emit('activeTestId', id);
    },
  },
};
</script>
