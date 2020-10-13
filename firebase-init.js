import * as firebase from "firebase/app";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqTgpBNO8Qf6uWYahAiQ2ullzzLEtSW60",
    authDomain: "fcm-test-9386c.firebaseapp.com",
    databaseURL: "https://fcm-test-9386c.firebaseio.com",
    projectId: "fcm-test-9386c",
    storageBucket: "fcm-test-9386c.appspot.com",
    messagingSenderId: "634210843728",
    appId: "1:634210843728:web:4d413eaecded30cd9ba555",
    measurementId: "G-W6H0JJJDT4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const messaging = firebase.messaging();
  messaging.requestPermission()
  .then(function() {
    console.log("Have Permission");
    return messaging.getToken();
  }) 
  .then(function(token) {
    console.log(token);
  })
  .catch((err) => {
    console.log(err);
  })

  messaging.onMessage(function(payload) {
      console.log("on Message:", payload);
  })