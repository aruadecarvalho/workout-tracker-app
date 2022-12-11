import { useSelector } from "react-redux";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { ErrorMessage } from "../../routes/authentication/authentication.styles";
import { selectError } from "../../store/user/user.selector";
import { RelativeContainer } from "../../utils/mixins/mixins.styles";

const SignIn = ({
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
  setIsRegistering,
}) => {
  const error = useSelector(selectError);
  const errorMessage = error?.code
    ? error.code.slice(5, error.code.length).replace(/-/g, " ")
    : "";

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
