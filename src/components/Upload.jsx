import React, { useEffect, useState } from "react";

function Upload(props) {
  const cloudinaryImage = props.cloudinaryImage;
  const setCloudinaryImage = props.setCloudinaryImage;

  const handleUpload = async (uploadFile) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "admin-techbpit");

    const resp = await fetch(
      "https://api.cloudinary.com/v1_1/dmigta0dz/image/upload",
      { method: "POST", body: formData }
    );
    const data = await resp.json();
    setCloudinaryImage(data.secure_url);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <label for="img_input">
          <div className=" w-24 h-24 relative rounded-full">
            <img
              className=" my-3 aspect-square object-contain rounded-full relative border-2"
              src={cloudinaryImage}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute top-0 right-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        </label>
        <input
          id="img_input"
          type="file"
          accept="image/x-png,image/jpeg"
          className="hidden"
          onChange={async (event) => {
            await handleUpload(event.target.files[0]);
          }}
        />
      </div>
      <input
        id="email"
        type="text"
        name="email"
        class="m-4 text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-400 py-2 focus:outline-none focus:border-blue-400 w-8/12"
        placeholder="Group name"
      />
      <input
        id="email"
        type="text"
        name="email"
        class="m-4 text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-400 py-2 focus:outline-none focus:border-blue-400 w-8/12"
        placeholder="Description"
      />
    </div>
  );
}
export default Upload;
