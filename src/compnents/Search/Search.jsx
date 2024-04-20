import React, { useState } from "react";
import styles from "./Search.module.css";
const Search = ({ onAddUser, onSearchChange }) => {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleAddUserClick = () => {
    setShowForm(true); // Show the form when "Add New User" button is clicked
  };

  const handleCancelClick = () => {
    setShowForm(false);
    alert("Are you sure to cancel."); // Hide the form when "Cancel" button is clicked
  };

  // Function to handle form submission
  const handleAddUser = () => {
    // Perform client-side validation
    if (!id || !firstName || !lastName || !email || !department) {
      alert("Please fill in all fields.");
      return;
    } else {
      alert("New user addded successfully!!");
    }
    // Add the new user
    const newUser = { id, firstName, lastName, email, department };
    onAddUser(newUser);
    // Clear form fields after adding user
    setId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("");
    setShowForm(false);
  };

  return (
    <div className={styles.searchBox}>
      <div>
        <input
          className={styles.search}
          type="text"
          placeholder="Search by name , email..."
        ></input>
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.addButtonContainer}>
        {/* Button to toggle the form */}
        <button className={styles.searchButton} onClick={handleAddUserClick}>
          ➕ Add New User
        </button>
      </div>
      {/* Render the form if showForm is true */}
      {showForm && (
        <div className={styles.form}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          {/* Button to save user */}
          <div className={styles.saveCancel}>
            <button className={styles.addButton} onClick={handleAddUser}>
              Save
            </button>
            {/* Button to cancel adding user */}
            <button className={styles.addButton} onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
