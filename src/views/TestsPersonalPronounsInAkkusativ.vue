<template>
  <TestHeader v-show="!testIsStarting" :title="title" @showTest="showTest" />
  <Test v-show="testIsStarting" :task="task" :words="words" />
</template>

<script>
import Test from '../components/Test';
import TestHeader from '../components/TestHeader';

export default {
  name: 'TestsPersonalPronounsInAkkusativ',
  components: {
    Test,
    TestHeader,
  },
  data() {
    return {
      testIsStarting: false,
      title: 'Personalpronomen im Akkusativ',
      task: 'Schreiben Sie Perfekt von',
      words: {
        ich: 'mich',
        du: 'dich',
        er: 'ihn',
        sie: 'sie',
        es: 'es',
        wir: 'uns',
        ihr: 'euch',
        Sie: 'Sie',
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
