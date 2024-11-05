"use client";

import { useState } from "react";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "TailwindCSS", level: 85 },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="py-20 bg-[#1A1A19]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skillset</h2>
        <p className="text-center mb-8">
          I specialize in a variety of front-end technologies, always striving
          to stay up-to-date with the latest trends and best practices in web
          development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mb-4"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-4 bg-[#31511E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#859F3D] transition-all rounded-full duration-300 ease-in-out"
                  style={{
                    width: `${skill.level}%`,
                    transform:
                      hoveredSkill === index ? "scaleY(1.2)" : "scaleY(1)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
