<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav">
          <router-link :to="homeLink" tag="li">
            <a class="nav-link">HOME</a>
          </router-link>
        <router-link :to="menuLink" tag="li">
          <a class="nav-link">MENU</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      homeLink: '/',
      menuLink: '/menu',
    };
  },
};
</script>

<style>
header {
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 1.5em;
}

.navbar-nav {
  flex-direction: row;
}

li {
  padding: 5px;
}

</style>
