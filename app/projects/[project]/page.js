import { client } from "/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Container from "@/components/Container";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export default async function Page({ params }) {
  const project = await getProject(params.project);

  return (
    <Container className="max-w-prose">
      <header className="flex flex-col gap-4 items-center">
        <h1 className="font-semibold text-4xl">{project[0].title}</h1>
        <p className="font-medium text-primary-700 text-lg">
          {project.description}
        </p>
      </header>
      <Image
        src={urlForImage(project[0].image)
          .auto("format")
          .size(1920, 1920)
          .url()}
        width={1920}
        height={1080}
        alt={project[0].title}
        className="h-64 w-128 object-cover rounded-2xl border border-primary-400"
      />
      <hr className="border-primary-900" />
      <article className="prose md:prose-md prose-primary mx-auto">
        <PortableText
          value={project[0].content}
          components={portableTextComponents}
        />
      </article>
    </Container>
  );
}

async function getProject(slug) {
  const query = `*[_type == 'project' && slug.current == $slug] {
    title,
    description,
    date,
    'slug': slug.current,
    image,
    content
  }`;

  const projects = await client.fetch(query, {
    slug,
    next: { revalidate: 84600 },
  });
  return projects;
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
