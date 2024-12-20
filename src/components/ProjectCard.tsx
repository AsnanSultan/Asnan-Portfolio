import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              iOS <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.android}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              Android <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}