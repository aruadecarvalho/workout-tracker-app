import { createSelector } from "reselect";

const selectWorkoutDataReducer = (state) => state.workoutData;

// create a selector with redux persist to get the workout data from the store
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

export const selectCanSubmit = (state) => state.workoutData.canSubmitWorkout;
