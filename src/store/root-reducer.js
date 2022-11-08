import { combineReducers } from "redux";
import { workoutDataReducer } from "./workout-data/workout-data.reducer";
import { userReducer } from "./user/user.reducer";
import { typesReducer } from "./types/types.reducer";
export const rootReducer = combineReducers({
  workoutData: workoutDataReducer,
  user: userReducer,
  types: typesReducer,
});
