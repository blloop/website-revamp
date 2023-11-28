import { client } from '@/sanity/lib/client';
import Container from '../../components/Container';
import DatePill from '../../components/DatePill';

export default async function Page({ params }) {
  const post = await getBlogPost(params.post);

  return (
    <Container>
      <div className='mx-auto max-w-5xl space-y-8 py-8'>
        <BlogPostHeader post={post[0]} />
      </div>
    </Container>
  );
}

async function getBlogPost(slug) {
  const query = `*[_type == 'blogPost' && slug.current == $slug] {
    title,
    description,
    date,
    'slug': slug.current,
    image,
    content
  }`;

  const posts = await client.fetch(query, { slug });
  return posts;
}

function BlogPostHeader({ post }) {
  return (
    <header className='text-center space-y-4'>
      <DatePill date={post.date} />
      <h1 className='font-semibold text-4xl'>{post.title}</h1>
      <p className='font-medium text-primary-700 text-lg'>{post.description}</p>
    </header>
  );
}
