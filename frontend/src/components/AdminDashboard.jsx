import React from "react";
import AddProject from "./AddProject";
import AddClient from "./AddClient";
import ContactSubmissions from "./ContactSubmissions";
import Subscribers from "./Subscribers";
import AllProjects from "./AllProjects";
import AllClients from "./AllClients";

const AdminDashboard = ({ selected }) => {
  return (
    <div className="flex-1 overflow-y-auto ">
      {selected === "Add Project" && <AddProject />}
      {selected === "All Projects" && <AllProjects />}
      {selected === "Add Client" && <AddClient />}
      {selected === "All Clients" && <AllClients />}
      {selected === "Contact Submissions" && <ContactSubmissions />}
      {selected === "Subscribers" && <Subscribers />}
    </div>
  );
};

export default AdminDashboard;
