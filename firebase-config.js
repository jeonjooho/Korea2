// firebase-config.js
// Paste your Firebase Web App config below. databaseURL is required.

window.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

window.firebaseApp = firebase.initializeApp(window.firebaseConfig);
window.db = firebase.database();
console.log("Firebase initialized:", window.firebaseConfig.projectId, window.firebaseConfig.databaseURL);
