/* eslint-disable no-unused-vars */
// components/AdminAuthentication.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AdminAuthentication = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("adminAccessToken");

  const validateAdmin = async () => {
    try {
      await api.post(
        "/admin/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
    } catch (err) {
      localStorage.removeItem("adminAccessToken");
      navigate("/admin-login");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }
    validateAdmin();
  }, []);

  return loading ? null : <>{children}</>;
};

export default AdminAuthentication;
