import React from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'E-commerce Website',
    description: 'A scalable online store with cart, checkout, and admin panel.',
    image: '/images/Ecommerce1.jpg',
    link: 'https://example.com/ecommerce',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal site built with React and Tailwind CSS.',
    image: '/images/portgolio.jpg',
    link: 'https://example.com/portfolio',
  },
  {
    title: 'Admin Dashboard',
    description: 'Role-based dashboard with charts, tables, and filters.',
    image: '/images/admin-dashboard.jpg',
    link: 'https://example.com/dashboard',
  },
];

const Project = () => {
  return (
    <section id="projects" className="bg-[#F0F4FF] py-20 px-6 mb-5">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">
            My Projects
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A curated selection of projects showcasing my design and development work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
   {projects.map((project, index) => (
  <div
    key={index}
    className="wow animate__animated animate__fadeInUp w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
    data-wow-delay={`${index * 0.2}s`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 font-medium hover:underline"
        >
          View Project <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      )}
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Project;
