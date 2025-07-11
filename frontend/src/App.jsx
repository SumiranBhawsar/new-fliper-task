import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/AdminPanel";
import AdminAuthentication from "./auth/AdminAuthentication ";
import AdminLoginPage from "./pages/AdminLoginPage";

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <AdminAuthentication>
                <AdminPanel />
              </AdminAuthentication>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
