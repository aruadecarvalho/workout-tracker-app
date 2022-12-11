import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

const SignIn = ({
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
  setIsRegistering,
}) => {
  return (
    <>
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
    </>
  );
};

export default SignIn;
