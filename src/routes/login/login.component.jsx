import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContainer } from "./login.styles";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { signInStart, signUpStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";

const defaultRegisterInformation = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState(
    defaultRegisterInformation
  );
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();

    try {
      dispatch(signInStart(email, password));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
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
    dispatch(
      signUpStart(registerInformation.email, registerInformation.password)
    );
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
      </div>
    </LoginContainer>
  );
};

export default Login;
