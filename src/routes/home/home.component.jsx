import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import "./home.styles.scss";

import WorkoutForm from "../../components/workout-form/workout-form.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import SubmitWorkout from "../../components/submit-workout/submit-workout.component";
import WorkoutItems from "../../components/workout-items/workout-items.component";
import NameTypeForm from "../../components/name-type-form/name-type-form.component";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  fetchUserTypesStart,
  fetchUserWorkoutsStart,
} from "../../store/user/user.action";

const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserWorkoutsStart());
    dispatch(fetchUserTypesStart());
  }, []);

  return (
    <div className="home-container">
      <div>
        <NavBar />
        <h1>Let's workout!</h1>
        <NameTypeForm />
        <WorkoutForm />
        <SubmitWorkout />
        <WorkoutItems />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
