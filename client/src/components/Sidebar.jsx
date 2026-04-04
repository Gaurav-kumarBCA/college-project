import React, { useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import {
  BookOpen,
  CircleUserRound,
  Home,
  LogOutIcon,
  MessageSquareText,
  TextAlignJustify,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const { user, logout } = useAuth();

  const capital = user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1);
  // console.log(capital);

  const sidebarItems = [
    { icon: <Home className="w-5 h-5 mx-2" />, name: "Home", url: "/" },
    {
      icon: <BookOpen className="w-5 h-5 mx-2" />,
      name: "Course",
      url: "/course",
    },
    {
      icon: <MessageSquareText className="w-5 h-5 mx-2" />,
      name: "About",
      url: "/about",
    },
    {
      icon: <MdOutlinePhone className="w-5 h-5 mx-2" />,
      name: "Contact",
      url: "/contact",
    },
  ];

  const bottonIcon = [
    {
      icon: <CircleUserRound className="w-5 h-5 mx-2 " />,
      name: "Account",
      url: user ? "/profile" : "/signup",
    },
  ];

  return (
    <div
      className={` hidden relative top-0 z-56 sm:block bg-[#007AFF] h-screen transition-all duration-300 ease-in-out ${openSidebar ? "w-40" : "w-10"} `}
    >
      <span className=" w-fit flex justify-center items-center  gap-3 p-2 text-white">
        <TextAlignJustify
          onClick={() => setOpenSidebar(!openSidebar)}
          className="  font-extrabold cursor-pointer"
        />
        <h2
          className={`font-bold italic text-2xl text-wrap W-[20] transition-all duration-400  ${openSidebar ? "opacity-100 ml-2" : "opacity-0 w-0 overflow-hidden"}`}
        >
          SSCHE
        </h2>
      </span>

      {/* icon + name  */}
      <div className="flex flex-col py-5 text-red-500 gap-2 ">
        {sidebarItems.map((items, i) => (
          <span key={i} className="relative group">
            <Link
              to={items.url}
              // to={"/profile"}
              onClick={() => setOpenSidebar(false)}
              className="flex items-center text-white my-2 transition-all hover:text-gray-300 "
            >
              <span className="w-10 flex justify-center">{items.icon}</span>

              <span
                className={`text-white transition-all duration-300 ${openSidebar
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-3 pointer-events-none"
                  }`}
              >
                {items.name}
              </span>
            </Link>

            {/* hover effect content show */}
            {!openSidebar && (
              <span
                className="absolute left-full ml-2 top-1/2 -translate-y-1/2
      bg-[#007AFF] text-white px-3 py-1 rounded-md text-sm
      opacity-0 group-hover:opacity-100 transition duration-300
      whitespace-nowrap z-50 pointer-events-none"
              >
                {items.name}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* lower body of sidebar  */}

      <div className="flex flex-col py-5 gap-2 absolute -bottom-4 ">
        {bottonIcon.map((items, i) => (
          <span key={i} className="relative flex justify-center items-center group ">
            <Link
              to={items.url}
              onClick={() => setOpenSidebar(false)}
              className="flex items-center  text-white my-2 transition-all hover:text-gray-300  "
            >
              {items.icon}

              <span
                className={`px-3 flex justify-center gap-3 text-white transition-all duration-300 ease-in-out transform hover:text-gray-300 ${openSidebar
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-3 pointer-events-none"
                  }`}
              >
                {/* {user ? <p>{capital}</p> : <p> {items?.name}</p>} */}
                <p>
                  {user ? capital : items?.name}
                </p>
              </span>

            </Link>
            {user ? <div>
              <button
              onClick={() => logout()}
              className={`  my-1 text-white transition-all duration-300 hover:text-red-500 ${openSidebar
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3 pointer-events-none"
                }`}
            >
              <LogOutIcon width={20} height={20} />
            </button>
            </div> : ""}
            <span
              className={`absolute left-12  mt-1.5 bg-[#007AFF] text-[#fff] px-4 rounded-lg  opacity-0 group-hover:opacity-100
              transition duration-300 ${openSidebar ? "hidden" : " block z-50"} pointer-events-none
              `}
            >
              {/* {user ? <p>{capital}</p> : <p> {items?.name}</p>} */}
              <p>
                {user ? capital : items?.name}
              </p>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
