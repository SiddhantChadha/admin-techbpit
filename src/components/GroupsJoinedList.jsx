import React from "react";
const groups = [
  {
    _id: "63c5f871aea9c742cbe465f4",
    groupName: "Machine Learning",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png",
  },
  {
    _id: "63add2285086f6fca8576f0c",
    groupName: "NodeJs",
    image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
  },
  {
    _id: "63add2605086f6fca8576f14",
    groupName: "Android",
    image:
      "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png",
  },
  {
    _id: "63c5f8ceaea9c742cbe465f6",
    groupName: "Django",
    image: "https://www.fullstackpython.com/img/logos/django.png",
  },
];
function GroupsJoinedList() {
  return (
    <div className="px-2 flex justify-center w-3/4 mx-auto max-h-screen">
      <div
        className="grid grid-cols-2 gap-6 overflow-y-auto"
        id="journal-scroll"
      >
        {groups.map((item) => (
          <div className="flex flex-row items-center">
            <img class="w-12 h-12 my-3 rounded-full" src={item.image} />
            <div className="mx-2 font-semibold">{item.groupName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupsJoinedList;
