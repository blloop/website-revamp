import { Stethoscope, Globe, Tractor } from 'lucide-react'

const highlights = [
  {
    icon: Stethoscope,
    title: 'Medical Education Platform',
    description: "Currently developing a case-based learning platform to transform education for professors and students alike.",
  },
  {
    icon: Globe,
    title: 'Student Organization Website',
    description: 'Initiate site for student organization offering free websites to local businesses through student volunteers.',
  },
  {
    icon: Tractor,
    title: 'BIPOC Urban Farm Website',
    description: 'Piloted a team of developers to create an interactive website for a local urban farm, improving its online presence.',
  },
]

export default function Highlights() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-[#31511E] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <highlight.icon className="w-12 h-12 mb-4 text-[#859F3D]" />
            <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
            <p className="mb-4">{highlight.description}</p>
            <a href="#" className="text-[#859F3D] hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
