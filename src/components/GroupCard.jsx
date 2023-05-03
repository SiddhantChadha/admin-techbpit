import React from "react";
import { Link } from "react-router-dom";

function GroupCard(props) {
  const itemData = props.itemData;
  return (
    <div className="bg-white rounded-lg shadow-md w-1/4 px-2 m-4">
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 my-3 rounded-full shadow-lg"
          src={itemData.image}
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {itemData.groupName}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 px-5 text-justify line-clamp-4 ">
          {itemData.description}
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <Link to={`${itemData._id}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
