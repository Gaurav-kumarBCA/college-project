import React from "react";
import { useAuth } from "../context/AuthProvider";

const ProfileSection = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
      
      {/* Profile Header */}
      <div className="flex items-center gap-6 border-b pb-6">

        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
          {user?.name?.charAt(0)?.toUpperCase()}
        </div>

        {/* Name + Email */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.name || "User"}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
          <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
            Active User
          </span>
        </div>

      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Full Name</p>
          <p className="font-semibold text-gray-800">
            {user?.name || "Not Provided"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Email Address</p>
          <p className="font-semibold text-gray-800">
            {user?.email || "Not Provided"}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">

        <button 
        onClick={() => {logout()}}
        className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg transition">
          Logout
        </button>

        {/* <button className="border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-lg transition">
          Change Password
        </button> */}

      </div>

    </div>
  );
};

export default ProfileSection;