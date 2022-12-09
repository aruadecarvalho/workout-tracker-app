import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Workouts from "./routes/workouts/workouts.component";

import { selectCurrentUser } from "./store/user/user.selector";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import NavBar from "./routes/nav-bar/nav-bar.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route>
        <Route path="login" element={<Authentication />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <NavBar />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="workouts"
            element={
              <RequireAuth>
                <Workouts />
              </RequireAuth>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
