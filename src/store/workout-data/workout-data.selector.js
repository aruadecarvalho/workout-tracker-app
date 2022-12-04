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
