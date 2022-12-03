import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import "./home.styles.scss";

import WorkoutForm from "../../components/workout-form/workout-form.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import SubmitWorkout from "../../components/submit-workout/submit-workout.component";
import WorkoutItems from "../../components/workout-items/workout-items.component";
import NameTypeForm from "../../components/name-type-form/name-type-form.component";

import { getUserData } from "../../utils/firebase/firebase.utils";
import { setUserData } from "../../store/user/user.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCanSubmit } from "../../store/workout-data/workout-data.selector";

const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const canSubmit = useSelector(selectCanSubmit);
  const dispatch = useDispatch();

  useEffect(() => {
    const userUid = currentUser.uid;
    const fetchUserData = async (userUid) => {
      const response = await getUserData(userUid);
      const types = await response.types;
      const workouts = await response.workouts;
      const data = { workouts, types };
      dispatch(setUserData(data));
    };
    fetchUserData(userUid);
  }, [canSubmit]);

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
