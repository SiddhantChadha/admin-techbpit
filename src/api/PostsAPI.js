import { async } from "q";
import { BASE_URL } from "../config";

export const getAllPosts = async (token) => {
  const result = await fetch(BASE_URL + "/post/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();
  return data;
};

export const getGroupPosts = async (token, groupId) => {
  const result = await fetch(BASE_URL + "/post/all/" + groupId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();
  return data;
};
