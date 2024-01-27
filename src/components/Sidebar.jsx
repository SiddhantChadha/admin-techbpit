import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import LogoutModal from "./LogoutModal";
import { useCookies } from "react-cookie";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies([
    "token",
    "name",
    "image",
  ]);
  return (
    <div className=" flex flex-col top-0 left-0 w-64 bg-white min-h-full border-r text-gray-800 justify-between">
      <div>
        <div className="flex flex-col items-center justify-center border-b py-2 ">
          <div className="m-2">
            <img src={logo} />
          </div>
          <div>TechBPIT</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to={`posts`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-50  text-gray-800 border-l-4  border-indigo-500 pr-6"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Posts
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`groups`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-50  text-gray-800 border-l-4 border-indigo-500 pr-6"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Groups
                </span>
              </NavLink>
            </li>
            <li className="border-b">
              <NavLink
                to={`users`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-50  text-gray-800 border-l-4 border-indigo-500 pr-6"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Users
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(true)}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logout
                </span>
                <LogoutModal open={open} setOpen={setOpen} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center relative inset-y-0 left-0 border-t-2 p-3">
        <img
          className="h-10 w-10 rounded-full object-cover object-center "
          src={cookies.image}
        />
        <span className="ml-4 flex flex-wrap justify-center ">
          {cookies.name}
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
