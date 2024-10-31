import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Container from "../../components/Container";
import DatePill from "../../components/DatePill";

export const revalidate = 3600; // revalidate at most every hour

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export default async function Project({ params }) {
  const project = await getProject(params.project);

  return (
    <Container>
      <div className="mx-auto max-w-prose space-y-8">
        <ProjectHeader project={project[0]} />
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
      </div>
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

  const projects = await client.fetch(query, { slug });
  return projects;
}

function ProjectHeader({ project }) {
  return (
    <header className="flex flex-col gap-4 items-center">
      <h1 className="font-semibold text-4xl">{project.title}</h1>
      <p className="font-medium text-primary-700 text-lg">
        {project.description}
      </p>
      <DatePill date={project.date} />
    </header>
  );
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
