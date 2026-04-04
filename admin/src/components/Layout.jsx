import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen bg-gray-50'>

      {/* Sidebar for md+ screens */}
      <div className='hidden md:block'>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className='flex-1 flex flex-col'>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className='flex-1 p-2 sm:p-4 md:p-6 lg:p-8  w-full   overflow-x-hidden'>
          {children}
        </div>
      </div>

    </div>
  );
};

export default Layout;