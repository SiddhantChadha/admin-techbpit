import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

function UserCard(props) {
  const { cookies } = useAuth();
  const { itemData, setIsLoading, block, unblock } = props;

  return (
    <div className="hover:bg-gray-200 shadow-md bg-white items-center w-full grid grid-cols-5 gap-3">
      <Link to={`${itemData._id}`}>
        <div className="flex flex-col px-6 py-4 font-normal text-gray-900 items-center">
          <div className="h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={itemData.image}
            />
          </div>
          <div className="text-sm flex flex-col items-center">
            <div className="font-medium text-gray-700">{itemData.username}</div>
            <div className="text-gray-400">{itemData.email}</div>
          </div>
        </div>
      </Link>
      <div className="px-6 py-4 text-center">
        {itemData.isBlocked ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
            Blocked
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Active
          </span>
        )}
      </div>
      <div className="px-6 py-4 text-center">{itemData.yearOfStudy}</div>
      <div className="px-6 py-4">
        <div className="flex gap-2 flex-wrap">
          {itemData.skills.map((obj) => {
            return (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                {obj}
              </span>
            );
          })}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-center gap-2 flex-wrap">
          {itemData.isBlocked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:text-green-500"
              onClick={async () => await unblock(itemData._id)}
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:text-red-500"
              onClick={async () => await block(itemData._id)}
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
