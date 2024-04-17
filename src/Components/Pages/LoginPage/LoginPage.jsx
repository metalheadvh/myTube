import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../../../Contexts/UserProfileContextProvider";

const Login = () => {
  const { user, password, handleLogin, setPassword, setUser } = useContext(UserProfileContext);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-main">
        <div className="login-box">
          <div className="login-logo">
            <Link to="/">
              <p className="fa-brands fa-square-youtube"></p>
            </Link>
          </div>
          <h1 className="login-title">MyTube</h1>
          <div className="login-input">
            <div className="label">
              <label>Username</label>
            </div>
            <input
              value={user}
              type="text"
              name=""
              placeholder="Enter Username"
              required
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <div className="label">
              <label>Password</label>
            </div>
            <input
              value={password}
              type={showPassword ? "text" : "password"}
              name=""
              placeholder="Enter Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="show-password">
              <input type="checkbox" name="password" onChange={() => setShowPassword((prev) => !prev)} />
              <div className="label">
                <label htmlFor="password">Show Password</label>
              </div>
            </div>
            <div className="forgot-password">
              <p>Forgot your password?</p>
            </div>
          </div>

          <div className="login-button">
            <Link className="link" to="/">
              <button onClick={handleLogin}>LOGIN</button>
            </Link>
          </div>

          <div className="new-account">
            <p>Don't have an account?</p>
            <Link to="/create-account">
              <p style={{ marginLeft: "0.4rem" }}>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
