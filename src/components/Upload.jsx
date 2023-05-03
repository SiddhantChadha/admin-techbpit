import React, { useEffect, useState } from "react";

function Upload() {
  const [uploadFile, setUploadFile] = useState("");
  const [cloudinaryImage, setCloudinaryImage] = useState("");

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
    <div className="App">
      <section className="left-side">
        <div>
          <input
            type="file"
            accept="image/x-png,image/jpeg"
            onChange={async (event) => {
              await handleUpload(event.target.files[0]);
            }}
          />
        </div>
      </section>
      <section className="right-side">
        {cloudinaryImage && (
          <img
            classname="w-24 h-24 rounded-full object-contain"
            src={cloudinaryImage}
          />
        )}
      </section>
      <div className="flex flex-col">
        <input
          id="email"
          type="text"
          name="email"
          class="m-4 text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 py-2 focus:outline-none focus:border-blue-400 w-1/2"
          placeholder="Name"
        />
        <input
          id="email"
          type="text"
          name="email"
          class="m-4 text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 py-2 focus:outline-none focus:border-blue-400 w-1/2"
          placeholder="Description"
        />
      </div>
    </div>
  );
}
export default Upload;
