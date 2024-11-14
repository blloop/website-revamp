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
      <div>
        {/* TODO: Add option to sort by date */}
        <p className="text-4xl font-bold">Projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
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

  const projects = await client.fetch(query, { next: { revalidate: 84600 } });
  return projects;
}
