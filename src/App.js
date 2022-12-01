import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/home/home.component";
import Login from "./routes/login/login.component";
import Workouts from "./routes/workouts/workouts.component";

import { selectCurrentUser } from "./store/user/user.selector";
import { useSelector } from "react-redux";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <Routes>
      <Route>
        <Route path="login" element={<Login />} />
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
    </Routes>
  );
};

export default App;
