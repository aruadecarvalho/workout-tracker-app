import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const addUserType = (type) => {
  return createAction(USER_ACTION_TYPES.ADD_USER_TYPE, type);
};

export const fetchUserWorkoutsStart = () =>
  createAction(USER_ACTION_TYPES.FETCH_WORKOUTS_START);

export const fetchUserWorkoutsSuccess = (workouts) =>
  createAction(USER_ACTION_TYPES.FETCH_WORKOUTS_SUCCESS, workouts);

export const fetchUserTypesStart = () =>
  createAction(USER_ACTION_TYPES.FETCH_TYPES_START);

export const fetchUserTypesSuccess = (types) =>
  createAction(USER_ACTION_TYPES.FETCH_TYPES_SUCCESS, types);

export const fetchUserFailed = (error) =>
  createAction(USER_ACTION_TYPES.FETCH_FAILED, error);
