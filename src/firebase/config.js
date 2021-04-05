import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAxv71KQKGPEqqpa47m8LwdsAUm3d9622o",
    authDomain: "organikart-store.firebaseapp.com",
    projectId: "organikart-store",
    storageBucket: "organikart-store.appspot.com",
    messagingSenderId: "1076064737889",
    appId: "1:1076064737889:web:b7aef473f0310ac347a820",
    measurementId: "G-K87CPCSV33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
export const firestore = firebase.firestore()
export const auth = firebase.auth()

  