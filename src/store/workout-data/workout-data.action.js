import { createAction } from "../../utils/reducer/reducer.utils";
import { WORKOUT_DATA_TYPES } from "./workout-data.types";

const addWorkoutData = (workoutData, dataToAdd) => {
  return [...workoutData, dataToAdd];
};

const addWorkoutNameType = (workoutData, dataToAdd) => {
  return [dataToAdd, ...workoutData];
};

export const addData = (workoutData, dataToAdd) => {
  const newData = addWorkoutData(workoutData, dataToAdd);
  return createAction(WORKOUT_DATA_TYPES.SET_WORKOUT_DATA, newData);
};

export const addNameType = (workoutData, dataToAdd) => {
  const newData = addWorkoutNameType(workoutData, dataToAdd);
  return createAction(WORKOUT_DATA_TYPES.SET_WORKOUT_DATA, newData);
};

// check if the workout data can be submitted, only when name and type and there's at least one exercise
export const canSubmitWorkout = (canSubmit) => {
  return createAction(WORKOUT_DATA_TYPES.CAN_SUBMIT_WORKOUT, canSubmit);
};
