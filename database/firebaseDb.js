
// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxUZEICQIK7gdmOuUFf-upSJCxVL9ci-g",
    authDomain: "crud-5d625.firebaseapp.com",
    databaseURL: "https://crud-5d625.firebaseio.com",
    projectId: "crud-5d625",
    storageBucket: "crud-5d625.appspot.com",
    messagingSenderId: "928215558521",
    appId: "1:928215558521:web:be2707f8133ee97d4f67a8"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;