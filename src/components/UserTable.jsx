import React from "react";
import UserCard from "../components/UserCard";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUsers } from "../api/UserAPI";
import Loader from "./Loader";
import { useAuth } from "../hooks/auth";

function UserTable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const {cookies} = useAuth();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await getAllUsers(cookies.token);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    setIsLoading(false);
  }, [isLoading]);

  return (
    isLoading?<Loader /> :
    <div className="w-3/4 border-collapse bg-white text-left text-sm text-gray-500 overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <div className="bg-gray-200 flex items-center">
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">Name</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">State</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">Year</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">Skills</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">Action</div>
      </div>
      <div className="divide-y divide-gray-100 border-t border-gray-100">
        {data.map((item) => (
          <UserCard itemData={item} setIsLoading={setIsLoading} />
        ))}
      </div>
    </div>
  );
}

export default UserTable;
