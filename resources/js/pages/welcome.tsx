import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Service from "@/components/service";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Profile, { UserProfile } from "@/components/profile";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/hero-section";



interface Hero {
  id?: number;
  title?: string;
  typed_texts?: string[];
  description?: string;
  background_image?: string;
  profile_image?: string;
  button_text?: string;
  button_link?: string;
}






type Props = {
  section: string;
};

const Welcome = ({ hero, section }: { hero: Hero; section?: string }) => {
  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  const [isProfileOpen, setProfileOpen] = useState(false);

  const openProfileModal = () => setProfileOpen(true);

  const user: UserProfile = {
    name: "Ayub Ali",
    email: "ayubdd99@gmail.com",
    phone: "01727-932008",
    location: "Bangladesh",
    bio: "Full stack developer passionate about clean code and UI/UX.",
    avatarUrl: "/images/ayubxx.jpg",
  };

  const handleSave = (updatedUser: UserProfile) => {
    console.log("Saved user:", updatedUser);
    setProfileOpen(false);
  };

  // Dummy hero data (this should come from backend ideally)


  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="hero-section" className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700">
        <HeroSection hero={hero} onScrollToProfile={openProfileModal} />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="services" className="min-h-screen">
        <Service />
      </section>
      <section id="projects" className="min-h-screen">
        <Project />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>

      <Footer />

      {/* Profile Modal */}
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
