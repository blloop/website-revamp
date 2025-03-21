"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
        <p className="mb-8">
          Interested in working together? Have a question? Feel free to reach
          out!
        </p>
        <motion.button whileHover={{ scale: 1.05 }}>
          <a
            className="bg-olive-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors"
            href="/contact"
          >
            Send a Message
          </a>
        </motion.button>
      </div>
    </motion.section>
  );
}
