import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { getWorkouts, getTypes } from "../../utils/firebase/firebase.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// create function that dispatches the workout fetched from firebase to the userData reducer
