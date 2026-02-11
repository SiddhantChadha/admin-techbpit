import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import Loader from "../components/Loader";
import { getAllUsers } from "../api/UserAPI";
import { useCookies } from "react-cookie";
function Users() {
  console.log("Users component rendered");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [cookies, setCookies, removeCookie] = useCookies([
    "token",
    "name",
    "image",
  ]);
  async function fetchData() {
    try {
      const data = await getAllUsers(cookies.token);
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div
      className="flex justify-center items-center max-h-screen overflow-y-auto"
      id="journal-scroll"
    >
      <UserTable
        setIsLoading={setIsLoading}
        fetchData={fetchData}
        data={data}
      />
    </div>
  );
}

export default Users;
