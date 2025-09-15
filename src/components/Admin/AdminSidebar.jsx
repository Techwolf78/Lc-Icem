import React, { useEffect, useState, useRef } from "react";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  ShoppingCart,
  Megaphone,
  Menu,
  X,
  HelpCircle,
  Ticket,
  Home, 
  FileText,
  IdCard,
  User
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const departments = [
    { name: "Admin", icon: LayoutDashboard, path: "/admin-dashboard" },
    { name: "HOD", icon: Users, path: "/admin-dashboard/hod" },
    { name: "Accounts", icon: DollarSign, path: "/admin-dashboard/accounts" },
    { name: "Hostel", icon: ShoppingCart, path: "/admin-dashboard/hostel" },
    { name: "Library", icon: Megaphone, path: "/admin-dashboard/library" },
    { name: "Home", path: "/student-dashboard", icon: Home },
    {
      name: "Leaving Certificate",
      path: "/leaving-certificate",
      icon: FileText,
    },
    {
      name: "Bonafide Certificate",
      path: "/bonafide-certificate",
      icon: IdCard,
    },
    { name: "My Details", path: "/my-details", icon: User },
  ];

  const itemRefs = useRef({});
  const location = useLocation();

  // Scroll active item into view
  useEffect(() => {
    const activeRef = itemRefs.current[location.pathname];
    if (activeRef)
      activeRef.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [location]);

  const clickHandler = (e) => {
    // console.log(e.path, "-", e.name);
    navigate(`${e.path}`);
  };
  return (
    <div className="">
      <div
        className={`${
          collapsed ? "w-20" : "w-64"
        }  min-h-[90vh] rounded-r-2xl py-2 my-4 bg-white shadow-lg flex flex-col transition-all duration-300`}
      >
        {/* Collapse Button */}
        <div className="p-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="  w-full py-2 rounded-lg hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
          </button>
        </div>

        {/* Department List */}
        <div className="flex-1 px-2 space-y-2 ">
          {departments.map((dept) => {
            const isActive = location.pathname === dept.path;
            const Icon = dept.icon;

            return (
              <div
                key={dept.name}
                ref={(el) => (itemRefs.current[dept.path] = el)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 cursor-pointer ${
                  isActive
                    ? "text-blue-600 text-xl bg-blue-50 font-semibold"
                    : "hover:text-blue-400"
                }`}
                onClick={() => clickHandler(dept)}
              >
                <Icon className="w-6 h-6 text-[#00539C]" />
                {!collapsed && <span className="font-medium">{dept.name}</span>}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-2 space-y-2 mt-auto">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 cursor-pointer">
            <HelpCircle className="w-6 h-6 text-[#00539C]" />
            {!collapsed && <span className="font-medium">Help</span>}
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 cursor-pointer">
            <Ticket className="w-6 h-6 text-[#00539C]" />
            {!collapsed && <span className="font-medium">Active Tickets</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
