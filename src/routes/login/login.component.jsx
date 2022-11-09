import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ! add create user component
  // !  create firebase collection for users and add each workout to the user collection
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setCurrentUser(user));
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
