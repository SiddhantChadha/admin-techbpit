import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
      </div>
  );
}

export default App;
