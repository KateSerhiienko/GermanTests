<template>
  <div>
    <h2>Schreiben Sie Perfekt von</h2>
    <p>{{ currentWord }}:</p>
    <div>
      <input type="text" v-model="inputData" @keyup.enter="getResult" />
      <button @click="getResult" ref="button">OK</button>
    </div>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: 'Perfect',
  data() {
    return {
      inputData: '',
      result: '',
      currentWord: '',
      wasMistake: false,
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
      lernedWords: [],
    };
  },
  mounted() {
    this.currentWord = this.setNewWord();
  },
  methods: {
    getResult() {
      if (this.isTrueAnswer) {
        this.wasMistake ? console.log('was mistake') : this.moveWordInLerned();
        this.result = 'Richtig';
        this.$refs.button.classList.add('disable');
        setTimeout(() => {
          this.currentWord = this.setNewWord();
          this.inputData = '';
          this.result = '';
          this.$refs.button.classList.remove('disable');
        }, 2000);
      } else {
        this.result = 'Falsch';
        this.wasMistake = true;
      }
    },
    setNewWord() {
      return this.keyWordsArray[
        this.randomNumber(this.keyWordsArray.length - 1)
      ];
    },
    moveWordInLerned() {
      this.wasMistake = false;
      this.lernedWords.push(this.currentWord);
      console.log(this.lernedWords);
      console.log(this.keyWordsArray);
    },
    randomNumber(max) {
      return Math.floor(Math.random() * max) + 1;
    },
  },
  computed: {
    keyWordsArray() {
      return Object.keys(this.words).filter(
        (word) => !this.lernedWords.includes(word)
      );
    },
    isTrueAnswer() {
      let trueAnswer = this.words[this.currentWord];
      return trueAnswer === this.inputData;
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
