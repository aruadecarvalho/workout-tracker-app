import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// create function that dispatches the workout fetched from firebase to the userData reducer

export const setUserTypes = (types) =>
  createAction(USER_ACTION_TYPES.SET_USER_TYPES, types);

export const setUserWorkouts = (workouts) =>
  createAction(USER_ACTION_TYPES.SET_USER_WORKOUTS, workouts);
