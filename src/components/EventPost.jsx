import React from "react";
import { isoFormatToDate, isoFormatToMonth } from "../utils/DateTimeUtils";

function EventPost(props) {
  const itemData = props.itemData;
  const onClick = props.onClick;

  return (
    <div
      className="my-12 bg-white mx-5 p-5 rounded-lg shadow-md w-8/12"
      onClick={() => onClick()}
    >
      <div className="flex">
        <img
          className="h-10 w-10 rounded-full object-cover object-center"
          src={itemData.groupId.image}
        />
        <div className="mx-4">
          <div className="font-semibold text-base flex-wrap">
            A <span className="font-bold">new event</span> was posted in the
            <span className="font-bold">
              {" "}
              {itemData.groupId.groupName}
            </span>{" "}
            community
          </div>
        </div>
      </div>
      <img src="https://img.freepik.com/free-vector/build-your-program-appointment-booking_23-2148552954.jpg?w=826&t=st=1681042949~exp=1681043549~hmac=5642bf72996ab22bba1fdf5ce173438e1930ec8bada0eba9fae2ae6d68cae6a0" />
      <div className="flex items-center px-5">
        <div className="flex flex-col p-2 items-center">
          <div className="font-semibold text-primaryBlue">
            {isoFormatToDate(itemData.eventDate)}
          </div>
          <div className="font-semibold">
            {isoFormatToMonth(itemData.eventDate)}
          </div>
        </div>
        <div className="p-3">
          <div className="font-semibold">
            {itemData.mode === "online" ? "Online" : "Offline"} Meeting
          </div>
          <div className="text-xs text-gray-500">
            {itemData.eventTime} Onwards
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPost;
