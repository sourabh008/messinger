import firebase from "firebase";

const firebaseApp=firebase.initializeApp( {
    apiKey: "AIzaSyB8qwRnKdlzl9Q00tMH27nNYBMSJH0YPQI",
    authDomain: "messinger-35341.firebaseapp.com",
    databaseURL: "https://messinger-35341.firebaseio.com",
    projectId: "messinger-35341",
    storageBucket: "messinger-35341.appspot.com",
    messagingSenderId: "856354717217",
    appId: "1:856354717217:web:0cc8a2cd97a36d8b2ead60"
  });
  const db=firebaseApp.firestore();
  export default db;