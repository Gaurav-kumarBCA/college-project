import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MessageSquareText, TextAlignJustify, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user, logout } = useAuth();

  const capital = user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1);
  // console.log(capital);

  // console.log(user);

  return (
    <nav className="h-fit sm:hidden flex justify-between items-center bg-[#007AFF] text-white">
      {/* Left Section */}
      <span className="flex items-center gap-3 p-4">
        <TextAlignJustify
          onClick={() => setOpenSidebar(!openSidebar)}
          className="font-extrabold cursor-pointer"
        />
        <Link to={"/"} className="font-bold italic">SSCHE</Link>
      </span>

      <MobileSidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Right Section */}
      <div className="p-4">
        {user ? (
          <div className="flex items-center gap-3">
            <span className="font-semibold">Hi, {capital}</span>
            <button
              onClick={logout}
              className="bg-white text-[#007AFF] px-3 py-1 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/signup" className="font-bold">
            Signup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

export const MobileSidebar = ({ openSidebar, setOpenSidebar }) => {
  const sidebarItems = [
    { icon: <CiHome />, name: "Home", url: "/" },
    { icon: <IoBookOutline />, name: "Course", url: "/course" },
    {
      icon: <MessageSquareText className="w-4 h-4" />,
      name: "About",
      url: "/about",
    },
    { icon: <MdOutlinePhone />, name: "Contact", url: "/contact" },
  ];

 

  return (
    <section
      onClick={() => setOpenSidebar(false)}
      className={`fixed  inset-0 z-98 bg-black/40 backdrop-blur-md transition-all duration-400 ${openSidebar ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[55%] p-3 bg-gray-100 h-screen z-99 text-black transition-transform duration-400 ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <span className="flex  gap-2 ">
            <img src="/collegeLogo.png" alt="SSCHE" className="w-9 h-9" />
            <h1 className="text-[12px] font-extrabold pr-5 italic text-start">
              SHREE SATYA COLLEGE OF HIGHER EDUCATION
            </h1>
          </span>
          <X
            onClick={() => setOpenSidebar(false)}
            className="absolute top-3 right-1"
          />
        </div>
        <div className="flex flex-col py-5 gap-2 ">
          {sidebarItems.map((items, i) => (
            <span key={i}>
              <Link
                to={items.url}
                onClick={() => setOpenSidebar(false)}
                className="flex items-center gap-4 transition-all hover:scale-x-105"
              >
                {items.icon}
                {items.name}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
