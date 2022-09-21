import { WORKOUT_DATA_TYPES } from "./workout-data.types";

export const WORKOUT_DATA_INITIAL_STATE = {
  workoutData: [],
  canSubmitWorkout: false,
};

export const workoutDataReducer = (
  state = WORKOUT_DATA_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case WORKOUT_DATA_TYPES.SET_WORKOUT_DATA:
      return { ...state, workoutData: payload };
    case WORKOUT_DATA_TYPES.CAN_SUBMIT_WORKOUT:
      return { ...state, canSubmitWorkout: payload };
    default:
      return state;
  }
};
