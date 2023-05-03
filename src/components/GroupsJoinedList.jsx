import React from "react";

function GroupsJoinedList({data}) {
  return (
    <div className=" flex justify-center w-full m-auto h-96 ">
      <div
        className="w-full grid grid-cols-2 gap-6 overflow-y-auto"
        id="journal-scroll"
      >
        {data.map((item) => (
          <div className="flex flex-row items-center">
            <img class="w-12 h-12 my-3 rounded-full" src={item.image} />
            <div className="mx-2 font-semibold">{item.groupName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupsJoinedList;
