import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
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
                to={`groups`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 focus:outline-none bg-gray-50  text-gray-800 border-l-4 border-indigo-500 pr-6"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Groups
                </span>
              </NavLink>
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
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Posts
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
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Users
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#"
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
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center relative inset-y-0 left-0 border-t-2 p-4">
        <img
          className="h-10 w-10 rounded-full object-cover object-center "
          src="https://media.licdn.com/dms/image/D4D03AQFceRkjbq5tdA/profile-displayphoto-shrink_800_800/0/1672917303490?e=1687996800&v=beta&t=ehB56yxR9Rc2OsHQpu75K1tBWrnKtKp9QRaTQCh_RIg"
        />
        <span className="ml-4 flex flex-wrap justify-center ">
          Siddhant Chaddha
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
