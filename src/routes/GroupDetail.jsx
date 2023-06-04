import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import ResourcePost from "../components/ResourcePost";
import EventPost from "../components/EventPost";
import CommunityPost from "../components/CommunityPost";
import DetailModal from "../components/DetailModal";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { getGroupDetail } from "../api/GroupAPI";
import { useAuth } from "../hooks/auth";
import { useParams } from "react-router";
import { getGroupPosts } from "../api/PostsAPI";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
let title = "";

function GroupDetail() {
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [postData, setPostdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cookies } = useAuth();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await getGroupDetail(cookies.token, params.groupdId);
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    async function fetchPostData() {
      try {
        const data = await getGroupPosts(cookies.token, params.groupdId);
        setPostdata(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPostData();
    fetchData();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div
      className="flex flex-col items-center max-h-screen overflow-auto"
      id="journal-scroll"
    >
      <DetailModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userList={userList}
        title={title}
      />
      <div className="w-2/3">
        <div className="flex items-center justify-center w-full">
          <img
            src={
              data.image
                ? data.image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
            }
            alt="logo"
            className="w-40 h-40 mx-12 my-4 rounded-full shadow-lg"
          />

          <div className="flex flex-col m-10 w-1/2">
            <span className="text-3xl font-semibold">
              {data.groupName ? data.groupName : ""}
            </span>
            <div className="flex flex-row items-center my-4">
              <div
                className="flex"
                onClick={() => {
                  title = "Mentors";
                  setUserList(data.moderators);
                  openModal();
                }}
              >
                <div className="mr-1 font-semibold">
                  {data.moderators ? data.moderators.length : 0}
                </div>
                <div>Mentors</div>
              </div>
              <div
                className="flex"
                onClick={() => {
                  title = "Participants";
                  setUserList(data.usersJoined);
                  openModal();
                }}
              >
                <div className="ml-4 mr-1 font-semibold">
                  {data.usersJoined ? data.usersJoined.length : 0}
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
