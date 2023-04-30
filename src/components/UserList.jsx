import React from "react";
const users = [
  {
    _id: "63add1dc5086f6fca8576f01",
    username: "Tushar Jain",
    image:
      "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
  },
  {
    _id: "63c63365da36e5e81dc6a8a1",
    username: "Manan Gaur",
    image:
      "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
  },
];
function UserList() {
  return (
    <div className="px-2 flex justify-center w-3/4 mx-auto max-h-screen">
      <div
        className="grid grid-cols-2 gap-6 overflow-y-auto"
        id="journal-scroll"
      >
        {users.map((item) => (
          <div className="flex flex-row items-center">
            <img class="w-12 h-12 my-3 rounded-full" src={item.image} />
            <div className="mx-2 font-semibold">{item.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
