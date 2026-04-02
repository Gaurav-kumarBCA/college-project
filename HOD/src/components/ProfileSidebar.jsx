import { Camera, HouseWifi, Mail, Phone, UserRound, X } from "lucide-react";
import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import { useAuth } from "../context/AuthProvider";

const ProfileSidebar = ({ open, setOpen }) => {
    const { user ,logOut } = useAuth();

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 "
        ></div>
      )}

      <div
        className={`fixed top-0 right-0  w-95  h-full z-50 bg-gray-200 text-black transform transition-transform duration-300
           ${open ? "translate-x-0" : "translate-x-full"} `}
      >
        <X
          className=" absolute text-black top-4 left-3 border-2  rounded-full cursor-pointer hover:scale-90"
          onClick={() => setOpen(!open)}
        />

        {/* header */}

        <div className="border-b text-center mt-4  font-semibold">
          <h1 className="mb-4">Profile section</h1>
        </div>

        {/* content */}

        <div className=" flex  flex-col  justify-center  items-center p-5 gap-3">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-2 overflow-hidden ">
              {/* uploads from cloudinary */}
              <ProfileImage />
            </div>
            <span className="absolute  bottom-2 right-2 h-3 w-3    "></span>
          </div>

          <p className="text-sm  text-gray-600">Hi, HOD</p>

          {/* Info Card */}

          <div className="border w-full relative overflow-hidden bg-white shadow-sm rounded-md">
            <div className="flex border-b h-10 items-center px-2 gap-2 ">
              <UserRound className="size-5 text-gray-600 " />
              <span className="font-medium w-16">Name:</span>
              <span>{user?.hodName || "John Deo"} </span>
            </div>

            <div className="flex border-b h-10 px-2 gap-2 items-center ">
              <Mail className="size-5 text-gray-600" />
              <span className="font-medium w-16">Email:</span>
              <h1 className="break-all">{user?.email  || "@gmail.com"}</h1>
            </div>

            <div className="flex border-b  h-10  px-2 items-center gap-2">
              <Phone className="size-5 " />
              <span className="font-medium w-16">Phone:</span>
              <h1 className="">{user?.phone || "phone"}</h1>
            </div>

            <div className="flex  h-10  px-2 items-center gap-2">
              <HouseWifi className="size-5" />
              <span className="font-medium w-25">Department:</span>
              <h1 className="">{user?.department || "department"}</h1>
            </div>
          </div>

          <div className=" absolute bottom-4 w-full  px-4 ">
            <button onClick={logOut} className="bg-black text-white w-full rounded-lg py-2 hover:bg-gray-800 transition cursor-pointer ">
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;

