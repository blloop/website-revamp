
import { client } from "@/sanity/lib/client";
import Container from "./components/Container";
import BlogPostCard from "./components/BlogPost";
import Header from "./components/header";

export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <Container className="flex flex-col gap-8">
        <p className="text-3xl w-fill text-center">Latest Blog Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}

async function getBlogPosts() {
  const query = `*[_type == 'blogPost'] | order(date desc) {
    title,
    description,
    date,
    'slug':slug.current,
    image
  }[0..2]`;

  const posts = await client.fetch(query, { next: { revalidate: 84600 } });
  return posts;
}
