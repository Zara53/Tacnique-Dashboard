import React, { useState } from "react";
import Header from "./compnents/Header/Header.jsx";
import UserTable from "./compnents/UserTable/UserTable.jsx";

const App = () => {
  const [showUserTable, setShowUserTable] = useState(false);

  const toggleUserTable = () => {
    setShowUserTable(!showUserTable);
  };
  return (
    <>
      <Header onToggleUserTable={toggleUserTable} />
      {showUserTable && <UserTable />}
    </>
  );
};

export default App;
