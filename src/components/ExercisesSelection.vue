<template>
  <ul v-for="exercise in exercises" :key="exercise.id">
    <li @click="setActiveExerciseId(exercise.id)">{{ exercise.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ExercisesSelection',
  emits: { activeExerciseId: null },
  props: {
    exercises: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    setActiveExerciseId(id) {
      this.$emit('activeExerciseId', id);
    },
  },
};
</script>
