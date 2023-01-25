<template>
  <div v-if="isEmptyObject(activeCardsSet)">
    <ExercisesSelection :tests="cardsSets" @activeTestId="beginTest" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          wordsForms: ['personal_pronouns_accusative'],
        },
      ],
      // activeCardsSet: {},
    };
  },

  computed: {
    activeCardsSet() {
      return {
        id: 'cards_pronouns',
        name: 'Pronomen',
        type: 'pronouns',
        wordsForms: ['personal_pronouns_accusative'],
      };
    },
  },
};
</script>
