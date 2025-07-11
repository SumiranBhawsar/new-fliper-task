/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Submitting your form...");

    try {
      const res = await api.post("/form/submit-form", formData);

      toast.dismiss(); // remove the loading toast
      toast.success("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        city: "",
      });
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to submit form. Please try again.");

      // Optional: log details for debugging
      console.error(
        "Submission failed:",
        error.response?.data || error.message
      );

      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        city: "",
      });
    }
  };

  return (
    <div className="bg-blue-950/10 backdrop-blur-md rounded-lg p-8 text-left shadow-lg max-w-md border border-white/20">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Get a Free Consultation
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="fullName"
          required
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          required
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="mobileNumber"
          required
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          name="city"
          required
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Your City"
          value={formData.city}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-3 my-6 rounded hover:bg-orange-600 transition"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default Form;
