<template>
  <div v-if="!isExerciseFinisched">
    <div class="card" @click="showWordForms">
      <h3>{{ currentWord }}</h3>
      <ul class="forms" ref="forms">
        <li v-for="(form, key) in words[currentWord]" :key="key">
          <p>
            <span>{{ formattedKey(key) }}</span> {{ form }}
          </p>
        </li>
      </ul>
    </div>
    <button @click="removeCurrentWordFromWordsForLerning">gelernt</button>
    <button
      @click="setNewCurrentWord"
      :class="{ disable: wordsForLerning.length <= 1 }"
    >
      unterrichten
    </button>
    <div v-show="wordsForLerning.length <= 1">
      <p>Das ist das lezte Wort.</p>
    </div>
  </div>
  <div v-else>
    <p>Sie haben alle Wörter gemeistert!</p>
  </div>
</template>

<script>
export default {
  name: 'CardsSet',
  props: {
    words: {
      type: Object,
    },
  },
  data() {
    return {
      wordsForLerning: [],
      currentWord: '',
      isExerciseFinisched: false,
      previousWord: '',
    };
  },
  beforeMount() {
    this.setNewWordsForLerning();
    this.setNewCurrentWord();
  },
  methods: {
    getRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    },
    setNewWordsForLerning() {
      return (this.wordsForLerning = Object.keys(this.words));
    },
    setNewCurrentWord() {
      let previousWord = this.currentWord ? this.currentWord : '';
      this.currentWord =
        this.wordsForLerning[
          this.getRandomNumber(this.wordsForLerning.length - 1)
        ];
      if (previousWord === this.currentWord && previousWord !== '') {
        return this.setNewCurrentWord();
      }
      return;
    },
    removeCurrentWordFromWordsForLerning() {
      if (this.wordsForLerning.length > 1) {
        let index = this.wordsForLerning.indexOf(this.currentWord);
        this.wordsForLerning.splice(index, 1);
        this.setNewCurrentWord();
      } else {
        this.isExerciseFinisched = true;
      }
    },
    formattedKey(key) {
      switch (key) {
        case 'translation':
          return '';
        case 'third_person_singular_prasent':
          return 'III P. Sing. Präsens';
        case 'third_person_singular_perfect':
          return 'III P. Sing. Perfekt';
        case 'personal_pronouns_accusative':
          return 'Akk';
      }
      return key;
    },
    showWordForms() {
      this.$refs.forms.classList.toggle('visible');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #333;
  text-align: center;
}

.disable {
  pointer-events: none;
  opacity: 0.5;
}

.forms {
  display: none;
}

.visible {
  display: block;
}
</style>
