import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Posts from "./routes/Posts";
import Groups from "./routes/Groups";
import Users from "./routes/Users";
import GroupDetail from "./routes/GroupDetail";
import UserDetails from "./routes/UserDetails";
import { useCookies } from "react-cookie";
import MainComponent from "./components/MainComponent";

function App() {
  const [cookies] = useCookies([
    "token",
    "name",
    "image",
  ]);
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route
        path="/"
        element={
          cookies.token ? <MainComponent /> : <Navigate to="/login" exact />
        }
      >
        <Route path="" element={<Posts />} />
        <Route path="posts" element={<Posts />} />
        <Route path="groups" element={<Groups />} />
        <Route path="users" element={<Users />} />
        <Route path="groups/:groupdId" element={<GroupDetail />} />
        <Route path="users/:userId" element={<UserDetails />} />
      </Route>

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
