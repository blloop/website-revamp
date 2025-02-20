import { client } from "/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export async function generateMetadata({ params }) {
  const project = await getProject(params.project);

  if (!project) {
    return {
      title: "404 - Blog not found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: "Bill Yu - " + project[0].title,
    description: project[0].description,
  };
}

export default async function Page({ params }) {
  const project = await getProject(params.project);

  return (
    <Container className="!max-w-3xl text-left">
      <Link
        href="/projects"
        className="w-fit inline-flex items-center text-olive-300 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>
      <header className="flex flex-col gap-4 sm:gap-2">
        <h1 className="font-semibold text-4xl">{project[0].title}</h1>
        <p className="font-medium text-lg">{project[0].description}</p>
        {project[0].tags && (
          <div className="flex items-center gap-2 flex-wrap">
            {project[0].tags.map((tag, index) => (
              <a
                key={index}
                href={`/projects?tag=${tag}`}
                className="inline-flex items-center gap-2 bg-olive-700 px-3 py-1 rounded-full"
              >
                <Tag className="w-5 h-5" />
                {tag}
              </a>
            ))}
          </div>
        )}
        <div className="flex text-olive-300">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="font-mono">{project[0].date}</span>
        </div>
      </header>
      <div className="relative w-full mb-4">
        <div className="absolute -z-10 top-4 left-4 w-full h-full bg-olive-300 rounded-lg"></div>
        <Image
          src={urlForImage(project[0].image)
            .auto("format")
            .size(1920, 1080)
            .url()}
          width={1920}
          height={1080}
          alt={project[0].title}
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <span className="flex items-end gap-1 flex-wrap">
        <p>See it in action:</p>
        <a target="_blank" className="underline text-lg" href={project[0].link}>
          {project[0].link}
        </a>
      </span>
      <hr className="border-olive-300" />
      <article className="prose prose-invert md:prose-lg text-olive-50">
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
    tags,
    link,
    image,
    content
  }`;

  const projects = await client.fetch(query, {
    slug,
    next: { revalidate: 3600 },
  });
  return projects;
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
