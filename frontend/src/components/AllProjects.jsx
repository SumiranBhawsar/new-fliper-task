/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const res = await api.get("/projects/all-projects");
        const res = await api.get("/projects/allprojects");
        console.log("all projects : ", res);

        setProjects(res.data?.data?.allProjects || []);
      } catch (err) {
        toast.error("Failed to load projects");
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">All Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p._id} className="bg-white shadow-md p-4 rounded">
            <img
              src={p.projectImage}
              alt={p.projectName}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{p.projectName}</h3>
            <p className="text-gray-600">{p.projectDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
