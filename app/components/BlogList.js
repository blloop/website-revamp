import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function BlogListItem({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="h-56 sm:h-32 flex flex-col sm:flex-row justify-start sm:gap-4 space-y-4 md:hover:opacity-75 transition-opacity"
    >
      <Image
        src={urlForImage(post.image).auto("format").size(1080, 1080).url()}
        width={1920}
        height={1080}
        alt={post.title}
        className="h-32 w-64 sm:w-32 object-cover rounded-2xl border border-primary-400"
      />
      <div className="space-y-2">
        <DatePill date={post.date} />
        <h2 className="h-6 text-lg text-clip font-semibold">{post.title}</h2>
        <p className="line-clamp-1 text-sm text-clip text-primary-600">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
