import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SubmitButton } from "./submit-workout.styles";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentUser,
  selectUserTypes,
  selectUserWorkouts,
} from "../../store/user/user.selector";
import {
  selectWorkoutData,
  selectWorkoutNameAndType,
} from "../../store/workout-data/workout-data.selector";
import { clearWorkoutData } from "../../store/workout-data/workout-data.action";

const SubmitWorkout = () => {
  const workoutData = useSelector(selectWorkoutData);
  const nameAndType = useSelector(selectWorkoutNameAndType);
  const workouts = useSelector(selectUserWorkouts);
  const currentUser = useSelector(selectCurrentUser);
  const userTypes = useSelector(selectUserTypes);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const userUid = currentUser.uid;
      const workout = { workoutData, nameAndType, time: new Date() };
      const updatedWorkouts = [...workouts, workout];

      const userResponse = await setDoc(doc(db, "users", userUid), {
        workouts: updatedWorkouts,
        types: userTypes,
      });
      dispatch(clearWorkoutData());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SubmitButton
      onClick={handleSubmit}
      buttonType={BUTTON_TYPE_CLASSES.inverted}
    >
      Finish workout
    </SubmitButton>
  );
};

export default SubmitWorkout;
