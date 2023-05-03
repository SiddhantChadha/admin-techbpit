import { BASE_URL } from "../config";

export const getAllUsers = async (token) => {
  const result = await fetch(BASE_URL + "/user/admin/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();
  return data;
};

export const blockUser = async (token, userId) => {
  const result = await fetch(BASE_URL + "/delete/" + userId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();
  return data;
};

export const unblockUser = async (token, userId) => {
  const result = await fetch(BASE_URL + "/unblock/" + userId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();
  return data;
};

export const getUserById = async (token, userId) => {
  const result = await fetch(BASE_URL + "/user/" + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();
  return data;
};
