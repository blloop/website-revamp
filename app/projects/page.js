import { client } from "@/sanity/lib/client";
import Container from "../components/Container";
import ProjectCard from "../components/Project";

export const revalidate = 3600; // revalidate at most every hour

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Container className="flex flex-col gap-8">
      <div>
        {/* TODO: Add option to sort by date */}
        <p className="text-4xl">My Projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
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
    image
  }`;

  const projects = await client.fetch(query);
  return projects;
}
