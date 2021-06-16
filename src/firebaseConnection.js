import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

  let firebaseConfig = {
    apiKey: "AIzaSyCj99Kps9SwHm2sLpyRL0ZRy05F2L1PQjY",
    authDomain: "appfirebase-eb6df.firebaseapp.com",
    projectId: "appfirebase-eb6df",
    storageBucket: "appfirebase-eb6df.appspot.com",
    messagingSenderId: "858365373364",
    appId: "1:858365373364:web:3d89e66ce7206f518a60e1",
    measurementId: "G-63ERCDGHZL"
  };
  // Initialize Firebase
  if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;