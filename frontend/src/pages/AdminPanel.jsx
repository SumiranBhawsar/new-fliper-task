import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminDashboard from "../components/AdminDashboard";


const AdminPanel = () => {
  const [selected, setSelected] = useState("Add Project");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="md:w-64 w-full border-r border-gray-200">
        <AdminSidebar selected={selected} onSelect={setSelected} />
      </div>

      {/* Main Dashboard - scrollable */}
      <main className="flex-1 h-screen overflow-y-auto ">
        <AdminDashboard selected={selected} />
      </main>
    </div>
  );
};

export default AdminPanel;
