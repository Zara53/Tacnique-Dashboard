import React from "react";
import styles from "./Header.module.css";

const Header = ({ onToggleUserTable }) => {
  return (
    <div className={styles.headerView}>
      <h1>User Management System</h1>
      <button onClick={onToggleUserTable}>View Dashboard</button>
    </div>
  );
};

export default Header;
