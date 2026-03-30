import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex">
      <div className="fixed z-50">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </div>
      <div className="flex-1 sm:ml-10">{children}</div>
    </div>
  );
};

export default Layout;
