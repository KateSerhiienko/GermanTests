<template>
  <div>
    <div v-show="!isTestFinisched">
      <h2>{{ task }}</h2>
      <p>{{ currentWord }}:</p>
      <div>
        <input type="text" v-model="inputData" @keyup.enter="checkInputData" />
        <button @click="checkInputData" ref="button">prüfen</button>
        <br />
        <button v-show="wasMistake" @click="showCorrectAnswer">
          richtige Antwort
        </button>
        <span>{{ correctAnswer }}</span>
      </div>
    </div>
    <p>{{ resultMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    task: {
      type: String,
    },
    words: {
      type: Object,
    },
  },
  data() {
    return {
      inputData: '',
      resultMessage: '',
      lernedWords: [],
      wasMistake: false,
      wordsQueue: [],
      isTestFinisched: false,
      correctAnswer: '',
    };
  },
  methods: {
    getRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    },
    checkInputData() {
      if (this.cleanedInputData === this.words[this.currentWord]) {
        this.resultMessage = 'Richtig';
        this.$refs.button.classList.add('disable');
        setTimeout(() => {
          !this.wasMistake ? this.moveWordInLerned() : this.moveWordInQueue();
          this.wasMistake = false;
          this.inputData = '';
          this.resultMessage = '';
          this.correctAnswer = '';
          this.$refs.button.classList.remove('disable');
          if (this.wordsForLerning.length === 0 && this.wordsQueue.length > 0) {
            this.wordsForLerning.push(...this.wordsQueue);
            this.wordsQueue.length = 0;
          } else if (
            this.wordsForLerning.length === 0 &&
            this.wordsQueue.length === 0
          ) {
            this.isTestFinisched = true;
            this.resultMessage = 'Sie haben die Aufgabe erledigt!';
          }
        }, 2000);
      } else {
        this.resultMessage = 'Falsch';
        this.wasMistake = true;
      }
    },
    moveWordInLerned() {
      this.lernedWords.push(this.currentWord);
    },
    moveWordInQueue() {
      this.wordsQueue.push(this.currentWord);
    },
    showCorrectAnswer() {
      this.correctAnswer = this.words[this.currentWord];
    },
  },
  computed: {
    wordsForLerning() {
      return Object.keys(this.words)
        .filter((word) => !this.lernedWords.includes(word))
        .filter((word) => !this.wordsQueue.includes(word));
    },
    currentWord() {
      return this.wordsForLerning[
        this.getRandomNumber(this.wordsForLerning.length - 1)
      ];
    },
    cleanedInputData() {
      return this.inputData.trim().toLowerCase();
    },
  },
};
</script>

<style scoped>
.disable {
  pointer-events: none;
  opacity: 0.5;
}
</style>
