import React from "react";

function ResourceItem(props) {
  const itemData = props.itemData;
  const onClick = props.onClick;
  return (
    <div
      className="my-12 bg-white mx-4  rounded-xl shadow-md w-8/12"
      onClick={() => onClick()}
    >
      <div className="p-6">
        <div className="flex items-center justify-between ">
          <img
            className="h-12 w-12 rounded-full object-cover object-center"
            src={itemData.groupId.image}
          />
          <div className="mx-4">
            <div className="font-semibold text-base leading-tight">
              <div>
                New <span className="font-bold">resources</span> was added to
                the
                <span className="font-bold">
                  {" "}
                  {itemData.groupId.groupName}
                </span>{" "}
                community
              </div>
              <div>
                <span className="text-xss text-gray-400 leading-none">
                  {itemData.resourceTime}
                </span>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <img
        className="w-full rounded-b-xl object-cover object-center"
        src="https://static.toiimg.com/photo/msid-91006178/91006178.jpg"
      />
    </div>
  );
}

export default ResourceItem;
