import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="w-full bg-gray-200 shadow-md flex justify-between items-center p-4 rounded-b-xl">
      <h1 className="text-xl font-semibold">ICEM (LOGO)</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700">
          Hello, <b>UserName</b>
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-200 hover:bg-red-300 text-red-900 font-medium px-4 py-1 rounded-xl shadow"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
