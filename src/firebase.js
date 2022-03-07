import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCO_hqtwobx3wyEm05a0QVRK_R2x1S-0sk",
    authDomain: "portfolio-fffbd.firebaseapp.com",
    projectId: "portfolio-fffbd",
    storageBucket: "portfolio-fffbd.appspot.com",
    messagingSenderId: "319497520789",
    appId: "1:319497520789:web:c881f26dda57c28434fd9c"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export { db }