import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleDot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
 <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-lg">
      <motion.div
        initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
      >
        <CircleDot className="w-8 h-8 text-yellow-500" style={{ color: '#f3c510ff' }}/>
      </motion.div>
    </div>


        {/* Desktop Menu */}
       <nav className="hidden md:flex space-x-6 text-lg">
      {navItems.map((item) => (
        <Link
          key={item}
           href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          className="relative group transition text-white hover:text-yellow-300"
        >
          {item}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 space-y-4 text-lg bg-black/90 shadow-md"
          >
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block text-white hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
