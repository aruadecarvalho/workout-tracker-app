import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getUserData,
  uploadUserType,
} from "../../utils/firebase/firebase.utils";

import { USER_ACTION_TYPES } from "./user.types";
import { getCurrentUserUid } from "../../utils/firebase/firebase.utils";
import {
  fetchUserFailed,
  fetchUserTypesSuccess,
  fetchUserWorkoutsSuccess,
} from "./user.action";

export function* fetchWorkoutsAsync() {
  try {
    const uid = yield call(getCurrentUserUid);
    const data = yield call(getUserData, uid);
    const workouts = yield data.workouts;
    yield put(fetchUserWorkoutsSuccess(workouts));
  } catch (error) {
    yield put(fetchUserFailed(error));
  }
}

export function* fetchTypesAsync() {
  try {
    const uid = yield call(getCurrentUserUid);
    const data = yield call(getUserData, uid);
    const types = yield data.types;
    yield put(fetchUserTypesSuccess(types));
  } catch (error) {
    yield put(fetchUserFailed(error));
  }
}

export function* uploadUserTypes(action) {
  const uid = yield call(getCurrentUserUid);
  const type = yield action.payload;
  yield uploadUserType(uid, type);
}

export function* onUploadUserTypes() {
  yield takeLatest(USER_ACTION_TYPES.ADD_USER_TYPE, uploadUserTypes);
}

export function* onFetchTypes() {
  yield takeLatest(USER_ACTION_TYPES.FETCH_TYPES_START, fetchTypesAsync);
}

export function* onFetchWorkouts() {
  yield takeLatest(USER_ACTION_TYPES.FETCH_WORKOUTS_START, fetchWorkoutsAsync);
}

export function* userSagas() {
  yield all([
    call(onFetchWorkouts),
    call(onFetchTypes),
    call(onUploadUserTypes),
  ]);
}
