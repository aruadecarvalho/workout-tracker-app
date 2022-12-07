import { USER_ACTION_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
  currentUser: null,
  userData: {
    types: [],
    workouts: [],
  },
  error: null,
  isLoading: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
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
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS: {
      return { ...state, currentUser: payload };
    }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return { ...state, currentUser: null, isLoading: false };
    }
    case USER_ACTION_TYPES.FETCH_WORKOUTS_START:
    case USER_ACTION_TYPES.FETCH_TYPES_START:
    case USER_ACTION_TYPES.SIGN_UP_START:
    case USER_ACTION_TYPES.SIGN_IN_START:
    case USER_ACTION_TYPES.CHECK_USER_SESSION: {
      return { ...state, isLoading: true };
    }
    case USER_ACTION_TYPES.STOP_LOADING: {
      return { ...state, isLoading: false };
    }
    case USER_ACTION_TYPES.FETCH_WORKOUTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userData: { ...state.userData, workouts: payload },
      };
    }
    case USER_ACTION_TYPES.FETCH_TYPES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userData: { ...state.userData, types: payload },
      };
    }
    case USER_ACTION_TYPES.FETCH_TYPES_FAILED:
    case USER_ACTION_TYPES.FETCH_WORKOUTS_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED: {
      return { ...state, error: payload, isLoading: false };
    }
    default:
      return state;
  }
};
