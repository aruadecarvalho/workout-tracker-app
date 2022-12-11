import { useState } from "react";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SubmitButton, SubmitContainer } from "./submit-workout.styles";
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
    if (Object.values(nameAndType.type).includes("")) {
      return "Please select a type";
    }
    if (!nameAndType.name.length) {
      return "Please add a name";
    }
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }
    try {
      const userUid = currentUser.id;
      const workout = { workoutData, nameAndType, time: new Date() };
      const updatedWorkouts = [...workouts, workout];
      const userResponse = await setDoc(doc(db, "users", userUid), {
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
    <SubmitContainer>
      <SubmitButton
        onClick={handleSubmit}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Finish workout
      </SubmitButton>
      {error && isSubmitted && <ErrorMessage>{error}</ErrorMessage>}
    </SubmitContainer>
  );
};

export default SubmitWorkout;
