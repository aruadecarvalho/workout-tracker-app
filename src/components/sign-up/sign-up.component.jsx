import { useDispatch, useSelector } from "react-redux";

import { selectErrorSignIn } from "../../store/user/user.selector";

import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { RelativeContainer } from "../../utils/mixins/mixins.styles";
import { ErrorMessage } from "../../routes/authentication/authentication.styles";
import { clearErrorMessage } from "../../store/user/user.action";
const SignUp = ({
  registerInformation,
  handleRegisterOnChange,
  handleRegister,
  setIsRegistering,
  error,
}) => {
  const dispatch = useDispatch();
  const errorFirebase = useSelector(selectErrorSignIn);

  const setErrorMessage = () => {
    if (!errorFirebase?.code) return "";
    if (errorFirebase.code === "auth/email-already-in-use")
      return "Email already in use";
    if (errorFirebase.code === "auth/invalid-email") return "Invalid email";
    if (errorFirebase.code === "auth/weak-password") return "Weak password";
  };
  const errorMessage = setErrorMessage(errorFirebase);

  const handleSignUpButton = () => {
    dispatch(clearErrorMessage());
    setIsRegistering(false);
  };
  return (
    <RelativeContainer>
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
        onClick={handleSignUpButton}
      >
        Go back
      </Button>
      <ErrorMessage>
        <p>{error ? error : errorMessage}</p>
      </ErrorMessage>
    </RelativeContainer>
  );
};

export default SignUp;
