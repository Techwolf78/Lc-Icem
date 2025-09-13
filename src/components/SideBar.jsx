import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 rounded-r-xl shadow-inner flex flex-col">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>

      <Link
        to="/student-dashboard"
        className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-4 py-2 rounded-xl shadow mb-4 text-center"
      >
        Home
      </Link>

      <Link
        to="/leaving-certificate"
        className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-4 py-2 rounded-xl shadow mb-4 text-center"
      >
        Leaving Certificate
      </Link>

      <Link
        to="/bonafide-certificate"
        className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-4 py-2 rounded-xl shadow mb-4 text-center"
      >
        Bonafide Certificate
      </Link>

      <Link
        to="/my-details"
        className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-4 py-2 rounded-xl shadow text-center"
      >
        My Details
      </Link>
    </div>
  );
};

export default Sidebar;
