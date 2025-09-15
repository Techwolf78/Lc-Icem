import React from "react";

import AdminSidebar from "./Admin/AdminSidebar";
import AdminNavbar from "./Admin/AdminNavbar";
// import AdminNavbar from "./Admin/AdminNavbar";
// import AdminSidebar from "./Admin/AdminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminNavbar />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
