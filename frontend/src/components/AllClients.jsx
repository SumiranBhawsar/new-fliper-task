/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import api from "../api/axios"; // Make sure this points to axios instance with baseURL
import { toast } from "react-hot-toast";

const AllClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await api.get("/clients/all-clients"); // This hits your Express route
        setClients(res.data.data); // Assuming ApiResponse structure: { statusCode, data, message }
      } catch (err) {
        toast.error("Failed to load clients");
      }
    };
    fetchClients();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">All Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((c) => (
          <div key={c._id} className="bg-white shadow-md p-4 rounded">
            <img
              src={c.clientImage}
              alt={c.clientName}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold text-center">
              {c.clientName}
            </h3>
            <p className="text-sm text-center text-gray-500">
              {c.clientDesignation}
            </p>
            <p className="text-center text-gray-600 italic mt-2">
              "{c.clientDescription}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClients;
