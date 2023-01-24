<template>
  <TestHeader v-show="!testIsStarting" :title="title" @showTest="showTest" />
  <Test v-show="testIsStarting" :task="task" :words="words" />
</template>

<script>
import Test from '../components/Test';
import TestHeader from '../components/TestHeader';

export default {
  name: 'TestsPerfect',
  components: {
    Test,
    TestHeader,
  },
  data() {
    return {
      testIsStarting: false,
      title: 'Perfekt',
      task: 'Schreiben Sie Perfekt von',
      words: {
        // arbeiten: 'gearbeitet',
        // lernen: 'gelernt',
        // lieben: 'geliebt',
        // sehen: 'gesehen',
        // schlafen: 'geschlafen',
        // lesen: 'gelesen',
        // schreiben: 'geschrieben',
        // essen: 'gegessen',
        // trinken: 'getrunken',
        // kommen: 'gekommen',
        // gehen: 'gegangen',
        fahren: 'gefahren',
        bleiben: 'geblieben',
        // telefonieren: 'telefoniert',
        // studieren: 'studiert',
        // reparieren: 'repariert',
        // anfangen: 'angefangen',
        // anrufen: 'angerufen',
        // einkaufen: 'eingekauft',
        // verlieren: 'verloren',
        // verdienen: 'verdient',
        // besuchen: 'besucht',
        // erklären: 'erklärt',
      },
    };
  },
  methods: {
    showTest() {
      this.testIsStarting = true;
    },
  },
};
</script>
