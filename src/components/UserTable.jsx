import React from "react";
import UserCard from "../components/UserCard";
import { useState } from "react";
import { useEffect } from "react";
import { blockUser, getAllUsers, unblockUser } from "../api/UserAPI";
import { useAuth } from "../hooks/auth";

function UserTable({ setIsLoading, fetchData, data }) {
  const { cookies } = useAuth();
  async function block(userId) {
    setIsLoading(true);
    try {
      await blockUser(cookies.token, userId);
    } catch (err) {
      console.log(err);
    }
    fetchData();
  }

  async function unblock(userId) {
    setIsLoading(true);
    try {
      await unblockUser(cookies.token, userId);
    } catch (err) {
      console.log(err);
    }
    fetchData();
  }

  return (
    <div className="w-3/4 border-collapse bg-white text-left text-sm text-gray-500 rounded-lg border border-gray-200 shadow-md mt-5 max-h-screen ">
      <div className="bg-gray-200 items-center grid grid-cols-5 gap-3">
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
          Name
        </div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
          State
        </div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
          Year
        </div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
          Skills
        </div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
          Action
        </div>
      </div>
      <div className="divide-y divide-gray-100 border-t border-gray-100 overflow-y-scroll">
        {data.map((item) => (
          <UserCard
            itemData={item}
            setIsLoading={setIsLoading}
            block={block}
            unblock={unblock}
          />
        ))}
      </div>
    </div>
  );
}

export default UserTable;
