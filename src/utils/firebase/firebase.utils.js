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
  apiKey: "AIzaSyDN7uvuyAmCaXYhMYJO5H_viitKw7p728I",
  authDomain: "workout-app-428cb.firebaseapp.com",
  projectId: "workout-app-428cb",
  storageBucket: "workout-app-428cb.appspot.com",
  messagingSenderId: "494380062665",
  appId: "1:494380062665:web:115a60f58c90f0f8c8fa18",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const getTypes = async (userUid) => {
  const docRef = doc(db, userUid, "types");
  const q = query(docRef);
  const querySnap = await getDoc(q);
  return querySnap.data();
};

export const getWorkouts = async (userUid) => {
  const colletionRef = collection(db, userUid);
  const q = query(colletionRef);
  const querySnap = await getDocs(q);
  return querySnap.docs.map((doc) => doc.data());
};
