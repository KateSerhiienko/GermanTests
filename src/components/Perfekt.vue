<template>
  <div>
    <h2>Schreiben Sie Perfekt von</h2>
    <p>{{ wordInPresent }}:</p>
    <div>
      <input type="text" v-model="inputData" @keyup.enter="getResult" />
      <button @click="getResult" ref="button">OK</button>
    </div>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: 'Perfekt',
  data() {
    return {
      inputData: '',
      result: '',
      wordInPresent: '',
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
    };
  },
  mounted() {
    this.wordInPresent = this.setNewWord();
  },
  methods: {
    getResult() {
      if (this.isTrueAnswer) {
        this.result = 'Richtig';
        this.$refs.button.classList.add('disable');
        setTimeout(() => {
          this.wordInPresent = this.setNewWord();
          this.inputData = '';
          this.result = '';
          this.$refs.button.classList.remove('disable');
        }, 2000);
      } else {
        this.result = 'Falsch';
      }
    },
    setNewWord() {
      return this.keyWordsArray[
        this.randomNumber(this.keyWordsArray.length - 1)
      ];
    },
    randomNumber(max) {
      return Math.floor(Math.random() * max) + 1;
    },
  },
  computed: {
    keyWordsArray() {
      return Object.keys(this.words);
    },
    isTrueAnswer() {
      let trueAnswer = this.words[this.wordInPresent];
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
