"use client";

import { urlForImage } from "/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      key={project.id}
      className="flex flex-col items-center gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full max-w-2xl">
        <div className="absolute -z-10 top-4 left-4 w-full h-full bg-olive-300 rounded-lg"></div>
        <Image
          src={urlForImage(project.image).auto("format").size(1920, 1080).url()}
          width={1920}
          height={1080}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
        <Link
          href={`/projects/${project.slug}`}
          className="group absolute inset-0 bg-olive-300 bg-opacity-0 md:hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center"
        >
          <ArrowUpRight className="w-12 h-12 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
        </Link>
      </div>
      <div className="w-full max-w-2xl text-center space-y-4">
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="text-lg">{project.description}</p>
        <div className="flex items-center justify-center text-olive-300">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="font-mono">{project.date}</span>
        </div>
        <motion.button
          className="bg-olive-700 px-6 py-3 rounded-full hover:bg-olive-300 transition-colors duration-300 flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center"
          >
            View Project
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}
