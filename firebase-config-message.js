// firebase-config-message.js
// Firebase config for the "Leave a Message" guestbook set ONLY.
// (Same Firebase project/database as the Quiz & Video set — "juho-jeon" —
// but registered as its own app. Since this set stores its data under the
// "visitorBook/..." path and the quiz set uses "quizVideoBook/...", they
// safely coexist in the same Realtime Database without colliding.)

window.firebaseConfig = {
  apiKey: "AIzaSyDwIzffj-frpoHdXCwikjXJQUA3nfV0IH4",
  authDomain: "juho-jeon.firebaseapp.com",
  databaseURL: "https://juho-jeon-default-rtdb.firebaseio.com",
  projectId: "juho-jeon",
  storageBucket: "juho-jeon.firebasestorage.app",
  messagingSenderId: "959274699904",
  appId: "1:959274699904:web:c94c24780953eb7bb0ea65",
  measurementId: "G-YSYVVFCJ3R"
};

window.firebaseApp = firebase.initializeApp(window.firebaseConfig);
window.db = firebase.database();
console.log("Firebase initialized:", window.firebaseConfig.projectId, window.firebaseConfig.databaseURL);
