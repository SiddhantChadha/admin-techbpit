import React from "react";
import { toggleGroupModerator } from "../api/GroupAPI";
import { useAuth } from "../hooks/auth";

function PromoteUserCard({ item, groupId, setRefresh }) {
  const { cookies } = useAuth();
  async function changeAccess(userId) {
    try {
      await toggleGroupModerator(cookies.token, groupId, userId);
      setRefresh((d) => !d);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="hover:bg-gray-200 shadow-md bg-white items-center w-full grid grid-cols-4 gap-3">
      <div className="flex flex-col px-6 py-4 font-normal text-gray-900 items-center">
        <div className="h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={item.image}
          />
        </div>
        <div className="text-sm flex flex-col items-center">
          <div className="font-medium text-gray-700">{item.username}</div>
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        {!item.isModerator ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-400">
            Particpant
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
            Mentor
          </span>
        )}
      </div>
      <div className="px-6 py-4 text-center">{"4th year"}</div>
      <div className="px-6 py-4">
        <div className="flex justify-center gap-2 flex-wrap">
          {!item.isModerator ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-green-500 cursor-pointer"
              onClick={async () => await changeAccess(item._id)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-red-500 cursor-pointer"
              onClick={async () => await changeAccess(item._id)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default PromoteUserCard;
