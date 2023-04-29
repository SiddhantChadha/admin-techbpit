import { act } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export default function PaginationBar(props) {
  const activePage = props.activePage;
  const setActivePage = props.setActivePage;
  const maxPage = props.maxPage;
  const itemsPerPage = props.itemsPerPage;
  const totalResults = props.totalResults;
  const pageResults = props.pageResults;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 w-full ">
      <div className="flex flex-1 justify-between sm:hidden">
        <span
          onClick={() =>
            activePage > 0
              ? setActivePage(activePage - 1)
              : console.log("jyada charbi chgada h ")
          }
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </span>
        <span
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() =>
            activePage < maxPage - 1
              ? setActivePage(activePage + 1)
              : console.log("jyada charbi chgada h ")
          }
        >
          Next
        </span>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {totalResults > 0 ? activePage * itemsPerPage + 1 : 0}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {activePage * itemsPerPage + pageResults}
            </span>{" "}
            of <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <span
              onClick={() =>
                activePage > 0
                  ? setActivePage(activePage - 1)
                  : console.log("jyada charbi chgada h ")
              }
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            {setupPages(activePage, setActivePage, maxPage)}
            <span
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() =>
                activePage < maxPage - 1
                  ? setActivePage(activePage + 1)
                  : console.log("jyada charbi chgada h ")
              }
            >
              <span className="sr-only">Next</span>
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}

function setupPages(activePage, setActivePage, maxPage) {
  let startPage;
  if (activePage % 7 === 0) {
    startPage = activePage;
  } else {
    startPage = activePage - (activePage % 7);
  }
  var items = [];
  for (let index = startPage; index < startPage + 7; index++) {
    if (index === activePage) {
      items.push(
        <span
          aria-current="page"
          className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {index + 1}
        </span>
      );
    } else if (index > maxPage - 1) {
      items.push(
        <span
          aria-current="page"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
          onClick={() => setActivePage(index)}
        >
          {index + 1}
        </span>
      );
    } else {
      items.push(
        <span
          aria-current="page"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          onClick={() => setActivePage(index)}
        >
          {index + 1}
        </span>
      );
    }
  }
  return items;
}
