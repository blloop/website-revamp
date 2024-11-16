import { client } from "/sanity/lib/client";
import Container from "@/components/Container";
import BlogCard from "@/components/Blog";

export const metadata = {
  title: "Bill Yu | Blog",
  description: "Read about my ideas on web development",
};

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-bold">Blog Articles</p>
        <p className="text-lg text-olive-300">Insights on Web Development</p>
      </div>
      {/* TODO: Add option to sort by date */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard post={post} key={index} index={index} />
        ))}
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
    image
  }`;

  const posts = await client.fetch(query, { next: { revalidate: 84600 } });
  return posts;
}
