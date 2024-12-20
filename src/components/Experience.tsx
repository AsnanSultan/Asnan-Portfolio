import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "LetZyno LLC",
    position: "Flutter Developer",
    period: "March 2024 - Present",
    projects: ["Barre Studio", "Deen Minder"]
  },
  {
    company: "DigiXValley LLC",
    position: "Flutter Developer",
    period: "August 2022 - February 2024",
    projects: ["Foodage", "TakeHair", "Pickleball Manager"]
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-8 animate-fade-in-left"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-blue-500/30"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
                <h3 className="text-xl font-bold text-blue-500">{exp.company}</h3>
                <p className="text-gray-300 mt-1">{exp.position}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                <div className="mt-4">
                  <p className="text-gray-300 font-semibold">Key Projects:</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    {exp.projects.map(project => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}