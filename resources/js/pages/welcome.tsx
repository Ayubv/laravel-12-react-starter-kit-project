import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import About from '@/components/about';
import Service from '../components/service';
import Project from '@/components/project';
import Contact from '@/components/contact';
import Profile, { UserProfile } from '@/components/profile';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {
  section: string;
};


const Welcome = ({ section }: Props) => {
  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

const [isProfileOpen, setProfileOpen] = useState(false);

  const openProfileModal = () => setProfileOpen(true);



  const user: UserProfile = {
    name: 'Ayub Ali',
    email: 'ayubdd99@gmail.com',
    phone: '01727-932008',
    location: 'Bangladesh',
    bio: 'Full stack developer passionate about clean code and UI/UX.',
    avatarUrl: '/images/ayubxx.jpg',
  };

  const handleSave = (updatedUser: UserProfile) => {
    console.log('Saved user:', updatedUser);
    setProfileOpen(false); // close modal on save
  };


//   const scrollToProfile = () => {
//   const el = document.getElementById('profile');
//   if (el) el.scrollIntoView({ behavior: 'smooth' });
// }

  return (
    <>
       <>
      <Navbar />
      <section id="home"><Hero onScrollToProfile={openProfileModal}/></section>
      <section id="about"><About /></section>
      <section id="services"><Service /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
   


      <Footer />


    </>

      {/* Modal overlay and dialog */}
<AnimatePresence>
  {isProfileOpen && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setProfileOpen(false)}
    >
      <motion.div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 mx-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setProfileOpen(false)}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Profile Form */}
        <Profile user={user} onSave={handleSave} />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
};

export default Welcome;

