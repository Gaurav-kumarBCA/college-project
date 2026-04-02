import React, { useState } from "react";

const ProfileImage = () => {
const [image,setImage]=useState(null);

const handleImage=async(e)=>{
  const file = e.target.files[0];
  if (!file) {
    alert("No file selected");
    return;
  }

  const cloudName = import.meta.env.VITE_SERVER_URL_CLOUDINARY_NAME;
  const preset = import.meta.env.VITE_SERVER_URL_CLOUDINARY_NAME_PRESETNAME;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset);
  formData.append("folder", `Profile/images`);

  try {
    console.log("open enter");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    console.log(data, "this is data");
    console.log(data.secure_url, "this is url ");
    setImage(data.secure_url);
    console.log(data.url,'udihiu');
  } catch (error) {
    console.log(error);
    return null;
  }
}

  return (
    <div>
      <img
        className="h-full w-full object-cover "
        src="/icon.png"
        alt=""
      />
      {/* <input type="file" onChange={handleImage} /> */}
    </div>
  );
};

export default ProfileImage;


  