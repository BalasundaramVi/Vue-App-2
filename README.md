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