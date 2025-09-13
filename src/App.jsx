import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import AdminLogin from "./components/AdminLogin";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";
import AddDepartmentForm from "./components/Admin/AddDepartmentForm";
import Admin from "./Pages/Admin";
import AddStudentForm from "./components/Admin/AddUserForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="add-department" element={<AddDepartmentForm />} />
          <Route path="add-user" element={<AddStudentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
