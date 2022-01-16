import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home.js/Home";
// import { useToken } from "./customHooks/use-token";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
const Protected = ({ auth, children }) => {
  return auth ? children : <Navigate to="/login" />;
};

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Protected auth={isAuthenticated}>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected auth={isAuthenticated}>
                  <Detail />
                </Protected>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*">404 Go Back</Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
