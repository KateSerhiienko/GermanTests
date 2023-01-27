<template>
  <div v-if="isEmptyObject(activeTranslation)">
    <ExercisesSelection
      :exercises="translations"
      @activeExerciseId="openTranslations"
    />
  </div>
  <div v-else>
    <p>{{ activeTranslation.name }}</p>
    <p>Finden Sie die richtige Übersetzung des Wortes:</p>
    <Translation :words="wordsOfActiveTranslation" />
  </div>
</template>

<script>
import dataJSON from '../data/main.json';
import Translation from '../components/Translation.vue';
import ExercisesSelection from '../components/ExercisesSelection.vue';

export default {
  name: 'TranslationsPage',
  components: {
    ExercisesSelection,
    Translation,
  },
  data() {
    return {
      dataJSON,
      translations: [
        {
          id: 'translations_verbs',
          name: 'Verben (rus - deu)',
          type: 'verbs',
          wordsForm: 'translation',
        },
      ],
      activeTranslation: {},
    };
  },
  methods: {
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    },
    openTranslations(translationId) {
      this.activeTranslation = this.translations.find(
        (translation) => translation.id === translationId
      );
    },
  },
  computed: {
    wordsOfActiveTranslation() {
      let words = {};
      let wordsSortedOfType = dataJSON[this.activeTranslation.type];
      let wordsForm = this.activeTranslation.wordsForm;

      for (let key in wordsSortedOfType) {
        if (wordsSortedOfType[key][wordsForm]) {
          words[wordsSortedOfType[key][wordsForm]] = key;
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
