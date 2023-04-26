import React from "react";
import UserCard from "../components/UserCard";
const DATA = [
  {
    _id: "63c63365da36e5e81dc6a8a1",
    email: "gaurmanan27@gmail.com",
    username: "Manan Gaur",
    image:
      "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
  },
  {
    _id: "63add416bc3a132d96ce6cb2",
    email: "sid.01chadha@gmail.com",
    username: "Siddhant",
    image:
      "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
  },
  {
    _id: "63add1dc5086f6fca8576f01",
    email: "tjain210@gmail.com",
    username: "Tushar Jain",
    image:
      "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
  },
];
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
        {DATA.map((item) => (
          <UserCard itemData={item} />
        ))}
      </div>
    </div>
  );
}

export default UserTable;
