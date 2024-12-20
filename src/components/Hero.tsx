import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center animate-fade-in">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-title">
                Muhammad Asnan Sultan
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 animate-subtitle">
                Professional App Developer
              </h2>
            </div>
            
            <div className="space-y-3 text-gray-300 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:asnan.sultan676@gmail.com" className="hover:text-blue-500 transition-colors">
                  asnan.sultan676@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+923096417530" className="hover:text-blue-500 transition-colors">
                  +92 (309) 6417530
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>July 27, 2001</span>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-105">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 border border-blue-600 rounded-full hover:bg-blue-600/10 transition-all hover:scale-105">
                View Projects
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800"
                alt="Muhammad Asnan Sultan"
                className="absolute inset-2 object-cover rounded-full ring-4 ring-blue-500/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}