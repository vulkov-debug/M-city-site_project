import firebase from 'firebase/app';
import 'firebase/app'

import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBrCL0qvRBDYf3N99Gp941UXKePLqImhvQ",
    authDomain: "m-city-11f3e.firebaseapp.com",
    databaseURL: "https://m-city-11f3e.firebaseio.com",
    projectId: "m-city-11f3e",
    storageBucket: "m-city-11f3e.appspot.com",
    messagingSenderId: "844120689875",
    appId: "1:844120689875:web:4392252255bc2a79b4d826",
    measurementId: "G-5D7FBQCVJN"
  };


  firebase.initializeApp(firebaseConfig);


  const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');

  export {
      firebase,
      firebaseMatches
  }