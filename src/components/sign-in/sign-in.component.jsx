import { useSelector } from "react-redux";
import { selectErrorSignIn } from "../../store/user/user.selector";

import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { ErrorMessage } from "../../routes/authentication/authentication.styles";
import { RelativeContainer } from "../../utils/mixins/mixins.styles";

const SignIn = ({
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
  setIsRegistering,
}) => {
  const error = useSelector(selectErrorSignIn);
  const setErrorMessage = () => {
    if (!error?.code) return "";
    if (error.code === "auth/user-not-found") return "User not found";
    if (error.code === "auth/wrong-password") return "Wrong password";
  };
  const errorMessage = setErrorMessage(error);

  return (
    <RelativeContainer>
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleLogin}>
        Login
      </Button>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={() => setIsRegistering(true)}
      >
        Create account
      </Button>
      {
        <ErrorMessage>
          <p>{errorMessage}</p>
        </ErrorMessage>
      }
    </RelativeContainer>
  );
};

export default SignIn;
