import React from "react";
import UserTable from "../components/UserTable";
function Users() {
  return (
    <div
      className="flex justify-center items-center max-h-full overflow-y-auto"
      id="journal-scroll"
    >
      <UserTable />
    </div>
  );
}

export default Users;
