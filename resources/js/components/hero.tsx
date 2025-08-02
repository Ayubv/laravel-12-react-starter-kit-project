import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroImage from '../../../public/images/resume.jpg';
import { motion } from 'framer-motion';

type HeroProps = {
  onScrollToProfile: () => void;
};

const Hero: React.FC<HeroProps> = ({ onScrollToProfile }) => {
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: [
        "Hello, I'm Ayub Ali.",
        "I'm a Full Stack Developer.",
        "I love Laravel + React.",
        "Let's build something great!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="relative w-full py-20 text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    id='profile'>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-800/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="ml-[10%]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span ref={typedElement}></span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate Full Stack Laravel + React Developer, building modern web applications with clean code and beautiful UI.
          </p>
          <button
            onClick={onScrollToProfile}
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            View Profile
          </button>
        </div>

        <div className="flex justify-center">
          <motion.img
            src="/images/ayubxx.jpg"
            alt="Ayub Ali"
            className="w-64 h-64 object-cover rounded-full border-1 border-blue-700 shadow-lg"
            animate={{
              y: [0, -2, 0], // bounce up and down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
