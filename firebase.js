// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB0L2HsUhMWDzPyFDAcwW2Nn69eNVjlhBY",
//   authDomain: "signal-clone-a4081.firebaseapp.com",
//   projectId: "signal-clone-a4081",
//   storageBucket: "signal-clone-a4081.appspot.com",
//   messagingSenderId: "126491581197",
//   appId: "1:126491581197:web:c5da971fdac29b37d26e44",
//   measurementId: "G-55RXSX35K5"
// };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { auth, db };







// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBAXhPWqamNqhvAzIQiLA2Zp7iSr6J7NtM",
//   authDomain: "signal-b67e8.firebaseapp.com",
//   projectId: "signal-b67e8",
//   storageBucket: "signal-b67e8.appspot.com",
//   messagingSenderId: "494261819622",
//   appId: "1:494261819622:web:7372df2700f19c6ee44327",
//   measurementId: "G-5V5KGCXWEW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);








import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBAXhPWqamNqhvAzIQiLA2Zp7iSr6J7NtM",
  authDomain: "signal-b67e8.firebaseapp.com",
  projectId: "signal-b67e8",
  storageBucket: "signal-b67e8.appspot.com",
  messagingSenderId: "494261819622",
  appId: "1:494261819622:web:7372df2700f19c6ee44327",
  measurementId: "G-5V5KGCXWEW"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };