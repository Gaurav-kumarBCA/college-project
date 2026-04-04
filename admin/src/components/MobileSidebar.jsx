import React from "react";
import {
  HiOutlineBookOpen,
  HiOutlineOfficeBuilding,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MobileSidebar = ({ open, SetOpen }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 transition-all duration-300 text-sm sm:text-base
    ${
      isActive
        ? "bg-white text-blue-700 font-semibold rounded-lg shadow-md"
        : "text-white hover:bg-blue-500 rounded-lg"
    }`;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => SetOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full 
        w-[75%] max-w-[280px] sm:max-w-[320px] 
        bg-gradient-to-b from-[#2D9CDB] to-[#1565C0] 
        z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Container */}
        <div className="flex flex-col h-full">

          {/* Logo */}
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/collegeLogo.png"
                alt="SSCHE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="h-[1px] bg-white/30 mx-4 mb-3"></div>

          {/* Links (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-3 space-y-1">
            
            <NavLink to="/" end className={linkClass} onClick={() => SetOpen(false)}>
              <IoHomeSharp className="text-lg sm:text-xl" />
              Dashboard
            </NavLink>

            <NavLink to="/courses" className={linkClass} onClick={() => SetOpen(false)}>
              <HiOutlineBookOpen className="text-lg sm:text-xl" />
              Courses
            </NavLink>

            {/* <NavLink to="/departments" className={linkClass} onClick={() => SetOpen(false)}>
              <HiOutlineOfficeBuilding className="text-lg sm:text-xl" />
              Departments
            </NavLink> */}

            <NavLink to="/hods" className={linkClass} onClick={() => SetOpen(false)}>
              <HiOutlineUserGroup className="text-lg sm:text-xl" />
              HOD
            </NavLink>

            <NavLink to="/users" className={linkClass} onClick={() => SetOpen(false)}>
              <HiOutlineUser className="text-lg sm:text-xl" />
              Users
            </NavLink>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/30">
            <h1 className="text-white text-sm sm:text-base font-semibold text-center">
              HI, ADMIN
            </h1>
          </div>

        </div>
      </div>
    </>
  );
};

export default MobileSidebar;