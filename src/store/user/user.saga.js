import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getUserData,
  uploadUserType,
} from "../../utils/firebase/firebase.utils";

import { USER_ACTION_TYPES } from "./user.types";

import {
  getCurrentUserUid,
  getCurrentUser,
  signOutUser,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {
  fetchUserTypesSuccess,
  fetchUserTypesFailed,
  fetchUserWorkoutsSuccess,
  fetchUserWorkoutsFailed,
  signOutSuccess,
  signOutFailed,
  signInFailed,
  signInSuccess,
  signUpFailed,
  signUpSuccess,
  stopLoading,
} from "./user.action";

// onCheckUserSession
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) {
      yield put(stopLoading());
      return;
    }
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// # Authenticates user session #
export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// onSignUpStart
export function* signUp({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log(user);
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

// onSignUpSuccess
export function* signInAfterSignUp({ payload: user }) {
  console.log(user);
  yield call(getSnapshotFromUserAuth, user);
}

// onSignInStart
export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// onSignOutStart
export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

// onFetchWorkoutsStart
export function* fetchWorkoutsAsync() {
  try {
    const uid = yield call(getCurrentUserUid);
    const data = yield call(getUserData, uid);
    const workouts = yield data.workouts;
    yield put(fetchUserWorkoutsSuccess(workouts));
  } catch (error) {
    yield put(fetchUserWorkoutsFailed(error));
  }
}

// onFetchTypesStart
export function* fetchTypesAsync() {
  try {
    const uid = yield call(getCurrentUserUid);
    const data = yield call(getUserData, uid);
    const types = yield data.types;
    yield put(fetchUserTypesSuccess(types));
  } catch (error) {
    yield put(fetchUserTypesFailed(error));
  }
}

// onUploadUserTypes
export function* uploadUserTypes({ payload }) {
  const uid = yield call(getCurrentUserUid);
  yield uploadUserType(uid, payload);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signIn);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onFetchWorkouts() {
  yield takeLatest(USER_ACTION_TYPES.FETCH_WORKOUTS_START, fetchWorkoutsAsync);
}

export function* onFetchTypes() {
  yield takeLatest(USER_ACTION_TYPES.FETCH_TYPES_START, fetchTypesAsync);
}

export function* onUploadUserTypes() {
  yield takeLatest(USER_ACTION_TYPES.ADD_USER_TYPE, uploadUserTypes);
}

export function* userSagas() {
  yield all([
    call(onFetchWorkouts),
    call(onFetchTypes),
    call(onUploadUserTypes),
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignInStart),
    call(onSignOutStart),
  ]);
}
