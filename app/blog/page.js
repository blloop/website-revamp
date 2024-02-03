import { client } from '@/sanity/lib/client';
import Container from '../components/Container';
import BlogListItem from '../components/BlogList';
import BlogPost from '@/sanity/schema/documents/blogPost';
import BlogPostCard from '../components/BlogPost';
// import BlogPostCard from '../components/BlogPost';

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <Container>
      <p className='text-4xl py-4'>My Blog</p>
      <div className='flex flex-col gap-4'>
        {posts.map((post) => (
            <BlogListItem key={post.slug} post={post}/>
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

  const posts = await client.fetch(query);
  return posts;
}
