import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserTable.module.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API when component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

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
          {users.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.name.split(" ")[0]}</td>
              <td>{users.name.split(" ")[1]}</td>
              <td>{users.email}</td>
              <td>{users.company.name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
