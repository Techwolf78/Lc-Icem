import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Home, FileText, IdCard, User, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const itemRefs = useRef({});

  const links = [
    { name: "Home", path: "/student-dashboard", icon: Home },
    { name: "Leaving Certificate", path: "/leaving-certificate", icon: FileText },
    { name: "Bonafide Certificate", path: "/bonafide-certificate", icon: IdCard },
    { name: "My Details", path: "/my-details", icon: User },
  ];

  // Scroll active item into view
  useEffect(() => {
    const activeRef = itemRefs.current[location.pathname];
    if (activeRef)
      activeRef.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [location]);

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-[90vh] rounded-r-2xl py-2 my-4 bg-white shadow-lg flex flex-col transition-all duration-300`}
    >
      {/* Collapse Button */}
      <div className="p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="self-end py-2 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <Menu size={28} /> : <X size={28} />}
        </button>
      </div>

      {/* Link List */}
      <div className="flex-1 px-2 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.path}
              ref={(el) => (itemRefs.current[link.path] = el)}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 cursor-pointer ${
                isActive
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              <Icon className="w-6 h-6 text-[#00539C]" />
              {!collapsed && <span className="font-medium">{link.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* Static Help Button */}
      <div className="px-2 mt-auto">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 cursor-pointer">
          <HelpCircle className="w-6 h-6 text-[#00539C]" />
          {!collapsed && <span className="font-medium">Help</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
