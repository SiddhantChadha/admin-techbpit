import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-100">
      <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
