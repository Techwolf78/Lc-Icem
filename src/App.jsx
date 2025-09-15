import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import AdminLogin from "./components/AdminLogin";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import LeavingCertificate from "./components/LeavingCertificate";
import BonafideCertificate from "./components/BonafideCertificate";
import Layout from "./components/Layout";
import MyDetails from "./components/MyDetails";
import Register from "./components/Register";
import AddDepartmentForm from "./components/Admin/AddDepartmentForm";
import Admin from "./Pages/Admin";
import AddUserForm from "./components/Admin/AddUserForm";
import LibraryDashboard from "./components/Admin/LibraryDashboard";
import HODDashboard from "./components/Admin/HODDashboard";
import AccountsDashboard from "./components/Admin/AccountDashboard";
import HostelDashboard from "./components/Admin/HostelDashboard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
        <Route path="/admin-dashboard" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="add-department" element={<AddDepartmentForm />} />
          <Route path="add-user" element={<AddUserForm />} />
          <Route path="library" element={<LibraryDashboard />} />
          <Route path="hod" element={<HODDashboard />} />
          <Route path="accounts" element={<AccountsDashboard />} />
          <Route path="hostel" element={<HostelDashboard />} />
        </Route>

        {/* catch all routes for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
