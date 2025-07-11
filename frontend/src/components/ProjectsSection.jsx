import React, { useEffect, useState } from "react";
import api from "../api/axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects/allprojects");
        setProjects(res.data.data.allProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 bg-blue-50 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
        Our Projects
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto text-sm sm:text-base">
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.length === 0 ? (
          <p className="text-gray-500 col-span-full">No projects available.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left flex flex-col flex-grow">
                <h3 className="text-blue-700 font-semibold text-lg">
                  {project.projectName}
                </h3>
                <p className="text-gray-600 text-sm mt-1 flex-grow">
                  {project.projectDescription?.slice(0, 100)}...
                </p>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition self-start">
                  READ MORE
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
