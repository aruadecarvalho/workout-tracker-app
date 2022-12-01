import {
  SignOutButton,
  NavBarContiner,
  TypesButton,
  WorkoutsButton,
} from "./nav-bar.styles";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/login"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <NavBarContiner>
      <div>
        <SignOutButton onClick={handleSignOut}>Signout</SignOutButton>
      </div>
      <div>
        <WorkoutsButton />
        <TypesButton />
      </div>
    </NavBarContiner>
  );
};

export default NavBar;
