import React, { useState } from "react";

function PostsSearchBar(props) {
  const [val, setVal] = useState("");
  const onSearchClicked = props.onSearchClicked;
  return (
    <div className="flex items-center mt-4 mb-4 w-6/12 justify-center ">
      <div className="flex space-x-1 w-full">
        <input
          type="text"
          className="block w-full px-4 py-2 text-primaryBlue-700 bg-white border rounded-full focus:border-primaryBlue focus:ring-primaryBlue focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          onChange={(event) => setVal(event.target.value)}
          value={val}
        />
        <button
          className="px-4 text-white bg-primaryBlue rounded-full "
          onClick={() => onSearchClicked(val.toLowerCase())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PostsSearchBar;
