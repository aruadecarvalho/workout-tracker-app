import { USER_ACTION_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  userData: {
    types: [],
    workouts: [],
  },
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_USER:
      return {
        currentUser: null,
      };
    default:
      return state;
  }
};
