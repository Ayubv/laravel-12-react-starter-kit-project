import React from 'react';
import {
  Code,
  Smartphone,
  Palette,
  Server,
  Search,
  LifeBuoy,
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description:
      'We build scalable and robust web applications tailored to your business needs.',
    icon: <Code className="w-10 h-10 text-[#4A60A1]" />,
  },
  {
    title: 'UI/UX Design',
    description:
      'Crafting beautiful, user-centered interfaces that are both functional and aesthetic.',
    icon: <Palette className="w-10 h-10 text-[#4A60A1]" />,
  },
  {
    title: 'API Development',
    description:
      'Developing secure and efficient APIs to connect your systems and scale integrations.',
    icon: <Server className="w-10 h-10 text-[#4A60A1]" />,
  },
  {
    title: 'Wordpress Development',
    description:
      'Creating fast and responsive Wordpress platforms.',
    icon: <Smartphone className="w-10 h-10 text-[#4A60A1]" />,
  },
  {
    title: 'SEO Optimization',
    description:
      'Boost your website visibility and rankings with our strategic SEO solutions.',
    icon: <Search className="w-10 h-10 text-[#4A60A1]" />,
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support and maintenance to keep your digital assets secure.',
    icon: <LifeBuoy className="w-10 h-10 text-[#4A60A1]" />,
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-[#F0F4FF] py-20 px-6  mb-5">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1B1C57] mb-4">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">
            Our Services
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We offer a wide range of services to meet your digital needs with creativity and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       {services.map((service, index) => (
  <div
    key={index}
    className={`wow animate__animated animate__fadeInUp bg-white rounded-2xl shadow-md p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl group`}
    data-wow-delay={`${index * 0.2}s`} // Optional staggered effect
  >
    <div className="flex justify-center items-center mb-4">
      <div className="bg-[#E8ECFA] p-4 rounded-full transition-all duration-300 group-hover:scale-110">
        {service.icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-[#1B1C57] mb-2">
      {service.title}
    </h3>
    <p className="text-gray-600 text-sm">{service.description}</p>
  </div>
))}

      </div>
    </section>
  );
};

export default Service;
