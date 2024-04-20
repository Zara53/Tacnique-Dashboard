import React from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ users, usersPerPage, paginate }) => {
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div>
      <ul className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
