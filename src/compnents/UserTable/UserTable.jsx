import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserTable.module.css";
import Pagination from "../Pagination/Pagination";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from API when component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError(
          "An error occurred while fetching data.Please try after sometime..."
        );
      });
  }, []);

  // Logic to get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="6">{error}</td>
            </tr>
          ) : (
            currentUsers.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name.split(" ")[0]}</td>
                <td>{users.name.split(" ")[1]}</td>
                <td>{users.email}</td>
                <td>{users.company.name}</td>
                <td>
                  <button className={styles.actionButton}>Edit</button>
                  <span style={{ marginLeft: "30px" }}></span>
                  <button className={styles.actionButton}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination
        users={users}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default UserTable;
