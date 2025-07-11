import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bgimage.jpg";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const res = await api.post(
        "/admin/login",
        { email, password },
        {
          withCredentials: true, // 👈 ESSENTIAL
        }
      );

      console.log("response : ", res);

      // Save accessToken to localStorage (you already set it as cookie from server too)
      await localStorage.setItem("adminAccessToken", res.data.data.accessToken);

      toast.success("Login successful!");
      navigate("/admin");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-gray-200 bg-opacity-40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-xl sm:h-[500px] flex flex-col justify-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-blue-800 mb-6 sm:mb-10">
          Admin Login
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full border border-blue-700 text-blue-700 py-3 rounded hover:bg-blue-50 transition"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
