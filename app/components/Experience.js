"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

export default function Experience({ experience, index }) {
  return (
    <motion.div
      className={`relative md:w-1/2 pl-32 md:text-left ${index % 2 === 0 ? "md:pr-24 md:pl-0" : "md:pl-24 md:ml-auto"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={`absolute p-3 left-12 top-[3.5rem] transform -translate-x-1/2 w-20 h-20 bg-olive-300 rounded-full z-10 ${index % 2 === 0 ? "md:-right-20 md:left-auto" : "md:left-0"}`}
      >
        {experience.logo && (
          <Image
            src={urlForImage(experience.logo)
              .auto("format")
              .size(256, 256)
              .url()}
            width={256}
            height={256}
            alt={experience.title}
            className="size-full object-contain"
          />
        )}
      </div>
      <div
        className={`absolute w-0 h-0 top-20
        border-gray-700 
        border-t-[16px] border-t-transparent
        border-r-[32px]
        left-24
        ${index % 2 === 0 ? "md:border-l-[32px] md:border-r-0 md:right-16 md:left-auto" : "md:left-16"}
        border-b-[16px] border-b-transparent`}
      ></div>
      <div className="bg-gray-700 relative z-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between md:justify-start items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <p className="text-olive-300">{experience.company}</p>
          </div>
        </div>
        <p className="mb-2">{experience.description}</p>
        <div className="flex items-center justify-end">
          <span className="px-3 py-1 font-mono bg-olive-700 text-sm font-semibold rounded-full">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
            }).format(new Date(experience.date))}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
