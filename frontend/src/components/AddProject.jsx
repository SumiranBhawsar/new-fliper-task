/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const AddProject = () => {
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    projectImage: null,
  });

  const handleAddProject = async (e) => {
    e.preventDefault();

    const { projectName, projectDescription, projectImage } = project;

    if (!projectName || !projectDescription || !projectImage) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectDescription", projectDescription);
    formData.append("projectImage", projectImage);

    try {
      const res = await api.post("/projects/create-project", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // No need for Authorization header since cookies are used
      });

      toast.success("Project created successfully!");
      setProject({
        projectName: "",
        projectDescription: "",
        projectImage: null,
      });
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong while creating the project.";
      toast.error(message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500 px-4">
      <form
        onSubmit={handleAddProject}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">
          Add New Project
        </h2>

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Name"
          value={project.projectName}
          onChange={(e) =>
            setProject({ ...project, projectName: e.target.value })
          }
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setProject({ ...project, projectImage: e.target.files[0] })
          }
        />

        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
          rows={4}
          value={project.projectDescription}
          onChange={(e) =>
            setProject({ ...project, projectDescription: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
