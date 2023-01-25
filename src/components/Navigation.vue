<template>
  <ul>
    <li><router-link to="trainings">Trainings</router-link></li>
    <li><router-link to="cards">Karten</router-link></li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: project-color('foreground');
}
a.router-link-exact-active {
  color: project-color('primary');
}
</style>
