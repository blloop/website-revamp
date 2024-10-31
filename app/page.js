import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Moon from "../public/moon.gif";
import Container from "./components/Container";
import BlogPostCard from "./components/BlogPost";
import LinkButton from "./components/LinkButton";
import { DarkButton, LightButton } from "./components/Buttons";

export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="bg-primary-700">
        <Container className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 bg-header-image bg-cover bg-no-repeat bg-center">
          <div className="flex flex-col text-center md:text-left gap-6 text-slate-300">
            <p>Welcome to my website!</p>
            <p className="text-5xl">Hi, I&apos;m Bill</p>
            <p>
              This is my portfolio and personal website. <br />
              I&apos;m a programmer, hobby sprinter, and pianist who also enjoys
              reading. <br />
              Read my blog to follow my journey or learn about cool projects
              I&apos;ve made!
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <DarkButton>
                <a href="/blog">Read my blog</a>
              </DarkButton>
              <LightButton>
                <a href="/projects">Check out my projects</a>
              </LightButton>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <LinkButton
                src="/github.svg"
                alt="GitHub Logo"
                href="http://github.com/blloop"
              />
              <LinkButton
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                href="http://linkedin.com/in/biyu430"
              />
              <LinkButton
                src="/athleticnet.png"
                alt="Athletic.net Logo"
                href="http://athletic.net/athlete/12379749/track-and-field/unattached"
              />
              <LinkButton
                src="/mail.svg"
                alt="Mail Icon"
                href="mailto:blloop@uw.edu"
              />
            </div>
          </div>
          <div className="h-80 flex flex-col grow items-end justify-between">
            <a href="https://en.wikipedia.org/wiki/Moon" target="_blank">
              <Image
                src={Moon}
                width={512}
                height={512}
                alt={"Rotating cubic moon"}
                className="h-64 w-64 object-cover"
              />
            </a>
            <p className="text-sm text-slate-400">
              Source: Surface Laptop 3 - Sandstone
            </p>
          </div>
        </Container>
      </div>
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

  const posts = await client.fetch(query, { next: { revalidate: 3600 } });
  return posts;
}
