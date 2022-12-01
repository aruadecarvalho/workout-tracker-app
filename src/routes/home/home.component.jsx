import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./home.styles.scss";

import WorkoutForm from "../../components/workout-form/workout-form.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import SubmitWorkout from "../../components/submit-workout/submit-workout.component";
import WorkoutItems from "../../components/workout-items/workout-items.component";
import NameTypeForm from "../../components/name-type-form/name-type-form.component";

import {
  auth,
  getTypes,
  getWorkouts,
} from "../../utils/firebase/firebase.utils";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setUserTypes, setUserWorkouts } from "../../store/user/user.action";
import { selectCanSubmit } from "../../store/workout-data/workout-data.selector";

const Home = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const canSubmit = useSelector(selectCanSubmit);
  const dispatch = useDispatch();
  const userUid = currentUser.uid;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  // add this to a reducer saga maybe
  useEffect(() => {
    const setTypesData = async () => {
      const types = await getTypes(userUid);
      dispatch(setUserTypes(types));
    };
    const getWorkoutData = async () => {
      const workouts = await getWorkouts(userUid);
      console.log(workouts);
      dispatch(setUserWorkouts(workouts));
    };
    setTypesData();
    getWorkoutData();
  }, [, canSubmit]);

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
