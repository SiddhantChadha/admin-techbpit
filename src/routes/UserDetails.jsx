import React, { useState, useEffect } from "react";
import JoinedGroupModal from "../components/JoinedGroupModal";
import { useParams } from "react-router";
import { getUserById } from "../api/UserAPI";
import { useCookies } from "react-cookie";
import Loader from "../components/Loader";
import { getYearOfStudy } from "../utils/AppUtils";

function UserDetails() {
  const params = useParams();
  const [cookies, setCookies, removeCookie] = useCookies([
    "token",
    "name",
    "image",
  ]);
  const [data, setData] = useState({});

  let [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await getUserById(cookies.token, params.userId);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col bg-white rounded-lg shadow-lg w-7/12 px-2 my-4 border-2 justify-center max-h-screen m-auto">
      <div className="flex flex-row mx-4 border-b-2 items-center">
        <img
          className="w-40 h-40 mx-16 my-4 rounded-full shadow-lg"
          src={data.image}
        />
        <div className="flex flex-col m-4">
          <div className="flex flex-row items-center">
            <div className="font-semibold text-lg p-2">{data.username}</div>
            <div className="text-xs mx-2  font-semibold p-2 rounded-lg bg-grayEF">
              {getYearOfStudy(data.yearOfStudy)}
            </div>
            <div className=" mx-2  font-semibold p-2 rounded-md bg-grayEF">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div className=" px-2 flex flex-row items-center my-4">
            <div
              className=" pr-2 flex flex-row items-center my-4"
              onClick={() => setIsOpen(true)}
            >
              <div className="mr-1 font-semibold">
                {data.groupsJoined ? data.groupsJoined.length : 0}
              </div>
              <div className="">following</div>
            </div>
            <div className=" px-2 flex flex-row items-center my-4">
              <div className="ml-4 mr-1 font-semibold">0</div>
              <div className="">projects</div>
            </div>
          </div>
          <div className="px-2">{data.email}</div>
          <div className="px-2">
            {data.city}, {data.state}
          </div>
          <div className="px-2">
            <div className="font-bold">About</div>
            <div> {data.about}</div>
          </div>
        </div>
      </div>

      {data.skills ? (
        <div className="mx-4 border-b-2">
          <div className="m-2 font-bold">Skills</div>
          <div className="flex flex-row flex-wrap mb-4">
            {data.skills.map((skill) => (
              <div className="bg-gray-400 p-2 m-2 rounded-lg text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      {data.socialLinks ? (
        <div className="mx-4 mb-4">
          <div className="m-2 font-bold">Social/Portfolio</div>
          <div className="flex flex-row flex-wrap ">
            {data.socialLinks.map(
              (socialLink) =>
                socialLink.platformLink && (
                  <div className="flex flex-row items-center rounded-lg bg-grayEF m-2 p-2">
                    <img
                      className="w-4 h-4 mr-2 shadow-lg"
                      src={socialLink.platformImg}
                    />
                    <div className=" text-blue-500">
                      {socialLink.platformLink}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      <JoinedGroupModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={data.groupsJoined}
      />
    </div>
  );
}

export default UserDetails;
