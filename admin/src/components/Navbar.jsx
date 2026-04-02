import { useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import MobileSidebar from "./MobileSidebar";
import ProfileSidebar from "./ProfileSidebar";
import { authStore } from "../stores/auth.store";
import { useContext, useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useContext(authStore);
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/courses": "Courses",
    "/departments": "Departments",
    "/hods": "HOD",
    "/users": "Users",
  };

  const getAvatarColor = (name) => {
    if (!name) return "bg-gray-400";
    const firstLetter = name.charAt(0).toUpperCase();
    const colors = {
      A: "bg-red-500",
      B: "bg-blue-500",
      C: "bg-green-500",
      D: "bg-yellow-500",
      E: "bg-pink-500",
      F: "bg-purple-500",
      G: "bg-indigo-500",
      H: "bg-teal-500",
    };
    return colors[firstLetter] || "bg-orange-500";
  };

  return (
    <header className="w-full bg-gradient-to-b from-[#2D9CDB] to-[#1565C0] shadow-md">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <FiMenu className="text-2xl" />
        </button>

        <h1 className="text-white font-bold italic text-lg sm:text-xl md:text-2xl lg:text-3xl truncate">
          {titles[location.pathname] || "Dashboard"}
        </h1>

        <div
          onClick={() => setProfileOpen(true)}
          className={`h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full text-white font-bold cursor-pointer ${getAvatarColor(
            user?.name
          )}`}
        >
          {user?.name ? (
            user.name.charAt(0).toUpperCase()
          ) : (
            <FaUser className="text-sm sm:text-base" />
          )}
        </div>
      </div>

      {open && <MobileSidebar open={open} setOpen={setOpen} />}
      <ProfileSidebar
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />
    </header>
  );
};

export default Navbar;