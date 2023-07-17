import React from "react";
import styles from "./header.module.css";
import imagePath from "../assets/tekdi-logo-black.png";

function Header() {
  return (
    <React.Fragment>
      <div className={styles.headerDiv}>
        <img
          src={imagePath}
          style={{ marginRight: "20px", width: "60px", height: "auto" }}
        />

        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default Header;
