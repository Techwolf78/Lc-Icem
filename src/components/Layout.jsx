import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
// import AdminNavbar from "./Admin/AdminNavbar";
// import AdminSidebar from "./Admin/AdminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
