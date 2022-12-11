export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserTypes = (state) => state.user.userData.types;
export const selectUserWorkouts = (state) => state.user.userData.workouts;
export const selectUserIsLoading = (state) => state.user.isLoading;
export const selectErrorSignIn = (state) => state.user.errorSignIn;
