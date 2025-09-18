import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic - just navigate to student dashboard
    navigate('/student-dashboard');
  };

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    navigate('/register');
  }

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  const handleForgetPassword = () => {
    navigate('/forget-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-[#003C84] p-10 rounded-2xl shadow-2xl max-w-lg w-full text-white">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Student Login</h1>
          <p className="text-white/80">Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-white/90 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 backdrop-blur-sm"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white/90 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 backdrop-blur-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#003C84] font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/30 flex items-center justify-center space-x-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Login</span>
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm">
          <button
            onClick={handleForgetPassword}
            className="text-white/80 hover:text-white underline transition-colors duration-200"
          >
            Forget Password?
          </button>
          <button
            onClick={handleRegisterBtn}
            className="text-white/80 hover:text-white underline transition-colors duration-200"
          >
            Sign in
          </button>
          <button
            onClick={handleAdminLogin}
            className="text-white/80 hover:text-white underline transition-colors duration-200"
          >
            Login as Admin
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">Secure access to your student dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
