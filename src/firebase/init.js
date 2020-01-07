import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyDI0YvUq52oQ1H7pac41UuFN29dESQgrnY",
  authDomain: "bentoapp-68567.firebaseapp.com",
  databaseURL: "https://bentoapp-68567.firebaseio.com",
  projectId: "bentoapp-68567",
  storageBucket: "bentoapp-68567.appspot.com",
  messagingSenderId: "980237720756",
  appId: "1:980237720756:web:2bb5f527112baaf7854be1"

}

firebase.initializeApp(config)
