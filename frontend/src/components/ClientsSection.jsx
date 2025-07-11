import React, { useEffect, useState } from "react";
import api from "../api/axios";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await api.get("/clients/all-clients");
        setClients(res.data.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
        Happy Clients
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />

      {/* Client Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {clients.length === 0 ? (
          <p className="text-gray-500 col-span-full">No clients available.</p>
        ) : (
          clients.map((c) => (
            <div
              key={c._id}
              className="bg-white rounded-lg shadow-md p-4 text-left border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={c.clientImage}
                  alt={c.clientName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-blue-700 text-sm">
                    {c.clientName}
                  </h4>
                  <p className="text-xs text-gray-500">{c.clientDesignation}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                “
                {c.clientDescription.length > 150
                  ? c.clientDescription.slice(0, 140) + "..."
                  : c.clientDescription}
                ”
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ClientsSection;
