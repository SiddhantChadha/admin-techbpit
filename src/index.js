import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import Groups from "./routes/Groups";
import Posts from "./routes/Posts";
import Users from "./routes/Users";
import Login from "./routes/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "groups",
//         element: <Groups />,
//       },
//       {
//         path: "posts",
//         element: <Posts />,
//       },
//       {
//         path: "users",
//         element: <Users />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} render={() => {
      console.log("route rendereed")
      redirect("posts")
    }}>
      <Route path="posts" element={<Posts />} />
      <Route path="groups" element={<Groups />} />
      <Route path="users" element={<Users />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
