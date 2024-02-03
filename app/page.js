import { client } from '@/sanity/lib/client';
import Container from './components/Container';
import BlogPostCard from './components/BlogPost';
import LinkButton from './components/LinkButton';
import { DarkButton, LightButton } from './components/Buttons';

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className='bg-primary-200 bg-header-image bg-cover bg-no-repeat bg-center'>
        <Container className='flex flex-row items-end justify-between gap-8'>
          <div className='flex flex-col gap-6 text-sky-100'>
            <p>Welcome to my website!</p>
            <p className='text-5xl'>Hi, I&apos;m Bill</p>
            <p>
              This is my portfolio and personal website. <br/>
              I&apos;m a programmer, hobby sprinter, and pianist who also enjoys reading. <br/>
              Read my blog to follow my journey or learn about cool projects I&apos;ve made!
            </p>
            <div className='flex gap-4'>
              <DarkButton><a href='/blog'>Read my blog</a></DarkButton>
              <LightButton><a href='/projects'>Check out my projects</a></LightButton>
            </div>
            <div className='flex gap-3'>
              <LinkButton src='/github.svg' alt='GitHub Logo' href='http://github.com/blloop'/>
              <LinkButton src='/linkedin.svg' alt='LinkedIn Logo' href='http://linkedin.com/in/biyu430'/>
              <LinkButton src='/athleticnet.png' alt='Athletic.net Logo' href='http://athletic.net/athlete/12379749/track-and-field/unattached'/>
              <LinkButton src='/mail.svg' alt='Mail Icon' href='mailto:blloop@uw.edu'/>
            </div>
          </div>
          <p className='text-sm text-gray-300'>Source: Surface Laptop 3 - Sandstone</p>
        </Container>
      </div>
      <Container className='flex flex-col gap-8'>
        <p className='text-3xl w-fill text-center'>Latest Blog Posts</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
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
  }`;

  const posts = await client.fetch(query);
  return posts;
}
