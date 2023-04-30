import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import ResourcePost from "../components/ResourcePost";
import EventPost from "../components/EventPost";
import CommunityPost from "../components/CommunityPost";
import DetailModal from "../components/DetailModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = {
  _id: "63add2285086f6fca8576f0c",
  groupName: "NodeJs",
  image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
  description:
    "Nodejs Community is a gathering space for the Node.js community; a place for Node news, resources, tutorials, tips and friendship.",
  moderators: [
    {
      _id: "63add416bc3a132d96ce6cb2",
      username: "Siddhant",
      image:
        "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
    },
  ],
  usersJoined: [
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
  ],
  canEdit: false,
  isJoined: true,
};

const postData = [
  {
    _id: "63c3fb6f6b6759362cd85e68",
    author: {
      _id: "63add416bc3a132d96ce6cb2",
      username: "Siddhant",
      image:
        "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
    },
    timestamp: "1673788271338",
    postType: "resourcePost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    topic: "web dev",
    description: "this djshakrhsvs",
    resourceTime: "100 hours",
    link: "www.trchbpit.com",
    canEdit: false,
  },
  {
    _id: "63c3d964fa117ab324758d97",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779554627",
    postType: "communityPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    description: "Bhai validation chal rhi h fir dikkt na ho rhne de mt chhed",
    canEdit: false,
  },
  {
    _id: "63c3d821fa117ab324758d7f",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779231926",
    postType: "eventPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    eventDate: "2001-01-15T00:00:00.000Z",
    eventTime: "04:09 PM",
    mode: "online",
    topic: "Test topic",
    description: "qwerty keypad qwerty keypad",
    link: "meeting.com",
    canEdit: false,
  },
  {
    _id: "63c3fb6f6b6759362cd85e68",
    author: {
      _id: "63add416bc3a132d96ce6cb2",
      username: "Siddhant",
      image:
        "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
    },
    timestamp: "1673788271338",
    postType: "resourcePost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    topic: "web dev",
    description: "this djshakrhsvs",
    resourceTime: "100 hours",
    link: "www.trchbpit.com",
    canEdit: false,
  },
  {
    _id: "63c3d964fa117ab324758d97",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779554627",
    postType: "communityPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    description: "Bhai validation chal rhi h fir dikkt na ho rhne de mt chhed",
    canEdit: false,
  },
  {
    _id: "63c3d821fa117ab324758d7f",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779231926",
    postType: "eventPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    eventDate: "2001-01-15T00:00:00.000Z",
    eventTime: "04:09 PM",
    mode: "online",
    topic: "Test topic",
    description: "qwerty keypad qwerty keypad",
    link: "meeting.com",
    canEdit: false,
  },
  {
    _id: "63c3fb6f6b6759362cd85e68",
    author: {
      _id: "63add416bc3a132d96ce6cb2",
      username: "Siddhant",
      image:
        "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
    },
    timestamp: "1673788271338",
    postType: "resourcePost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    topic: "web dev",
    description: "this djshakrhsvs",
    resourceTime: "100 hours",
    link: "www.trchbpit.com",
    canEdit: false,
  },
  {
    _id: "63c3d964fa117ab324758d97",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779554627",
    postType: "communityPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    description: "Bhai validation chal rhi h fir dikkt na ho rhne de mt chhed",
    canEdit: false,
  },
  {
    _id: "63c3d821fa117ab324758d7f",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779231926",
    postType: "eventPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    eventDate: "2001-01-15T00:00:00.000Z",
    eventTime: "04:09 PM",
    mode: "online",
    topic: "Test topic",
    description: "qwerty keypad qwerty keypad",
    link: "meeting.com",
    canEdit: false,
  },
  {
    _id: "63c3fb6f6b6759362cd85e68",
    author: {
      _id: "63add416bc3a132d96ce6cb2",
      username: "Siddhant",
      image:
        "https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
    },
    timestamp: "1673788271338",
    postType: "resourcePost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    topic: "web dev",
    description: "this djshakrhsvs",
    resourceTime: "100 hours",
    link: "www.trchbpit.com",
    canEdit: false,
  },
  {
    _id: "63c3d964fa117ab324758d97",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779554627",
    postType: "communityPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    description: "Bhai validation chal rhi h fir dikkt na ho rhne de mt chhed",
    canEdit: false,
  },
  {
    _id: "63c3d821fa117ab324758d7f",
    author: {
      _id: "63add1dc5086f6fca8576f01",
      username: "Tushar Jain",
      image:
        "http://res.cloudinary.com/dmigta0dz/image/upload/v1673687173/ts5pi0lvpocxs5wykesr.jpg",
    },
    timestamp: "1673779231926",
    postType: "eventPost",
    groupId: {
      _id: "63add2285086f6fca8576f0c",
      groupName: "NodeJs",
      image: "https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png",
    },
    eventDate: "2001-01-15T00:00:00.000Z",
    eventTime: "04:09 PM",
    mode: "online",
    topic: "Test topic",
    description: "qwerty keypad qwerty keypad",
    link: "meeting.com",
    canEdit: false,
  },
];

function GroupDetail() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col items-center overflow-y-auto">
      <DetailModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-2/3">
        <div className="flex items-center justify-center w-full">
          <img
            src={data.image}
            className="rounded-full w-16 h-16 object-contain border border-black"
          />

          <div className="flex flex-col m-10 w-1/2">
            <span className="text-3xl font-semibold">{data.groupName}</span>
            <div className="flex flex-row items-center my-4">
              <div className="flex" onClick={openModal}>
                <div className="mr-1 font-semibold">
                  {data.moderators.length}
                </div>
                <div>Mentors</div>
              </div>
              <div className="flex" onClick={openModal}>
                <div className="ml-4 mr-1 font-semibold">
                  {data.usersJoined.length}
                </div>
                <div>Participants</div>
              </div>
            </div>
            <p className="text-justify line-clamp-5 mt-2">{data.description}</p>
          </div>
        </div>

        <div className="w-full">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Posts
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Events
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Resources
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex flex-col items-center">
                  {postData
                    .filter((obj) => obj.postType === "communityPost")
                    .map((obj) => (
                      <CommunityPost itemData={obj} />
                    ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex flex-col items-center">
                  {postData
                    .filter((obj) => obj.postType === "eventPost")
                    .map((obj) => (
                      <EventPost itemData={obj} />
                    ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex flex-col items-center">
                  {postData
                    .filter((obj) => obj.postType === "resourcePost")
                    .map((obj) => (
                      <ResourcePost itemData={obj} />
                    ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default GroupDetail;
