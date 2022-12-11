import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";

import { AuthContainer } from "./authentication.styles";

import { useDispatch, useSelector } from "react-redux";
import { signInStart, signUpStart } from "../../store/user/user.action";
import {
  selectCurrentUser,
  selectUserIsLoading,
} from "../../store/user/user.selector";
import { useEffect } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const defaultRegisterInformation = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUserIsLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState(
    defaultRegisterInformation
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();

    try {
      dispatch(signInStart(email, password));
    } catch (error) {
      console.log(error);
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
      setError("Email or password do not match");
      return;
    }
    dispatch(
      signUpStart(registerInformation.email, registerInformation.password)
    );
  };

  return (
    <AuthContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {isRegistering ? (
            <>
              <SignUp
                registerInformation={registerInformation}
                handleRegisterOnChange={handleRegisterOnChange}
                handleRegister={handleRegister}
                setIsRegistering={setIsRegistering}
                error={error}
              />
            </>
          ) : (
            <>
              <SignIn
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleLogin={handleLogin}
                setIsRegistering={setIsRegistering}
              />
            </>
          )}
        </div>
      )}
    </AuthContainer>
  );
};

export default Authentication;
