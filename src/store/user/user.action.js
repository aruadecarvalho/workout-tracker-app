import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const addUserType = (type) =>
  createAction(USER_ACTION_TYPES.ADD_USER_TYPE, type);

export const setUserData = (data) =>
  createAction(USER_ACTION_TYPES.SET_USER_DATA, data);
