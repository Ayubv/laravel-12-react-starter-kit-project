import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Hero from './hero-form-modal';

const Home = () => {
  const [showHeroModal, setShowHeroModal] = useState(false);

  return (
    <div id="home">
      <Navbar />
      <div className="pt-20">
        {/* HeroFormModal */}
        <Hero
          isOpen={showHeroModal}
          onClose={() => setShowHeroModal(false)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          onClick={() => setShowHeroModal(true)}
        >
          Open Hero Modal
        </button>

        {/* Add other sections like Profile, Projects, etc. */}
      </div>
    </div>
  );
};

export default Home;
