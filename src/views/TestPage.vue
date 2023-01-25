<template>
  <div v-if="isEmptyObject(activeTest)">
    <TestSelection :tests="tests" @activeTestId="beginTest" />
  </div>
  <div v-else>
    <div>
      <p>{{ activeTest.name }}</p>
      <p>{{ activeTest.task }}:</p>
      <Test :words="wordsOfActiveTest" />
    </div>
  </div>
</template>

<script>
import dataJSON from '../data/main.json';
import Test from '../components/Test.vue';
import TestSelection from '../components/TestSelection.vue';

export default {
  name: 'TestsPage',
  components: {
    Test,
    TestSelection,
  },
  data() {
    return {
      dataJSON,
      tests: [
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
      activeTest: {},
    };
  },
  methods: {
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    },
    beginTest(testId) {
      this.activeTest = this.tests.find((test) => test.id === testId);
    },
  },
  computed: {
    wordsOfActiveTest() {
      let words = {};
      let wordsSortedOfType = dataJSON[this.activeTest.type];
      let wordsForm = this.activeTest.wordsForm;

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
