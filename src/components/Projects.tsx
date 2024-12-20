import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}