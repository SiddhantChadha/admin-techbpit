import React from "react";

function Loader() {
  return (
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
      <div class="flex space-x-2 animate-bounce backdrop-blur-lg">
        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-full"></div>
      </div>
    </div>
  );
}

export default Loader;
