import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWyWq_sT8OrSrIgWloVLpoS_fskVNsJpI",
  authDomain: "twitter-clone-28efe.firebaseapp.com",
  projectId: "twitter-clone-28efe",
  storageBucket: "twitter-clone-28efe.appspot.com",
  messagingSenderId: "464004212044",
  appId: "1:464004212044:web:f4a3129b8a5ff7274c9be9",
  measurementId: "G-QNWC81DX4T"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;