import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const addUserType = (type) => {
  return createAction(USER_ACTION_TYPES.ADD_USER_TYPE, type);
};

export const clearErrorMessage = () =>
  createAction(USER_ACTION_TYPES.CLEAR_ERROR_MESSAGE);

export const stopLoading = () => createAction(USER_ACTION_TYPES.STOP_LOADING);

// User session
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// Sign in
export const signInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

// Sign up
export const signUpStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
  });

export const signUpSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, user);

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

// Sign out
export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED);

// Fetch workouts
export const fetchUserWorkoutsStart = () =>
  createAction(USER_ACTION_TYPES.FETCH_WORKOUTS_START);

export const fetchUserWorkoutsSuccess = (workouts) =>
  createAction(USER_ACTION_TYPES.FETCH_WORKOUTS_SUCCESS, workouts);

export const fetchUserWorkoutsFailed = (error) =>
  createAction(USER_ACTION_TYPES.FETCH_WORKOUTS_FAILED, error);

// Fetch types
export const fetchUserTypesStart = () =>
  createAction(USER_ACTION_TYPES.FETCH_TYPES_START);

export const fetchUserTypesSuccess = (types) =>
  createAction(USER_ACTION_TYPES.FETCH_TYPES_SUCCESS, types);

export const fetchUserTypesFailed = (error) =>
  createAction(USER_ACTION_TYPES.FETCH_TYPES_FAILED, error);
