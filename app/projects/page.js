import { client } from "/sanity/lib/client";
import Container from "@/components/Container";
import ProjectCard from "@/components/Project";

export const metadata = {
  title: "Bill Yu | Project",
  description: "Check out my cool projects!",
};

export default async function Page() {
  const projects = await getProjects();

  return (
    <Container>
      <div className="flex flex-col gap-2 text-center">
        <p className="text-4xl font-bold">My Projects</p>
        <p className="text-lg text-olive-300">Bringing Ideas to Life</p>
      </div>
      <hr className="text-olive-300 h-4" />
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
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
    tags,
    image
  }`;

  const projects = await client.fetch(query, { next: { revalidate: 84600 } });
  return projects;
}
