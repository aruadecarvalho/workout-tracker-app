import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SubmitButton } from "./submit-workout.styles";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWorkoutData,
  selectCanSubmit,
} from "../../store/workout-data/workout-data.selector";
import { canSubmitWorkout } from "../../store/workout-data/workout-data.action";

const SubmitWorkout = () => {
  const workoutData = useSelector(selectWorkoutData);
  const canSubmit = useSelector(selectCanSubmit);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // ao enviar limpoar o formfields e limpar o workoutData e mandar o workoutData para outro reducer que vai para o firebase
    dispatch(canSubmitWorkout(true));
    try {
      const response = await addDoc(collection(db, "workouts"), {
        workoutData,
        timeStamp: serverTimestamp(),
      });
      dispatch(canSubmitWorkout(false));
    } catch (error) {
      console.log(error);
    }
  };
  // limpar formFields quando enviar, criar um reducer para isso
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
