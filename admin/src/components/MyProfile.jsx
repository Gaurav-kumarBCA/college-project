import React, { useContext } from "react";
import { authStore } from "../stores/auth.store";

const MyProfile = ({ open, setOpen }) => {
  const { user } = useContext(authStore);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center px-3">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-md sm:max-w-lg 
      max-h-[90vh] overflow-y-auto 
      rounded-2xl shadow-xl p-4 sm:p-6 relative">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-lg sm:text-xl font-bold text-gray-600 hover:text-black"
        >
          ✖
        </button>

        {/* Title */}
        <h1 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">
          My Profile
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-5">
          
          {/* Avatar */}
          <div className="h-16 w-16 sm:h-20 sm:w-20 text-2xl sm:text-4xl 
          shadow-md text-white font-bold rounded-full 
          flex items-center justify-center bg-orange-400">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          {/* Name + Email */}
          <div className="mt-3">
            <h1 className="font-bold text-base sm:text-xl">
              {user?.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 break-all">
              {user?.email}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3">
          <h2 className="font-semibold text-sm sm:text-base text-gray-700">
            Profile Information
          </h2>

          {/* Row */}
          <div className="flex justify-between items-center border-b pb-2 text-xs sm:text-sm">
            <span className="text-gray-500">Name</span>
            <span className="font-semibold break-words text-right">
              {user?.name}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2 text-xs sm:text-sm">
            <span className="text-gray-500">Email</span>
            <span className="font-semibold break-all text-right">
              {user?.email}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-500">Role</span>
            <span className="font-semibold">
              {user?.role}
            </span>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <button
            onClick={() => setOpen(false)}
            className="w-full py-2 sm:py-3 bg-gray-200 hover:bg-gray-300 
            rounded-xl font-semibold text-sm sm:text-base transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;