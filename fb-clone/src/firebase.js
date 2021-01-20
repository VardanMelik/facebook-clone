import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9-iBMt04FTFsyvUpUFFrsdtC5mTXOqDA",
    authDomain: "facebook-clone-3c190.firebaseapp.com",
    projectId: "facebook-clone-3c190",
    storageBucket: "facebook-clone-3c190.appspot.com",
    messagingSenderId: "1003213510160",
    appId: "1:1003213510160:web:9d0240ca1711e9c585dc95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;