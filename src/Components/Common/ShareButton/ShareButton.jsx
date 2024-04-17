import styles from "./ShareButton.module.css";
import React, { useState } from "react";

function ShareButton({ content, icon }) {
  const [copied, setCopied] = useState(false);

  const generateShareLink = (content) => {
    return `${content}`;
  };

  const handleClick = async () => {
    const shareLink = generateShareLink(content);
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className={styles.shareBox}>
      <p onClick={handleClick} className={copied ? "fa-solid fa-check" : icon}></p>
      <button onClick={handleClick}>{copied ? "Copied!" : "Share"}</button>
    </div>
  );
}

export default ShareButton;
