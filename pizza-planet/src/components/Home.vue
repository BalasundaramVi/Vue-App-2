<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcom to Pizza Planet!</h1>
        <h2>Feeling hungry?</h2>
        <button @click="goToMenu" class="btn btn-success">Let's Order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push({ name: 'menuLink' });
    },
  },
};
</script>

<style>

#home {
  background: url('../assets/pizza-background.jpg');
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10%;
}

h1, h2 {
  margin: 6%;
}

.background {
  background: #eee;
  opacity: 0.8;
  max-width: 60%;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
