<template>
  <div v-if="isEmptyObject(activeTraining)">
    <ExercisesSelection
      :exercises="trainings"
      @activeExerciseId="beginTraining"
    />
  </div>
  <div v-else>
    <div>
      <p>{{ activeTraining.name }}</p>
      <p>{{ activeTraining.task }}:</p>
      <Training :words="wordsOfActiveTraining" />
    </div>
  </div>
</template>

<script>
import dataJSON from '../data/main.json';
import Training from '../components/Training.vue';
import ExercisesSelection from '../components/ExercisesSelection.vue';

export default {
  name: 'TrainingsPage',
  components: {
    Training,
    ExercisesSelection,
  },
  data() {
    return {
      dataJSON,
      trainings: [
        {
          id: 'test_personal_pronouns_accusative',
          name: 'Personalpronomen im Akkusativ',
          task: 'Schreiben Sie Personalpronomen im Akkusativ von',
          type: 'pronouns',
          wordsForm: 'personal_pronouns_accusative',
        },
        {
          id: 'test_third_person_singular_perfect',
          name: 'Dritte Person Singular Perfekt',
          task: 'Schreiben Sie Perfekt von',
          type: 'verbs',
          wordsForm: 'third_person_singular_perfect',
        },
        {
          id: 'test_third_person_singular_prasent',
          name: 'Dritte Person Singular Präsens',
          task: 'Schreiben Sie Dritte Person Singular Präsens (er ... ) von',
          type: 'verbs',
          wordsForm: 'third_person_singular_prasent',
        },
      ],
      activeTraining: {},
    };
  },
  methods: {
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    },
    beginTraining(trainingId) {
      this.activeTraining = this.trainings.find(
        (training) => training.id === trainingId
      );
    },
  },
  computed: {
    wordsOfActiveTraining() {
      let words = {};
      let wordsSortedOfType = dataJSON[this.activeTraining.type];
      let wordsForm = this.activeTraining.wordsForm;

      for (let key in wordsSortedOfType) {
        if (wordsSortedOfType[key][wordsForm]) {
          words[key] = wordsSortedOfType[key][wordsForm];
        }
      }

      if (!this.isEmptyObject(words)) {
        return words;
      }

      return alert(
        'Aktualisieren Sie diese Seite, ein Fehler ist aufgetreten!'
      );
    },
  },
};
</script>
