import React from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ users, usersPerPage, paginate }) => {
  return (
    <div>
      {" "}
      <ul className={styles.pagination}>
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <li key={index}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
