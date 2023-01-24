<template>
  <div class="nav">
    <h2>Teste:</h2>
    <div class="nav_list">
      <router-link to="/perfect">Perfect</router-link> |
      <router-link to="/personal_pronouns_in_akkusativ"
        >Personalpronomen im Akkusativ</router-link
      >
      |
      <router-link to="/third_person_singular_prasent"
        >Dritte Person Singular Präsens</router-link
      >
    </div>
    <h2>Karten:</h2>
    <div class="nav_list">
      <router-link to="/verben">Verben</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: {
        Teste: [
          {
            name: 'Perfect',
            path: 'perfect',
          },
          {
            name: 'Personalpronomen im Akkusativ',
            path: 'personal_pronouns_in_akkusativ',
          },
          {
            name: 'Dritte Person Singular Präsens',
            path: 'third_person_singular_prasent',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.nav_list {
  padding: 30px;
  text-align: center;
}

.nav_list a {
  font-weight: bold;
  color: #333333;
}

.nav_list a.router-link-exact-active {
  color: #42b983;
}
</style>
