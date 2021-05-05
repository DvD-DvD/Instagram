import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import FirebaseContext from '../context/firebase';
// import { seedDatabase } from '../seed';

//  call seed file to fill-up entries

const config = {
  apiKey: 'AIzaSyDSM8vJPu9-Sjn8VJw38dvtdlu8ijW-Rdc',
  authDomain: 'instagram-bd8c1.firebaseapp.com',
  projectId: 'instagram-bd8c1',
  storageBucket: 'instagram-bd8c1.appspot.com',
  messagingSenderId: '492583981312',
  appId: '1:492583981312:web:a2c0641102e16ce6a523e5'
};
const firebase = Firebase.initializeApp(config);
console.log('firebase', firebase);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);     executed only once to feed the database

export { firebase, FieldValue };
