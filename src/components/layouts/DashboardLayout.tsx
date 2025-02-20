

import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import BreadCrumb from '../BreadCrumb';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50 pt-2 px-2 md:px-5">
          <BreadCrumb />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;