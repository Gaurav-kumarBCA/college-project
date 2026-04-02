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
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm md:text-base
    ${
      isActive
        ? "bg-white text-blue-700 font-semibold shadow-md"
        : "text-white hover:bg-blue-500"
    }`;

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 lg:w-72 min-h-screen bg-gradient-to-b from-[#2D9CDB] to-[#1565C0] shadow-xl p-4">
      <div className="flex items-center justify-center py-6">
        <div className="h-24 w-24 border-4 border-white rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/collegeLogo.png"
            alt="College Logo"
          />
        </div>
      </div>

      <div className="h-px bg-white/40 my-4"></div>

      <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
        <NavLink to="/" end className={linkClass}>
          <IoHomeSharp className="text-lg" />
          Dashboard
        </NavLink>

        <NavLink to="/courses" className={linkClass}>
          <HiOutlineBookOpen className="text-lg" />
          Courses
        </NavLink>
{/* 
        <NavLink to="/departments" className={linkClass}>
          <HiOutlineOfficeBuilding className="text-lg" />
          Departments
        </NavLink> */}

        <NavLink to="/hods" className={linkClass}>
          <HiOutlineUserGroup className="text-lg" />
          HOD
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          <HiOutlineUser className="text-lg" />
          Users
        </NavLink>
      </nav>

      <div className="h-px bg-white/40 my-4"></div>

      <div className="text-center text-white font-semibold text-sm md:text-base">
        Hi, {user?.name}
      </div>
    </aside>
  );
};

export default Sidebar;
