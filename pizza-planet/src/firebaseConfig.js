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
