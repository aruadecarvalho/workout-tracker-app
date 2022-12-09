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

export const addFormFieldsSetAndName = (name, value) => {
  return createAction(WORKOUT_DATA_ACTION_TYPES.SET_FORM_FIELDS_NAME_AND_SET, {
    name,
    value,
  });
};

export const addFormFieldsWeightAndRep = (name, value, id) => {
  return createAction(
    WORKOUT_DATA_ACTION_TYPES.SET_FORM_FIELDS_WEIGHT_AND_REP,
    {
      name,
      value,
      id,
    }
  );
};

export const clearWorkoutData = () => {
  return createAction(WORKOUT_DATA_ACTION_TYPES.CLEAR_WORKOUT);
};

export const clearFormFields = () => {
  return createAction(WORKOUT_DATA_ACTION_TYPES.CLEAR_FORM_FIELDS);
};
