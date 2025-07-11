/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import livingRoom from "../assets/livingRoom.png";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/email/submit-email", { email });
      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("This email is already subscribed.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <footer className="text-white text-sm">
      {/* CTA Section */}
      <div className="relative">
        <img
          src={livingRoom}
          alt="Living Room Background"
          className="w-full h-[300px] sm:h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 max-w-2xl">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </h2>
          <button className="bg-white text-blue-800 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="bg-blue-700 text-white py-8 px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
          {["Home", "Projects", "Testimonials", "Contact", "Subscribe Us"].map(
            (item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            )
          )}
          <li>
            <button
              onClick={() => navigate("/admin-login")}
            >Admin</button>
          </li>
        </ul>

        {/* Newsletter Form */}
        <form
          onSubmit={handleNewsletterSubmit}
          className="flex flex-wrap justify-center gap-2 items-center"
        >
          <input
            type="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded bg-white/10 text-white border border-white/30 w-full sm:w-[220px] max-w-full"
          />
          <button
            type="submit"
            className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1f1f1f] py-4 px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
        <p className="text-gray-400">© All Rights Reserved 2025</p>

        <div className="flex items-center gap-2">
          <span className="font-bold text-white">Real</span>
          <span className="text-gray-300">trust</span>
        </div>

        <div className="flex gap-4 text-white text-lg">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNewsletter;
