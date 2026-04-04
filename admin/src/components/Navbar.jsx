// import { useLocation } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import MobileSidebar from "./MobileSidebar";
// import ProfileSidebar from "./ProfileSidebar";
// import { authStore } from "../stores/auth.store";
// import { useContext, useState } from "react";

// const Navbar = () => {
//   const [open, SetOpen] = useState(false);
//   const { user } = useContext(authStore);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const location = useLocation();

//   const titles = {
//     "/": "Dashboard",
//     "/courses": "Courses",
//     "/departments": "Departments",
//     "/hods": "HOD",
//     "/users": "Users",
//   };

//   const getAvatarColor = (name) => {
//     if (!name) return "bg-gray-400";
//     const firstLetter = name.charAt(0).toUpperCase();
//     const colors = {
//       A: "bg-red-500",
//       B: "bg-blue-500",
//       C: "bg-green-500",
//       D: "bg-yellow-500",
//       E: "bg-pink-500",
//       F: "bg-purple-500",
//       G: "bg-indigo-500",
//       H: "bg-teal-500",
//     };
//     return colors[firstLetter] || "bg-orange-500";
//   };

//   return (
//     <div className="w-full h-14 sm:h-16 md:h-20 bg-gradient-to-b from-[#2D9CDB] to-[#1565C0] shadow-md">
      
//       {/* Main Container */}
//       <div className="w-full h-full flex items-center justify-between px-3 sm:px-5 md:px-8">
        
//         {/* Left: Menu Icon */}
//         <div
//           onClick={() => SetOpen(true)}
//           className="md:hidden cursor-pointer"
//         >
//           <FiMenu className="text-white text-2xl sm:text-3xl" />
//         </div>

//         {/* Center: Title */}
//         <div className="flex-1 flex justify-center md:justify-start">
//           <h1 className="text-white font-bold 
//             text-lg sm:text-xl md:text-2xl lg:text-3xl 
//             italic underline">
//             {titles[location.pathname] || "Dashboard"}
//           </h1>
//         </div>

//         {/* Right: Profile */}
//         <div className="flex items-center justify-end gap-3 sm:gap-5">
//           <div
//             onClick={() => setProfileOpen(true)}
//             className={`h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
//             border-2 text-white font-bold rounded-full 
//             flex items-center justify-center cursor-pointer 
//             ${getAvatarColor(user?.name)}`}
//           >
//             {user?.name ? (
//               user.name.charAt(0).toUpperCase()
//             ) : (
//               <FaUser className="text-white text-xs sm:text-sm md:text-lg" />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Sidebars */}
//       {open && <MobileSidebar open={open} SetOpen={SetOpen} />}
//       <ProfileSidebar
//         profileOpen={profileOpen}
//         setProfileOpen={setProfileOpen}
//       />
//     </div>
//   );
// };

// export default Navbar;

import { useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import MobileSidebar from "./MobileSidebar";
import ProfileSidebar from "./ProfileSidebar";
import { authStore } from "../stores/auth.store";
import { useContext, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(authStore);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/courses": "Courses",
    // "/departments": "Departments",
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
    <>
      <div className="w-full bg-gradient-to-b from-[#2D9CDB] to-[#1565C0] shadow-md">
        
        {/* Container */}
        <div className="max-w-7xl mx-auto 
        h-14 sm:h-16 md:h-20 
        flex items-center justify-between 
        px-3 sm:px-5 md:px-8">

          {/* Left: Menu */}
          <div
            onClick={() => setOpen(true)}
            className="md:hidden cursor-pointer flex items-center"
          >
            <FiMenu className="text-white text-2xl sm:text-3xl" />
          </div>

          {/* Title */}
          <div className="flex-1 flex justify-center md:justify-start px-2">
            <h1 className="text-white font-bold italic 
              text-sm sm:text-lg md:text-2xl lg:text-3xl 
              truncate max-w-[180px] sm:max-w-xs md:max-w-full">
              {titles[location.pathname] || "Dashboard"}
            </h1>
          </div>

          {/* Right: Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            <div
              onClick={() => setProfileOpen(true)}
              className={`h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
              border-2 border-white text-white font-bold rounded-full 
              flex items-center justify-center cursor-pointer 
              ${getAvatarColor(user?.name)}`}
            >
              {user?.name ? (
                user.name.charAt(0).toUpperCase()
              ) : (
                <FaUser className="text-xs sm:text-sm md:text-lg" />
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Sidebars */}
      <MobileSidebar open={open} SetOpen={setOpen} />

      <ProfileSidebar
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />
    </>
  );
};

export default Navbar;