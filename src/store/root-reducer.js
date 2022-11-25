import { combineReducers } from "redux";
import { workoutDataReducer } from "./workout-data/workout-data.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  workoutData: workoutDataReducer,
  user: userReducer,
});
