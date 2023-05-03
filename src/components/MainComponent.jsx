import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import PostsSearchBar from "./PostsSearchBar";
import PostDetails from "./PostDetails";
import GroupsJoinedList from "./GroupsJoinedList";

function MainComponent() {
  return (
    <div className="min-h-screen max-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-50">
      <Sidebar />
      <div id="detail" className="max-h-screen overflow-hidden w-full">
        {/* <PostsSearchBar onSearchClicked={onSearchClicked} /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default MainComponent;
