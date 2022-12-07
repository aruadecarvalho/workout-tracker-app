import { useEffect } from "react";

import { HomeContainer } from "./home.styles";

import WorkoutForm from "../../components/workout-form/workout-form.component";
import SubmitWorkout from "../../components/submit-workout/submit-workout.component";
import WorkoutItems from "../../components/workout-items/workout-items.component";
import NameTypeForm from "../../components/name-type-form/name-type-form.component";
import Spinner from "../../components/spinner/spinner.component";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserTypesStart,
  fetchUserWorkoutsStart,
} from "../../store/user/user.action";
import { selectUserIsLoading } from "../../store/user/user.selector";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserIsLoading);

  useEffect(() => {
    dispatch(fetchUserWorkoutsStart());
    dispatch(fetchUserTypesStart());
  }, []);

  return (
    <HomeContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Let's workout!</h1>
          <NameTypeForm />
          <WorkoutForm />
          <SubmitWorkout />
          <WorkoutItems />
        </div>
      )}
    </HomeContainer>
  );
};

export default Home;
