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
import GroupDetail from "./routes/GroupDetail";
import UserDetails from "./routes/UserDetails";

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
    <Route
      path="/"
      element={<App />}
      render={() => {
        console.log("route rendereed");
        redirect("posts");
      }}
    >
      <Route path="posts" element={<Posts />} />
      <Route path="groups" element={<Groups />} />
      <Route path="users" element={<Users />} />
      <Route path="groups/:groupdId" element={<GroupDetail />} />
      <Route path="users/:userId" element={<UserDetails />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
