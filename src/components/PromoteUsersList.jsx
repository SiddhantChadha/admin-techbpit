import React from "react";
import PromoteUserCard from "./PromoteUserCard";

function PromoteUsersList() {
  const data = [""];
  return (
    <div className="w-full m-auto h-96 overflow-auto" id="journal-scroll">
      <div className="divide-y divide-gray-100 border-t border-gray-100 flex-grow ">
        {data.map((item) => (
          <PromoteUserCard />
        ))}
      </div>
    </div>
  );
}

export default PromoteUsersList;
