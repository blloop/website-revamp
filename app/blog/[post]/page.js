import { client } from "/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Container from "@/components/Container";
import DatePill from "@/components/DatePill";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export default async function Page({ params }) {
  const post = await getBlogPost(params.post);

  return (
    <Container className="max-w-prose">
      <header className="flex flex-col gap-4 items-center">
        <h1 className="font-semibold text-4xl">{post[0].title}</h1>
        <p className="font-medium text-primary-700 text-lg">{post[0].description}</p>
        <DatePill date={post[0].date} />
      </header>
      <Image
        src={urlForImage(post[0].image).auto("format").size(1920, 1920).url()}
        width={1920}
        height={1080}
        alt={post[0].title}
        className="h-64 w-128 object-cover rounded-2xl border border-primary-400"
      />
      <hr className="border-primary-900" />
      <article className="prose md:prose-md prose-primary mx-auto">
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
      className="md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}
