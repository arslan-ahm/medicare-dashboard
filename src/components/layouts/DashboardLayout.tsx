import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import BreadCrumb from "../BreadCrumb";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="bg-gray-100">
          <Sidebar />
        </div>
        <main className="flex-1 bg-gray-50 p-1 px-2 md:px-5">
          <BreadCrumb />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
