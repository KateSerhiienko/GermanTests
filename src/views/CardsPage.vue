<template>
  <div v-if="isEmptyObject(activeCardsSet)">
    <ExercisesSelection
      :exercises="cardsSets"
      @activeExerciseId="openCardsSet"
    />
  </div>
  <div v-else>
    <p>{{ activeCardsSet.name }}</p>
    <CardsSet :words="wordsOfActiveCardsSet" />
  </div>
</template>

<script>
import dataJSON from '../data/main.json';
import CardsSet from '../components/CardsSet.vue';
import ExercisesSelection from '../components/ExercisesSelection.vue';

export default {
  name: 'CardsPage',
  components: {
    ExercisesSelection,
    CardsSet,
  },
  data() {
    return {
      dataJSON,
      cardsSets: [
        {
          id: 'cards_verbs',
          name: 'Verben',
          type: 'verbs',
          wordsForms: [
            'translation',
            'third_person_singular_prasent',
            'third_person_singular_perfect',
          ],
        },
        {
          id: 'cards_pronouns',
          name: 'Pronomen',
          type: 'pronouns',
          wordsForms: ['translation', 'personal_pronoun_accusative'],
        },
      ],
      activeCardsSet: {},
    };
  },
  methods: {
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    },
    openCardsSet(cardsSetId) {
      this.activeCardsSet = this.cardsSets.find(
        (cardsSet) => cardsSet.id === cardsSetId
      );
    },
  },
  computed: {
    wordsOfActiveCardsSet() {
      let words = {};
      let wordsSortedOfType = dataJSON[this.activeCardsSet.type];
      let hadWordAllWordsForms;

      for (let key in wordsSortedOfType) {
        hadWordAllWordsForms =
          JSON.stringify(Object.keys(wordsSortedOfType[key])) ===
          JSON.stringify(this.activeCardsSet.wordsForms);

        if (hadWordAllWordsForms) {
          words[key] = wordsSortedOfType[key];
        }
      }

      return words;
    },
  },
};
</script>
