<template>
  <div v-if="!cardsAreOver">
    <div class="card">
      <div>
        <h3>{{ mainVerb }}</h3>
        <div class="card-info" ref="cardInfo">
          <p>{{ translate }}</p>
          <p>er {{ present }}</p>
          <p>er {{ perfect }}</p>
        </div>
        <button @click="turnCard">umdrehen</button>
      </div>
    </div>
    <div class="nav">
      <button @click="removeFromPractice">gelernt</button>
      <button @click="showAnotherCard">unterrichten</button>
    </div>
  </div>
  <p v-else>Sie haben alle Wörter gemeistert!</p>
</template>

<script>
export default {
  data() {
    return {
      verben: {
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
      cardIndex: 0,
      cardsAreOver: false,
    };
  },
  mounted() {
    this.getRandomCardIndex();
  },
  methods: {
    getRandomCardIndex() {
      return (this.cardIndex = Math.floor(
        Math.random() * this.verbenKeys.length
      ));
    },
    turnCard() {
      this.$refs.cardInfo.classList.toggle('visible');
    },
    showAnotherCard() {
      if (this.verbenKeys.length === 0) {
        this.cardsAreOver = true;
        return;
      }

      this.getRandomCardIndex();
    },
    removeFromPractice() {
      console.log(this.mainVerb);
      console.log(this.cardIndex);
      console.log(this.verbenKeys);

      this.verbenKeys.splice(this.cardIndex, 1);
      this.showAnotherCard();

      console.log('__________');

      console.log(this.mainVerb);
      console.log(this.cardIndex);
      console.log(this.verbenKeys);
    },
  },
  computed: {
    verbenKeys() {
      return Object.keys(this.verben);
    },
    mainVerb() {
      return this.verbenKeys[this.cardIndex];
    },
    translate() {
      return this.verben[this.mainVerb].uebersetzung;
    },
    present() {
      return this.verben[this.mainVerb].dritte_person_singular_praesens;
    },
    perfect() {
      return this.verben[this.mainVerb].dritte_person_singular_perfekt;
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

.card-info {
  display: none;
}

.visible {
  display: inline;
}

.nav {
  width: fit-content;
  margin: 0 auto;
}
</style>
