<template>
  <div>
    <h2>Schreiben Sie Perfekt von</h2>
    <p>{{ currentWord }}:</p>
    <div>
      <input type="text" v-model="inputData" @keyup.enter="checkInputData" />
      <button @click="checkInputData" ref="button">prüfen</button>
    </div>
    <p>{{ checkedInputDataMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Perfect',
  data() {
    return {
      words: {
        arbeiten: 'gearbeitet',
        lernen: 'gelernt',
        lieben: 'geliebt',
        sehen: 'gesehen',
        schlafen: 'geschlafen',
        lesen: 'gelesen',
        schreiben: 'geschrieben',
        essen: 'gegessen',
        trinken: 'getrunken',
        kommen: 'gekommen',
        gehen: 'gegangen',
        fahren: 'gefahren',
        bleiben: 'geblieben',
        telefonieren: 'telefoniert',
        studieren: 'studiert',
        reparieren: 'repariert',
        anfangen: 'angefangen',
        anrufen: 'angerufen',
        einkaufen: 'eingekauft',
        verlieren: 'verloren',
        verdienen: 'verdient',
        besuchen: 'besucht',
        erklären: 'erklärt',
      },
      inputData: '',
      checkedInputDataMessage: '',
      lernedWords: [],
    };
  },
  methods: {
    getRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    },
    checkInputData() {
      if (this.cleanedInputData === this.words[this.currentWord]) {
        this.checkedInputDataMessage = 'Richtig';
        this.$refs.button.classList.add('disable');
        setTimeout(() => {
          console.log(this.lernedWords);
          console.log(this.wasMistake);
          this.inputData = '';
          this.checkedInputDataMessage = '';
          this.$refs.button.classList.remove('disable');
        }, 2000);
      } else {
        this.checkedInputDataMessage = 'Falsh';
      }
    },
    moveWordInLerned() {
      this.lernedWords.push(this.currentWord);
    },
  },
  computed: {
    wordsForLerning() {
      return Object.keys(this.words).filter(
        (word) => !this.lernedWords.includes(word)
      );
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
