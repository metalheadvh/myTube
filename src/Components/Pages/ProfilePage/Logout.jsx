import React, { useContext } from "react";
import { UserProfileContext } from "../../../Contexts/UserProfileContextProvider";
import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const { setUser } = useContext(UserProfileContext);
  return (
    <div className="logout-button">
      <Link to="/">
        <button
          onClick={() => {
            setUser("");
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Logout;
