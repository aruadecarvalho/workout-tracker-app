import { createAction } from "../../utils/reducer/reducer.utils";
import { WORKOUT_DATA_ACTION_TYPES } from "./workout-data.types";

const addWorkoutData = (workoutData, dataToAdd) => {
  return [...workoutData, dataToAdd];
};

export const addData = (workoutData, dataToAdd) => {
  const newData = addWorkoutData(workoutData, dataToAdd);
  return createAction(WORKOUT_DATA_ACTION_TYPES.SET_WORKOUT_DATA, newData);
};

export const addNameAndType = (dataToAdd) => {
  return createAction(
    WORKOUT_DATA_ACTION_TYPES.SET_WORKOUT_NAME_TYPE,
    dataToAdd
  );
};

export const clearWorkoutData = (workout = []) => {
  return createAction(WORKOUT_DATA_ACTION_TYPES.CLEAR_WORKOUT, workout);
};
