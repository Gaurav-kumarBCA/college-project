import React, { useState, useContext } from "react";
import { authStore } from "../stores/auth.store";
import MyProfile from "./MyProfile";
import Image from "../dialogs/Image";
// import ImagesDeleted from "../dialogs/ImagesDeleted";

const ProfileSidebar = ({ profileOpen, setProfileOpen }) => {
  const { user, logOut } = useContext(authStore);

  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  // const [deletedImage, setDeletedImage] = useState(false);

  return (
    <>
      {profileOpen && (
        <div
          onClick={() => setProfileOpen(false)}
          className="fixed inset-0 bg-transparent bg-opacity-40 z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full 
        w-[75%] max-w-[280px] sm:max-w-[320px] 
        bg-white shadow-xl z-50 
        transform transition-transform duration-300 ease-in-out
        ${profileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Container */}
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="p-4 sm:p-5 flex justify-between items-center border-b">
            <h2 className="font-bold text-base sm:text-lg">Profile</h2>
            <button
              onClick={() => setProfileOpen(false)}
              className="text-lg font-bold"
            >
              ✖
            </button>
          </div>

          {/* Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">

            {/* User Info */}
            <div className="mb-2">
              <p className="font-semibold text-sm sm:text-base break-words">
                {user?.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 break-all">
                {user?.email}
              </p>
            </div>

            {/* Buttons */}
            <button
              onClick={() => setOpen(true)}
              className="w-full text-left text-sm sm:text-base hover:bg-gray-100 p-2 rounded transition"
            >
              My Profile
            </button>

            <button
              onClick={() => setOpenImage(true)}
              className="w-full text-left text-sm sm:text-base hover:bg-gray-100 p-2 rounded transition"
            >
              Add Image
            </button>

            {/* <button
              onClick={() => setDeletedImage(true)}
              className="w-full text-left text-sm sm:text-base hover:bg-gray-100 p-2 rounded transition"
            >
              Deleted Images
            </button> */}

            <button
              onClick={logOut}
              className="w-full text-left text-sm sm:text-base hover:bg-red-100 p-2 rounded text-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Footer */}
          <div className="p-4 border-t text-center text-xs sm:text-sm text-gray-400">
            Logged in as Admin
          </div>

        </div>
      </div>

      {/* Modals */}
      {open && <MyProfile open={open} setOpen={setOpen} />}

      {openImage && (
        <Image openimage={openImage} SetOpenimage={setOpenImage} />
      )}

      {/* {deletedImage && (
        <ImagesDeleted
          openimage={deletedImage}
          SetOpenimage={setDeletedImage}
        />
      )} */}
    </>
  );
};

export default ProfileSidebar;