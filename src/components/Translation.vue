<template>
  <div>
    <h3>{{ currentWord }}</h3>
    <form>
      <input
        type="radio"
        :id="words[currentWord]"
        :value="words[currentWord]"
      />
      <label :for="words[currentWord]">{{ words[currentWord] }}</label>
      <input type="submit" @click.prevent="checkFormData" />
    </form>
  </div>
</template>

<script>
import dataJSON from '../data/main.json';

export default {
  name: 'Translation',
  props: {
    words: {
      type: Object,
    },
  },
  data() {
    return {
      dataJSON,
    };
  },
  beforeMount() {},
  methods: {
    getRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    },
    checkFormData() {},
  },
  computed: {
    wordsForLerning() {
      return Object.keys(this.words);
    },
    currentWord() {
      return this.wordsForLerning[
        this.getRandomNumber(this.wordsForLerning.length - 1)
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
