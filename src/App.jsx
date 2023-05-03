import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import ProtectRoutes from "./hooks/ProtectRoutes.js";
import Posts from "./routes/Posts";
import Groups from "./routes/Groups";
import Users from "./routes/Users";
import GroupDetail from "./routes/GroupDetail";
import UserDetails from "./routes/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="/" element={<ProtectRoutes />}>
        <Route path="posts" element={<Posts />} />
        <Route path="groups" element={<Groups />} />
        <Route path="users" element={<Users />} />
        <Route path="groups/:groupdId" element={<GroupDetail />} />
        <Route path="users/:userId" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
