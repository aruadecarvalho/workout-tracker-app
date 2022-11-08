import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";
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

const fetchData = async () => {
  let list = [];
  try {
    const querySnapshot = await getDocs(collection(db, "workouts"));
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
      console.log(list);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchData();
