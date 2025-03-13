import { client } from "/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { renderCode } from "@/utils";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

const portableTextComponents = {
  types: {
    image: ImageComponent,
    code: ({ value }) => renderCode(value),
  },
};

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.post);

  if (!post) {
    return {
      title: "404 - Blog not found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: "Bill Yu - " + post[0].title,
    description: post[0].description,
  };
}

export default async function Page({ params }) {
  const post = await getBlogPost(params.post);

  return (
    <Container className="!max-w-3xl text-left">
      <Link
        href="/blog"
        className="w-fit inline-flex items-center text-olive-300 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>
      <header className="flex flex-col gap-4 sm:gap-2">
        <h1 className="font-semibold text-4xl">{post[0].title}</h1>
        <p className="font-medium text-lg">{post[0].description}</p>
        {post[0].tags && (
          <div className="flex items-center gap-2 flex-wrap">
            {post[0].tags.map((tag, index) => (
              <a
                key={index}
                href={`/blog?tag=${tag}`}
                className="inline-flex items-center gap-2 text-olive-50 bg-olive-700 px-3 py-1 rounded-full"
              >
                <Tag className="w-5 h-5" />
                {tag}
              </a>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 text-olive-300">
          <Calendar className="w-5 h-5" />
          <span className="font-mono">{post[0].date}</span>
          <div />
          <Clock className="w-5 h-5" />
          <span>
            {post[0].readTime || 1} {"min read"}
          </span>
        </div>
      </header>
      <Image
        src={urlForImage(post[0].image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={post[0].title}
        className="w-full object-cover rounded-lg shadow-lg border-2 border-olive-50"
      />
      <article className="prose prose-invert md:prose-lg p-4 bg-gray-600 rounded-lg">
        <PortableText
          value={post[0].content}
          components={portableTextComponents}
        />
      </article>
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
    tags,
    content,
    'readTime': round(length(pt::text(content)) / 900 )
  }`;

  const posts = await client.fetch(query, {
    slug,
    next: { revalidate: 3600 },
  });
  return posts;
}

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value).fit("max").auto("format").url()}
      alt=""
      width={width}
      height={height}
      loading="lazy"
      className="rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}
