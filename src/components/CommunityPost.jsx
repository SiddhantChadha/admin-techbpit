import React from "react";
import { timestampToAgoFormat } from "../utils/DateTimeUtils";

function CommunityPost(props) {
  const itemData = props.itemData;
  const onClick = props.onClick;
  return (
    <div
      className="my-12 bg-white mx-5 p-5 rounded-lg shadow-md w-8/12"
      onClick={() => onClick()}
    >
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full object-cover object-center"
          src={itemData.groupId.image}
        />
        <div className="mx-4">
          <div className="font-semibold text-base">
            {itemData.groupId.groupName}
          </div>
          <div className="font-medium text-xs">
            {" "}
            {timestampToAgoFormat(itemData.timestamp)}
          </div>
        </div>
      </div>
      {itemData.imageUrl ? (
        <img
          className=" mt-4 w-full aspect-square object-cover object-center"
          src={itemData.imageUrl}
        />
      ) : (
        <div />
      )}
      <div className="mt-4">{itemData.description}</div>
    </div>
  );
}

export default CommunityPost;
