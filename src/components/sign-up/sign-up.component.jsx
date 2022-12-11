import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { RelativeContainer } from "../../utils/mixins/mixins.styles";
import { ErrorMessage } from "../../routes/authentication/authentication.styles";
const SignUp = ({
  registerInformation,
  handleRegisterOnChange,
  handleRegister,
  setIsRegistering,
  error,
}) => {
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
        onClick={() => setIsRegistering(false)}
      >
        Go back
      </Button>
      <ErrorMessage>{error}</ErrorMessage>
    </RelativeContainer>
  );
};

export default SignUp;
