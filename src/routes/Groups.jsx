import React from "react";
import GroupCard from "../components/GroupCard";
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
];
function Groups() {
  return (
    <div className="px-2 flex justify-center w-3/4 mx-auto">
      <div className="flex flex-wrap -mb-4 -mx-2">
        {DATA.map((item) => (
          <GroupCard itemData={item} />
        ))}
      </div>
    </div>
  );
}

export default Groups;
