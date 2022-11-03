export const selectWorkoutData = (state) => state.workoutData.workoutData;

export const selectWorkoutNameAndType = (state) =>
  state.workoutData.nameAndType;

export const selectCanSubmit = (state) => state.workoutData.canSubmitWorkout;
