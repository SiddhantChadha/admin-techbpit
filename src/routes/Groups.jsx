import React, { useEffect, useState, useRef } from "react";
import GroupCard from "../components/GroupCard";
import CreateGroupModal from "../components/CreateGroupModal";
import Loader from "../components/Loader";
import { getGroups } from "../api/GroupAPI";
import { useAuth } from "../hooks/auth";

function Groups() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cookies } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await getGroups(cookies.token);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div
      className="px-2 flex justify-center max-h-screen w-full overflow-y-auto"
      id="journal-scroll"
    >
      <div className="flex flex-wrap -mb-4 ml-6">
        {data.map((item) => (
          <GroupCard itemData={item} />
        ))}
      </div>
      <div className="flex fixed bottom-0 right-6 m-6 bg-primaryBlue rounded items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="w-4 h-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        <button
          class=" text-white font-bold py-2 px-2"
          onClick={() => setOpen(true)}
        >
          Create Group
        </button>
      </div>
      <CreateGroupModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Groups;
