// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_TD,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWNSCSPnb8x38DzVYWMYAkS-yN9DMl8iQ",
  authDomain: "linker-70e64.firebaseapp.com",
  projectId: "linker-70e64",
  storageBucket: "linker-70e64.appspot.com",
  messagingSenderId: "279956404271",
  appId: "1:279956404271:web:58374b1f10169b77226eda",
  measurementId: "G-EVBTLE2J4D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)