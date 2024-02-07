import { client } from '@/sanity/lib/client';
import Container from '../components/Container';
import ProjectCard from '../components/Project';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Container className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-primary-200'>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
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
  