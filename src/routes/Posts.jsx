import React from "react";
import CommunityPost from "../components/CommunityPost";
import EventPost from "../components/EventPost";
import ResourcePost from "../components/ResourcePost";

function Posts() {
  return (
    <div>
      <CommunityPost />
      <EventPost />
      <ResourcePost />
    </div>
  );
}

export default Posts;
