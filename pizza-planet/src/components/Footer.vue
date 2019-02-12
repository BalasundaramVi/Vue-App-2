<template>
  <footer class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li">
          <a class="nav-link">HOME</a>
        </router-link>
        <router-link :to="{ name: 'aboutLink' }" tag="li">
          <a class="nav-link">ABOUT</a>
        </router-link>
        <router-link :to="{ name: 'adminLink' }" tag="li">
          <a class="nav-link">ADMIN</a>
        </router-link>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
};
</script>
