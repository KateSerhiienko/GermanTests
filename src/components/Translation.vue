<template>
  <div>
    <h3>{{ currentWord }}</h3>
    <form>
      <div v-for="answer in wordsForAnswer" :key="answer">
        <input type="radio" :id="answer" :value="answer" />
        <label :for="answer">{{ answer }}</label>
      </div>
      <input type="submit" @click.prevent="setNewCurrentWord" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Translation',
  props: {
    words: {
      type: Object,
    },
  },
  data() {
    return {
      wordsForLerning: [],
      currentWord: '',
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
      let previousWord = this.currentWord ? this.currentWord : '';
      this.currentWord =
        this.wordsForLerning[
          this.getRandomNumber(this.wordsForLerning.length - 1)
        ];
      if (previousWord === this.currentWord && previousWord !== '') {
        return this.setNewCurrentWord();
      }
      return;
    },
    getNumberOfSimilar(mainWord, word) {
      if (!mainWord.includes('sich') && word.includes('sich')) {
        word = word.replace('sich ', '');
      }
      let mainWordArray = mainWord.split('');
      let wordArray = word.split('');
      let similars = [];
      for (let i = 0; i < mainWordArray.length; i++) {
        if (wordArray.indexOf(mainWordArray[i]) !== -1) {
          similars.push(mainWordArray[i]);
          wordArray.splice(wordArray.indexOf(mainWordArray[i]), 1);
        }
      }
      return similars.length;
    },
  },
  computed: {
    // wordsForLerning() {
    //   return Object.keys(this.words);
    // },
    // currentWord() {
    //   return this.wordsForLerning[
    //     this.getRandomNumber(this.wordsForLerning.length - 1)
    //   ];
    // },
    allWordsArray() {
      return Object.values(this.words);
    },
    similarWords() {
      let counter1 = 0;
      let counter2 = 0;
      let similarsArray1 = [];
      let similarsArray2 = [];
      let similarsArray = [];

      let words = this.allWordsArray.filter(
        (word) => word !== this.words[this.currentWord]
      );

      words.forEach((word) => {
        let numberOfSimilar = this.getNumberOfSimilar(
          this.words[this.currentWord],
          word
        );

        if (numberOfSimilar > counter1) {
          counter1 = numberOfSimilar;
          similarsArray1.length = 0;
          similarsArray1.push(word);
        } else if (numberOfSimilar === counter1) {
          similarsArray1.push(word);
        } else if (numberOfSimilar < counter1 && numberOfSimilar > counter2) {
          counter2 = numberOfSimilar;
          similarsArray2.length = 0;
          similarsArray2.push(word);
        } else if (numberOfSimilar === counter2) {
          similarsArray2.push(word);
        }
      });

      if (similarsArray1.length + similarsArray2.length >= 4) {
        similarsArray = [...similarsArray1, ...similarsArray2];
      } else if (similarsArray1.length + similarsArray2.length > 0) {
        similarsArray = [...similarsArray1, ...similarsArray2];

        let wordsArray = [...this.allWordsArray].filter(
          (word) => !similarsArray.includes(word)
        );

        for (
          let i = similarsArray.length - 1;
          i <= 5 - similarsArray.length;
          i++
        ) {
          let r = Math.floor(Math.random() * (wordsArray.length - i)) + i;
          let word = wordsArray[r];
          wordsArray[r] = wordsArray[i];
          wordsArray[i] = word;

          similarsArray.unshift(word);
        }
        console.log(similarsArray);
      } else {
        similarsArray = [...this.allWordsArray];
        console.log(1);
      }
      return similarsArray;
    },
    wordsForAnswer() {
      let similarWordsArray = [...this.similarWords];
      let wordsForAnswerArray = [];

      for (let i = 0; i <= 3 && i < similarWordsArray.length; i++) {
        let r = Math.floor(Math.random() * (similarWordsArray.length - i)) + i;
        let word = similarWordsArray[r];
        similarWordsArray[r] = similarWordsArray[i];
        similarWordsArray[i] = word;

        wordsForAnswerArray.push(word);
      }

      wordsForAnswerArray[this.getRandomNumber(3)] =
        this.words[this.currentWord];

      return wordsForAnswerArray;
    },
  },
};
</script>

<style lang="scss" scoped></style>
