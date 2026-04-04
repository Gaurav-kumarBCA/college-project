import React, { useContext } from "react";
import {
  HiOutlineBookOpen,
  HiOutlineOfficeBuilding,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { authStore } from "../stores/auth.store";

const Sidebar = () => {
  const { user } = useContext(authStore);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 sm:py-3
    transition-all duration-300 text-sm sm:text-base
    ${
      isActive
        ? "bg-white text-blue-700 font-semibold rounded-lg shadow-md"
        : "text-white hover:bg-blue-500 rounded-lg"
    }`;

  return (
    <div
      className="h-screen md:flex
      w-[60px] sm:w-[70px] md:w-[220px] lg:w-[250px] 
      bg-gradient-to-b from-[#2D9CDB] to-[#1565C0] 
      shadow-xl flex flex-col"
    >
      {/* Container */}
      <div className="flex flex-col h-full p-2 sm:p-3">

        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center justify-center py-4 sm:py-6">
            <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 border-4 border-white rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/collegeLogo.png"
                alt="SSCHE"
              />
            </div>
          </div>

          <div className="h-[1px] bg-white/30 my-2"></div>

          {/* Links (Scrollable if needed) */}
          <div className="flex flex-col gap-1 overflow-y-auto">

            <NavLink to="/" end className={linkClass}>
              <IoHomeSharp className="text-lg sm:text-xl" />
              <span className="hidden md:inline">Dashboard</span>
            </NavLink>

            <NavLink to="/courses" className={linkClass}>
              <HiOutlineBookOpen className="text-lg sm:text-xl" />
              <span className="hidden md:inline">Courses</span>
            </NavLink>
{/* 
            <NavLink to="/departments" className={linkClass}>
              <HiOutlineOfficeBuilding className="text-lg sm:text-xl" />
              <span className="hidden md:inline">Departments</span>
            </NavLink> */}

            <NavLink to="/hods" className={linkClass}>
              <HiOutlineUserGroup className="text-lg sm:text-xl" />
              <span className="hidden md:inline">HOD</span>
            </NavLink>

            <NavLink to="/users" className={linkClass}>
              <HiOutlineUser className="text-lg sm:text-xl" />
              <span className="hidden md:inline">Users</span>
            </NavLink>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          <div className="h-[1px] bg-white/30 my-3"></div>

          <h1 className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-center truncate px-1">
            HI, {user?.name || "User"}
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;