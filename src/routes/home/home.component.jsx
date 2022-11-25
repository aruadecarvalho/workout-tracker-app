import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./home.styles.scss";

import WorkoutForm from "../../components/workout-form/workout-form.component";
import SubmitWorkout from "../../components/submit-workout/submit-workout.component";
import WorkoutItems from "../../components/workout-items/workout-items.component";
import NameTypeForm from "../../components/name-type-form/name-type-form.component";

import { signOut } from "firebase/auth";
import {
  auth,
  getTypes,
  getWorkouts,
} from "../../utils/firebase/firebase.utils";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Home = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const userUid = currentUser.uid;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/login"))
      .catch((error) => {
        console.log(error);
      });
  };

  // add this to a reducer
  useEffect(() => {
    const getTypesData = async () => {
      const data = await getTypes(userUid);
      console.log(data);
    };
    const getWorkoutData = async () => {
      const data = await getWorkouts(userUid);
      console.log(data.slice(0, -1));
    };
    getTypesData();
    getWorkoutData();
  }, []);

  return (
    <div className="home-container">
      <div>
        <button onClick={handleSignOut}>signout</button>
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
