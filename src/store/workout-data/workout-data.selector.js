import { createSelector } from "reselect";

const selectWorkoutDataReducer = (state) => state.workoutData;

export const selectWorkoutData = createSelector(
  [selectWorkoutDataReducer],
  (workoutData) => workoutData.workoutData
);

const selectWorkoutNameAndTypeReducer = (state) =>
  state.workoutData.nameAndType;

export const selectWorkoutNameAndType = createSelector(
  [selectWorkoutNameAndTypeReducer],
  (nameAndType) => nameAndType
);

const selectFormFieldsReducer = (state) => state.workoutData.formFields;

export const selectFormFields = createSelector(
  [selectFormFieldsReducer],
  (formFields) => formFields
);
