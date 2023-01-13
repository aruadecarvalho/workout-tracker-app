import { useState } from "react";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SubmitButton } from "./submit-workout.styles";
import { ErrorMessage } from "../workout-form/workout-form.styles";

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
import { RelativeContainer } from "../../utils/mixins/mixins.styles";

const SubmitWorkout = () => {
  const workoutData = useSelector(selectWorkoutData);
  const nameAndType = useSelector(selectWorkoutNameAndType);
  const workouts = useSelector(selectUserWorkouts);
  const currentUser = useSelector(selectCurrentUser);
  const userTypes = useSelector(selectUserTypes);
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    if (!Object.values(workoutData).length) {
      return "Please add at least one exercise";
    }
    if (Object.values(nameAndType.type).some((type) => type === "")) {
      return "Please add a name and select a type";
    }
    return "";
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }
    try {
      const date = new Date().toLocaleDateString();
      const userUid = currentUser.id;
      const workout = { workoutData, nameAndType, time: date, id: Date.now() };
      const updatedWorkouts = [...workouts, workout];
      await setDoc(doc(db, "users", userUid), {
        workouts: updatedWorkouts,
        types: userTypes,
      });

      dispatch(clearWorkoutData());
      setIsSubmitted(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RelativeContainer>
      <SubmitButton
        onClick={handleSubmit}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Finish workout
      </SubmitButton>
      {error && isSubmitted && <ErrorMessage>{error}</ErrorMessage>}
    </RelativeContainer>
  );
};

export default SubmitWorkout;
