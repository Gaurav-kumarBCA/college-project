import React, { useContext } from "react";
import { authStore } from "../stores/auth.store";

const MyProfile = ({ open, setOpen }) => {
  const { user } = useContext(authStore);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-lg font-bold text-gray-500 hover:text-red-500 transition"
        >
          ✖
        </button>

        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
          My Profile
        </h1>

        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="h-20 w-20 sm:h-24 sm:w-24 text-3xl sm:text-4xl shadow-md text-white font-bold rounded-full flex items-center justify-center bg-orange-400">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>

          <div className="text-center">
            <h2 className="font-semibold text-lg sm:text-xl">
              {user?.name}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base break-all">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <h3 className="font-semibold text-gray-700 border-b pb-2">
            Profile Information
          </h3>

          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-500">Name</span>
            <span className="font-medium">{user?.name}</span>
          </div>

          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-500">Email</span>
            <span className="font-medium break-all">{user?.email}</span>
          </div>

          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-500">Role</span>
            <span className="font-medium">{user?.role}</span>
          </div>

        </div>

        <button
          onClick={() => setOpen(false)}
          className="w-full mt-6 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold transition"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default MyProfile;