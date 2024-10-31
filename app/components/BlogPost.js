import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="space-y-4 md:hover:opacity-75 transition-opacity"
    >
      <Image
        src={urlForImage(post.image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={post.title}
        className="rounded-2xl border-2 border-primary-600"
      />
      <div className="space-y-2">
        <DatePill date={post.date} />
        <div>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="line-clamp-1 text-sm text-primary-600">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
