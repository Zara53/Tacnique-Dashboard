import React, { useState } from "react";
import styles from "./Table.module.css";
import axios from "axios";
const Table = ({ currentUsers, error, users, setUsers }) => {
  const [editingUser, setEditingUser] = useState(null);

  // Function to delete a user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUsers(users.filter((user) => user.id !== userId));
      alert("Successfully deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to edit a user
  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  // Function to update a user
  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        updatedUser
      );
      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? response.data : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
      alert(`Successfully updated user ${updatedUser.id}`);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

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
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name ? user.name.split(" ")[0] : ""}</td>
                <td>{user.name ? user.name.split(" ")[1] : ""}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <span style={{ marginLeft: "30px" }}></span>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {editingUser && (
        <div>
          <h2 className={styles.editUser}>Edit User</h2>
          <input
            type="text"
            value={editingUser.id}
            onChange={(e) =>
              setEditingUser({ ...editingUser, id: e.target.value })
            }
          />
          <input
            type="text"
            value={editingUser.name ? editingUser.name.split(" ")[0] : ""}
            onChange={(e) =>
              setEditingUser({
                ...editingUser,
                name:
                  e.target.value +
                  " " +
                  (editingUser.name ? editingUser.name.split(" ")[1] : ""),
              })
            }
          />
          <input
            type="text"
            value={editingUser.name ? editingUser.name.split(" ")[1] : ""}
            onChange={(e) =>
              setEditingUser({
                ...editingUser,
                name:
                  (editingUser.name ? editingUser.name.split(" ")[0] : "") +
                  " " +
                  e.target.value,
              })
            }
          />
          <input
            type="text"
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser({ ...editingUser, email: e.target.value })
            }
          />
          <input
            type="text"
            value={editingUser.company.name}
            onChange={(e) =>
              setEditingUser({
                ...editingUser,
                company: { ...editingUser.company, name: e.target.value },
              })
            }
          />
          <button onClick={() => handleUpdateUser(editingUser)}>Update</button>
        </div>
      )}
    </div>
  );
};

export default Table;
