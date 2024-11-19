"use client";

import { urlForImage } from "/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      className="bg-gray-600 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block md:hover:opacity-75 transition-opacity"
      >
        <div className="relative">
          <Image
            src={urlForImage(post.image).auto("format").size(1080, 1080).url()}
            width={1920}
            height={1080}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 m-4 px-3 py-1 font-mono bg-olive-700 text-sm font-semibold rounded-full">
            {post.date}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
          <p className="opacity-80 line-clamp-1">{post.description}</p>
        </div>
      </Link>
    </motion.article>
  );
}
