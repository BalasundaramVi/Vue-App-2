# Vue App 2: Building a Full Stack App with Firebase, Vuex, and Router

Second Vue App with Vuex, Firebase, and Router


### Firebase

**Configuration:**
```
import Firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBok4dzuGJzK5c_61nxrb9o18hrWNGZ-9c',
  authDomain: 'pizza-planet-a6685.firebaseapp.com',
  databaseURL: 'https://pizza-planet-a6685.firebaseio.com',
  projectId: 'pizza-planet-a6685',
  storageBucket: 'pizza-planet-a6685.appspot.com',
  messagingSenderId: '406822142606',
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
const dbMenuRef = db.ref('menu');

export default dbMenuRef;
```


**Authentication:**
```
<script>
import Firebase from 'firebase';

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
            alerg(errorMessage);
          }
        })
    },
    signOut() {
      Firebase.auth().signOut()
        .then(() => {
          alert('logged out');
        }).catch((err) => {
          alert('error');
        })
    }
  }
}

</script>
```


## Vue Router

```
const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: 'menuLink', component: Menu },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This area is for authorized users only, please login to continue.');
      next();
    },
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      { path: '/contact', name: 'contactLink', component: Contact },
      { path: '/history', name: 'historyLink', component: History },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide },
    ],
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

```


`beforeRouteEnter (to, from, next) {}` is called before the Vue instance is even created, so no properties of that instance can be accessed in that method.

Instead you can do something like this:
```
beforeRouteEnter (to, from, next) {
  next(vm => {
    vm.name;
  })
}
```
Basically this is a callback to after the instance is created, and the first property (`vm`) takes the place of `this`.

Sample exit guard for admin users not signing out before they leave:
```
beforeRouteLeave (to, from, next) {
  if (confirm("Have you remembered to log out") === true) {
    next();
  } else {
    next(false);
  }
}
```


### Defining Scroll Behavior