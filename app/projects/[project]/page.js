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
        className="w-fit inline-flex items-center text-[#859F3D] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>
      <header className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">{project[0].title}</h1>
        <p className="font-medium text-lg">{project[0].description}</p>
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
      <hr className="border-olive-300" />
      <article className="prose prose-invert md:prose-lg mx-auto">
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
