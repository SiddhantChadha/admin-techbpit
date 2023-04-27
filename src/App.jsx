import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen max-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-50">
      <Sidebar />
      <div id="detail" className="max-h-screen overflow-hidden w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
