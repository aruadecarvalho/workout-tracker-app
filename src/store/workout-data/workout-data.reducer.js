import { WORKOUT_DATA_ACTION_TYPES } from "./workout-data.types";

export const WORKOUT_DATA_INITIAL_STATE = {
  workoutData: [],
  nameAndType: {
    name: "",
    type: { name: "", color: "" },
  },
};

export const workoutDataReducer = (
  state = WORKOUT_DATA_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case WORKOUT_DATA_ACTION_TYPES.SET_WORKOUT_DATA:
      return { ...state, workoutData: payload };
    case WORKOUT_DATA_ACTION_TYPES.SET_WORKOUT_NAME_TYPE:
      return { ...state, nameAndType: payload };
    case WORKOUT_DATA_ACTION_TYPES.CLEAR_WORKOUT:
      return {
        workoutData: [],
        nameAndType: {
          name: "",
          type: { name: "", color: "" },
        },
      };
    default:
      return state;
  }
};
