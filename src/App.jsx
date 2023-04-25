import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-50">
      <Sidebar />
      <div id="detail" className="w-full">
        <Outlet />
      </div>
      </div>
  );
}

export default App;
