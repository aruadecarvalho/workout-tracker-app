import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SubmitButton } from "./submit-workout.styles";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectTypes } from "../../store/types/types.selector";
import {
  selectWorkoutData,
  selectCanSubmit,
  selectWorkoutNameAndType,
} from "../../store/workout-data/workout-data.selector";
import { canSubmitWorkout } from "../../store/workout-data/workout-data.action";

const SubmitWorkout = () => {
  const workoutData = useSelector(selectWorkoutData);
  const nameAndType = useSelector(selectWorkoutNameAndType);
  const currentUser = useSelector(selectCurrentUser);
  const types = useSelector(selectTypes);
  const canSubmit = useSelector(selectCanSubmit);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // ao enviar limpoar o formfields e limpar o workoutData e mandar o workoutData para outro reducer que vai para o firebase
    // when submited fecth from firebase again
    dispatch(canSubmitWorkout(true));
    try {
      const userUid = currentUser.uid;

      const workoutDataResponse = await addDoc(collection(db, userUid), {
        workoutData,
        nameAndType,
        timeStamp: serverTimestamp(),
      });
      // when I submit a new type I need to spread what types I had before in firebase and add the new one
      const typesResponse = await setDoc(doc(db, userUid, "types"), {
        types,
      });
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
