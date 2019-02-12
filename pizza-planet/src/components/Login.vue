<template>

<div class="row">
  <div>
    <div>
      <p v-if="!currentUser">Please log in to continue</p>
      <p v-else>Logged in as: <br>{{ currentUser }}</p>
    </div>
    <form>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password">
      </div>

      <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>

      <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
    </form>
  </div>
</div>

</template>

<script>
import Firebase from 'firebase';
import store from '../store/store';

Firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('setUser', user);
  } else {
    store.dispatch('setUser', null);
  }
});

export default {
  methods: {
    signIn() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      Firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;

          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password!');
          } else {
            alert(errorMessage);
          }
        });
    },
    signOut() {
      Firebase.auth().signOut()
        .then(() => {
          alert('logged out');
        }).catch((err) => {
          alert(err);
        });
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};

</script>

<style>

form {
  margin: 20px 0;
}

</style>
