import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import UserDetails from "./routes/UserDetails";
import GroupsJoinedList from "./components/GroupsJoinedList";
import UserList from "./components/UserList";
import PostDetails from "./components/PostDetails";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="min-h-screen max-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-50">
      <Sidebar />
      <div id="detail" className="max-h-screen overflow-hidden w-full">
        <Upload />
      </div>
    </div>
  );
}

export default App;
