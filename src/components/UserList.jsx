import React from "react";

function UserList({ userList }) {
  return (
    <div
      className="w-full m-auto h-96 grid grid-cols-2 gap-6 overflow-y-auto"
      id="journal-scroll"
    >
      {userList.map((item) => (
        <div className="flex max-h-16 items-center">
          <img class="w-12 h-12 my-3 rounded-full" src={item.image} />
          <span className="mx-2 font-semibold justify-center overflow-clip line-clamp-2 text-start">
            {item.username}
          </span>
        </div>
      ))}
    </div>
  );
}

export default UserList;
