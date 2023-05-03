import React from "react";
import { isoFormatToDate, isoFormatToMonth } from "../utils/DateTimeUtils";

function PostDetails({ itemData }) {
  console.log(itemData);
  return (
    <div className="flex bg-white rounded-lg shadow-lg w-full h-100 px-2 m-auto">
      {itemData.imageUrl ? (
        <img
          className=" my-4 w-1/2 object-contain mx-2 bg-gray1D2226 rounded-lg px-4"
          src={itemData.imageUrl}
        />
      ) : (
        <></>
      )}

      <div
        className="flex flex-col px-2 my-4 overflow-y-scrol grow "
        id="journal-scroll"
      >
        <div className="font-bold text-lg text-center my-1 ">
          {itemData.topic}
        </div>
        {itemData.description ? (
          <div className="text-justify">{itemData.description}</div>
        ) : (
          <></>
        )}
        {itemData.organizer ? (
          <div className="flex flex-row items-center">
            <div className="font-semibold mr-2">Organizer:</div>
            <div>{itemData.organizer}</div>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-row items-center">
          {itemData.eventDate ? (
            <>
              {" "}
              <div className="font-semibold mr-2">Date:</div>
              <div>
                {" "}
                {isoFormatToDate(itemData.eventDate)}{" "}
                {isoFormatToMonth(itemData.eventDate)}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {itemData.eventTime ? (
          <div className="flex flex-row items-center">
            <div className="font-semibold mr-2">Time:</div>
            <div>{itemData.eventTime}</div>
          </div>
        ) : (
          <></>
        )}

        {itemData.venue ? (
          <div className="flex flex-row items-center">
            <div className="font-semibold mr-2">Venue:</div>
            <div>{itemData.venue}</div>
          </div>
        ) : (
          <></>
        )}

        {/* author details */}
        <div className="flex flex-row my-4 items-center">
          <img
            className="w-8 h-8 mr-4 rounded-full shadow-lg"
            src={itemData.author.image}
          />
          <div>
            <div className="text-xss font-bold">{itemData.author.username}</div>
            <div className="text-xss font-semibold text-gray-500">Author</div>
          </div>
        </div>
        {/* group details */}
        <div className="flex flex-row items-center mb-4">
          <img
            className="w-8 h-8 mr-4 rounded-full shadow-lg"
            src={itemData.groupId.image}
          />
          <div>
            <div className="text-xss font-bold">
              {itemData.groupId.groupName}
            </div>
            <div className="text-xss font-semibold text-gray-500">Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
