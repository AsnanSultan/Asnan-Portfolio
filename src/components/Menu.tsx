import React from 'react';

export const MenuBar = () => {
  return (
    <nav className="fixed w-full bg-gray-800 text-white py-4 px-6 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Home link that scrolls to the top */}
        <a 
          href="#hero" 
          className="text-xl font-bold cursor-pointer hover:text-[#2563EB] transition duration-300"
        >
          Asnan Portfolio
        </a>
        <div className="space-x-6 flex items-center">
          {/* Home Link */}
          <a 
            href="#hero" 
            className="text-white py-2 px-4 rounded-full border-2 border-transparent hover:border-[#2563EB] hover:text-[#2563EB] transition duration-300"
          >
            Home
          </a>
          {/* Skills Link */}
          <a 
            href="#skills" 
            className="text-white py-2 px-4 rounded-full border-2 border-transparent hover:border-[#2563EB] hover:text-[#2563EB] transition duration-300"
          >
            Skills
          </a>
          {/* Projects Link */}
          <a 
            href="#projects" 
            className="text-white py-2 px-4 rounded-full border-2 border-transparent hover:border-[#2563EB] hover:text-[#2563EB] transition duration-300"
          >
            Projects
          </a>
          {/* Experience Link */}
          <a 
            href="#experience" 
            className="text-white py-2 px-4 rounded-full border-2 border-transparent hover:border-[#2563EB] hover:text-[#2563EB] transition duration-300"
          >
            Experience
          </a>
          {/* Contact Link */}
          <a 
            href="#contact" 
            className="text-white py-2 px-4 rounded-full border-2 border-transparent hover:border-[#2563EB] hover:text-[#2563EB] transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
