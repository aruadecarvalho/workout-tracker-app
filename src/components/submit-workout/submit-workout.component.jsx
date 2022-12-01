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
import {
  selectCurrentUser,
  selectUserTypes,
} from "../../store/user/user.selector";
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
  const userTypes = useSelector(selectUserTypes);
  const canSubmit = useSelector(selectCanSubmit);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const userUid = currentUser.uid;

      const workoutDataResponse = await addDoc(collection(db, userUid), {
        workoutData,
        nameAndType,
        timeStamp: serverTimestamp(),
      });

      const typesResponse = await setDoc(doc(db, userUid, "types"), {
        userTypes,
      });
      dispatch(canSubmitWorkout(true));
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
