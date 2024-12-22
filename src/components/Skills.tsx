import React from 'react';
import { Code, Smartphone, Database, GitBranch } from 'lucide-react';

const skills = [
  { name: 'Flutter & Dart', icon: Smartphone },
  { name: 'Firebase', icon: Database },
  { name: 'GetX State Management', icon: Code },
  { name: 'REST APIs', icon: Code },
  { name: 'Push Notifications', icon: Smartphone },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Video SDK', icon: Code },
  { name: 'Clean Architecture', icon: Code },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition-all hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}