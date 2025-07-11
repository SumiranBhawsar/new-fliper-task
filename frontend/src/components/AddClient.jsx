/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const AddClient = () => {
  const [client, setClient] = useState({
    clientName: "",
    clientDesignation: "",
    clientDescription: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !client.clientName ||
      !client.clientDesignation ||
      !client.clientDescription ||
      !imageFile
    ) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("clientName", client.clientName);
    formData.append("clientDesignation", client.clientDesignation);
    formData.append("clientDescription", client.clientDescription);
    formData.append("clientImage", imageFile); // matches multer's .single("clientImage")

    try {
      const res = await api.post("/clients/create-client", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Client created successfully!");
      setClient({
        clientName: "",
        clientDesignation: "",
        clientDescription: "",
      });
      setImageFile(null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create client");
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">
          Add Client
        </h2>

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Client Name"
          value={client.clientName}
          onChange={(e) => setClient({ ...client, clientName: e.target.value })}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Designation"
          value={client.clientDesignation}
          onChange={(e) =>
            setClient({ ...client, clientDesignation: e.target.value })
          }
        />

        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
          rows={4}
          value={client.clientDescription}
          onChange={(e) =>
            setClient({ ...client, clientDescription: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
