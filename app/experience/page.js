import { client } from "/sanity/lib/client";
import Container from "@/components/Container";
import Experience from '@/components/Experience';

export default async function Page() {
  const experiences = await getExperiences();

  return (
    <Container className="relative">
      <h1 className="text-3xl sm:text-5xl font-bold mt-4 md:mt-8 text-center">My Journey</h1>
      <div className="absolute left-16 md:left-1/2 transform md:-translate-x-1/2 w-1 top-32 bottom-4 md:bottom-8 bg-olive-700" />
      {experiences.map((e, i) => (
        <>
          <Experience key={i} experience={e} index={i} />
          <Experience key={-1 - i} experience={e} index={i + 1} />
        </>
      ))}
    </Container>
  )
}

async function getExperiences() {
  const query = `*[_type == 'experience'] | order(date desc) {
    title,
    company,
    description,
    date,
    image
  }`;

  const experiences = await client.fetch(query);
  return experiences;
}
