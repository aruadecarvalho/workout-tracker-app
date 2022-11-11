import { useSelector } from "react-redux";
import { selectWorkoutData } from "../../store/workout-data/workout-data.selector";
import { WorkoutItem, WorkoutItemTitle } from "./workout-items.styles";
const WorkoutItems = () => {
  const workoutData = useSelector(selectWorkoutData);
  return (
    <>
      <WorkoutItemTitle>History</WorkoutItemTitle>
      {workoutData.map((item, index) => (
        <WorkoutItem key={item.exerciseName}>
          <p>{item.exerciseName}</p>
        </WorkoutItem>
      ))}
    </>
  );
};

export default WorkoutItems;
