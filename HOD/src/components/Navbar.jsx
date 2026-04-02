import React, { useContext, useState } from "react";
import { CiHome } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import {LogOut,LogOutIcon,MessageSquareText,PanelLeftClose,PanelRightClose,TextAlignJustify,User,X,} from "lucide-react";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { useAuth } from "../context/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const {user}=useAuth();
  

  return (
    <nav className="  flex h-15 bg-blue-950">
      <span className=" w-full bg-gradient-to-b from-[#2D9CDB] to-[#1565C0]  shadow-lg flex items-center justify-between gap-3 p-4 text-white">
        <span className="flex  gap-3">
          <PanelRightClose
            onClick={() => setOpenSidebar(!openSidebar)}
            className=" md:hidden flex font-extrabold cursor-pointer"
          />
          {/* college heading */}
          <h2 className=" font-sans font-bold block sm:hidden ">SSCHE</h2>
          <span className="hidden sm:block">
            Shree Satya College of Higher Education
          </span>
        </span>

        <span className=" ">
          <button
            onClick={() => setOpen(true)}
            className="bg-white/10 hover:bg-white/20 rounded-full  px-4 py-1.5   border border-white/20 transition cursor-pointer"
          >
            {user?.hodName? (user.hodName.charAt(0).toUpperCase()): ( <FaUser className="text-sm sm:text-base"/>)  }
          </button>
          <ProfileSidebar open={open} setOpen={setOpen} />
        </span>
      </span>

      <MobileSidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
    </nav>
  );
};

export default Navbar;

export const MobileSidebar = ({ openSidebar, setOpenSidebar }) => {
  const sidebarItems = [
    { icon: <CiHome />, name: "Home", url: "/" },
    { icon: <IoBookOutline />, name: "Courses", url: "/course" },
    {
      icon: <MessageSquareText className="w-4 h-4" />,
      name: "Counsilling",
      url: "/counselling",
    },
    { icon: <MdOutlinePhone />, name: "admission", url: "/admissions" },
    { icon: <User className="w-4 h-4" />, name: "Users", url: "/users" },
  ];

  return (
    <section
      onClick={() => setOpenSidebar(false)}
      className={` fixed  inset-0 z-98 bg-black/40  backdrop-blur-md transition-all duration-400  ${openSidebar ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[50%] sm:w-[45%] md:w-[30%] lg:w-[20%]   p-3 bg-gradient-to-b shadow-xl/30 from-[#2D9CDB] to-[#1565C0]   text-white h-screen z-99 transform  transition-transform duration-400 ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <span className="flex  gap-2 justify-center items-center">
            <img src="/collegeLogo.png" alt="SSCHE" className="w-9 h-9" />
            <h2 className=" font-sans  block sm:hidden ">SSCHE</h2>
            <span className="hidden sm:block">
              Shree Satya College of Higher Education
            </span>
          </span>
          <PanelLeftClose
            onClick={() => setOpenSidebar(false)}
            className="absolute top-3 right-1 cursor-pointer"
          />
        </div>
        <div className="flex flex-col py-5 gap-2 ">
          {sidebarItems.map((items, i) => (
            <span key={i}>
              <Link
                to={items.url}
                onClick={() => setOpenSidebar(false)}
                className="flex items-center gap-4 h-8"
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
