import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import WorkoutForm from "../../components/workout-form/workout-form.component";
import SubmitWorkout from "../../components/submit-workout/submit-workout.component";
import WorkoutItems from "../../components/workout-items/workout-items.component";
import NameTypeForm from "../../components/name-type-form/name-type-form.component";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import "./home.styles.scss";

const Home = () => {
  const navigate = useNavigate();

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
