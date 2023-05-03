import React, { useState } from "react";
import GroupCard from "../components/GroupCard";
import CreateGroupModal from "../components/CreateGroupModal";
const DATA = [
  {
    _id: "63add2285086f6fca8576f0c",
    groupName: "NodeJs",
    image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    description:
      "Nodejs Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 3,
  },
  {
    _id: "63add2605086f6fca8576f14",
    groupName: "Android",
    image:
      "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png",
    description:
      "Android Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 2,
  },
  {
    _id: "63c5f871aea9c742cbe465f4",
    groupName: "Machine Learning",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png",
    description:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn",
    totalUsers: 2,
  },
  {
    _id: "63c5f8ceaea9c742cbe465f6",
    groupName: "Django",
    image: "https://www.fullstackpython.com/img/logos/django.png",
    description:
      "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.",
    totalUsers: 1,
  },
  {
    _id: "63c5f965aea9c742cbe465f8",
    groupName: "UI development",
    image: "https://cdn.mindmajix.com/courses/ui-developer-training.png",
    description:
      "The UI development aims to create an interface that behaves as users would it expect it to, facilitating a seamless and efficient user experience.",
    totalUsers: 0,
  },
  {
    _id: "63add2285086f6fca8576f0c",
    groupName: "NodeJs",
    image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    description:
      "Nodejs Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 3,
  },
  {
    _id: "63add2605086f6fca8576f14",
    groupName: "Android",
    image:
      "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png",
    description:
      "Android Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 2,
  },
  {
    _id: "63c5f871aea9c742cbe465f4",
    groupName: "Machine Learning",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png",
    description:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn",
    totalUsers: 2,
  },
  {
    _id: "63c5f8ceaea9c742cbe465f6",
    groupName: "Django",
    image: "https://www.fullstackpython.com/img/logos/django.png",
    description:
      "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.",
    totalUsers: 1,
  },
  {
    _id: "63c5f965aea9c742cbe465f8",
    groupName: "UI development",
    image: "https://cdn.mindmajix.com/courses/ui-developer-training.png",
    description:
      "The UI development aims to create an interface that behaves as users would it expect it to, facilitating a seamless and efficient user experience.",
    totalUsers: 0,
  },
  {
    _id: "63add2285086f6fca8576f0c",
    groupName: "NodeJs",
    image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    description:
      "Nodejs Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 3,
  },
  {
    _id: "63add2605086f6fca8576f14",
    groupName: "Android",
    image:
      "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png",
    description:
      "Android Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 2,
  },
  {
    _id: "63c5f871aea9c742cbe465f4",
    groupName: "Machine Learning",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png",
    description:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn",
    totalUsers: 2,
  },
  {
    _id: "63c5f8ceaea9c742cbe465f6",
    groupName: "Django",
    image: "https://www.fullstackpython.com/img/logos/django.png",
    description:
      "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.",
    totalUsers: 1,
  },
  {
    _id: "63c5f965aea9c742cbe465f8",
    groupName: "UI development",
    image: "https://cdn.mindmajix.com/courses/ui-developer-training.png",
    description:
      "The UI development aims to create an interface that behaves as users would it expect it to, facilitating a seamless and efficient user experience.",
    totalUsers: 0,
  },
  {
    _id: "63add2285086f6fca8576f0c",
    groupName: "NodeJs",
    image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    description:
      "Nodejs Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 3,
  },
  {
    _id: "63add2605086f6fca8576f14",
    groupName: "Android",
    image:
      "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png",
    description:
      "Android Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
    totalUsers: 2,
  },
  {
    _id: "63c5f871aea9c742cbe465f4",
    groupName: "Machine Learning",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png",
    description:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn",
    totalUsers: 2,
  },
  {
    _id: "63c5f8ceaea9c742cbe465f6",
    groupName: "Django",
    image: "https://www.fullstackpython.com/img/logos/django.png",
    description:
      "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.",
    totalUsers: 1,
  },
  {
    _id: "63c5f965aea9c742cbe465f8",
    groupName: "UI development",
    image: "https://cdn.mindmajix.com/courses/ui-developer-training.png",
    description:
      "The UI development aims to create an interface that behaves as users would it expect it to, facilitating a seamless and efficient user experience.",
    totalUsers: 0,
  },
];
function Groups() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-2 flex justify-center w-3/4 mx-auto max-h-screen">
      <div
        className="flex flex-wrap -mb-4 -mx-2 overflow-y-auto"
        id="journal-scroll"
      >
        {DATA.map((item) => (
          <GroupCard itemData={item} />
        ))}
      </div>
      <div className="flex fixed bottom-0 right-36 m-6 bg-primaryBlue rounded items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="w-4 h-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        <button
          class=" text-white font-bold py-2 px-2"
          onClick={() => setOpen(true)}
        >
          Create Group
        </button>
      </div>
      <CreateGroupModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Groups;
