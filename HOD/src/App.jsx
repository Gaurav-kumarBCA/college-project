import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Course from "./pages/Course";
import { AuthProvider } from "./context/AuthProvider";
import Users from "./pages/Users";
import Admissions from "./pages/Admissions";
import Counsiling from "./pages/Counselling";
import ViewfullInfo from "./pages/viewfullInfo";


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
        
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/counselling" element={<Counsiling/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/viewfullInfo/:id" element={<ViewfullInfo/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

// export const BrowserLocator = () => {
//   const location = useLocation();

//   const noNavbar = ["/login"].includes(location.pathname);

//   return (
//     <>
//       <div className={`${noNavbar ? "hidden" : "block"} `  }>
//         <Navbar />
//       </div>

//       <div className="flex">
//         <div className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             {/* <Route path="/courses" element={<Course/>} />
//             <Route path="/department"  element={<Deparment/>}/>
//             <Route path="/users" element={<Users/>}/> */}
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// };
