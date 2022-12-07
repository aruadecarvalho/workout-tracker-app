import {
  SignOutButton,
  NavBarContiner,
  HomeButton,
  TypesButton,
  WorkoutsButton,
} from "./nav-bar.styles";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { signOutStart } from "../../store/user/user.action";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOutStart());
    navigate("/login");
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
