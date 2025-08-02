import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="pt-20">
        <Hero />
        {/* Add other sections like Profile, Projects, etc. */}



       
      </div>
    </div>
  );
};

export default Home;
