import { useSelector, useDispatch } from "react-redux";
import { selectWorkoutData } from "../../store/workout-data/workout-data.selector";
import { removeData } from "../../store/workout-data/workout-data.action";
import {
  WorkoutItem,
  WorkoutItemTitle,
  WorkoutItemDelete,
} from "./workout-items.styles";
const WorkoutItems = () => {
  const dispatch = useDispatch();
  const workoutData = useSelector(selectWorkoutData);

  const handleItemDelete = (index) => {
    dispatch(removeData(workoutData, index));
  };

  return (
    <>
      <WorkoutItemTitle>History</WorkoutItemTitle>
      {workoutData.map((item, index) => (
        <WorkoutItem key={index}>
          <p>{item.exerciseName}</p>
          <WorkoutItemDelete onClick={() => handleItemDelete(index)} />
        </WorkoutItem>
      ))}
    </>
  );
};

export default WorkoutItems;
