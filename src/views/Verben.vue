<template>
  <div v-if="!isTestFinisched">
    <div class="card">
      <h3>{{ currentWord }}</h3>
      <p>{{ currentWordTranslation }}</p>
      <p>{{ currentWordPresent }}</p>
      <p>{{ currentWordPrfect }}</p>
    </div>
    <button @click="removeCurrentWordFromWordsForLerning">gelernt</button>
    <button @click="setNewCurrentWord">unterrichten</button>
  </div>
  <div v-else>
    <p>Sie haben alle Wörter gemeistert!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: {
        abfahren: {
          uebersetzung: 'отъезжать в какое-то время',
          dritte_person_singular_praesens: 'fährt ab',
          dritte_person_singular_perfekt: 'ist abgefahren',
        },
        abgeben: {
          uebersetzung: 'отдавать',
          dritte_person_singular_praesens: 'gibt ab',
          dritte_person_singular_perfekt: 'hat abgegeben',
        },
        abholen: {
          uebersetzung: 'забирать',
          dritte_person_singular_praesens: 'holt ab',
          dritte_person_singular_perfekt: 'hat abgeholt',
        },
        // verb: {
        //   uebersetzung: '',
        //   dritte_person_singular_praesens: '',
        //   dritte_person_singular_perfekt: '',
        // },
      },
      wordsForLerning: [],
      currentWord: '',
      isTestFinisched: false,
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
      return (this.currentWord =
        this.wordsForLerning[
          this.getRandomNumber(this.wordsForLerning.length - 1)
        ]);
    },
    removeCurrentWordFromWordsForLerning() {
      if (this.wordsForLerning.length > 1) {
        let index = this.wordsForLerning.indexOf(this.currentWord);
        this.wordsForLerning.splice(index, 1);
        this.setNewCurrentWord();
      } else {
        this.isTestFinisched = true;
      }
      console.log(this.wordsForLerning);
    },
  },
  computed: {
    currentWordTranslation() {
      return this.words[this.currentWord].uebersetzung;
    },
    currentWordPresent() {
      return this.words[this.currentWord].dritte_person_singular_praesens;
    },
    currentWordPrfect() {
      return this.words[this.currentWord].dritte_person_singular_perfekt;
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
</style>
