import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserWorkouts } from "../../store/user/user.selector";
import { fetchUserWorkoutsStart } from "../../store/user/user.action";
import { WorkoutsContainer } from "./workouts.styles";
import WorkoutPreview from "../../components/workout-preview/workout-preview.component";

export const Workouts = () => {
  const dispatch = useDispatch();
  const workouts = useSelector(selectUserWorkouts);
  console.log(workouts);
  useEffect(() => {
    dispatch(fetchUserWorkoutsStart());
  }, [dispatch]);
  return (
    <WorkoutsContainer>
      <h1>Workouts</h1>
      {workouts &&
        workouts.map((workout, key) => (
          <WorkoutPreview key={key} workoutInfo={workout} />
        ))}
    </WorkoutsContainer>
  );
};

export default Workouts;
