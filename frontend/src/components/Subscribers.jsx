/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import api from "../api/axios"; // Make sure this is configured correctly
import { toast } from "react-hot-toast";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await api.get("/email/all-userEmails");
        // Assuming the data is in: res.data.data
        setSubscribers(res.data?.data || []);
      } catch (err) {
        toast.error("Failed to fetch subscribers");
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Newsletter Subscribers
      </h2>
      <ul className="space-y-3">
        {subscribers.map((sub) => (
          <li key={sub._id} className="bg-white shadow p-4 rounded text-center">
            <p className="text-gray-700">{sub.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscribers;
