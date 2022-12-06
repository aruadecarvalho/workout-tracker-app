import {
  SignOutButton,
  NavBarContiner,
  HomeButton,
  TypesButton,
  WorkoutsButton,
} from "./nav-bar.styles";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { useNavigate, Outlet } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/login"))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWorkoutsRoute = () => {
    navigate("/workouts");
  };

  const handleHomeRoute = () => {
    navigate("/");
  };
  return (
    <>
      <NavBarContiner>
        <div>
          <SignOutButton onClick={handleSignOut}>Signout</SignOutButton>
        </div>
        <div>
          <HomeButton onClick={handleHomeRoute} />
          <WorkoutsButton onClick={handleWorkoutsRoute} />
          <TypesButton />
        </div>
      </NavBarContiner>
      <Outlet />
    </>
  );
};

export default NavBar;
