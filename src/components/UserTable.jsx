import React from "react";
import UserCard from '../components/UserCard';

function UserTable() {
  return (
    <div className="w-3/4 border-collapse bg-white text-left text-sm text-gray-500 overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <div className="bg-gray-200 flex items-center">
        <div class="px-6 py-4 font-medium text-gray-900 flex-1">Name</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1">State</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1">Year</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1">Skills</div>
        <div class="px-6 py-4 font-medium text-gray-900 flex-1"></div>
      </div>
      <div className="divide-y divide-gray-100 border-t border-gray-100">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default UserTable;
