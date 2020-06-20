import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA4g7YLkLoVNf3eAkT6MIS60se_tK6ypuk",
    authDomain: "rolling-store-fg.firebaseapp.com",
    databaseURL: "https://rolling-store-fg.firebaseio.com",
    projectId: "rolling-store-fg",
    storageBucket: "rolling-store-fg.appspot.com",
    messagingSenderId: "694112942911",
    appId: "1:694112942911:web:8d7bc0393d62467dc5f18a"
  };
  firebase.initializeApp(firebaseConfig);
  const firebaseApp = firebase;
  export { firebaseApp };
