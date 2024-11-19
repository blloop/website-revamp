"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [verified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!verified) {
      setStatus("You must complete the CAPTCHA above to continue.");
      return;
    }
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  async function handleCaptcha(token) {
    try {
      if (token) {
        await fetch("/api/captcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setVerified(true);
        setStatus("");
      }
    } catch (e) {
      setVerified(false);
    }
  }

  return (
    <motion.form
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
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border-2 border-olive-700 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:border-olive-300 transition-colors"
            required
            autoComplete="true"
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
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 border-2 border-olive-700 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:border-olive-300 transition-colors"
            required
            autoComplete="true"
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
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-gray-800 border-2 border-olive-700 rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-olive-300 transition-colors"
            required
            autoComplete="true"
          ></textarea>
          <MessageSquare className="absolute left-4 top-4 text-olive-300" />
        </div>
      </div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={handleCaptcha}
        onExpired={() => setVerified(false)}
      />
      <p>{status}</p>
      {verified ? (
        <motion.button
          type="submit"
          className="w-full bg-olive-300 text-gray-800 font-bold py-3 px-4 rounded-lg hover:transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
          <Send className="ml-2 h-5 w-5" />
        </motion.button>
      ) : (
        <button
          disabled
          className="w-full bg-olive-700 text-gray-800 font-bold py-3 px-4 rounded-lg hover:transition-colors duration-300 flex items-center justify-center"
        >
          Send Message
        </button>
      )}
    </motion.form>
  );
}
