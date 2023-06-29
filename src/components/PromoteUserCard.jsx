import React from "react";

function PromoteUserCard() {
  return (
    <div className="hover:bg-gray-200 shadow-md bg-white items-center w-full grid grid-cols-4 gap-3">
      <div className="flex flex-col px-6 py-4 font-normal text-gray-900 items-center">
        <div className="h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={
              "https://media.licdn.com/dms/image/C5103AQHExyLqyBIe8w/profile-displayphoto-shrink_400_400/0/1567182680271?e=1691625600&v=beta&t=ayZOWCEp2JHGCDiPlIZT7bci1o-T0xzBjKGkYMxkWlg"
            }
          />
        </div>
        <div className="text-sm flex flex-col items-center">
          <div className="font-medium text-gray-700">{"Tushar Jain"}</div>
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        {false ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-400">
            Particpant
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
            Mentor
          </span>
        )}
      </div>
      <div className="px-6 py-4 text-center">{"4th year"}</div>
      <div className="px-6 py-4">
        <div className="flex justify-center gap-2 flex-wrap">
          {true ? (
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
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
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
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default PromoteUserCard;
