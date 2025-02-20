import { client } from "/sanity/lib/client";
import Container from "@/components/Container";
import ProjectCard from "@/components/Project";
import { filterByTag, orderByDate } from "@/utils";
import { Tag, X } from "lucide-react";

export const metadata = {
  title: "Bill Yu - Projects",
  description: "Check out my cool projects!",
};

export default async function Page({ searchParams }) {
  const projects = await getProjects();

  return (
    <Container>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-4xl font-bold">My Projects</p>
        <p className="text-lg text-olive-300">Bringing Ideas to Life</p>
        <span
          className={searchParams["tag"] ? "flex items-center gap-1" : "hidden"}
        >
          <p>Filter:</p>
          <p className="inline-flex items-center gap-2 bg-olive-700 px-3 py-1 rounded-full">
            <Tag className="w-5 h-5" />
            {searchParams[Object.keys(searchParams)[0]]}
          </p>
          <a href="/projects">
            <X className="text-olive-50 md:hover:text-olive-300 transition-colors" />
          </a>
        </span>
      </div>
      <hr className="text-olive-300 h-4" />
      <div className="space-y-12 pb-4">
        {orderByDate(filterByTag(projects, searchParams["tag"])).map(
          (project, index) => (
            <ProjectCard project={project} key={index} index={index} />
          ),
        )}
      </div>
    </Container>
  );
}

async function getProjects() {
  const query = `*[_type == 'project'] | order(date desc) {
    title,
    description,
    date,
    'slug':slug.current,
    tags,
    image
  }`;

  const projects = await client.fetch(query, { next: { revalidate: 84600 } });
  return projects;
}
