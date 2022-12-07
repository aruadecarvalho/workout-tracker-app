import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
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

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, { types: [], workouts: [] });
    } catch (error) {
      console.log("error creating user doc", error);
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const getCurrentUserUid = async () => {
  const userAuth = await getCurrentUser();
  const uid = userAuth.uid;
  return uid;
};

export const getUserData = async (userUid) => {
  const userDocRef = doc(db, "users", userUid);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.data();
};

export const uploadUserType = async (userUid, type) => {
  const userDocRef = doc(db, "users", userUid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    await setDoc(userDocRef, { types: [type], workouts: [] });
    return;
  }
  const { types, workouts } = userSnapshot.data();
  if (types.includes(type)) {
    return;
  }
  await updateDoc(userDocRef, {
    types: [...types, type],
  });
};
