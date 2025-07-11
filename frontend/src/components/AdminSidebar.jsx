import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; // Ensure this is configured properly with withCredentials: true

const AdminSidebar = ({ selected, onSelect }) => {
  const navigate = useNavigate();

  const menuItems = [
    "Add Project",
    "All Projects",
    "Add Client",
    "All Clients",
    "Contact Submissions",
    "Subscribers",
  ];

  const handleLogout = async () => {
    try {
      await api.get("/admin/logout", {
        withCredentials: true, // ⬅️ send cookies
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminAccessToken")}`, // ⬅️ required if your auth.middleware expects it
        },
      });

      localStorage.removeItem("adminAccessToken");
      navigate("/admin-login");
    } catch (error) {
      console.error("Logout failed:", error.message);
      localStorage.removeItem("adminAccessToken");
      navigate("/admin-login");
    }
  };

  const handleGoToLanding = () => {
    navigate("/");
  };

  return (
    <div className="w-full md:w-64 bg-blue-800 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => onSelect(item)}
              className={`cursor-pointer px-4 py-2 rounded ${
                selected === item ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={handleGoToLanding}
          className="mt-6 bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-100 transition w-full"
        >
          Go to Landing Page
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="mt-10 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white w-full"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
