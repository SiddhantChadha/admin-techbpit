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
import PromoteUsersModal from "../components/PromoteUsersModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
let title = "";

function GroupDetail() {
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isPromoteOpen, setIsPromoteOpen] = useState(false);
  const [data, setData] = useState({});
  const [postData, setPostdata] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { cookies } = useAuth();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await getGroupDetail(cookies.token, params.groupdId);
        console.log(data);
        setData(data);
        let list = [];
        list = list.concat(data.moderators.map((item) => {
          item.isModerator = true;
          return item;
        }));

        list = list.concat(data.usersJoined.map((item) => {
          item.isModerator = false;
          return item;
        }));

        setModalData(list);
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
  }, [refresh]);

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
      <PromoteUsersModal
        isOpen={isPromoteOpen}
        setIsOpen={setIsPromoteOpen}
        data={modalData}
        groupId={params.groupdId}
        setRefresh={setRefresh}
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
              <div
                className="flex items-center bg-primaryBlue mx-4 rounded-lg px-2 cursor-pointer"
                onClick={() => {
                  setIsPromoteOpen(true);
                }}
              >
                <div className="text-xs  text-white font-semibold p-2  ">
                  Manage
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
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
