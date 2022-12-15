import { useSelector } from "react-redux";
import { selectUserWorkouts } from "../../store/user/user.selector";

import { WorkoutsContainer } from "./workouts.styles";

export const Workouts = () => {
  const workouts = useSelector(selectUserWorkouts);
  console.log(workouts);
  return (
    <WorkoutsContainer>
      <h1>Workouts</h1>;
    </WorkoutsContainer>
  );
};

export default Workouts;
