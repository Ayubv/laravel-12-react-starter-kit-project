import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

interface HeroSectionProps {
  hero: {
    title?: string;
    typed_texts?: string[];
    description?: string;
    background_image?: string;
    profile_image?: string;
    button_text?: string;
    button_link?: string;
  };
  onScrollToProfile?: () => void;
}

const HeroSection = ({ hero, onScrollToProfile }: HeroSectionProps) => {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedEl.current && hero.typed_texts?.length) {
      const typed = new Typed(typedEl.current, {
        strings: hero.typed_texts,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true,
      });

      return () => typed.destroy();
    }
  }, [hero.typed_texts]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
  style={{
    backgroundImage: hero.background_image
      ? `url(/storage/${hero.background_image})`
      : "url(/default-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-70 items-center max-w-5xl mx-auto px-6">
        {/* LEFT: Text Content */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {hero.title && (
            <h1 className="text-3xl sm:text-5xl font-bold">
              {hero.title}
            </h1>
          )}

          {hero.typed_texts && (
            <p className="text-lg sm:text-2xl font-medium opacity-90 mb-4">
              <span ref={typedEl}></span>
            </p>
          )}

          {hero.description && (
            <p className="text-base sm:text-lg opacity-80 leading-relaxed max-w-xl">
              {hero.description}
            </p>
          )}

          {hero.button_text && hero.button_link && (
            <motion.a
              href={hero.button_link}
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform transition-transform duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.button_text}
            </motion.a>
          )}

          {onScrollToProfile && (
            <motion.button
              onClick={onScrollToProfile}
              className="block mt-6 underline hover:text-blue-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Profile ↓
            </motion.button>
          )}
        </motion.div>

        {/* RIGHT: Profile Image */}
        {hero.profile_image && (
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={`/storage/${hero.profile_image}`}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </motion.div>
        )}
      </div>

      {/* Decorative floating shapes (optional) */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
