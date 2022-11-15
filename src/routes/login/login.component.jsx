import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { LoginContainer } from "./login.styles";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

const defaultRegisterInformation = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState(
    defaultRegisterInformation
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setCurrentUser(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterOnChange = (event) => {
    const { name, value } = event.target;
    setRegisterInformation({ ...registerInformation, [name]: value });
  };

  const handleRegister = () => {
    if (
      registerInformation.email !== registerInformation.confirmEmail ||
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      return;
      // ! add error message
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    ).then(() => {
      navigate("/");
    });
  };
  return (
    <LoginContainer>
      <div>
        {isRegistering ? (
          <>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={registerInformation.email}
              onChange={handleRegisterOnChange}
            />
            <input
              type="email"
              placeholder="Confirm email"
              name="confirmEmail"
              value={registerInformation.confirmEmail}
              onChange={handleRegisterOnChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={registerInformation.password}
              onChange={handleRegisterOnChange}
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={registerInformation.confirmPassword}
              onChange={handleRegisterOnChange}
            />
            <Button
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.base}
              onClick={() => setIsRegistering(false)}
            >
              Go back
            </Button>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <Button
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.base}
              onClick={() => setIsRegistering(true)}
            >
              Create account
            </Button>
          </>
        )}

        {/* if user clicks on create account, use the same form to create an account and just switch the buttons */}
      </div>
    </LoginContainer>
  );
};

export default Login;
