import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBFFkoEi350uivqMbbKQ0Mr-JYasT-FxMU",
      authDomain: "dadodanq3daudiomix.firebaseapp.com",
      projectId: "dadodanq3daudiomix",
      storageBucket: "dadodanq3daudiomix.firebasestorage.app",
      messagingSenderId: "258513465075",
      appId: "1:258513465075:web:b4ee3ebab48e1ba2219186",
      measurementId: "G-81W4BVN2DR"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Authentication functions
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default app; 