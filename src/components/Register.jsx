import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    prn: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Dummy register logic - just navigate to login page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      {/* Card wrapper */}
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Left side - Welcome text */}
        <div className="hidden lg:flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white p-12">
          <h2 className="text-5xl font-bold mb-4 text-center">
            Welcome to ICEM CRM
          </h2>
          <p className="text-lg text-white/80 max-w-md text-center">
            Join our platform to manage your student account and access
            resources made just for you.
          </p>
        </div>

        {/* Right side - form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Register
              </h1>
              <p className="text-gray-500">
                Create your account to get started
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="prn"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  PRN
                </label>
                <input
                  type="text"
                  id="prn"
                  name="prn"
                  value={formData.prn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your PRN"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Create a password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <span>Register</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/")}
                className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
