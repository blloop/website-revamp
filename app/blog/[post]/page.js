import { client } from "/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export default async function Page({ params }) {
  const post = await getBlogPost(params.post);

  return (
    <Container className="!max-w-3xl text-left">
      <Link
        href="/blog"
        className="w-fit inline-flex items-center text-[#859F3D] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>
      <header className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">{post[0].title}</h1>
        <p className="font-medium text-lg">{post[0].description}</p>
        <div className="flex text-olive-300">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{post[0].date}</span>
        </div>
      </header>
      <Image
        src={urlForImage(post[0].image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={post[0].title}
        className="w-full object-cover rounded-lg shadow-lg border-2 border-olive-300"
      />
      <article className="prose prose-invert md:prose-lg mx-auto">
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
    content
  }`;

  const posts = await client.fetch(query, {
    slug,
    next: { revalidate: 84600 },
  });
  return posts;
}

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value).fit("max").auto("format").url()}
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
