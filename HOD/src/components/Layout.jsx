import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar → mobile pe hidden */}

        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content → always visible */}

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;