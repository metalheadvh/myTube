import React, { useContext, useEffect, useState } from "react";
import "./CommentsSection.css";
import { UserProfileContext } from "../../../Contexts/UserProfileContextProvider";
import { Link } from "react-router-dom";

function CommentsSection() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserProfileContext);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && inputText.trim() !== "") {
      setComments((prevComments) => [...prevComments, inputText.trim()]);
      setInputText("");
      localStorage.setItem("comment", inputText);
    }
  };

  const handleButtonPress = () => {
    setComments((prevComments) => [...prevComments, inputText.trim()]);
    localStorage.setItem("comment", inputText);
    setInputText("");
  };

  useEffect(() => {
    const storedComment = localStorage.getItem("comment");
    if (storedComment) {
      setComments([storedComment]);
    }
  }, []);

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {user ? (
        <div className="comment-inputs">
          <input
            type="text"
            placeholder="Add a comment..."
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
          />
          <div className="comment-input">
            <button disabled={!inputText.trim()} onClick={handleButtonPress}>
              Comment
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="please-login">
            Please
            <Link className="please-login-link" to="/login">
              <span>login</span>
            </Link>
            to post comments.
          </div>
        </>
      )}

      {user ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <span>{user}'s comment:</span> {comment}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default CommentsSection;
