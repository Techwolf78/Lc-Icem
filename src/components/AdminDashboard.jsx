import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./Admin/AdminNavbar";
import AdminSidebar from "./Admin/AdminSidebar";

// Icons
import { Plus, Edit, Trash2 } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add token clearing if needed
    navigate("/");
  };

  const handleAddDepartmentBtn = () => {
    navigate("/admin-dashboard/add-department");
  };

   const handleAddUserBtn = () => {
     navigate("/admin-dashboard/add-user");
   };

  const users = [
    { user: "Sumedh Sangle", department: "IT", role: "Intern" },
    { user: "Aarav Mehta", department: "Finance", role: "Manager" },
    { user: "Priya Sharma", department: "HR", role: "Staff" },
    { user: "Rohan Gupta", department: "Marketing", role: "Admin" },
  ];

  const stats = [
    {
      title: "Total Students Onboard",
      value: "1,250",
      change: "+12%",
      color: "text-emerald-600",
    },
    {
      title: "Faculty Members",
      value: "5",
      change: "+25%",
      color: "text-emerald-600",
    },
    { title: "Departments", value: "8", change: "0%", color: "text-gray-500" },
    {
      title: "Documents Online",
      value: "92%",
      change: "+8%",
      color: "text-emerald-600",
    },
  ];

  return (
    <div className="">
      {/* Main Content */}
      <main className="flex-1 w-auto mx-auto px-6 lg:px-10 py-4 ">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h2>
            <button className="flex items-center gap-2 font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-2 px-4 transition" onClick={handleAddDepartmentBtn}>
              <Plus size={18} />
              Add Department
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  {item.value}
                </p>
                <p className={`mt-2 text-sm font-semibold ${item.color}`}>
                  {item.change} since last year
                </p>
              </div>
            ))}
          </div>

          {/* User Management Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              User Management
            </h2>
            <button className="flex items-center gap-2 font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-2 px-4 transition" onClick={handleAddUserBtn}>
              <Plus size={18} />
              Add User
            </button>
          </div>

          {/* User Table */}
          <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100/80">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((u, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {u.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {u.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {u.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                      <button className="p-2 rounded-lg  text-blue-600 hover:bg-blue-200 transition">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 rounded-lg  text-red-600 hover:bg-red-200 transition">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
