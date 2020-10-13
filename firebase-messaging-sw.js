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
//   firebase.analytics();

  const messaging = firebase.messaging();
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// messaging.getToken().then((currentToken) => {
//     if (currentToken) {
//       sendTokenToServer(currentToken);
//       updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No Instance ID token available. Request permission to generate one.');
//       // Show permission UI.
//       updateUIForPushPermissionRequired();
//       setTokenSentToServer(false);
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     showToken('Error retrieving Instance ID token. ', err);
//     setTokenSentToServer(false);
//   });

messaging.setBackgroundMessageHandler(function(payload) {
    const title = "hello World";
    const options = {};
    return self.ServiceWorkerRegistration.showNotification(title, options);
});