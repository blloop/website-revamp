import { client } from "/sanity/lib/client";
import Container from "@/components/Container";
import BlogCard from "@/components/Blog";
import { Tag, X } from "lucide-react";
import { filterByTag, orderByDate } from "@/utils";

export const metadata = {
  title: "Bill Yu - Blog",
  description: "Read about my ideas on web development",
};

export default async function Page({ searchParams }) {
  const posts = await getBlogPosts();

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-bold">Blog Articles</p>
        <p className="text-lg text-olive-300">Insights on Web Development</p>
        <span
          className={searchParams["tag"] ? "flex items-center gap-1" : "hidden"}
        >
          <p>Filter:</p>
          <p className="inline-flex items-center gap-2 bg-olive-700 px-3 py-1 rounded-full">
            <Tag className="w-5 h-5" />
            {searchParams[Object.keys(searchParams)[0]]}
          </p>
          <a href="/blog">
            <X className="text-olive-50 md:hover:text-olive-300 transition-colors" />
          </a>
        </span>
      </div>
      {/* TODO: Add option to sort by date */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orderByDate(filterByTag(posts, searchParams["tag"])).map(
          (post, index) => (
            <BlogCard post={post} key={index} index={index} />
          ),
        )}
      </div>
    </Container>
  );
}

async function getBlogPosts() {
  const query = `*[_type == 'blogPost'] | order(date desc) {
    title,
    description,
    date,
    'slug':slug.current,
    image,
    tags
  }`;

  const posts = await client.fetch(query, { next: { revalidate: 3600 } });
  return posts;
}
