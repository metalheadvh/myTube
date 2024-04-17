import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";
import { UserProfileContext } from "../../../Contexts/UserProfileContextProvider";

const CreateAccount = () => {
  const { user, setUser, password, setPassword } = useContext(UserProfileContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const emailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValid(inputValue.includes("@"));
  };
  return (
    <div>
      <div className="create-account-main">
        <div className="create-account-box">
          <div className="create-account-logo">
            <i className="fa-brands fa-square-youtube"></i>
          </div>
          <h1 className="create-account-title">NEW ACCOUNT</h1>
          <div className="create-account-input">
            <div className="label">
              <label>Full Name</label>
            </div>
            <input type="text" name="" placeholder="Enter Full Name" />
            <div className="label">
              <label>Email</label>
            </div>

            <input type="text" placeholder="Enter Email" value={email} onChange={emailChange} required />

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
          </div>

          <div className="create-account-button">
            <Link className="link" to="/login">
              <button disabled={!isValid}>CREATE ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
