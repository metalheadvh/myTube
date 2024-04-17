import React, { useState } from "react";
import styles from "./FeedbackPage.module.css";
import { Link } from "react-router-dom";

const FeedbackPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    alert("Your feedback was sent successfully!");
  };
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginBox}>
        <Link to="/">
          <div className={styles.loginLogo}>
            <p className="fa-brands fa-square-youtube"></p>
          </div>
        </Link>

        <h1 className={styles.loginTitle}>Send feedback to MyTube</h1>

        <div className={styles.loginInput}>
          <div className={styles.label}>
            <label>Describe your feedback</label>
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Tell us what prompted this feedback..."
          />
        </div>

        <div className={styles.loginButton}>
          <Link to="/">
            <button onClick={handleClick} disabled={!inputValue.trim()}>
              SUBMIT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
