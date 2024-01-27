import React, { memo } from "react";
import { setupPages } from "../utils/AppUtils";

export default memo(function PaginationBar({
  activePage,
  setActivePage,
  maxPage,
  itemsPerPage,
  totalResults,
  pageResults,
}) {
  console.log("Bar reloaded");
  return (
    <div className="absolute bottom-0 flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-6 w-full h-3/12">
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
              : console.log()
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
});
