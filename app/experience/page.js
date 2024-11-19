import { client } from "/sanity/lib/client";
import Container from "@/components/Container";
import Experience from "@/components/Experience";

export const metadata = {
  title: "Bill Yu | Experience",
  description: "Learn about my journey",
};

export default async function Page() {
  const experiences = await getExperiences();

  return (
    <Container className="relative">
      <h1 className="text-3xl sm:text-5xl font-bold mt-4 md:mt-8 text-center italic">
        My Journey
      </h1>
      <div className="absolute left-16 md:left-1/2 transform md:-translate-x-1/2 w-1 top-32 bottom-4 md:bottom-8 bg-olive-700" />
      {experiences.map((e, index) => (
        <Experience experience={e} key={index} index={index} />
      ))}
    </Container>
  );
}

async function getExperiences() {
  const query = `*[_type == 'experience'] | order(date desc) {
    title,
    company,
    description,
    date,
    logo
  }`;

  const exps = await client.fetch(query, { next: { revalidate: 84600 } });
  return exps;
}
