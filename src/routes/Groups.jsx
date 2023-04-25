import React from "react";
import GroupCard from "../components/GroupCard";

function Groups() {
  return (
    <div className="px-2 flex justify-center w-3/4 mx-auto">
      <div className="flex flex-wrap -mb-4 -mx-2">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  );
}

export default Groups;



