<template>
  <h1><router-link to="/">Deutschprüfungen</router-link></h1>
  <div id="nav">
    <router-link to="/perfect">Perfect</router-link> |
    <router-link to="/personal_pronouns_in_akkusativ"
      >Personalpronomen im Akkusativ</router-link
    >
    |
    <router-link to="/3_person_singular_prasens"
      >3. Person Singular Präsens</router-link
    >
  </div>

  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  color: #333333;
  font-family: 'Open Sans', sans-serif;
  padding: 10px 20px;
}

h1 {
  text-align: center;
  a {
    color: #333333;
    text-decoration: none;
  }
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #333333;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
