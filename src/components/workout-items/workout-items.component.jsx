import { useSelector, useDispatch } from "react-redux";
import { selectWorkoutData } from "../../store/workout-data/workout-data.selector";
import {
  editData,
  removeData,
  setFormFields,
} from "../../store/workout-data/workout-data.action";
import {
  WorkoutItem,
  WorkoutItemTitle,
  WorkoutItemDelete,
  WorkoutItemEdit,
} from "./workout-items.styles";
const WorkoutItems = () => {
  const dispatch = useDispatch();
  const workoutData = useSelector(selectWorkoutData);

  const handleItemDelete = (index) => {
    dispatch(removeData(workoutData, index));
  };

  const handleItemEdit = (index) => {
    dispatch(setFormFields(workoutData[index]));
    dispatch(removeData(workoutData, index));
  };
  return (
    <>
      <WorkoutItemTitle>History</WorkoutItemTitle>
      {workoutData.map((item, index) => (
        <WorkoutItem key={index}>
          <p>{item.exerciseName}</p>
          <div>
            <WorkoutItemEdit onClick={() => handleItemEdit(index)} />
            <WorkoutItemDelete onClick={() => handleItemDelete(index)} />
          </div>
        </WorkoutItem>
      ))}
    </>
  );
};

export default WorkoutItems;
