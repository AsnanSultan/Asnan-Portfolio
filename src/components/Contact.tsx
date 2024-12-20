import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Get In Touch</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <a
            href="mailto:asnan.sultan676@gmail.com"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-800/50 transition-all hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <Mail className="w-8 h-8 text-blue-500" />
            <span>Email</span>
          </a>
          <a
            href="tel:+923096417530"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-800/50 transition-all hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Phone className="w-8 h-8 text-blue-500" />
            <span>Phone</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-800/50 transition-all hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Github className="w-8 h-8 text-blue-500" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-800/50 transition-all hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Linkedin className="w-8 h-8 text-blue-500" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}