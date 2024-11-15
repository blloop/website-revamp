"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_USER_ID,
          template_params: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="w-[48rem] max-w-full mx-auto space-y-6 bg-gray-600 p-8 rounded-lg shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-lg mb-2 font-semibold">
          Name
        </label>
        <div className="relative">
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border-2 border-olive-700 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:border-olive-300 transition-colors"
            required
          />
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-olive-300" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-lg mb-2 font-semibold">
          Email
        </label>
        <div className="relative">
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 border-2 border-olive-700 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:border-olive-300 transition-colors"
            required
          />
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-olive-300" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-lg mb-2 font-semibold">
          Message
        </label>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-gray-800 border-2 border-olive-700 rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-olive-300 transition-colors"
            required
          ></textarea>
          <MessageSquare className="absolute left-4 top-4 text-olive-300" />
        </div>
      </div>
      <p>{status}</p>
      <motion.button
        type="submit"
        className="w-full bg-olive-300 text-gray-800 font-bold py-3 px-4 rounded-lg hover:transition-colors duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
        <Send className="ml-2 h-5 w-5" />
      </motion.button>
    </motion.form>
  );
}
