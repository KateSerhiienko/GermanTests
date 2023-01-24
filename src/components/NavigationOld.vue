<template>
  <ul class="nav">
    <li
      v-for="(navDepartmentList, navDepartmentName) in navigation"
      :key="navDepartmentName"
    >
      <h2>{{ navDepartmentName }}</h2>
      <ul class="nav-department">
        <li v-for="navItem in navDepartmentList" :key="navItem.path">
          <router-link :to="navItem.path">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navigation: {
        Teste: [
          {
            name: 'TestsPerfect',
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
        Karten: [
          {
            name: 'CardsVerbs',
            path: 'verben',
          },
        ],
      },
    };
  },
  // beforeMount() {
  //   for (let i in this.navigation) {
  //     console.log(i);
  //   }
  // },
};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: project-color('foreground');
}
a.router-link-exact-active {
  color: project-color('primary');
}

.nav {
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  margin-top: 40px;
  background: project-color('background', $opacity: 0.5);

  /* border: 1px solid project-color('foreground'); */
}

.nav-department {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  & li {
    max-width: 200px;
    margin: 0 10px;
  }
}
</style>
