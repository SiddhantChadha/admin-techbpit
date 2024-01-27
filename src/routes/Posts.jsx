import React, { useState, useEffect, useCallback } from "react";
import CommunityPost from "../components/CommunityPost";
import EventPost from "../components/EventPost";
import ResourcePost from "../components/ResourcePost";
import PostsSearchBar from "../components/PostsSearchBar";
import PaginationBar from "../components/PaginationBar";
import Filters from "../components/Filters";
import PostDetailModal from "../components/PostDetailModal";
import { getAllPosts } from "../api/PostsAPI";
import Loader from "../components/Loader";
import { useCookies } from "react-cookie";
import { postFilters, timeFilters } from "../utils/AppUtils";
import { filterData } from "../utils/FilterHelper";
import {
  getItemsInPage,
  getMaximumNumberOfPages,
} from "../utils/PaginationHelper";

function Posts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const itemsPerPage = 5;
  const paginatedList = getItemsInPage(filteredData, itemsPerPage, activePage);
  const [appliedPostFilter, setAppliedPostFilter] = useState(postFilters);
  const [appliedTimeFilter, setAppliedTimeFilter] = useState(timeFilters);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies([
    "token",
    "name",
    "image",
  ]);
  const [itemIndex, setItemIndex] = useState();
  async function fetchData() {
    try {
      const data = await getAllPosts(cookies.token);
      setData(data);
      setFilteredData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (data.length === 0) {
      setIsLoading(true);
      fetchData();
    }
  }, []);

  const onSearchClicked = useCallback(
    (query) => {
      setActivePage((activePage) => 0);
      setSearchQuery((searchQuery) => query);
      setFilteredData(
        filterData(data, query, appliedPostFilter, appliedTimeFilter)
      );
    },
    [data, appliedPostFilter, appliedTimeFilter]
  );

  const onPostFilterApplied = useCallback(
    (newState) => {
      console.log(newState);
      setActivePage((activePage) => 0);
      setAppliedPostFilter((appliedPostFilter) => newState);
      setFilteredData(
        filterData(data, searchQuery, newState, appliedTimeFilter)
      );
    },
    [data, searchQuery]
  );

  const onTimeFilterApplied = useCallback(
    (newState) => {
      setActivePage((activePage) => 0);
      setAppliedTimeFilter((appliedTimeFilter) => newState);
      setFilteredData(
        filterData(data, searchQuery, appliedPostFilter, newState)
      );
    },
    [data, searchQuery]
  );

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col max-h-screen min-h-screen relative" id="dws">
      <div className="flex flex-row overflow-y-auto">
        <div className="flex flex-col items-center justify-between w-7/12 ml-40">
          <PostsSearchBar onSearchClicked={onSearchClicked} />
          <div
            className="flex flex-col items-center	overflow-y-auto mb-8"
            id="journal-scroll"
          >
            {paginatedList.map((item, idx) =>
              getPostType(item, idx, setOpen, setItemIndex)
            )}
          </div>
        </div>
        <div className="flex flex-col grow mt-6 items-center pr-4">
          <div className="mb-2 font-bold">Filters</div>
          <div className="flex w-8/12 p-2 flex-col items-center bg-white rounded-lg self-center mx-auto">
            <Filters
              appliedFilter={appliedPostFilter}
              onFilterApplied={onPostFilterApplied}
              heading="Post Type"
            />
            <Filters
              appliedFilter={appliedTimeFilter}
              onFilterApplied={onTimeFilterApplied}
              heading="Post Time"
            />
          </div>
        </div>
        <PostDetailModal
          open={open}
          setOpen={setOpen}
          itemData={paginatedList[itemIndex]}
        />
      </div>
      <PaginationBar
        activePage={activePage}
        setActivePage={setActivePage}
        maxPage={getMaximumNumberOfPages(filteredData.length, itemsPerPage)}
        itemsPerPage={itemsPerPage}
        totalResults={filteredData.length}
        pageResults={paginatedList.length}
      />
    </div>
  );
}
function getPostType(item, idx, setOpen, setItemIndex) {
  if (item.postType === "resourcePost")
    return (
      <ResourcePost
        itemData={item}
        onClick={() => {
          setOpen(true);
          setItemIndex(idx);
        }}
      />
    );
  if (item.postType === "communityPost")
    return (
      <CommunityPost
        itemData={item}
        onClick={() => {
          setOpen(true);
          setItemIndex(idx);
        }}
      />
    );
  if (item.postType === "eventPost")
    return (
      <EventPost
        itemData={item}
        onClick={() => {
          setOpen(true);
          setItemIndex(idx);
        }}
      />
    );
}

export default Posts;
