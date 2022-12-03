import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  query,
  getDocs,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messageSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const getUserData = async (userUid) => {
  const userDocRef = doc(db, "users", userUid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    return { types: [], workouts: [] };
  }
  return userSnapshot.data();
};

export const getWorkouts = async (userUid) => {
  const colletionRef = collection(db, userUid);
  const q = query(colletionRef);
  const querySnap = await getDocs(q);
  const workouts = querySnap.docs.map((doc) => doc.data());
  return workouts.slice(0, -1);
};
