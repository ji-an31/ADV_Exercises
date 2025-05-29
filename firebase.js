// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHGCG6RT3LZkkAVtuwET3mWelhz4vadCI",
  authDomain: "exercise9-a5346.firebaseapp.com",
  projectId: "exercise9-a5346",
  storageBucket: "exercise9-a5346.firebasestorage.app",
  messagingSenderId: "868965966829",
  appId: "1:868965966829:web:cd5ffa89a50dd72a017de4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
