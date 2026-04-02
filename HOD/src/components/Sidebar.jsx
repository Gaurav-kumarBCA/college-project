import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-[200px] bg-gradient-to-b shadow-xl/30 from-[#2D9CDB] to-[#1565C0] ">
      <div className="flex flex-col w-full justify-center items-center py-4 gap-8">
        {/* Logo */}
        <div className="h-25 w-25">
          <img src="/collegeLogo.png" alt="SSCHE" />
        </div>

        {/* Menu */}
        <div className="flex flex-col w-full text-white font-semibold gap-2 px-2">
          <Link
            to="/"
            className="flex items-center gap-2 hover:bg-gray-300 hover:text-black rounded-lg h-10 px-3"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/users"
            className="flex items-center gap-2 hover:bg-gray-300 hover:text-black rounded-lg h-10 px-3"
          >
            <Users size={18} />
            Users
          </Link>

          <Link
            to="/course"
            className="flex items-center gap-2 hover:bg-gray-300 hover:text-black rounded-lg h-10 px-3"
          >
            <BookOpen size={18} />
            Courses
          </Link>

          <Link
            to="/admissions"
            className="flex items-center gap-2 hover:bg-gray-300 hover:text-black rounded-lg h-10 px-3"
          >
            <GraduationCap size={18} />
            Admissions
          </Link>

          <Link
            to="/counselling"
            className="flex items-center gap-2 hover:bg-gray-300 hover:text-black rounded-lg h-10 px-3"
          >
            <MessageCircle size={18} />
            Counselling
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React from 'react'
// import Layout from './Layout';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="h-[calc(100vh-60px)]  w-[200px] bg-gradient-to-b shadow-xl/30 from-[#2D9CDB] to-[#1565C0]  ">
//       <div className="flex flex-col w-full justify-center items-center py-4 gap-8">
//         <div className="h-25 w-25">
//           <img className="" src="/collegeLogo.png" alt="SSCHE" />
//         </div>
//         <div className="flex flex-col   w-full text-center text-white  font-semibold ">
//           <Link to="/" className=" hover:bg-gray-300 hover:rounded-lg h-10  ">Home</Link>
//           <Link to="/users"  className=" hover:bg-gray-300 hover:rounded-lg h-10 ">Users </Link>
//           <Link to='/course' className=" hover:bg-gray-300 hover:rounded-lg h-10">Courses</Link>
//           <Link to="/admissions"  className=" hover:bg-gray-300 hover:rounded-lg h-10 ">Admissions</Link>
//           <Link to="/counselling"  className=" hover:bg-gray-300 hover:rounded-lg h-10 ">Counselling</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;