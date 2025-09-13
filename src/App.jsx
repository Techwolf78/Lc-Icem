import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import AdminLogin from "./components/AdminLogin";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";
import LeavingCertificate from "./components/LeavingCertificate";
import BonafideCertificate from "./components/BonafideCertificate";
import Layout from "./components/Layout";
import MyDetails from "./components/MyDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Student Routes with Layout */}
        <Route
          path="/student-dashboard"
          element={
            <Layout>
              <StudentDashboard />
            </Layout>
          }
        />
        <Route
          path="/my-details"
          element={
            <Layout>
              <MyDetails />
            </Layout>
          }
        />
        <Route
          path="/leaving-certificate"
          element={
            <Layout>
              <LeavingCertificate />
            </Layout>
          }
        />
        <Route
          path="/bonafide-certificate"
          element={
            <Layout>
              <BonafideCertificate />
            </Layout>
          }
        />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
