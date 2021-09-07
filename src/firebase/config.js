import firebase from 'firebase/app' //core sdk. reqd
import 'firebase/auth'             //firebase product in use
import 'firebase/firestore'        //firebase product in use

var firebaseConfig = {
    // initializing firebase 
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

  