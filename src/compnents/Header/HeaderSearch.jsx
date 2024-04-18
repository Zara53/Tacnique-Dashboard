import React from "react";
import styles from "./HeaderSearch.module.css";
// import userLogo from "../Assets/user.jpg";

const HeaderSearch = () => {
  return (
    <div>
      <h1 className={styles.header}>
        {/* <img src={userLogo} alt="logo" width="50px" length="10px" /> */}
        User Management Dashboard
      </h1>
      <div className={styles.searchBox}>
        <div>
          <input
            className={styles.search}
            type="text"
            placeholder="Search by name , email..."
          ></input>
          <button className={styles.searchButton}>Search</button>
        </div>
        <div>
          <button className={styles.searchButton}>➕ Add New User</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
