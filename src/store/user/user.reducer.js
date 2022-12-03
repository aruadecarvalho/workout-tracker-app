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
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_USER_DATA: {
      return {
        ...state,
        userData: payload,
      };
    }
    case USER_ACTION_TYPES.ADD_USER_TYPE: {
      return {
        ...state,
        userData: {
          ...state.userData,
          types: state.userData.types
            ? [...state.userData.types, payload]
            : [payload],
        },
      };
    }
    case USER_ACTION_TYPES.SIGN_OUT_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
