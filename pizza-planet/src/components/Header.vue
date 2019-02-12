<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">MENU</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
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

.nav-item {
  padding: 5px;
}

</style>