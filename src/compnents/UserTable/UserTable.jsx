import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Table from "../Table/Table";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from API
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

  // Function to add a new user
  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      setUsers((prevUsers) => [...prevUsers, response.data]); // Update state based on previous state
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Logic to get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Search onAddUser={handleAddUser} />
      <Table
        currentUsers={currentUsers}
        error={error}
        users={users}
        setUsers={setUsers}
      />
      <Pagination
        users={users}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default UserTable;
