import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AdminSidebar from "../components/Admin/AdminSidebar";

function Admin() {
  return (
    <div className="min-h-screen  w-full bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Navbar */}
      <AdminNavbar />

      <div className="flex w-full">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content changes per subroute */}
        <main className="flex-1 max-w-7xl">
          <Outlet /> {/* This is where child routes render */}
        </main>
      </div>
    </div>
  );
}

export default Admin;
