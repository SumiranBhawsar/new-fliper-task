/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await api.get("/form/get-all-forms");
        const allContacts = res.data?.data?.allFormData || [];
        setContacts(allContacts);
      } catch (err) {
        toast.error("Failed to load contact submissions");
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Contact Submissions</h2>
      <ul className="space-y-3">
        {contacts.map((contact) => (
          <li key={contact._id} className="bg-white shadow p-4 rounded">
            <p className="font-semibold">{contact.fullName}</p>
            <p className="text-sm text-gray-500">
              {contact.email} | {contact.mobileNumber} | {contact.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactSubmissions;
